/**
 * 新增「投稿前登入提醒視窗」相關設定列 — 加到「全站與主視覺」分頁最後面
 *
 * 只會新增缺少的項目，已存在的 Key 不會被覆蓋，可以放心重複執行。
 *
 * 使用方式：
 * 1. 開啟正式試算表 → 擴充功能 → Apps Script
 * 2. 貼上這份程式碼（另開新檔案，或加在既有程式碼最後面）
 * 3. 函式選單選 addLoginNoticeSettings，執行
 * 4. 回到「全站與主視覺」分頁：
 *    - login_notice_show 填「是」= 點我要投稿會先跳提醒視窗；填「否」= 不跳，直接前往表單
 *    - 其他 4 列可以修改視窗上的文字（中文／英文欄位）
 */
function addLoginNoticeSettings() {
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
    ["投稿前登入提醒視窗", "", "", "", ""],
    ["login_notice_show", "點「我要投稿」時是否先跳出登入提醒視窗", "是", "是", "填「是」跳出提醒，填「否」直接前往表單"],
    ["login_notice_title", "提醒視窗標題", "投稿前請先確認", "Before You Submit", ""],
    ["login_notice_body", "提醒視窗說明文字", "請使用院內 AS.EDU.TW 信箱登入 Google 帳號後，再填寫投稿表單。", "Please sign in to Google with your institute AS.EDU.TW email before filling out the submission form.", ""],
    ["login_notice_confirm", "提醒視窗「確定」按鈕文字", "確定，前往投稿", "OK, Go to Form", "按下後才會開啟投稿表單"],
    ["login_notice_cancel", "提醒視窗「取消」按鈕文字", "取消", "Cancel", ""]
  ];

  const rowsToAdd = NEW_ROWS.filter(row => !existingKeys[row[0]]);
  if (rowsToAdd.length === 0) {
    Logger.log("沒有需要新增的項目，全部都已經存在了。");
    return;
  }

  const startRow = sheet.getLastRow() + 1;
  sheet.getRange(startRow, 1, rowsToAdd.length, 5).setValues(rowsToAdd);

  rowsToAdd.forEach((row, idx) => {
    if (row[1] === "" && row[2] === "" && row[3] === "") {
      const range = sheet.getRange(startRow + idx, 1, 1, 5);
      range.merge();
      range.setBackground("#c89547").setFontColor("#2c221e").setFontWeight("bold").setFontSize(11);
    }
  });

  const yesNoRule = SpreadsheetApp.newDataValidation().requireValueInList(["是", "否"], true).setAllowInvalid(false).build();
  rowsToAdd.forEach((row, idx) => {
    if (row[0] === "login_notice_show") sheet.getRange(startRow + idx, 3).setDataValidation(yesNoRule);
  });

  Logger.log("新增完成，共加入 " + rowsToAdd.length + " 列。");
}
