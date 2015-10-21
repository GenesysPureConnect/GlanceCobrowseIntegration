/************************************************************************************************
* This file contains Javascript code authored by Interactive Intelligence, Inc.                 *
*                                                                                               *
* The contents of this file are warranted to function as intended, provided they are not        *
* modified in any way by customers, end users, or other parties.                                *
*                                                                                               *
* During the course of this product's support lifecycle, Interactive Intelligence, Inc. may     *
* publish updates to this file at any time, via an SU or similar process.  If other             *
* modifications are made to this file, these modifications may therefore be overwritten.        *
*                                                                                               *
* Customers are encouraged to extend the functionality provided in this file, by creating       *
* additional file(s) which use this file as an API.                                             *
************************************************************************************************/


/* Interaction Center 4.0 SU5 */ 
var ININ_Web_Chat_LanguageOverride_Fileversion = "4.0005.0017.422"; 

define([], function()
{
    // Helper function to override which L10N will be fetched
    function setLanguage(language)
    {
        requirejs.config(
        {
            config:
            {
                'i18n':
                {
                    locale: language
                }
            }
        });
    }

    // Override it if it has been intentionally overridden
    if (getUserSelectedLanguageOverride())
    {
        setLanguage(getUserSelectedLanguageOverride());
    } else
    {
        var languageCode = (navigator.language || navigator.userLanguage || "").toLowerCase();
        if (languageCode)
        {
            var oldLanguageCode = languageCode;

            // We don't distribute a general "pt" file, just "pt-br".  If someone requests "pt",
            // it's better to give them "pt-br" rather than something non-Portuguese.
            languageCode = languageCode.replace(/pt[-\w]*/, "pt-br");

            // We don't distribute a general "en" file, just "en-us".  Same as above.
            languageCode = languageCode.replace(/en[-\w]*/, "en-us");

            // Norwegian Bokmal and Norwegian Nynorsk map to Norwegian.
            languageCode = languageCode.replace(/nb[-\w]*/, "no");
            languageCode = languageCode.replace(/nn[-\w]*/, "no");

            // We distribute zh-cn (simplified Chinese) and zh-tw (traditional Chinese).
            // But, browsers may send any of: zh-Hans, zh-sg (Singapore), zh-Hant, zh-hk (Hong Kong), zh-mo (Macau), zh-tw (Taiwan), zh.
            // Map them to simplified/traditional as appropriate.
            languageCode = languageCode.replace("zh-hans", "zh-cn");
            languageCode = languageCode.replace("zh-sg", "zh-cn");
            languageCode = languageCode.replace("zh-hk", "zh-tw");
            languageCode = languageCode.replace("zh-hant", "zh-tw");
            languageCode = languageCode.replace("zh-mo", "zh-tw");
            languageCode = languageCode.replace(/zh$/, "zh-cn");
            languageCode = languageCode.replace(/zh([^-])/, "zh-cn$1");

            if (languageCode != oldLanguageCode)
            {
                setLanguage(languageCode);
            }
        }
    }

    return {};
});


