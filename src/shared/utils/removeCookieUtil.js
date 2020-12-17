export const removeCookieUtil = (cookieName) => {
    document.cookie = cookieName + '=; Max-Age=0;';
}
