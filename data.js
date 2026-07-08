window.TRAIN_DATA = [
  {
    id: "puyuma",
    photoUrl: "images/puyuma.jpg",
    photoCredit: {
      author: "LucasLiu0910",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E5%8F%B0%E9%90%B5%E6%99%AE%E6%82%A0%E7%91%AA.jpg"
    },
    name: "普悠瑪號",
    nameEn: "Puyuma Express",
    model: "TEMU2000",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["東部", "北部"],
    yearStart: 2013,
    maxSpeed: 130,
    manufacturer: "日本車輛製造",
    seats: 372,
    cars: 8,
    color: "#1a56a0",
    emoji: "🚄",
    description: "普悠瑪號以阿美族神話中的神聖人物為名，採用傾斜式車體技術，過彎時車身自動傾斜，不需減速即可高速行駛。2013 年正式通車，主要行駛北迴線與東部幹線，將台北到台東的旅行時間大幅縮短至約 3.5 小時。外觀採用原住民族傳統圖騰彩繪，充滿濃厚的台灣本土文化色彩，是東部鐵路旅遊的代表性列車。",
    features: [
      "傾斜式車體技術，過彎不需減速",
      "營運速度 130 km/h（設計最高 150 km/h）",
      "原住民風格彩繪外觀",
      "全列車對號座位設計"
    ],
    routes: [
      { name: "北迴線/東部幹線", stations: ["台北", "宜蘭", "蘇澳", "花蓮", "玉里", "台東"] }
    ],
    funFact: "普悠瑪號過彎時車身會像摩托車一樣傾斜，最多可以傾斜 6 度，讓乘客幾乎感覺不到在轉彎！",
    tags: ["傾斜式", "東部幹線", "快車", "原住民文化"]
  },
  {
    id: "taroko",
    photoUrl: "images/taroko.jpg",
    photoCredit: {
      author: "Encino~commonswiki",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TEMU1000-1066-yilan.jpg"
    },
    name: "太魯閣號",
    nameEn: "Taroko Express",
    model: "TEMU1000",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["東部", "北部"],
    yearStart: 2007,
    maxSpeed: 130,
    manufacturer: "日本 日立製作所",
    seats: 376,
    cars: 8,
    color: "#c0392b",
    emoji: "🚄",
    description: "太魯閣號以台灣著名的太魯閣國家公園命名，是臺鐵引進的第一款傾斜式列車，比普悠瑪號早六年投入服務。由日本日立製作所以 700 系新幹線相關技術為基礎打造，車身以鮮豔的紅白配色為主，外觀活潑醒目。行駛北迴線時，能在陡峭的山線隧道中保持高速，大幅縮短東西部之間的交通時間。",
    features: [
      "臺鐵第一款傾斜式列車",
      "營運速度 130 km/h（設計最高 150 km/h）",
      "紅白醒目外觀設計、4M4T 8 節編組",
      "適合北迴線山區路段"
    ],
    routes: [
      { name: "北迴線/東部幹線", stations: ["台北", "宜蘭", "花蓮", "台東"] }
    ],
    funFact: "太魯閣號是台灣第一輛「會傾斜的火車」，比普悠瑪號還早跑，是它的前輩哦！",
    tags: ["傾斜式", "東部幹線", "快車", "北迴線"]
  },
  {
    id: "ziqiang",
    photoUrl: "images/ziqiang--emu3000.jpg",
    photoCredit: {
      author: "鐵路1",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_EMU3000_at_Qidu_Station_20220618.jpg"
    },
    name: "自強號",
    nameEn: "Tze-Chiang Limited Express",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["全島"],
    color: "#e67e22",
    emoji: "🚆",
    description: "自強號是臺鐵最高等級的長程對號快車，1978 年起在西部幹線首航，至今超過 40 年。橘色與白色為主色的車身是一代台灣人共同的旅行記憶，跨越了電聯車、推拉式、傾斜式等多個車型世代。從英國進口的 EMU100「英國貴婦」，到南非組裝的 EMU1200「紅斑馬」，再到日立製造的最新 EMU3000，每個世代都反映了當時的技術與產業合作關係。",
    routes: [
      { name: "西部幹線", stations: ["基隆", "台北", "台中", "嘉義", "台南", "高雄"] },
      { name: "東部幹線", stations: ["台北", "宜蘭", "花蓮", "玉里", "台東"] }
    ],
    tags: ["快車", "全島", "對號座", "西部幹線", "東部幹線"],
    variants: [
      {
        model: "EMU100",
        nickname: "英國貴婦 / 阿婆號",
        manufacturer: "英國 BREL / 英國 GEC",
        yearStart: 1978,
        yearEnd: 2010,
        status: "retired",
        maxSpeed: 120,
        cars: 5,
        seats: 224,
        photoUrl: "images/ziqiang--emu100.jpg",
        photoCredit: {
          author: "Cheng-en Cheng",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:A_TRA_EMU100_train_at_Taichung_Station.jpg"
        },
        description: "臺鐵第一款交流電聯車、也是首款自強號，1978 年從英國進口，共 13 組 65 輛。圓弧形車頭仿英國城際列車設計，暱稱「英國貴婦」或「阿婆號」，2010 年退役。",
        features: [
          "臺灣首款交流電聯車",
          "臺鐵唯一將冷氣裝於車廂端面（非車頂）的電聯車",
          "5 輛 1 組動力分散式編組"
        ],
        funFact: "1991 年曾嘗試推出類似日本綠色車廂的商務車廂，台北到高雄票價 999 元，結果一年後就因乏人問津停辦——比高鐵商務車廂還早了將近 20 年！"
      },
      {
        model: "EMU1200",
        nickname: "紅斑馬",
        manufacturer: "南非 UCW（原車體）/ 英國 GEC（電機）/ 台灣車輛（改造）",
        yearStart: 2003,
        yearEnd: 2022,
        status: "retired",
        maxSpeed: 120,
        cars: 9,
        seats: 406,
        photoUrl: "images/ziqiang--emu1200.jpg",
        photoCredit: {
          author: "Rsa",
          license: "CC BY-SA 3.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_EMU1200_at_Taichung_Station_20130807.jpg"
        },
        description: "由 1988 年南非 UCW 製造的 EMU200 於 2002–2004 年由台灣車輛改造而成。跳脫傳統米黃「啞鈴」塗裝，白車身配紅裙板與橘線的外觀，因神似日本特急電車被鐵道迷暱稱「紅斑馬」。2022 年 3 月 28 日末班車後退役。",
        features: [
          "臺鐵首款設有育嬰／哺乳室的電聯車",
          "臺鐵唯一在車內牆面鋪設「壁毯」的營運車輛",
          "紅斑馬塗裝跳脫傳統啞鈴設計"
        ],
        funFact: "自動速度控制與電阻動力煞車在啟用不久後就因故障率過高被停用；沿用 EMU200 的 3 車模組電氣設計，馬達故障時偶爾還得叫輔助機車來救援！"
      },
      {
        model: "PP推拉式",
        nickname: "PP自強號",
        manufacturer: "南非 UCW（E1000 機車）/ 韓國 現代精工 / 台灣 唐榮鐵工廠 / GEC Alsthom（電機）",
        yearStart: 1996,
        status: "active",
        maxSpeed: 130,
        cars: 12,
        seats: 572,
        photoUrl: "images/ziqiang--pp.jpg",
        photoCredit: {
          author: "jason199567",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_E1000_Push-pull_Express_train_on_the_Western_Line.jpg"
        },
        description: "臺鐵首款流線型車頭、也是首款推拉式（Push-Pull）自強號。1996 年首航，兩部 E1000 機車分列首尾夾帶 10 節不動力拖車，1996 年上路至今仍是西部幹線主力。編組中特殊車廂包括親子車廂 PPP2500 與多功能自行車廂 PPM2500。",
        features: [
          "臺鐵首款流線型車頭與電動滑塞式車門",
          "設有親子車廂（PPP2500）與含 10 個自行車架的多功能車廂（PPM2500）",
          "推拉式設計，兩端各一部機車"
        ],
        funFact: "韓國現代精工原本規劃綠色車身，但臺鐵基於「警戒功能」（避免與樹林環境混淆）堅持改為橘色搭紅細條紋——這個決定塑造了往後三十年臺鐵幹線的視覺印象！"
      },
      {
        model: "EMU3000",
        nickname: "騰雲座艙（商務車廂）",
        manufacturer: "日本 日立製作所",
        yearStart: 2022,
        status: "active",
        maxSpeed: 130,
        cars: 12,
        seats: 538,
        photoUrl: "images/ziqiang--emu3000.jpg",
        photoCredit: {
          author: "鐵路1",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_EMU3000_at_Qidu_Station_20220618.jpg"
        },
        description: "臺鐵最新世代城際列車，由日立製作所在山口縣笠戶事業所組裝，屬 Hitachi AT300 (A-train) 家族。共 50 編組 600 輛，主要投入東部幹線紓解一票難求。首度導入商務車廂「騰雲座艙」，提供大型座椅、充電插座與飲料點心。",
        features: [
          "臺鐵首度導入的商務車廂「騰雲座艙」",
          "12 節長編組、鋁合金車體",
          "日立 SiC-IGBT 混合式牽引系統，功率 4.56 MW"
        ],
        funFact: "接替具備傾斜式車體的太魯閣號與普悠瑪號，EMU3000 卻「沒有」傾斜機構——交通部長王國材公開表示，路線改善工程完成後，傾斜已不必要了。"
      }
    ]
  },
  {
    id: "juguang",
    photoUrl: "images/juguang.jpg",
    photoCredit: {
      author: "Kazehayashi",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_E402_Chu-Kuang_Express_at_Taitung_Station_20201114.jpg"
    },
    name: "莒光號",
    nameEn: "Chu-Kuang Express",
    model: "35SP32950 系列客車（現役主力）",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["全島"],
    yearStart: 1970,
    maxSpeed: 110,
    manufacturer: "日本 日本車輛 / 日本 日立製作所 / 台灣 唐榮鐵工廠",
    seats: 480,
    cars: 8,
    color: "#8e44ad",
    emoji: "🚃",
    description: "莒光號是臺鐵長壽的對號快車服務，1970 年代起以紫紅色車身聞名。以機車頭牽引的客車組編成，車廂類型包含 35SP32850、35SP32950、35SP32720 等系列客車，是許多台灣人對「火車旅行」最原始的印象。速度雖不及自強號，但停靠站更多、票價更親民，至今仍在西部幹線與東部幹線部分列次服務。",
    features: [
      "停靠站數多，服務更多小城鎮",
      "營運速度 110 km/h",
      "紫紅色經典塗裝、機車牽引客車編組",
      "由多批不同年代的 35SP 系列客車編組而成"
    ],
    routes: [
      { name: "西部幹線", stations: ["基隆", "台北", "台中", "彰化", "嘉義", "台南", "高雄"] },
      { name: "南迴線／東部幹線", stations: ["高雄", "枋寮", "台東", "花蓮"] }
    ],
    funFact: "「莒光」二字取自「毋忘在莒」的典故，1970 年推出時是為呼應當時政治氛圍，沒想到成了台鐵服役最久的長青服務——原本要陸續退場，卻因 EMU3000 交車進度延宕而多次獲得延壽。",
    tags: ["快車", "全島", "對號座", "客車編組", "歷史車種"]
  },
  {
    id: "emu_local",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/TRA_EMU900.jpg",
    name: "區間車",
    nameEn: "Local Train (EMU)",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["全島"],
    color: "#27ae60",
    emoji: "🚋",
    description: "區間車是臺鐵最親民的列車，每站都停、不需對號，是台灣通勤族每天的好夥伴。從 1995 年 EMU500 首航起，三代 EMU 電聯車陸續加入服務，形成臺鐵西部走廊與各幹線通勤的主力。從韓國大宇的 EMU500，到日本車輛/台灣車輛合造的 EMU700（阿福號），再到最新韓國現代 Rotem 的 EMU900，車廂數與載客量一代比一代大，也奠定了臺鐵通勤現代化的基礎。",
    routes: [
      { name: "縱貫線／環島各幹線", stations: ["基隆", "台北", "桃園", "新竹", "台中", "彰化", "台南", "高雄"] }
    ],
    tags: ["通勤", "全島", "自由座", "電聯車"],
    variants: [
      {
        model: "EMU500",
        manufacturer: "韓國 大宇重工",
        yearStart: 1995,
        status: "active",
        maxSpeed: 110,
        cars: 4,
        seats: 240,
        description: "臺鐵首款不鏽鋼車體 EMU，1995 年由韓國大宇重工承造，設計參考先前的 DR2900 系。共 86 組 4 車編組，1995–1997 年分三批交車，奠定了臺鐵通勤列車的現代化基礎。",
        features: [
          "臺鐵首款不鏽鋼車體 EMU",
          "ABB 轉向架、25 kV 60 Hz AC 供電",
          "每側 3 門設計，便於通勤上下車"
        ],
        funFact: "EMU500 是臺鐵首款採用不鏽鋼車體的電聯車——這個材料標準奠定了往後 EMU700、EMU800、EMU900 全都跟進的傳統。"
      },
      {
        model: "EMU700",
        nickname: "阿福號 / 戽斗車",
        manufacturer: "日本 日本車輛 / 台灣車輛",
        yearStart: 2007,
        status: "active",
        maxSpeed: 110,
        cars: 8,
        seats: 408,
        description: "臺灣首款由國內廠商共同承造的 EMU，日本車輛先造前 3 組（EMU701–703），其餘 37 組（EMU704–740）由台灣車輛在新竹廠組裝。採用東芝 IGBT VVVF 牽引與 ATP（ETCS Level 1），是臺鐵區間快主力。",
        features: [
          "臺鐵首款國內組裝的 EMU（台灣車輛）",
          "東芝 IGBT VVVF 牽引、可回收煞車能量",
          "臺鐵首款通過 ETCS Level 1 ATP 認證的列車"
        ],
        funFact: "駕駛室凸出車頭的造型神似哆啦A夢角色「阿福（小夫）」，因此被暱稱「阿福號」；樹林站 2 月台自 2009 年 7 月起還有個以 EMU700 車頭為造型的「阿福便當」販售亭！"
      },
      {
        model: "EMU900",
        nickname: "最美區間車（媒體稱）",
        manufacturer: "韓國 現代 Rotem",
        yearStart: 2021,
        status: "active",
        maxSpeed: 130,
        cars: 10,
        seats: 436,
        description: "臺鐵最新世代的 10 車編組通勤 EMU，由韓國現代 Rotem 承造、MBD Technologies 工業設計。共 52 組 520 輛，2020–2023 年分批交車，主要用於西部幹線高需求區間車服務，取代舊 PP 與 EMU500。",
        features: [
          "10 車長編組（5M5T）、車廂數為前代兩倍以上",
          "6 號車設 8 個輪椅位、寬敞通道與 LED 資訊顯示",
          "設計最高速度 140 km/h，臺鐵最快的通勤 EMU"
        ],
        funFact: "2021 年上路時因為座位數（436）比 EMU500 少而引發抱怨——但這是刻意設計，用來提高尖峰時段站立空間和上下車速度。"
      }
    ]
  },
  {
    id: "pingxi_dr1000",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiwan_DR1000%2C_Pingxi%2C_Pingxi_Line_%2820181225a%29_%2853567323229%29.jpg",
    name: "平溪線柴油客車",
    nameEn: "Pingxi Line Diesel Railcar",
    model: "DR1000",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["北部"],
    yearStart: 1998,
    maxSpeed: 110,
    manufacturer: "日本 日本車輛（部分由 台灣 唐榮鐵工廠組裝）",
    seats: 144,
    cars: 2,
    color: "#f39c12",
    emoji: "🚞",
    description: "平溪線是台灣北部著名的觀光支線，蜿蜒穿越新北市山區，沿途經過十分、菁桐等充滿老街風情的小村落。1998 年起導入的 DR1000 型柴油客車小巧可愛，穿梭在翠綠山林與瀑布間，是天燈節期間遊客的最愛。DR1000 由日本車輛設計、部分委由台灣唐榮組裝，車體採用不鏽鋼、動力來自 Cummins 柴油引擎，是台鐵最主要的非電化支線用車。",
    features: [
      "穿越新北市山區的觀光支線",
      "天燈節必搭的人氣列車",
      "沿途瀑布與老街風光",
      "不鏽鋼車體、Cummins 引擎"
    ],
    routes: [
      { name: "平溪線", stations: ["瑞芳", "十分", "嶺腳", "菁桐"] }
    ],
    funFact: "平溪線全長只有12.9公里，卻有9個車站，平均不到1.5公里就有一站，是台灣站距最密集的支線！",
    tags: ["觀光", "支線", "柴油", "北部", "天燈"]
  },
  {
    id: "jiji_dr2700",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Diesel_Railcar_in_LinKou_Line_of_Taiwan_Railway-P1020697.JPG",
    name: "光華號 DR2700（白鐵仔）",
    nameEn: "Kuang-Hua Express DR2700",
    model: "DR2700",
    operator: "臺灣鐵路管理局（已退役）",
    type: "台鐵",
    region: ["全島"],
    yearStart: 1966,
    yearEnd: 2014,
    status: "retired",
    maxSpeed: 100,
    manufacturer: "日本 東急車輛",
    seats: 60,
    cars: 3,
    color: "#16a085",
    emoji: "🚞",
    description: "1966 年上路的光華號，是臺灣第一款採用不鏽鋼車體的柴油特快車，因銀色車身在陽光下閃亮而暱稱「白鐵仔」。全盛時期擔任西部幹線最快車種，台北到高雄只需 4 小時 45 分——比當時的其他車種快了近 2 小時。1981 年被自強號取代後轉往東部幹線繼續服務，最終於 2014 年 7 月 16 日花東線電氣化後全數除役，結束近半世紀的服役生涯。",
    features: [
      "臺灣首款不鏽鋼車體柴油特快",
      "1966 年上路即創下台北高雄 4 小時 45 分紀錄",
      "光華號時期營運速度 100 km/h",
      "2014 年 7 月 16 日全數退役"
    ],
    routes: [
      { name: "西部幹線（光華號時期）", stations: ["台北", "台中", "嘉義", "台南", "高雄"] },
      { name: "東部幹線（後期）", stations: ["蘇澳", "花蓮", "玉里", "台東"] }
    ],
    funFact: "「白鐵仔」的暱稱來自它的不鏽鋼車體——當年為對付東北季風潮濕的東部海線，特別採用不鏽鋼防鏽，在其他車輛還在漆油漆的年代，這輛車在陽光下閃閃發亮，成了鐵道迷心中的傳奇。",
    tags: ["歷史車種", "光華號", "白鐵仔", "已退役", "不鏽鋼"]
  },
  {
    id: "blue_skin",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/TRA_R101_leading_a_Breezy_Blue_Train_at_Taitung_Station.jpg",
    name: "藍皮解憂號",
    nameEn: "Blue Skin Train",
    model: "SPK32700 系客車（R100 柴電機車牽引）",
    operator: "臺灣鐵路公司／雄獅旅行社（代營）",
    type: "台鐵",
    region: ["南部", "東部"],
    yearStart: 2021,
    maxSpeed: 100,
    manufacturer: "臺鐵早期客車（1960 年代）／R100 柴電機車",
    seats: 200,
    cars: 6,
    color: "#2980b9",
    emoji: "🚃",
    description: "藍皮解憂號 2021 年 10 月起行駛南迴線（枋寮至台東），前身是台鐵最後一班「藍皮普快車」，退役後由雄獅旅行社代營、包裝為主題觀光列車。編組為 R100 型柴電機車牽引 SPK32700／TPK32200／SP32550 等 1960 年代舊式客車，車廂保留手動推拉窗、老式木質行李架與吊扇，是台灣少數還能「吹風看海」的鐵道體驗。",
    features: [
      "1960 年代原型普快客車編組，非電聯車",
      "可手動推拉的車窗，吹著南迴海風看太平洋",
      "R100 型柴電機車牽引，非電氣化區段運行",
      "由雄獅旅行社包裝營運，需事先預約"
    ],
    routes: [
      { name: "南迴線", stations: ["枋寮", "枋山", "加祿", "內獅", "古莊", "大武", "金崙", "太麻里", "知本", "台東"] }
    ],
    funFact: "藍皮解憂號的車窗可以真的推開！吹著海風看太平洋，是現在幾乎找不到的珍貴體驗！",
    tags: ["觀光", "懷舊", "南迴線", "藍皮", "慢旅行"]
  },
  {
    id: "thsr_700t",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/THSR_700T_arrived_Platform_1%2C_Hsinchu_Station_20140429.jpg",
    name: "高鐵700T型",
    nameEn: "Taiwan High Speed Rail 700T",
    model: "700T",
    operator: "台灣高速鐵路股份有限公司",
    type: "高鐵",
    region: ["全島"],
    yearStart: 2007,
    maxSpeed: 300,
    manufacturer: "日本 川崎重工 / 日本 日立製作所 / 日本車輛",
    seats: 989,
    cars: 12,
    color: "#e74c3c",
    emoji: "🚅",
    description: "台灣高鐵700T型是以日本新幹線700系為基礎開發的高速列車，2007年通車後徹底改變台灣西部的交通型態，讓台北到高雄只需90分鐘。12節車廂組成的超長列車，商務艙與標準艙共提供989個席位。鮮紅色車頭搭配白色車身的流線外型，是台灣現代化交通的象徵。每天數十班次縱貫西部走廊，服務超過150萬旅次，大幅縮短台灣南北距離。",
    features: [
      "最高時速 300 km/h",
      "台北到高雄僅需 90 分鐘",
      "12節車廂共989個座位",
      "以日本新幹線700系技術為基礎"
    ],
    routes: [
      { name: "西部高鐵幹線", stations: ["南港", "台北", "板橋", "桃園", "新竹", "苗栗", "台中", "彰化", "雲林", "嘉義", "台南", "左營"] }
    ],
    funFact: "高鐵一列車12節車廂全部連起來，長度約304公尺，幾乎和台北101的高度一樣長！",
    tags: ["高速", "西部幹線", "對號座", "新幹線技術"]
  },
  {
    id: "mrt_c301_wenhu",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Taipei_MRT_Train_C301_3CarSet_No_3014.JPG",
    name: "文湖線 VAL256 型電聯車",
    nameEn: "Wenhu Line VAL256",
    model: "VAL256",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1996,
    maxSpeed: 70,
    manufacturer: "法國 馬特拉（Matra）／ 法國 阿爾斯通（Alstom，後續維護）",
    seats: 80,
    cars: 4,
    color: "#c0392b",
    emoji: "🚇",
    description: "文湖線（原木柵線）是台灣第一條捷運路線，1996 年通車時轟動全台。採用法國馬特拉（Matra）公司的 VAL256 中運量膠輪系統，以橡膠輪胎取代鋼輪行駛，噪音小且爬坡能力強。列車全自動無人駕駛，靠電腦系統控制，不需司機員。高架路段穿越台北市東區，可俯瞰城市景觀。2013 年木柵線與內湖線整合後更名為文湖線。",
    features: [
      "台灣第一條捷運路線（1996 年）",
      "法國馬特拉 VAL256 膠輪系統、無人駕駛",
      "營運速度 70 km/h",
      "高架路段可俯瞰台北市景"
    ],
    routes: [
      { name: "文湖線", stations: ["南港展覽館", "大安", "忠孝復興", "中山國中", "內湖", "文德", "動物園"] }
    ],
    funFact: "文湖線的列車用橡膠輪胎跑，就像汽車一樣！所以它在爬坡時比一般火車厲害很多！",
    tags: ["捷運", "北部", "膠輪", "無人駕駛", "台灣第一"]
  },
  {
    id: "mrt_c381",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Taipei_Metro_C381_train_leaving_Beitou_Station_toward_Fuxinggang_Station.jpg",
    name: "台北捷運C381型電聯車",
    nameEn: "Taipei MRT C381",
    model: "C381",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 2012,
    maxSpeed: 80,
    manufacturer: "日本 川崎重工 / 台灣車輛",
    seats: 310,
    cars: 6,
    color: "#2980b9",
    emoji: "🚇",
    description: "C381 型電聯車是台北捷運淡水信義線與松山新店線的新世代主力車款，2012 年 10 月起投入營運。由日本川崎重工設計、台灣車輛在新竹廠共同組裝，是繼 C371 之後又一款國產化捷運車輛。相較舊型 C301，C381 引入 LED 顯示、無障礙區、更寬敞的通道與更節能的 IGBT-VVVF 牽引系統，是台北捷運近年最舒適的車型之一。",
    features: [
      "服務淡水信義線與松山新店線",
      "台日合作、台灣車輛在新竹廠組裝",
      "6 節車廂、席位 310",
      "IGBT-VVVF 牽引系統、節能環保"
    ],
    routes: [
      { name: "淡水信義線", stations: ["淡水", "民權西路", "台北車站", "大安", "信義安和", "象山"] },
      { name: "松山新店線", stations: ["新店", "公館", "西門", "北門", "南京三民", "松山"] }
    ],
    funFact: "C381 是台北捷運第一款車頭燈組採「三眼」設計的車型——上下兩顆為近光燈、中間一顆是遠光燈，遠遠一看就能認出它。",
    tags: ["捷運", "北部", "淡水信義線", "松山新店線", "通勤"]
  },
  {
    id: "mrt_c371",
    photoUrl: "images/mrt_c371.jpg",
    name: "台北捷運C371型電聯車",
    nameEn: "Taipei MRT C371",
    model: "C371",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 2006,
    maxSpeed: 80,
    manufacturer: "日本 川崎重工 / 台灣車輛",
    seats: 308,
    cars: 6,
    color: "#2e7d32",
    emoji: "🚇",
    description: "C371 型是台北捷運松山新店線與中和新蘆線的主力車款，6 節編組高運量設計，由日本川崎重工與台灣車輛合作製造，是台灣首款國產化捷運車輛之一。2006 年隨新莊線延伸段陸續投入服務，目前共有 53.5 列 321 輛，是北捷車隊中數量最多的車型，每天載著無數旅客穿梭在新北與台北之間。",
    features: [
      "6節高運量編組",
      "台日合作製造，首款國產化捷運車",
      "行駛松山新店線（綠線）與中和新蘆線（橘線）",
      "北捷數量最多的車型（321輛）"
    ],
    routes: [
      { name: "松山新店線", stations: ["松山", "南京三民", "台北小巨蛋", "大安", "新店"] },
      { name: "中和新蘆線", stations: ["蘆洲", "三重", "中山國小", "古亭", "南勢角"] }
    ],
    funFact: "C371型有「3系」和「4系」兩個版本，4系由台灣車輛在台灣本地製造，是台灣捷運國產化的重要里程碑！",
    tags: ["捷運", "北部", "松山新店線", "中和新蘆線", "國產化"]
  },
  {
    id: "ntmetro_610",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E7%92%B0%E7%8B%80%E7%B7%9A%E5%88%97%E8%BB%8A%E8%BB%8A%E9%AB%94.jpg",
    name: "新北捷運環狀線 610型",
    nameEn: "NTMC Circular Line 610",
    model: "610型",
    operator: "新北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 2020,
    maxSpeed: 80,
    manufacturer: "義大利 日立軌道義大利（Hitachi Rail Italy，前身 AnsaldoBreda）／ 台灣車輛",
    seats: 98,
    cars: 4,
    color: "#7cb518",
    emoji: "🚇",
    description: "環狀線 610型由義大利日立軌道製造，是台北都會區第一條以中運量鋼輪系統建設的環狀捷運。2020年12月第一階段通車，連接新北產業園區至大坪林，讓旅客不必進入台北市中心即可在各條捷運幹線之間換乘。以黃綠色為代表色，整體設計現代簡潔，車頭採圓弧造型，是新北捷運的形象主力車款。",
    features: [
      "中運量鋼輪系統，4節編組",
      "義大利日立製造，台北都會區首條環狀捷運",
      "串聯板橋、中和、新店、新莊等重要區域",
      "黃綠色塗裝，辨識度高"
    ],
    routes: [
      { name: "環狀線（第一階段）", stations: ["新北產業園區", "板橋", "中和", "景安", "文德", "大坪林"] }
    ],
    funFact: "環狀線的車頭有大片落地玻璃，坐最前排就像站在列車頭衝出去一樣，是鐵道迷的人氣打卡位置！",
    tags: ["捷運", "北部", "環狀線", "新北捷運", "中運量"]
  },
  {
    id: "kmrt_c301h",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaohsiung_MRT_Red_Line_Train.jpg",
    name: "高雄捷運C301H型電聯車",
    nameEn: "Kaohsiung MRT C301H",
    model: "C301H",
    operator: "高雄捷運股份有限公司",
    type: "捷運",
    region: ["南部"],
    yearStart: 2008,
    maxSpeed: 80,
    manufacturer: "德國 西門子（Siemens，奧地利廠組裝）",
    seats: 126,
    cars: 3,
    color: "#e74c3c",
    emoji: "🚇",
    description: "高雄捷運 2008 年通車，是台灣南部最重要的大眾運輸系統。C301H 型電聯車服務紅線與橘線，由德國西門子於奧地利廠組裝，採 3 節（DM1+T+DM2）編組，並保留未來加掛到 6 節的擴充空間。車廂以鮮豔的紅橘色調為主，活潑設計呼應高雄陽光城市的氣息。紅線從南岡山延伸至小港機場，橘線連接西子灣與大寮，兩線交會於美麗島站，該站以彩色玻璃穹頂聞名全球。",
    features: [
      "服務高雄紅線與橘線",
      "營運速度 80 km/h（設計最高 90 km/h）",
      "3 節編組，預留擴充到 6 節的空間",
      "交會於世界最美捷運站「美麗島」"
    ],
    routes: [
      { name: "紅線", stations: ["南岡山", "高雄車站", "美麗島", "前鎮高中", "小港"] },
      { name: "橘線", stations: ["西子灣", "鹽埕埔", "美麗島", "衛武營", "大寮"] }
    ],
    funFact: "高雄捷運美麗島站的彩色玻璃穹頂由義大利藝術家設計，用了400多種不同顏色的玻璃，被CNN評為全球最美地鐵站之一！",
    tags: ["捷運", "南部", "紅線", "橘線", "美麗島"]
  },
  {
    id: "taoyuan_emu",
    photoUrl: "images/taoyuan_emu.jpg",
    name: "桃園機場捷運電聯車",
    nameEn: "Taoyuan Airport MRT",
    operator: "桃園大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    color: "#2ecc71",
    emoji: "🚇",
    description: "桃園機場捷運 2017 年 3 月通車，連接台北市中心與桃園國際機場。分兩種服務——普通車（藍線塗裝）每站都停、直達車（紫線塗裝）大站快速直達，兩者共用月台但車廂設計截然不同。列車主色取自臺灣紫嘯鶇羽毛的紫藍色調，是台灣首條主要以「機場聯絡」為目的興建的軌道系統。",
    routes: [
      { name: "機場線", stations: ["台北車站", "三重", "新北產業園區", "林口", "山鼻", "坑口", "機場第一航廈", "機場第二航廈", "機場旅館", "大園", "橫山", "領航", "高鐵桃園站", "興南", "環北", "老街溪", "中壢"] }
    ],
    tags: ["捷運", "北部", "機場", "直達車", "行李友善"],
    variants: [
      {
        model: "1000型",
        nickname: "普通車",
        manufacturer: "日本 川崎重工 / 台灣車輛",
        yearStart: 2017,
        status: "active",
        maxSpeed: 100,
        cars: 4,
        seats: 185,
        description: "每站都停的普通車，全動力（4M）4 節編組，採縱向長條座椅設計以最大化站立空間，兩端 DMC1/DMC2 車節設有腳踏車放置區。101、118–120 組由日本川崎重工製造，102–117 組由台灣車輛在新竹廠組裝。",
        features: [
          "縱向長條座椅設計、極大站立空間",
          "兩端車節設腳踏車放置區",
          "台灣首款雙訊號系統（Siemens Trainguard MT + 德國 CBTC）認證列車"
        ],
        funFact: "112 組第 3 車廂被彩繪成「Q版紫嘯鶇親子友善車廂」，內設哺集乳友善空間，是機捷全車隊的隱藏彩蛋。"
      },
      {
        model: "2000型",
        nickname: "直達車",
        manufacturer: "日本 川崎重工",
        yearStart: 2017,
        status: "active",
        maxSpeed: 100,
        cars: 5,
        seats: 206,
        description: "只停大站的直達車，全動力（5M）5 節編組。特別的是包含一節無窗行李專用車廂 DMB，可放置最多 13 個 AKE 航空貨櫃，讓 A1/A3 站預辦登機的旅客行李與人分開運送。座位採飛機式 2+2 對面配置，附座椅小桌板與航班資訊顯示器。",
        features: [
          "台灣唯一車廂內設專用行李車廂（DMB，無窗）",
          "飛機式 2+2 座椅配置、附座椅小桌板",
          "航班資訊顯示器、USB 充電"
        ],
        funFact: "首列 201 組 2011 年 8 月就送到青埔機廠了，結果因為工程延宕、放在那邊等了 5 年多才在 2017 年正式營運！"
      }
    ]
  },
  {
    id: "danhai_lrt",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/New_Taipei_Metro_Danhai_Light_Rail_Train_2018-12-29.jpg",
    name: "淡海輕軌（行武者號）",
    nameEn: "Danhai LRT (Xingwuzhe)",
    model: "行武者號",
    operator: "新北大眾捷運股份有限公司",
    type: "輕軌",
    region: ["北部"],
    yearStart: 2018,
    maxSpeed: 70,
    manufacturer: "台灣車輛 / 德國 福伊特（Voith）",
    seats: 265,
    cars: 5,
    color: "#1abc9c",
    emoji: "🚃",
    description: "淡海輕軌是台灣第一條「國車國造」的輕軌，由台灣車輛承造、德國福伊特（Voith）提供設計技術支援，2018年綠山線通車。車輛暱稱「行武者號」——2015年新北市舉辦造型票選，從「智多星」「行武者」「海精靈」三款設計中，由民眾票選勝出。原本黃色系設計，因福伊特團隊實地走訪淡海後，改為水藍色以呼應在地海岸意象。5節1列的低地板動力分散式車體，搭配鋰電池儲能供電系統，讓部分無架空線區段也能行駛。",
    features: [
      "台灣第一列「國車國造」輕軌車輛",
      "由民眾票選勝出的「行武者」造型",
      "5 節 1 列低地板設計，265 人容量",
      "鋰電池儲能供電，支援無架空線區段行駛"
    ],
    routes: [
      { name: "綠山線", stations: ["紅樹林", "竿蓁林", "淡金鄧公", "淡江大學", "淡金北新", "新市一路", "淡水行政中心", "濱海義山", "濱海沙崙", "淡海新市鎮", "崁頂"] }
    ],
    funFact: "行武者號車隊裡藏著三列「幾米彩繪列車」——奇幻森林、漂浮城市、動物樂園，是全台唯一結合繪本大師幾米作品的輕軌車輛，搭到就是賺到！",
    tags: ["輕軌", "北部", "國車國造", "行武者", "低地板", "儲能"]
  },
  {
    id: "kaohsiung_lrt",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Urbos_3_of_Kaohsiung_LRT_2018-01-01.jpg",
    name: "高雄輕軌",
    nameEn: "Kaohsiung Circular Light Rail",
    operator: "高雄捷運股份有限公司",
    type: "輕軌",
    region: ["南部"],
    color: "#e67e22",
    emoji: "🚃",
    description: "高雄輕軌是台灣第一條現代化路面輕軌系統，2015 年分段通車、行駛環繞高雄港區與市中心的環狀線。全線採用「無架空線」技術，靠儲能系統供電行駛，讓沿線街道天際線乾淨開闊。路線沿途經駁二藝術特區、高雄展覽館、輕軌大寮站等，成為觀光動線也讓舊碼頭倉庫區煥然一新。分兩期建設，車輛分別由西班牙 CAF 與法國 Alstom 承造。",
    routes: [
      { name: "環狀線", stations: ["籬仔內", "凱旋瑞田", "夢時代", "經貿園區", "軟體園區", "高雄展覽館", "駁二大義", "駁二蓬萊", "哈瑪星", "壽山公園", "文武聖殿", "鼓山區公所", "馬卡道", "台鐵美術館", "美術館", "聖功醫院", "龍華國小", "灣仔內", "愛河之心", "音樂中心", "凹子底"] }
    ],
    tags: ["輕軌", "南部", "無架空線", "港區", "環狀線"],
    variants: [
      {
        model: "CAF Urbos 3",
        nickname: "小綠綠",
        manufacturer: "西班牙 CAF",
        yearStart: 2015,
        status: "active",
        maxSpeed: 50,
        cars: 5,
        seats: 64,
        description: "第一階段車輛，2015 年通車時投入營運，是台灣首列現代化輕軌車輛，也是首款西班牙製鐵道車輛。5 節模組化車體，中間第 2、4 節無轉向架，浮動懸掛於相鄰車節之間。",
        features: [
          "台灣首列現代化輕軌車輛",
          "5 節模組化車體、100% 低地板",
          "超級電容儲能供電，車站快充"
        ],
        funFact: "白底綠線塗裝被高雄人暱稱「小綠綠」；中間第 2、4 節車廂沒有輪子，是「浮」在前後車節之間的！"
      },
      {
        model: "Alstom Citadis X-05 305",
        nickname: "小黑綠",
        manufacturer: "法國 Alstom",
        yearStart: 2020,
        status: "active",
        maxSpeed: 50,
        cars: 5,
        seats: 66,
        description: "第二階段車輛，2020 年 11 月投入營運，為 Citadis X05 系列，5 節模組化車體、44 噸鋁合金車身，採用永磁同步馬達（PMSM）驅動。原訂 15 列、後追加 4 列，2021 年 12 月全數交車。",
        features: [
          "永磁同步馬達 PMSM 驅動、更節能",
          "44 噸鋁合金車體、深綠塗裝",
          "剛性架空線 SRS 快充系統"
        ],
        funFact: "深綠塗裝相對第一期較暗，被暱稱「小黑綠」；是台北捷運 VAL256 後台灣睽違多年再次引進的法國製車輛——從比利時安特衛普港運到基隆港後，還得在夜間走高速公路南下高雄！"
      }
    ]
  },
  {
    id: "alishan_shay",
    photoUrl: "images/alishan_shay.jpg",
    name: "阿里山森鐵Shay型蒸汽機車",
    nameEn: "Alishan Forest Railway Shay Steam Locomotive",
    model: "Shay Type",
    operator: "林務局阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 1912,
    maxSpeed: 30,
    manufacturer: "美國 利馬機車廠（Lima Locomotive Works）",
    seats: null,
    cars: null,
    color: "#2c3e50",
    emoji: "🚂",
    description: "阿里山森林鐵路是全球少數仍在運行的高山森林鐵道之一，採用美國利馬機車廠製造的Shay型蒸汽機車，以獨特的垂直汽缸與傳動軸設計聞名，能在陡峭山坡上爬行。自1912年起，這些鐵馬承載著無數木材與旅客穿越台灣最壯觀的山林。冒著白煙穿越雲海的畫面，成為阿里山最具代表性的浪漫景象，也是台灣鐵道迷最朝聖的夢幻目標之一。",
    features: [
      "全球最著名高山森林鐵道之一",
      "Shay型特殊垂直汽缸傳動設計",
      "能在大於60‰坡度上行駛",
      "穿越雲海的夢幻鐵道景觀"
    ],
    routes: [
      { name: "阿里山鐵路", stations: ["嘉義", "竹崎", "奮起湖", "神木", "阿里山"] }
    ],
    funFact: "阿里山蒸汽火車爬山的坡度，比台灣最陡的公路還要陡！在鐵路界這叫「齒軌坡」，非常罕見！",
    tags: ["觀光", "蒸汽", "森林鐵路", "中部", "歷史", "阿里山"]
  },
  {
    id: "alishan_dl47",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AFR_DL42_01.jpg",
    name: "阿里山森鐵DL-47柴油機車",
    nameEn: "Alishan Forest Railway DL-47 Diesel Locomotive",
    model: "DL-47",
    operator: "農業部林業及自然保育署阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 2007,
    maxSpeed: 35,
    manufacturer: "日本 日本車輛（台灣車輛組裝）",
    seats: null,
    cars: null,
    color: "#27ae60",
    emoji: "🚂",
    description: "DL-47 是阿里山林業鐵路第 7 代柴油機車，2007 年由日本車輛設計、台灣車輛組裝。搭載 Cummins QSK19 柴油引擎（750 hp），車重 30 噸，專為應對阿里山 762mm 窄軌及高坡度路線設計，是森鐵日常牽引旅客列車的現役主力。綠色車身在阿里山山林中格外融合，每天牽引列車從嘉義平原爬升到海拔 2216 公尺的阿里山，穿越熱、暖、溫、寒四種氣候帶。",
    features: [
      "阿里山森鐵現役主力柴油機車（第 7 代）",
      "適應 762mm 特殊窄軌設計",
      "Cummins QSK19 柴油引擎、750 hp",
      "穿越四種不同氣候林相"
    ],
    routes: [
      { name: "阿里山鐵路", stations: ["嘉義", "竹崎", "交力坪", "奮起湖", "阿里山"] }
    ],
    funFact: "阿里山鐵路從海拔30公尺的嘉義一路爬到2216公尺，等於從地面爬上了約7棟101大樓疊起來的高度！",
    tags: ["觀光", "柴油", "森林鐵路", "中部", "登山鐵路", "阿里山"]
  },
  {
    id: "alishan_sl25",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AFR_Shay_SL25_in_AFR_Garage_Park.jpg",
    name: "阿里山森鐵SL-25蒸汽機車",
    nameEn: "Alishan Forest Railway SL-25 Shay Locomotive",
    model: "SL-25（Shay B 型 28 噸）",
    operator: "農業部林業及自然保育署阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 1913,
    maxSpeed: 25,
    manufacturer: "美國 利馬機車廠（Lima Locomotive Works）",
    seats: null,
    cars: null,
    color: "#7f8c8d",
    emoji: "🚂",
    description: "SL-25 是阿里山森鐵的百年歷史瑰寶，1913 年由美國利馬機車廠製造，屬 Shay 型 B 級 28 噸齒輪傳動蒸汽機車，最初為對抗阿里山陡峭坡度與急彎而選用。曾長期擔任日本殖民時期至戰後初期阿里山木材運輸的主力，現以動態保存方式讓遊客體驗超過百年的蒸汽火車魅力。假日推出的蒸汽火車專列場場爆滿，是跨越世代的珍貴鐵道文化體驗。",
    features: [
      "1913 年美國 Lima 製造的 Shay B 型齒輪傳動蒸汽機車",
      "阿里山現存最古老的動態保存蒸汽機車",
      "假日觀光特別運轉",
      "為對抗森鐵陡坡與急彎特別選用的齒輪傳動設計"
    ],
    routes: [
      { name: "阿里山站內線", stations: ["阿里山", "祝山"] }
    ],
    funFact: "SL-25 已經超過 110 歲了！它是台灣還在實際跑動的蒸汽火車中，歲數最大的老前輩——齒輪傳動設計讓它能爬上其他火車連想都不敢想的陡坡。",
    tags: ["觀光", "蒸汽", "Shay", "保存鐵道", "中部", "阿里山", "歷史"]
  },
  {
    id: "neiwan_dr1000",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/EMU100_%26_DR3100_in_Taitung.jpg",
    name: "內灣線柴油客車",
    nameEn: "Neiwan Line Diesel Railcar",
    model: "DR1000",
    operator: "臺灣鐵路公司",
    type: "台鐵",
    region: ["北部"],
    yearStart: 1998,
    maxSpeed: 110,
    manufacturer: "日本 日本車輛（部分由 台灣 唐榮鐵工廠組裝）",
    seats: 144,
    cars: 2,
    color: "#d35400",
    emoji: "🚞",
    description: "內灣線與六家線的非電化段使用 DR1000 型柴油客車服務。兩條支線穿越新竹縣的丘陵與農村地帶，沿途保留了豐富的客家文化風情。內灣村是著名的客家老街，週末旅遊人潮絡繹不絕；六家線則連接高鐵新竹站，讓搭高鐵的旅客也能轉乘深入山線體驗客家文化。橘紅色車身在綠色田野中格外搶眼。",
    features: [
      "服務內灣線與六家線非電化段",
      "連接高鐵新竹站轉乘",
      "穿越新竹客家文化地帶",
      "不鏽鋼車體、Cummins 柴油引擎"
    ],
    routes: [
      { name: "內灣線", stations: ["新竹", "竹中", "合興", "竹東", "九讚頭", "內灣"] },
      { name: "六家線", stations: ["竹中", "六家"] }
    ],
    funFact: "內灣線的合興車站有個超浪漫的傳說：月台上的愛情故事讓它成為台灣最有名的「愛情車站」，情侶都愛來這裡拍照！",
    tags: ["觀光", "支線", "柴油", "北部", "客家", "內灣"]
  },
  {
    id: "nrm_dr2203",
    photoUrl: "images/nrm_dr2203.jpg",
    name: "鐵博藍皮小火車",
    nameEn: "NRM Blue Skin Heritage Train",
    operator: "國家鐵道博物館",
    type: "觀光",
    region: ["北部"],
    color: "#2b6cb0",
    emoji: "🚞",
    description: "位於台北松山的國家鐵道博物館（前台北機廠）修復了兩台歷史柴油客車，目前是台北市區內唯一在地表軌道上實際行駛的「活火車」。分別採用兩種不同的藍色塗裝——DR2303 的「浪漫藍」為戰後客車最初的設計原色、DR2203 的「孔雀藍」則是 1990 年代因調色失誤而意外產生、卻成為一代人共同記憶的顏色。假日開放搭乘，繞行園區一圈約 650 公尺。",
    routes: [
      { name: "園區觀光路線", stations: ["鐵博東站", "鐵博西站"] }
    ],
    tags: ["鐵道博物館","台北機廠","古蹟","藍皮","柴油客車","動態保存","懷舊"],
    variants: [
      {
        model: "DR2303",
        nickname: "浪漫藍",
        manufacturer: "日本 川崎車輛",
        yearStart: 1935,
        status: "active",
        maxSpeed: 30,
        cars: 1,
        seats: 66,
        description: "1935–1937 年由川崎車輛以キハ300 型汽油客車製造，1954 年改裝為柴油動力。修復為戰後客車原始的「浪漫藍」塗裝，這才是當年鐵路局最初設計的顏色。2022 年 10 月完工，是國家鐵道博物館與臺鐵「動態保存」合作計畫的第一部作品。",
        features: [
          "國家鐵道博物館動態保存首作（2022 年）",
          "戰後藍皮客車原始「浪漫藍」塗裝",
          "車體比 DR2200 更大，源自キハ300 型"
        ],
        funFact: "DR2303 的「浪漫藍」其實才是鐵路局當年設計的正牌顏色——後來的「孔雀藍」是 1990 年代調色調錯了才誕生的意外！"
      },
      {
        model: "DR2203",
        nickname: "孔雀藍",
        manufacturer: "日本 川崎車輛",
        yearStart: 1932,
        status: "active",
        maxSpeed: 30,
        cars: 1,
        seats: 66,
        description: "1932–1934 年由川崎車輛以キハ200 型汽油客車製造，1956 年改為柴油動力。是台灣 DR2200 型的唯一倖存個體。修復為服役後期至 1998 年退役時的「孔雀藍」塗裝，2024 年 5 月完工，同批獨立工程也升級了車頂 SPAH 耐候鋼板與 IEC 61133 防水規格。",
        features: [
          "台灣 DR2200 型的唯一倖存體",
          "1998 年退役、2024 年 5 月修復完工",
          "JIS G3125 SPAH 耐候鋼板車頂 + IEC 61133 防水"
        ],
        funFact: "承造修復的台灣車輛工程團隊，血緣正是接續當年 1983–85 年整修時的唐榮鐵工廠——連專案經理都本人親自參與過那一輪整修，隔了四十年再次和同一台車重逢！"
      }
    ]
  },
  {
    id: "ck124",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20110702%E4%B8%89%E7%BE%A9%E7%AB%99%E5%85%A7%E7%9A%84CK124%E5%BE%8C%E5%81%B4.jpg",
    name: "舊山線CK124蒸汽機車",
    nameEn: "Old Mountain Line CK124 Steam Locomotive",
    model: "CK124",
    operator: "台灣鐵路管理局（保存展示）",
    type: "觀光",
    region: ["中部"],
    yearStart: 1936,
    maxSpeed: 85,
    manufacturer: "日本 日本車輛製造",
    seats: null,
    cars: null,
    color: "#2c3e50",
    emoji: "🚂",
    description: "CK124 屬臺鐵 CK120 型（原稱 C12 型）蒸汽機車，1936 年由日本車輛製造為日治時代購入的第一批。全型共 7 輛（C121–C127，其中 C121–C125 於 1936 年、C126–C127 於 1942 年購入）。目前以保存復駛的方式在舊山線（三義至勝興段）進行觀光運轉，讓民眾重溫百年前的鐵道風情。黑色鋼鐵車身噴出的白色蒸汽配上勝興車站的日式老建築，是台灣最具歷史氛圍的鐵道場景之一。",
    features: [
      "1936 年日治時代日本車輛製造",
      "台鐵 CK120 型（原 C12 型）7 輛中之一",
      "舊山線觀光復駛特別運轉",
      "勝興車站日式建築歷史場景"
    ],
    routes: [
      { name: "舊山線", stations: ["三義", "勝興", "舊泰安"] }
    ],
    funFact: "CK124已經快90歲了，比你的爺爺奶奶可能還要老！它跑過的路加起來，可能已經繞地球好幾圈了！",
    tags: ["觀光", "蒸汽", "歷史", "中部", "舊山線", "日治時代"]
  }
];

console.log('TRAIN_DATA loaded:', window.TRAIN_DATA.length, 'vehicles');
