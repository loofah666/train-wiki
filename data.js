window.TRAIN_DATA = [
  {
    id: "puyuma",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E9%90%B5%E6%99%AE%E6%82%A0%E7%91%AA.jpg",
    name: "普悠瑪號",
    nameEn: "Puyuma Express",
    model: "TEMU2000",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["東部", "北部"],
    yearStart: 2013,
    maxSpeed: 150,
    manufacturer: "日本車輛製造",
    seats: 456,
    cars: 8,
    color: "#1a56a0",
    emoji: "🚄",
    description: "普悠瑪號以阿美族神話中的神聖人物為名，採用傾斜式車體技術，過彎時車身自動傾斜，不需減速即可高速行駛。2013年正式通車，主要行駛北迴線與東部幹線，將台北到台東的旅行時間大幅縮短至約3.5小時。外觀採用原住民族傳統圖騰彩繪，充滿濃厚的台灣本土文化色彩，是東部鐵路旅遊的代表性列車。",
    features: [
      "傾斜式車體技術，過彎不需減速",
      "最高時速 150 km/h",
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
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/TEMU1000-1066-yilan.jpg",
    name: "太魯閣號",
    nameEn: "Taroko Express",
    model: "TEMU1000",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["東部", "北部"],
    yearStart: 2007,
    maxSpeed: 150,
    manufacturer: "日本車輛製造",
    seats: 376,
    cars: 6,
    color: "#c0392b",
    emoji: "🚄",
    description: "太魯閣號以台灣著名的太魯閣國家公園命名，是台鐵引進的第一款傾斜式列車，比普悠瑪號早六年投入服務。車身以鮮豔的紅白配色為主，外觀活潑醒目。行駛北迴線時，能在陡峭的山線隧道中保持高速，大幅縮短東西部之間的交通時間。6節車廂的精巧設計，讓它在台灣鐵路史上具有重要的技術里程碑地位。",
    features: [
      "台鐵第一款傾斜式列車",
      "最高時速 150 km/h",
      "紅白醒目外觀設計",
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
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_TRA_EMU1200_train_at_Taichung_Station_01.jpg",
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
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/TRA_E402_Chu-Kuang_Express_at_Taitung_Station_20201114.jpg",
    name: "莒光號",
    nameEn: "Chu-Kuang Express",
    model: "SP32700 / 客車組",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["全島"],
    yearStart: 1970,
    maxSpeed: 110,
    manufacturer: "台灣車輛公司 / 台灣 唐榮鐵工廠",
    seats: 600,
    cars: 12,
    color: "#8e44ad",
    emoji: "🚃",
    description: "莒光號是台鐵歷史最悠久的對號快車之一，自1970年代起服務全台旅客，以紫紅色車身為人熟知。行駛速度雖不及自強號，卻停靠更多中小型車站，讓更多地方的旅客能便利搭乘。車廂採傳統機車頭牽引設計，寬敞的座位空間與親切的服務風格，讓它成為許多台灣人「第一次搭火車」的美好記憶，至今仍在部分路線繼續服務。",
    features: [
      "停靠站數多，服務更多小城鎮",
      "最高時速 110 km/h",
      "紫紅色經典車身",
      "台鐵歷史最悠久快車之一"
    ],
    routes: [
      { name: "西部幹線", stations: ["基隆", "台北", "台中", "彰化", "嘉義", "台南", "高雄"] }
    ],
    funFact: "莒光號的名字來自金門的莒光鄉，是為了紀念軍民精神而命名的！",
    tags: ["快車", "全島", "對號座", "歷史車種"]
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
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["北部"],
    yearStart: 1966,
    maxSpeed: 70,
    manufacturer: "日本 富士重工",
    seats: 144,
    cars: 2,
    color: "#f39c12",
    emoji: "🚞",
    description: "平溪線是台灣北部著名的觀光支線，蜿蜒穿越新北市山區，沿途經過十分、菁桐等充滿老街風情的小村落。使用的DR1000型柴油客車小巧可愛，穿梭在翠綠山林與瀑布間，是天燈節期間遊客的最愛。車廂雖然老舊但富有懷舊氣息，慢慢行駛的速度反而讓旅客能細細欣賞沿線美景，是台灣最具詩意的鐵路旅行體驗之一。",
    features: [
      "穿越新北市山區的觀光支線",
      "天燈節必搭的人氣列車",
      "沿途瀑布與老街風光",
      "懷舊柴油客車風格"
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
    name: "集集線柴油客車",
    nameEn: "Jiji Line Diesel Railcar",
    model: "DR2700",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["中部"],
    yearStart: 1961,
    maxSpeed: 70,
    manufacturer: "日本 富士重工",
    seats: 120,
    cars: 2,
    color: "#16a085",
    emoji: "🚞",
    description: "集集線是台灣中部的觀光支線，從二水通往車埕，沿途穿越濁水溪畔的綠色隧道，景色優美宜人。DR2700型柴油客車車齡雖老，卻承載著南投縣鄉村旅遊的重要任務。集集車站附近的綠色隧道（樟樹林蔭道）是全台著名打卡景點，而終點車埕的木業展示區與水庫風光也深受遊客喜愛，是一條充滿台灣農村風情的慢旅鐵道。",
    features: [
      "穿越濁水溪畔綠色隧道",
      "集集車站旁的百年樟樹林蔭",
      "終點車埕有木業文化館",
      "南投縣重要觀光支線"
    ],
    routes: [
      { name: "集集線", stations: ["二水", "源泉", "濁水", "龍泉", "集集", "水里", "車埕"] }
    ],
    funFact: "集集線的「綠色隧道」是由數百棵老樟樹形成的天然拱廊，樟樹樹齡超過60年，騎自行車或搭火車都超美！",
    tags: ["觀光", "支線", "柴油", "中部", "綠色隧道"]
  },
  {
    id: "blue_skin",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/TRA_R101_leading_a_Breezy_Blue_Train_at_Taitung_Station.jpg",
    name: "藍皮解憂號",
    nameEn: "Blue Train",
    model: "DR2510 藍皮客車",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["南部", "東部"],
    yearStart: 2021,
    maxSpeed: 80,
    manufacturer: "日本車輛（原始車廂）",
    seats: 200,
    cars: 6,
    color: "#2980b9",
    emoji: "🚃",
    description: "藍皮解憂號以復刻1960年代藍色舊式客車為主題，行駛於南迴線（枋寮至台東），是台鐵近年最受歡迎的懷舊觀光列車。車廂保留舊式座椅、推拉式車窗與老式廁所，讓旅客彷彿搭上時光機回到從前。在南迴線穿越中央山脈、俯瞰太平洋的壯麗景色中，藍皮列車緩緩行駛，成為台灣鐵路慢旅行的最佳代表，也是文青旅遊的熱門打卡體驗。",
    features: [
      "復刻1960年代藍色懷舊車廂",
      "可開啟的推拉式窗戶",
      "行駛南迴線欣賞太平洋景色",
      "台灣最夯的懷舊觀光列車"
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
    name: "文湖線C301型電聯車",
    nameEn: "Wenhu Line C301",
    model: "C301",
    operator: "台北大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 1996,
    maxSpeed: 80,
    manufacturer: "法國 馬特拉（Matra）",
    seats: 60,
    cars: 4,
    color: "#c0392b",
    emoji: "🚇",
    description: "文湖線（原木柵線）是台灣第一條捷運路線，1996年通車時轟動全台。採用法國馬特拉公司的中運量膠輪系統，以橡膠輪胎取代鋼輪行駛，噪音小且爬坡能力強。C301型電聯車採全自動無人駕駛，列車靠電腦系統控制，不需要司機員。高架路段穿越台北市東區，能俯瞰城市景觀。2013年配合松山線通車延伸，更名為文湖線，成為台北捷運最具歷史意義的路線。",
    features: [
      "台灣第一條捷運路線（1996年）",
      "法國馬特拉膠輪系統",
      "全自動無人駕駛",
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
    yearStart: 2000,
    maxSpeed: 80,
    manufacturer: "德國 西門子 / 加拿大 龐巴迪",
    seats: 240,
    cars: 6,
    color: "#2980b9",
    emoji: "🚇",
    description: "C381型電聯車是台北捷運淡水信義線與板南線的主力車款，也是台北市民最熟悉的捷運列車。藍色車身流線俐落，6節車廂可容納大量乘客，是台北市公共運輸的主幹。採用鋼輪鋼軌系統，行駛穩定且速度快。板南線連接台北東西兩端，淡水信義線縱貫南北，兩線共同構成台北捷運最繁忙的十字骨幹，每日運送旅客超過百萬人次。",
    features: [
      "台北捷運最繁忙路線主力車款",
      "6節車廂大容量設計",
      "鋼輪鋼軌系統，行駛穩定",
      "藍色車身醒目易辨識"
    ],
    routes: [
      { name: "板南線", stations: ["頂埔", "板橋", "西門", "台北車站", "忠孝敦化", "南港"] },
      { name: "淡水信義線", stations: ["淡水", "民權西路", "台北車站", "大安", "信義安和", "象山"] }
    ],
    funFact: "板南線尖峰時間每隔不到2分鐘就有一班車，一天下來班次加起來超過500班！",
    tags: ["捷運", "北部", "板南線", "淡水信義線", "通勤"]
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
    seats: 324,
    cars: 6,
    color: "#2e7d32",
    emoji: "🚇",
    description: "C371型是台北捷運松山新店線與中和新蘆線的主力車款，6節編組高運量設計，由日本川崎重工與台灣車輛合作製造，是台灣首款國產化捷運車輛之一。2006年隨新莊線延伸段陸續投入服務，目前共有53.5列321輛，是北捷車隊中數量最多的車型，每天載著無數旅客穿梭在新北與台北之間。",
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
    manufacturer: "日本 日立軌道（義大利廠）",
    seats: 200,
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
    maxSpeed: 90,
    manufacturer: "西班牙 CAF",
    seats: 210,
    cars: 6,
    color: "#e74c3c",
    emoji: "🚇",
    description: "高雄捷運2008年通車，是台灣南部最重要的大眾運輸系統。C301H型電聯車服務紅線與橘線，以鮮豔的紅橘色調為車廂主色，活潑的設計風格與高雄陽光城市的氣息相符。車廂內部寬敞明亮，提供無障礙空間與冷氣服務。紅線從南岡山延伸至小港機場，橘線連接西子灣與大寮，兩線交會於美麗島站，該站更以彩色玻璃穹頂聞名全球，被譽為「最美捷運站」。",
    features: [
      "服務高雄紅線與橘線",
      "最高時速 90 km/h",
      "交會於世界最美捷運站「美麗島」",
      "連接高雄國際機場"
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
    nameEn: "Taoyuan Airport MRT EMU",
    model: "C341 / C381A",
    operator: "桃園大眾捷運股份有限公司",
    type: "捷運",
    region: ["北部"],
    yearStart: 2017,
    maxSpeed: 100,
    manufacturer: "加拿大 龐巴迪（Bombardier）",
    seats: 260,
    cars: 6,
    color: "#2ecc71",
    emoji: "🚇",
    description: "桃園機場捷運於2017年通車，是連接台北市中心與桃園國際機場的快速交通系統。分為直達車（快線，紅色）與普通車（藍線）兩種服務模式，直達車從台北車站到機場只需35分鐘。車廂內設有超大行李放置空間，並提供Wi-Fi服務，讓旅客能輕鬆攜帶行李。台北車站還設有城市航廈，旅客可在此辦理登機手續後再輕鬆搭車前往機場，是台灣最便利的機場聯絡鐵道。",
    features: [
      "直達台北車站至機場僅35分鐘",
      "車廂設有超大行李放置空間",
      "台北車站提供城市航廈服務",
      "車內提供 Wi-Fi 連線"
    ],
    routes: [
      { name: "機場線", stations: ["台北車站", "新北產業園區", "桃園", "環北", "機場第一航廈", "機場第二航廈"] }
    ],
    funFact: "桃園機場捷運的直達車上，可以直接在座位旁插電充手機，是台灣第一條車廂內有充電插座的捷運！",
    tags: ["捷運", "北部", "機場", "直達車", "行李友善"]
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
    operator: "林務局阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 1978,
    maxSpeed: 35,
    manufacturer: "日本 三菱重工",
    seats: null,
    cars: null,
    color: "#27ae60",
    emoji: "🚂",
    description: "DL-47型柴油機車是阿里山森林鐵路的現役主力機車，取代了早期的蒸汽機車成為日常牽引力來源。由日本三菱重工製造，專為應對阿里山762mm窄軌及高坡度路線特別設計。綠色車身在阿里山的綠意山林中顯得格外融合。每天牽引旅客列車從嘉義平原緩緩爬升到海拔2216公尺的阿里山，經歷熱帶、亞熱帶、溫帶、寒帶四種林相，是世界極為稀少的登山鐵路奇景。",
    features: [
      "阿里山森鐵現役主力柴油機車",
      "適應762mm特殊窄軌設計",
      "牽引列車爬升2000公尺高山",
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
    nameEn: "Alishan Forest Railway SL-25 Steam Locomotive",
    model: "SL-25",
    operator: "林務局阿里山林業鐵路及文化資產管理處",
    type: "觀光",
    region: ["中部"],
    yearStart: 1954,
    maxSpeed: 25,
    manufacturer: "日本 日立製作所",
    seats: null,
    cars: null,
    color: "#7f8c8d",
    emoji: "🚂",
    description: "SL-25型蒸汽機車是阿里山森鐵的歷史瑰寶，由日本日立製作所於1950年代製造，目前以觀光保存運轉方式讓遊客體驗蒸汽火車的魅力。黑色鋼鐵車身配上白色蒸汽噴霧，在阿里山的晨霧中緩緩啟動的畫面令人動容。搭乘SL-25觀賞日出是阿里山最著名的旅遊活動，每逢特定假日推出的蒸汽火車專列總是場場爆滿，是跨越世代的珍貴鐵道文化體驗。",
    features: [
      "保存至今的珍貴蒸汽機車",
      "假日觀光特別運轉",
      "搭蒸汽火車看阿里山日出",
      "日本日立製造的歷史文物"
    ],
    routes: [
      { name: "阿里山站內線", stations: ["阿里山", "祝山"] }
    ],
    funFact: "SL-25已經超過70歲了！它是台灣還在實際跑動的蒸汽火車中，歲數最大的老前輩之一！",
    tags: ["觀光", "蒸汽", "保存鐵道", "中部", "阿里山", "歷史"]
  },
  {
    id: "neiwan_dr3100",
    photoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/EMU100_%26_DR3100_in_Taitung.jpg",
    name: "內灣線DR3100型柴油客車",
    nameEn: "Neiwan Line DR3100 Diesel Railcar",
    model: "DR3100",
    operator: "台灣鐵路管理局",
    type: "台鐵",
    region: ["北部"],
    yearStart: 2011,
    maxSpeed: 80,
    manufacturer: "台灣車輛公司",
    seats: 120,
    cars: 2,
    color: "#d35400",
    emoji: "🚞",
    description: "DR3100型柴油客車服務台鐵的內灣線與六家線，這兩條支線穿越新竹縣的丘陵與農村地帶，沿途保留了豐富的客家文化風情。內灣村是著名的客家老街，週末旅遊人潮絡繹不絕；六家線則連接高鐵新竹站，讓搭高鐵的旅客也能轉乘深入山線體驗客家文化。DR3100的現代化設計讓這兩條充滿歷史感的支線有了新面貌，橘紅色的車身在綠色田野中格外搶眼。",
    features: [
      "服務內灣線與六家線",
      "連接高鐵新竹站轉乘",
      "穿越新竹客家文化地帶",
      "現代化柴油電聯車設計"
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
    model: "DR2203 / DR2303",
    operator: "國家鐵道博物館",
    type: "觀光",
    region: ["北部"],
    yearStart: 1963,
    maxSpeed: 30,
    manufacturer: "日本車輛製造",
    seats: 56,
    cars: 1,
    color: "#2b6cb0",
    emoji: "🚞",
    description: "位於台北松山的國家鐵道博物館（前台北機廠），修復了1960年代製造的藍皮柴油客車DR2203與DR2303。這是台北市區唯一在地表行駛的活火車，假日開放搭乘，繞行園區一圈約650公尺。",
    features: ["台北市區唯一地表活火車", "假日限定開放搭乘", "全票150元・6-11歲75元・5歲免費", "繞行台北機廠古蹟園區", "1935年創建的百年機廠建築群"],
    routes: [
      { name: "園區觀光路線", stations: ["鐵博東站", "鐵博西站"] }
    ],
    funFact: "DR2203 服役超過 60 年！從花東縱谷到博物館園區，這輛藍色柴油客車是少數還能讓旅客親身搭乘的台灣古典鐵道車輛。",
    tags: ["鐵道博物館","台北機廠","古蹟","藍皮","柴油客車","DR2203","懷舊"]
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
    manufacturer: "日本 川崎車輛",
    seats: null,
    cars: null,
    color: "#2c3e50",
    emoji: "🚂",
    description: "CK124型蒸汽機車是台鐵保存最完整的歷史蒸汽機車之一，製造於1936年的日治時代，曾在台灣縱貫鐵路服役數十年。目前以保存復駛的方式在舊山線（勝興至三義段）進行觀光運轉，讓民眾重溫百年前的鐵道風情。黑色鋼鐵車身噴出的白色蒸汽，配上勝興車站的日式老建築，構成台灣最具歷史氛圍的鐵道場景之一，每逢運轉活動都吸引大批鐵道迷前來朝聖。",
    features: [
      "1936年日治時代製造的古董火車",
      "舊山線觀光復駛特別運轉",
      "台灣保存最完整的蒸汽機車之一",
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
