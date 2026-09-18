/**
 * 「全站與主視覺」清理腳本 — 移除已搬到「各區塊設定」分頁的舊項目
 *
 * 背景：各區塊的標題／說明／順序／顯示開關，已經搬到新的「各區塊設定」
 * 分頁改用「一列一個區塊」的格式呈現（同一列就能調整該區塊的全部設定）。
 * 這支腳本負責把「全站與主視覺」裡對應的舊項目（仍是分散的獨立列）移除，
 * 避免新舊兩份重複、不知道以哪個為準。
 *
 * 使用前建議先備份：右鍵點「全站與主視覺」分頁名稱 →「複製」。
 *
 * 使用方式：
 * 1. 開啟這份試算表 → 擴充功能 → Apps Script
 * 2. 貼上這份程式碼（可另開新檔案，或加在既有程式碼最後面）
 * 3. 函式選單選 cleanupOldSectionSettings，執行
 * 4. 回到「全站與主視覺」分頁確認這 18 個項目已經不見了，且其餘內容都還在
 */

function cleanupOldSectionSettings() {
  const SHEET_NAME = "全站與主視覺";
  const KEYS_TO_REMOVE = [
    "section_highlights_title", "section_highlights_desc", "section_highlights_order",
    "section_timeline_title", "section_timeline_desc", "section_timeline_order",
    "section_rules_order",
    "section_faq_title", "section_faq_desc", "section_faq_order",
    "section_shortlist_title", "section_shortlist_desc", "section_shortlist_show", "section_shortlist_order",
    "section_winners_title", "section_winners_desc", "section_winners_show", "section_winners_order"
  ];
  const removeSet = {};
  KEYS_TO_REMOVE.forEach(k => { removeSet[k] = true; });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('找不到分頁「' + SHEET_NAME + '」。');

  const values = sheet.getDataRange().getValues();
  const kept = [values[0]]; // 保留標題列
  let removedCount = 0;

  for (let i = 1; i < values.length; i++) {
    const key = values[i][0];
    if (removeSet[key]) {
      removedCount++;
    } else {
      kept.push(values[i]);
    }
  }

  sheet.clear();
  sheet.getRange(1, 1, kept.length, kept[0].length).setValues(kept);

  const headerRange = sheet.getRange(1, 1, 1, kept[0].length);
  headerRange.setBackground("#500a11").setFontColor("#ffffff").setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  sheet.setFrozenRows(1);
  sheet.getRange(2, 1, kept.length - 1, kept[0].length).setWrap(true).setVerticalAlignment("top");

  Logger.log("清理完成，移除 " + removedCount + " 列，剩餘 " + (kept.length - 1) + " 列資料。");
}
