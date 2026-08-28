/**
 * HEYDAY VIDEO — 应用主逻辑
 * 视频画廊 · 搜索 · 筛选 · 播放器
 */

(function () {
  'use strict';

  // --- 状态 ---
  let currentCategory = '全部';
  let currentSearch = '';
  let renderedVideos = [];
  let currentVideoId = null;

  // --- DOM ---
  const grid = document.getElementById('videoGrid');
  const filterChips = document.getElementById('filterChips');
  const searchInput = document.getElementById('searchInput');
  const emptyState = document.getElementById('emptyState');
  const topbar = document.getElementById('topbar');
  const overlay = document.getElementById('playerOverlay');
  const playerVideo = document.getElementById('playerVideo');
  const playerClose = document.getElementById('playerClose');
  const playerBackdrop = document.getElementById('playerBackdrop');
  const playerTitle = document.getElementById('playerTitle');
  const playerDesc = document.getElementById('playerDesc');
  const playerTag = document.getElementById('playerTag');
  const playerShareBtn = document.getElementById('playerShareBtn');
  const toast = document.getElementById('toast');

  // --- 获取分类 ---
  function getCategories() {
    const cats = ['全部'];
    const set = new Set();
    VIDEOS.forEach(v => set.add(v.category));
    cats.push(...set);
    return cats.map(cat => ({
      name: cat,
      count: cat === '全部' ? VIDEOS.length : VIDEOS.filter(v => v.category === cat).length
    }));
  }

  // --- 渲染分类筛选 ---
  function renderChips() {
    const cats = getCategories();
    filterChips.innerHTML = cats.map(cat => `
      <button class="chip ${cat.name === currentCategory ? 'active' : ''}" data-cat="${cat.name}">
        ${cat.name}<span class="chip-count">${cat.count}</span>
      </button>
    `).join('');

    filterChips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        currentCategory = chip.dataset.cat;
        filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderVideos();
      });
    });
  }

  // --- 过滤视频 ---
  function getFilteredVideos() {
    return VIDEOS.filter(v => {
      const matchCat = currentCategory === '全部' || v.category === currentCategory;
      const matchSearch = !currentSearch ||
        v.title.toLowerCase().includes(currentSearch) ||
        v.desc.toLowerCase().includes(currentSearch) ||
        v.category.toLowerCase().includes(currentSearch) ||
        (v.tag && v.tag.toLowerCase().includes(currentSearch));
      return matchCat && matchSearch;
    });
  }

  // --- 渲染视频卡片 ---
  function renderVideos() {
    const filtered = getFilteredVideos();
    renderedVideos = filtered;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map((v, i) => `
      <div class="video-card" data-id="${v.id}" style="animation-delay:${i * 60}ms">
        <div class="card-thumbnail">
          <span class="card-tag">${v.tag || v.category}</span>
          <div class="card-loader"></div>
          <img class="card-poster" loading="lazy" src="${v.poster}"
               alt="${v.title}" draggable="false"
               oncontextmenu="return false">
          <div class="play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="card-info">
          <div class="card-info-head">
            <h3 class="card-title">${v.title}</h3>
            <button class="share-mini" data-share="${v.id}" aria-label="转发" title="转发">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
          <p class="card-desc">${v.desc}</p>
        </div>
      </div>
    `).join('');

    // 缩略图加载完成/失败后隐藏加载动画
    grid.querySelectorAll('.video-card').forEach(card => {
      const img = card.querySelector('.card-poster');
      const loader = card.querySelector('.card-loader');

      if (img) {
        img.addEventListener('load', () => { if (loader) loader.style.display = 'none'; });
        img.addEventListener('error', () => { if (loader) loader.style.display = 'none'; });
      }

      card.addEventListener('click', () => openPlayer(card.dataset.id));

      // 卡片转发按钮（阻止冒泡到卡片点击）
      const shareBtn = card.querySelector('.share-mini');
      if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          shareVideo(shareBtn.dataset.share);
        });
      }
    });
  }

  // --- 打开播放器 ---
  function openPlayer(id) {
    const v = VIDEOS.find(x => x.id === id);
    if (!v) return;

    currentVideoId = id;
    playerTitle.textContent = v.title;
    playerDesc.textContent = v.desc;
    playerTag.textContent = v.tag || v.category;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // 同步 URL hash，便于转发定位
    if (location.hash !== '#' + id) {
      history.replaceState(null, '', '#' + id);
    }

    // Apple WebKit 回退：仅在不支持 HTTP Range 的沙盒域名（app.workbuddy.link）生效。
    // COS / GitHub Pages 均支持 Range 流式播放，直接原生播放即可。
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMacSafari = /Macintosh/.test(ua) && /Safari/.test(ua) &&
      !/Chrome/.test(ua) && !/Edg/.test(ua);
    const needsBlobFallback = (isIOS || isMacSafari) &&
      /app\.workbuddy\.link$/.test(location.hostname);

    if (needsBlobFallback) {
      showToast('视频加载中…');
      fetch(v.src)
        .then(r => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.blob();
        })
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          playerVideo.src = blobUrl;
          playerVideo.play().catch(() => {});
          showToast('视频加载完成');
        })
        .catch(err => {
          showToast('视频加载失败，请重试');
          console.error('Video fetch error:', err);
        });
    } else {
      playerVideo.src = v.src;
      const playPromise = playerVideo.play();
      if (playPromise) {
        playPromise.catch(() => {
          // 自动播放被阻止，用户需手动点击
        });
      }
    }
  }

  // --- 关闭播放器 ---
  function closePlayer() {
    overlay.classList.remove('open');
    playerVideo.pause();
    // 释放 Blob URL（macOS Safari 回退机制使用）
    const src = playerVideo.src;
    if (src && src.startsWith('blob:')) {
      URL.revokeObjectURL(src);
    }
    playerVideo.removeAttribute('src');
    playerVideo.load();
    document.body.style.overflow = '';
    currentVideoId = null;
  }

  // --- 转发分享 ---
  function shareVideo(id) {
    const v = VIDEOS.find(x => x.id === id);
    if (!v) return;

    const shareUrl = location.origin + location.pathname + '#' + v.id;
    const shareData = {
      title: 'HEYDAY · AI创意视频 | ' + v.title,
      text: v.title + ' — ' + v.desc + '（来自盛世前程）',
      url: shareUrl
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => { /* 用户取消 */ });
    } else {
      // 降级：复制链接
      copyText(shareUrl);
    }
  }

  // --- 复制文本 ---
  function copyText(text) {
    const done = () => showToast('链接已复制，去粘贴转发吧');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  // --- Toast 提示 ---
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // --- 搜索 ---
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderVideos();
    }, 200);
  });

  // --- 播放器关闭事件 ---
  playerClose.addEventListener('click', closePlayer);
  playerBackdrop.addEventListener('click', closePlayer);

  // 播放器转发按钮
  playerShareBtn.addEventListener('click', () => {
    if (currentVideoId) shareVideo(currentVideoId);
  });

  // --- 全局下载防护 ---
  // 拦截视频区域的右键菜单（防止"另存为/复制视频地址"）
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('video') ||
        e.target.closest('.card-thumbnail') ||
        e.target.closest('.player-wrapper')) {
      e.preventDefault();
    }
  });

  // 拦截拖拽（防止拖到本地/新窗口打开）
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.closest('.card-thumbnail')) {
      e.preventDefault();
    }
  });

  // 拦截 Ctrl/Cmd + S（另存为）
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
    }
  });

  // ESC 关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closePlayer();
    }
  });

  // --- 滚动效果 ---
  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (scrollTimer) cancelAnimationFrame(scrollTimer);
    scrollTimer = requestAnimationFrame(() => {
      if (window.scrollY > 10) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    });
  });

  // --- 数字动画 ---
  function animateCount() {
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  // --- 回到顶部 ---
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- URL hash 深链定位 ---
  function handleHash() {
    const id = location.hash.replace('#', '');
    if (id && VIDEOS.some(v => v.id === id)) {
      openPlayer(id);
    }
  }
  window.addEventListener('hashchange', handleHash);

  // --- 初始化 ---
  renderChips();
  renderVideos();

  // 延迟启动数字动画
  setTimeout(animateCount, 300);

  // 若 URL 带 #视频id，直接打开
  handleHash();

})();
