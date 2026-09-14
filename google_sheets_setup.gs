/**
 * 中央研究院百周年標語徵選網 - Google 試算表自動化建立與初始化腳本
 * 使用方法：
 * 在 Google 試算表中點選「擴充功能」->「Apps Script」，將本程式碼貼上並點擊「執行 (Run)」
 * 即可自動建立 5 個格式優美、色彩典雅、附帶說明與中英資料的工作表。
 */

function setupCentennialSloganSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. 全站與主視覺
  createOrUpdateSheet(ss, "全站與主視覺", [
    ["設定項目代碼 (Key)", "項目說明 (Description)", "中文內容 (Content_ZH)", "英文內容 (Content_EN)", "備註 / 填寫範例"],
    ["site_title", "網頁瀏覽器標籤標題", "中央研究院百周年標語徵選 | 1928 — 2028", "Academia Sinica Centennial Slogan Campaign | 1928 — 2028", "顯示在瀏覽器頁籤的標題"],
    ["brand_title", "導覽列機構主標題", "中央研究院 百周年院慶", "Academia Sinica Centennial", "頂部導覽列左側主字"],
    ["brand_subtitle", "導覽列機構副標題", "1928 — 2028 · CENTENNIAL", "1928 — 2028 · CENTENNIAL", "頂部導覽列副字"],
    ["nav_hero", "導覽項目 1", "活動首頁", "Home", "導覽選單"],
    ["nav_highlights", "導覽項目 2", "徵選重點", "Highlights", "導覽選單"],
    ["nav_timeline", "導覽項目 3", "重要時程", "Timeline", "導覽選單"],
    ["nav_rules", "導覽項目 4", "詳細辦法", "Guidelines", "導覽選單"],
    ["nav_faq", "導覽項目 5", "常見問題", "FAQ", "導覽選單"],
    ["nav_submit_btn", "導覽列投稿按鈕文字", "我要投稿", "Submit Now", "頂部與導覽按鈕"],
    ["submit_form_url", "我要投稿 Google 表單連結", "https://forms.gle/MJkYBRTb5NpWaSAZ6", "https://forms.gle/MJkYBRTb5NpWaSAZ6", "點擊「我要投稿」前往的表單（中英文可不同網址）"],
    ["hero_desktop_img", "桌機主視覺圖片 URL", "assets/hero-desktop.png", "assets/hero-desktop.png", "可填寫本機路徑或外部圖片 URL (1672x806)"],
    ["hero_mobile_logo", "手機版 100 紀念徽飾 URL", "assets/centennial-100.png", "assets/centennial-100.png", "手機版上方紀念標誌"],
    ["hero_mobile_campus", "手機版院區風景圖 URL", "assets/campus-aerial.jpg", "assets/campus-aerial.jpg", "手機版首屏院區風景照片"],
    ["hero_main_title", "主視覺大標題", "中央研究院", "Academia Sinica", "首頁大字"],
    ["hero_sub_title", "主視覺副標題", "百周年標語徵選", "Centennial Slogan Campaign", "首頁副標題"],
    ["hero_quote", "主視覺精神標語句", "以一句話，凝鍊百年學術精神，開展下一個世紀", "In a single phrase, embody a century of scholarship and inspire the future", "標語徵選核心精神"],
    ["hero_btn_submit", "主按鈕文字", "我要投稿", "Submit Now", "首頁主行動按鈕"],
    ["hero_btn_rules", "次按鈕文字", "徵選辦法", "Guidelines", "點擊開啟詳細辦法彈窗"],
    ["cta_banner_title", "頁尾行動呼籲大標", "一句標語，見證世紀學術榮光", "A Slogan to Mark a Century of Scholarship", "頁尾深酒紅呼籲橫條大字"],
    ["cta_banner_desc", "頁尾行動呼籲說明", "歡迎中央研究院全體同仁、學生、校友及關心中研院發展之海內外朋友踴躍投稿，共同銘刻百周年里程碑！", "We warmly invite all colleagues, students, alumni, and friends worldwide to submit slogans and commemorate our centennial!", "頁尾呼籲說明"],
    ["cta_banner_btn", "頁尾投稿按鈕文字", "即刻線上投稿 ›", "Submit Online Now ›", "頁尾按鈕"],
    ["organizer_name", "主辦單位名稱", "中央研究院 秘書處", "Secretariat, Academia Sinica", "頁尾主辦單位"],
    ["contact_email", "聯絡電子信箱", "centennial@gate.sinica.edu.tw", "centennial@gate.sinica.edu.tw", "聯絡信箱"],
    ["contact_phone", "聯絡電話", "02-2789-9400", "+886-2-2789-9400", "聯絡電話"]
  ], [160, 220, 320, 360, 280], "#500a11");

  // 2. 活動重點與獎勵
  createOrUpdateSheet(ss, "活動重點與獎勵", [
    ["順序", "重點標題 (中)", "重點標題 (英)", "副標籤 (中)", "副標籤 (英)", "內容說明 (中)", "內容說明 (英)", "亮點數值 / 獎金", "圖示代碼", "是否顯示"],
    ["1", "百年榮耀·學術傳承", "Century of Honor & Heritage", "1928 — 2028", "1928 — 2028", "回顧一世紀篳路藍縷，以文字淬鍊學術追求與自由探究之精神，開創前瞻未來。", "Reflecting on a century of academic pursuit and free inquiry to forge an inspiring future.", "100 YEARS", "history", "是"],
    ["2", "全民參與·共創經典", "Open to All · Co-Create History", "院內外各界", "Worldwide Participation", "廣邀全院同仁、學術先進、學子及社會大眾踴躍發想，入選作品將成為百年院慶代表標語。", "Inviting all members, scholars, students, and the public to contribute to the official centennial slogan.", "GLOBAL", "users", "是"],
    ["3", "豐厚獎勵·榮譽肯定", "Generous Awards & Recognition", "總獎金高達數萬元", "Prestigious Cash Prizes", "設置首獎、優等獎、佳作及入選獎，頒發高額獎金與中研院百年院慶專屬紀念證書。", "Grand Prize, Excellence Awards, and Merit Awards with cash prizes and official centennial certificates.", "NT$ 30,000", "trophy", "是"]
  ], [60, 180, 240, 130, 180, 320, 360, 140, 100, 90], "#6c0e18");

  // 3. 重要時程
  createOrUpdateSheet(ss, "重要時程", [
    ["順序", "階段名稱 (中)", "階段名稱 (英)", "時程區間 (中)", "時程區間 (英)", "階段說明 (中)", "階段說明 (英)", "狀態標籤 (中)", "狀態標籤 (英)", "是否顯示"],
    ["1", "線上徵件啟動", "Submissions Open", "2026年10月01日", "Oct 01, 2026", "開放線上 Google 表單徵件系統，歡迎全球各界踴躍投件。", "Online submission portal opens. All entries welcomed worldwide.", "進行中", "In Progress", "是"],
    ["2", "徵件截止", "Submissions Deadline", "2026年10月31日 23:59", "Oct 31, 2026 23:59", "截止線上收件，逾期恕不受理。請把握時間送出您的創意！", "Deadline for all online submissions. Late submissions will not be accepted.", "即將截止", "Approaching", "是"],
    ["3", "專業評審遴選", "Judging & Selection", "2026年11月", "November 2026", "由院慶籌備委員會及各領域專家學者組成評審小組進行匿名審查。", "Expert panel evaluates all qualified entries anonymously.", "審查中", "Pending", "是"],
    ["4", "獲選結果公布", "Winners Announced", "2026年12月", "December 2026", "於中研院官網及百年院慶專頁正式揭曉獲選標語與得獎名單。", "Official announcement of winning slogans on Academia Sinica website.", "即將揭曉", "Upcoming", "是"]
  ], [60, 160, 180, 180, 180, 300, 340, 110, 110, 90], "#7a541c");

  // 4. 徵選辦法彈窗
  createOrUpdateSheet(ss, "徵選辦法彈窗", [
    ["順序", "章節名稱 (中)", "章節名稱 (英)", "詳細條文與規範 (中)", "詳細條文與規範 (英)", "是否顯示"],
    ["1", "活動目的", "Objective", "中央研究院即將邁入創院一百周年，為凝聚全院同仁學術精神與傳承使命，特舉辦「百年院慶標語公開徵選活動」，期以簡鍊有力、富深遠意涵之標語，展現中研院學術卓越與開拓下一個世紀之願景。", "Academia Sinica is approaching its centenary. This campaign invites slogans that embody a century of scholarship and inspire our vision for the next century.", "是"],
    ["2", "徵選對象", "Eligibility", "凡中央研究院現職同仁、退休人員、學生、訪問學者、校友，以及關心中研院之國內外各界人士均可報名參加，不限國籍、年齡與身分。", "Open to all current and retired faculty, staff, students, alumni, and anyone passionate about Academia Sinica worldwide.", "是"],
    ["3", "標語規範與格式", "Slogan Guidelines & Format", "1. 中文或英文皆可（中英文各一組或單一語言投件均可）。\n2. 中文標語以 12 ~ 20 字為原則；英文標語以 5 ~ 15 字（words）為原則。\n3. 須附 100 ~ 200 字創作理念說明，闡述標語發想來源與意涵。\n4. 內容須原創，未曾發表亦未涉及抄襲或侵害他人權利。", "1. Submissions in Chinese or English are accepted.\n2. Chinese: 12-20 characters; English: 5-15 words.\n3. Include a 100-200 word concept description.\n4. Work must be original and not published elsewhere.", "是"],
    ["4", "評選標準", "Judging Criteria", "1. 主題契合度（40%）：充分彰顯中研院百年學術精神、價值與未來願景。\n2. 創意與獨特性（30%）：構思新穎、精鍊傳神、具記憶點。\n3. 傳播感染力（30%）：朗朗上口、節奏流暢，易於多媒體宣傳應用。", "1. Relevance to Centennial Spirit (40%)\n2. Creativity & Originality (30%)\n3. Resonance & Catchiness (30%)", "是"],
    ["5", "獎勵辦法", "Prizes & Awards", "首獎 1 名：獎金新臺幣 30,000 元整及百周年紀念獎座／證書。\n優等獎 2 名：各得獎金新臺幣 10,000 元整及紀念證書。\n佳作 3 名：各得獎金新臺幣 5,000 元整及紀念證書。\n入選獎若干名：各獲贈中研院百周年限定紀念禮品乙份。", "Grand Prize (1 Winner): NT$ 30,000 and Centennial Trophy.\nExcellence Award (2 Winners): NT$ 10,000 each and Certificate.\nMerit Award (3 Winners): NT$ 5,000 each and Certificate.\nFinalist Gifts for shortlisted entries.", "是"],
    ["6", "智財權與其他注意事項", "Intellectual Property & Terms", "1. 獲選作品之著作財產權歸主辦單位（中央研究院）所有，主辦單位有權進行非營利性宣傳、重製及公開展示。\n2. 投稿者保證作品確為原創，如涉及侵權者取消得獎資格並追回獎金與證書。\n3. 主辦單位保留活動內容修改、變更及解釋之最終權利。", "1. All intellectual property of winning entries transfers to Academia Sinica for official promotion.\n2. Participants guarantee their work is original.\n3. Academia Sinica reserves the right to amend campaign terms.", "是"]
  ], [60, 160, 200, 480, 480, 90], "#500a11");

  // 5. 常見問題與Footer
  createOrUpdateSheet(ss, "常見問題與Footer", [
    ["類別", "順序", "名稱/問題 (中)", "名稱/問題 (英)", "解答/連結網址 (中)", "解答/連結網址 (英)", "類型/圖示", "是否顯示"],
    ["FAQ", "1", "每個人可以投稿幾組標語？", "How many slogans can I submit?", "每位參賽者最多可投稿 3 組標語，每組均需單獨填寫並附上發想理念說明。", "Each participant may submit up to 3 slogans. Each entry must have its own concept rationale.", "faq", "是"],
    ["FAQ", "2", "可以用英文或中英混合投稿嗎？", "Can I submit in English or bilingual?", "可以！歡迎以繁體中文、英文投件，亦可提供中英文對應版本。", "Yes! Entries in Traditional Chinese, English, or bilingual pairings are all warmly welcomed.", "faq", "是"],
    ["FAQ", "3", "不是中研院員工或學生也可以參加嗎？", "Can the general public participate?", "可以！本活動面向全球公開徵件，凡關心中研院的朋友皆可共襄盛舉。", "Yes! The campaign is open to everyone worldwide who supports Academia Sinica.", "faq", "是"],
    ["FAQ", "4", "得獎標語會如何使用？", "How will winning slogans be used?", "獲選之標語將廣泛應用於中研院百周年各項慶祝活動、出版品、文宣品及國際學術交流場合。", "Winning slogans will be featured in centennial publications, events, banners, and media.", "faq", "是"],
    ["Footer連結", "1", "中央研究院官方網站", "Academia Sinica Official Website", "https://www.sinica.edu.tw", "https://www.sinica.edu.tw", "web", "是"],
    ["Footer連結", "2", "院況介紹與歷史", "About Academia Sinica", "https://www.sinica.edu.tw/about", "https://www.sinica.edu.tw/about", "info", "是"],
    ["Footer連結", "3", "中研院 Facebook", "AS Facebook Page", "https://www.facebook.com/sinicaedu", "https://www.facebook.com/sinicaedu", "facebook", "是"],
    ["Footer連結", "4", "中研院 YouTube 頻道", "AS YouTube Channel", "https://www.youtube.com/@AcademiaSinica", "https://www.youtube.com/@AcademiaSinica", "youtube", "是"]
  ], [110, 60, 240, 260, 360, 380, 110, 90], "#2c221e");
}

function createOrUpdateSheet(ss, sheetName, data, colWidths, headerColor) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  } else {
    sheet.clear();
  }

  // 寫入資料
  const rows = data.length;
  const cols = data[0].length;
  const range = sheet.getRange(1, 1, rows, cols);
  range.setValues(data);

  // 標題列格式
  const headerRange = sheet.getRange(1, 1, 1, cols);
  headerRange.setBackground(headerColor);
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 38);

  // 資料列格式
  if (rows > 1) {
    const dataRange = sheet.getRange(2, 1, rows - 1, cols);
    dataRange.setFontSize(10);
    dataRange.setVerticalAlignment("middle");
    dataRange.setWrap(true);
    for (let r = 2; r <= rows; r++) {
      if (r % 2 === 0) {
        sheet.getRange(r, 1, 1, cols).setBackground("#fdfaf6");
      } else {
        sheet.getRange(r, 1, 1, cols).setBackground("#ffffff");
      }
    }
  }

  // 設定欄寬
  for (let i = 0; i < colWidths.length; i++) {
    sheet.setColumnWidth(i + 1, colWidths[i]);
  }

  // 凍結標題列
  sheet.setFrozenRows(1);
}
