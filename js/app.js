/**
 * 可信運算平台 - 主要 JavaScript
 * 功能: 動畫、平滑捲動、互動效果
 */

// 減少動作偏好檢測
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===========================
// 1. 導覽列滾動效果
// ===========================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初始化
}

// ===========================
// 2. 平滑捲動
// ===========================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // 忽略純 # 連結
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        // 更新 URL (不觸發跳轉)
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
}

// ===========================
// 3. 進場動畫 (Reveal on Scroll)
// ===========================
function initRevealAnimation() {
  if (reduceMotion) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ===========================
// 4. 回到頂部按鈕
// ===========================
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop(); // 初始化

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  });
}

// ===========================
// 5. 手機選單切換
// ===========================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded',
      menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  });

  // 點擊連結後關閉選單
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // 點擊外部關閉選單
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===========================
// 6. 表單驗證 (用於聯絡頁面)
// ===========================
function initFormValidation() {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const email = form.querySelector('input[type="email"]');
      const message = form.querySelector('textarea');

      let isValid = true;

      // 簡單驗證
      if (email && !email.value.includes('@')) {
        isValid = false;
        showError(email, '請輸入有效的電子郵件地址');
      }

      if (message && message.value.trim().length < 10) {
        isValid = false;
        showError(message, '訊息至少需要 10 個字元');
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  });
}

function showError(input, message) {
  // 移除舊的錯誤訊息
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // 添加新的錯誤訊息
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = '#d32f2f';
  errorDiv.style.fontSize = '14px';
  errorDiv.style.marginTop = '4px';
  errorDiv.textContent = message;

  input.parentElement.appendChild(errorDiv);
  input.focus();

  // 3秒後移除錯誤訊息
  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

// ===========================
// 7. FAQ 手風琴 (如果需要)
// ===========================
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    // 設置初始狀態 (預設展開)
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease';

    // 點擊問題切換答案
    question.style.cursor = 'pointer';
    question.addEventListener('click', () => {
      const isOpen = answer.style.maxHeight !== '0px';

      if (isOpen) {
        answer.style.maxHeight = '0px';
        question.setAttribute('aria-expanded', 'false');
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ===========================
// 8. 卡片 hover 效果增強 (可選)
// ===========================
function initCardEffects() {
  if (reduceMotion) return;

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// ===========================
// 9. 鍵盤導航增強
// ===========================
function initKeyboardNavigation() {
  // 當使用鍵盤導航時顯示 focus outline
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  // 當使用滑鼠時隱藏 focus outline
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

// ===========================
// 10. 性能優化: Lazy Loading 圖片
// ===========================
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // 瀏覽器支援原生 lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback: 使用 Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ===========================
// 11. 頁面載入動畫
// ===========================
function initPageLoadAnimation() {
  if (reduceMotion) return;

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
}

// ===========================
// 初始化所有功能
// ===========================
function init() {
  // 等待 DOM 完全載入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
}

function initAll() {
  console.log('🚀 初始化可信運算平台網站...');

  initNavbar();
  initSmoothScroll();
  initRevealAnimation();
  initBackToTop();
  initMobileMenu();
  initFormValidation();
  initFAQAccordion();
  initCardEffects();
  initKeyboardNavigation();
  initLazyLoading();
  initPageLoadAnimation();

  console.log('✅ 初始化完成');
}

// 啟動
init();

// ===========================
// 輔助函數: Debounce (性能優化)
// ===========================
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 匯出供外部使用 (如果需要)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    debounce
  };
}
