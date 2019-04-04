export default {
    getUserLocale() {
        let language;
        if (window.navigator.languages) {
            language = window.navigator.languages[0];
        } else {
            language = window.navigator.userLanguage || window.navigator.language;
        }
        return language.slice(0, 2);
    }
}