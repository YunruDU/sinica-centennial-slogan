/**
 * 中央研究院百周年標語徵選網 - Google 試算表自動化建立與初始化腳本
 * 使用方法：
 * 在 Google 試算表中點選「擴充功能」->「Apps Script」，將本程式碼貼上並點擊「執行 (Run)」
 * 即可自動建立 7 個格式優美、色彩典雅、附帶說明與中英資料的工作表。
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
    ["nav_highlights", "導覽項目 2", "最新消息", "Latest News", "導覽選單"],
    ["nav_timeline", "導覽項目 3", "重要時程", "Timeline", "導覽選單"],
    ["nav_rules", "導覽項目 4", "詳細辦法", "Guidelines", "導覽選單"],
    ["nav_faq", "導覽項目 5", "常見問題", "FAQ", "導覽選單"],
    ["nav_shortlist", "導覽項目 6", "入圍名單", "Shortlist", "導覽選單"],
    ["nav_winners", "導覽項目 7", "得獎公告", "Winners", "導覽選單"],
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
    ["organizer_name", "主辦單位名稱", "中央研究院 秘書處", "Secretariat, Academia Sinica", "頁尾聯絡資訊：主辦窗口"],
    ["contact_email", "聯絡電子信箱", "centennial@gate.sinica.edu.tw", "centennial@gate.sinica.edu.tw", "頁尾聯絡資訊：信箱"],
    ["contact_phone", "聯絡電話", "02-2789-9400", "+886-2-2789-9400", "頁尾聯絡資訊：電話"],
    ["section_highlights_title", "「最新消息」區塊標題", "最新消息", "Latest News", "首頁第1區塊大標"],
    ["section_highlights_desc", "「最新消息」區塊說明", "百年院慶標語徵選活動相關最新公告與更新，請隨時留意。", "Latest announcements and updates about the centennial slogan campaign.", "首頁第1區塊副標"],
    ["section_highlights_show", "是否顯示「最新消息」整個區塊", "是", "是", "填「否」則整塊隱藏（含導覽選單項目）"],
    ["section_highlights_order", "「最新消息」區塊順序", "1", "1", "數字越小越前面；主視覺固定最前、頁尾固定最後"],
    ["section_timeline_title", "「重要時程」區塊標題", "活動推展重要時程", "Campaign Timeline", "首頁第2區塊大標"],
    ["section_timeline_desc", "「重要時程」區塊說明", "標語徵選各階段暫定時程規劃，敬請同仁把握投稿期間。", "Key milestones and tentative schedule. Submit your entries before the deadline!", "首頁第2區塊副標"],
    ["section_timeline_show", "是否顯示「重要時程」整個區塊", "是", "是", "填「否」則整塊隱藏（含導覽選單項目）"],
    ["section_timeline_order", "「重要時程」區塊順序", "2", "2", "數字越小越前面；主視覺固定最前、頁尾固定最後"],
    ["section_faq_title", "「常見問答」區塊標題", "常見問答", "Frequently Asked Questions", "首頁第4區塊大標"],
    ["section_faq_desc", "「常見問答」區塊說明", "關於百年院慶標語徵選活動之常見問題整理", "Answers to common questions regarding the slogan campaign.", "首頁第4區塊副標"],
    ["section_faq_show", "是否顯示「常見問答」整個區塊", "是", "是", "填「否」則整塊隱藏（含導覽選單項目）"],
    ["section_faq_order", "「常見問答」區塊順序", "4", "4", "數字越小越前面；主視覺固定最前、頁尾固定最後"],
    ["section_rules_order", "「詳細辦法」導覽項目順序", "3", "3", "此項目沒有對應區塊（點擊開彈窗），只影響選單排序"],
    ["section_shortlist_title", "「入圍名單公告」區塊標題", "入圍名單公告", "Shortlist Announcement", "首頁入圍名單區塊大標"],
    ["section_shortlist_desc", "「入圍名單公告」區塊說明", "初選入圍作品名單，正式得獎結果請以官方公告為準。", "List of shortlisted entries. Official winners will follow a separate announcement.", "首頁入圍名單區塊副標"],
    ["section_shortlist_show", "是否顯示「入圍名單公告」整個區塊", "否", "否", "初選結果出爐前請保持「否」；填「是」才會公開整個區塊（含導覽選單項目）"],
    ["section_shortlist_order", "「入圍名單公告」區塊順序", "5", "5", "數字越小越前面；主視覺固定最前、頁尾固定最後"],
    ["shortlist_show_dept", "入圍名單是否顯示「所別」欄", "是", "是", "填「否」則整欄隱藏"],
    ["shortlist_show_name", "入圍名單是否顯示「姓名」欄", "是", "是", "填「否」則整欄隱藏"],
    ["shortlist_show_sso", "入圍名單是否顯示「SSO」欄", "是", "是", "填「否」則整欄隱藏"],
    ["shortlist_mask_sso", "入圍名單「SSO」欄是否遮蔽顯示", "是", "是", "填「是」只顯示帳號前2碼＋星號；填「否」完整顯示帳號"],
    ["shortlist_show_slogan_zh", "入圍名單是否顯示「中文標語」欄", "是", "是", "填「否」則整欄隱藏"],
    ["shortlist_show_slogan_en", "入圍名單是否顯示「英文標語」欄", "是", "是", "填「否」則整欄隱藏"],
    ["section_winners_title", "「得獎公告」區塊標題", "得獎公告", "Winners Announcement", "首頁得獎公告區塊大標"],
    ["section_winners_desc", "「得獎公告」區塊說明", "恭喜以下獲獎同仁，感謝所有參與投稿的同仁共同銘刻百年學術榮光。", "Congratulations to the winners, and thank you to everyone who submitted an entry.", "首頁得獎公告區塊副標"],
    ["section_winners_show", "是否顯示「得獎公告」整個區塊", "否", "否", "得獎名單確定前請保持「否」；填「是」才會公開整個區塊（含導覽選單項目）"],
    ["section_winners_order", "「得獎公告」區塊順序", "6", "6", "數字越小越前面；主視覺固定最前、頁尾固定最後"],
    ["winners_show_award", "得獎公告是否顯示「獎項」欄", "是", "是", "填「否」則整欄隱藏"],
    ["winners_show_dept", "得獎公告是否顯示「所別」欄", "是", "是", "填「否」則整欄隱藏"],
    ["winners_show_name", "得獎公告是否顯示「姓名」欄", "是", "是", "填「否」則整欄隱藏"],
    ["winners_show_sso", "得獎公告是否顯示「SSO」欄", "是", "是", "填「否」則整欄隱藏"],
    ["winners_mask_sso", "得獎公告「SSO」欄是否遮蔽顯示", "是", "是", "填「是」只顯示帳號前2碼＋星號；填「否」完整顯示帳號"],
    ["winners_show_slogan_zh", "得獎公告是否顯示「中文標語」欄", "是", "是", "填「否」則整欄隱藏"],
    ["winners_show_slogan_en", "得獎公告是否顯示「英文標語」欄", "是", "是", "填「否」則整欄隱藏"],
    ["dialog_title", "徵選辦法彈窗標題", "中央研究院百周年標語徵選活動辦法", "Academia Sinica Centennial Slogan Campaign — Guidelines", "彈窗頂部標題"],
    ["dialog_notice", "彈窗內活動提示文字", "本徵選網頁依秘書處需求說明書製作，投稿入口連結至 Google 表單；正式得獎公告與詳細期程以主辦單位最新公告為準。", "This page follows the Secretariat's requirements. Submissions link to a Google Form; official results follow the organizer's latest announcements.", "彈窗內黃色提示框文字"],
    ["dialog_close_btn", "彈窗關閉按鈕文字", "關閉視窗", "Close", "彈窗底部按鈕"],
    ["dialog_submit_btn", "彈窗投稿按鈕文字", "前往表單投稿 ›", "Submit Now ›", "彈窗底部按鈕"],
    ["footer_brand_title", "頁尾機構主標題", "中央研究院 百周年院慶標語徵選", "Academia Sinica Centennial Slogan Campaign", "Footer 左欄大字"],
    ["footer_brand_en", "頁尾機構英文小標", "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN", "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN", "Footer 左欄英文小字"],
    ["footer_desc", "頁尾主辦/執行/技術單位說明", "指導主辦：中央研究院 百年院慶籌備委員會\n執行單位：中央研究院 秘書處\n技術協同：中央研究院 資訊服務處", "Supervised by: Academia Sinica Centennial Committee\nOrganized by: Secretariat, Academia Sinica\nTechnical Support: Office of Information Technology, Academia Sinica", "多行請用 Alt+Enter 換行"],
    ["footer_quicklinks_title", "頁尾「快速連結」欄標題", "快速連結", "Quick Links", "Footer 中欄標題"],
    ["footer_contact_title", "頁尾「主辦聯絡資訊」欄標題", "主辦聯絡資訊", "Contact Information", "Footer 右欄標題"],
    ["footer_address", "頁尾院區地址", "院區地址：115201 臺北市南港區研究院路二段128號", "Address: No. 128, Sec. 2, Academia Rd., Nangang Dist., Taipei 115201", "Footer 右欄地址"],
    ["footer_official_link_text", "頁尾「中研院官網」連結文字", "中央研究院官網 ↗", "Academia Sinica Official Site ↗", "Footer 快速連結第6項（連結網址固定為院網）"],
    ["footer_copyright", "頁尾版權宣告", "© 2026 Academia Sinica 中央研究院. All Rights Reserved.", "© 2026 Academia Sinica. All Rights Reserved.", "Footer 最底部"],
    ["footer_form_note_label", "頁尾投稿表單提示文字", "✦ 投稿 Google 表單連結：", "✦ Submission Google Form:", "Footer 最底部，網址自動帶入 submit_form_url"]
  ], [200, 260, 340, 380, 300], "#500a11");

  // 2. 最新消息（手風琴展開/收合，筆數不固定，新增列即可增加消息）
  createOrUpdateSheet(ss, "最新消息", [
    ["順序", "消息標題 (中)", "消息標題 (英)", "發布日期 (中，選填)", "發布日期 (英，選填)", "消息內容 (中)", "消息內容 (英)", "是否顯示"],
    ["1", "百年院慶標語徵選活動正式啟動", "Centennial Slogan Campaign Officially Launched", "2026年10月01日", "Oct 01, 2026", "中央研究院百年院慶標語公開徵選活動正式開放線上投稿，歡迎全體同仁踴躍參與，共同銘刻百年學術榮光。", "The Academia Sinica Centennial Slogan Campaign is now open for online submissions. All colleagues are warmly invited to participate.", "是"]
  ], [60, 260, 320, 160, 160, 400, 440, 90], "#6c0e18");

  // 3. 重要時程
  // 欄位 K/L/M/N（圖示大字/小字）為選填：控制時程「圓圈徽章」內顯示的文字。留空則自動依序套用預設樣式。
  createOrUpdateSheet(ss, "重要時程", [
    ["順序", "階段名稱 (中)", "階段名稱 (英)", "時程區間 (中)", "時程區間 (英)", "階段說明 (中)", "階段說明 (英)", "狀態標籤 (中)", "狀態標籤 (英)", "是否顯示", "圓圈徽章大字 (中，選填)", "圓圈徽章大字 (英，選填)", "圓圈徽章小字 (中，選填)", "圓圈徽章小字 (英，選填)"],
    ["1", "線上徵件啟動", "Submissions Open", "2026年10月01日", "Oct 01, 2026", "開放線上 Google 表單徵件系統，歡迎全球各界踴躍投件。", "Online submission portal opens. All entries welcomed worldwide.", "進行中", "In Progress", "是", "10月", "OCT", "01日", "01"],
    ["2", "徵件截止", "Submissions Deadline", "2026年10月31日 23:59", "Oct 31, 2026 23:59", "截止線上收件，逾期恕不受理。請把握時間送出您的創意！", "Deadline for all online submissions. Late submissions will not be accepted.", "即將截止", "Approaching", "是", "10月", "OCT", "31日", "31"],
    ["3", "專業評審遴選", "Judging & Selection", "2026年11月", "November 2026", "由院慶籌備委員會及各領域專家學者組成評審小組進行匿名審查。", "Expert panel evaluates all qualified entries anonymously.", "審查中", "Pending", "是", "11月", "NOV", "初審", "2026"],
    ["4", "獲選結果公布", "Winners Announced", "2026年12月", "December 2026", "於中研院官網及百年院慶專頁正式揭曉獲選標語與得獎名單。", "Official announcement of winning slogans on Academia Sinica website.", "即將揭曉", "Upcoming", "是", "12月", "DEC", "揭曉", "2026"]
  ], [60, 160, 180, 180, 180, 300, 340, 110, 110, 90, 140, 140, 140, 140], "#7a541c");

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
    ["FAQ", "5", "投稿與投票是否需要以本院 SSO 帳號登入？", "Do I need to log in with my institute SSO account to submit or vote?", "依規劃，投稿與後續網路票選皆須以中央研究院 SSO 帳號登入驗證，以確認身分並自動帶入基本資料，同時防止外部誤投。", "Both submission and voting require login with an Academia Sinica SSO account to verify identity, auto-fill basic information, and prevent external voting.", "faq", "是"],
    ["FAQ", "6", "評審過程會看到我的姓名和服務單位嗎？", "Will judges see my name and department during review?", "不會。評審委員於線上評分介面完全看不到投稿人姓名及服務單位/所中心資訊，以雙盲方式確保評選公平客觀。", "No. Judges cannot see the submitter's name or department in the scoring interface, ensuring a fair, double-blind review.", "faq", "是"],
    ["FAQ", "7", "網路票選要怎麼進行？可以投很多次嗎？", "How does the online voting work? Can I vote more than once?", "初選入圍名單公告後，將開放同仁以 SSO 帳號進行網路票選，每一帳號於票選期間僅能投票 1 次，不開放重複投票。", "After the shortlist is announced, colleagues may vote online with their SSO account. Each account may vote only once during the voting period.", "faq", "是"],
    ["FAQ", "8", "標語投稿後可以修改內容嗎？", "Can I edit my slogan after submitting?", "投稿送出前請務必確認內容無誤；系統將以正式送出時間作為時間戳記依據，故請於送出前仔細確認後再送出。", "Please review your entry carefully before submitting, as the system timestamps your entry at the moment of submission.", "faq", "是"],
    ["FAQ", "9", "得獎名單什麼時候公布？會公布在哪裡？", "When and where will the winners be announced?", "預計12月上旬進行複評，並於12月24日前透過中央研究院官方網站及本活動網頁正式公告得獎名單。", "The final review is expected in early December, with winners officially announced on the Academia Sinica website and this campaign page before December 24.", "faq", "是"],
    ["FAQ", "10", "這個網頁未來會不會換網址？", "Will this page's URL change in the future?", "待百年院慶專屬網站建置完成後，本活動網頁將配合移轉至百年院慶專屬網站項下，屆時將提供新的連結。", "Once the dedicated centennial website is complete, this campaign page will migrate under it, and a new link will be provided.", "faq", "是"],
    ["Footer連結", "1", "中央研究院官方網站", "Academia Sinica Official Website", "https://www.sinica.edu.tw", "https://www.sinica.edu.tw", "web", "是"],
    ["Footer連結", "2", "院況介紹與歷史", "About Academia Sinica", "https://www.sinica.edu.tw/about", "https://www.sinica.edu.tw/about", "info", "是"],
    ["Footer連結", "3", "中研院 Facebook", "AS Facebook Page", "https://www.facebook.com/sinicaedu", "https://www.facebook.com/sinicaedu", "facebook", "是"],
    ["Footer連結", "4", "中研院 YouTube 頻道", "AS YouTube Channel", "https://www.youtube.com/@AcademiaSinica", "https://www.youtube.com/@AcademiaSinica", "youtube", "是"]
  ], [110, 60, 240, 260, 360, 380, 110, 90], "#2c221e");

  // 6. 入圍名單公告
  // SSO 欄位預設遮蔽顯示（保留前 2 碼＋星號），可透過「全站與主視覺」分頁的 shortlist_mask_sso 關閉遮蔽。
  // 整個區塊預設隱藏（section_shortlist_show = 否），初選結果出爐後再改為「是」公開。
  createOrUpdateSheet(ss, "入圍名單公告", [
    ["順序", "所別 (中)", "所別 (英)", "姓名 (中)", "姓名 (英)", "SSO帳號", "中文標語", "英文標語", "是否顯示"],
    ["1", "範例：資訊服務處", "e.g. Office of Information Technology", "王小明", "Wang Xiao-Ming", "wxm1234", "範例標語：以一句話，凝鍊百年學術精神", "Example: A century of scholarship in a single phrase", "否"]
  ], [60, 180, 260, 120, 160, 140, 320, 360, 90], "#500a11");

  // 7. 得獎公告
  // SSO 欄位預設遮蔽顯示，整個區塊預設隱藏（section_winners_show = 否），得獎名單確定後再改為「是」公開。
  createOrUpdateSheet(ss, "得獎公告", [
    ["順序", "獎項 (中)", "獎項 (英)", "所別 (中)", "所別 (英)", "姓名 (中)", "姓名 (英)", "SSO帳號", "中文標語", "英文標語", "是否顯示"],
    ["1", "範例：首獎", "e.g. Grand Prize", "範例：資訊服務處", "e.g. Office of Information Technology", "王小明", "Wang Xiao-Ming", "wxm1234", "範例標語：以一句話，凝鍊百年學術精神", "Example: A century of scholarship in a single phrase", "否"]
  ], [60, 140, 180, 180, 260, 120, 160, 140, 320, 360, 90], "#7a541c");
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
