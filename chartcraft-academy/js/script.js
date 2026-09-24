/**
 * ChartCraft Academy - Global Controller
 * Theme Toggling, Global Search Modal (Ctrl+K), Mobile Navigation,
 * Course Card Rendering, FAQ Accordions, and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initSearchModal();
  initFaqAccordions();
  updateGlobalNavProgress();
});

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('cca_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  const themeButtons = document.querySelectorAll('.theme-toggle-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('cca_theme', nextTheme);
      updateThemeIcons(nextTheme);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  });
}

function updateThemeIcons(theme) {
  const themeButtons = document.querySelectorAll('.theme-toggle-btn');
  themeButtons.forEach(btn => {
    if (theme === 'light') {
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      btn.setAttribute('title', 'Switch to Dark Mode');
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      btn.setAttribute('title', 'Switch to Light Mode');
      btn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  });
}

// --- Mobile Navigation Drawer ---
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ` : `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('open');
    }
  });
}

// --- Global Search Modal (Ctrl+K) ---
function initSearchModal() {
  // Ensure modal markup exists
  if (!document.getElementById('globalSearchModal')) {
    const modalHtml = `
      <div id="globalSearchModal" class="search-modal-backdrop" role="dialog" aria-modal="true" aria-label="Search Academy">
        <div class="search-modal-box">
          <div class="search-input-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="globalSearchInput" class="search-input" placeholder="Search courses, lessons, concepts, glossary..." autocomplete="off">
            <button class="btn-icon btn-sm" id="closeSearchBtn" aria-label="Close search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div id="searchResultsList" class="search-results-list">
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              Type a concept e.g. <em>"liquidity"</em>, <em>"order block"</em>, <em>"hammer"</em>, or <em>"fibonacci"</em>...
            </div>
          </div>
          <div class="search-footer-hint">
            <span>Navigation: <strong>↑</strong> <strong>↓</strong> to select, <strong>Enter</strong> to open</span>
            <span>Press <strong>ESC</strong> to close</span>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modal = document.getElementById('globalSearchModal');
  const input = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('searchResultsList');
  const closeBtn = document.getElementById('closeSearchBtn');

  function openSearch() {
    modal.classList.add('open');
    input.value = '';
    input.focus();
    renderSearchResults('');
  }

  function closeSearch() {
    modal.classList.remove('open');
  }

  document.querySelectorAll('.search-trigger').forEach(btn => {
    btn.addEventListener('click', openSearch);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  // Keyboard shortcut Ctrl+K or '/'
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearch();
    }
  });

  // Live Search Input
  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  function renderSearchResults(query) {
    if (!query.trim()) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Type a concept e.g. <em>"liquidity"</em>, <em>"order block"</em>, <em>"hammer"</em>, or <em>"fibonacci"</em>...
        </div>
      `;
      return;
    }

    if (typeof searchAcademy !== 'function') return;
    const { courses, lessons, glossary } = searchAcademy(query);
    const totalFound = courses.length + lessons.length + glossary.length;

    if (totalFound === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No educational topics found for "${escapeHtml(query)}". Try searching for "market structure", "FVG", or "support".
        </div>
      `;
      return;
    }

    let html = '';

    if (courses.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; padding: 0.5rem 0.75rem 0.25rem;">Courses (${courses.length})</div>`;
      courses.forEach(c => {
        html += `
          <a href="course-details.html?course=${c.id}" class="search-result-item">
            <div>
              <div style="font-weight: 600; font-size: 0.95rem;">${escapeHtml(c.title)}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${c.difficulty} • ${c.chapters.length} Chapters</div>
            </div>
            <span class="badge badge-blue">Course</span>
          </a>
        `;
      });
    }

    if (lessons.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-teal); text-transform: uppercase; padding: 0.5rem 0.75rem 0.25rem; margin-top: 0.5rem;">Lessons (${lessons.length})</div>`;
      lessons.forEach(l => {
        html += `
          <a href="lessons.html?course=${l.courseId}&lesson=${l.lessonNum}" class="search-result-item">
            <div>
              <div style="font-weight: 600; font-size: 0.92rem;">${escapeHtml(l.lessonTitle)}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(l.courseTitle)} • Chapter ${l.lessonNum}</div>
            </div>
            <span class="badge badge-teal">Lesson</span>
          </a>
        `;
      });
    }

    if (glossary.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--warning); text-transform: uppercase; padding: 0.5rem 0.75rem 0.25rem; margin-top: 0.5rem;">Glossary Terms (${glossary.length})</div>`;
      glossary.forEach(g => {
        html += `
          <a href="glossary.html#term-${encodeURIComponent(g.term)}" class="search-result-item">
            <div>
              <div style="font-weight: 600; font-size: 0.92rem;">${escapeHtml(g.term)}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(g.def.substring(0, 75))}...</div>
            </div>
            <span class="badge badge-amber">Glossary</span>
          </a>
        `;
      });
    }

    resultsContainer.innerHTML = html;
  }
}

// --- FAQ Accordions ---
function initFaqAccordions() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
      });

      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// --- Global Progress Indicator in Nav ---
function updateGlobalNavProgress() {
  if (typeof ProgressTracker === 'undefined' || typeof AcademyCourses === 'undefined') return;
  const overall = ProgressTracker.getOverallProgress(AcademyCourses);
  const badge = document.getElementById('navOverallBadge');
  if (badge) {
    badge.textContent = `${overall.percentage}% Complete`;
  }
}

// --- Course Card Renderer ---
function renderCourseCards(targetContainerId, filterDifficulty = 'all', filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById(targetContainerId);
  if (!container || typeof AcademyCourses === 'undefined') return;

  let filtered = AcademyCourses;

  if (filterDifficulty !== 'all') {
    filtered = filtered.filter(c => c.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase()));
  }

  if (filterCategory !== 'all') {
    filtered = filtered.filter(c => c.category.toLowerCase() === filterCategory.toLowerCase());
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.shortDesc.toLowerCase().includes(q) || 
      c.difficulty.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <p style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.5rem;">No courses match your filter criteria.</p>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try selecting "All Difficulties" or clearing your search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => {
    const totalLessons = course.chapters ? course.chapters.length : 0;
    const progress = typeof ProgressTracker !== 'undefined' 
      ? ProgressTracker.getCourseProgress(course.id, totalLessons) 
      : { completed: 0, total: totalLessons, percentage: 0 };

    let diffBadgeClass = 'badge-blue';
    if (course.difficulty.includes('Intermediate')) diffBadgeClass = 'badge-teal';
    if (course.difficulty.includes('Advanced')) diffBadgeClass = 'badge-amber';

    const visualSvg = typeof course.svgPreview === 'function' ? course.svgPreview() : '';

    return `
      <div class="course-card">
        <div class="course-card-visual">
          ${visualSvg}
        </div>
        <div class="course-card-body">
          <div class="course-card-badges">
            <span class="badge ${diffBadgeClass}">${course.difficulty}</span>
            <span class="badge badge-blue">${course.category}</span>
          </div>
          <h3 class="course-card-title">${escapeHtml(course.title)}</h3>
          <p class="course-card-desc">${escapeHtml(course.shortDesc)}</p>
          <div class="course-card-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:4px;">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              ${totalLessons} Chapters
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:4px;">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${course.duration}
            </span>
          </div>
          <div class="course-card-footer">
            <div class="progress-label-wrap">
              <span>Progress</span>
              <span><strong>${progress.percentage}%</strong> (${progress.completed}/${totalLessons})</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${progress.percentage}%;"></div>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <a href="course-details.html?course=${course.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
                View Syllabus
              </a>
              <a href="lessons.html?course=${course.id}&lesson=1" class="btn btn-primary btn-sm" style="flex: 1;">
                ${progress.completed > 0 ? 'Continue' : 'Start Course'}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Roadmap Renderer for Homepage ---
function renderRoadmap(targetContainerId) {
  const container = document.getElementById(targetContainerId);
  if (!container || typeof AcademyCourses === 'undefined') return;

  const levels = [
    { level: 1, name: "Foundations", courseId: "course-1", title: "Candlestick Foundations", difficulty: "Beginner", time: "45 min" },
    { level: 2, name: "Price Action", courseId: "course-2", title: "Candlestick Patterns", difficulty: "Beginner", time: "60 min" },
    { level: 3, name: "Key Levels", courseId: "course-3", title: "Support & Resistance", difficulty: "Beginner → Intermediate", time: "65 min" },
    { level: 4, name: "Imbalances", courseId: "course-4", title: "Supply & Demand", difficulty: "Intermediate", time: "65 min" },
    { level: 5, name: "Trend Mechanics", courseId: "course-5", title: "Market Structure (HH, HL, BOS, CHOCH)", difficulty: "Intermediate", time: "70 min" },
    { level: 6, name: "Order Flow", courseId: "course-6", title: "Liquidity Concepts & Sweeps", difficulty: "Intermediate → Advanced", time: "70 min" },
    { level: 7, name: "Smart Money", courseId: "course-7", title: "Smart Money Concepts (SMC)", difficulty: "Advanced", time: "75 min" },
    { level: 8, name: "Institutional", courseId: "course-8", title: "ICT Concepts & Frameworks", difficulty: "Advanced", time: "75 min" },
    { level: 9, name: "Top-Down", courseId: "course-9", title: "Multi-Timeframe Analysis", difficulty: "Advanced", time: "65 min" },
    { level: 10, name: "Harmonics", courseId: "course-10", title: "Fibonacci Retracement & Extension", difficulty: "Intermediate → Advanced", time: "80 min" },
    { level: 11, name: "Strategy Building", courseId: "course-11", title: "Complete TA Strategy Framework", difficulty: "Advanced", time: "90 min" }
  ];

  container.innerHTML = levels.map((lvl, index) => {
    const course = AcademyCourses.find(c => c.id === lvl.courseId) || AcademyCourses[0];
    const totalLessons = course.chapters ? course.chapters.length : 0;
    const progress = typeof ProgressTracker !== 'undefined'
      ? ProgressTracker.getCourseProgress(course.id, totalLessons)
      : { completed: 0, total: totalLessons, percentage: 0 };

    const isLast = index === levels.length - 1;

    return `
      <a href="course-details.html?course=${lvl.courseId}" class="roadmap-card">
        <div class="roadmap-level-badge">
          <span>Level</span>
          <strong>${lvl.level}</strong>
        </div>
        <div class="roadmap-info">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-teal); text-transform: uppercase;">
            ${lvl.name}
          </div>
          <h3>${lvl.title}</h3>
          <div class="roadmap-meta">
            <span class="roadmap-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${lvl.time}
            </span>
            <span class="roadmap-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              ${totalLessons} Lessons
            </span>
            <span class="badge ${lvl.difficulty.includes('Beginner') ? 'badge-blue' : lvl.difficulty.includes('Intermediate') ? 'badge-teal' : 'badge-amber'}">
              ${lvl.difficulty}
            </span>
          </div>
        </div>
        <div class="roadmap-action">
          <div style="text-align: right; min-width: 90px;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-primary);">
              ${progress.percentage}%
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">
              ${progress.completed}/${totalLessons} Done
            </div>
          </div>
          <div class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </a>
      ${!isLast ? `<div class="roadmap-connector"></div>` : ''}
    `;
  }).join('');
}

// --- Toast Notification Utility ---
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bullish)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  `;

  if (type === 'warning') {
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;
  }

  toast.innerHTML = `
    ${icon}
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Helper: Escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

if (typeof window !== 'undefined') {
  window.renderCourseCards = renderCourseCards;
  window.renderRoadmap = renderRoadmap;
  window.showToast = showToast;
  window.escapeHtml = escapeHtml;
  window.updateGlobalNavProgress = updateGlobalNavProgress;
}
