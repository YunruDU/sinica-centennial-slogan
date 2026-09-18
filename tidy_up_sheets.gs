/**
 * 【DEMO 副本專用】試算表整理腳本
 *
 * 目的：讓「全站與主視覺」跟「各區塊設定」這兩個分頁更好讀、更容易正確
 * 填寫——把「全站與主視覺」依功能分組加上顏色區隔，並把「全站與主視覺」
 * 跟「各區塊設定」兩個分頁裡「是/否」類欄位換成下拉選單、「順序」類欄位
 * 限制只能填數字，減少打錯字（例如打成「Y」、「有」）導致設定失效的機會。
 *
 * 這支腳本會【讀取現有內容→清空→依分組重新寫入】「全站與主視覺」，
 * 執行前建議先手動複製一份備份（右鍵分頁名稱 →「複製」）。
 * 「各區塊設定」則只加格式/資料驗證，不會清空重寫，內容不受影響。
 *
 * 使用方式：
 * 1. 開啟這份 DEMO 副本試算表 → 擴充功能 → Apps Script
 * 2. 貼上這份程式碼
 * 3. 函式選單選 tidyUpSheets，執行（第一次會跳授權視窗，同意即可）
 */

function tidyUpSheets() {
  tidySiteSettings_();
  tidySectionSettings_();
  Logger.log("整理完成。");
}

// ========================================================
// 1. 全站與主視覺：依功能分組、加顏色分隔、加下拉選單防呆
// ========================================================
function tidySiteSettings_() {
  const SHEET_NAME = "全站與主視覺";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('找不到分頁「' + SHEET_NAME + '」。');

  const values = sheet.getDataRange().getValues();
  const dataByKey = {};
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const key = row[0];
    if (!key) continue;
    dataByKey[key] = { desc: row[1] || "", zh: row[2] || "", en: row[3] || "", note: row[4] || "" };
  }

  // 「是否顯示」類欄位判斷：Key 含 "_show"（例如 xxx_show 或 xxx_show_yyy），或遮蔽欄位
  function isYesNoField(key) {
    return /_show(_|$)/.test(key) || key === "shortlist_mask_sso" || key === "winners_mask_sso";
  }

  // 各區塊的標題/說明/順序/顯示開關已搬到「各區塊設定」分頁，這裡不用再列出
  const OBSOLETE_KEYS = {
    section_highlights_title: 1, section_highlights_desc: 1, section_highlights_order: 1,
    section_timeline_title: 1, section_timeline_desc: 1, section_timeline_order: 1,
    section_rules_order: 1,
    section_faq_title: 1, section_faq_desc: 1, section_faq_order: 1,
    section_shortlist_title: 1, section_shortlist_desc: 1, section_shortlist_show: 1, section_shortlist_order: 1,
    section_winners_title: 1, section_winners_desc: 1, section_winners_show: 1, section_winners_order: 1
  };

  const PLAN = [
    { group: "全站基本設定", keys: ["site_title", "brand_title", "brand_subtitle"] },
    { group: "導覽選單文字", keys: [
      "nav_hero", "nav_highlights", "nav_timeline", "nav_rules", "nav_faq", "nav_shortlist", "nav_winners", "nav_submit_btn"
    ] },
    { group: "主視覺 Hero 區塊與投稿表單", keys: [
      "hero_desktop_img", "hero_mobile_logo", "hero_mobile_campus",
      "hero_main_title", "hero_sub_title", "hero_quote",
      "hero_btn_submit", "hero_btn_rules", "submit_form_url"
    ] },
    { group: "入圍名單公告：個別欄位顯示開關", keys: [
      "shortlist_show_dept", "shortlist_show_name", "shortlist_show_sso", "shortlist_mask_sso",
      "shortlist_show_slogan_zh", "shortlist_show_slogan_en", "shortlist_show_concept"
    ] },
    { group: "得獎公告：個別欄位顯示開關", keys: [
      "winners_show_award", "winners_show_dept", "winners_show_name", "winners_show_sso", "winners_mask_sso",
      "winners_show_slogan_zh", "winners_show_slogan_en", "winners_show_concept"
    ] },
    { group: "徵選辦法彈窗", keys: ["dialog_title", "dialog_notice", "dialog_close_btn", "dialog_submit_btn"] },
    { group: "頁尾與聯絡資訊", keys: [
      "footer_brand_title", "footer_brand_en", "footer_desc",
      "footer_quicklinks_title", "footer_contact_title",
      "organizer_name", "contact_email", "contact_phone",
      "footer_address", "footer_official_link_text", "footer_copyright"
    ] }
  ];

  const HEADER_ROW = ["設定項目代碼 (Key)", "項目說明 (Description)", "中文內容 (Content_ZH)", "英文內容 (Content_EN)", "備註 / 填寫範例"];
  const outputRows = [HEADER_ROW];
  const groupHeaderRowIndexes = [];
  const yesNoRowIndexes = [];
  const usedKeys = Object.assign({}, OBSOLETE_KEYS); // 標記已過時的 Key，最後不留在「其他設定」

  PLAN.forEach(section => {
    groupHeaderRowIndexes.push(outputRows.length);
    outputRows.push([section.group, "", "", "", ""]);

    section.keys.forEach(key => {
      const data = dataByKey[key];
      if (!data) return;
      usedKeys[key] = true;
      outputRows.push([key, data.desc, data.zh, data.en, data.note]);
      const rowIdx = outputRows.length - 1;
      if (isYesNoField(key)) yesNoRowIndexes.push(rowIdx);
    });
  });

  // 保險機制：任何沒被分類、也不是已過時的 Key，集中放進「其他設定」，不會憑空消失
  const leftoverKeys = Object.keys(dataByKey).filter(k => !usedKeys[k]);
  if (leftoverKeys.length > 0) {
    groupHeaderRowIndexes.push(outputRows.length);
    outputRows.push(["其他設定（尚未分類，可自行搬到合適分組）", "", "", "", ""]);
    leftoverKeys.forEach(key => {
      const data = dataByKey[key];
      outputRows.push([key, data.desc, data.zh, data.en, data.note]);
      const rowIdx = outputRows.length - 1;
      if (isYesNoField(key)) yesNoRowIndexes.push(rowIdx);
    });
  }

  sheet.clear();
  const numCols = HEADER_ROW.length;
  sheet.getRange(1, 1, outputRows.length, numCols).setValues(outputRows);

  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setBackground("#2c221e").setFontColor("#ffffff").setFontWeight("bold").setHorizontalAlignment("center");
  sheet.setFrozenRows(1);

  groupHeaderRowIndexes.forEach(idx => {
    const rowNum = idx + 1;
    const range = sheet.getRange(rowNum, 1, 1, numCols);
    range.merge();
    range.setBackground("#c89547").setFontColor("#2c221e").setFontWeight("bold").setFontSize(11);
  });

  const yesNoRule = SpreadsheetApp.newDataValidation().requireValueInList(["是", "否"], true).setAllowInvalid(false).build();
  yesNoRowIndexes.forEach(idx => {
    sheet.getRange(idx + 1, 3).setDataValidation(yesNoRule);
  });

  sheet.setColumnWidth(1, 220);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 320);
  sheet.setColumnWidth(4, 360);
  sheet.setColumnWidth(5, 280);
  sheet.getRange(2, 1, outputRows.length - 1, numCols).setWrap(true).setVerticalAlignment("top");
}

// ========================================================
// 2. 各區塊設定：加下拉選單/數字防呆（不清空重寫，只加格式與資料驗證）
// ========================================================
function tidySectionSettings_() {
  const SHEET_NAME = "各區塊設定";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('找不到分頁「' + SHEET_NAME + '」。');

  // 欄位順序固定為：A區塊代碼 B中文標題 C英文標題 D中文說明 E英文說明 F顯示順序 G是否顯示 H備註
  const HEADER_ROW = ["區塊代碼 (勿改)", "中文標題", "英文標題", "中文說明", "英文說明", "顯示順序", "是否顯示", "備註"];
  const DATA_ROWS = [
    ["highlights", "最新消息", "Latest News",
      "百年院慶標語徵選活動相關最新公告與更新，請隨時留意。",
      "Latest announcements and updates about the centennial slogan campaign.", 1, "是", ""],
    ["timeline", "活動推展重要時程", "Campaign Timeline",
      "標語徵選各階段暫定時程規劃，敬請同仁把握投稿期間。",
      "Key milestones and tentative schedule. Submit your entries before the deadline!", 2, "是", ""],
    ["rules", "", "", "", "", 3, "是", "無獨立區塊，僅控制「詳細辦法」在導覽列的排序"],
    ["faq", "常見問答", "Frequently Asked Questions",
      "關於百年院慶標語徵選活動之常見問題整理",
      "Answers to common questions regarding the slogan campaign.", 4, "是", ""],
    ["shortlist", "入圍名單公告", "Shortlist Announcement",
      "初選入圍作品名單，正式得獎結果請以官方公告為準。",
      "List of shortlisted entries. Official winners will follow a separate announcement.", 5, "是", ""],
    ["winners", "得獎公告", "Winners Announcement",
      "恭喜以下獲獎同仁，感謝所有參與投稿的同仁共同銘刻百年學術榮光。",
      "Congratulations to the winners, and thank you to everyone who submitted an entry.", 6, "否", ""]
  ];

  // 若分頁目前是空的（不論原因），先寫回正確的預設內容，跟網站程式碼裡的 fallback 保持一致
  if (sheet.getLastRow() < 1 || sheet.getRange(1, 1).getValue() !== HEADER_ROW[0]) {
    sheet.clear();
    sheet.getRange(1, 1, 1, HEADER_ROW.length).setValues([HEADER_ROW]);
    sheet.getRange(2, 1, DATA_ROWS.length, HEADER_ROW.length).setValues(DATA_ROWS);
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  const yesNoRule = SpreadsheetApp.newDataValidation().requireValueInList(["是", "否"], true).setAllowInvalid(false).build();
  sheet.getRange(2, 7, lastRow - 1, 1).setDataValidation(yesNoRule);

  const numberRule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 99).setAllowInvalid(false).build();
  sheet.getRange(2, 6, lastRow - 1, 1).setDataValidation(numberRule);

  sheet.setFrozenRows(1);
  const headerRange = sheet.getRange(1, 1, 1, 8);
  headerRange.setBackground("#8a1724").setFontColor("#ffffff").setFontWeight("bold").setHorizontalAlignment("center");
  sheet.getRange(2, 1, lastRow - 1, 8).setWrap(true).setVerticalAlignment("top");
}
