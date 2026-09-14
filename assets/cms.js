/**
 * 中央研究院百周年標語徵選 — 雙語 (Bilingual) 與 Google 試算表雲端內容管理系統 (CMS)
 * 試算表 ID: 10cFGVyCSQqGEPjWw7LBs1xs9hevCXWpUfoV2DhU8qYU
 */

(function () {
  "use strict";

  const GOOGLE_SHEET_ID = "10cFGVyCSQqGEPjWw7LBs1xs9hevCXWpUfoV2DhU8qYU";
  const CACHE_KEY = "as_slogan_cms_data_v4";

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
      nav_highlights: { zh: "徵選重點", en: "Highlights" },
      nav_timeline: { zh: "重要時程", en: "Timeline" },
      nav_rules: { zh: "詳細辦法", en: "Guidelines" },
      nav_faq: { zh: "常見問題", en: "FAQ" },
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
      cta_banner_title: {
        zh: "一句標語，見證世紀學術榮光",
        en: "A Slogan to Mark a Century of Scholarship"
      },
      cta_banner_desc: {
        zh: "歡迎中央研究院全體同仁、學生、校友及關心中研院發展之海內外朋友踴躍投稿，共同銘刻百周年里程碑！",
        en: "We warmly invite all colleagues, students, alumni, and friends worldwide to submit slogans and commemorate our centennial!"
      },
      cta_banner_btn: { zh: "即刻線上投稿 ›", en: "Submit Online Now ›" },
      organizer_name: { zh: "中央研究院 秘書處", en: "Secretariat, Academia Sinica" },
      contact_email: { zh: "centennial@gate.sinica.edu.tw", en: "centennial@gate.sinica.edu.tw" },
      contact_phone: { zh: "02-2789-9400", en: "+886-2-2789-9400" }
    },

    highlights: [
      {
        title_zh: "百年榮耀·學術傳承",
        title_en: "Century of Honor & Heritage",
        badge_zh: "✦ 跨越一世紀",
        badge_en: "✦ 100 Years",
        desc_zh: "回顧一世紀篳路藍縷，以文字淬鍊學術追求與自由探究之精神，開創前瞻未來。",
        desc_en: "Reflecting on a century of academic pursuit and free inquiry to forge an inspiring future.",
        items_zh: ["回首一世紀自由探求精神", "傳承厚重學術與科研使命", "引領前瞻新世紀願景"],
        items_en: ["Century of scholarly pursuit", "Legacy of groundbreaking research", "Leading the future forward"],
        num: "100 YEARS",
        show: true
      },
      {
        title_zh: "全民參與·共創經典",
        title_en: "Open to All · Co-Create History",
        badge_zh: "✦ 全球廣徵",
        badge_en: "✦ Global Call",
        desc_zh: "廣邀全院同仁、學術先進、學子及社會大眾踴躍發想，入選作品將成為百年院慶代表標語。",
        desc_en: "Inviting all members, scholars, students, and the public to contribute to the official centennial slogan.",
        items_zh: ["歡迎全球各界踴躍投件", "一人最高可投稿 3 組標語", "雙盲公正評選與全院共響"],
        items_en: ["Open to scholars & public globally", "Submit up to 3 slogans per entrant", "Anonymous & fair review"],
        num: "GLOBAL",
        show: true
      },
      {
        title_zh: "豐厚獎勵·榮譽肯定",
        title_en: "Generous Awards & Recognition",
        badge_zh: "✦ 總獎金數萬",
        badge_en: "✦ Top Honors",
        desc_zh: "設置首獎、優等獎、佳作及入選獎，頒發高額獎金與中研院百年院慶專屬紀念證書。",
        desc_en: "Grand Prize, Excellence Awards, and Merit Awards with cash prizes and official centennial certificates.",
        items_zh: ["首獎高達新臺幣 30,000 元", "專屬百周年紀念獎座與證書", "獲選作品將廣泛應用於院慶宣傳"],
        items_en: ["Top prize up to NT$ 30,000", "Exclusive centennial trophy & certificate", "Featured across centenary media"],
        num: "NT$ 30,000",
        show: true
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
  async function fetchSheetJson(sheetName) {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?headers=1&tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/s);
    if (!match) throw new Error("Invalid GViz format");
    const json = JSON.parse(match[1]);
    if (!json.table || !json.table.rows) return [];
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
      const settingsRows = await fetchSheetJson("全站與主視覺");
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

      // 2. 活動重點與獎勵
      const highlightRows = await fetchSheetJson("活動重點與獎勵");
      if (highlightRows.length > 0) {
        liveData.highlights = highlightRows.map(row => ({
          title_zh: row[1] || "",
          title_en: row[2] || row[1] || "",
          badge_zh: row[3] || "",
          badge_en: row[4] || row[3] || "",
          desc_zh: row[5] || "",
          desc_en: row[6] || row[5] || "",
          items_zh: (row[5] || "").split("\n").filter(Boolean),
          items_en: (row[6] || row[5] || "").split("\n").filter(Boolean),
          num: row[7] || "",
          show: row[9] !== "否"
        }));
      }

      // 3. 重要時程
      const timelineRows = await fetchSheetJson("重要時程");
      if (timelineRows.length > 0) {
        liveData.timeline = timelineRows.map((row, idx) => {
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

          return {
            circle_main_zh: circleMainZh,
            circle_sub_zh: circleSubZh,
            circle_main_en: circleMainEn,
            circle_sub_en: circleSubEn,
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
          };
        });
      }

      // 4. 徵選辦法彈窗
      const rulesRows = await fetchSheetJson("徵選辦法彈窗");
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
      const faqFooterRows = await fetchSheetJson("常見問題與Footer");
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

    // 3. 導覽選單項目
    const navLinks = document.querySelectorAll(".nav-links a.nav-link");
    const navKeys = ["nav_hero", "nav_highlights", "nav_timeline", "nav_rules", "nav_faq"];
    navLinks.forEach((link, idx) => {
      const k = navKeys[idx];
      if (k && s[k]) link.textContent = isEn ? s[k].en : s[k].zh;
    });

    // 抽屜選單
    const drawerLinks = document.querySelectorAll(".drawer-links a.drawer-link");
    drawerLinks.forEach((link, idx) => {
      const k = navKeys[idx];
      if (k && s[k]) link.textContent = isEn ? s[k].en : s[k].zh;
    });

    // 4. 我要投稿超連結 (所有按鈕同步更新 URL 與文字)
    const formUrl = s.submit_form_url ? (isEn ? s.submit_form_url.en : s.submit_form_url.zh) : "https://forms.gle/MJkYBRTb5NpWaSAZ6";
    const submitBtnText = s.hero_btn_submit ? (isEn ? s.hero_btn_submit.en : s.hero_btn_submit.zh) : (isEn ? "Submit Now" : "我要投稿");
    const rulesBtnText = s.hero_btn_rules ? (isEn ? s.hero_btn_rules.en : s.hero_btn_rules.zh) : (isEn ? "Guidelines" : "徵選辦法");

    // Header CTA
    const headerCta = document.getElementById("headerCtaBtn");
    if (headerCta) {
      headerCta.href = formUrl;
      const span = headerCta.querySelector("span:first-child");
      if (span) span.textContent = submitBtnText;
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

    // Drawer Submit Button
    const drawerSubmit = document.getElementById("drawerSubmitBtn");
    if (drawerSubmit) {
      drawerSubmit.href = formUrl;
      drawerSubmit.textContent = isEn ? "Submit Online Now ›" : "前往投稿表單 ›";
    }

    // Mobile Floating Bar
    const floatingSubmit = document.getElementById("floatingSubmitBtn");
    const floatingRules = document.getElementById("floatingRulesBtn");
    if (floatingSubmit) {
      floatingSubmit.href = formUrl;
      floatingSubmit.textContent = isEn ? "Submit Now ›" : "我要投稿 ›";
    }
    if (floatingRules) {
      floatingRules.textContent = isEn ? "Guidelines" : "徵選辦法";
    }

    // 4.5. 徵選規範區塊標題 (Section 3)
    const rulesSectionTitle = document.querySelector("#rules .section-title");
    const rulesSectionDesc = document.querySelector("#rules .section-desc");
    if (rulesSectionTitle) rulesSectionTitle.textContent = isEn ? "Regulations & Specifications" : "詳細徵選辦法與規範";
    if (rulesSectionDesc) rulesSectionDesc.textContent = isEn ? "Please review submission guidelines carefully to ensure compliance." : "請詳細參閱投稿規定，確保作品符合評選標準。";

    // 4.6. 主視覺圖片（可由試算表 hero_desktop_img / hero_mobile_logo / hero_mobile_campus 覆寫）
    applyPictureImage(document.querySelector(".hero-poster-img"), s.hero_desktop_img && (isEn ? s.hero_desktop_img.en : s.hero_desktop_img.zh));
    applyPictureImage(document.querySelector(".mobile-100-img"), s.hero_mobile_logo && (isEn ? s.hero_mobile_logo.en : s.hero_mobile_logo.zh));
    applyMobileCampusBg(s.hero_mobile_campus && (isEn ? s.hero_mobile_campus.en : s.hero_mobile_campus.zh));

    // 5. Highlights 區塊渲染
    renderHighlights(lang);

    // 6. Timeline 時程渲染
    renderTimeline(lang);

    // 7. 徵選辦法彈窗渲染
    renderRules(lang);

    // 8. FAQ 問答渲染
    renderFaq(lang);

    // 9. 頁尾 CTA Banner
    const ctaTitle = document.querySelector(".cta-banner-title");
    const ctaDesc = document.querySelector(".cta-banner-desc");
    const ctaBtn = document.querySelector(".cta-banner-section .btn-glow-gold");
    if (ctaTitle && s.cta_banner_title) ctaTitle.textContent = isEn ? s.cta_banner_title.en : s.cta_banner_title.zh;
    if (ctaDesc && s.cta_banner_desc) ctaDesc.textContent = isEn ? s.cta_banner_desc.en : s.cta_banner_desc.zh;
    if (ctaBtn) {
      ctaBtn.href = formUrl;
      const span = ctaBtn.querySelector("span:first-child");
      if (span && s.cta_banner_btn) span.textContent = isEn ? s.cta_banner_btn.en : s.cta_banner_btn.zh;
    }

    // 10. Footer 聯絡資訊
    const orgName = document.querySelector(".footer-org-name");
    const contactEmail = document.querySelector(".footer-contact a[href^='mailto:']");
    const contactPhone = document.querySelector(".footer-contact .footer-phone");
    if (orgName && s.organizer_name) orgName.textContent = isEn ? s.organizer_name.en : s.organizer_name.zh;
    if (contactEmail && s.contact_email) {
      const mail = isEn ? s.contact_email.en : s.contact_email.zh;
      contactEmail.href = `mailto:${mail}`;
      contactEmail.textContent = mail;
    }
    if (contactPhone && s.contact_phone) {
      contactPhone.textContent = isEn ? s.contact_phone.en : s.contact_phone.zh;
    }

    // 更新語系開關按鈕狀態
    updateLangSwitchUI(lang);
  }

  // 渲染 Highlights 卡片
  function renderHighlights(lang) {
    const isEn = lang === "en";
    const headerTitle = document.querySelector("#highlights .section-title");
    const headerDesc = document.querySelector("#highlights .section-desc");
    if (headerTitle) headerTitle.textContent = isEn ? "Three Campaign Highlights" : "活動三大核心重點";
    if (headerDesc) headerDesc.textContent = isEn ? "Academia Sinica celebrates its centenary. Join us in shaping our legacy." : "中央研究院將邁向建院百周年，誠摯邀請全體同仁一同用文字銘刻學術榮光，開展世紀新頁。";

    const container = document.querySelector(".highlight-grid");
    if (!container || !liveData.highlights) return;

    container.innerHTML = liveData.highlights
      .filter(h => h.show)
      .map(h => {
        const title = isEn ? h.title_en : h.title_zh;
        const badge = isEn ? h.badge_en : h.badge_zh;
        const desc = isEn ? h.desc_en : h.desc_zh;
        const items = isEn ? h.items_en : h.items_zh;
        const listHtml = Array.isArray(items) ? items.map(it => `<li>${it}</li>`).join("") : "";
        return `
          <article class="highlight-card">
            <div class="card-badge">${badge || (isEn ? "✦ FEATURE" : "✦ 重點")}</div>
            <h3 class="card-title">${title}</h3>
            <p class="card-body">${desc}</p>
            ${listHtml ? `<ul class="card-list">${listHtml}</ul>` : ""}
          </article>
        `;
      })
      .join("");
  }

  // 渲染 Timeline 時程
  function renderTimeline(lang) {
    const isEn = lang === "en";
    const headerTitle = document.querySelector("#timeline .section-title");
    const headerDesc = document.querySelector("#timeline .section-desc");
    if (headerTitle) headerTitle.textContent = isEn ? "Campaign Timeline" : "活動推展重要時程";
    if (headerDesc) headerDesc.textContent = isEn ? "Key milestones and tentative schedule. Submit your entries before the deadline!" : "標語徵選各階段暫定時程規劃，敬請同仁把握投稿期間。";

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
    const dialogTitle = document.querySelector(".dialog-header-title");
    if (dialogTitle) dialogTitle.textContent = isEn ? "Academia Sinica Centennial Slogan Campaign — Guidelines" : "中央研究院百周年院慶標語公開徵選辦法";

    const dialogBody = document.querySelector(".dialog-content");
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
    if (closeBtnText) closeBtnText.textContent = isEn ? "Close" : "關閉視窗";

    const dialogSubmitBtn = document.getElementById("dialogSubmitBtn");
    if (dialogSubmitBtn) {
      dialogSubmitBtn.href = formUrl;
      dialogSubmitBtn.textContent = isEn ? "Submit Now ›" : "前往表單投稿 ›";
    }

    // 首頁「詳細徵選辦法與規範」區塊，同樣以試算表「徵選辦法彈窗」資料驅動
    const rulesGrid = document.querySelector("#rules .rules-grid");
    if (rulesGrid && liveData.rules) {
      const cardsHtml = liveData.rules
        .filter(r => r.show)
        .map(r => {
          const title = isEn ? r.title_en : r.title_zh;
          const content = isEn ? r.content_en : r.content_zh;
          const lines = (content || "").split("\n").filter(Boolean);
          const bodyHtml = lines.map(line => `<p class="spec-desc" style="margin-bottom: 10px;">${line}</p>`).join("");
          return `<div class="rules-card-box"><h3 class="rules-box-title">${title}</h3>${bodyHtml}</div>`;
        })
        .join("");
      const ctaText = isEn ? "Submit via Google Form ›" : "立即前往 Google 表單投稿 ›";
      rulesGrid.innerHTML = cardsHtml + `
        <div style="grid-column: 1 / -1; text-align: center; margin-top: 10px;">
          <a href="${formUrl}" target="_blank" rel="noopener noreferrer" class="btn-mobile btn-mobile-primary" style="display: inline-flex; width: auto; padding: 14px 38px;">
            ${ctaText}
          </a>
        </div>
      `;
    }
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

  // 渲染 FAQ 常見問題
  function renderFaq(lang) {
    const isEn = lang === "en";
    const headerTitle = document.querySelector("#faq .section-title");
    const headerDesc = document.querySelector("#faq .section-desc");
    if (headerTitle) headerTitle.textContent = isEn ? "Frequently Asked Questions" : "常見問答";
    if (headerDesc) headerDesc.textContent = isEn ? "Answers to common questions regarding the slogan campaign." : "關於百年院慶標語徵選活動之常見問題整理";

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
            <div class="faq-answer">
              ${a}
            </div>
          </div>
        `;
      })
      .join("");

    // 重新綁定手風琴展開收合
    accordion.querySelectorAll(".faq-item").forEach(item => {
      const btn = item.querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
          accordion.querySelectorAll(".faq-item").forEach(other => {
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
