const translations = {
  en: {
    'logo_text': 'Skipio',
    'nav_product': 'Product',
    'nav_solutions': 'Solutions',
    'nav_resources': 'Resources',
    'nav_pricing': 'Pricing',
    'nav_login': 'Login',
    'nav_signup': 'Sign Up',
    'hero_headline': 'Personalized Business Text Messaging',
    'hero_subheadline': 'Connect with and convert your audience with Skipio\'s conversational business text messaging.',
    'hero_cta_primary': 'Get Started Now',
    'hero_cta_secondary': 'Talk to an Expert',
    'chat_tooltip': 'Want to talk with an expert?',
    'chat_header': 'Chat with Skipio',
    'chat_placeholder': 'Type a message...',
    'chat_body': 'How can we help you today?',
    'lang_label': 'English',
    'lang_vi': 'Tiếng Việt',
    'lang_en': 'English',
  },
  vi: {
    'logo_text': 'Skipio',
    'nav_product': 'Sản phẩm',
    'nav_solutions': 'Giải pháp',
    'nav_resources': 'Tài nguyên',
    'nav_pricing': 'Bảng giá',
    'nav_login': 'Đăng nhập',
    'nav_signup': 'Đăng ký',
    'hero_headline': 'Dịch vụ Tin nhắn Doanh nghiệp Cá nhân hóa',
    'hero_subheadline': 'Kết nối và chuyển đổi khách hàng của bạn với tin nhắn hội thoại từ Skipio.',
    'hero_cta_primary': 'Bắt đầu Ngay',
    'hero_cta_secondary': 'Nói chuyện với Chuyên gia',
    'chat_tooltip': 'Muốn nói chuyện với chuyên gia?',
    'chat_header': 'Trò chuyện với Skipio',
    'chat_placeholder': 'Nhập tin nhắn...',
    'chat_body': 'Chúng tôi có thể giúp gì cho bạn?',
    'lang_label': 'Tiếng Việt',
    'lang_vi': 'Tiếng Việt',
    'lang_en': 'English',
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-lang]').forEach(el => {
    const key = el.getAttribute('data-i18n-lang');
    const langCode = el.getAttribute('data-lang-code');
    if (langCode === lang) {
      el.style.display = '';
    } else if (el.classList.contains('language-selector__option')) {
      el.style.display = '';
    }
  });

  const toggle = document.querySelector('.language-selector__toggle-text');
  if (toggle) {
    toggle.textContent = t['lang_label'];
  }

  localStorage.setItem('skipio-lang', lang);
}

function initI18n() {
  const savedLang = localStorage.getItem('skipio-lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.language-selector__option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-code');
      if (lang) {
        setLanguage(lang);
        document.querySelector('.language-selector__menu').classList.remove('language-selector__menu--open');
        document.querySelectorAll('.language-selector__option').forEach(o => o.classList.remove('language-selector__option--active'));
        btn.classList.add('language-selector__option--active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
