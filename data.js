window.TRAIN_DATA = [
  {
    id: "puyuma",
    photoUrl: "images/puyuma--temu2000.jpg",
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
    photoUrl: "images/taroko--temu1000.jpg",
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
        photoUrl: "images/ziqiang--e1000.jpg",
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
    photoUrl: "images/juguang--e400.jpg",
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
    photoUrl: "images/emu_local--emu900.jpg",
    photoCredit: {
      author: "jason199567",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_EMU900_running_a_local_train_service_on_the_Western_Line.jpg"
    },
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
        photoUrl: "images/emu_local--emu500.jpg",
        photoCredit: {
          author: "Takeshi Aida",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan_EMU500_Commuter,_Qidu_(20240113)_(53560453672).jpg"
        },
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
        photoUrl: "images/emu_local--emu700.jpg",
        photoCredit: {
          author: "jason199567",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_EMU700_running_a_local_train_service_on_the_Western_Line.jpg"
        },
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
        photoUrl: "images/emu_local--emu900.jpg",
        photoCredit: {
          author: "Takeshi Aida",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan_EMU900_Commuter,_Qidu_(20240114b)_(53561757230).jpg"
        },
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
    photoUrl: "images/pingxi--dr1000.jpg",
    photoCredit: {
      author: "Takeshi Aida",
      license: "CC BY-SA 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan_DR1000,_Pingxi,_Pingxi_Line_(20181225a)_(53567323229).jpg"
    },
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
    photoUrl: "images/jiji--dr2700.jpg",
    photoCredit: {
      author: "賴德湘",
      license: "CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E5%85%89%E8%8F%AF%E8%99%9F.jpg"
    },
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
    photoUrl: "images/blue_skin--spk2300.jpg",
    photoCredit: {
      author: "jason199567",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_R101_leading_a_Breezy_Blue_Train_at_Taitung_Station.jpg"
    },
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
    photoUrl: "images/thsr--700t.jpg",
    photoCredit: {
      author: "Rsa",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:THSR_700T_TR17_20130907.jpg"
    },
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
    id: "mrt_wenhu",
    photoUrl: "images/mrt_wenhu--val256.jpg",
    photoCredit: { author: "Subscriptshoe9", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Matra_VAL256,_Taipei_Metro_20210509.jpg" },
    name: "台北捷運文湖線",
    nameEn: "Wenhu Line (Brown)",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1996,
    maxSpeed: 70,
    color: "#C48C31",
    emoji: "🚇",
    description: "文湖線（原木柵線＋內湖線）是台灣第一條捷運路線，1996 年通車。採用中運量膠輪系統，列車全自動無人駕駛（GoA 4），高架路段穿越台北市東區可俯瞰城市景觀。2009 年內湖段通車後兩線合併更名為文湖線，目前共 24 站，由 VAL256 與 INNOVIA APM 256 兩型車輛混合運行。",
    features: [
      "台灣第一條捷運路線（1996 年通車）",
      "全自動無人駕駛（GoA 4）",
      "膠輪系統，噪音小、爬坡力強",
      "全線 24 站，高架為主"
    ],
    routes: [
      { name: "文湖線", stations: ["動物園", "科技大樓", "忠孝復興", "松山機場", "西湖", "內湖", "南港展覽館"] }
    ],
    funFact: "文湖線原名「木柵內湖線」，縮寫「柵湖」（Zhahu）發音類似麻將術語「詐胡」——因為建造期間問題不斷，這個巧合讓台北人笑了好多年，最後乾脆改名！",
    tags: ["捷運", "北部", "文湖線", "膠輪", "無人駕駛", "台灣第一"],
    variants: [
      {
        model: "VAL256",
        nickname: "馬特拉",
        manufacturer: "法國 Matra／Alstom（後續維護）",
        yearStart: 1996,
        status: "active",
        maxSpeed: 70,
        cars: 4,
        seats: 80,
        photoUrl: "images/mrt_wenhu--val256.jpg",
        photoCredit: { author: "Subscriptshoe9", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Matra_VAL256,_Taipei_Metro_20210509.jpg" },
        description: "木柵線通車時的原始車隊，法國馬特拉製造，共 51 對 102 輛。2010 年完成號誌系統升級（改用龐巴迪 CITYFLO 650 CBTC），與新車統一控制。",
        features: [
          "1996 年木柵線原始車隊",
          "51 對（102 輛）",
          "車寬 2,560 mm",
          "圓弧車頭造型"
        ]
      },
      {
        model: "INNOVIA APM 256",
        nickname: "龐巴迪",
        manufacturer: "加拿大 Bombardier／唐榮鐵工廠（部分組裝）",
        yearStart: 2009,
        status: "active",
        maxSpeed: 70,
        cars: 4,
        seats: 96,
        photoUrl: "images/mrt_wenhu--innovia_apm_256.jpg",
        photoCredit: { author: "Subscriptshoe9", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bombardier_INNOVIA_APM_256_approaching_Daan_Station_20210418.jpg" },
        description: "2009 年內湖線延伸段通車時加入的新車隊，龐巴迪製造，共 101 對 202 輛。外觀較方正現代，車內天花板較低（190 cm）是旅客常見抱怨。",
        features: [
          "2009 年內湖線延伸加入",
          "101 對（202 輛）",
          "車寬 2,540 mm（略窄於 VAL256）",
          "方正車頭、CITYFLO 650 號誌"
        ]
      }
    ]
  },
  {
    id: "mrt_tamsui_xinyi",
    photoUrl: "images/mrt_tamsui_xinyi--c301.jpg",
    photoCredit: { author: "Lokseng01", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Taipei_Metro_C301_train_at_Beitou_Station.jpg" },
    name: "台北捷運淡水信義線",
    nameEn: "Tamsui-Xinyi Line (Red)",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1997,
    maxSpeed: 80,
    color: "#E3002C",
    emoji: "🚇",
    description: "淡水信義線（紅線）是北捷最長的高運量路線（32.3 km），1997 年通車，北起淡水南至象山，共 28 站。沿途經過士林夜市、台北車站、東門、台北 101 等重要地標，是台北最具代表性的捷運路線之一。目前由 C301 與 C381 兩型車輛混合運行。",
    features: [
      "北捷最長高運量路線（32.3 km）",
      "1997 年通車，共 28 站",
      "經過台北車站、台北 101 等地標",
      "含高架、地面、地下段"
    ],
    routes: [
      { name: "淡水信義線", stations: ["淡水", "北投", "士林", "台北車站", "東門", "台北101/世貿", "象山"] }
    ],
    funFact: "2001 年納莉颱風造成淡水線部分路段泡水，全線停駛將近 3 個月——是北捷史上最嚴重的天災停擺事件。",
    tags: ["捷運", "北部", "淡水信義線", "紅線", "高運量"],
    variants: [
      {
        model: "C301",
        nickname: "",
        manufacturer: "日本 川崎重工（經美國 Union Rail Car）",
        yearStart: 1997,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 396,
        photoUrl: "images/mrt_tamsui_xinyi--c301.jpg",
        photoCredit: { author: "Lokseng01", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Taipei_Metro_C301_train_at_Beitou_Station.jpg" },
        description: "北捷最早的高運量鋼輪列車，1997 年隨淡水線通車啟用，共 22 列 132 輛。2012–2017 年間完成牽引系統升級（GTO → IGBT），持續服役中。",
        features: [
          "北捷首款高運量列車（1997）",
          "22 列（132 輛）",
          "6 節編組（4 動 2 拖）",
          "已完成 IGBT 牽引系統更新"
        ]
      },
      {
        model: "C381",
        nickname: "三眼仔",
        manufacturer: "日本 川崎重工／台灣車輛",
        yearStart: 2012,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 310,
        photoUrl: "images/mrt_tamsui_xinyi--c381.jpg",
        photoCredit: { author: "Lokseng01", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Taipei_Metro_C381_train_leaving_Beitou_Station_toward_Fuxinggang_Station.jpg" },
        description: "2012 年投入營運的新世代車款，由川崎重工設計、台灣車輛共同組裝。車頭「三眼」燈組設計是最明顯的辨識特徵，配備 IGBT-VVVF 牽引、LED 到站顯示與無障礙空間。",
        features: [
          "2012 年啟用，台日合作製造",
          "車頭三眼燈組易於辨識",
          "IGBT-VVVF 牽引系統",
          "與 C371 零件互通率逾 50%"
        ],
        funFact: "C381 是台北捷運第一款車頭燈組採「三眼」設計的車型——上下兩顆為近光燈、中間一顆是遠光燈，遠遠一看就能認出它。"
      }
    ]
  },
  {
    id: "mrt_songshan_xindian",
    photoUrl: "images/mrt_songshan_xindian--c371.jpg",
    photoCredit: { author: "Howard61313", license: "GFDL 1.2+ / Public Domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:C371_approaching_Platform_2,_CKS_Meml_Hall_20110225.jpg" },
    name: "台北捷運松山新店線",
    nameEn: "Songshan-Xindian Line (Green)",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1998,
    maxSpeed: 80,
    color: "#008659",
    emoji: "🚇",
    description: "松山新店線（綠線）是北捷唯一與其他所有營運路線都有站內轉乘的路線，1998 年首段通車，2014 年全線貫通。由新店線、小南門線、松山線三段歷史路線整合而成，共 20 站（含小碧潭支線）。目前由 C371 與 C381 兩型車輛混合運行。",
    features: [
      "唯一與所有路線皆有站內轉乘",
      "1998 年首段通車，2014 年全線貫通",
      "共 20 站（含小碧潭支線）",
      "C371（3 系）+ C381 混合車隊"
    ],
    routes: [
      { name: "松山新店線", stations: ["新店", "公館", "中正紀念堂", "西門", "中山", "松江南京", "松山"] }
    ],
    funFact: "松山新店線其實是三條線拼起來的——新店線（1998）、小南門線（2000）、松山線（2014），花了 16 年才串成一條完整路線！",
    tags: ["捷運", "北部", "松山新店線", "綠線", "高運量"],
    variants: [
      {
        model: "C371（3 系）",
        nickname: "",
        manufacturer: "日本 川崎重工／台灣車輛",
        yearStart: 2006,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 308,
        photoUrl: "images/mrt_songshan_xindian--c371.jpg",
        photoCredit: { author: "Howard61313", license: "GFDL 1.2+ / Public Domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:C371_approaching_Platform_2,_CKS_Meml_Hall_20110225.jpg" },
        description: "台灣首款國產化捷運車輛，由川崎重工與台灣車輛合作製造。3 系配屬新店機廠，行駛松山新店線。另有 3 節編組短列車行駛小碧潭支線。",
        features: [
          "台灣首款國產化捷運列車",
          "6 節編組（主線）/ 3 節（小碧潭支線）",
          "3 系配屬新店機廠",
          "北捷數量最多車型的一部分（全系列 321 輛）"
        ],
        funFact: "C371 型有「3 系」和「4 系」兩個版本，分別服務不同路線——就像雙胞胎各自去了不同學校！"
      },
      {
        model: "C381",
        nickname: "三眼仔",
        manufacturer: "日本 川崎重工／台灣車輛",
        yearStart: 2012,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 310,
        photoUrl: "images/mrt_songshan_xindian--c381.png",
        description: "2012 年投入營運的新世代車款，部分列車配屬新店機廠行駛松山新店線。與淡水信義線共用同一型號，車頭「三眼」燈組設計是辨識特徵。",
        features: [
          "2012 年啟用，與紅線共用車型",
          "車頭三眼燈組",
          "IGBT-VVVF 牽引系統",
          "部分配屬新店機廠"
        ]
      }
    ]
  },
  {
    id: "mrt_zhonghe_xinlu",
    photoUrl: "images/mrt_zhonghe_xinlu--c371.jpg",
    photoCredit: { author: "Samson Ng . D201@EAL", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kawasaki-TRSC_C371_EMU.jpg" },
    name: "台北捷運中和新蘆線",
    nameEn: "Zhonghe-Xinlu Line (Orange)",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1998,
    maxSpeed: 80,
    color: "#F8B61C",
    emoji: "🚇",
    description: "中和新蘆線（橘線）1998 年首段通車，全線 26 站、31.5 km，是北捷唯一全段地下化的高運量路線。在大橋頭站形成 Y 字分岔，分往蘆洲與迴龍兩個方向。目前全線使用 C371（4 系）運行。",
    features: [
      "全線地下化（31.5 km）",
      "大橋頭站 Y 字分岔（蘆洲／迴龍）",
      "共 26 站",
      "全線使用 C371（4 系）"
    ],
    routes: [
      { name: "中和新蘆線", stations: ["南勢角", "古亭", "忠孝新生", "民權西路", "大橋頭", "新莊", "迴龍／蘆洲"] }
    ],
    funFact: "中和新蘆線在大橋頭站分岔成兩條支線——搭錯方向的話，一個去蘆洲、一個去迴龍，差了十幾公里！1990 年代為省錢沒蓋袋型軌，導致現在故障時要多花 25–30 分鐘才能恢復。",
    tags: ["捷運", "北部", "中和新蘆線", "橘線", "高運量"],
    variants: [
      {
        model: "C371（4 系）",
        nickname: "",
        manufacturer: "日本 川崎重工／台灣車輛",
        yearStart: 2006,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 308,
        photoUrl: "images/mrt_zhonghe_xinlu--c371.jpg",
        photoCredit: { author: "Samson Ng . D201@EAL", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kawasaki-TRSC_C371_EMU.jpg" },
        description: "C371 的 4 系列車，配屬蘆洲機廠與新莊機廠，專門行駛中和新蘆線。由台灣車輛在國內製造，是台灣捷運國產化的重要里程碑。",
        features: [
          "4 系配屬蘆洲／新莊機廠",
          "台灣車輛國內製造",
          "6 節編組（4 動 2 拖）",
          "與 3 系外觀相同，僅編號系統不同"
        ]
      }
    ]
  },
  {
    id: "mrt_bannan",
    photoUrl: "images/mrt_bannan--c321.jpg",
    photoCredit: { author: "Sinsyuan", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:C321_Bannan_BL02_20260108.jpg" },
    name: "台北捷運板南線",
    nameEn: "Bannan Line (Blue)",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1999,
    maxSpeed: 80,
    color: "#0070BD",
    emoji: "🚇",
    description: "板南線（藍線）1999 年通車，是北捷運量最高的路線，也是第一條東西向路線。全線 23 站，串聯板橋、台北車站、忠孝東路商圈與南港，沿途三座三鐵共構站（板橋、台北、南港）是全台最密集的交通樞紐帶。目前由 C321 與 C341 兩型車輛運行。",
    features: [
      "北捷運量最高路線",
      "第一條東西向路線（1999 年）",
      "全線 23 站",
      "三座三鐵共構站（板橋、台北、南港）"
    ],
    routes: [
      { name: "板南線", stations: ["頂埔", "板橋", "龍山寺", "台北車站", "忠孝復興", "市政府", "南港展覽館"] }
    ],
    funFact: "板南線的英文名 Bannan 常被外國遊客看成 Banana——香蕉線的暱稱不脛而走，加上路線顏色是藍色，「藍色香蕉」成了外國背包客之間的趣味梗。",
    tags: ["捷運", "北部", "板南線", "藍線", "高運量"],
    variants: [
      {
        model: "C321",
        nickname: "",
        manufacturer: "德國 Siemens／南非 UCW／中鋼機械（部分組裝）",
        yearStart: 1999,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 396,
        photoUrl: "images/mrt_bannan--c321.jpg",
        photoCredit: { author: "Sinsyuan", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:C321_Bannan_BL02_20260108.jpg" },
        description: "板南線通車時的主力列車，1999 年啟用，共 36 列 216 輛。目前正進行牽引系統更新（GTO → ABB BORDLINE IGBT），首列改造車 2024 年 4 月重新上線。",
        features: [
          "板南線主力列車（1999 年啟用）",
          "36 列（216 輛）",
          "6 節編組（4 動 2 拖）",
          "牽引系統更新中（2024–）"
        ]
      },
      {
        model: "C341",
        nickname: "",
        manufacturer: "德國 Siemens（奧地利製造）",
        yearStart: 2005,
        status: "active",
        maxSpeed: 80,
        cars: 6,
        seats: 396,
        photoUrl: "images/mrt_bannan--c341.jpg",
        photoCredit: { author: "蒼空 翔 (Chou0416)", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:C341_1201_at_Ximen_Station_20060531.jpg" },
        description: "2005 年加入板南線的增備車，共 6 列 36 輛，由 Siemens 在奧地利製造。外觀與 C321 幾乎相同，主要為板南線東延段（昆陽→南港展覽館）增加運能而採購。",
        features: [
          "2005 年增備車",
          "6 列（36 輛）",
          "為東延段增加運能",
          "外觀與 C321 近乎相同"
        ]
      }
    ]
  },
  {
    id: "ntmetro_610",
    photoUrl: "images/ntmetro_610.jpg",
    photoCredit: {
      author: "Tbatb",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Train_in_Taipei_Metro_Circular_Line_Banqiao_Station.jpg"
    },
    name: "新北捷運環狀線",
    nameEn: "NTMC Circular Line",
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
    photoUrl: "images/kmrt_c301h.jpg",
    photoCredit: {
      author: "Joe Lewis",
      license: "CC BY-SA 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kaohsiung_MRT_Red_Line_Train.jpg"
    },
    name: "高雄捷運紅橘線",
    nameEn: "Kaohsiung MRT (Red/Orange Line)",
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
    photoUrl: "images/taoyuan_emu--2000.jpg",
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
        photoUrl: "images/taoyuan_emu--1000.jpg",
        photoCredit: {
          author: "Subscriptshoe9",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Taoyuan_Metro_Commuter_Train_2017-02-25.jpg"
        },
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
    photoUrl: "images/kaohsiung_lrt--caf.jpg",
    photoCredit: {
      author: "Subscriptshoe9",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:KMRT_CAF_train_at_C7_2016-08-27.jpg"
    },
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
        photoUrl: "images/kaohsiung_lrt--caf.jpg",
        photoCredit: {
          author: "Subscriptshoe9",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:KMRT_CAF_train_at_C7_2016-08-27.jpg"
        },
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
        photoUrl: "images/kaohsiung_lrt--alstom.jpg",
        photoCredit: {
          author: "Takeshi Aida",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kaohsiung_Light_Rail_Alstom_Citadis,_Pier-2_Art_Center_(20240316a)_(53607047337).jpg"
        },
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
    id: "alishan",
    photoUrl: "images/alishan--shay.jpg",
    photoCredit: {
      author: "jason199567",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:AFR_Shay_SL25_in_AFR_Garage_Park.jpg"
    },
    name: "阿里山林業鐵路",
    nameEn: "Alishan Forest Railway",
    operator: "農業部林業及自然保育署阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 1912,
    maxSpeed: 45,
    color: "#2f855a",
    emoji: "🚞",
    description: "阿里山林業鐵路是台灣碩果僅存、仍在營運的高山森林鐵道，1912 年為運送阿里山檜木而通車。全線以 762mm 窄軌，自海拔約 30 公尺的嘉義站一路盤旋爬升至海拔 2,216 公尺的阿里山站，途中經獨立山螺旋、Z 字形折返，橫跨熱、暖、溫、寒四種氣候林相，與印度大吉嶺、祕魯安地斯並列世界僅存的高山鐵路。從百年 Shay 蒸汽機車、現役 DL 柴油機車，到 2024 年登場的栩悅號與福森號主題觀光列車，串起橫跨百年的登山鐵道文化。",
    features: [
      "台灣唯一仍營運的高山森林鐵道（1912 年通車）",
      "762mm 窄軌，嘉義 30m 爬升至阿里山 2,216m",
      "獨立山螺旋、Z 字形折返等特殊登山工法",
      "橫跨熱、暖、溫、寒四種氣候林相"
    ],
    routes: [
      { name: "阿里山線（本線）", stations: ["嘉義", "北門", "竹崎", "樟腦寮", "獨立山", "奮起湖", "十字路", "阿里山"] },
      { name: "祝山線", stations: ["阿里山", "祝山"] }
    ],
    funFact: "為了用 762mm 窄軌爬上近 2,200 公尺的落差，火車得在「獨立山」繞著同一座山頭盤旋約三圈才往上爬——坐在車上，你會看到山下的樟腦寮車站從三個不同高度出現三次！",
    tags: ["觀光", "森林鐵路", "登山鐵路", "蒸汽", "柴油", "中部", "阿里山", "歷史"],
    variants: [
      {
        model: "Shay 蒸汽機車",
        nickname: "老蒸汽",
        manufacturer: "美國 利馬機車廠（Lima Locomotive Works）",
        yearStart: 1912,
        status: "preserved",
        maxSpeed: null,
        cars: null,
        seats: null,
        photoUrl: "images/alishan--shay.jpg",
        photoCredit: {
          author: "jason199567",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:AFR_Shay_SL25_in_AFR_Garage_Park.jpg"
        },
        description: "阿里山現存的 Shay 型齒輪傳動蒸汽機車由美國利馬機車廠製造，屬 28 噸級、直立汽缸配傘形齒輪傳動，專為對抗森鐵陡坡與急彎而選用。現存 SL-21、SL-25、SL-26、SL-31 等數輛仍動態保存，部分（如 SL-25、SL-31）已改燒柴油鍋爐，SL-26 則仍燒煤。假日與特定主題列車（如冬季賞楓 SL-31 蒸汽列車）不定期運轉，是台灣現存最年長、仍能行駛的蒸汽火車。",
        features: [
          "美國 Lima 製 Shay 型齒輪傳動蒸汽機車（28 噸級）",
          "現存 SL-21／25／26／31 等數輛動態保存",
          "直立汽缸＋傘形齒輪，專為陡坡急彎設計",
          "假日與主題列車（如冬季 SL-31 賞楓專列）運轉"
        ],
        funFact: "現役的 SL-25、SL-31 都已超過 110 歲，是台灣還能實際跑動的火車中最年長的老前輩；其中 SL-26 至今仍堅持燒煤，冒出的白煙成了鐵道迷追逐的經典畫面。"
      },
      {
        model: "DL 柴油機車",
        nickname: "現役主力",
        manufacturer: "日本車輛（設計）／台灣車輛（組裝）",
        yearStart: 2006,
        status: "active",
        maxSpeed: 45,
        cars: null,
        seats: null,
        photoUrl: "images/alishan--dl.jpg",
        photoCredit: {
          author: "Industrial Wales",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:AFR_'DL_42'_at_Alishan_2023-07-19.jpg"
        },
        description: "DL 系列是阿里山森鐵日常牽引旅客列車的柴油主力。現役最新為第七代 DL-45～51 共 7 輛，2004 年向日本車輛訂購、2006～07 年陸續上線，日本車輛設計、委由台灣車輛組裝，採連控推拉式運轉。搭載 Cummins QSK19L 柴油引擎（約 700 hp），車重約 30 噸，專為 762mm 窄軌與高坡度設計，每天牽引列車從嘉義平原爬升到海拔 2,216 公尺的阿里山。",
        features: [
          "森鐵現役日常主力（第七代 DL-45～51，共 7 輛）",
          "日本車輛設計、台灣車輛組裝，2006～07 年上線",
          "Cummins QSK19L 引擎、約 700 hp",
          "連控推拉式，適應 762mm 窄軌與陡坡"
        ],
        funFact: "阿里山鐵路從海拔 30 公尺的嘉義一路爬到 2,216 公尺，落差等於疊起約 7 棟台北 101——這段國寶級的爬坡，如今日常就靠這批 DL 柴油機車拉上山。"
      },
      {
        model: "栩悅號",
        nickname: "Vivid Express",
        manufacturer: "既有阿里山號客車改裝（雄獅旅遊營運）",
        yearStart: 2024,
        status: "active",
        maxSpeed: null,
        cars: 5,
        seats: 60,
        photoUrl: "images/alishan--xuyue.jpg",
        description: "栩悅號是林鐵及文資處與雄獅旅遊合作、2024 年 5 月首航的高階觀光列車，由既有阿里山號舊客車改裝而成，全列 5 節、共 60 席。以阿里山「迎賓鳥」栗背林鴝為彩繪主題，並首創台灣火車 360 度環繞透明駕駛室；車廂分包廂席與可 360 度旋轉的瞭望席，配大面觀景窗、環繞音響與專業導覽，主打視、聽、嗅、味、觸「五感」森林體驗，行駛於嘉義－奮起湖間。",
        features: [
          "2024 年首航，雄獅旅遊營運的生態觀光列車",
          "由既有阿里山號客車改裝，5 節 60 席",
          "台灣火車首創 360 度環繞透明駕駛室",
          "栗背林鴝彩繪主題、瞭望席可 360 度旋轉"
        ],
        funFact: "栩悅號的彩繪靈感來自阿里山「迎賓鳥」栗背林鴝——連牽引它的 DL-47 柴油機車都換上了同款塗裝，成為森鐵第一台有專屬造型的機車。"
      },
      {
        model: "福森號",
        nickname: "Formosensis",
        manufacturer: "全新檜木打造（雄獅旅遊營運）",
        yearStart: 2024,
        status: "active",
        maxSpeed: null,
        cars: 6,
        seats: 108,
        photoUrl: "images/alishan--fusen.jpg",
        description: "福森號是林鐵及文資處耗資約 6,500 萬元、以鋼構骨架結合國產紅檜與台灣扁柏全新打造的檜木觀光列車，2024 年 7 月啟航，由雄獅旅遊規劃遊程。全列 6 節、約 108 席，定位為「移動的美術館」，首創台灣火車數位畫框，輪播阿里山主題畫作與畫家陳澄波作品；配 165 公分寬大觀景窗、英國進口牛皮座椅與吧台餐車，車內滿溢紅檜與扁柏天然香氣。",
        features: [
          "2024 年啟航，耗資約 6,500 萬元全新檜木打造",
          "紅檜＋扁柏車體，6 節約 108 席",
          "定位「移動的美術館」，首創數位畫框輪播名畫",
          "165cm 寬觀景窗、進口牛皮座椅、吧台餐車"
        ],
        funFact: "「Formosensis」是拉丁文學名字尾，意為「台灣（福爾摩沙）特有」——阿里山有多種以此命名的特有生物，福森號便以此結合「福爾摩沙」與「森林」，打造出滿載檜木香氣的移動美術館。"
      }
    ]
  },
  {
    id: "neiwan_dr1000",
    photoUrl: "images/neiwan--dr1000.jpg",
    photoCredit: {
      author: "SElefant (Sean H. Yu)",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:TRA_DR1000_DMU_in_NeiWan_Station.jpg"
    },
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
    photoUrl: "images/nrm--dr2203.jpg",
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
    id: "jiushanxian",
    photoUrl: "images/jiushanxian--ck124.jpg",
    photoCredit: {
      author: "Subscriptshoe9",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan_Railways_Administration_CK124_near_Zhongli_Station_20220730.jpg"
    },
    name: "舊山線",
    nameEn: "Old Mountain Line",
    operator: "台灣鐵路管理局",
    type: "觀光",
    region: ["中部"],
    yearStart: 1908,
    maxSpeed: 85,
    color: "#2c3e50",
    emoji: "🚂",
    description: "舊山線是縱貫鐵路山線最早通車的路段，1908 年全線自三義經勝興、（舊）泰安通車至豐原。因坡度陡峭、彎道多、路線老舊，1998 年臺中線雙軌工程（新山線）截彎取直完工後功成身退，走完最後一班列車正式停駛。目前僅三義至（舊）泰安間 13.6 公里以觀光名義復駛，沿線經過台鐵（不含阿里山林鐵）海拔最高的勝興車站及見證百年歷史的龍騰斷橋，是全台最富懷舊氛圍的鐵道路段之一。",
    features: [
      "縱貫線山線最早通車路段（1908 年）",
      "勝興車站為台鐵（不含阿里山林鐵）海拔最高車站",
      "沿線龍騰斷橋、內社川鐵橋等百年古蹟",
      "三義至勝興間坡度達千分之 25.5"
    ],
    routes: [
      { name: "舊山線（復駛路段）", stations: ["三義", "勝興", "龍騰", "舊泰安"] }
    ],
    funFact: "雖然名叫「舊」山線，但退役後可沒閒著——2019 年苗栗縣推出全台首創的「Railbike 舊山線鐵道自行車」，讓遊客親自踩踏穿越百年隧道與鐵橋，如今反而是舊山線最常態的觀光方式。",
    tags: ["觀光", "蒸汽", "歷史", "中部", "舊山線", "登山鐵路", "日治時代"],
    variants: [
      {
        model: "CK124",
        manufacturer: "日本 日本車輛製造",
        yearStart: 1936,
        status: "preserved",
        maxSpeed: 85,
        cars: null,
        seats: null,
        photoUrl: "images/jiushanxian--ck124.jpg",
        photoCredit: {
          author: "Subscriptshoe9",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan_Railways_Administration_CK124_near_Zhongli_Station_20220730.jpg"
        },
        description: "CK124 屬臺鐵 CK120 型（原稱 C12 型）蒸汽機車，日治時代購入共 7 輛（C121–C125 於 1936 年、C126–C127 於 1942 年），現僅存 CK124 一輛動態保存。1999 年自北投員工訓練中心移至台北機廠修復，2000 年復駛成功，平時保存於彰化扇形車庫。2010 年起曾以此車牽引觀光列車行駛舊山線三義至（舊）泰安段，但舊山線自 2015 年起已無定期客運班次，近年 CK124 的特殊活動更常見於平溪線、內灣線等其他路線，並非固定在舊山線運行。",
        features: [
          "台鐵 CK120 型（原 C12 型）僅存的動態保存機車",
          "1936 年日本車輛製造，2000 年修復動態復駛",
          "平時保存於彰化扇形車庫",
          "近年特殊活動多見於平溪線、內灣線，舊山線已非固定班次"
        ],
        funFact: "CK124 已經快 90 歲了，比你的爺爺奶奶可能還要老！不過這幾年它到處跑活動的興趣，好像比待在老家舊山線還高——平溪線、內灣線都留下過它冒白煙的身影。"
      }
    ]
  }
];

console.log('TRAIN_DATA loaded:', window.TRAIN_DATA.length, 'vehicles');
