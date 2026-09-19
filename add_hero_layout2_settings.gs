/**
 * 新增「主視覺版面二」相關設定列 — 加到「全站與主視覺」分頁
 *
 * 背景：主視覺新增了第二種版面（深色院區背景＋倒數計時器樣式，類似示意站設計），
 * 這支腳本負責把控制這組版面的新設定項目，加進「全站與主視覺」分頁最後面。
 * 只會「新增」缺少的項目，已經存在的 Key 不會被覆蓋或重複新增，可以放心重複執行。
 *
 * 使用方式：
 * 1. 開啟正式試算表 → 擴充功能 → Apps Script
 * 2. 貼上這份程式碼（可另開新檔案，或加在既有程式碼最後面）
 * 3. 函式選單選 addHeroLayout2Settings，執行
 * 4. 回到「全站與主視覺」分頁，找到新增的列，把 hero_layout 改成 "2" 就會切換
 *    成新版面（改回 "1" 就會切回原本版面）
 */
function addHeroLayout2Settings() {
  const SHEET_NAME = "全站與主視覺";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('找不到分頁「' + SHEET_NAME + '」。');

  const values = sheet.getDataRange().getValues();
  const existingKeys = {};
  for (let i = 1; i < values.length; i++) {
    if (values[i][0]) existingKeys[values[i][0]] = true;
  }

  // [Key, 說明, 中文內容, 英文內容, 備註]
  const NEW_ROWS = [
    ["主視覺版面二設定", "", "", "", ""],
    ["hero_layout", "主視覺要用哪一種版面：填 1 = 原本版面，填 2 = 深色背景＋倒數計時器版面", "1", "1", "只需要填中文欄位，填 1 或 2"],
    ["hero2_bg_type", "版面二背景類型：image = 圖片，video = YouTube 影片", "image", "image", "填 image 或 video"],
    ["hero2_bg_image", "版面二背景圖片 URL（hero2_bg_type 填 image 時使用）", "assets/campus-aerial.jpg", "assets/campus-aerial.jpg", "可填本機路徑或外部圖片 URL"],
    ["hero2_bg_youtube_id", "版面二背景 YouTube 影片 ID（hero2_bg_type 填 video 時使用）", "", "", "填 YouTube 網址 watch?v= 後面那一串英數字，例如 dQw4w9WgXcQ"],
    ["hero2_badge_text", "版面二頂部金色小標籤文字", "中央研究院 百年院慶", "ACADEMIA SINICA 100TH ANNIVERSARY", ""],
    ["hero2_title", "版面二大標題（要換行請用 Alt+Enter）", "百年中研\n啟航新世紀", "A Century of Sinica\nSailing into a New Era", "支援換行"],
    ["hero2_subtitle", "版面二大標題下方說明文字", "以一句話，凝鍊百年學術精神，開展下一個世紀。", "In a single phrase, embody a century of scholarship and inspire the future.", ""],
    ["hero2_countdown_label", "版面二倒數計時器上方文字", "距離投稿倒數", "Countdown to Submission Deadline", "例如：距離投稿倒數／距離投票倒數／中研百年倒數"],
    ["hero2_countdown_target", "版面二倒數計時器目標日期時間", "2026-10-31 23:59:59", "2026-10-31 23:59:59", "格式：YYYY-MM-DD HH:MM:SS，只需要填中文欄位"],
    ["hero2_countdown_caption", "版面二倒數計時器下方小字說明", "倒數目標：2026 年 10 月 31 日 23:59 · 投稿截止", "Deadline: Oct 31, 2026, 23:59", ""],
    ["hero2_btn_submit_text", "版面二主按鈕文字（點擊後動作跟「我要投稿」一樣，前往投稿表單）", "認識百年系列活動", "Discover the Centennial Series", ""],
    ["hero2_btn_rules_text", "版面二次按鈕文字（點擊後動作跟「徵選辦法」一樣，開啟徵選辦法彈窗）", "走進百年大事紀", "Explore the Centennial Timeline", ""]
  ];

  const rowsToAdd = NEW_ROWS.filter(row => !existingKeys[row[0]]);
  if (rowsToAdd.length === 0) {
    Logger.log("沒有需要新增的項目，全部都已經存在了。");
    return;
  }

  const startRow = sheet.getLastRow() + 1;
  sheet.getRange(startRow, 1, rowsToAdd.length, 5).setValues(rowsToAdd);

  // 群組標題列套用跟其他分組一樣的金色樣式
  rowsToAdd.forEach((row, idx) => {
    if (row[1] === "" && row[2] === "" && row[3] === "") {
      const rowNum = startRow + idx;
      const range = sheet.getRange(rowNum, 1, 1, 5);
      range.merge();
      range.setBackground("#c89547").setFontColor("#2c221e").setFontWeight("bold").setFontSize(11);
    }
  });

  Logger.log("新增完成，共加入 " + rowsToAdd.length + " 列。");
}
