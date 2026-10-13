/**
 * 依「秘書處給的資料／115.10.13提供」（徵選活動簡章初稿、常見問答、投稿表格）
 * 更新正式試算表的內容。
 *
 * 會更新的分頁：
 *   - 徵選辦法彈窗：整份換成新簡章（8 個章節，中英文）
 *   - 常見問題與Footer：只換掉「FAQ」列（5 題），「Footer連結」列原樣保留
 *   - 最新消息：只更新「百年院慶標語徵選活動正式啟動」與「投稿相關資訊」兩則的內容
 *   - 全站與主視覺：organizer_name、login_notice_alumni_doc_url 兩個設定（沒有就新增）
 *
 * 不會另外建立備份分頁，直接以這份腳本裡的內容為準，重複執行結果相同。
 *
 * 使用方式：
 * 1. 開啟正式試算表 → 擴充功能 → Apps Script，貼上這份程式碼
 * 2. 函式選單選 updateContentFromSecretariat，執行（第一次要授權）
 * 3. 回到試算表檢查各分頁；網站重新整理（Ctrl+Shift+R）即可看到新內容
 *
 * 注意：簡章的徵件截止日期原稿是空白（2026年11月○日（星期○）），
 * 目前照原稿以「○」呈現，確定日期後到「徵選辦法彈窗」分頁自行取代。
 */
function updateContentFromSecretariat() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const P = {
 "rules": [
  [
   "1",
   "壹、活動主旨",
   "I. Purpose",
   "中央研究院為籌備2028年百年院慶，公開向本院同仁徵求「百年院慶標語（Slogan）」，以創意詮釋「深耕基礎研究、回應社會需求、引領國際學術」的院慶核心主軸。期藉由院內同仁共同參與發想，凝聚對本院百年傳承與未來發展的認同與向心力。\n獲選標語將作為百年院慶規劃之重要元素，並視實際需要運用於官方網站、國際學術研討會及各項文宣品，藉以傳達本院百年學術精神，彰顯以智識貢獻社會之價值，並強化院慶整體識別及對內、對外溝通效果。",
   "In preparation for its centennial celebration in 2028, Academia Sinica is inviting colleagues to submit a \"Centennial Slogan,\" creatively interpreting the core themes of the celebration: \"Deepening Fundamental Research, Responding to Societal Needs, and Leading International Scholarship.\" We hope that participation from across the institute will strengthen a shared sense of identity with, and commitment to, our century-long heritage and future development.\nWinning slogans will become an important element of the centennial planning and, as needed, will be used on the official website, at international academic conferences, and in various publicity materials, conveying the institute's century of scholarly spirit, highlighting the value of contributing to society through knowledge, and strengthening the overall identity of the celebration and communication both within and beyond the institute.",
   "是"
  ],
  [
   "2",
   "貳、辦理單位",
   "II. Organizers",
   "主辦：中央研究院秘書處\n協辦：中央研究院資訊服務處",
   "Organizer: Secretariat, Academia Sinica\nCo-organizer: Office of Information Technology, Academia Sinica",
   "是"
  ],
  [
   "3",
   "參、活動對象",
   "III. Eligibility",
   "本院現職同仁（含研究人員、技術人員、行政人員、各類計畫助理、研究生等）、本院院士及退休院友。",
   "Current employees of Academia Sinica (including research staff, technical staff, administrative staff, project assistants of all types, graduate students, etc.), Academicians of Academia Sinica, and retired alumni.",
   "是"
  ],
  [
   "4",
   "肆、創作原則與作品規格",
   "IV. Creative Principles & Entry Requirements",
   "<strong>一、創作原則</strong>\n（一）彰顯中央研究院深耕人文與科學研究、回應社會需求及引領學術發展之特色，並兼具百年傳承與前瞻未來之意象。\n（二）可廣泛應用於網站、旗幟、海報及各類文宣品與紀念識別物，以達宣傳與形象識別之目的。\n（三）核心主軸：\n1. 深耕基礎研究：強調專注基礎研究、追求真理與發現新知，開創頂尖學術成果。\n2. 回應社會需求：體現智識實踐力，將研究成果轉化為回應社會需求與推動永續發展的關鍵力量。\n3. 引領國際學術：承續百年學術底蘊，持續以創新思維開拓前瞻研究，展現具備國際視野與領航地位的學術高度。\n<strong>二、作品規格與要求</strong>\n（一）標語形式與字數限額\n1. 中、英文不限。\n2. 中文標語：以20字為限（作品內之英文字母、數字均以1字計算）。\n3. 英文標語：以15字詞（Words）為限。\n4. 簡潔有力、押韻順口為佳。\n（二）創作理念\n投稿時須附上標語之核心概念與涵義說明，以300字為上限（中、英文不限）。",
   "<strong>1. Creative Principles</strong>\n(1) Highlight Academia Sinica's distinctive commitment to deepening humanities and scientific research, responding to societal needs, and leading academic development, while conveying both a century of heritage and a forward-looking vision.\n(2) Slogans should be widely applicable to websites, banners, posters, and all kinds of publicity materials and commemorative items, serving the purposes of promotion and visual identity.\n(3) Core themes:\n1. Deepening Fundamental Research: Emphasize dedication to fundamental research, the pursuit of truth and the discovery of new knowledge, creating top-tier scholarly achievements.\n2. Responding to Societal Needs: Embody the power of putting knowledge into practice, turning research outcomes into a key force for meeting societal needs and promoting sustainable development.\n3. Leading International Scholarship: Building on a century of scholarly foundation, continue to explore cutting-edge research with innovative thinking, demonstrating an academic standing with international vision and a leading position.\n<strong>2. Entry Specifications and Requirements</strong>\n(1) Slogan format and length limits\n1. Chinese or English; either language is acceptable.\n2. Chinese slogans: up to 20 characters (English letters and numerals each count as one character).\n3. English slogans: up to 15 words.\n4. Concise, powerful, and rhyming or catchy slogans are preferred.\n(2) Concept statement\nEntries must include an explanation of the slogan's core concept and meaning, up to 300 characters/words (Chinese or English).",
   "是"
  ],
  [
   "5",
   "伍、投稿方式及結果公布",
   "V. How to Submit & Results",
   "<strong>一、徵件截止日期</strong>\n即日起至2026年11月○日（星期○）23:59止。逾期恕不受理，亦不接受補件。\n<strong>二、投稿方式</strong>\n（一）本活動一律採網路投稿，網址為https://slogan.anniversary.sinica.edu.tw。\n（二）於截止日前，填寫個人基本資料、標語內容及創作理念，並同意「原創具結聲明」，即可完成投稿。\n<strong>三、參賽限制</strong>\n每人投稿以1件為限，且作品須為未曾出版、公開發表或與他人雷同之原創標語。參賽者須保證作品無侵害他人智慧財產權、著作權或利用生成式AI創作之情事。\n<strong>四、結果公布與洽詢</strong>\n（一）結果公布：獲選名單將於2027年1月公布於本院活動網站，並另以電子郵件通知得獎者。\n（二）活動洽詢：本院秘書處林書吟小姐，電話：(02)2789-9873。",
   "<strong>1. Submission Deadline</strong>\nFrom now until 23:59 on [day ○] November 2026 (weekday ○). Late submissions will not be accepted, and no supplementary materials will be accepted.\n<strong>2. How to Submit</strong>\n(1) All submissions must be made online at https://slogan.anniversary.sinica.edu.tw.\n(2) Before the deadline, fill in your personal information, slogan, and concept statement, and agree to the \"Originality Declaration\" to complete your submission.\n<strong>3. Entry Restrictions</strong>\nEach person may submit only one entry, and the work must be an original slogan that has not been published, publicly released, or duplicated by others. Participants must guarantee that their work does not infringe the intellectual property or copyright of others and was not created using generative AI.\n<strong>4. Announcement of Results and Inquiries</strong>\n(1) Results: The list of selected entries will be published on the institute's campaign website in January 2027, and winners will also be notified by email.\n(2) Inquiries: Ms. Shu-Yin Lin, Secretariat, Academia Sinica. Tel: (02) 2789-9873.",
   "是"
  ],
  [
   "6",
   "陸、評選辦法",
   "VI. Judging",
   "本活動著重標語文案之代表性、完整性、創意性與特色，評選作業分為「評審標準」與「評選階段」兩部分。\n<strong>一、評審標準</strong>\n評選委員將依下列標準評定：\n（一）主題契合度（40%）：是否精準傳達中研院百年學術精神與核心價值。\n（二）創意與感染力（30%）：具原創性、記憶點深刻且具發人深省之力量。\n（三）語意與傳播性（30%）：中英文流暢度、朗朗上口且易於國內外傳播。\n<strong>二、評選階段</strong>\n本活動採「初選」及「決選」二階段進行：\n（一）第一階段：初選：由本院「百年院慶籌備委員會」進行初步評選，依評分標準擇優選出10件入圍標語進入決選。若有投稿標語文字完全相同者，以報名時間較早者優先採計入圍。\n（二）第二階段：決選：由本院「百年院慶推動委員會」於初選入圍之10件標語中進行綜合評量，選出前5名優勝作品。",
   "The campaign emphasizes the representativeness, completeness, creativity, and distinctiveness of each slogan. The selection process consists of two parts: \"Judging Criteria\" and \"Selection Stages.\"\n<strong>1. Judging Criteria</strong>\nThe judges will evaluate entries according to the following criteria:\n(1) Relevance to the theme (40%): Does the slogan accurately convey Academia Sinica's century of scholarly spirit and core values?\n(2) Creativity and impact (30%): Is it original, memorable, and thought-provoking?\n(3) Meaning and communicability (30%): Fluency in Chinese and English, catchiness, and ease of dissemination at home and abroad.\n<strong>2. Selection Stages</strong>\nThe campaign is conducted in two stages: a \"Preliminary Selection\" and a \"Final Selection.\"\n(1) Stage 1: Preliminary Selection: The institute's \"Centennial Celebration Preparatory Committee\" conducts the initial evaluation and, based on the scoring criteria, selects 10 shortlisted slogans to advance to the final selection. If submitted slogans are word-for-word identical, the one submitted earlier takes priority for shortlisting.\n(2) Stage 2: Final Selection: The institute's \"Centennial Celebration Promotion Committee\" comprehensively evaluates the 10 shortlisted slogans and selects the top 5 winning entries.",
   "是"
  ],
  [
   "7",
   "柒、獎勵辦法",
   "VII. Prizes",
   "<strong>一、獎勵內容</strong>\n（一）優勝獎：經百年院慶推動委員會決選之前3名優勝作品，每名各頒發獎狀1紙及獎金：第1名新臺幣1萬元、第2名新臺幣8,000元、第3名新臺幣6,000元。\n（二）優選獎：進入決選而未獲前款優勝獎之作品，共2名，每名各頒發獎狀1紙及獎金新臺幣3,000元。\n<strong>二、遞補與從缺機制</strong>\n若獲獎作品因故被取消資格，將由備取作品依序遞補；如參選作品未達評審標準，本院保留獎項從缺之權利。\n<strong>三、著作權轉讓</strong>\n得獎者須於接獲通知後簽署「著作財產權轉讓同意書」，始得辦理後續獎金撥付事宜。\n<strong>四、發放方式</strong>\n（一）採電匯方式核發，得獎者須提供本人金融機構帳戶等相關資料。\n（二）得獎者須配合提供領據及相關身分證件／帳戶資料，以利辦理核銷作業。\n<strong>五、稅務規範</strong>\n依中華民國稅法規定，得獎獎項價值應納入個人所得並代扣稅額，相關規定請參照財政部全球資訊網（https://www.mof.gov.tw）。",
   "<strong>1. Awards</strong>\n(1) Top Prize: The top 3 winning entries selected by the Centennial Celebration Promotion Committee each receive a certificate and prize money: 1st place NT$10,000, 2nd place NT$8,000, 3rd place NT$6,000.\n(2) Honorable Mention: Two entries that reach the final selection but do not receive a Top Prize each receive a certificate and NT$3,000.\n<strong>2. Substitution and Vacancy</strong>\nIf an award-winning entry is disqualified for any reason, runner-up entries will be substituted in order. If no entries meet the judging standards, the institute reserves the right to leave awards vacant.\n<strong>3. Copyright Transfer</strong>\nWinners must sign the \"Copyright Transfer Agreement\" after being notified before prize money can be disbursed.\n<strong>4. Payment Method</strong>\n(1) Prizes are paid by wire transfer. Winners must provide their own bank account details.\n(2) Winners must provide a receipt and relevant identification/account documents to facilitate reimbursement procedures.\n<strong>5. Taxation</strong>\nIn accordance with R.O.C. tax law, the value of prizes is counted as personal income and tax will be withheld. For details, please refer to the Ministry of Finance website (https://www.mof.gov.tw).",
   "是"
  ],
  [
   "8",
   "捌、注意事項",
   "VIII. Terms & Notes",
   "<strong>一、費用與退件說明</strong>\n參與本徵選活動衍生之相關費用（如通訊費、網路費等）由參加者自行負擔；所有參選文案及報名資料一律不予退件。\n<strong>二、原創保證與法律責任</strong>\n參賽標語須為自行創作之原創文案，且未曾公開發表、獲獎或與其他活動重複投稿。參賽者須保證作品無侵害他人智慧財產權、著作權或利用生成式AI創作之情事；若涉有抄襲、剽竊或第三人主張權利受侵害，法律責任由參賽者自負，若致本院受有損害者，本院得向其請求賠償及追究相關責任。本院得取消其參賽與得獎資格，並追回已核發之獎金及獎狀。\n<strong>三、著作權歸屬與行使</strong>\n獲獎者同意自獲獎公告日起，將得獎作品之著作財產權無償讓與中央研究院，並承諾對本院及其授權利用之人不行使著作人格權。本院依法擁有包含重製、改作、公開發表、主視覺搭配文案及各類文宣周邊開發等一切使用權利，亦不需另支付使用報酬。\n<strong>四、院名使用與品牌聲明</strong>\n參賽者於創作標語時得結合本院院名；惟參賽作品於本活動期間及未獲獎前，參賽者不得擅自以本院名義或獲本院授權名義，另作其他商業或非商業用途之宣傳與使用。\n<strong>五、同意條款與最終解釋權</strong>\n（一）凡投稿參加本次徵選者，即視同完全同意並遵守本簡章之各項規定及本院隨時公布之補充說明。\n（二）若參選作品未達評選標準，評審委員會得決議獎項從缺或調整名額。\n（三）本院保有隨時修改、變更、暫停或終止本活動之權利，並保留對本簡章之最終解釋與裁決權。本簡章如有未盡事宜，得由本院隨時補充公告之。",
   "<strong>1. Costs and Non-Return of Entries</strong>\nAny costs arising from participation (such as communication and internet fees) are borne by the participant. All submitted entries and registration materials will not be returned.\n<strong>2. Originality Guarantee and Legal Responsibility</strong>\nEntries must be original slogans created by the participant and must not have been publicly released, awarded, or submitted to other competitions. Participants must guarantee that their work does not infringe the intellectual property or copyright of others and was not created using generative AI. In case of plagiarism or a third party's claim of rights infringement, the participant bears all legal responsibility, and if the institute suffers damages, it may claim compensation and pursue related liability. The institute may disqualify the entry and recover any prize money and certificates already issued.\n<strong>3. Copyright Ownership and Exercise</strong>\nFrom the date the winners are announced, winners agree to transfer the copyright of the winning work to Academia Sinica free of charge, and promise not to exercise moral rights against the institute or those authorized by it. The institute lawfully holds all rights of use, including reproduction, adaptation, public release, key visuals paired with the slogan, and the development of various publicity materials and merchandise, without paying any additional royalties.\n<strong>4. Use of the Institute's Name and Branding</strong>\nParticipants may incorporate the institute's name in their slogans; however, during the campaign and before winning, participants may not use the institute's name, or any name authorized by the institute, for other commercial or non-commercial promotion or use.\n<strong>5. Consent and Final Interpretation</strong>\n(1) Anyone who submits an entry is deemed to fully agree to and abide by the rules of these guidelines and any supplementary notices issued by the institute.\n(2) If no entries meet the judging standards, the judging committee may decide to leave awards vacant or adjust the number of awards.\n(3) The institute reserves the right to modify, change, suspend, or terminate this campaign at any time, and reserves the final right of interpretation and decision regarding these guidelines. Matters not covered may be supplemented by the institute at any time.",
   "是"
  ]
 ],
 "faq": [
  [
   "FAQ",
   "1",
   "投稿是否需要以本院信箱登入？",
   "Do I need to sign in with my institute email to submit?",
   "本院現職同仁請使用院內as.edu.tw信箱登入後，填寫投稿表單。如為本院院士或退休人員者，則可下載投稿表格，填寫後寄至本活動信箱。",
   "Current employees should sign in with their institute as.edu.tw email and then fill out the submission form. Academicians and retired staff may download the submission form, complete it, and email it to the campaign mailbox.",
   "faq",
   "是"
  ],
  [
   "FAQ",
   "2",
   "每個人可以投稿幾件作品？可以用生成式AI協助創作嗎？",
   "How many entries can each person submit? May I use generative AI to help create my slogan?",
   "每人投稿以1件為限。參賽作品須為未曾公開發表之原創標語，且嚴禁利用生成式AI創作；若有抄襲或侵權情事，法律責任由參賽者自負，本院得取消資格並追回獎金與獎狀。",
   "Each person may submit only one entry. Entries must be original slogans that have not been publicly released, and the use of generative AI is strictly prohibited. In case of plagiarism or infringement, the participant bears all legal responsibility, and the institute may disqualify the entry and recover any prize money and certificates.",
   "faq",
   "是"
  ],
  [
   "FAQ",
   "3",
   "標語投稿後可以修改內容嗎？",
   "Can I edit my slogan after submitting?",
   "投稿送出前請務必確認內容無誤，送出後無法異動投稿內容，請於送出前仔細確認後再送出。系統將以正式送出時間作為時間戳記依據。",
   "Please make sure your entry is correct before submitting. Once submitted, the content cannot be changed, so please review it carefully first. The system uses the official submission time as the timestamp.",
   "faq",
   "是"
  ],
  [
   "FAQ",
   "4",
   "評審過程會看到我的姓名和服務單位嗎？",
   "Will judges see my name and department during review?",
   "不會。評審委員於評分過程中無法得知投稿人姓名及服務單位資訊，確保評選公平客觀。",
   "No. Judges cannot see the submitter's name or department during scoring, ensuring a fair and objective selection.",
   "faq",
   "是"
  ],
  [
   "FAQ",
   "5",
   "得獎名單什麼時候公布？會公布在哪裡？",
   "When and where will the winners be announced?",
   "預計2026年12月進行決選，並於2027年1月於本院官方網站及本活動網頁公告得獎名單。",
   "The final selection is expected in December 2026, and the winners will be announced on the institute's official website and this campaign page in January 2027.",
   "faq",
   "是"
  ]
 ],
 "news": {
  "row1": {
   "match": "百年院慶標語徵選活動正式啟動",
   "zh": "中央研究院「百年院慶標語」徵選活動正式開放線上投稿，歡迎本院同仁、院士及退休院友踴躍參與，共同銘刻百年學術榮光。",
   "en": "The Academia Sinica Centennial Slogan Campaign is now open for online submissions. Colleagues, academicians, and retired alumni are warmly invited to participate and help capture a century of scholarly glory."
  },
  "row2": {
   "match": "投稿相關資訊",
   "title_en": "Submission Information",
   "zh": "<span style=\"color:#8A1724;font-weight:bold;\">活動主旨</span><br>\n中央研究院為籌備2028年百年院慶，公開向本院同仁徵求「百年院慶標語（Slogan）」，以創意詮釋「深耕基礎研究、回應社會需求、引領國際學術」的院慶核心主軸。\n<br>\n<span style=\"color:#8A1724;font-weight:bold;\">活動對象</span><br>\n本院現職同仁（含研究人員、技術人員、行政人員、各類計畫助理、研究生等）、本院院士及退休院友。",
   "en": "<span style=\"color:#8A1724;font-weight:bold;\">Purpose</span><br>\nIn preparation for its centennial celebration in 2028, Academia Sinica is inviting colleagues to submit a \"Centennial Slogan,\" creatively interpreting the core themes of the celebration: \"Deepening Fundamental Research, Responding to Societal Needs, and Leading International Scholarship.\"\n<br>\n<span style=\"color:#8A1724;font-weight:bold;\">Eligibility</span><br>\nCurrent employees of Academia Sinica (including research staff, technical staff, administrative staff, project assistants of all types, graduate students, etc.), Academicians of Academia Sinica, and retired alumni."
  }
 },
 "settings": {
  "organizer_name": {
   "zh": "本院秘書處林書吟小姐",
   "en": "Ms. Shu-Yin Lin, Secretariat, Academia Sinica"
  },
  "login_notice_alumni_doc_url": {
   "zh": "assets/slogan-submission-form.docx",
   "en": "assets/slogan-submission-form.docx"
  }
 }
};

  const names = ["徵選辦法彈窗", "常見問題與Footer", "最新消息", "全站與主視覺"];
  names.forEach(function (name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) throw new Error('找不到分頁「' + name + '」，已停止，尚未修改任何內容。');
  });

  replaceDataRows_(ss.getSheetByName("徵選辦法彈窗"), P.rules, 6);
  replaceFaqRows_(ss.getSheetByName("常見問題與Footer"), P.faq);
  updateNews_(ss.getSheetByName("最新消息"), P.news);

  const settingsSheet = ss.getSheetByName("全站與主視覺");
  upsertSetting_(settingsSheet, "organizer_name", "頁尾主辦窗口名稱", P.settings.organizer_name.zh, P.settings.organizer_name.en);
  upsertSetting_(settingsSheet, "login_notice_alumni_doc_url", "按「本院院士、退休院友」後開啟的連結（投稿表格下載）", P.settings.login_notice_alumni_doc_url.zh, P.settings.login_notice_alumni_doc_url.en);

  SpreadsheetApp.flush();
  Logger.log("更新完成。");
}

// 清掉第 2 列以後的內容（保留標題列與格式），再寫入新資料
function replaceDataRows_(sheet, rows, numCols) {
  const last = sheet.getLastRow();
  if (last > 1) sheet.getRange(2, 1, last - 1, Math.max(sheet.getLastColumn(), numCols)).clearContent();
  sheet.getRange(2, 1, rows.length, numCols).setValues(rows).setWrap(true).setVerticalAlignment("top");
}

// 常見問題與Footer：換掉 FAQ 列，Footer連結等其他列保留
function replaceFaqRows_(sheet, faqRows) {
  const numCols = 8;
  const last = sheet.getLastRow();
  const existing = last > 1 ? sheet.getRange(2, 1, last - 1, numCols).getValues() : [];
  const keep = existing.filter(function (r) {
    return String(r[0]).trim() !== "" && String(r[0]).trim() !== "FAQ";
  });
  const all = faqRows.concat(keep);
  if (last > 1) sheet.getRange(2, 1, last - 1, Math.max(sheet.getLastColumn(), numCols)).clearContent();
  sheet.getRange(2, 1, all.length, numCols).setValues(all).setWrap(true).setVerticalAlignment("top");
}

// 最新消息：用「消息標題 (中)」找到對應那一列，只改內容欄位
function updateNews_(sheet, news) {
  const last = sheet.getLastRow();
  if (last < 2) return;
  const vals = sheet.getRange(2, 1, last - 1, 8).getValues();
  let hit1 = false, hit2 = false;
  vals.forEach(function (r, i) {
    const rowNum = i + 2;
    if (r[1] === news.row1.match) {
      sheet.getRange(rowNum, 6, 1, 2).setValues([[news.row1.zh, news.row1.en]]);
      hit1 = true;
    } else if (r[1] === news.row2.match) {
      sheet.getRange(rowNum, 3).setValue(news.row2.title_en);
      sheet.getRange(rowNum, 6, 1, 2).setValues([[news.row2.zh, news.row2.en]]);
      hit2 = true;
    }
  });
  if (!hit1) Logger.log("警告：最新消息找不到標題「" + news.row1.match + "」，這則沒有更新。");
  if (!hit2) Logger.log("警告：最新消息找不到標題「" + news.row2.match + "」，這則沒有更新。");
}

// 全站與主視覺：找到 Key 就更新中/英文欄位，找不到就新增一列
function upsertSetting_(sheet, key, desc, zh, en) {
  const vals = sheet.getDataRange().getValues();
  for (let i = 1; i < vals.length; i++) {
    if (vals[i][0] === key) {
      sheet.getRange(i + 1, 3, 1, 2).setValues([[zh, en]]);
      return;
    }
  }
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 5).setValues([[key, desc, zh, en, ""]]);
}

// 一次性清理：刪掉之前執行這支腳本時自動建立的「備份_…」分頁（名稱以「備份_」開頭的全部）。
// 只有需要清理時才執行 deleteBackupSheets，平常不用。
function deleteBackupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let count = 0;
  ss.getSheets().forEach(function (sheet) {
    if (sheet.getName().indexOf("備份_") === 0) {
      ss.deleteSheet(sheet);
      count++;
    }
  });
  Logger.log("已刪除 " + count + " 個備份分頁。");
}
