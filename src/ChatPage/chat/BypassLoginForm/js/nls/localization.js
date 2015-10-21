var g_defaultLanguageResourceFilePath = null;

function languageCodeToResourceFilePath(languageCode) {
    return 'js/nls/' + languageCode + '/localization.js';
}

define(['config'], function(config) {
    g_defaultLanguageResourceFilePath = languageCodeToResourceFilePath(config.DefaultLanguageCode) || 'en-us';

    return {
        "root": true,
        "ar": true,
        "da": true,
        "de": true,
        "en-us": true,
        "es": true,
        "fr": true,
        "he": true,
        "it": true,
        "ja": true,
        "ko": true,
        "nl": true,
        "no": true,
        "pl": true,
        "pt-br": true,
        "ru": true,
        "sr": true,
        "sv": true,
        "tr": true,
        "zh-cn": true,
        "zh-tw": true
    };
});
