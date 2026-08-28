/**
 * 多语言配置文件 i18n.js
 * =======================
 * 支持语言：繁體中文(zh-Hant，默认) / English(en) / Русский(ru) / O‘zbekcha(uz)
 * 结构：
 * - langs: 语言列表（悬浮窗展示）
 * - ui:    界面文案
 * - cats:  分类名翻译（key 为 videos-data.js 中的原始中文分类）
 * - videos:每个视频的标题/描述/角标翻译（key 为视频 id）
 */

const I18N = {
  defaultLang: 'zh-Hant',

  langs: [
    { code: 'zh-Hant', name: '繁體中文', short: '中' },
    { code: 'en', name: 'English', short: 'EN' },
    { code: 'ru', name: 'Русский', short: 'RU' },
    { code: 'uz', name: 'O‘zbekcha', short: 'UZ' }
  ],

  ui: {
    pageTitle: {
      'zh-Hant': 'AI創意視頻集 · 盛世前程',
      en: 'AI Creative Video Collection · HEYDAY',
      ru: 'Коллекция креативных AI-видео · HEYDAY',
      uz: 'AI ijodiy videolar to‘plami · HEYDAY'
    },
    searchPlaceholder: {
      'zh-Hant': '搜尋視頻...',
      en: 'Search videos...',
      ru: 'Поиск видео...',
      uz: 'Videolarni qidirish...'
    },
    heroTitle: {
      'zh-Hant': 'AI 創意視頻集',
      en: 'AI Creative Video Collection',
      ru: 'Коллекция креативных AI-видео',
      uz: 'AI ijodiy videolar to‘plami'
    },
    heroDesc: {
      'zh-Hant': '以 AI 技術驅動傳播創新 · 覆蓋預熱宣傳 · 現場宣傳 · 產品宣傳全週期內容矩陣',
      en: 'AI-powered communication innovation · A full-cycle content matrix covering pre-event, on-site and product campaigns',
      ru: 'Инновации в коммуникациях на базе ИИ · Контент-матрица полного цикла: тизеры, событийная и продуктовая реклама',
      uz: 'AI texnologiyasi bilan kommunikatsiya innovatsiyalari · Tadbir oldi, tadbir joyida va mahsulot reklamalarini qamrab olgan to‘liq tsiklli kontent matritsasi'
    },
    statVideos: {
      'zh-Hant': '精選視頻',
      en: 'Curated Videos',
      ru: 'Отобранных видео',
      uz: 'Tanlangan videolar'
    },
    statCats: {
      'zh-Hant': '內容分類',
      en: 'Categories',
      ru: 'Категорий',
      uz: 'Kategoriyalar'
    },
    statOriginal: {
      'zh-Hant': '% 原創',
      en: '% Original',
      ru: '% Оригинал',
      uz: '% Original'
    },
    emptyState: {
      'zh-Hant': '沒有找到符合的視頻',
      en: 'No matching videos found',
      ru: 'Подходящие видео не найдены',
      uz: 'Mos videolar topilmadi'
    },
    shareBtn: {
      'zh-Hant': '轉發',
      en: 'Share',
      ru: 'Поделиться',
      uz: 'Ulashish'
    },
    footerCompany: {
      'zh-Hant': '北京盛世前程營銷活動策劃有限公司',
      en: 'Beijing HEYDAY Marketing & Event Planning Co., Ltd.',
      ru: 'Пекинская компания HEYDAY: маркетинг и организация мероприятий',
      uz: 'Pekin HEYDAY marketing va tadbirlarni rejalashtirish kompaniyasi'
    },
    toastLoading: {
      'zh-Hant': '視頻載入中…',
      en: 'Loading video…',
      ru: 'Загрузка видео…',
      uz: 'Video yuklanmoqda…'
    },
    toastLoaded: {
      'zh-Hant': '視頻載入完成',
      en: 'Video loaded',
      ru: 'Видео загружено',
      uz: 'Video yuklandi'
    },
    toastLoadFail: {
      'zh-Hant': '視頻載入失敗，請重試',
      en: 'Failed to load video, please try again',
      ru: 'Не удалось загрузить видео, попробуйте ещё раз',
      uz: 'Videoni yuklashda xatolik yuz berdi, qayta urinib ko‘ring'
    },
    toastCopied: {
      'zh-Hant': '連結已複製，請貼上轉發',
      en: 'Link copied — paste it to share',
      ru: 'Ссылка скопирована — вставьте её в сообщение',
      uz: 'Havola nusxalandi — ulashish uchun qo‘ying'
    },
    shareTitlePrefix: {
      'zh-Hant': 'HEYDAY · AI創意視頻｜',
      en: 'HEYDAY · AI Creative Video | ',
      ru: 'HEYDAY · AI-видео | ',
      uz: 'HEYDAY · AI video | '
    },
    shareFrom: {
      'zh-Hant': '（來自盛世前程）',
      en: ' (by HEYDAY)',
      ru: ' (от HEYDAY)',
      uz: ' (HEYDAY dan)'
    },
    langFabTitle: {
      'zh-Hant': '切換語言',
      en: 'Switch language',
      ru: 'Сменить язык',
      uz: 'Tilni almashtirish'
    }
  },

  // 分类名（key = videos-data.js 中的原始中文分类）
  cats: {
    '全部': {
      'zh-Hant': '全部', en: 'All', ru: 'Все', uz: 'Barchasi'
    },
    '预热宣传': {
      'zh-Hant': '預熱宣傳', en: 'Pre-event', ru: 'Тизеры', uz: 'Tadbir oldi'
    },
    '现场宣传': {
      'zh-Hant': '現場宣傳', en: 'On-site', ru: 'На событии', uz: 'Tadbirda'
    },
    '产品宣传': {
      'zh-Hant': '產品宣傳', en: 'Product', ru: 'Продукт', uz: 'Mahsulot'
    },
    '混剪合集': {
      'zh-Hant': '混剪合集', en: 'Mashups', ru: 'Нарезки', uz: 'Lavhalar'
    },
    'AI短剧': {
      'zh-Hant': 'AI短劇', en: 'AI Drama', ru: 'AI-драма', uz: 'AI drama'
    }
  },

  // 每个视频的标题 / 描述 / 角标
  videos: {
    v01: {
      title: {
        'zh-Hant': '東方明珠 · 場景預熱',
        en: 'Oriental Pearl Tower · Venue Teaser',
        ru: 'Восточная жемчужина · Тизер площадки',
        uz: '«Sharq marvaridi» · Maydon tizeri'
      },
      desc: {
        'zh-Hant': '虛實結合活動場景預熱視頻——聚焦活動場地與城市地標，以 AI 創造虛實共生場景，打造沉浸式懸念預熱短片，為線下活動蓄水引流。',
        en: 'A pre-event teaser blending the real and the virtual — spotlighting the venue and the city landmark, AI creates hybrid scenes for an immersive, suspense-building teaser that gathers an audience and drives traffic to the offline event.',
        ru: 'Предварительный тизер события в формате «реальность + виртуальность»: в центре внимания — площадка и символ города. ИИ создаёт сцены смешанной реальности, формируя интригующий иммерсивный тизер, который собирает аудиторию и приводит её на офлайн-событие.',
        uz: 'Voqelik va virtuallikni uyg‘unlashtirgan tadbir oldi tizeri — maydon va shahar ramzi markazda. AI aralash haqiqat sahnalarini yaratib, qiziqishni oshiruvchi immersiv tizer shakllantiradi hamda oflayn tadbir uchun auditoriya yig‘adi.'
      },
      tag: {
        'zh-Hant': '虛實結合', en: 'Real × Virtual', ru: 'Реальность × виртуальность', uz: 'Voqelik × virtuallik'
      }
    },
    v02: {
      title: {
        'zh-Hant': '揭幕儀式 · 現場高光',
        en: 'Unveiling Ceremony · Event Highlights',
        ru: 'Церемония открытия · Яркие моменты',
        uz: 'Ochilish marosimi · Tadbir lavhalari'
      },
      desc: {
        'zh-Hant': '項目現場宣傳·引爆熱點——活動現場揭幕儀式高光時刻，以沉浸式互動體驗呈現品牌發布瞬間，創造現場體驗吸引力。',
        en: 'On-site promotion that sparks buzz — the highlight moments of the unveiling ceremony present the brand launch through an immersive interactive experience, making the live event irresistible.',
        ru: 'Событийная реклама, создающая инфоповоды: яркие моменты церемонии открытия — мгновение презентации бренда в иммерсивном интерактивном формате, усиливающее притягательность живого события.',
        uz: 'Muhokama uyg‘otadigan tadbir reklamasi — ochilish marosimining eng yorqin daqiqalari brend taqdimotini immersiv interaktiv shaklda namoyish etib, jonli tadbir jozibadorligini oshiradi.'
      },
      tag: {
        'zh-Hant': '現場高光', en: 'Highlights', ru: 'Яркие моменты', uz: 'Yorqin lavhalar'
      }
    },
    v03: {
      title: {
        'zh-Hant': '豹8 · 電影級質感TVC',
        en: 'Bao 8 · Cinematic TVC',
        ru: 'Bao 8 · Ролик кинематографического уровня',
        uz: 'Bao 8 · Kino darajasidagi TVC'
      },
      desc: {
        'zh-Hant': '電影級質感產品宣傳片——AI 智能運鏡與光影渲染構建氛圍感敘事，凸顯產品硬核實力，塑造高端硬核品牌質感，大幅縮減拍攝週期與成本。',
        en: 'A cinematic product commercial — AI-driven camera work and light-and-shadow rendering build an atmospheric narrative that highlights the product\'s hardcore capability, shapes a premium brand feel and dramatically cuts production time and cost.',
        ru: 'Рекламный ролик кинематографического качества: интеллектуальная работа камеры на базе ИИ и рендеринг света и тени выстраивают атмосферный сторителлинг, подчёркивают мощь продукта, формируют премиальный имидж бренда и многократно сокращают сроки и бюджет съёмки.',
        uz: 'Kino darajasidagi mahsulot reklamasi — AI boshqaruvidagi kamera harakati va yorug‘lik-soya renderlash atmosferali hikoya quradi, mahsulot kuchi ta’kidlanadi, premium brend obro‘i shakllantiriladi hamda suratga olish muddati va xarajati sezilarli kamayadi.'
      },
      tag: {
        'zh-Hant': '電影級TVC', en: 'Cinematic TVC', ru: 'Кинокласс TVC', uz: 'Kino darajasidagi TVC'
      }
    },
    v04: {
      title: {
        'zh-Hant': '城市邀約 · 邀請函',
        en: 'City Invitation · The Invitation',
        ru: 'Городское приглашение · Приглашение',
        uz: 'Shahar taklifi · Taklifnoma'
      },
      desc: {
        'zh-Hant': 'AI 虛實融合城市邀約視頻——以一城一地標為敘事錨點，實景拍攝與 AI 數字特效虛實結合，將邀請函與城市地標創意融合，製造城市專屬儀式感。',
        en: 'An AI city invitation blending real and virtual — anchored on one city, one landmark: live footage merges with AI digital effects, creatively fusing the invitation with the city landmark to create a sense of ceremony unique to each city.',
        ru: 'Приглашение от города в формате AI-слияния реального и виртуального: сюжет строится вокруг одного города и его символа; натурные съёмки соединяются с цифровыми AI-эффектами, приглашение креативно объединяется с городским ориентиром, создавая особое чувство церемонии, присущее именно этому городу.',
        uz: 'Voqelik va virtuallikni birlashtirgan AI shahar taklifi — syujet bitta shahar va uning ramzi atrofida quriladi: jonli suratga olish AI raqamli effektlari bilan uyg‘unlashib, taklifnoma shahar diydori bilan ijodiy birlashtiriladi va har bir shaharga xos marosim tuyg‘usi yaratiladi.'
      },
      tag: {
        'zh-Hant': '城市邀約', en: 'City Invitation', ru: 'Городское приглашение', uz: 'Shahar taklifi'
      }
    },
    v05: {
      title: {
        'zh-Hant': '方程豹 · 技術內核',
        en: 'Fangchengbao · Technology Inside',
        ru: 'Fangchengbao · Технологическое ядро',
        uz: 'Fangchengbao · Texnologik yadro'
      },
      desc: {
        'zh-Hant': '技術內核展示系列 AI 短視頻——依託 AI 生成虛實雙層敘事畫面，將產品硬核功能可視化拆解，讓抽象的技術原理直觀易懂，兼顧宣講與科普傳播。',
        en: 'An AI short-video series revealing the technology inside — AI generates dual-layer real-and-virtual narrative visuals that break down the product\'s hardcore features, making abstract technical principles intuitive, ideal for both presentations and popular-science communication.',
        ru: 'Серия коротких AI-видео о технологическом ядре: ИИ генерирует двухслойные сюжеты «реальность + виртуальность», наглядно разбирает ключевые функции продукта и превращает абстрактные технические принципы в понятные образы — подходит и для презентаций, и для научпопа.',
        uz: 'Texnologik yadroga bag‘ishlangan AI qisqa videolar seriyasi — AI voqelik va virtuallikdan iborat ikki qatlamli hikoya tasvirlarini yaratadi, mahsulotning asosiy funksiyalarini ko‘rinadigan qilib yoyadi, mavhum texnik tamoyillarni tushunarli qiladi hamda taqdimot va ommalashtirish uchun qulay.'
      },
      tag: {
        'zh-Hant': '技術可視化', en: 'Tech Visualized', ru: 'Технологии наглядно', uz: 'Texnologiya vizualizatsiyasi'
      }
    },
    v06: {
      title: {
        'zh-Hant': '方程豹 · 趣味塗鴉',
        en: 'Fangchengbao · Playful Graffiti',
        ru: 'Fangchengbao · Весёлое граффити',
        uz: 'Fangchengbao · Qiziqarli grafiti'
      },
      desc: {
        'zh-Hant': '現場趣味演繹宣傳短片——場景實拍與 AI 虛擬特效融合，動態呈現場景視覺變更效果，打造強網感的趣味演繹，精準沉澱年輕潮流客群。',
        en: 'A playful on-site promo short — live footage fuses with AI virtual effects to dynamically transform the scene\'s visuals, creating a fun, internet-native piece that precisely wins over the young, trend-conscious audience.',
        ru: 'Весёлая промо-зарисовка с мероприятия: натурные съёмки соединяются с виртуальными AI-эффектами и визуально преображают пространство в динамике; получается остроумный ролик с сильным «интернетным» характером, точно попадающий в молодую трендовую аудиторию.',
        uz: 'Tadbirdagi qiziqarli promo qisqa filmi — jonli suratga olish AI virtual effektlari bilan qo‘shilib, sahnani dinamik o‘zgartiradi; internetga xos kulgili asar yosh va zamonaviy auditoriyani aniq jalb qiladi.'
      },
      tag: {
        'zh-Hant': '趣味演繹', en: 'Playful Twist', ru: 'Весёлая подача', uz: 'Qiziqarli talqin'
      }
    },
    v07: {
      title: {
        'zh-Hant': '虛擬KOL · 直播體驗',
        en: 'Virtual KOL · Live-Stream Experience',
        ru: 'Виртуальный KOL · Прямой эфир',
        uz: 'Virtual KOL · Jonli efir tajribasi'
      },
      desc: {
        'zh-Hant': '虛擬 KOL 體驗傳播短片——摒棄真人 KOL 到場講解，活動現場實景疊加 AI 虛擬人與互動劇情，打造沉浸式探店敘事直播短片，低成本製造話題傳播點。',
        en: 'A virtual-KOL experience short — instead of a human influencer on site, the live venue is overlaid with AI avatars and interactive storylines, producing an immersive livestream narrative that generates buzz at low cost.',
        ru: 'Короткое видео с виртуальным KOL: вместо живого инфлюенсера на площадку «выходят» AI-персонажи и интерактивные сюжетные линии — получается иммерсивный сторителлинг в формате прямого эфира, создающий инфоповоды при минимальном бюджете.',
        uz: 'Virtual KOL tajribasi qisqa videosi — jonli influenser o‘rniga tadbir maydoniga AI avatarlar va interaktiv syujetlar qo‘shiladi; natijada kichik byudjet bilan muhokama uyg‘otadigan immersiv jonli efir hikoyasi yaratiladi.'
      },
      tag: {
        'zh-Hant': '虛擬KOL', en: 'Virtual KOL', ru: 'Виртуальный KOL', uz: 'Virtual KOL'
      }
    },
    v08: {
      title: {
        'zh-Hant': '仰望 · 超現實奇觀',
        en: 'Yangwang · Surreal Spectacle',
        ru: 'Yangwang · Сюрреалистическое зрелище',
        uz: 'Yangwang · Syurreal ko‘rinish'
      },
      desc: {
        'zh-Hant': '沉浸式虛擬互動行銷短片——聯動城市實景與活動場地構建超現實虛擬短片，以超震撼場景奇觀與互動劇情設計，打造自帶傳播話題的虛實共生行銷場景。',
        en: 'An immersive interactive virtual-marketing short — city locations and the event venue are woven into a surreal virtual film whose stunning spectacles and interactive storyline create a real-virtual marketing scene that generates its own buzz.',
        ru: 'Иммерсивный интерактивный маркетинг-ролик: городские локации и площадка события объединяются в сюрреалистическом виртуальном фильме; потрясающие зрелищные сцены и интерактивный сюжет создают среду «реальность + виртуальность», которая сама порождает инфоповоды.',
        uz: 'Immersiv interaktiv virtual marketing videosi — shahar joylari va tadbir maydoni syurreal virtual filmda birlashtiriladi; ta’sirchan manzaralar va interaktiv syujet o‘z-o‘zidan muhokama uyg‘otadigan voqelik-virtuallik marketing muhitini yaratadi.'
      },
      tag: {
        'zh-Hant': '虛實共生', en: 'Real-Virtual Fusion', ru: 'Слияние реального и виртуального', uz: 'Voqelik-virtuallik uyg‘unligi'
      }
    },
    v09: {
      title: {
        'zh-Hant': '仰望 · 極限涉水',
        en: 'Yangwang · Extreme Wading',
        ru: 'Yangwang · Экстремальный брод',
        uz: 'Yangwang · Ekstremal suvdan o‘tish'
      },
      desc: {
        'zh-Hant': '超現實產品體驗場景互動短片——覆蓋極限路況等複合場景，打破展台邊界，以奇幻場景革新靜態展具體驗，打造強視覺衝擊的產品體驗宣傳。',
        en: 'A surreal product-experience interactive short — covering composite scenarios such as extreme road conditions, it breaks the boundaries of the booth, reinventing static displays with fantastical scenes and delivering product promotion with powerful visual impact.',
        ru: 'Сюрреалистический интерактивный ролик об опыте продукта: сложные сценарии вроде экстремальных дорожных условий, выход за границы выставочного стенда, фантастические сцены вместо статичной экспозиции — продуктовая реклама с мощным визуальным воздействием.',
        uz: 'Mahsulot tajribasiga bag‘ishlangan syurreal interaktiv qisqa film — ekstremal yo‘l sharoitlari kabi murakkab ssenariylarni qamrab olib, stend chegaralaridan chiqadi, statik ko‘rgazmani fantastik sahnalar bilan yangilaydi va kuchli vizual ta’sirga ega mahsulot reklamasi yaratadi.'
      },
      tag: {
        'zh-Hant': '超現實', en: 'Surreal', ru: 'Сюрреализм', uz: 'Syurreal'
      }
    },
    v10: {
      title: {
        'zh-Hant': '方程豹IP · 劇情先導',
        en: 'Fangchengbao IP · Story Teaser',
        ru: 'Fangchengbao IP · Сюжетный тизер',
        uz: 'Fangchengbao IP · Syujetli tizer'
      },
      desc: {
        'zh-Hant': 'AI 劇情式活動先導預告片——聯動品牌專屬 IP 形象，運用 AI 生成劇情式先導預告片，穿插車型特效與巡展場景鏡頭，在活動開啟前鋪墊話題熱度。',
        en: 'An AI story-driven event teaser — featuring the brand\'s exclusive IP character, AI generates a narrative prelude interwoven with vehicle effects and roadshow scenes, warming up the conversation before the event begins.',
        ru: 'Сюжетный пред анонс события на базе ИИ: задействован эксклюзивный IP-персонаж бренда; ИИ создаёт тизер-прелюдию с эффектами автомобиля и кадрами роуд-шоу, разогревая интерес ещё до старта мероприятия.',
        uz: 'AI yordamida yaratilgan syujetli tadbir tizeri — brendning eksklyuziv IP qahramoni ishtirok etadi; avtomobil effektlari va turni sahnalari bilan kelishgan tizer tadbir boshlanishidan oldin qiziqishni oshiradi.'
      },
      tag: {
        'zh-Hant': 'IP劇情', en: 'IP Story', ru: 'IP-сюжет', uz: 'IP syujeti'
      }
    },
    v11: {
      title: {
        'zh-Hant': '項目集合混剪',
        en: 'Project Mashup Collection',
        ru: 'Подборка проектов',
        uz: 'Loyihalar to‘plami'
      },
      desc: {
        'zh-Hant': 'AI 創新內容矩陣成果混剪——涵蓋預熱宣傳、現場宣傳、產品宣傳三大傳播板塊，一站式呈現 AI 創意傳播力。',
        en: 'A mashup of the AI content-matrix results — spanning pre-event, on-site and product campaigns across three communication tracks, showcasing the power of AI-driven creative communication in one place.',
        ru: 'Нарезка лучших результатов AI-контент-матрицы: три направления коммуникации — тизеры, событийная и продуктовая реклама — в одном ролике, наглядно демонстрирующем силу креативных коммуникаций на базе ИИ.',
        uz: 'AI kontent matritsasi natijalaridan iborat tanlangan lavhalar — tadbir oldi, tadbir joyida va mahsulot reklamasi kabi uch yo‘nalish bir joyda AI ijodiy kommunikatsiya kuchini namoyish etadi.'
      },
      tag: {
        'zh-Hant': '混剪', en: 'Mashup', ru: 'Нарезка', uz: 'Tanlangan lavhalar'
      }
    },
    v12: {
      title: {
        'zh-Hant': '騰勢Z9 · AI短劇',
        en: 'Denza Z9 · AI Short Drama',
        ru: 'Denza Z9 · AI-мини-драма',
        uz: 'Denza Z9 · AI qisqa dramasi'
      },
      desc: {
        'zh-Hant': '電影感劇情式 AI 短劇——以故事化敘事釋放產品體驗亮點，探索 AI 劇情式傳播新形式。',
        en: 'A cinematic story-style AI short drama — narrative storytelling unlocks the product\'s experiential highlights, exploring a new form of AI-driven dramatic communication.',
        ru: 'Кинематографическая AI-мини-драма: сторителлинг раскрывает сильные стороны продукта и открывает новую форму драматической коммуникации на базе ИИ.',
        uz: 'Kino uslubidagi AI qisqa dramasi — hikoyaviy bayon mahsulot tajribasining yorqin tomonlarini ochib beradi va AI asosidagi yangi dramatik kommunikatsiya shaklini namoyish etadi.'
      },
      tag: {
        'zh-Hant': 'AI短劇', en: 'AI Drama', ru: 'AI-драма', uz: 'AI drama'
      }
    },
    v13: {
      title: {
        'zh-Hant': '倒計時 · 多角度 01',
        en: 'Countdown · Multi-Angle 01',
        ru: 'Обратный отсчёт · Ракурс 01',
        uz: 'Teskari sanoq · Ko‘p burchak 01'
      },
      desc: {
        'zh-Hant': 'AI 虛擬空間創意倒計時動態海報——藉助 AI 虛擬空間建模複刻活動現場場景，以倒計時數字為視覺核心，動態演繹數字視覺符號，持續營造活動期待感。',
        en: 'A creative AI virtual-space countdown motion poster — AI virtual-space modeling recreates the event venue, with the countdown digits as the visual centerpiece, dynamically animating the numeric symbols to sustain anticipation for the event.',
        ru: 'Креативный динамический плакат с обратным отсчётом в AI-виртуальном пространстве: моделирование воссоздаёт площадку события; цифры отсчёта — визуальный центр, анимация цифровых символов непрерывно поддерживает предвкушение мероприятия.',
        uz: 'AI virtual makonda yaratilgan ijodiy teskari sanoq dinamik posteri — AI modellashtirish tadbir maydonini qayta yaratadi; sanoq raqamlari vizual markazda bo‘lib, raqamli belgilar animatsiyasi tadbir kutish tuyg‘usini uzluksiz saqlab turadi.'
      },
      tag: {
        'zh-Hant': '倒計時', en: 'Countdown', ru: 'Обратный отсчёт', uz: 'Teskari sanoq'
      }
    },
    v14: {
      title: {
        'zh-Hant': '倒計時 · 多角度 02',
        en: 'Countdown · Multi-Angle 02',
        ru: 'Обратный отсчёт · Ракурс 02',
        uz: 'Teskari sanoq · Ko‘p burchak 02'
      },
      desc: {
        'zh-Hant': 'AI 虛擬空間創意倒計時動態海報——藉助 AI 虛擬空間建模複刻活動現場場景，以倒計時數字為視覺核心，結合空間內載體動態演繹，適配全平台宣發節奏。',
        en: 'A creative AI virtual-space countdown motion poster — AI virtual-space modeling recreates the event venue; with countdown digits at the visual core and dynamic carriers within the space, it fits the promotional rhythm of every platform.',
        ru: 'Креативный динамический плакат с обратным отсчётом в AI-виртуальном пространстве: моделирование воссоздаёт площадку события; цифры отсчёта — визуальный центр, динамика объектов в пространстве адаптирована под ритм продвижения на всех платформах.',
        uz: 'AI virtual makondagi ijodiy teskari sanoq dinamik posteri — AI modellashtirish tadbir maydonini qayta yaratadi; sanoq raqamlari vizual markazda bo‘lib, makondagi dinamik obyektlar barcha platformalarning reklama ritmiga moslashtirilgan.'
      },
      tag: {
        'zh-Hant': '倒計時', en: 'Countdown', ru: 'Обратный отсчёт', uz: 'Teskari sanoq'
      }
    },
    v15: {
      title: {
        'zh-Hant': '倒計時 · 主體展示',
        en: 'Countdown · Hero Showcase',
        ru: 'Обратный отсчёт · Представление объекта',
        uz: 'Teskari sanoq · Asosiy ko‘rsatish'
      },
      desc: {
        'zh-Hant': 'AI 虛擬空間創意倒計時動態海報——依託 AI 搭建舞台場景，以倒計時數字為視覺核心，結合倒計時曝光場景質感，持續營造活動期待感。',
        en: 'A creative AI virtual-space countdown motion poster — an AI-built stage scene with countdown digits as the visual core, paired with the textural quality of the reveal scene, sustaining anticipation for the event.',
        ru: 'Креативный динамический плакат с обратным отсчётом в AI-виртуальном пространстве: сцена построена с помощью ИИ, цифры отсчёта образуют визуальный центр и в сочетании с фактурой сцены показа непрерывно поддерживают предвкушение события.',
        uz: 'AI virtual makondagi ijodiy teskari sanoq dinamik posteri — AI yordamida qurilgan sahna sahnasida sanoq raqamlari vizual markazni tashkil etadi va ochilish sahnasi sifati bilan uyg‘unlashib, tadbir kutish tuyg‘usini saqlab turadi.'
      },
      tag: {
        'zh-Hant': '倒計時', en: 'Countdown', ru: 'Обратный отсчёт', uz: 'Teskari sanoq'
      }
    }
  }
};
