// The "?1" is to create a unique filename. Otherwise, we are asking RequireJS to load a file
// which its I18N plugin has already loaded.  This causes RequireJS to give a timeout error.
define([g_defaultLanguageResourceFilePath+"?1"], function(defaultLanguageResources) {
    return defaultLanguageResources;
});
