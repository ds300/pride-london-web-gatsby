/* switch the following two lines to preview production mode */
const DEV = process.env.NODE_ENV === 'development'
// const DEV = false

const ENABLED_IN_PRODUCTION = true
const DISABLED_IN_PRODUCTION = DEV

/* ADD FEATURE FLAGS HERE */
export const YOU_MAY_ALSO_LIKE = ENABLED_IN_PRODUCTION
export const GENERIC_CONTENT_PAGES = DISABLED_IN_PRODUCTION
