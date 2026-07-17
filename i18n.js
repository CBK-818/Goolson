/* ============================================================
   GOOLSON — shared i18n (index.html & hospitals.html 共用)
   所有页面文案翻译集中在此文件维护。
   ============================================================ */
const I18N = {
  zh: {
    nav_about:"关于我们", nav_china:"中国医疗", nav_hospitals:"合作医院", nav_care:"重点科室", nav_contact:"联系我们", nav_cta:"预约咨询",
    hero_eyebrow:"国际医疗专属管家 · GUANGZHOU",
    hero_l1:"多一个选择，", hero_l2:"多一份希望。",
    hero_tag:"为希望，找一条路。",
    hero_p1:"当世界充满不确定，你的选择依然重要。",
    hero_p2:"Goolson 为不愿将就的人，打开通向中国顶尖医疗的另一条路。",
    hero_cta1:"预约咨询", hero_cta2:"了解我们 →",
    foot_jci:"广佛珠合作医院", foot_lang:"服务语言", foot_resp:"国际响应", foot_scroll:"向下浏览 ↓",
    search_label:"查找医院与科室", search_ph:"输入疾病、科室或医院名称…", aside_h:"精准匹配，安心就医", aside_p:"告诉我们您的需求，我们的医学顾问会为您匹配最合适的医院、科室与专家，并提供费用预估与就医方案。",
    chip_onco:"肿瘤", chip_cardio:"心血管", chip_ortho:"骨科", chip_eye:"眼科", chip_tcm:"中医", chip_fertility:"生殖医学",
    about_eyebrow:"为什么选择中国", about_h:"世界级医疗，触手可及的价格", about_p1:"中国华南地区拥有一批世界顶尖的三甲医院，配备国际前沿的诊疗设备与经验丰富的专家团队。在这里，您能以欧美50%-70%的费用，获得同等甚至更高水准的医疗服务。", about_p2:"从复杂肿瘤治疗到精密心脏手术，从器官移植到中西医结合康复，我们严选的20家广州、佛山、珠海顶尖三甲医院覆盖几乎所有专科领域。", about_link:"查看合作医院",
    tcm_eyebrow:"独特优势", tcm_h:"不止于治疗，更是身心的疗愈", tcm_p1:"中国拥有数千年传承的中医智慧。在西医精准治疗之外，您还可体验中医调理、针灸理疗、药膳养生——一种独特的整体康复方式。", tcm_p2:"治疗间歇，我们为您安排岭南文化体验与广府美食探索，让就医之旅同时成为一段难忘的文化之旅。", tcm_link:"定制您的方案",
    hosp_eyebrow:"合作医院", hosp_h:"广州 · 佛山 · 珠海<br>20 家顶尖三甲医院", hosp_p:"我们严选粤港澳大湾区实力雄厚的三甲医院，覆盖肿瘤、心血管、器官移植等重点专科。在独立页面中按疾病或科室快速查找最适合您的医院。", hosp_more:"找到对的医院 →",
    hp_eyebrow:"合作医院", hp_title:"找到对的医院", hp_sub:"广州 · 佛山 · 珠海，20 家顶尖三甲医院。按疾病、科室或医院名称查找最适合您的选择。",
    hp_count_n:"共 {n} 家医院", hp_none:"未找到匹配医院，请直接联系我们咨询。",
    cities_eyebrow:"区位优势", cities_h:"大湾区，触手可及的医疗高地", cities_p:"广州、佛山、珠海同处粤港澳大湾区，高铁互联、一小时通达，让您在顶尖医疗资源之间从容选择。",
    city_gz_t:"广州", city_gz_p:"华南医疗中枢。中山大学、南方医科、暨南大学等顶尖医学院云集，三甲医院数量与专科实力居全国前列，鼻咽癌、眼科、器官移植等领域享誉国际。",
    city_fs_t:"佛山", city_fs_p:"紧邻广州，地铁直连。综合医疗实力雄厚，骨科、心血管等专科特色突出，就医节奏从容、费用更具优势。",
    city_zh_t:"珠海", city_zh_p:"毗邻港澳的滨海花园城市。环境宜人、适合康复，医疗资源与港澳无缝衔接，是术后疗养与跨境就医的理想之选。",
    care_eyebrow:"重点科室", care_h:"我们擅长应对<br>复杂的医疗挑战", care_p:"覆盖呼吸、肿瘤、心血管、器官移植等高难度领域。",
    nav_sop:"第二意见", sop_eyebrow:"第二医疗意见", sop_h:"独立的专家复核", sop_p:"面对重大疾病，第一个诊断未必是唯一答案。第二医疗意见，是在既有诊断或治疗方案之外，获取另一位专家的独立评估——让您在做出重要决定前，多一份确认，多一份安心。",
    sop_1_t:"刚确诊重大疾病", sop_1_p:"初次诊断结果影响深远，您希望确认诊断的准确性与全面性。",
    sop_2_t:"面临重大手术或治疗", sop_2_p:"在接受手术、化疗等重大治疗前，想了解是否存在更适合的方案。",
    sop_3_t:"治疗方案有多种选择", sop_3_p:"不同方案各有利弊，您希望听取更多专业视角再做决定。",
    sop_4_t:"疑难或罕见病症", sop_4_p:"病情复杂、诊断不明，需要更深入的专业评估。",
    sop_close:"Goolson 协助您对接经验丰富的专科医生，整理病历资料、安排评估咨询，让第二意见的获取变得清晰而从容。", sop_btn:"预约第二意见咨询 →",
    journey_eyebrow:"服务流程", journey_h:"从第一次咨询，<br>到平安回家", journey_p:"每一步都有专属医学顾问陪伴，您只需专注于康复本身。",
    j1_t:"免费咨询评估", j1_p:"提交病历资料，医学顾问48小时内完成初步评估，给出可行方向与费用预估。",
    j2_t:"定制就医方案", j2_p:"匹配最合适的医院与专家，安排远程会诊，协助签证、机票与住宿。",
    j3_t:"全程陪同就医", j3_p:"专属医疗翻译全程陪诊，协调检查、治疗与住院事务，家属同步知情。",
    j4_t:"康复与随访", j4_p:"出院后整理完整病历译本，安排远程随访，与您的家庭医生无缝衔接。",
    cta_h:"让您的就医之旅，从这里安心启程", cta_btn:"免费咨询",
    contact_eyebrow:"联系我们", contact_h:"开始您的咨询", contact_p:"留下信息，我们的医学顾问将在24小时内与您联系。",
    f_name:"姓名", f_name_ph:"您的姓名", f_contact:"邮箱 / WhatsApp", f_dept:"意向科室", f_dept_ph:"请选择", f_msg:"需求简述", f_msg_ph:"请简要描述您的病情或需求…", f_submit:"提交咨询",
    ch_wechat:"微信 WeChat",
    foot_brand:"连接世界与中国的优质医疗。从咨询到康复，全程陪伴。", foot_service:"服务", foot_patients:"患者支持", foot_appt:"预约咨询", foot_visa:"签证协助", foot_translate:"病历翻译", foot_followup:"术后随访", foot_connect:"关注我们",
    foot_disclaimer:"© 2026 Goolson 谷神。本平台提供医疗信息整理、就医协助与医患沟通服务，不提供诊断或治疗意见。所有医学判断均由执业医师做出。"
  },
  en: {
    nav_about:"About", nav_china:"Medical in China", nav_hospitals:"Hospitals", nav_care:"Care Areas", nav_contact:"Contact", nav_cta:"Request Consultation",
    hero_eyebrow:"International Medical Concierge · GUANGZHOU",
    hero_l1:"Another Option.", hero_l2:"Another Hope.",
    hero_tag:"A Way to Hope.",
    hero_p1:"When the world feels uncertain, your choice still matters.",
    hero_p2:"Goolson opens a path to world-class care in China — for those who refuse to settle.",
    hero_cta1:"Begin Inquiry", hero_cta2:"About Us →",
    foot_jci:"Partner Hospitals", foot_lang:"Languages", foot_resp:"24/7 Response", foot_scroll:"Scroll ↓",
    search_label:"Find a hospital or specialty", search_ph:"Enter a condition, department, or hospital…", aside_h:"The right match, with peace of mind", aside_p:"Tell us your needs and our medical advisors will match you with the right hospital, department, and expert — along with cost estimates and a care plan.",
    chip_onco:"Oncology", chip_cardio:"Cardiology", chip_ortho:"Orthopedics", chip_eye:"Ophthalmology", chip_tcm:"TCM", chip_fertility:"Fertility",
    about_eyebrow:"Why China", about_h:"World-class care at accessible prices", about_p1:"South China is home to top-tier hospitals equipped with cutting-edge technology and experienced specialists. Here you receive care of equal or higher standard at 50–70% of Western costs.", about_p2:"From complex cancer treatment to precision cardiac surgery, organ transplants to integrative recovery, our 20 carefully selected top-tier hospitals across Guangzhou, Foshan, and Zhuhai cover virtually every specialty.", about_link:"View partner hospitals",
    tcm_eyebrow:"A Unique Advantage", tcm_h:"More than treatment — healing for body and mind", tcm_p1:"China offers thousands of years of Traditional Chinese Medicine wisdom. Beyond precise Western treatment, experience TCM therapy, acupuncture, and medicinal cuisine — a uniquely holistic path to recovery.", tcm_p2:"Between treatments, we arrange Lingnan cultural experiences and Cantonese culinary journeys, turning your medical trip into a memorable cultural one.", tcm_link:"Customize your plan",
    hosp_eyebrow:"Partner Hospitals", hosp_h:"20 Leading Hospitals<br>in Guangzhou, Foshan & Zhuhai", hosp_p:"We partner with top-tier (Grade-A tertiary) hospitals across the Greater Bay Area, covering oncology, cardiovascular, organ transplant and more. Search by condition or specialty on a dedicated page to find your best match.", hosp_more:"Find the Right Hospital →",
    hp_eyebrow:"Partner Hospitals", hp_title:"Find the Right Hospital", hp_sub:"Guangzhou · Foshan · Zhuhai — 20 leading hospitals. Search by condition, specialty, or hospital name to find your best match.",
    hp_count_n:"{n} hospital(s)", hp_none:"No match found — please contact us directly.",
    cities_eyebrow:"Location", cities_h:"The Greater Bay Area — care within reach", cities_p:"Guangzhou, Foshan, and Zhuhai sit within the Greater Bay Area, linked by high-speed rail and reachable within an hour — giving you room to choose among the region's finest medical resources.",
    city_gz_t:"Guangzhou", city_gz_p:"South China's medical hub. Home to leading medical schools — Sun Yat-sen, Southern Medical, Jinan — with one of the nation's highest concentrations of top hospitals, internationally renowned in nasopharyngeal cancer, ophthalmology, and organ transplant.",
    city_fs_t:"Foshan", city_fs_p:"Adjacent to Guangzhou and directly connected by metro. Strong all-round medical strength with standout orthopedics and cardiology, a calmer pace, and more favorable costs.",
    city_zh_t:"Zhuhai", city_zh_p:"A coastal garden city bordering Hong Kong and Macau. Pleasant and recovery-friendly, with medical resources seamlessly linked to Hong Kong and Macau — ideal for post-op recovery and cross-border care.",
    care_eyebrow:"Care Areas", care_h:"We excel at the toughest<br>medical challenges", care_p:"Covering respiratory, oncology, cardiovascular, organ transplant and more.",
    nav_sop:"Second Opinion", sop_eyebrow:"Second Medical Opinion", sop_h:"An Independent Expert Review", sop_p:"When facing a serious illness, the first diagnosis isn't always the only answer. A second medical opinion means obtaining an independent assessment from another specialist — giving you added confidence and peace of mind before making important decisions.",
    sop_1_t:"A recent serious diagnosis", sop_1_p:"The initial findings carry major implications, and you want to confirm their accuracy and completeness.",
    sop_2_t:"Before major surgery or treatment", sop_2_p:"Ahead of surgery, chemotherapy, or other major treatment, you want to know whether a better option exists.",
    sop_3_t:"Multiple treatment options", sop_3_p:"When each path has trade-offs, you'd like more expert perspectives before deciding.",
    sop_4_t:"Complex or rare conditions", sop_4_p:"When the picture is unclear, a deeper specialist assessment is needed.",
    sop_close:"Goolson helps you connect with experienced specialists, organize your medical records, and arrange evaluation consultations — making a second opinion clear and stress-free to obtain.", sop_btn:"Request a Second Opinion →",
    journey_eyebrow:"How It Works", journey_h:"From first inquiry<br>to a safe journey home", journey_p:"A dedicated medical advisor stays with you at every step — so you can focus on getting better.",
    j1_t:"Free Assessment", j1_p:"Send us your medical records. Our advisors complete an initial review within 48 hours, with treatment options and cost estimates.",
    j2_t:"A Tailored Care Plan", j2_p:"We match you with the right hospital and specialist, arrange remote consultations, and assist with visas, flights, and accommodation.",
    j3_t:"Accompanied Care", j3_p:"A dedicated medical interpreter accompanies every visit, coordinating tests, treatment, and admissions — keeping your family informed.",
    j4_t:"Recovery & Follow-up", j4_p:"After discharge, we prepare translated medical records and arrange remote follow-ups, in sync with your doctor at home.",
    cta_h:"Begin your medical journey with confidence", cta_btn:"Free Consultation",
    contact_eyebrow:"Contact", contact_h:"Start Your Consultation", contact_p:"Leave your details and our medical advisors will reach out within 24 hours.",
    f_name:"Name", f_name_ph:"Your name", f_contact:"Email / WhatsApp", f_dept:"Department of interest", f_dept_ph:"Please select", f_msg:"Brief description", f_msg_ph:"Briefly describe your condition or needs…", f_submit:"Submit Inquiry",
    ch_wechat:"WeChat",
    foot_brand:"Connecting the world to quality healthcare in China. From consultation to recovery, by your side.", foot_service:"Services", foot_patients:"Patient Support", foot_appt:"Consultation", foot_visa:"Visa Assistance", foot_translate:"Record Translation", foot_followup:"Follow-up Care", foot_connect:"Connect",
    foot_disclaimer:"© 2026 Goolson. This platform provides medical information, healthcare navigation, and communication services. We do not provide diagnostic or treatment advice. All medical decisions are made by licensed physicians."
  },
  ja: {
    nav_about:"私たちについて", nav_china:"中国の医療", nav_hospitals:"提携病院", nav_care:"重点診療科", nav_contact:"お問い合わせ", nav_cta:"相談を予約",
    hero_eyebrow:"国際医療コンシェルジュ · GUANGZHOU",
    hero_l1:"もう一つの選択肢を、", hero_l2:"もう一つの希望を。",
    hero_tag:"希望への道を、ともに。",
    hero_p1:"不確かな世界でも、あなたの選択には意味があります。",
    hero_p2:"Goolson は、妥協したくない方のために、中国トップクラスの医療への新たな道を開きます。",
    hero_cta1:"相談を予約", hero_cta2:"私たちについて →",
    foot_jci:"広州・仏山・珠海の提携病院", foot_lang:"対応言語", foot_resp:"国際サポート", foot_scroll:"下へスクロール ↓",
    search_label:"病院・診療科を探す", search_ph:"疾患名、診療科、病院名を入力…", aside_h:"最適なマッチングで、安心の受診を", aside_p:"ご要望をお聞かせください。メディカルアドバイザーが最適な病院・診療科・専門医をご提案し、費用の目安と受診プランをご案内します。",
    chip_onco:"腫瘍", chip_cardio:"循環器", chip_ortho:"整形外科", chip_eye:"眼科", chip_tcm:"中医学", chip_fertility:"生殖医療",
    about_eyebrow:"なぜ中国か", about_h:"世界水準の医療を、手の届く価格で", about_p1:"中国華南地区には、世界トップレベルの三級甲等（最上級）病院が集まり、最先端の医療設備と経験豊富な専門医チームを備えています。欧米の50〜70%の費用で、同等かそれ以上の水準の医療を受けることができます。", about_p2:"複雑ながん治療から高度な心臓手術、臓器移植、中西医結合によるリハビリまで、広州・仏山・珠海で厳選した20のトップ病院が、ほぼすべての専門領域をカバーします。", about_link:"提携病院を見る",
    tcm_eyebrow:"独自の強み", tcm_h:"治療だけでなく、心と体の癒しを", tcm_p1:"中国には数千年にわたり受け継がれてきた中医学の知恵があります。西洋医学による精密な治療に加え、漢方調理、鍼灸、薬膳など、独自のホリスティックな回復方法を体験できます。", tcm_p2:"治療の合間には、嶺南文化の体験や広東グルメの探訪をご用意し、医療の旅を思い出深い文化の旅にもいたします。", tcm_link:"プランをカスタマイズ",
    hosp_eyebrow:"提携病院", hosp_h:"広州 · 仏山 · 珠海<br>トップクラスの三甲病院20院", hosp_p:"粤港澳グレーターベイエリアの実力ある三級甲等病院を厳選し、腫瘍、循環器、臓器移植などの重点専門領域をカバーしています。専用ページで疾患や診療科から、最適な病院をすばやく検索できます。", hosp_more:"最適な病院を探す →",
    hp_eyebrow:"提携病院", hp_title:"最適な病院を見つける", hp_sub:"広州 · 仏山 · 珠海 — トップクラスの病院20院。疾患、診療科、病院名から最適な選択肢を検索できます。",
    hp_count_n:"該当 {n} 院", hp_none:"該当する病院が見つかりませんでした。直接お問い合わせください。",
    cities_eyebrow:"立地の優位性", cities_h:"グレーターベイエリア — 身近にある医療の高地", cities_p:"広州・仏山・珠海は粤港澳グレーターベイエリアに位置し、高速鉄道で1時間圏内。トップクラスの医療資源の中から、ゆとりを持って選択できます。",
    city_gz_t:"広州", city_gz_p:"華南の医療中枢。中山大学、南方医科大学、曁南大学などの名門医学部が集まり、トップ病院の数と専門力は全国屈指。上咽頭がん、眼科、臓器移植などの分野で国際的に高い評価を得ています。",
    city_fs_t:"仏山", city_fs_p:"広州に隣接し、地下鉄で直結。総合医療力が高く、整形外科や循環器などの専門分野に強みがあり、落ち着いた受診環境と費用面の優位性が特徴です。",
    city_zh_t:"珠海", city_zh_p:"香港・マカオに隣接する海辺のガーデンシティ。環境が良く療養に適しており、医療資源は香港・マカオとシームレスにつながっています。術後の療養や越境医療に理想的です。",
    care_eyebrow:"重点診療科", care_h:"複雑な医療課題に、<br>確かな対応力を", care_p:"呼吸器、腫瘍、循環器、臓器移植などの高難度領域をカバーします。",
    nav_sop:"セカンドオピニオン", sop_eyebrow:"セカンドオピニオン", sop_h:"独立した専門医による再評価", sop_p:"重大な疾患に直面したとき、最初の診断が唯一の答えとは限りません。セカンドオピニオンとは、既存の診断や治療方針について、別の専門医から独立した評価を得ること。重要な決断の前に、もう一つの確認と安心を得られます。",
    sop_1_t:"重大な疾患と診断されたばかり", sop_1_p:"初回の診断は大きな影響を持つため、その正確性と網羅性を確認したい。",
    sop_2_t:"大きな手術・治療を控えている", sop_2_p:"手術や化学療法などの大きな治療の前に、より適した選択肢がないか知りたい。",
    sop_3_t:"複数の治療選択肢がある", sop_3_p:"それぞれに利点と欠点があり、決断の前により多くの専門的見解を聞きたい。",
    sop_4_t:"難病・希少疾患", sop_4_p:"病状が複雑で診断が明確でなく、より深い専門的評価が必要。",
    sop_close:"Goolson は、経験豊富な専門医への橋渡し、医療記録の整理、評価コンサルテーションの手配をサポートし、セカンドオピニオンの取得を明確で負担のないものにします。", sop_btn:"セカンドオピニオンを予約 →",
    journey_eyebrow:"サービスの流れ", journey_h:"最初のご相談から、<br>無事のご帰国まで", journey_p:"すべてのステップで専属のメディカルアドバイザーが寄り添います。あなたは回復に専念するだけで大丈夫です。",
    j1_t:"無料相談・評価", j1_p:"医療記録をお送りください。メディカルアドバイザーが48時間以内に初期評価を行い、可能な選択肢と費用の目安をご提示します。",
    j2_t:"受診プランの作成", j2_p:"最適な病院と専門医をマッチングし、遠隔相談を手配。ビザ、航空券、宿泊の手続きもサポートします。",
    j3_t:"全行程の受診同行", j3_p:"専属の医療通訳がすべての受診に同行し、検査・治療・入院の調整を行い、ご家族にも随時状況をお伝えします。",
    j4_t:"回復とフォローアップ", j4_p:"退院後は医療記録の翻訳版を作成し、遠隔フォローアップを手配。母国の主治医との連携もスムーズに行います。",
    cta_h:"安心の医療の旅を、ここから始めましょう", cta_btn:"無料相談",
    contact_eyebrow:"お問い合わせ", contact_h:"ご相談を始める", contact_p:"情報をご記入ください。メディカルアドバイザーが24時間以内にご連絡いたします。",
    f_name:"お名前", f_name_ph:"お名前", f_contact:"メール / WhatsApp", f_dept:"ご希望の診療科", f_dept_ph:"選択してください", f_msg:"ご相談内容", f_msg_ph:"病状やご要望を簡単にご記入ください…", f_submit:"相談を送信",
    ch_wechat:"WeChat（微信）",
    foot_brand:"世界と中国の質の高い医療をつなぐ。ご相談から回復まで、いつもそばに。", foot_service:"サービス", foot_patients:"患者サポート", foot_appt:"相談予約", foot_visa:"ビザ支援", foot_translate:"医療記録翻訳", foot_followup:"術後フォローアップ", foot_connect:"フォローする",
    foot_disclaimer:"© 2026 Goolson. 当プラットフォームは医療情報の整理、受診支援、医療コミュニケーションのサービスを提供するものであり、診断や治療に関する助言は行いません。すべての医学的判断は資格を持つ医師によって行われます。"
  },
  ko: {
    nav_about:"회사 소개", nav_china:"중국 의료", nav_hospitals:"협력 병원", nav_care:"중점 진료과", nav_contact:"문의하기", nav_cta:"상담 예약",
    hero_eyebrow:"국제 의료 컨시어지 · GUANGZHOU",
    hero_l1:"또 하나의 선택,", hero_l2:"또 하나의 희망.",
    hero_tag:"희망으로 가는 길.",
    hero_p1:"불확실한 세상에서도 당신의 선택은 여전히 중요합니다.",
    hero_p2:"Goolson은 타협하지 않는 분들을 위해 중국 최고 수준 의료로 향하는 또 하나의 길을 엽니다.",
    hero_cta1:"상담 예약", hero_cta2:"회사 소개 →",
    foot_jci:"광저우·포산·주하이 협력 병원", foot_lang:"지원 언어", foot_resp:"글로벌 대응", foot_scroll:"아래로 스크롤 ↓",
    search_label:"병원·진료과 찾기", search_ph:"질환, 진료과 또는 병원명을 입력하세요…", aside_h:"정확한 매칭, 안심 진료", aside_p:"필요한 사항을 알려주시면 메디컬 어드바이저가 가장 적합한 병원·진료과·전문의를 매칭해 드리고, 비용 견적과 진료 플랜을 제공합니다.",
    chip_onco:"종양", chip_cardio:"심혈관", chip_ortho:"정형외과", chip_eye:"안과", chip_tcm:"중의학", chip_fertility:"생식의학",
    about_eyebrow:"왜 중국인가", about_h:"세계적 수준의 의료를 합리적인 비용으로", about_p1:"중국 화남 지역에는 세계 최고 수준의 3급 갑등(최상급) 병원들이 모여 있으며, 국제 최첨단 의료 장비와 풍부한 경험의 전문의 팀을 갖추고 있습니다. 이곳에서는 구미의 50~70% 비용으로 동등하거나 그 이상의 의료 서비스를 받을 수 있습니다.", about_p2:"복잡한 암 치료부터 정밀 심장 수술, 장기 이식, 중서의 결합 재활까지 — 광저우·포산·주하이에서 엄선한 20곳의 최상급 병원이 거의 모든 전문 분야를 아우릅니다.", about_link:"협력 병원 보기",
    tcm_eyebrow:"특별한 강점", tcm_h:"치료를 넘어, 몸과 마음의 치유로", tcm_p1:"중국에는 수천 년간 이어져 온 중의학의 지혜가 있습니다. 서양 의학의 정밀 치료와 더불어 한방 조리, 침구 치료, 약선 요리 등 독특한 전인적 회복 방식을 경험할 수 있습니다.", tcm_p2:"치료 사이사이에는 링난 문화 체험과 광둥 미식 탐방을 마련해, 의료 여정이 잊지 못할 문화 여행이 되도록 합니다.", tcm_link:"맞춤 플랜 만들기",
    hosp_eyebrow:"협력 병원", hosp_h:"광저우 · 포산 · 주하이<br>최상급 병원 20곳", hosp_p:"웨강아오 대만구의 우수한 최상급 병원을 엄선하여 종양, 심혈관, 장기 이식 등 중점 전문 분야를 아우릅니다. 전용 페이지에서 질환이나 진료과별로 가장 적합한 병원을 빠르게 찾아보세요.", hosp_more:"맞는 병원 찾기 →",
    hp_eyebrow:"협력 병원", hp_title:"맞는 병원 찾기", hp_sub:"광저우 · 포산 · 주하이 — 최상급 병원 20곳. 질환, 진료과 또는 병원명으로 가장 적합한 선택지를 찾아보세요.",
    hp_count_n:"총 {n}곳", hp_none:"일치하는 병원을 찾지 못했습니다. 직접 문의해 주세요.",
    cities_eyebrow:"입지 강점", cities_h:"대만구, 가까이에 있는 의료 허브", cities_p:"광저우·포산·주하이는 모두 웨강아오 대만구에 위치하며 고속철도로 1시간 내에 연결되어, 최고의 의료 자원 가운데 여유롭게 선택할 수 있습니다.",
    city_gz_t:"광저우", city_gz_p:"화남 지역 의료 중심지. 중산대학교, 남방의과대학교, 지난대학교 등 명문 의과대학이 모여 있으며, 최상급 병원 수와 전문 역량이 전국 최고 수준입니다. 비인두암, 안과, 장기 이식 분야에서 국제적으로 명성이 높습니다.",
    city_fs_t:"포산", city_fs_p:"광저우에 인접하며 지하철로 직결됩니다. 종합 의료 역량이 탄탄하고 정형외과, 심혈관 등 전문 분야가 뛰어나며, 여유로운 진료 환경과 비용 경쟁력이 강점입니다.",
    city_zh_t:"주하이", city_zh_p:"홍콩·마카오와 인접한 해안 정원 도시. 쾌적한 환경으로 요양에 적합하며, 의료 자원이 홍콩·마카오와 긴밀히 연결되어 수술 후 회복과 국경 간 진료에 이상적입니다.",
    care_eyebrow:"중점 진료과", care_h:"복잡한 의료 과제에<br>강한 전문성", care_p:"호흡기, 종양, 심혈관, 장기 이식 등 고난도 분야를 아우릅니다.",
    nav_sop:"2차 소견", sop_eyebrow:"2차 의료 소견", sop_h:"독립적인 전문의 재검토", sop_p:"중대한 질환 앞에서 첫 번째 진단이 유일한 답은 아닐 수 있습니다. 2차 소견(세컨드 오피니언)은 기존 진단이나 치료 방안에 대해 다른 전문의의 독립적인 평가를 받는 것으로, 중요한 결정을 내리기 전에 한 번 더 확인하고 안심할 수 있게 해 줍니다.",
    sop_1_t:"중대 질환을 막 진단받은 경우", sop_1_p:"첫 진단 결과의 영향이 크기에, 진단의 정확성과 완전성을 확인하고 싶을 때.",
    sop_2_t:"큰 수술이나 치료를 앞둔 경우", sop_2_p:"수술, 항암 치료 등 중대한 치료 전에 더 적합한 방안이 있는지 알고 싶을 때.",
    sop_3_t:"치료 방안이 여러 가지인 경우", sop_3_p:"각 방안의 장단점이 달라, 결정 전에 더 많은 전문가 관점을 듣고 싶을 때.",
    sop_4_t:"난치성·희귀 질환", sop_4_p:"병세가 복잡하고 진단이 불명확하여 더 깊이 있는 전문 평가가 필요할 때.",
    sop_close:"Goolson은 경험 많은 전문의 연결, 의료 기록 정리, 평가 상담 일정 조율을 도와 2차 소견을 명확하고 부담 없이 받을 수 있도록 지원합니다.", sop_btn:"2차 소견 상담 예약 →",
    journey_eyebrow:"서비스 절차", journey_h:"첫 상담부터<br>무사히 귀국할 때까지", journey_p:"모든 단계에 전담 메디컬 어드바이저가 함께합니다. 당신은 회복에만 전념하세요.",
    j1_t:"무료 상담·평가", j1_p:"의료 기록을 보내 주시면 메디컬 어드바이저가 48시간 이내에 초기 평가를 완료하고, 가능한 방향과 비용 견적을 제시합니다.",
    j2_t:"맞춤 진료 플랜", j2_p:"가장 적합한 병원과 전문의를 매칭하고 원격 협진을 주선하며, 비자·항공권·숙박을 지원합니다.",
    j3_t:"전 과정 진료 동행", j3_p:"전담 의료 통역사가 모든 진료에 동행하여 검사·치료·입원 업무를 조율하고, 가족에게도 상황을 실시간 공유합니다.",
    j4_t:"회복과 사후 관리", j4_p:"퇴원 후 전체 의료 기록 번역본을 정리하고 원격 추적 관찰을 주선하여, 본국 주치의와 원활하게 연계합니다.",
    cta_h:"안심할 수 있는 의료 여정, 여기서 시작하세요", cta_btn:"무료 상담",
    contact_eyebrow:"문의하기", contact_h:"상담 시작하기", contact_p:"정보를 남겨 주시면 메디컬 어드바이저가 24시간 이내에 연락드립니다.",
    f_name:"성함", f_name_ph:"성함", f_contact:"이메일 / WhatsApp", f_dept:"희망 진료과", f_dept_ph:"선택해 주세요", f_msg:"요청 사항", f_msg_ph:"병세나 필요 사항을 간단히 적어 주세요…", f_submit:"상담 신청",
    ch_wechat:"위챗 WeChat",
    foot_brand:"세계와 중국의 우수한 의료를 잇습니다. 상담부터 회복까지, 전 과정을 함께합니다.", foot_service:"서비스", foot_patients:"환자 지원", foot_appt:"상담 예약", foot_visa:"비자 지원", foot_translate:"의무기록 번역", foot_followup:"수술 후 관리", foot_connect:"팔로우",
    foot_disclaimer:"© 2026 Goolson. 본 플랫폼은 의료 정보 정리, 진료 지원 및 의료 커뮤니케이션 서비스를 제공하며, 진단이나 치료에 대한 의견은 제공하지 않습니다. 모든 의학적 판단은 면허를 소지한 의사가 내립니다."
  }
};
/* 泰/越/法/德/俄：翻译分批进行，未完成前暂回退英文（第二批补全后删除此行） */
['th','vi','fr','de','ru'].forEach(l => { if(!I18N[l]) I18N[l] = I18N.en; });

/* 语言切换器上的简写标签 */
const LANG_LABELS = { zh:'中文', en:'EN', ja:'日本語', ko:'한국어', th:'ไทย', vi:'VI', fr:'FR', de:'DE', ru:'РУ' };

let currentLang = 'zh';
function setLang(l) {
  currentLang = l;
  try { localStorage.setItem('goolson_lang', l); } catch(e){}
  const t = I18N[l] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if(t[k]!==undefined) el.innerHTML = t[k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.getAttribute('data-i18n-ph'); if(t[k]!==undefined) el.placeholder = t[k]; });
  document.getElementById('langLabel').textContent = LANG_LABELS[l] || l;
  document.querySelectorAll('#langMenu div').forEach(d => { d.classList.toggle('active', d.getAttribute('onclick').includes("'"+l+"'")); });
  document.documentElement.lang = l==='zh' ? 'zh-CN' : l;
  if (typeof window.afterLangChange === 'function') window.afterLangChange(l); // 页面各自的重渲染钩子
  syncLangLinks();
  closeLang();
}
/* 解析初始语言：网址 ?lang= 优先，其次本地记忆，默认中文 */
function resolveLang(){
  try {
    const u = new URLSearchParams(location.search).get('lang');
    if (u && I18N[u]) return u;
    const s = localStorage.getItem('goolson_lang');
    if (s && I18N[s]) return s;
  } catch(e){}
  return 'zh';
}
/* 给所有站内链接补上 ?lang=，确保跳转后语言不变（file:// 下也能用） */
function syncLangLinks(){
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || /^https?:|^mailto:|^tel:/.test(href)) return;
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
      url.searchParams.set('lang', currentLang);
      a.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    } catch(e){}
  });
}
function toggleLang(){ document.getElementById('langMenu').classList.toggle('open'); }
function closeLang(){ document.getElementById('langMenu').classList.remove('open'); }
document.addEventListener('click', e => { if(!e.target.closest('.lang-wrap')) closeLang(); });
