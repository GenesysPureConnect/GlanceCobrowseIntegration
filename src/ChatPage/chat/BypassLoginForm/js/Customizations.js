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

define(['common', 'ui', 'WebServices'], function(common, ui, webservices)
{
    var customizations = common.Type.registerLocalNamespace("customizations");

/**
 * CustomLoginInfoSource class 
 *  
 * In the default installation, a page is shown which allows the user to 
 * select between tabs for Chat, Callback, and Registration.  To create a 
 * chat, the user must type their name (and optionally, a password) and 
 * press the "Start Chat" button.  To create a callback, the user must type 
 * their name, telephone number, callback description, (and optionally a 
 * password), and press the "Start Callback" button.
 *  
 * This is because ui._Internal._DefaultLoginInfoSource is not 
 * able to get login information from any other source, so the default action is 
 * to show that page. 
 *  
 * This subclass of _DefaultLoginInfoSource obtains login data from form submission 
 * data, and the login form is therefore not shown. 
 */
customizations.CustomLoginInfoSource = Class.create(ui._Internal._DefaultLoginInfoSource,
{
    initialize : function()
    {
        // Create an instance of the class that is defined just below this one.
        // This line could be placed elsewhere if desired, such as in chatOrCallback.html.
        var customLifecycleEventsObserverSingleton = new customizations.CustomLifecycleEventsObserver();
    },

    /** 
     * Skip the login page, and begin a chat right away using a username 
     * obtained from the form in this example's index.html 
     */
    get_chatUsername : function()
    {
        // This line may be used to extract the value from the query string
        return this.get_queryStringValue("chatUsername");
    },

    /** 
     * If get_chatUsername() returns non-null, this method may optionally be 
     * used to return the password of that user.  If an anonymous chat is 
     * desired, simply implement get_chatUsername() but allow get_chatPassword() to 
     * return null. 
     */
    get_chatPassword : function()
    {
        // This line may be used to extract the value from the query string (though that
        // is perhaps not a wise place for a password to be!)
        return this.get_queryStringValue("chatPassword");
    },

    /** 
     * Skip the login page, and begin a callback right away using a username 
     * obtained from the form in this example's index.html 
     * Note that if get_chatUsername() also returns a non-null value, that will 
     * take priority and a chat will be started, not a callback. 
     */
    get_callbackUsername : function()
    {
        // This line may be used to extract the value from the query string
        return this.get_queryStringValue("callbackUsername");
    },

    /** 
     * If get_callbackUsername() returns non-null, this method may optionally be 
     * used to return the password of that user.  If an anonymous callback is 
     * desired, simply implement get_callbackUsername() but allow get_callbackPassword() to 
     * return null. 
     */
    get_callbackPassword : function()
    {
        // This line may be used to extract the value from the query string (though that
        // is perhaps not a wise place for a password to be!)
        return this.get_queryStringValue("callbackPassword");
    },

    /** 
     * If get_callbackUsername() returns non-null, this method shall return that user's 
     * telephone number. 
     */
    get_callbackTelephone : function()
    {
        // This line may be used to extract the value from the query string
        return this.get_queryStringValue("callbackTelephone");
    },

    /** 
     * If get_callbackUsername() returns non-null, this method shall return the subject which 
     * that user wishes to discuss. 
     */
    get_callbackDescription : function()
    {
        // This line may be used to extract the value from the query string
        return this.get_queryStringValue("callbackDescription");
    },

    /**
     * The purpose of this example is to use usernames, passwords, etc. that were obtained from 
     * an external source.  This is a helper method which uses the query string as that source. 
     * Customers could easily replace this (or the calls to this) with code that gets the values 
     * from other sources instead. 
     *  
     * @param key A key from a key+value pair in the query string
     */
    get_queryStringValue : function(key)
    {
        var value = common.Utilities.getQueryStringValue(key);

        if (null == value)
        {
            return null;
        }

        // Undo the URL encoding that was done when the form was submitted.
        // For instance, change "John+Doe" back to "John Doe"
        return decodeURIComponent(value.replace(/\+/g, ' '));
    }
});

/**
 * CustomLifecycleEventObserver class 
 *  
 * In the default implementation, Notifications are sent when a chat or callback is 
 * created, when a chat ends, and when an attempt to create a chat or callback 
 * fails. 
 *  
 * This class listens for these Notifications and simply pops up some Javascript alerts.
 */
customizations.CustomLifecycleEventsObserver = Class.create(common.InterfaceImplementation,
{
    initialize : function($super)
    {
        $super();
        this.addImplementedInterface(webservices.Interfaces.IChatCreationNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatCreationFailureNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatCompletionNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatCompletionFailureNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.ICallbackCreationNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.ICallbackCreationFailureNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCreationNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCreationFailureNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCompletionNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCompletionFailureNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.ICallbackCreationNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.ICallbackCreationFailureNotification);
    },

	/**
	 * This method is called when a chat is created successfully.
	 * 
	 * @param chatCreationNotification An object that implements IChatCreationNotification. (Ignored)
	 */
    processChatCreationNotification : function(chatCreationNotification)
    {
        console.debug('Bypass Login Form Customization: Chat created successfully!');
        console.debug(chatCreationNotification);
    },

	/**
     * This method is called when an attempt to create a chat fails. 
	 * 
	 * @param chatCreationFailureNotification An object that implements IChatCreationFailureNotification.
	 */
    processChatCreationFailureNotification : function(chatCreationFailureNotification)
    {
        var error = chatCreationFailureNotification.get_error();
        alert('Bypass Login Form Customization: Chat creation failed:\n' +
              'Error Source: ' + error.get_errorSource() +
              '\nError Type: ' + error.get_errorType() +
              '\nError SubType: ' + error.get_subErrorType() +
              '\nError Code: ' + error.get_errorCode());
        //history.go(-1);
    },

	/**
     * This method is called when a chat is exited successfully.
	 * 
	 * @param chatCompletionNotification An object that implements IChatCompletionNotification. (Ignored)
	 */
    processChatCompletionNotification : function(chatCompletionNotification)
    {
        console.debug('Bypass Login Form Customization: Chat complete!');
        //history.go(-1);
    },

	/**
     * This method is called when an attempt to exit a chat fails. 
	 * 
	 * @param chatCompletionFailureNotification An object that implements IChatCompletionFailureNotification.
	 */
    processChatCompletionFailureNotification : function(chatCompletionFailureNotification)
    {
        var error = chatCompletionFailureNotification.get_error();
        alert('Bypass Login Form Customization: Chat competion failed:\n' +
              'Error Source: ' + error.get_errorSource() +
              '\nError Type: ' + error.get_errorType() +
              '\nError SubType: ' + error.get_subErrorType() +
              '\nError Code: ' + error.get_errorCode());
        //history.go(-1);
    },

	/**
	 * This method is called when a callback is created successfully.
	 * 
	 * @param callbackCreationNotification An object that implements ICallbackCreationNotification. (Ignored)
	 */
    processCallbackCreationNotification : function(callbackCreationNotification)
    {
        console.debug('Bypass Login Form Customization: Callback created successfully!');
        //history.go(-1);
    },

	/**
     * This method is called when an attempt to create a callback fails. 
	 * 
	 * @param callbackCreationFailureNotification An object that implements ICallbackCreationFailureNotification.
	 */
    processCallbackCreationFailureNotification : function(callbackCreationFailureNotification)
    {
        var error = callbackCreationFailureNotification.get_error();
        alert('Bypass Login Form Customization: Callback creation failed:\n' +
              'Error Source: ' + error.get_errorSource() +
              '\nError Type: ' + error.get_errorType() +
              '\nError SubType: ' + error.get_subErrorType() +
              '\nError Code: ' + error.get_errorCode());
        //history.go(-1);
    }
});

    customizations.singletonImplementations =
    {
        "LoginInfoSource"     : customizations.CustomLoginInfoSource,
        "MaximumFieldLengths" : ui._Internal._DefaultMaximumFieldLengths,
        "RetryCounts"         : webservices._Internal._DefaultRetryCounts,
        "TabVisibility"       : ui._Internal._DefaultTabVisibility,
        "StatusFieldsDisplay" : ui._Internal._DefaultStatusFieldsDisplay,
        "Linkifier"           : webservices._Internal._DefaultLinkifier,
        "SendOnEnter"         : webservices._Internal._DefaultSendOnEnter
    };

    customizations.nonSingletonImplementations =
    {
        "RegistrationFormPanel" : ui._Internal._DefaultRegistrationFormPanel
    };

    ININ.Web.Chat.Customizations = customizations; // Temporary shim
    return customizations;
});
