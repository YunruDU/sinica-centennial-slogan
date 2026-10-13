/**
 * 中央研究院百周年標語徵選 — 雙語 (Bilingual) 與 Google 試算表雲端內容管理系統 (CMS)
 * 試算表 ID: 10cFGVyCSQqGEPjWw7LBs1xs9hevCXWpUfoV2DhU8qYU
 */

(function () {
  "use strict";

  const GOOGLE_SHEET_ID = "10cFGVyCSQqGEPjWw7LBs1xs9hevCXWpUfoV2DhU8qYU";
  const CACHE_KEY = "as_slogan_cms_data_v6";

  // ========================================================
  // 1. 預設雙語完整資料（Instantaneous Local Fallback）
  // 確保離線、無網路或 Google API 延遲時瞬間正常顯示
  // ========================================================
  const DEFAULT_DATA = {
    // 預設內容跟目前 Google 試算表「全站與主視覺」同步（試算表讀不到／還沒載入完成時顯示這份）。
    // hero_layout 填 "1" 顯示原本主視覺，填 "2" 顯示深色背景＋倒數計時器版面；
    // login_notice_show 填「否」= 點我要投稿不跳登入提醒視窗。
    settings: {
      site_title: { zh: "中央研究院百年標語徵選 | 1928 — 2028", en: "Academia Sinica Centennial Slogan Campaign | 1928 — 2028" },
      brand_title: { zh: "中央研究院 百年院慶", en: "Academia Sinica Centennial" },
      brand_subtitle: { zh: "1928 — 2028 · CENTENNIAL", en: "1928 — 2028 · CENTENNIAL" },
      nav_hero: { zh: "活動首頁", en: "Home" },
      nav_highlights: { zh: "最新消息", en: "News" },
      nav_timeline: { zh: "重要時程", en: "Timeline" },
      nav_rules: { zh: "詳細辦法", en: "Guidelines" },
      nav_faq: { zh: "常見問題", en: "FAQ" },
      nav_shortlist: { zh: "入圍名單", en: "Shortlist" },
      nav_winners: { zh: "得獎公告", en: "Winners" },
      nav_submit_btn: { zh: "我要投稿", en: "Start Submission" },
      submit_form_url: { zh: "https://forms.gle/aCeM3Rkwap4a8uzX6", en: "https://forms.gle/aCeM3Rkwap4a8uzX6" },
      hero_desktop_img: { zh: "assets/hero-desktop.png", en: "assets/hero-desktop.png" },
      hero_mobile_logo: { zh: "assets/centennial-100.png", en: "assets/centennial-100.png" },
      hero_mobile_campus: { zh: "assets/campus-aerial.jpg", en: "assets/campus-aerial.jpg" },
      hero_main_title: { zh: "中央研究院", en: "Academia Sinica" },
      hero_sub_title: { zh: "百年標語徵選", en: "Centennial Slogan Campaign" },
      hero_quote: { zh: "以一句話，凝鍊百年學術精神，開展下一個世紀", en: "In a single phrase, embody a century of scholarship and inspire the future" },
      hero_btn_submit: { zh: "我要投稿", en: "Start Submission" },
      hero_btn_rules: { zh: "徵選辦法", en: "Guidelines" },
      hero_layout: { zh: "1", en: "1" },
      hero2_bg_type: { zh: "video", en: "image" },
      hero2_bg_image: { zh: "assets/campus-aerial.jpg", en: "assets/campus-aerial.jpg" },
      hero2_bg_youtube_id: { zh: "QBqknUQoz4s", en: "QBqknUQoz4s" },
      hero2_badge_text: { zh: "中央研究院 百年院慶", en: "ACADEMIA SINICA 100TH ANNIVERSARY" },
      hero2_title: { zh: "百年中研\n啟航新世紀", en: "A Century of Sinica\nSailing into a New Era" },
      hero2_subtitle: { zh: "以一句話，凝鍊百年學術精神，開展下一個世紀。", en: "In a single phrase, embody a century of scholarship and inspire the future." },
      hero2_countdown_label: { zh: "距離投稿倒數", en: "Countdown to Submission Deadline" },
      hero2_countdown_target: { zh: "2026-10-31 23:59:59", en: "2026-10-31 23:59:59" },
      hero2_countdown_caption: { zh: "倒數目標：2026 年 10 月 31 日 23:59 · 投稿截止", en: "Deadline: Oct 31, 2026, 23:59" },
      hero2_btn_submit_text: { zh: "認識百年系列活動", en: "Discover the Centennial Series" },
      hero2_btn_rules_text: { zh: "走進百年大事紀", en: "Explore the Centennial Timeline" },
      login_notice_show: { zh: "是", en: "是" },
      login_notice_title: { zh: "投稿前請先確認", en: "Before You Submit" },
      login_notice_body: {
        zh: "如您沒有院內 AS.EDU.TW 信箱且您是本院院士或院友，請點選本院院士、院友選項下載表單投稿<br>如有AS帳號請點選本院現職同仁登入 AS.EDU.TW 再填寫投稿表單。",
        en: "If you do not have an AS.EDU.TW institutional email and are an Academician or Alumnus/Alumna of Academia Sinica, please select \"Academicians / Retired Alumni\" to download the submission form.<br>If you have an AS account, please select \"Current Employees\" to sign in with your AS.EDU.TW account before filling out the submission form."
      },
      login_notice_confirm: { zh: "本院現職同仁", en: "Current Employees" },
      login_notice_cancel: { zh: "本院院士、退休院友", en: "Academicians / Retired Alumni" },
      login_notice_alumni_doc_url: { zh: "assets/slogan-submission-form.docx", en: "assets/slogan-submission-form.docx" }, // 按「本院院士、退休院友」後開啟的連結（投稿表格下載），留空則只關視窗
      organizer_name: { zh: "本院秘書處林書吟小姐", en: "Ms. Shu-Yin Lin, Secretariat, Academia Sinica" },
      contact_email: { zh: "lsy@as.edu.tw", en: "lsy@as.edu.tw" },
      contact_phone: { zh: "(02)2789-9873", en: "(02)2789-9873" },
      shortlist_show_dept: { zh: "是", en: "是" },
      shortlist_show_name: { zh: "是", en: "是" },
      shortlist_show_sso: { zh: "是", en: "是" },
      shortlist_mask_sso: { zh: "是", en: "是" },
      shortlist_show_slogan_zh: { zh: "是", en: "是" },
      shortlist_show_slogan_en: { zh: "是", en: "是" },
      shortlist_show_concept: { zh: "是", en: "是" },
      winners_show_award: { zh: "是", en: "是" },
      winners_show_dept: { zh: "是", en: "是" },
      winners_show_name: { zh: "是", en: "是" },
      winners_show_sso: { zh: "是", en: "是" },
      winners_mask_sso: { zh: "是", en: "是" },
      winners_show_slogan_zh: { zh: "是", en: "是" },
      winners_show_slogan_en: { zh: "是", en: "是" },
      winners_show_concept: { zh: "是", en: "是" },
      dialog_title: { zh: "中央研究院百年標語徵選活動辦法", en: "Academia Sinica Centennial Slogan Campaign — Guidelines" },
      dialog_close_btn: { zh: "關閉視窗", en: "Close" },
      dialog_submit_btn: { zh: "前往表單投稿 ›", en: "Start Submission ›" },
      dialog_notice: { zh: "本徵選網頁依秘書處需求說明書製作，投稿入口連結至 Google 表單；正式得獎公告與詳細期程以主辦單位最新公告為準。", en: "This page follows the Secretariat's requirements. Submissions link to a Google Form; official results follow the organizer's latest announcements." },
      footer_desc: { zh: "執行單位：中央研究院 秘書處\n技術協同：中央研究院 資訊服務處", en: "Organized by: Secretariat, Academia Sinica\nTechnical Support: Office of Information Technology, Academia Sinica" },
      footer_address: { zh: "地址：115201 臺北市南港區研究院路二段128號", en: "Address: No. 128, Sec. 2, Academia Rd., Nangang Dist., Taipei 115201" },
      footer_brand_title: { zh: "中央研究院 百年院慶標語徵選", en: "Academia Sinica Centennial Slogan Campaign" },
      footer_brand_en: { zh: "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN", en: "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN" },
      footer_quicklinks_title: { zh: "快速連結", en: "Quick Links" },
      footer_contact_title: { zh: "主辦聯絡資訊", en: "Contact Information" },
      footer_official_link_text: { zh: "中央研究院官網 ↗", en: "Academia Sinica Official Site ↗" },
      footer_copyright: { zh: "© 2026 Academia Sinica 中央研究院. All Rights Reserved.", en: "© 2026 Academia Sinica. All Rights Reserved." },
      footer_form_note_label: { zh: "✦ 投稿 Google 表單連結：", en: "✦ Submission Google Form:" }
    },

    // 各區塊的標題／說明／順序／顯示開關，全部集中在這裡（對應試算表「各區塊設定」
    // 分頁，一列就是一個功能區塊，同一列可以調整該區塊的所有設定，不會分散在別處）
    // 以下預設內容跟目前 Google 試算表同步（試算表讀不到／還沒載入完成時顯示這份）。
    // 入圍名單、得獎公告刻意留空：避免正式公告前把投稿人資料寫死在公開的網頁原始碼裡。
    sections: {
      highlights: {
        title_zh: "最新消息", title_en: "Latest News",
        desc_zh: "百年院慶標語徵選活動相關最新公告與更新，請隨時留意。", desc_en: "Latest announcements and updates about the centennial slogan campaign.",
        order: 1, show: true
      },
      timeline: {
        title_zh: "活動推展重要時程", title_en: "Campaign Timeline",
        desc_zh: "標語徵選各階段暫定時程規劃，敬請同仁把握投稿期間。", desc_en: "Key milestones and tentative schedule. Submit your entries before the deadline!",
        order: 2, show: false
      },
      rules: {
        order: 3, show: false
      },
      faq: {
        title_zh: "常見問答", title_en: "Frequently Asked Questions",
        desc_zh: "關於百年院慶標語徵選活動之常見問題整理", desc_en: "Answers to common questions regarding the slogan campaign.",
        order: 5, show: true
      },
      shortlist: {
        title_zh: "入圍名單公告", title_en: "Shortlist Announcement",
        desc_zh: "初選入圍作品名單，正式得獎結果請以官方公告為準。", desc_en: "List of shortlisted entries. Official winners will follow a separate announcement.",
        order: 4, show: false
      },
      winners: {
        title_zh: "得獎公告", title_en: "Winners Announcement",
        desc_zh: "恭喜以下獲獎同仁，感謝所有參與投稿的同仁共同銘刻百年學術榮光。", desc_en: "Congratulations to the winners, and thank you to everyone who submitted an entry.",
        order: 6, show: false
      }
    },

    news: [
      { title_zh: "百年院慶標語徵選活動正式啟動", title_en: "Centennial Slogan Campaign Officially Launched", date_zh: "2026-10-12", date_en: "Oct 12, 2026", content_zh: "中央研究院「百年院慶標語」徵選活動正式開放線上投稿，歡迎本院同仁、院士及退休院友踴躍參與，共同銘刻百年學術榮光。", content_en: "The Academia Sinica Centennial Slogan Campaign is now open for online submissions. Colleagues, academicians, and retired alumni are warmly invited to participate and help capture a century of scholarly glory.", show: true },
      { title_zh: "投稿相關資訊", title_en: "Submission Information", date_zh: "2026-10-12", date_en: "Oct 12, 2026", content_zh: "<span style=\"color:#8A1724;font-weight:bold;\">活動主旨</span><br>\n中央研究院為籌備2028年百年院慶，公開向本院同仁徵求「百年院慶標語（Slogan）」，以創意詮釋「深耕基礎研究、回應社會需求、引領國際學術」的院慶核心主軸。\n<br>\n<span style=\"color:#8A1724;font-weight:bold;\">活動對象</span><br>\n本院現職同仁（含研究人員、技術人員、行政人員、各類計畫助理、研究生等）、本院院士及退休院友。", content_en: "<span style=\"color:#8A1724;font-weight:bold;\">Purpose</span><br>\nIn preparation for its centennial celebration in 2028, Academia Sinica is inviting colleagues to submit a \"Centennial Slogan,\" creatively interpreting the core themes of the celebration: \"Deepening Fundamental Research, Responding to Societal Needs, and Leading International Scholarship.\"\n<br>\n<span style=\"color:#8A1724;font-weight:bold;\">Eligibility</span><br>\nCurrent employees of Academia Sinica (including research staff, technical staff, administrative staff, project assistants of all types, graduate students, etc.), Academicians of Academia Sinica, and retired alumni.", show: true },
      { title_zh: "最新消息第3則", title_en: "最新消息第3則", date_zh: "2026-10-13", date_en: "Oct 13, 2026", content_zh: "中央研究院百年院慶標語公開徵選活動正式開放線上投稿，歡迎全體同仁踴躍參與，共同銘刻百年學術榮光。", content_en: "The Academia Sinica Centennial Slogan Campaign is now open for online submissions. All colleagues are warmly invited to participate.", show: false }
    ],

    shortlist: [],
    winners: [],

    timeline: [
      { circle_main_zh: "10月", circle_sub_zh: "即日起", circle_main_en: "OCT", circle_sub_en: "NOW", title_zh: "徵件期間", title_en: "Submission Period", date_zh: "即日起至2026年11月○日（星期○）23:59", date_en: "Now – 23:59 on [day ○] November 2026 (weekday ○)", desc_zh: "本活動一律採網路投稿，每人限投稿1件，逾期恕不受理，亦不接受補件。", desc_en: "All entries are submitted online. One entry per person; late submissions and supplementary materials will not be accepted.", status_zh: "進行中", status_en: "In Progress", active: true, show: true },
      { circle_main_zh: "11月", circle_sub_zh: "初選", circle_main_en: "NOV", circle_sub_en: "2026", title_zh: "初選", title_en: "Preliminary Selection", date_zh: "徵件截止後", date_en: "After the submission deadline", desc_zh: "由「百年院慶籌備委員會」依評分標準擇優選出10件入圍標語進入決選。", desc_en: "The Centennial Celebration Preparatory Committee selects 10 shortlisted slogans based on the scoring criteria.", status_zh: "待進行", status_en: "Upcoming", active: false, show: true },
      { circle_main_zh: "12月", circle_sub_zh: "決選", circle_main_en: "DEC", circle_sub_en: "2026", title_zh: "決選", title_en: "Final Selection", date_zh: "2026年12月", date_en: "December 2026", desc_zh: "由「百年院慶推動委員會」於入圍之10件標語中綜合評量，選出前5名優勝作品。", desc_en: "The Centennial Celebration Promotion Committee evaluates the 10 shortlisted slogans and selects the top 5 winning entries.", status_zh: "待進行", status_en: "Upcoming", active: false, show: true },
      { circle_main_zh: "1月", circle_sub_zh: "公布", circle_main_en: "JAN", circle_sub_en: "2027", title_zh: "結果公布", title_en: "Results Announced", date_zh: "2027年1月", date_en: "January 2027", desc_zh: "獲選名單公布於本院活動網站，並另以電子郵件通知得獎者。", desc_en: "The list of winners is published on the institute's campaign website, and winners are also notified by email.", status_zh: "待公布", status_en: "Upcoming", active: false, show: true }
    ],

    rules: [
      { title_zh: "活動主旨", title_en: "Purpose", content_zh: "中央研究院為籌備2028年百年院慶，公開向本院同仁徵求「百年院慶標語（Slogan）」，以創意詮釋「深耕基礎研究、回應社會需求、引領國際學術」的院慶核心主軸。期藉由院內同仁共同參與發想，凝聚對本院百年傳承與未來發展的認同與向心力。\n獲選標語將作為百年院慶規劃之重要元素，並視實際需要運用於官方網站、國際學術研討會及各項文宣品，藉以傳達本院百年學術精神，彰顯以智識貢獻社會之價值，並強化院慶整體識別及對內、對外溝通效果。", content_en: "In preparation for its centennial celebration in 2028, Academia Sinica is inviting colleagues to submit a \"Centennial Slogan,\" creatively interpreting the core themes of the celebration: \"Deepening Fundamental Research, Responding to Societal Needs, and Leading International Scholarship.\" We hope that participation from across the institute will strengthen a shared sense of identity with, and commitment to, our century-long heritage and future development.\nWinning slogans will become an important element of the centennial planning and, as needed, will be used on the official website, at international academic conferences, and in various publicity materials, conveying the institute's century of scholarly spirit, highlighting the value of contributing to society through knowledge, and strengthening the overall identity of the celebration and communication both within and beyond the institute.", show: true },
      { title_zh: "辦理單位", title_en: "Organizers", content_zh: "主辦：中央研究院秘書處\n協辦：中央研究院資訊服務處", content_en: "Organizer: Secretariat, Academia Sinica\nCo-organizer: Office of Information Technology, Academia Sinica", show: true },
      { title_zh: "活動對象", title_en: "Eligibility", content_zh: "本院現職同仁（含研究人員、技術人員、行政人員、各類計畫助理、研究生等）、本院院士及退休院友。", content_en: "Current employees of Academia Sinica (including research staff, technical staff, administrative staff, project assistants of all types, graduate students, etc.), Academicians of Academia Sinica, and retired alumni.", show: true },
      { title_zh: "創作原則與作品規格", title_en: "Creative Principles & Entry Requirements", content_zh: "<strong>一、創作原則</strong>\n彰顯中央研究院深耕人文與科學研究、回應社會需求及引領學術發展之特色，並兼具百年傳承與前瞻未來之意象。\n可廣泛應用於網站、旗幟、海報及各類文宣品與紀念識別物，以達宣傳與形象識別之目的。\n核心主軸：\n1. 深耕基礎研究：強調專注基礎研究、追求真理與發現新知，開創頂尖學術成果。\n2. 回應社會需求：體現智識實踐力，將研究成果轉化為回應社會需求與推動永續發展的關鍵力量。\n3. 引領國際學術：承續百年學術底蘊，持續以創新思維開拓前瞻研究，展現具備國際視野與領航地位的學術高度。\n<strong>二、作品規格與要求</strong>\n（一）標語形式與字數限額\n1. 中、英文不限。\n2. 中文標語：以20字為限（作品內之英文字母、數字均以1字計算）。\n3. 英文標語：以15字詞（Words）為限。\n4. 簡潔有力、押韻順口為佳。\n（二）創作理念\n投稿時須附上標語之核心概念與涵義說明，以300字為上限（中、英文不限）。", content_en: "<strong>1. Creative Principles</strong>\nHighlight Academia Sinica's distinctive commitment to deepening humanities and scientific research, responding to societal needs, and leading academic development, while conveying both a century of heritage and a forward-looking vision.\nSlogans should be widely applicable to websites, banners, posters, and all kinds of publicity materials and commemorative items, serving the purposes of promotion and visual identity.\nCore themes:\n1. Deepening Fundamental Research: Emphasize dedication to fundamental research, the pursuit of truth and the discovery of new knowledge, creating top-tier scholarly achievements.\n2. Responding to Societal Needs: Embody the power of putting knowledge into practice, turning research outcomes into a key force for meeting societal needs and promoting sustainable development.\n3. Leading International Scholarship: Building on a century of scholarly foundation, continue to explore cutting-edge research with innovative thinking, demonstrating an academic standing with international vision and a leading position.\n<strong>2. Entry Specifications and Requirements</strong>\n(1) Slogan format and length limits\n1. Chinese or English; either language is acceptable.\n2. Chinese slogans: up to 20 characters (English letters and numerals each count as one character).\n3. English slogans: up to 15 words.\n4. Concise, powerful, and rhyming or catchy slogans are preferred.\n(2) Concept statement\nEntries must include an explanation of the slogan's core concept and meaning, up to 300 characters/words (Chinese or English).", show: true },
      { title_zh: "投稿方式及結果公布", title_en: "How to Submit & Results", content_zh: "<strong>徵件截止日期</strong>\n即日起至2026年11月○日（星期○）23:59止。逾期恕不受理，亦不接受補件。\n<strong>投稿方式</strong>\n本活動一律採網路投稿，網址為https://slogan.anniversary.sinica.edu.tw。\n於截止日前，填寫個人基本資料、標語內容及創作理念，並同意「原創具結聲明」，即可完成投稿。\n<strong>參賽限制</strong>\n每人投稿以1件為限，且作品須為未曾出版、公開發表或與他人雷同之原創標語。參賽者須保證作品無侵害他人智慧財產權、著作權或利用生成式AI創作之情事。\n<strong>結果公布與洽詢</strong>\n（一）結果公布：獲選名單將於2027年1月公布於本院活動網站，並另以電子郵件通知得獎者。\n（二）活動洽詢：本院秘書處林書吟小姐，電話：(02)2789-9873。", content_en: "<strong>Submission Deadline</strong>\nFrom now until 23:59 on [day ○] November 2026 (weekday ○). Late submissions will not be accepted, and no supplementary materials will be accepted.\n<strong>How to Submit</strong>\nAll submissions must be made online at https://slogan.anniversary.sinica.edu.tw.\nBefore the deadline, fill in your personal information, slogan, and concept statement, and agree to the \"Originality Declaration\" to complete your submission.\n<strong>Entry Restrictions</strong>\nEach person may submit only one entry, and the work must be an original slogan that has not been published, publicly released, or duplicated by others. Participants must guarantee that their work does not infringe the intellectual property or copyright of others and was not created using generative AI.\n<strong>Announcement of Results and Inquiries</strong>\n(1) Results: The list of selected entries will be published on the institute's campaign website in January 2027, and winners will also be notified by email.\n(2) Inquiries: Ms. Shu-Yin Lin, Secretariat, Academia Sinica. Tel: (02) 2789-9873.", show: true },
      { title_zh: "評選辦法", title_en: "Judging", content_zh: "本活動著重標語文案之代表性、完整性、創意性與特色，評選作業分為「評審標準」與「評選階段」兩部分。\n<strong>一、評審標準</strong>\n評選委員將依下列標準評定：\n（一）主題契合度（40%）：是否精準傳達中研院百年學術精神與核心價值。\n（二）創意與感染力（30%）：具原創性、記憶點深刻且具發人深省之力量。\n（三）語意與傳播性（30%）：中英文流暢度、朗朗上口且易於國內外傳播。\n<strong>二、評選階段</strong>\n本活動採「初選」及「決選」二階段進行：\n（一）第一階段：初選：由本院「百年院慶籌備委員會」進行初步評選，依評分標準擇優選出10件入圍標語進入決選。若有投稿標語文字完全相同者，以報名時間較早者優先採計入圍。\n（二）第二階段：決選：由本院「百年院慶推動委員會」於初選入圍之10件標語中進行綜合評量，選出前5名優勝作品。", content_en: "The campaign emphasizes the representativeness, completeness, creativity, and distinctiveness of each slogan. The selection process consists of two parts: \"Judging Criteria\" and \"Selection Stages.\"\n<strong>1. Judging Criteria</strong>\nThe judges will evaluate entries according to the following criteria:\n(1) Relevance to the theme (40%): Does the slogan accurately convey Academia Sinica's century of scholarly spirit and core values?\n(2) Creativity and impact (30%): Is it original, memorable, and thought-provoking?\n(3) Meaning and communicability (30%): Fluency in Chinese and English, catchiness, and ease of dissemination at home and abroad.\n<strong>2. Selection Stages</strong>\nThe campaign is conducted in two stages: a \"Preliminary Selection\" and a \"Final Selection.\"\n(1) Stage 1: Preliminary Selection: The institute's \"Centennial Celebration Preparatory Committee\" conducts the initial evaluation and, based on the scoring criteria, selects 10 shortlisted slogans to advance to the final selection. If submitted slogans are word-for-word identical, the one submitted earlier takes priority for shortlisting.\n(2) Stage 2: Final Selection: The institute's \"Centennial Celebration Promotion Committee\" comprehensively evaluates the 10 shortlisted slogans and selects the top 5 winning entries.", show: true },
      { title_zh: "獎勵辦法", title_en: "Prizes", content_zh: "<strong>一、獎勵內容</strong>\n（一）優勝獎：經百年院慶推動委員會決選之前3名優勝作品，每名各頒發獎狀1紙及獎金：第1名新臺幣1萬元、第2名新臺幣8,000元、第3名新臺幣6,000元。\n（二）優選獎：進入決選而未獲前款優勝獎之作品，共2名，每名各頒發獎狀1紙及獎金新臺幣3,000元。\n<strong>二、遞補與從缺機制</strong>\n若獲獎作品因故被取消資格，將由備取作品依序遞補；如參選作品未達評審標準，本院保留獎項從缺之權利。\n<strong>三、著作權轉讓</strong>\n得獎者須於接獲通知後簽署「著作財產權轉讓同意書」，始得辦理後續獎金撥付事宜。\n<strong>四、發放方式</strong>\n（一）採電匯方式核發，得獎者須提供本人金融機構帳戶等相關資料。\n（二）得獎者須配合提供領據及相關身分證件／帳戶資料，以利辦理核銷作業。\n<strong>五、稅務規範</strong>\n依中華民國稅法規定，得獎獎項價值應納入個人所得並代扣稅額，相關規定請參照財政部全球資訊網（https://www.mof.gov.tw）。", content_en: "<strong>1. Awards</strong>\n(1) Top Prize: The top 3 winning entries selected by the Centennial Celebration Promotion Committee each receive a certificate and prize money: 1st place NT$10,000, 2nd place NT$8,000, 3rd place NT$6,000.\n(2) Honorable Mention: Two entries that reach the final selection but do not receive a Top Prize each receive a certificate and NT$3,000.\n<strong>2. Substitution and Vacancy</strong>\nIf an award-winning entry is disqualified for any reason, runner-up entries will be substituted in order. If no entries meet the judging standards, the institute reserves the right to leave awards vacant.\n<strong>3. Copyright Transfer</strong>\nWinners must sign the \"Copyright Transfer Agreement\" after being notified before prize money can be disbursed.\n<strong>4. Payment Method</strong>\n(1) Prizes are paid by wire transfer. Winners must provide their own bank account details.\n(2) Winners must provide a receipt and relevant identification/account documents to facilitate reimbursement procedures.\n<strong>5. Taxation</strong>\nIn accordance with R.O.C. tax law, the value of prizes is counted as personal income and tax will be withheld. For details, please refer to the Ministry of Finance website (https://www.mof.gov.tw).", show: true },
      { title_zh: "注意事項", title_en: "Terms & Notes", content_zh: "<strong>一、費用與退件說明</strong>\n參與本徵選活動衍生之相關費用（如通訊費、網路費等）由參加者自行負擔；所有參選文案及報名資料一律不予退件。\n<strong>二、原創保證與法律責任</strong>\n參賽標語須為自行創作之原創文案，且未曾公開發表、獲獎或與其他活動重複投稿。參賽者須保證作品無侵害他人智慧財產權、著作權或利用生成式AI創作之情事；若涉有抄襲、剽竊或第三人主張權利受侵害，法律責任由參賽者自負，若致本院受有損害者，本院得向其請求賠償及追究相關責任。本院得取消其參賽與得獎資格，並追回已核發之獎金及獎狀。\n<strong>三、著作權歸屬與行使</strong>\n獲獎者同意自獲獎公告日起，將得獎作品之著作財產權無償讓與中央研究院，並承諾對本院及其授權利用之人不行使著作人格權。本院依法擁有包含重製、改作、公開發表、主視覺搭配文案及各類文宣周邊開發等一切使用權利，亦不需另支付使用報酬。\n<strong>四、院名使用與品牌聲明</strong>\n參賽者於創作標語時得結合本院院名；惟參賽作品於本活動期間及未獲獎前，參賽者不得擅自以本院名義或獲本院授權名義，另作其他商業或非商業用途之宣傳與使用。\n<strong>五、同意條款與最終解釋權</strong>\n（一）凡投稿參加本次徵選者，即視同完全同意並遵守本簡章之各項規定及本院隨時公布之補充說明。\n（二）若參選作品未達評選標準，評審委員會得決議獎項從缺或調整名額。\n（三）本院保有隨時修改、變更、暫停或終止本活動之權利，並保留對本簡章之最終解釋與裁決權。本簡章如有未盡事宜，得由本院隨時補充公告之。", content_en: "<strong>1. Costs and Non-Return of Entries</strong>\nAny costs arising from participation (such as communication and internet fees) are borne by the participant. All submitted entries and registration materials will not be returned.\n<strong>2. Originality Guarantee and Legal Responsibility</strong>\nEntries must be original slogans created by the participant and must not have been publicly released, awarded, or submitted to other competitions. Participants must guarantee that their work does not infringe the intellectual property or copyright of others and was not created using generative AI. In case of plagiarism or a third party's claim of rights infringement, the participant bears all legal responsibility, and if the institute suffers damages, it may claim compensation and pursue related liability. The institute may disqualify the entry and recover any prize money and certificates already issued.\n<strong>3. Copyright Ownership and Exercise</strong>\nFrom the date the winners are announced, winners agree to transfer the copyright of the winning work to Academia Sinica free of charge, and promise not to exercise moral rights against the institute or those authorized by it. The institute lawfully holds all rights of use, including reproduction, adaptation, public release, key visuals paired with the slogan, and the development of various publicity materials and merchandise, without paying any additional royalties.\n<strong>4. Use of the Institute's Name and Branding</strong>\nParticipants may incorporate the institute's name in their slogans; however, during the campaign and before winning, participants may not use the institute's name, or any name authorized by the institute, for other commercial or non-commercial promotion or use.\n<strong>5. Consent and Final Interpretation</strong>\n(1) Anyone who submits an entry is deemed to fully agree to and abide by the rules of these guidelines and any supplementary notices issued by the institute.\n(2) If no entries meet the judging standards, the judging committee may decide to leave awards vacant or adjust the number of awards.\n(3) The institute reserves the right to modify, change, suspend, or terminate this campaign at any time, and reserves the final right of interpretation and decision regarding these guidelines. Matters not covered may be supplemented by the institute at any time.", show: true }
    ],

    faq: [
      { q_zh: "投稿是否需要以本院信箱登入？", q_en: "Do I need to sign in with my institute email to submit?", a_zh: "本院現職同仁請使用院內as.edu.tw信箱登入後，填寫投稿表單。如為本院院士或退休人員者，則可下載投稿表格，填寫後寄至本活動信箱。", a_en: "Current employees should sign in with their institute as.edu.tw email and then fill out the submission form. Academicians and retired staff may download the submission form, complete it, and email it to the campaign mailbox.", show: true },
      { q_zh: "每個人可以投稿幾件作品？可以用生成式AI協助創作嗎？", q_en: "How many entries can each person submit? May I use generative AI to help create my slogan?", a_zh: "每人投稿以1件為限。參賽作品須為未曾公開發表之原創標語，且嚴禁利用生成式AI創作；若有抄襲或侵權情事，法律責任由參賽者自負，本院得取消資格並追回獎金與獎狀。", a_en: "Each person may submit only one entry. Entries must be original slogans that have not been publicly released, and the use of generative AI is strictly prohibited. In case of plagiarism or infringement, the participant bears all legal responsibility, and the institute may disqualify the entry and recover any prize money and certificates.", show: true },
      { q_zh: "標語投稿後可以修改內容嗎？", q_en: "Can I edit my slogan after submitting?", a_zh: "投稿送出前請務必確認內容無誤，送出後無法異動投稿內容，請於送出前仔細確認後再送出。系統將以正式送出時間作為時間戳記依據。", a_en: "Please make sure your entry is correct before submitting. Once submitted, the content cannot be changed, so please review it carefully first. The system uses the official submission time as the timestamp.", show: true },
      { q_zh: "評審過程會看到我的姓名和服務單位嗎？", q_en: "Will judges see my name and department during review?", a_zh: "不會。評審委員於評分過程中無法得知投稿人姓名及服務單位資訊，確保評選公平客觀。", a_en: "No. Judges cannot see the submitter's name or department during scoring, ensuring a fair and objective selection.", show: true },
      { q_zh: "得獎名單什麼時候公布？會公布在哪裡？", q_en: "When and where will the winners be announced?", a_zh: "預計2026年12月進行決選，並於2027年1月於本院官方網站及本活動網頁公告得獎名單。", a_en: "The final selection is expected in December 2026, and the winners will be announced on the institute's official website and this campaign page in January 2027.", show: true }
    ],

    footerLinks: [
      { name_zh: "中央研究院官方網站", name_en: "Academia Sinica Official Website", url: "https://www.sinica.edu.tw", type: "logo", show: true },
      { name_zh: "中研院IG", name_en: "About Academia Sinica", url: "https://www.instagram.com/sinica.tw/", type: "instagram", show: true },
      { name_zh: "中研院 Facebook", name_en: "AS Facebook Page", url: "https://www.facebook.com/sinicaedu", type: "facebook", show: true },
      { name_zh: "中研院 YouTube 頻道", name_en: "AS YouTube Channel", url: "https://www.youtube.com/channel/UCPk594oZYMU4Eak7By5wHyQ", type: "youtube", show: true }
    ]
  };

  // 當前全域資料儲存
  let liveData = loadCachedData() || JSON.parse(JSON.stringify(DEFAULT_DATA));
  let currentLang = localStorage.getItem("as_slogan_lang") || "zh";
  let hero2CountdownTimer = null; // 主視覺版面二的倒數計時器 interval id，重新渲染時要先清掉舊的再開新的

  // ========================================================
  // 2. 快取載入與儲存
  // ========================================================
  function loadCachedData() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        // 防呆：舊版快取可能是在新增某些頂層欄位（例如 sections）之前存的，
        // 直接回傳會讓畫面渲染時讀到 undefined 而整頁報錯。這裡改成跟預設
        // 資料做一層合併，快取裡沒有的頂層欄位就補回預設值。
        const parsed = JSON.parse(cached);
        return Object.assign(JSON.parse(JSON.stringify(DEFAULT_DATA)), parsed);
      }
    } catch (e) {
      console.warn("無法讀取本地快取：", e);
    }
    return null;
  }

  function saveCacheData(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("無法寫入本地快取：", e);
    }
  }

  // ========================================================
  // 3. Google 試算表即時連線 API 讀取
  // ========================================================
  // expectedHeaders：[A欄標題, B欄標題]。Google 的 gviz 端點在分頁名稱不存在時，
  // 不會回傳錯誤，而是靜默 fallback 回試算表第一個分頁的內容——曾實際造成資料錯亂。
  // 因此這裡強制核對回傳的標題列，不符合就視為「分頁讀不到」（可能剛建立、gviz 索引
  // 還沒跟上、或名稱打錯）回傳 null；呼叫端遇到 null 時維持畫面原本內容，不會被清空。
  //
  // 回傳 null 跟回傳 [] 是刻意分開的兩種情況：
  //   null → 分頁本身讀不到／讀取失敗，暫時性問題，畫面應該維持原本內容
  //   []   → 分頁讀得到，但目前真的沒有任何資料列，屬於「使用者主動清空」，
  //          畫面應該照實反映（該區塊/欄位不顯示），不套用 cms.js 內建的預設文字
  async function fetchSheetJson(sheetName, expectedHeaders) {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?headers=1&tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/s);
    if (!match) throw new Error("Invalid GViz format");
    const json = JSON.parse(match[1]);
    if (!json.table) return null;

    if (Array.isArray(expectedHeaders) && expectedHeaders.length > 0) {
      const cols = json.table.cols || [];
      const headerMismatch = expectedHeaders.some((expected, idx) => (cols[idx] && cols[idx].label) !== expected);
      if (headerMismatch) {
        console.warn(`[Google Sheets CMS] 分頁「${sheetName}」尚不存在或欄位標題不符，暫時略過，畫面維持原本內容。`);
        return null;
      }
    }

    if (!json.table.rows) return [];

    return json.table.rows.map(r =>
      (r.c || []).map(cell => {
        if (!cell) return "";
        if (cell.f !== null && cell.f !== undefined && String(cell.f).trim() !== "") {
          return String(cell.f).trim();
        }
        return cell.v !== null && cell.v !== undefined ? String(cell.v).trim() : "";
      })
    );
  }

  async function syncFromGoogleSheets() {
    updateSyncBadge("loading", currentLang === "zh" ? "同步雲端資料中..." : "Syncing Google Sheets...");
    try {
      // 1. 全站與主視覺
      // rows 為 null 代表分頁暫時讀不到，維持畫面原本內容；rows 為 []（分頁讀得到但
      // 沒有資料列）或有資料時，都整個重建 liveData.settings，試算表沒填的欄位就不
      // 會出現在畫面上，不會被 cms.js 內建的預設文字頂著。
      const settingsRows = await fetchSheetJson("全站與主視覺", ["設定項目代碼 (Key)", "項目說明 (Description)"]);
      if (settingsRows !== null) {
        liveData.settings = {};
        settingsRows.forEach(row => {
          const key = row[0];
          const zh = row[2];
          const en = row[3];
          if (key && (zh || en)) {
            liveData.settings[key] = {};
            if (zh) liveData.settings[key].zh = zh;
            if (en) liveData.settings[key].en = en;
          }
        });
      }

      // 1.5 各區塊設定：標題／說明／順序／顯示開關，一列對應一個功能區塊，
      // 同一列即可調整該區塊的全部設定（取代原本散落在「全站與主視覺」裡
      // 好幾個獨立 Key 的舊做法）。分頁讀不到時（null）畫面維持原本內容；
      // 讀得到時整個重建，某個區塊的列被刪掉，該區塊就不會再有標題/說明。
      const sectionRows = await fetchSheetJson("各區塊設定", ["區塊代碼 (勿改)", "中文標題"]);
      if (sectionRows !== null) {
        liveData.sections = {};
        sectionRows.forEach(row => {
          const key = row[0];
          if (!key) return;
          liveData.sections[key] = {
            title_zh: row[1] || "",
            title_en: row[2] || row[1] || "",
            desc_zh: row[3] || "",
            desc_en: row[4] || row[3] || "",
            order: row[5] || undefined,
            show: row[6] !== "否"
          };
        });
      }

      // 2. 最新消息
      const newsRows = await fetchSheetJson("最新消息", ["順序", "消息標題 (中)"]);
      if (newsRows !== null) {
        liveData.news = newsRows.map(row => ({
          title_zh: row[1] || "",
          title_en: row[2] || row[1] || "",
          date_zh: row[3] || "",
          date_en: row[4] || row[3] || "",
          content_zh: row[5] || "",
          content_en: row[6] || row[5] || "",
          show: row[7] !== "否"
        }));
      }

      // 3. 重要時程
      // 欄位 K/L/M/N（索引10-13，選填）：「圖示大字(中)/(英)」「圖示小字(中)/(英)」，
      // 用來控制時程圓圈徽章顯示的文字。留空則自動 fallback 為預設四階段樣式。
      const timelineRows = await fetchSheetJson("重要時程", ["順序", "階段名稱 (中)"]);
      if (timelineRows !== null) {
        timelineRows.forEach((row, idx) => {
          let circleMainZh = "10月";
          let circleSubZh = "01日";
          let circleMainEn = "OCT";
          let circleSubEn = "01";

          if (idx === 0) {
            circleMainZh = "10月"; circleSubZh = "01日";
            circleMainEn = "OCT"; circleSubEn = "01";
          } else if (idx === 1) {
            circleMainZh = "10月"; circleSubZh = "31日";
            circleMainEn = "OCT"; circleSubEn = "31";
          } else if (idx === 2) {
            circleMainZh = "11月"; circleSubZh = "初審";
            circleMainEn = "NOV"; circleSubEn = "2026";
          } else if (idx === 3) {
            circleMainZh = "12月"; circleSubZh = "揭曉";
            circleMainEn = "DEC"; circleSubEn = "2026";
          }

          row.__circleMainZh = circleMainZh;
          row.__circleSubZh = circleSubZh;
          row.__circleMainEn = circleMainEn;
          row.__circleSubEn = circleSubEn;
        });

        liveData.timeline = timelineRows.map((row, idx) => ({
          circle_main_zh: row[10] || row.__circleMainZh,
          circle_sub_zh: row[12] || row.__circleSubZh,
          circle_main_en: row[11] || row.__circleMainEn,
          circle_sub_en: row[13] || row.__circleSubEn,
          title_zh: row[1] || "",
          title_en: row[2] || row[1] || "",
          date_zh: row[3] || "",
          date_en: row[4] || row[3] || "",
          desc_zh: row[5] || "",
          desc_en: row[6] || row[5] || "",
          status_zh: row[7] || "",
          status_en: row[8] || row[7] || "",
          active: idx === 0,
          show: row[9] !== "否"
        }));
      }

      // 4. 徵選辦法彈窗
      const rulesRows = await fetchSheetJson("徵選辦法彈窗", ["順序", "章節名稱 (中)"]);
      if (rulesRows !== null) {
        liveData.rules = rulesRows.map(row => ({
          title_zh: row[1] || "",
          title_en: row[2] || row[1] || "",
          content_zh: row[3] || "",
          content_en: row[4] || row[3] || "",
          show: row[5] !== "否"
        }));
      }

      // 5. 常見問題與Footer
      const faqFooterRows = await fetchSheetJson("常見問題與Footer", ["類別", "順序"]);
      if (faqFooterRows !== null) {
        const faqs = [];
        const footers = [];
        faqFooterRows.forEach(row => {
          const type = row[0];
          if (type === "FAQ") {
            faqs.push({
              q_zh: row[2] || "",
              q_en: row[3] || row[2] || "",
              a_zh: row[4] || "",
              a_en: row[5] || row[4] || "",
              show: row[7] !== "否"
            });
          } else if (type === "Footer連結") {
            footers.push({
              name_zh: row[2] || "",
              name_en: row[3] || row[2] || "",
              url: row[4] || "#",
              type: row[6] || "web",
              show: row[7] !== "否"
            });
          }
        });
        liveData.faq = faqs;
        liveData.footerLinks = footers;
      }

      // 6. 入圍名單公告
      // 欄位 J/K（索引9-10，選填）：「創作理念說明(中)/(英)」，加在原本欄位最後面（而非插在
      // 「是否顯示」前面），這樣試算表還沒補上這兩欄時，前面既有欄位（含「是否顯示」）的位置
      // 完全不受影響，仍照舊解析；只有補上後 concept 欄位才會有內容。
      const shortlistRows = await fetchSheetJson("入圍名單公告", ["順序", "所別 (中)"]);
      if (shortlistRows !== null) {
        liveData.shortlist = shortlistRows.map(row => ({
          dept_zh: row[1] || "",
          dept_en: row[2] || row[1] || "",
          name_zh: row[3] || "",
          name_en: row[4] || row[3] || "",
          sso: row[5] || "",
          slogan_zh: row[6] || "",
          slogan_en: row[7] || "",
          show: row[8] !== "否",
          concept_zh: row[9] || "",
          concept_en: row[10] || row[9] || ""
        }));
      }

      // 7. 得獎公告（欄位 L/M 為選填的創作理念說明，同上原則加在最後面）
      const winnersRows = await fetchSheetJson("得獎公告", ["順序", "獎項 (中)"]);
      if (winnersRows !== null) {
        liveData.winners = winnersRows.map(row => ({
          award_zh: row[1] || "",
          award_en: row[2] || row[1] || "",
          dept_zh: row[3] || "",
          dept_en: row[4] || row[3] || "",
          name_zh: row[5] || "",
          name_en: row[6] || row[5] || "",
          sso: row[7] || "",
          slogan_zh: row[8] || "",
          slogan_en: row[9] || "",
          show: row[10] !== "否",
          concept_zh: row[11] || "",
          concept_en: row[12] || row[11] || ""
        }));
      }

      saveCacheData(liveData);
      renderPage(currentLang);
      updateSyncBadge("success", currentLang === "zh" ? "雲端試算表已連線" : "Synced with Google Sheet");
    } catch (err) {
      console.warn("Google Sheet 同步失敗，使用本地備援資料：", err);
      updateSyncBadge("offline", currentLang === "zh" ? "離線/預設模式" : "Default Mode");
    }
  }

  // ========================================================
  // 4. 畫面渲染與中英文切換 (DOM Updater)
  // ========================================================
  function renderPage(lang) {
    currentLang = lang;
    localStorage.setItem("as_slogan_lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

    const s = liveData.settings;
    const isEn = lang === "en";

    // 1. 頁面標題
    if (s.site_title) {
      document.title = isEn ? s.site_title.en : s.site_title.zh;
    }

    // 2. 導覽列品牌文字
    const brandTitleEl = document.querySelector(".nav-brand-title");
    const brandSubEl = document.querySelector(".nav-brand-subtitle");
    if (brandTitleEl && s.brand_title) brandTitleEl.textContent = isEn ? s.brand_title.en : s.brand_title.zh;
    if (brandSubEl && s.brand_subtitle) brandSubEl.textContent = isEn ? s.brand_subtitle.en : s.brand_subtitle.zh;

    // 3. 導覽選單項目（依 data-navkey 對應，不依賴 DOM 順序，重新排序後仍正確）
    const navLinks = document.querySelectorAll(".nav-links a.nav-link[data-navkey]");
    navLinks.forEach(link => {
      const k = link.dataset.navkey;
      if (k && s[k]) link.textContent = isEn ? s[k].en : s[k].zh;
    });

    // 抽屜選單
    const drawerLinks = document.querySelectorAll(".drawer-links a.drawer-link[data-navkey]");
    drawerLinks.forEach(link => {
      const k = link.dataset.navkey;
      if (k && s[k]) link.textContent = isEn ? s[k].en : s[k].zh;
    });

    // 4. 我要投稿超連結 (所有按鈕同步更新 URL 與文字)
    const formUrl = s.submit_form_url ? (isEn ? s.submit_form_url.en : s.submit_form_url.zh) : "https://forms.gle/aCeM3Rkwap4a8uzX6";
    const submitBtnText = s.hero_btn_submit ? (isEn ? s.hero_btn_submit.en : s.hero_btn_submit.zh) : (isEn ? "Submit Now" : "我要投稿");
    const navSubmitBtnText = s.nav_submit_btn ? (isEn ? s.nav_submit_btn.en : s.nav_submit_btn.zh) : (isEn ? "Submit Now" : "我要投稿");
    const rulesBtnText = s.hero_btn_rules ? (isEn ? s.hero_btn_rules.en : s.hero_btn_rules.zh) : (isEn ? "Guidelines" : "徵選辦法");

    // Header CTA (導覽列投稿按鈕，套用 nav_submit_btn)
    const headerCta = document.getElementById("headerCtaBtn");
    if (headerCta) {
      headerCta.href = formUrl;
      const span = headerCta.querySelector("span:first-child");
      if (span) span.textContent = navSubmitBtnText;
    }

    // Desktop Hero Buttons
    const desktopSubmit = document.getElementById("desktopSubmitBtn");
    if (desktopSubmit) {
      desktopSubmit.href = formUrl;
      const span = desktopSubmit.querySelector("span:nth-child(2)");
      if (span) span.textContent = submitBtnText;
    }
    const desktopRules = document.getElementById("desktopRulesBtn");
    if (desktopRules) {
      const span = desktopRules.querySelector("span:first-child");
      if (span) span.textContent = rulesBtnText;
    }

    // Mobile Hero Content
    const mTitleMain = document.querySelector(".mobile-title-main");
    const mTitleSub = document.querySelector(".mobile-title-sub");
    const mQuote = document.querySelector(".mobile-lead-quote");
    if (mTitleMain && s.hero_main_title) mTitleMain.textContent = isEn ? s.hero_main_title.en : s.hero_main_title.zh;
    if (mTitleSub && s.hero_sub_title) mTitleSub.textContent = isEn ? s.hero_sub_title.en : s.hero_sub_title.zh;
    if (mQuote && s.hero_quote) mQuote.textContent = isEn ? s.hero_quote.en : s.hero_quote.zh;

    const mobileSubmit = document.getElementById("mobileSubmitBtn");
    if (mobileSubmit) {
      mobileSubmit.href = formUrl;
      const span = mobileSubmit.querySelector("span:nth-child(2)");
      if (span) span.textContent = submitBtnText;
    }
    const mobileRules = document.getElementById("mobileRulesBtn");
    if (mobileRules) {
      const span = mobileRules.querySelector("span:first-child");
      if (span) span.textContent = rulesBtnText;
    }

    // Drawer Submit Button (導覽抽屜，套用 nav_submit_btn)
    const drawerSubmit = document.getElementById("drawerSubmitBtn");
    if (drawerSubmit) {
      drawerSubmit.href = formUrl;
      drawerSubmit.textContent = `${navSubmitBtnText} ›`;
    }

    // Mobile Floating Bar (常駐列，套用 hero_btn_submit)
    const floatingSubmit = document.getElementById("floatingSubmitBtn");
    const floatingRules = document.getElementById("floatingRulesBtn");
    if (floatingSubmit) {
      floatingSubmit.href = formUrl;
      floatingSubmit.textContent = `${submitBtnText} ›`;
    }
    if (floatingRules) {
      floatingRules.textContent = isEn ? "Guidelines" : "徵選辦法";
    }

    // 4.6. 主視覺圖片（可由試算表 hero_desktop_img / hero_mobile_logo / hero_mobile_campus 覆寫）
    applyPictureImage(document.querySelector(".hero-poster-img"), s.hero_desktop_img && (isEn ? s.hero_desktop_img.en : s.hero_desktop_img.zh));
    applyPictureImage(document.querySelector(".mobile-100-img"), s.hero_mobile_logo && (isEn ? s.hero_mobile_logo.en : s.hero_mobile_logo.zh));
    applyMobileCampusBg(s.hero_mobile_campus && (isEn ? s.hero_mobile_campus.en : s.hero_mobile_campus.zh));

    // 4.7. 主視覺版面一／二切換（試算表 hero_layout 填 "2" 時顯示深色背景＋倒數計時器版面）
    applyHeroLayout(lang, formUrl, rulesBtnText);

    // 4.8. 投稿前登入提醒視窗：login_notice_show 填「否」就關閉（按鈕直接前往表單），
    // 沒有這個設定列或填「是」都會顯示。文字部分試算表沒填的欄位，維持 HTML 裡寫好的預設文字。
    document.body.dataset.loginNotice = (s.login_notice_show && s.login_notice_show.zh === "否") ? "off" : "on";
    [
      ["loginNoticeTitle", "login_notice_title"],
      ["loginNoticeConfirm", "login_notice_confirm"],
      ["loginNoticeCancel", "login_notice_cancel"]
    ].forEach(([id, key]) => {
      const node = document.getElementById(id);
      if (node && s[key]) node.textContent = isEn ? s[key].en : s[key].zh;
    });

    // login_notice_body 允許在 Excel 裡直接打 <br>／<span> 等簡單 HTML 做排版
    // （跟「最新消息」內容欄位同一套做法），所以這裡用 innerHTML 而不是 textContent。
    const loginNoticeBodyEl = document.getElementById("loginNoticeBody");
    if (loginNoticeBodyEl && s.login_notice_body) {
      loginNoticeBodyEl.innerHTML = isEn ? s.login_notice_body.en : s.login_notice_body.zh;
    }

    // 「本院院士、退休院友」按鈕：按下後開啟這個網址（通常是 Word 文件下載連結），
    // 沒有在 Excel 填 login_notice_alumni_doc_url 的話就維持原本行為（只關視窗、不跳轉）。
    const loginNoticeCancelBtn = document.getElementById("loginNoticeCancel");
    if (loginNoticeCancelBtn) {
      loginNoticeCancelBtn.dataset.docUrl = s.login_notice_alumni_doc_url
        ? (isEn ? s.login_notice_alumni_doc_url.en : s.login_notice_alumni_doc_url.zh)
        : "";
    }

    // 5. 最新消息區塊渲染
    renderNews(lang);

    // 6. Timeline 時程渲染
    renderTimeline(lang);

    // 7. 徵選辦法彈窗渲染
    renderRules(lang);

    // 8. FAQ 問答渲染
    renderFaq(lang);

    // 9. 入圍名單公告渲染
    renderShortlist(lang);

    // 10. 得獎公告渲染
    renderWinners(lang);

    // 11. Footer 內容
    renderFooter(lang);

    // 12. 依試算表設定的「順序」重新排列區塊與對應選單項目
    applySectionOrder();

    // 更新語系開關按鈕狀態
    updateLangSwitchUI(lang);
  }

  // 手風琴展開/收合共用綁定邏輯（FAQ、最新消息皆使用）
  function bindAccordion(container, itemClass) {
    container.querySelectorAll(`.${itemClass}`).forEach(item => {
      const btn = item.querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
          container.querySelectorAll(`.${itemClass}`).forEach(other => {
            other.classList.remove("open");
            const icon = other.querySelector(".faq-icon");
            if (icon) icon.textContent = "+";
          });
          if (!isOpen) {
            item.classList.add("open");
            const icon = item.querySelector(".faq-icon");
            if (icon) icon.textContent = "×";
          }
        });
      }
    });
  }

  // 渲染「最新消息」手風琴（原「活動三大核心重點」區塊）
  function renderNews(lang) {
    const isEn = lang === "en";
    const sec = liveData.sections.highlights || {};
    applySectionToggle("#highlights", "nav_highlights", sec.show !== false);
    const headerTitle = document.querySelector("#highlights .section-title");
    const headerDesc = document.querySelector("#highlights .section-desc");
    if (headerTitle && sec.title_zh) headerTitle.textContent = isEn ? sec.title_en : sec.title_zh;
    if (headerDesc && sec.desc_zh) headerDesc.textContent = isEn ? sec.desc_en : sec.desc_zh;

    const accordion = document.getElementById("newsAccordion");
    if (!accordion || !liveData.news) return;

    accordion.innerHTML = liveData.news
      .filter(n => n.show)
      .map((n, idx) => {
        const title = isEn ? n.title_en : n.title_zh;
        const date = ((isEn ? n.date_en : n.date_zh) || "").trim();
        const content = isEn ? n.content_en : n.content_zh;
        return `
          <div class="faq-item news-item ${idx === 0 ? "open" : ""}">
            <button class="faq-question" type="button" aria-expanded="${idx === 0 ? "true" : "false"}">
              <span>${date ? `<span class="news-date">${date}</span>` : ""}${title}</span>
              <span class="faq-icon">${idx === 0 ? "×" : "+"}</span>
            </button>
            <div class="faq-answer"><div class="faq-answer-inner">
              ${content}
            </div></div>
          </div>
        `;
      })
      .join("");

    bindAccordion(accordion, "news-item");
  }

  // 渲染 Timeline 時程
  function renderTimeline(lang) {
    const isEn = lang === "en";
    const sec = liveData.sections.timeline || {};
    applySectionToggle("#timeline", "nav_timeline", sec.show !== false);
    const headerTitle = document.querySelector("#timeline .section-title");
    const headerDesc = document.querySelector("#timeline .section-desc");
    if (headerTitle && sec.title_zh) headerTitle.textContent = isEn ? sec.title_en : sec.title_zh;
    if (headerDesc && sec.desc_zh) headerDesc.textContent = isEn ? sec.desc_en : sec.desc_zh;

    const wrap = document.querySelector(".timeline-wrap");
    if (!wrap || !liveData.timeline) return;

    wrap.innerHTML = liveData.timeline
      .filter(t => t.show)
      .map((t, idx) => {
        const title = isEn ? t.title_en : t.title_zh;
        const desc = isEn ? t.desc_en : t.desc_zh;
        const circleMain = isEn ? (t.circle_main_en || "OCT") : (t.circle_main_zh || "10月");
        const circleSub = isEn ? (t.circle_sub_en || "01") : (t.circle_sub_zh || "01日");
        const status = isEn ? t.status_en : t.status_zh;
        return `
          <div class="timeline-step ${t.active ? "active" : ""}">
            <div class="step-circle">
              <span class="step-circle-main">${circleMain}</span>
              <span class="step-circle-sub">${circleSub}</span>
            </div>
            <div class="step-content-wrap">
              <span class="step-status-pill">${status}</span>
              <h3 class="step-title">${title}</h3>
              <p class="step-desc">${desc}</p>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // 渲染 徵選辦法彈窗
  function renderRules(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;

    const dialogTitle = document.querySelector(".dialog-header-title");
    if (dialogTitle && s.dialog_title) dialogTitle.textContent = isEn ? s.dialog_title.en : s.dialog_title.zh;

    const dialogBody = document.querySelector(".dialog-rules-list");
    const formUrl = liveData.settings.submit_form_url ? (isEn ? liveData.settings.submit_form_url.en : liveData.settings.submit_form_url.zh) : "https://forms.gle/aCeM3Rkwap4a8uzX6";

    if (dialogBody && liveData.rules) {
      dialogBody.innerHTML = liveData.rules
        .filter(r => r.show)
        .map(r => {
          const title = isEn ? r.title_en : r.title_zh;
          const content = isEn ? r.content_en : r.content_zh;
          const lines = content.split("\n").filter(Boolean);
          const bodyHtml = lines.map(line => `<p style="margin-bottom: 8px;">${line}</p>`).join("");
          return `
            <h3>${title}</h3>
            <div>${bodyHtml}</div>
          `;
        })
        .join("");
    }

    const closeBtnText = document.getElementById("dialogCancelBtn");
    if (closeBtnText) closeBtnText.textContent = s.dialog_close_btn ? (isEn ? s.dialog_close_btn.en : s.dialog_close_btn.zh) : (isEn ? "Close" : "關閉視窗");

    const dialogSubmitBtn = document.getElementById("dialogSubmitBtn");
    if (dialogSubmitBtn) {
      dialogSubmitBtn.href = formUrl;
      dialogSubmitBtn.textContent = s.dialog_submit_btn ? (isEn ? s.dialog_submit_btn.en : s.dialog_submit_btn.zh) : (isEn ? "Submit Now ›" : "前往表單投稿 ›");
    }

    // 「詳細辦法」在「各區塊設定」分頁的「是否顯示」填「否」時，只隱藏導覽列/抽屜選單裡
    // 的「詳細辦法」項目，不影響其他「徵選辦法」按鈕（主視覺、手機常駐列），那些按鈕
    // 本來就是各自獨立的行動呼籲，不算是「導覽」。
    const showRules = (liveData.sections.rules || {}).show !== false;
    document.querySelectorAll('[data-navkey="nav_rules"]').forEach(link => {
      const li = link.closest("li");
      if (li) li.hidden = !showRules;
    });
  }

  // 切換整個區塊（連同對應的導覽選單項目）的顯示/隱藏
  // sectionSelector：區塊的 CSS selector；navKey：對應的 nav_* 設定鍵（用 data-navkey 查找元素，不依賴 DOM 順序）；show：是否顯示（布林值）
  function applySectionToggle(sectionSelector, navKey, show) {
    const section = document.querySelector(sectionSelector);
    if (section) section.hidden = !show;

    const navLink = document.querySelector(`.nav-links a.nav-link[data-navkey="${navKey}"]`);
    const navLi = navLink && navLink.closest("li");
    if (navLi) navLi.hidden = !show;

    const drawerLink = document.querySelector(`.drawer-links a.drawer-link[data-navkey="${navKey}"]`);
    const drawerLi = drawerLink && drawerLink.closest("li");
    if (drawerLi) drawerLi.hidden = !show;

    const footerLink = document.querySelector(`.footer-quicklink[data-navkey="${navKey}"]`);
    const footerLi = footerLink && footerLink.closest("li");
    if (footerLi) footerLi.hidden = !show;
  }

  // 依試算表的「順序」設定，重新排列首頁區塊（主視覺之後、頁尾之前）與對應的導覽選單項目。
  // 「詳細辦法」只有導覽項目、沒有實體區塊（點擊會開彈窗），這裡只影響選單排序；
  // 導覽項目本身的顯示/隱藏（「各區塊設定」的「是否顯示」）在 renderRules() 裡處理。
  function applySectionOrder() {
    const sections = liveData.sections;
    const parseOrder = (sec, fallback) => {
      const n = sec && parseFloat(sec.order);
      return Number.isFinite(n) ? n : fallback;
    };

    const orderMap = {
      nav_highlights: parseOrder(sections.highlights, 1),
      nav_timeline: parseOrder(sections.timeline, 2),
      nav_rules: parseOrder(sections.rules, 3),
      nav_faq: parseOrder(sections.faq, 4),
      nav_shortlist: parseOrder(sections.shortlist, 5),
      nav_winners: parseOrder(sections.winners, 6)
    };

    // 1. 重新排列 <main> 內的實體區塊。做法：算出「完整」子元素順序陣列（hero 固定第一，
    //    可排序區塊依 orderMap 排序接在後面），一次用 append(...) 套用，避免逐一 appendChild
    //    時和未參與排序的既有子節點互相干擾、順序跑掉。
    const main = document.getElementById("main-content");
    const sectionIdByKey = {
      nav_highlights: "highlights",
      nav_timeline: "timeline",
      nav_shortlist: "shortlist",
      nav_winners: "winners",
      nav_faq: "faq"
    };
    if (main) {
      const heroEl = document.getElementById("hero-top");
      const movableEls = Object.keys(sectionIdByKey)
        .map(navKey => ({ navKey, order: orderMap[navKey], el: document.getElementById(sectionIdByKey[navKey]) }))
        .filter(item => item.el)
        .sort((a, b) => a.order - b.order)
        .map(item => item.el);
      const known = new Set([heroEl, ...movableEls]);
      const others = Array.from(main.children).filter(el => !known.has(el));
      main.append(...(heroEl ? [heroEl] : []), ...movableEls, ...others);
    }

    // 2. 同樣的邏輯重新排列導覽選單／抽屜選單／頁尾快速連結：
    //    「活動首頁」固定第一，可排序項目依 orderMap 排序，其餘未參與排序的項目（例如頁尾的
    //    院外官網連結）維持在最後，一次用 append(...) 套用。
    ["ul.nav-links", "ul.drawer-links", "ul.footer-list"].forEach(listSelector => {
      const list = document.querySelector(listSelector);
      if (!list) return;
      const allItems = Array.from(list.children);
      const heroLi = allItems.find(li => li.querySelector('[data-navkey="nav_hero"]'));
      const movableLis = allItems
        .filter(li => {
          const dn = li.querySelector("[data-navkey]");
          return dn && dn.dataset.navkey !== "nav_hero";
        })
        .sort((a, b) => {
          const ka = a.querySelector("[data-navkey]").dataset.navkey;
          const kb = b.querySelector("[data-navkey]").dataset.navkey;
          return (orderMap[ka] ?? 99) - (orderMap[kb] ?? 99);
        });
      const known = new Set([heroLi, ...movableLis]);
      const others = allItems.filter(li => !known.has(li));
      list.append(...(heroLi ? [heroLi] : []), ...movableLis, ...others);
    });
  }

  // 套用主視覺圖片（若試算表提供的網址與目前 src 不同，移除 <picture> 內的 <source> 以確保實際顯示新圖）
  function applyPictureImage(imgEl, url) {
    if (!imgEl || !url) return;
    if (imgEl.getAttribute("src") === url) return;
    const picture = imgEl.closest("picture");
    if (picture) {
      picture.querySelectorAll("source").forEach(src => src.remove());
    }
    imgEl.src = url;
  }

  // 套用手機版院區風景背景圖（維持原本的漸層遮罩效果）
  function applyMobileCampusBg(url) {
    if (!url) return;
    const mobileHero = document.querySelector(".hero-mobile-layout");
    if (!mobileHero) return;
    mobileHero.style.backgroundImage =
      "linear-gradient(180deg, rgba(254, 252, 248, 0.94) 0%, rgba(254, 252, 248, 0.84) 45%, rgba(254, 252, 248, 0.92) 80%, #faf6ef 100%), url('" + url + "')";
  }

  // 依「全站與主視覺」分頁的 hero_layout（"1" 或 "2"）切換顯示哪一組主視覺
  function applyHeroLayout(lang, formUrl, rulesBtnDefaultText) {
    const s = liveData.settings;
    const isEn = lang === "en";
    const layout1 = document.querySelector(".hero-layout-1");
    const layout2 = document.querySelector(".hero-layout-2");
    const useLayout2 = s.hero_layout && s.hero_layout.zh === "2";

    if (layout1) layout1.hidden = useLayout2;
    if (layout2) layout2.hidden = !useLayout2;

    if (useLayout2) renderHero2(lang, formUrl, rulesBtnDefaultText);
  }

  // 渲染主視覺版面二：深色背景（圖片或 YouTube 影片）＋ 倒數計時器
  function renderHero2(lang, formUrl, rulesBtnDefaultText) {
    const s = liveData.settings;
    const isEn = lang === "en";

    const badge = document.querySelector(".hero2-badge");
    if (badge && s.hero2_badge_text) badge.textContent = isEn ? s.hero2_badge_text.en : s.hero2_badge_text.zh;

    const title = document.querySelector(".hero2-title");
    if (title && s.hero2_title) {
      const text = isEn ? s.hero2_title.en : s.hero2_title.zh;
      title.innerHTML = text.split("\n").filter(Boolean).map(line => line).join("<br />");
    }

    const subtitle = document.querySelector(".hero2-subtitle");
    if (subtitle && s.hero2_subtitle) subtitle.textContent = isEn ? s.hero2_subtitle.en : s.hero2_subtitle.zh;

    const cdLabel = document.querySelector(".hero2-countdown-label");
    if (cdLabel && s.hero2_countdown_label) cdLabel.textContent = isEn ? s.hero2_countdown_label.en : s.hero2_countdown_label.zh;

    const cdCaption = document.querySelector(".hero2-countdown-caption");
    if (cdCaption && s.hero2_countdown_caption) cdCaption.textContent = isEn ? s.hero2_countdown_caption.en : s.hero2_countdown_caption.zh;

    // 背景：試算表 hero2_bg_type 填 "video" 且有填 YouTube ID 時顯示背景影片，否則用背景圖片
    const bgImg = document.querySelector(".hero2-bg-img");
    const bgVideoWrap = document.querySelector(".hero2-bg-video-wrap");
    const bgVideo = document.querySelector(".hero2-bg-video");
    const bgType = s.hero2_bg_type ? s.hero2_bg_type.zh : "image";
    const youtubeId = s.hero2_bg_youtube_id ? (isEn ? s.hero2_bg_youtube_id.en : s.hero2_bg_youtube_id.zh) : "";

    if (bgType === "video" && youtubeId) {
      if (bgImg) bgImg.hidden = true;
      if (bgVideoWrap) bgVideoWrap.hidden = false;
      if (bgVideo) {
        // 用 youtube-nocookie.com（隱私加強模式）+ 隱藏控制列/鍵盤互動，做法跟參考的示意站一致，
        // loop=1 搭配 playlist=自己的影片 ID 是 YouTube 嵌入播放器單支影片自動循環的標準寫法。
        const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}` +
          `?autoplay=1&mute=1&loop=1&playlist=${encodeURIComponent(youtubeId)}` +
          `&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3` +
          `&disablekb=1&fs=0&playsinline=1`;
        if (bgVideo.getAttribute("src") !== embedUrl) bgVideo.src = embedUrl;
      }
    } else {
      if (bgVideoWrap) bgVideoWrap.hidden = true;
      if (bgImg) {
        bgImg.hidden = false;
        const imgUrl = s.hero2_bg_image ? (isEn ? s.hero2_bg_image.en : s.hero2_bg_image.zh) : "assets/campus-aerial.jpg";
        if (imgUrl && bgImg.getAttribute("src") !== imgUrl) bgImg.src = imgUrl;
      }
    }

    // 按鈕：文字用 hero2 專屬設定，但動作沿用既有機制（我要投稿超連結／開啟徵選辦法彈窗）
    const submitBtn = document.getElementById("hero2SubmitBtn");
    if (submitBtn) {
      submitBtn.href = formUrl;
      submitBtn.textContent = s.hero2_btn_submit_text
        ? (isEn ? s.hero2_btn_submit_text.en : s.hero2_btn_submit_text.zh)
        : (isEn ? "Discover the Centennial Series" : "認識百年系列活動");
    }
    const rulesBtn = document.getElementById("hero2RulesBtn");
    if (rulesBtn) {
      rulesBtn.textContent = s.hero2_btn_rules_text
        ? (isEn ? s.hero2_btn_rules_text.en : s.hero2_btn_rules_text.zh)
        : rulesBtnDefaultText;
    }

    startHero2Countdown(s.hero2_countdown_target ? s.hero2_countdown_target.zh : "");
  }

  // 倒數計時器：每秒更新天/時/分/秒，重新渲染（切換語言、Excel 同步）時要先清掉舊的 interval 再開新的，避免重複計時
  function startHero2Countdown(targetStr) {
    if (hero2CountdownTimer) {
      clearInterval(hero2CountdownTimer);
      hero2CountdownTimer = null;
    }
    const target = targetStr ? new Date(targetStr.replace(/-/g, "/")) : null;
    const daysEl = document.getElementById("hero2CdDays");
    const hoursEl = document.getElementById("hero2CdHours");
    const minutesEl = document.getElementById("hero2CdMinutes");
    const secondsEl = document.getElementById("hero2CdSeconds");
    if (!target || isNaN(target.getTime()) || !daysEl) return;

    function tick() {
      const diff = target.getTime() - Date.now();
      const clamped = Math.max(0, diff);
      const days = Math.floor(clamped / 86400000);
      const hours = Math.floor((clamped % 86400000) / 3600000);
      const minutes = Math.floor((clamped % 3600000) / 60000);
      const seconds = Math.floor((clamped % 60000) / 1000);
      daysEl.textContent = String(days);
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
      if (diff <= 0 && hero2CountdownTimer) {
        clearInterval(hero2CountdownTimer);
        hero2CountdownTimer = null;
      }
    }

    tick();
    hero2CountdownTimer = setInterval(tick, 1000);
  }

  // 渲染 Footer 頁尾
  function renderFooter(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;

    const brandTitle = document.querySelector(".footer-brand-title");
    const brandEn = document.querySelector(".footer-brand-en");
    if (brandTitle && s.footer_brand_title) brandTitle.textContent = isEn ? s.footer_brand_title.en : s.footer_brand_title.zh;
    if (brandEn && s.footer_brand_en) brandEn.textContent = isEn ? s.footer_brand_en.en : s.footer_brand_en.zh;

    const descMain = document.querySelector(".footer-desc-main");
    if (descMain && s.footer_desc) {
      const text = isEn ? s.footer_desc.en : s.footer_desc.zh;
      descMain.innerHTML = text.split("\n").filter(Boolean).map(line => line).join("<br />");
    }

    const quickLinksTitle = document.getElementById("footerQuickLinksTitle");
    if (quickLinksTitle && s.footer_quicklinks_title) quickLinksTitle.textContent = isEn ? s.footer_quicklinks_title.en : s.footer_quicklinks_title.zh;

    const quickLinks = document.querySelectorAll(".footer-quicklink[data-navkey]");
    quickLinks.forEach(link => {
      const k = link.dataset.navkey;
      if (k && s[k]) link.textContent = isEn ? s[k].en : s[k].zh;
    });
    const officialLink = document.querySelector(".footer-official-link");
    if (officialLink && s.footer_official_link_text) officialLink.textContent = isEn ? s.footer_official_link_text.en : s.footer_official_link_text.zh;

    const contactTitle = document.getElementById("footerContactTitle");
    if (contactTitle && s.footer_contact_title) contactTitle.textContent = isEn ? s.footer_contact_title.en : s.footer_contact_title.zh;

    const address = document.querySelector(".footer-address");
    if (address && s.footer_address) address.textContent = isEn ? s.footer_address.en : s.footer_address.zh;

    const orgName = document.querySelector(".footer-org-name");
    const contactEmail = document.querySelector(".footer-contact-email");
    const contactPhone = document.querySelector(".footer-contact-phone");
    if (orgName && s.organizer_name) orgName.textContent = isEn ? s.organizer_name.en : s.organizer_name.zh;
    if (contactEmail && s.contact_email) {
      const mail = isEn ? s.contact_email.en : s.contact_email.zh;
      contactEmail.href = `mailto:${mail}`;
      contactEmail.textContent = mail;
    }
    if (contactPhone && s.contact_phone) {
      contactPhone.textContent = isEn ? s.contact_phone.en : s.contact_phone.zh;
    }

    const copyright = document.querySelector(".footer-copyright");
    if (copyright && s.footer_copyright) copyright.textContent = isEn ? s.footer_copyright.en : s.footer_copyright.zh;

    renderFooterLinks(lang);
  }

  // 各平台圖示（依「常見問題與Footer」分頁「Footer連結」列的「類型/圖示」欄位對應，未知類型 fallback 為通用連結圖示）
  // 「logo」為特例：不畫 svg 圖示，改顯示 assets/sinica-logo.png（見 renderFooterLinks）
  const FOOTER_LINK_ICONS = {
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"></path></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5Z"></path></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"></path></svg>'
  };

  // 渲染頁尾右下角的平台圖示連結（資料來源：「常見問題與Footer」分頁的「Footer連結」列）
  // 用 createElement + 屬性賦值而非字串拼接組出 <a href>，避免網址/名稱裡若含特殊字元破壞 HTML 結構
  function renderFooterLinks(lang) {
    const isEn = lang === "en";
    const container = document.getElementById("footerSocialLinks");
    if (!container || !liveData.footerLinks) return;

    container.innerHTML = "";
    liveData.footerLinks
      .filter(l => l.show)
      .forEach(l => {
        const name = (isEn ? l.name_en : l.name_zh) || "";
        const a = document.createElement("a");
        a.href = l.url || "#";
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "footer-social-link";
        if (name) {
          a.setAttribute("aria-label", name);
          a.title = name;
        }
        const typeKey = (l.type || "").trim().toLowerCase();
        if (typeKey === "logo") {
          const img = document.createElement("img");
          img.src = "assets/sinica-logo.png";
          img.alt = name;
          a.appendChild(img);
        } else {
          a.innerHTML = FOOTER_LINK_ICONS[typeKey] || FOOTER_LINK_ICONS.link;
        }
        container.appendChild(a);
      });
  }

  // 渲染 FAQ 常見問題
  function renderFaq(lang) {
    const isEn = lang === "en";
    const sec = liveData.sections.faq || {};
    applySectionToggle("#faq", "nav_faq", sec.show !== false);
    const headerTitle = document.querySelector("#faq .section-title");
    const headerDesc = document.querySelector("#faq .section-desc");
    if (headerTitle && sec.title_zh) headerTitle.textContent = isEn ? sec.title_en : sec.title_zh;
    if (headerDesc && sec.desc_zh) headerDesc.textContent = isEn ? sec.desc_en : sec.desc_zh;

    const accordion = document.getElementById("faqAccordion");
    if (!accordion || !liveData.faq) return;

    accordion.innerHTML = liveData.faq
      .filter(f => f.show)
      .map((f, idx) => {
        const q = isEn ? f.q_en : f.q_zh;
        const a = isEn ? f.a_en : f.a_zh;
        return `
          <div class="faq-item ${idx === 0 ? "open" : ""}">
            <button class="faq-question" type="button" aria-expanded="${idx === 0 ? "true" : "false"}">
              <span>${q}</span>
              <span class="faq-icon">${idx === 0 ? "×" : "+"}</span>
            </button>
            <div class="faq-answer"><div class="faq-answer-inner">
              ${a}
            </div></div>
          </div>
        `;
      })
      .join("");

    bindAccordion(accordion, "faq-item");
  }

  // 遮蔽 SSO 帳號：保留前 2 碼，其餘以全形星號取代
  function maskSso(sso) {
    if (!sso) return "";
    return sso.slice(0, 2) + "＊＊＊＊";
  }

  // 產生單張「入圍/得獎」卡片的 HTML（兩個區塊共用）：頂部識別資訊列（所別/姓名/SSO，各自可關）
  // + 中英文標語 + 創作理念說明（文字較長，獨立成一段，而非硬塞進表格欄位）
  function buildEntryCardHtml(r, isEn, opts) {
    const dept = isEn ? r.dept_en : r.dept_zh;
    const name = isEn ? r.name_en : r.name_zh;
    const sso = opts.maskSsoOn ? maskSso(r.sso) : r.sso;
    const concept = isEn ? r.concept_en : r.concept_zh;

    const metaParts = [];
    if (opts.showAward && (r.award_zh || r.award_en)) {
      metaParts.push(`<span class="award-pill">${isEn ? r.award_en : r.award_zh}</span>`);
    }
    if (opts.showDept && dept) metaParts.push(`<span class="entry-meta-item">${dept}</span>`);
    if (opts.showName && name) metaParts.push(`<span class="entry-meta-item">${name}</span>`);
    if (opts.showSso && sso) metaParts.push(`<span class="entry-meta-item entry-meta-sso">${sso}</span>`);
    const metaHtml = metaParts.length > 0 ? `<div class="entry-card-meta">${metaParts.join("")}</div>` : "";

    const zhHtml = opts.showZh && r.slogan_zh ? `<p class="entry-slogan-zh">${r.slogan_zh}</p>` : "";
    const enHtml = opts.showEn && r.slogan_en ? `<p class="entry-slogan-en">${r.slogan_en}</p>` : "";
    const conceptHtml = opts.showConcept && concept ? `<p class="entry-concept">${concept}</p>` : "";

    return `<article class="entry-card">${metaHtml}${zhHtml}${enHtml}${conceptHtml}</article>`;
  }

  // 入圍/得獎名單每頁筆數，超過時顯示頁籤
  const ENTRY_PAGE_SIZE = 5;
  // 各自記住目前頁數（用物件而非純數字，方便在函式間以參照傳遞、原地修改）；
  // 中英文切換時保留頁數，只有筆數變動導致頁數超出範圍時才會被下面的 clamp 拉回去。
  const shortlistPageState = { page: 1 };
  const winnersPageState = { page: 1 };

  // 將 rows 依 ENTRY_PAGE_SIZE 分頁，渲染當前頁的卡片與頁籤按鈕；點擊頁籤只重繪，不重新拉取資料
  function renderEntryListWithPagination(listEl, paginationEl, rows, isEn, opts, pageState) {
    const totalPages = Math.max(1, Math.ceil(rows.length / ENTRY_PAGE_SIZE));
    if (pageState.page > totalPages) pageState.page = totalPages;
    if (pageState.page < 1) pageState.page = 1;

    const start = (pageState.page - 1) * ENTRY_PAGE_SIZE;
    const pageRows = rows.slice(start, start + ENTRY_PAGE_SIZE);
    listEl.innerHTML = pageRows.map(r => buildEntryCardHtml(r, isEn, opts)).join("");

    if (!paginationEl) return;

    if (totalPages <= 1) {
      paginationEl.hidden = true;
      paginationEl.innerHTML = "";
      return;
    }

    const goToPage = p => {
      pageState.page = p;
      renderEntryListWithPagination(listEl, paginationEl, rows, isEn, opts, pageState);
      listEl.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    let html = `<button type="button" class="entry-page-btn entry-page-prev" ${pageState.page === 1 ? "disabled" : ""} aria-label="${isEn ? "Previous page" : "上一頁"}">‹</button>`;
    for (let p = 1; p <= totalPages; p++) {
      html += `<button type="button" class="entry-page-btn${p === pageState.page ? " active" : ""}" data-page="${p}">${p}</button>`;
    }
    html += `<button type="button" class="entry-page-btn entry-page-next" ${pageState.page === totalPages ? "disabled" : ""} aria-label="${isEn ? "Next page" : "下一頁"}">›</button>`;
    paginationEl.hidden = false;
    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll("[data-page]").forEach(btn => {
      btn.addEventListener("click", () => goToPage(parseInt(btn.dataset.page, 10)));
    });
    const prevBtn = paginationEl.querySelector(".entry-page-prev");
    const nextBtn = paginationEl.querySelector(".entry-page-next");
    if (prevBtn) prevBtn.addEventListener("click", () => { if (pageState.page > 1) goToPage(pageState.page - 1); });
    if (nextBtn) nextBtn.addEventListener("click", () => { if (pageState.page < totalPages) goToPage(pageState.page + 1); });
  }

  // 渲染「入圍名單公告」
  function renderShortlist(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;
    const sec = liveData.sections.shortlist || {};
    applySectionToggle("#shortlist", "nav_shortlist", sec.show !== false);

    const headerTitle = document.querySelector("#shortlist .section-title");
    const headerDesc = document.querySelector("#shortlist .section-desc");
    if (headerTitle && sec.title_zh) headerTitle.textContent = isEn ? sec.title_en : sec.title_zh;
    if (headerDesc && sec.desc_zh) headerDesc.textContent = isEn ? sec.desc_en : sec.desc_zh;

    const list = document.getElementById("shortlistList");
    const pagination = document.getElementById("shortlistPagination");
    const emptyMsg = document.getElementById("shortlistEmpty");
    if (!list) return;

    const opts = {
      showAward: false,
      showDept: !(s.shortlist_show_dept && s.shortlist_show_dept.zh === "否"),
      showName: !(s.shortlist_show_name && s.shortlist_show_name.zh === "否"),
      showSso: !(s.shortlist_show_sso && s.shortlist_show_sso.zh === "否"),
      maskSsoOn: !(s.shortlist_mask_sso && s.shortlist_mask_sso.zh === "否"),
      showZh: !(s.shortlist_show_slogan_zh && s.shortlist_show_slogan_zh.zh === "否"),
      showEn: !(s.shortlist_show_slogan_en && s.shortlist_show_slogan_en.zh === "否"),
      showConcept: !(s.shortlist_show_concept && s.shortlist_show_concept.zh === "否")
    };

    const rows = (liveData.shortlist || []).filter(r => r.show && (r.name_zh || r.name_en || r.slogan_zh));

    if (rows.length === 0) {
      list.innerHTML = "";
      list.hidden = true;
      if (pagination) { pagination.hidden = true; pagination.innerHTML = ""; }
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }

    list.hidden = false;
    if (emptyMsg) emptyMsg.hidden = true;
    renderEntryListWithPagination(list, pagination, rows, isEn, opts, shortlistPageState);
  }

  // 渲染「得獎公告」
  function renderWinners(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;
    const sec = liveData.sections.winners || {};
    applySectionToggle("#winners", "nav_winners", sec.show !== false);

    const headerTitle = document.querySelector("#winners .section-title");
    const headerDesc = document.querySelector("#winners .section-desc");
    if (headerTitle && sec.title_zh) headerTitle.textContent = isEn ? sec.title_en : sec.title_zh;
    if (headerDesc && sec.desc_zh) headerDesc.textContent = isEn ? sec.desc_en : sec.desc_zh;

    const list = document.getElementById("winnersList");
    const pagination = document.getElementById("winnersPagination");
    const emptyMsg = document.getElementById("winnersEmpty");
    if (!list) return;

    const opts = {
      showAward: !(s.winners_show_award && s.winners_show_award.zh === "否"),
      showDept: !(s.winners_show_dept && s.winners_show_dept.zh === "否"),
      showName: !(s.winners_show_name && s.winners_show_name.zh === "否"),
      showSso: !(s.winners_show_sso && s.winners_show_sso.zh === "否"),
      maskSsoOn: !(s.winners_mask_sso && s.winners_mask_sso.zh === "否"),
      showZh: !(s.winners_show_slogan_zh && s.winners_show_slogan_zh.zh === "否"),
      showEn: !(s.winners_show_slogan_en && s.winners_show_slogan_en.zh === "否"),
      showConcept: !(s.winners_show_concept && s.winners_show_concept.zh === "否")
    };

    const rows = (liveData.winners || []).filter(r => r.show && (r.name_zh || r.name_en || r.slogan_zh));

    if (rows.length === 0) {
      list.innerHTML = "";
      list.hidden = true;
      if (pagination) { pagination.hidden = true; pagination.innerHTML = ""; }
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }

    list.hidden = false;
    if (emptyMsg) emptyMsg.hidden = true;
    renderEntryListWithPagination(list, pagination, rows, isEn, opts, winnersPageState);
  }

  // 更新語系切換按鈕狀態
  function updateLangSwitchUI(lang) {
    document.querySelectorAll(".lang-opt, .drawer-lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // 更新連線狀態（靜默記錄於主控台與 body 屬性，不干擾右上角視覺平衡）
  function updateSyncBadge(state, text) {
    console.log(`[Google Sheets CMS] ${state}: ${text}`);
    document.body.setAttribute("data-sheet-sync", state);
    const existing = document.getElementById("sheetSyncBadge");
    if (existing) existing.remove();
  }

  // ========================================================
  // 5. 初始化與事件監聽
  // ========================================================
  window.initCentennialCMS = function () {
    // 立即渲染本地或快取資料（瞬間顯示，零等待）
    renderPage(currentLang);

    // 非同步從 Google Sheet 取得最新資料
    syncFromGoogleSheets();

    // 綁定全域語系切換事件
    document.querySelectorAll("[data-action='switch-lang']").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        const targetLang = el.getAttribute("data-lang");
        if (targetLang) renderPage(targetLang);
      });
    });
  };

  // DOM 載入後自動啟動
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.initCentennialCMS);
  } else {
    window.initCentennialCMS();
  }
})();
