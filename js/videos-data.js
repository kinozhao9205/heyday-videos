/**
 * 视频数据配置文件
 * =================
 * 修改此文件即可更新视频列表
 * - src: 视频文件路径（相对于网站根目录）
 * - title: 视频标题（含视频特色名 + 文案类型）
 * - desc: 视频描述（摘自《AI 传播内容矩阵文案》）
 * - category: 分类标签（预热宣传 / 现场宣传 / 产品宣传 / 混剪合集 / AI短剧）
 * - tag: 子标签（卡片角标）
 */

const VIDEOS = [
  {
    id: "v01",
    src: "videos/1东方明珠搭建.mp4",
    poster: "posters/v01.jpg",
    title: "东方明珠 · 场景预热",
    desc: "虚实结合活动场景预热视频——聚焦活动场地与城市地标，以 AI 创造虚实共生场景，打造沉浸式悬念预热短片，为线下活动蓄水引流。",
    category: "预热宣传",
    tag: "虚实结合"
  },
  {
    id: "v02",
    src: "videos/2揭幕.mp4",
    poster: "posters/v02.jpg",
    title: "揭幕仪式 · 现场高光",
    desc: "项目现场宣传·引爆热点——活动现场揭幕仪式高光时刻，以沉浸式互动体验呈现品牌发布瞬间，创造现场体验吸引力。",
    category: "现场宣传",
    tag: "现场高光"
  },
  {
    id: "v03",
    src: "videos/3豹8-水墨TVC-现场.mp4",
    poster: "posters/v03.jpg",
    title: "豹8 · 电影级质感TVC",
    desc: "电影级质感产品宣传片——AI 智能运镜与光影渲染构建氛围感叙事，凸显产品硬核实力，塑造高端硬核品牌质感，大幅缩减拍摄周期与成本。",
    category: "产品宣传",
    tag: "电影级TVC"
  },
  {
    id: "v04",
    src: "videos/4邀请函.mp4",
    poster: "posters/v04.jpg",
    title: "城市邀约 · 邀请函",
    desc: "AI 虚实融合城市邀约视频——以一城一地标为叙事锚点，实景拍摄与 AI 数字特效虚实结合，将邀请函与城市地标创意融合，制造城市专属仪式感。",
    category: "预热宣传",
    tag: "城市邀约"
  },
  {
    id: "v05",
    src: "videos/5方程豹城市供电.mp4",
    poster: "posters/v05.jpg",
    title: "方程豹 · 技术内核",
    desc: "技术内核展示系列 AI 短视频——依托 AI 生成虚实双层叙事画面，将产品硬核功能可视化拆解，让抽象的技术原理直观易懂，兼顾宣讲与科普传播。",
    category: "产品宣传",
    tag: "技术可视化"
  },
  {
    id: "v06",
    src: "videos/6方程豹涂鸦.mp4",
    poster: "posters/v06.jpg",
    title: "方程豹 · 趣味涂鸦",
    desc: "现场趣味演绎宣传短片——场景实拍与 AI 虚拟特效融合，动态呈现场景视觉变更效果，打造强网感的趣味演绎，精准沉淀年轻潮流客群。",
    category: "现场宣传",
    tag: "趣味演绎"
  },
  {
    id: "v07",
    src: "videos/7直播女孩.mp4",
    poster: "posters/v07.jpg",
    title: "虚拟KOL · 直播体验",
    desc: "虚拟 KOL 体验传播短片——摒弃真人 KOL 到场讲解，活动现场实景叠加 AI 虚拟人与互动剧情，打造沉浸式探店叙事直播短片，低成本制造话题传播点。",
    category: "现场宣传",
    tag: "虚拟KOL"
  },
  {
    id: "v08",
    src: "videos/8仰望摩天轮.mp4",
    poster: "posters/v08.jpg",
    title: "仰望 · 超现实奇观",
    desc: "沉浸式虚拟互动营销短片——联动城市实景与活动场地构建超现实虚拟短片，以超震撼场景奇观与互动剧情设计，打造自带传播话题的虚实共生营销场景。",
    category: "现场宣传",
    tag: "虚实共生"
  },
  {
    id: "v09",
    src: "videos/9仰望下水.mp4",
    poster: "posters/v09.jpg",
    title: "仰望 · 极限涉水",
    desc: "超现实产品体验场景互动短片——覆盖极限路况等复合场景，打破展台边界，以奇幻场景革新静态展具体验，打造强视觉冲击的产品体验宣传。",
    category: "现场宣传",
    tag: "超现实"
  },
  {
    id: "v10",
    src: "videos/10方程豹ip数字人AI视频.mp4",
    poster: "posters/v10.jpg",
    title: "方程豹IP · 剧情先导",
    desc: "AI 剧情式活动先导预告片——联动品牌专属 IP 形象，运用 AI 生成剧情式先导预告片，穿插车型特效与巡展场景镜头，在活动开启前铺垫话题热度。",
    category: "预热宣传",
    tag: "IP剧情"
  },
  {
    id: "v11",
    src: "videos/集合混剪2.mp4",
    poster: "posters/v11.jpg",
    title: "项目集合混剪",
    desc: "AI 创新内容矩阵成果混剪——涵盖预热宣传、现场宣传、产品宣传三大传播板块，一站式呈现 AI 创意传播力。",
    category: "混剪合集",
    tag: "混剪"
  },
  {
    id: "v12",
    src: "videos/ai短剧腾势Z9｜电影感霸总反差爽剧.mp4",
    poster: "posters/v12.jpg",
    title: "腾势Z9 · AI短剧",
    desc: "电影感剧情式 AI 短剧——以故事化叙事释放产品体验亮点，探索 AI 剧情式传播新形式。",
    category: "AI短剧",
    tag: "AI短剧"
  },
  {
    id: "v13",
    src: "videos/11倒计时/倒计时-多角度1.mp4",
    poster: "posters/v13.jpg",
    title: "倒计时 · 多角度 01",
    desc: "AI 虚拟空间创意倒计时动态海报——借助 AI 虚拟空间建模复刻活动现场场景，以倒计时数字为视觉核心，动态演绎数字视觉符号，持续营造活动期待感。",
    category: "预热宣传",
    tag: "倒计时"
  },
  {
    id: "v14",
    src: "videos/11倒计时/倒计时-多角度2.mp4",
    poster: "posters/v14.jpg",
    title: "倒计时 · 多角度 02",
    desc: "AI 虚拟空间创意倒计时动态海报——借助 AI 虚拟空间建模复刻活动现场场景，以倒计时数字为视觉核心，结合空间内载体动态演绎，适配全平台宣发节奏。",
    category: "预热宣传",
    tag: "倒计时"
  },
  {
    id: "v15",
    src: "videos/11倒计时/倒计时-主体展示.mp4",
    poster: "posters/v15.jpg",
    title: "倒计时 · 主体展示",
    desc: "AI 虚拟空间创意倒计时动态海报——依托 AI 搭建舞台场景，以倒计时数字为视觉核心，结合倒计时曝光场景质感，持续营造活动期待感。",
    category: "预热宣传",
    tag: "倒计时"
  }
];
