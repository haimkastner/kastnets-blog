const I18N = {
  detectBrowserLanguage: {
    // If enabled, a cookie is set once a user has been redirected to his
    // preferred language to prevent subsequent redirections
    // Set to false to redirect every time
    useCookie: false,
    // Set to always redirect to value stored in the cookie, not just once
    alwaysRedirect: false,
  },
  locales: [
    {
      code: 'he',
      iso: 'he-IL',
      name: 'עברית',
      file: 'he/index.js'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'he',
  parsePages: false
}

module.exports = {
  I18N
}
