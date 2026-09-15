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
    settings: {
      site_title: {
        zh: "中央研究院百周年標語徵選 | 1928 — 2028",
        en: "Academia Sinica Centennial Slogan Campaign | 1928 — 2028"
      },
      brand_title: {
        zh: "中央研究院 百周年院慶",
        en: "Academia Sinica Centennial"
      },
      brand_subtitle: {
        zh: "1928 — 2028 · CENTENNIAL",
        en: "1928 — 2028 · CENTENNIAL"
      },
      nav_hero: { zh: "活動首頁", en: "Home" },
      nav_highlights: { zh: "最新消息", en: "Latest News" },
      nav_timeline: { zh: "重要時程", en: "Timeline" },
      nav_rules: { zh: "詳細辦法", en: "Guidelines" },
      nav_faq: { zh: "常見問題", en: "FAQ" },
      nav_shortlist: { zh: "入圍名單", en: "Shortlist" },
      nav_winners: { zh: "得獎公告", en: "Winners" },
      nav_submit_btn: { zh: "我要投稿", en: "Submit Now" },
      submit_form_url: {
        zh: "https://forms.gle/MJkYBRTb5NpWaSAZ6",
        en: "https://forms.gle/MJkYBRTb5NpWaSAZ6"
      },
      hero_desktop_img: {
        zh: "assets/hero-desktop.png",
        en: "assets/hero-desktop.png"
      },
      hero_mobile_logo: {
        zh: "assets/centennial-100.png",
        en: "assets/centennial-100.png"
      },
      hero_mobile_campus: {
        zh: "assets/campus-aerial.jpg",
        en: "assets/campus-aerial.jpg"
      },
      hero_main_title: { zh: "中央研究院", en: "Academia Sinica" },
      hero_sub_title: { zh: "百年標語徵選", en: "Centennial Slogan Campaign" },
      hero_quote: {
        zh: "以一句話，凝鍊百年學術精神，開展下一個世紀",
        en: "In a single phrase, embody a century of scholarship and inspire the future"
      },
      hero_btn_submit: { zh: "我要投稿", en: "Submit Now" },
      hero_btn_rules: { zh: "徵選辦法", en: "Guidelines" },
      organizer_name: { zh: "中央研究院 秘書處", en: "Secretariat, Academia Sinica" },
      contact_email: { zh: "centennial@gate.sinica.edu.tw", en: "centennial@gate.sinica.edu.tw" },
      contact_phone: { zh: "02-2789-9400", en: "+886-2-2789-9400" },

      section_highlights_title: { zh: "最新消息", en: "Latest News" },
      section_highlights_desc: {
        zh: "百年院慶標語徵選活動相關最新公告與更新，請隨時留意。",
        en: "Latest announcements and updates about the centennial slogan campaign."
      },
      section_highlights_show: { zh: "是", en: "是" },
      section_highlights_order: { zh: "1", en: "1" },
      section_shortlist_title: { zh: "入圍名單公告", en: "Shortlist Announcement" },
      section_shortlist_desc: {
        zh: "初選入圍作品名單，正式得獎結果請以官方公告為準。",
        en: "List of shortlisted entries. Official winners will follow a separate announcement."
      },
      section_shortlist_show: { zh: "否", en: "否" },
      section_shortlist_order: { zh: "5", en: "5" },
      shortlist_show_dept: { zh: "是", en: "是" },
      shortlist_show_name: { zh: "是", en: "是" },
      shortlist_show_sso: { zh: "是", en: "是" },
      shortlist_mask_sso: { zh: "是", en: "是" },
      shortlist_show_slogan_zh: { zh: "是", en: "是" },
      shortlist_show_slogan_en: { zh: "是", en: "是" },
      section_winners_title: { zh: "得獎公告", en: "Winners Announcement" },
      section_winners_desc: {
        zh: "恭喜以下獲獎同仁，感謝所有參與投稿的同仁共同銘刻百年學術榮光。",
        en: "Congratulations to the winners, and thank you to everyone who submitted an entry."
      },
      section_winners_show: { zh: "否", en: "否" },
      section_winners_order: { zh: "6", en: "6" },
      winners_show_award: { zh: "是", en: "是" },
      winners_show_dept: { zh: "是", en: "是" },
      winners_show_name: { zh: "是", en: "是" },
      winners_show_sso: { zh: "是", en: "是" },
      winners_mask_sso: { zh: "是", en: "是" },
      winners_show_slogan_zh: { zh: "是", en: "是" },
      winners_show_slogan_en: { zh: "是", en: "是" },
      section_timeline_title: { zh: "活動推展重要時程", en: "Campaign Timeline" },
      section_timeline_desc: {
        zh: "標語徵選各階段暫定時程規劃，敬請同仁把握投稿期間。",
        en: "Key milestones and tentative schedule. Submit your entries before the deadline!"
      },
      section_timeline_show: { zh: "是", en: "是" },
      section_timeline_order: { zh: "2", en: "2" },
      section_faq_title: { zh: "常見問答", en: "Frequently Asked Questions" },
      section_faq_desc: {
        zh: "關於百年院慶標語徵選活動之常見問題整理",
        en: "Answers to common questions regarding the slogan campaign."
      },
      section_faq_show: { zh: "是", en: "是" },
      section_faq_order: { zh: "4", en: "4" },
      section_rules_order: { zh: "3", en: "3" },

      dialog_title: {
        zh: "中央研究院百周年標語徵選活動辦法",
        en: "Academia Sinica Centennial Slogan Campaign — Guidelines"
      },
      dialog_close_btn: { zh: "關閉視窗", en: "Close" },
      dialog_submit_btn: { zh: "前往表單投稿 ›", en: "Submit Now ›" },

      footer_brand_title: { zh: "中央研究院 百周年院慶標語徵選", en: "Academia Sinica Centennial Slogan Campaign" },
      footer_brand_en: { zh: "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN", en: "ACADEMIA SINICA CENTENNIAL SLOGAN CAMPAIGN" },
      footer_desc: {
        zh: "指導主辦：中央研究院 百年院慶籌備委員會\n執行單位：中央研究院 秘書處\n技術協同：中央研究院 資訊服務處",
        en: "Supervised by: Academia Sinica Centennial Committee\nOrganized by: Secretariat, Academia Sinica\nTechnical Support: Office of Information Technology, Academia Sinica"
      },
      footer_quicklinks_title: { zh: "快速連結", en: "Quick Links" },
      footer_contact_title: { zh: "主辦聯絡資訊", en: "Contact Information" },
      footer_address: {
        zh: "院區地址：115201 臺北市南港區研究院路二段128號",
        en: "Address: No. 128, Sec. 2, Academia Rd., Nangang Dist., Taipei 115201"
      },
      footer_official_link_text: { zh: "中央研究院官網 ↗", en: "Academia Sinica Official Site ↗" },
      footer_copyright: {
        zh: "© 2026 Academia Sinica 中央研究院. All Rights Reserved.",
        en: "© 2026 Academia Sinica. All Rights Reserved."
      },
      footer_form_note_label: { zh: "✦ 投稿 Google 表單連結：", en: "✦ Submission Google Form:" }
    },

    news: [
      {
        title_zh: "百年院慶標語徵選活動正式啟動",
        title_en: "Centennial Slogan Campaign Officially Launched",
        date_zh: "2026年10月01日",
        date_en: "Oct 01, 2026",
        content_zh: "中央研究院百年院慶標語公開徵選活動正式開放線上投稿，歡迎全體同仁踴躍參與，共同銘刻百年學術榮光。",
        content_en: "The Academia Sinica Centennial Slogan Campaign is now open for online submissions. All colleagues are warmly invited to participate.",
        show: true
      }
    ],

    shortlist: [
      {
        dept_zh: "",
        dept_en: "",
        name_zh: "",
        name_en: "",
        sso: "",
        slogan_zh: "",
        slogan_en: "",
        show: false
      }
    ],

    winners: [
      {
        award_zh: "",
        award_en: "",
        dept_zh: "",
        dept_en: "",
        name_zh: "",
        name_en: "",
        sso: "",
        slogan_zh: "",
        slogan_en: "",
        show: false
      }
    ],

    timeline: [
      {
        circle_main_zh: "10月",
        circle_sub_zh: "01日",
        circle_main_en: "OCT",
        circle_sub_en: "01",
        title_zh: "線上徵件啟動",
        title_en: "Submissions Open",
        desc_zh: "開放線上 Google 表單徵件系統，歡迎全球各界踴躍投件。",
        desc_en: "Online submission portal opens. All entries welcomed worldwide.",
        status_zh: "進行中",
        status_en: "In Progress",
        active: true,
        show: true
      },
      {
        circle_main_zh: "10月",
        circle_sub_zh: "31日",
        circle_main_en: "OCT",
        circle_sub_en: "31",
        title_zh: "徵件截止 (23:59)",
        title_en: "Submissions Deadline",
        desc_zh: "截止線上收件，逾期恕不受理。請把握時間送出您的創意！",
        desc_en: "Deadline for all online submissions. Late submissions will not be accepted.",
        status_zh: "即將截止",
        status_en: "Approaching",
        active: false,
        show: true
      },
      {
        circle_main_zh: "11月",
        circle_sub_zh: "初審",
        circle_main_en: "NOV",
        circle_sub_en: "2026",
        title_zh: "專業評審遴選",
        title_en: "Judging & Selection",
        desc_zh: "由院慶籌備委員會及各領域專家學者組成評審小組進行匿名審查。",
        desc_en: "Expert panel evaluates all qualified entries anonymously.",
        status_zh: "審查中",
        status_en: "Pending",
        active: false,
        show: true
      },
      {
        circle_main_zh: "12月",
        circle_sub_zh: "揭曉",
        circle_main_en: "DEC",
        circle_sub_en: "2026",
        title_zh: "獲選結果公布",
        title_en: "Winners Announced",
        desc_zh: "於中研院官網及百年院慶專頁正式揭曉獲選標語與得獎名單。",
        desc_en: "Official announcement of winning slogans on Academia Sinica website.",
        status_zh: "即將揭曉",
        status_en: "Upcoming",
        active: false,
        show: true
      }
    ],

    rules: [
      {
        title_zh: "一、活動目的",
        title_en: "1. Objective",
        content_zh: "中央研究院即將邁入創院一百周年，為凝聚全院同仁學術精神與傳承使命，特舉辦「百年院慶標語公開徵選活動」，期以簡鍊有力、富深遠意涵之標語，展現中研院學術卓越與開拓下一個世紀之願景。",
        content_en: "Academia Sinica is approaching its centenary. This campaign invites slogans that embody a century of scholarship and inspire our vision for the next century.",
        show: true
      },
      {
        title_zh: "二、徵選對象",
        title_en: "2. Eligibility",
        content_zh: "凡中央研究院現職同仁、退休人員、學生、訪問學者、校友，以及關心中研院之國內外各界人士均可報名參加，不限國籍、年齡與身分。",
        content_en: "Open to all current and retired faculty, staff, students, alumni, and anyone passionate about Academia Sinica worldwide.",
        show: true
      },
      {
        title_zh: "三、標語規範與格式",
        title_en: "3. Slogan Guidelines & Format",
        content_zh: "1. 中文或英文皆可（中英文各一組或單一語言投件均可）。\n2. 中文標語以 12 ~ 20 字為原則；英文標語以 5 ~ 15 字（words）為原則。\n3. 須附 100 ~ 200 字創作理念說明，闡述標語發想來源與意涵。\n4. 內容須原創，未曾發表亦未涉及抄襲或侵害他人權利。",
        content_en: "1. Submissions in Chinese or English are accepted.\n2. Chinese: 12-20 characters; English: 5-15 words.\n3. Include a 100-200 word concept description.\n4. Work must be original and not published elsewhere.",
        show: true
      },
      {
        title_zh: "四、評選標準",
        title_en: "4. Judging Criteria",
        content_zh: "1. 主題契合度（40%）：充分彰顯中研院百年學術精神、價值與未來願景。\n2. 創意與獨特性（30%）：構思新穎、精鍊傳神、具記憶點。\n3. 傳播感染力（30%）：朗朗上口、節奏流暢，易於多媒體宣傳應用。",
        content_en: "1. Relevance to Centennial Spirit (40%)\n2. Creativity & Originality (30%)\n3. Resonance & Catchiness (30%)",
        show: true
      },
      {
        title_zh: "五、獎勵辦法",
        title_en: "5. Prizes & Awards",
        content_zh: "首獎 1 名：獎金新臺幣 30,000 元整及百周年紀念獎座／證書。\n優等獎 2 名：各得獎金新臺幣 10,000 元整及紀念證書。\n佳作 3 名：各得獎金新臺幣 5,000 元整及紀念證書。\n入選獎若干名：各獲贈中研院百周年限定紀念禮品乙份。",
        content_en: "Grand Prize (1 Winner): NT$ 30,000 and Centennial Trophy.\nExcellence Award (2 Winners): NT$ 10,000 each and Certificate.\nMerit Award (3 Winners): NT$ 5,000 each and Certificate.\nFinalist Gifts for shortlisted entries.",
        show: true
      },
      {
        title_zh: "六、智財權與其他注意事項",
        title_en: "6. Intellectual Property & Terms",
        content_zh: "1. 獲選作品之著作財產權歸主辦單位（中央研究院）所有，主辦單位有權進行非營利性宣傳、重製及公開展示。\n2. 投稿者保證作品確為原創，如涉及侵權者取消得獎資格並追回獎金與證書。\n3. 主辦單位保留活動內容修改、變更及解釋之最終權利。",
        content_en: "1. All intellectual property of winning entries transfers to Academia Sinica for official promotion.\n2. Participants guarantee their work is original.\n3. Academia Sinica reserves the right to amend campaign terms.",
        show: true
      }
    ],

    faq: [
      {
        q_zh: "Q1. 每個人可以投稿幾組標語？",
        q_en: "Q1. How many slogans can I submit?",
        a_zh: "每位參賽者最多可投稿 3 組標語，每組均需單獨填寫並附上發想理念說明。",
        a_en: "Each participant may submit up to 3 slogans. Each entry must have its own concept rationale.",
        show: true
      },
      {
        q_zh: "Q2. 可以用英文或中英混合投稿嗎？",
        q_en: "Q2. Can I submit in English or bilingual?",
        a_zh: "可以！歡迎以繁體中文、英文投件，亦可提供中英文對應版本。",
        a_en: "Yes! Entries in Traditional Chinese, English, or bilingual pairings are all warmly welcomed.",
        show: true
      },
      {
        q_zh: "Q3. 不是中研院員工或學生也可以參加嗎？",
        q_en: "Q3. Can the general public participate?",
        a_zh: "可以！本活動面向全球公開徵件，凡關心中研院的朋友皆可共襄盛舉。",
        a_en: "Yes! The campaign is open to everyone worldwide who supports Academia Sinica.",
        show: true
      },
      {
        q_zh: "Q4. 得獎標語會如何使用？",
        q_en: "Q4. How will winning slogans be used?",
        a_zh: "獲選之標語將廣泛應用於中研院百周年各項慶祝活動、出版品、文宣品及國際學術交流場合。",
        a_en: "Winning slogans will be featured in centennial publications, events, banners, and media.",
        show: true
      },
      {
        q_zh: "Q5. 投稿與投票是否需要以本院 SSO 帳號登入？",
        q_en: "Q5. Do I need to log in with my institute SSO account to submit or vote?",
        a_zh: "依規劃，投稿與後續網路票選皆須以中央研究院 SSO 帳號登入驗證，以確認身分並自動帶入基本資料，同時防止外部誤投。",
        a_en: "Both submission and voting require login with an Academia Sinica SSO account to verify identity, auto-fill basic information, and prevent external voting.",
        show: true
      },
      {
        q_zh: "Q6. 評審過程會看到我的姓名和服務單位嗎？",
        q_en: "Q6. Will judges see my name and department during review?",
        a_zh: "不會。評審委員於線上評分介面完全看不到投稿人姓名及服務單位/所中心資訊，以雙盲方式確保評選公平客觀。",
        a_en: "No. Judges cannot see the submitter's name or department in the scoring interface, ensuring a fair, double-blind review.",
        show: true
      },
      {
        q_zh: "Q7. 網路票選要怎麼進行？可以投很多次嗎？",
        q_en: "Q7. How does the online voting work? Can I vote more than once?",
        a_zh: "初選入圍名單公告後，將開放同仁以 SSO 帳號進行網路票選，每一帳號於票選期間僅能投票 1 次，不開放重複投票。",
        a_en: "After the shortlist is announced, colleagues may vote online with their SSO account. Each account may vote only once during the voting period.",
        show: true
      },
      {
        q_zh: "Q8. 標語投稿後可以修改內容嗎？",
        q_en: "Q8. Can I edit my slogan after submitting?",
        a_zh: "投稿送出前請務必確認內容無誤；系統將以正式送出時間作為時間戳記依據，故請於送出前仔細確認後再送出。",
        a_en: "Please review your entry carefully before submitting, as the system timestamps your entry at the moment of submission.",
        show: true
      },
      {
        q_zh: "Q9. 得獎名單什麼時候公布？會公布在哪裡？",
        q_en: "Q9. When and where will the winners be announced?",
        a_zh: "預計12月上旬進行複評，並於12月24日前透過中央研究院官方網站及本活動網頁正式公告得獎名單。",
        a_en: "The final review is expected in early December, with winners officially announced on the Academia Sinica website and this campaign page before December 24.",
        show: true
      },
      {
        q_zh: "Q10. 這個網頁未來會不會換網址？",
        q_en: "Q10. Will this page's URL change in the future?",
        a_zh: "待百年院慶專屬網站建置完成後，本活動網頁將配合移轉至百年院慶專屬網站項下，屆時將提供新的連結。",
        a_en: "Once the dedicated centennial website is complete, this campaign page will migrate under it, and a new link will be provided.",
        show: true
      }
    ],

    footerLinks: [
      {
        name_zh: "中央研究院官方網站",
        name_en: "Academia Sinica Official Website",
        url: "https://www.sinica.edu.tw",
        type: "web",
        show: true
      },
      {
        name_zh: "院況介紹與歷史",
        name_en: "About Academia Sinica",
        url: "https://www.sinica.edu.tw/about",
        type: "info",
        show: true
      },
      {
        name_zh: "中研院 Facebook",
        name_en: "AS Facebook Page",
        url: "https://www.facebook.com/sinicaedu",
        type: "facebook",
        show: true
      },
      {
        name_zh: "中研院 YouTube 頻道",
        name_en: "AS YouTube Channel",
        url: "https://www.youtube.com/@AcademiaSinica",
        type: "youtube",
        show: true
      }
    ]
  };

  // 當前全域資料儲存
  let liveData = loadCachedData() || JSON.parse(JSON.stringify(DEFAULT_DATA));
  let currentLang = localStorage.getItem("as_slogan_lang") || "zh";

  // ========================================================
  // 2. 快取載入與儲存
  // ========================================================
  function loadCachedData() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) return JSON.parse(cached);
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
  // 因此這裡強制核對回傳的標題列，不符合就視為「分頁不存在」回傳空陣列，交由呼叫端 fallback 回預設內容，避免再次汙染畫面。
  async function fetchSheetJson(sheetName, expectedHeaders) {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?headers=1&tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/s);
    if (!match) throw new Error("Invalid GViz format");
    const json = JSON.parse(match[1]);
    if (!json.table || !json.table.rows) return [];

    if (Array.isArray(expectedHeaders) && expectedHeaders.length > 0) {
      const cols = json.table.cols || [];
      const headerMismatch = expectedHeaders.some((expected, idx) => (cols[idx] && cols[idx].label) !== expected);
      if (headerMismatch) {
        console.warn(`[Google Sheets CMS] 分頁「${sheetName}」尚不存在或欄位標題不符，暫時略過並使用預設內容。`);
        return [];
      }
    }

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
      const settingsRows = await fetchSheetJson("全站與主視覺", ["設定項目代碼 (Key)", "項目說明 (Description)"]);
      settingsRows.forEach(row => {
        const key = row[0];
        const zh = row[2];
        const en = row[3];
        if (key && (zh || en)) {
          if (!liveData.settings[key]) liveData.settings[key] = {};
          if (zh) liveData.settings[key].zh = zh;
          if (en) liveData.settings[key].en = en;
        }
      });

      // 2. 最新消息
      const newsRows = await fetchSheetJson("最新消息", ["順序", "消息標題 (中)"]);
      if (newsRows.length > 0) {
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
      if (timelineRows.length > 0) {
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
      if (rulesRows.length > 0) {
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
      if (faqs.length > 0) liveData.faq = faqs;
      if (footers.length > 0) liveData.footerLinks = footers;

      // 6. 入圍名單公告
      const shortlistRows = await fetchSheetJson("入圍名單公告", ["順序", "所別 (中)"]);
      if (shortlistRows.length > 0) {
        liveData.shortlist = shortlistRows.map(row => ({
          dept_zh: row[1] || "",
          dept_en: row[2] || row[1] || "",
          name_zh: row[3] || "",
          name_en: row[4] || row[3] || "",
          sso: row[5] || "",
          slogan_zh: row[6] || "",
          slogan_en: row[7] || "",
          show: row[8] !== "否"
        }));
      }

      // 7. 得獎公告
      const winnersRows = await fetchSheetJson("得獎公告", ["順序", "獎項 (中)"]);
      if (winnersRows.length > 0) {
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
          show: row[10] !== "否"
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
    const formUrl = s.submit_form_url ? (isEn ? s.submit_form_url.en : s.submit_form_url.zh) : "https://forms.gle/MJkYBRTb5NpWaSAZ6";
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
    const s = liveData.settings;
    applySectionToggle("#highlights", "nav_highlights", s.section_highlights_show);
    const headerTitle = document.querySelector("#highlights .section-title");
    const headerDesc = document.querySelector("#highlights .section-desc");
    if (headerTitle && s.section_highlights_title) headerTitle.textContent = isEn ? s.section_highlights_title.en : s.section_highlights_title.zh;
    if (headerDesc && s.section_highlights_desc) headerDesc.textContent = isEn ? s.section_highlights_desc.en : s.section_highlights_desc.zh;

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
    const s = liveData.settings;
    applySectionToggle("#timeline", "nav_timeline", s.section_timeline_show);
    const headerTitle = document.querySelector("#timeline .section-title");
    const headerDesc = document.querySelector("#timeline .section-desc");
    if (headerTitle && s.section_timeline_title) headerTitle.textContent = isEn ? s.section_timeline_title.en : s.section_timeline_title.zh;
    if (headerDesc && s.section_timeline_desc) headerDesc.textContent = isEn ? s.section_timeline_desc.en : s.section_timeline_desc.zh;

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
    const formUrl = liveData.settings.submit_form_url ? (isEn ? liveData.settings.submit_form_url.en : liveData.settings.submit_form_url.zh) : "https://forms.gle/MJkYBRTb5NpWaSAZ6";

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
  }

  // 切換整個區塊（連同對應的導覽選單項目）的顯示/隱藏
  // sectionSelector：區塊的 CSS selector；navKey：對應的 nav_* 設定鍵（用 data-navkey 查找元素，不依賴 DOM 順序）；showSetting：settings 裡的顯示欄位物件（{zh, en}）
  function applySectionToggle(sectionSelector, navKey, showSetting) {
    const show = !(showSetting && (showSetting.zh === "否" || showSetting.en === "否"));

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
  // 「詳細辦法」只有導覽項目、沒有實體區塊（點擊會開彈窗），所以只影響選單排序。
  function applySectionOrder() {
    const s = liveData.settings;
    const parseOrder = (setting, fallback) => {
      const n = setting && parseFloat(setting.zh);
      return Number.isFinite(n) ? n : fallback;
    };

    const orderMap = {
      nav_highlights: parseOrder(s.section_highlights_order, 1),
      nav_timeline: parseOrder(s.section_timeline_order, 2),
      nav_rules: parseOrder(s.section_rules_order, 3),
      nav_faq: parseOrder(s.section_faq_order, 4),
      nav_shortlist: parseOrder(s.section_shortlist_order, 5),
      nav_winners: parseOrder(s.section_winners_order, 6)
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
    const s = liveData.settings;
    applySectionToggle("#faq", "nav_faq", s.section_faq_show);
    const headerTitle = document.querySelector("#faq .section-title");
    const headerDesc = document.querySelector("#faq .section-desc");
    if (headerTitle && s.section_faq_title) headerTitle.textContent = isEn ? s.section_faq_title.en : s.section_faq_title.zh;
    if (headerDesc && s.section_faq_desc) headerDesc.textContent = isEn ? s.section_faq_desc.en : s.section_faq_desc.zh;

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

  // 渲染「入圍名單公告」表格
  function renderShortlist(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;
    applySectionToggle("#shortlist", "nav_shortlist", s.section_shortlist_show);

    const headerTitle = document.querySelector("#shortlist .section-title");
    const headerDesc = document.querySelector("#shortlist .section-desc");
    if (headerTitle && s.section_shortlist_title) headerTitle.textContent = isEn ? s.section_shortlist_title.en : s.section_shortlist_title.zh;
    if (headerDesc && s.section_shortlist_desc) headerDesc.textContent = isEn ? s.section_shortlist_desc.en : s.section_shortlist_desc.zh;

    const table = document.getElementById("shortlistTable");
    const tbody = document.getElementById("shortlistTableBody");
    const emptyMsg = document.getElementById("shortlistEmpty");
    if (!table || !tbody) return;

    // 欄位開關
    const showDept = !(s.shortlist_show_dept && s.shortlist_show_dept.zh === "否");
    const showName = !(s.shortlist_show_name && s.shortlist_show_name.zh === "否");
    const showSso = !(s.shortlist_show_sso && s.shortlist_show_sso.zh === "否");
    const maskSsoOn = !(s.shortlist_mask_sso && s.shortlist_mask_sso.zh === "否");
    const showZh = !(s.shortlist_show_slogan_zh && s.shortlist_show_slogan_zh.zh === "否");
    const showEn = !(s.shortlist_show_slogan_en && s.shortlist_show_slogan_en.zh === "否");

    table.classList.toggle("hide-dept", !showDept);
    table.classList.toggle("hide-name", !showName);
    table.classList.toggle("hide-sso", !showSso);
    table.classList.toggle("hide-zh", !showZh);
    table.classList.toggle("hide-en", !showEn);

    const rows = (liveData.shortlist || []).filter(r => r.show && (r.name_zh || r.name_en || r.slogan_zh));

    if (rows.length === 0) {
      tbody.innerHTML = "";
      table.hidden = true;
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }

    table.hidden = false;
    if (emptyMsg) emptyMsg.hidden = true;

    tbody.innerHTML = rows
      .map(r => {
        const dept = isEn ? r.dept_en : r.dept_zh;
        const name = isEn ? r.name_en : r.name_zh;
        const sso = maskSsoOn ? maskSso(r.sso) : r.sso;
        return `
          <tr>
            <td class="col-dept">${dept || ""}</td>
            <td class="col-name">${name || ""}</td>
            <td class="col-sso">${sso || ""}</td>
            <td class="col-zh">${r.slogan_zh || ""}</td>
            <td class="col-en">${r.slogan_en || ""}</td>
          </tr>
        `;
      })
      .join("");
  }

  // 渲染「得獎公告」表格
  function renderWinners(lang) {
    const isEn = lang === "en";
    const s = liveData.settings;
    applySectionToggle("#winners", "nav_winners", s.section_winners_show);

    const headerTitle = document.querySelector("#winners .section-title");
    const headerDesc = document.querySelector("#winners .section-desc");
    if (headerTitle && s.section_winners_title) headerTitle.textContent = isEn ? s.section_winners_title.en : s.section_winners_title.zh;
    if (headerDesc && s.section_winners_desc) headerDesc.textContent = isEn ? s.section_winners_desc.en : s.section_winners_desc.zh;

    const table = document.getElementById("winnersTable");
    const tbody = document.getElementById("winnersTableBody");
    const emptyMsg = document.getElementById("winnersEmpty");
    if (!table || !tbody) return;

    // 欄位開關
    const showAward = !(s.winners_show_award && s.winners_show_award.zh === "否");
    const showDept = !(s.winners_show_dept && s.winners_show_dept.zh === "否");
    const showName = !(s.winners_show_name && s.winners_show_name.zh === "否");
    const showSso = !(s.winners_show_sso && s.winners_show_sso.zh === "否");
    const maskSsoOn = !(s.winners_mask_sso && s.winners_mask_sso.zh === "否");
    const showZh = !(s.winners_show_slogan_zh && s.winners_show_slogan_zh.zh === "否");
    const showEn = !(s.winners_show_slogan_en && s.winners_show_slogan_en.zh === "否");

    table.classList.toggle("hide-award", !showAward);
    table.classList.toggle("hide-dept", !showDept);
    table.classList.toggle("hide-name", !showName);
    table.classList.toggle("hide-sso", !showSso);
    table.classList.toggle("hide-zh", !showZh);
    table.classList.toggle("hide-en", !showEn);

    const rows = (liveData.winners || []).filter(r => r.show && (r.name_zh || r.name_en || r.slogan_zh));

    if (rows.length === 0) {
      tbody.innerHTML = "";
      table.hidden = true;
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }

    table.hidden = false;
    if (emptyMsg) emptyMsg.hidden = true;

    tbody.innerHTML = rows
      .map(r => {
        const award = isEn ? r.award_en : r.award_zh;
        const dept = isEn ? r.dept_en : r.dept_zh;
        const name = isEn ? r.name_en : r.name_zh;
        const sso = maskSsoOn ? maskSso(r.sso) : r.sso;
        return `
          <tr>
            <td class="col-award">${award ? `<span class="award-pill">${award}</span>` : ""}</td>
            <td class="col-dept">${dept || ""}</td>
            <td class="col-name">${name || ""}</td>
            <td class="col-sso">${sso || ""}</td>
            <td class="col-zh">${r.slogan_zh || ""}</td>
            <td class="col-en">${r.slogan_en || ""}</td>
          </tr>
        `;
      })
      .join("");
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
