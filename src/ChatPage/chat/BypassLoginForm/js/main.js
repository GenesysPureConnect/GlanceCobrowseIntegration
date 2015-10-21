requirejs.config(
{
    shim:
    {
        'prototype':
        {
            exports: 'Prototype'
        },
        'config':
        {
            deps: ['common'],
            exports: 'ININ.Web.Chat.Config'
        },
        'i18n':
        {
            deps: ['LanguageOverride']
        }
    }
});

// Customizations aren't used by this file, but do need to be loaded before the app starts running.
define(['ui', 'config', 'customizations'], function(ui, config, customizations)
{
    var intervalID = null;
    function checkVisible() {
        if (window.outerWidth !== 0) {
            // Either visible from the start, or was initially invisible and then the interval fired
            if (null != intervalID) {
                // If it was that the interval fired, clear the interval
                window.clearInterval(intervalID);
                intervalID = null;
            }
            loadUI();
        } else if (null == intervalID) {
            // Initially invisible
            intervalID = window.setInterval(checkVisible, 500);
        }
    }

    var loadUI = function()
    {
        ui.Page.load(setInteractionWebToolsParams(config, ui));
    };

    checkVisible();
});

/**
 * Displays a message to the web user indicating that a certain module is taking too long to load. 
 *  
 * Since this may be called before localization has been loaded, this method contains hard-coded English string(s). 
 *  
 * @param err Contains information about the error that has occurred
 */
requirejs.onError = function (err)
{
    console.log("Load failure. requireType=" + err.requireType + ", requireModules=" + err.requireModules);

    // We only try to load one thing at a time, so any previous error is no longer relevant.  It should have
    // been removed already, but this is just to be safe.
    removeLoadError();

    var parent = document.getElementById('iwc-web-chat-container');
    if (!parent)
    {
        parent = this.getBody();
    }
    var errorDiv = new Element('div', { 'class': 'iwc-load-error' });
    errorDiv.id = 'iwc-load-error';
    var errorImg = new Element('img', { 'src': 'img/error.png' });
    var errorMsg = new Element('span', null);
    errorMsg.innerHTML = "The attempt to load " + err.requireModules + " is taking a long time.  Attempting to load it will continue, but may not ever succeed.";
    errorDiv.appendChild(errorImg);
    errorDiv.appendChild(errorMsg);
    parent.appendChild(errorDiv);
};

/**
 * Removes the error message created by addLoadError()
 */
removeLoadError = function()
{
    var errorDiv = document.getElementById('iwc-load-error');
    if (null != errorDiv)
    {
        var parent = errorDiv.parentNode;
        if (null != parent)
        {
            parent.removeChild(errorDiv);
        }
    }
};

// Bootloader is no longer necessary, but its onLoadedConfig()
// method is still called from the config file.  Stub that out.
Bootloader = new Object();
Bootloader.onLoadedConfig = function() { };
