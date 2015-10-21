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
var ININ_Web_Chat_WebServices_Fileversion = "4.0005.0017.422"; 

define(['i18n!nls/localization', 'common'], function(localization, common)
{
    var webservices = common.Type.registerLocalNamespace("webservices");

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * ICapability interface 
 * Provides methods: get_relativeUrl(), get_method() 
 */
webservices.Interfaces.ICapability = new common.Interface('webservices.Interfaces.ICapability', ['get_relativeUrl', 'get_method']);

// ICapability derived interfaces

/**
 * IStartCapability interface, derived from ICapability 
 * Provides additional methods: none
 */
webservices.Interfaces.IStartCapability = new common.Interface('webservices.Interfaces.IStartCapability', [], ['webservices.Interfaces.ICapability'], webservices);

/**
 * IPollCapability interface, derived from ICapability 
 * Provides additional methods: none
 */
webservices.Interfaces.IPollCapability = new common.Interface('webservices.Interfaces.IPollCapability', [], ['webservices.Interfaces.ICapability'], webservices);

/**
 * ISendMessageCapability interface, derived from ICapability 
 * Provides additional methods: none
 */
webservices.Interfaces.ISendMessageCapability = new common.Interface('webservices.Interfaces.ISendMessageCapability', [], ['webservices.Interfaces.ICapability'], webservices);

/**
 * ISetTypingStateCapability interface, derived from ICapability 
 * Provides additional methods: none
 */
webservices.Interfaces.ISetTypingStateCapability = new common.Interface('webservices.Interfaces.ISetTypingStateCapability', [], ['webservices.Interfaces.ICapability'], webservices);

/**
 * IExitCapability interface, derived from ICapability 
 * Provides additional methods: none
 */
webservices.Interfaces.IExitCapability = new common.Interface('webservices.Interfaces.IExitCapability', [], ['webservices.Interfaces.ICapability'], webservices);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

// may need an interface is a CapabilitiesObserver so if any are changed...
// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * ICustomizationSingletonFactory interface 
 * Provides methods: get_instance() 
 */
webservices.Interfaces.ICustomizationSingletonFactory = new common.Interface('webservices.Interfaces.ICustomizationFactory', ['get_instance']);

/**
 * ICustomizationFactory interface 
 * Provides methods: create_instance() 
 */
webservices.Interfaces.ICustomizationFactory = new common.Interface('webservices.Interfaces.ICustomizationFactory', ['create_instance']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IError interface 
 * Provides methods: get_token(), get_errorType(), get_subErrorType(), get_errorCode()
 */
webservices.Interfaces.IError = new common.Interface('webservices.Interfaces.IError', ['get_token', 'get_errorType', 'get_subErrorType', 'get_errorCode']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * INotification interface 
 * Provides methods: none 
 */
webservices.Interfaces.INotification = new common.Interface('webservices.Interfaces.INotification', []);


// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * INotificationProcessor interface 
 * Provides method: process()
 */
webservices.Interfaces.INotificationProcessor = new common.Interface('webservices.Interfaces.INotificationProcessor', ['process']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

// INotification derived interfaces

/**
 * IQueueStatusNotification interface, derived from INotification 
 * Provides additional methods: get_agentsAvailable, get_estimatedWaitTime
 */
webservices.Interfaces.IQueueStatusNotification = new common.Interface('webservices.Interfaces.IQueueStatusNotification', [ 'get_agentsAvailable, get_estimatedWaitTime' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * IQueueStatusFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error
 */
webservices.Interfaces.IQueueStatusFailureNotification = new common.Interface('webservices.Interfaces.IQueueStatusFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IResponse interface 
 * Provides methods: get_statusType(), set_statusReason(), isSuccessful() 
 */
webservices.Interfaces.IResponse = new common.Interface('webservices.Interfaces.IResponse', ['get_statusType', 'set_statusReason', 'isSuccessful']);

// IResponse derived interfaces

/**
 * IChatResponse interface, derived from IResponse 
 * Provides additional methods: get_pollWaitSuggestion(), set_pollWaitSuggestion(), get_events(), addEvent()
 */
webservices.Interfaces.IChatResponse = new common.Interface('webservices.Interfaces.IChatResponse', ['get_pollWaitSuggestion', 'set_pollWaitSuggestion', 'get_events', 'addEvent'], ['webservices.Interfaces.IResponse'], webservices);

/**
 * ICallbackResponse interface, derived from IResponse 
 * Provides additional methods: none 
 */
webservices.Interfaces.ICallbackResponse = new common.Interface('webservices.Interfaces.ICallbackResponse', [], ['webservices.Interfaces.IResponse'], webservices);

/**
 * ICallbackCreateResponse interface, derived from ICallbackResponse 
 * Provides additional methods: get_participantId(), set_participantId()
 */
webservices.Interfaces.ICallbackCreateResponse = new common.Interface('webservices.Interfaces.ICallbackCreateResponse', ['get_participantId', 'set_participantId'], ['webservices.Interfaces.ICallbackResponse'], webservices);

/**
 * ICallbackStatusResponse interface, derived from ICallbackResponse 
 * Provides additional methods: get_queueWaitTime(), set_queueWaitTime(), 
 * get_assignedAgentName(), get_assignedAgentParticipantId(), set_assignedAgentName(), set_assignedAgentParticipantId(), 
 * get_interactionState(), set_interactionState(), get_estimatedCallbackTime(), set_estimatedCallbackTime(), 
 * get_queuePosition(), set_queuePosition(), get_queueName(), set_queueName(), 
 * get_longestWaitTime(), set_longestWaitTime(), get_interactionsWaitingCount(), set_interactionsWaitingCount(), 
 * get_loggedInAgentsCount(), set_loggedInAgentsCount(), get_availableAgentsCount(), set_availableAgentsCount() 
 */
webservices.Interfaces.ICallbackStatusResponse = new common.Interface('webservices.Interfaces.ICallbackStatusResponse', [ 'get_queueWaitTime', 'set_queueWaitTime', 'get_assignedAgentName', 'get_assignedAgentParticipantId', 'set_assignedAgentName', 'set_assignedAgentParticipantId', 'get_interactionState', 'set_interactionState', 'get_estimatedCallbackTime', 'set_estimatedCallbackTime', 'get_queuePosition', 'set_queuePosition', 'get_queueName', 'set_queueName', 'get_longestWaitTime', 'set_longestWaitTime', 'get_interactionsWaitingCount', 'set_interactionsWaitingCount', 'get_loggedInAgentsCount', 'set_loggedInAgentsCount', 'get_availableAgentsCount', 'set_availableAgentsCount' ], ['webservices.Interfaces.ICallbackResponse'], webservices);

/**
 * ICallbackReconnectResponse interface, derived from ICallbackResponse 
 * Provides additional method: get_participantId(), set_participantId()
 */
webservices.Interfaces.ICallbackReconnectResponse = new common.Interface('webservices.Interfaces.ICallbackReconnectResponse', ['get_participantId', 'set_participantId'], ['webservices.Interfaces.ICallbackResponse'], webservices);

/**
 * IQueueQueryResponse interface, derived from IResponse 
 * Provides additional methods: get_agentsAvailable(), set_agentsAvailable(), get_estimatedWaitTime(), set_estimatedWaitTime()
 */
webservices.Interfaces.IQueueQueryResponse = new common.Interface('webservices.Interfaces.IQueueQueryResponse', ['get_agentsAvailable', 'set_agentsAvailable', 'get_estimatedWaitTime', 'set_estimatedWaitTime'], ['webservices.Interfaces.IResponse'], webservices);

/**
 * IRegistrationResponse interface, derived from IResponse 
 * Provides additional methods: none
 */
webservices.Interfaces.IRegistrationResponse = new common.Interface('webservices.Interfaces.IRegistrationResponse', [], ['webservices.Interfaces.IResponse'], webservices);

/**
 * IServerConfigurationResponse interface, derived from IResponse 
 * Provides additional methods: get_commonCapabilities(), addCommonCapability(), set_commonCapabilities(), get_chatCapabilities(), addChatCapability(), set_chatCapabilities(), get_callbackCapabilities(), addCallbackCapability(), set_callbackCapabilities()
 */
webservices.Interfaces.IServerConfigurationResponse = new common.Interface('webservices.Interfaces.IServerConfigurationResponse', ['get_commonCapabilities', 'addCommonCapability', 'set_commonCapabilities', 'get_chatCapabilities', 'addChatCapability', 'set_chatCapabilities', 'get_callbackCapabilities', 'addCallbackCapability', 'set_callbackCapabilities'], ['webservices.Interfaces.IResponse'], webservices);

/**
 * IPartyInfoResponse interface, derived from IResponse 
 * Provides additional methods: get_name(), set_name(), get_photo(), set_photo() 
 */
webservices.Interfaces.IPartyInfoResponse = new common.Interface('webservices.Interfaces.IPartyInfoResponse', ['get_name', 'set_name', 'get_photo', 'set_photo'], ['webservices.Interfaces.IResponse'], webservices);

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * NotificationBase class 
 *  
 * Base class of objects which other objects may listen for. 
 * Created by NotificationFactory, upon receipt of Events. 
 */
webservices._Internal.NotificationBase = Class.create(common.InterfaceImplementation,
{
    _className : "webservices._Internal.NotificationBase",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("NotificationBase constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.INotification, webservices);
    },
    
	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    get_className : function()
    {
        return this._className;
    }
});


// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * A Notification that the status of a queue has been retrieved.
 */
webservices.QueueStatusNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.QueueStatusNotification",

	/**
     * Constructor 
     *  
     * @param agentsAvailable How many agents are currently available on this queue 
     * @param estimatedWaitTime How long in seconds it is estimated that it will take for an agent to answer an interaction, if it were placed onto the queue now. 
	 */
    initialize : function($super, agentsAvailable, estimatedWaitTime)
    {
        if(arguments.length != 3)
        {
            throw common.ExceptionFactory.createException("QueueStatusNotification constructor called with " + arguments.length + " arguments, but expected 3.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IQueueStatusNotification, webservices);

        this._agentsAvailable = agentsAvailable;
        this._estimatedWaitTime = estimatedWaitTime;
    },

    /**
     * Returns the number of agents available on this queue
     *  
     * @return The number of agents available on this queue 
     */
    get_agentsAvailable : function()
    {
        return this._agentsAvailable;
    },

    /**
     * Returns the queue's estimated wait time, in seconds.
     *  
     * @param estimatedWaitTime How long in seconds it is estimated that it will take for an agent to answer an interaction, if it were placed onto the queue now. 
     */
    get_estimatedWaitTime : function()
    {
        return this._estimatedWaitTime;
    }
});

/**
 * A Notification that an attempt to retrieve the status of a queue has failed.
 */
webservices.QueueStatusFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.QueueStatusFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("QueueStatusFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IQueueStatusFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure. 
     *  
     * @return The error that caused this failure. 
     */
    get_error : function()
    {
        return this._error;
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * NotificationRegistry class 
 *  
 * Allows interested objects to register as observers to receive the various types of notifications. 
 * Receives notifications and forwards them to the interested observers. 
 */
webservices._Internal._NotificationRegistry = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 */
    initialize : function($super, notificationFactory)
    {
        // validate arguments
        var numArgs = 2;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("NotificationRegistry constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.INotificationProcessor, webservices);

        // initialize private members

        this._notificationFactory = notificationFactory;

        /* 
         * Map of "simple" notification name (just a string, not the full class/interface) to array of observer method(s) 
         * to call when a notification of that type is passed to process(). For instance, may contain:
         * { 
         *   "FooNotification" -> [ someClass.processFooNotification, someOtherClass.processFooNotification ],
         *   "BarNotification" -> [ someClass.processBarNotification ]
         * }
         */
        this._notificationSimpleNameToObserverMethods = {};
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        for (var notificationSimpleName in this._notificationSimpleNameToObserverMethods)
        {
            delete this._notificationSimpleNameToObserverMethods[notificationSimpleName];
        }
        this._notificationSimpleNameToObserverMethods = {};

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    /** 
     * This method makes the NotificationRegistry know about a particular 
     * Notification type: how to register observers of it, how to create an instance 
     * of it, how to process an instance of it.  It also creates an observer interface, which observers of the Notification must implement.
     * It relies on a certain convention.  To create and use a notification called "MyNotification": 
     * There shall be an interface IMyNotification, optionally in some namespace.  It must be an instance of common.Interface.INotification.
     * There shall be a class MyNotification, optionally in some namespace.  It must have webservices._Internal.NotificationBase as an ancestor. 
     * MyNotification shall have a data member called _className, whose value is the name of the class (including any package name). 
     *  
     * This method will dynamically create the following: 
     * NotificationRegistry.registerMyNotificationObserver() (deprecated - call registerObserver() directly)
     * NotificationFactory.createMyNotification() - just calls constructorFunction 
     * webservices.Interfaces.IMyNotificationObserver - contains a single method, processMyNotificationObserver(). Objects which wish to listen for MyNotification must implement this interface. 
     *  
     * @param notificationInterface The interface which the notification type must implement. 
     * @param constructorFunction A function which will construct an instance of the Notification. 
     *  
     * Example: 
     * MyPackage.Interfaces.IMyNotification = new common.Interface('MyPackage.Interfaces.IMyNotification', [], ['webservices.Interfaces.INotification']);
     * MyPackage.MyNotification = Class.create(webservices._Internal.NotificationBase,
     * {
     *     _className : "MyPackage.MyNotification", // This must exist!
     *     initialize($super, ...)
     *     {
     *         $super();
     *         this.addImplementedInterface(MyPackage.Interfaces.IMyNotification);
     *         ...do stuff
     *     },
     *     ...other methods
     * };
     *
     * function buildMyNotification() { return new MyPackage.MyNotification(...); } 
     * webservices.NotificationRegistry.registerNotificationType(MyPackage.Interfaces.IMyNotification, buildMyNotification); 
     * myListenerObject.addImplementedInterface(MyPackage.Interfaces.IMyNotification); // myListenerObject has a method processMyNotification() 
     * webservices.NotificationRegistry.registerObserver(myListenerObject, MyPackage.Interfaces.IMyNotification); 
     * ...when something happens...
     * var anInstanceOfMyNotification = webservices.NotificationFactory.createMyNotification(...); // This method is created dynamically by the call to registerNotificationType(), and 
     *                                                                                                           // will call buildMyNotification(). 
     * webservices.NotificationRegistry.process(anInstanceOfMyNotification); // This method is created dynamically by the call to registerNotificationType(). 
     *  
     * Note that a registerMyNotificationObserver(observer) method is created dynamically by the call to registerNotificationType(), but this form is deprecated. 
     * Use the equivalent registerObserver(observer, MyPackage.Interfaces.IMyNotification).
     */ 
    registerNotificationType : function(notificationInterface, constructorFunction)
    {
        var notificationSimpleName = this._getNotificationSimpleName(notificationInterface);

        // Set up array of observers, initially empty
        this._notificationSimpleNameToObserverMethods[notificationSimpleName] = [];

        // Create a register___NotificationObserver() method in this class
        this["register" + notificationSimpleName + "Observer"] = function(observer) {
            common.Debug.traceWarning("Deprecated method register" + notificationSimpleName + "Observer(observer) called. Please switch to the new form, registerObserver(observer, I" + notificationSimpleName + ")");
            this.registerObserver(observer, notificationInterface);
        };

        // Create the observer interface, which any object(s) wishing to observe the new Notification type must implement.
        webservices.Interfaces["I" + notificationSimpleName + "Observer"] = new common.Interface('webservices.Interfaces.I' + notificationSimpleName + 'Observer',
                                                                                                                        ['process' + notificationSimpleName]);

        // Create the factory method
        this._notificationFactory['create' + notificationSimpleName] = constructorFunction;
    },

    /**
     * Cause the observer passed to this method to begin receiving notifications which implement the supplied interface. 
     *  
     * @param observer An object (not a method of that object!) that implements the observer interface that corresponds to notificationInterface. 
     * @param notificationInterface An interface (not an instance that implements that interface!) of a particular Notification type. 
     *  
     * Example: 
     * <code>registerObserver(myClass, webservices.Interfaces.IFooNotification);</code>
     * In this example, <code>myClass</code> must implement <code>IFooNotificationObserver</code>, which means it must have a method <code>processFooNotification()</code>.
	 */
    registerObserver : function(observer, notificationInterface)
    {
        if (!observer)
        {
            throw common.ExceptionFactory.createException("observer is null");
        }

        if (!notificationInterface)
        {
            throw common.ExceptionFactory.createException("notificationInterface is null");
        }

        common.Interface.ensureImplements(observer, notificationInterface);

        var notificationSimpleName = this._getNotificationSimpleName(notificationInterface);

        if (!this._notificationSimpleNameToObserverMethods[notificationSimpleName])
        {
            this._notificationSimpleNameToObserverMethods[notificationSimpleName] = [];
        }

        this._notificationSimpleNameToObserverMethods[notificationSimpleName].push(this._getObserverFunction(observer, notificationSimpleName).bind(observer));
    },

    /**
	 * Receives notifications and dispatches them to observers' methods specific to each notification type. 
	 *  
	 * @param notification A notification. 
     */
    process : function(notification)
    {
        common.Debug.traceMethodEntered("processNotification");

        if (!notification)
        {
            throw common.ExceptionFactory.createException("notification is null");
        }
        
        var notificationSimpleName = this._getNotificationSimpleName(notification);
        var observers = this._notificationSimpleNameToObserverMethods[notificationSimpleName];
        if (observers)
        {
            var exceptions = new Array();
            for(var i = 0; i < observers.length; ++i)
            {
                try
                {
                    observers[i](notification);
                }
                catch(e)
                {
                    common.Debug.traceError("Caught unhandled exception in NotificationRegistry:\n" + e);
                    exceptions.push(e); // Save for later. Continue notifying listeners.
                }
            }
            if (exceptions.length == 1)
            {
                throw exceptions[0];
            } else if (exceptions.length > 1)
            {
                var masterException = new common.ExceptionFactory.createException("Multiple exceptions.");
                masterException.exceptionList = exceptions;
                throw masterException;
            }
        }
        
        common.Debug.traceMethodExited("processNotification");
    },

    // Private methods

    /**
     * Uses reflection to get the method <observer>.process<notificationSimpleName>
     *  
     * @param observer A method that observes this type of notification 
     * @param notificationSimpleName A string like "FooNotification"
     */
    _getObserverFunction : function(observer, notificationSimpleName)
    {
        var observerFunctionName = "process" + notificationSimpleName;
        return observer[observerFunctionName];
    },

    /** 
     * Gets the simple name of a notification type, given its class or interface. 
     * Examples: 
     * _getNotificationSimpleName(webservices.Interfaces.IFooNotification) returns "FooNotification". 
     * _getNotificationSimpleName(webservices.BarNotification, false) returns "BarNotification". 
     *  
     * @param notificationType The class or interface for a particular notification. This is not a string. 
     */ 
    _getNotificationSimpleName : function(notificationTypeOrInterface)
    {
        if (notificationTypeOrInterface instanceof webservices._Internal.NotificationBase)
        {
            var namespaceParts = notificationTypeOrInterface.get_className().split('.');
            var lastNamespacePart = namespaceParts[namespaceParts.length-1];
            return lastNamespacePart;
        } else
        {
            var namespaceParts = notificationTypeOrInterface.get_name().split('.');
            var lastNamespacePart = namespaceParts[namespaceParts.length-1];
            return lastNamespacePart.substring(1); // Chop off the "I"
        }
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * QueueNotificationFactory class 
 *  
 * Creates Notification objects pertaining to queues which other objects may listen for. 
 */
webservices._Internal.QueueNotificationFactory = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("QueueNotificationFactory constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();
    },

    /** 
     * Secondary initializer, to break circular dependency. 
     * webservices.NotificationRegistry.registerNotificationType() requires 
     * webservices.NotificationFactory to already have been constructed. 
     */
    delayedInit : function()
    {
        webservices.QueueNotificationRegistry.registerNotificationType(webservices.Interfaces.IQueueStatusNotification,
            /**
             * Creates a QueueStatusNotification, which contains the number of available agents and estimated wait time. 
             *  
             * @param agentsAvailable How many agents are currently available on this queue 
             * @param estimatedWaitTime How long in seconds it is estimated that it will take for an agent to answer an interaction, if it were placed onto the queue now. 
             * @return QueueStatusNotification 
             */
            function(agentsAvailable, estimatedWaitTime)
            {
                return new webservices.QueueStatusNotification(agentsAvailable, estimatedWaitTime);
            });

        webservices.QueueNotificationRegistry.registerNotificationType(webservices.Interfaces.IQueueStatusFailureNotification,
            /**
             * Creates a QueueStatusFailureNotification, which indicates that an attempt to get a queue's status has failed.
             *  
             * @param error The error that caused the failure 
             * @return QueueStatusFailureNotification 
             */
            function(error)
            {
                return new webservices.QueueStatusFailureNotification(error);
            });
    }
});

// Register namespaces
webservices.registerChildNamespace("Utilities");

/**
 * Utilities class 
 * Provides miscellaneous functionality. 
 */

/**
 * Creates a GUID
 *  
 * @return A GUID 
 */
webservices.Utilities.generateGuid = function()
{
    return (webservices.Utilities._generateGuidToken() + 
            webservices.Utilities._generateGuidToken() +
            "-" +
            webservices.Utilities._generateGuidToken() +
            "-" +
            webservices.Utilities._generateGuidToken() +
            "-" +
            webservices.Utilities._generateGuidToken() +
            webservices.Utilities._generateGuidToken() +
            webservices.Utilities._generateGuidToken());
};

// private method
webservices.Utilities._generateGuidToken = function()
{
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

// Helper for parseOutBaseUrl(), which is currently not used.
// Given "http://www.somewhere.com/someDir/someSubDir/someFile.ext" and "http", will return "http://www.somewhere.com"
webservices.Utilities.parseOutBaseUrlByProtocol = function(url, protocol)
{
    var prefix;
    if(protocol == "file")
    {
        prefix = protocol + ":///";
    }
    else
    {
        prefix = protocol + "://";
    }

    if(url.length > prefix.length)
    {
        if(url.substr(0, prefix.length) == prefix)
        {
            var tokens = url.split("/");
            for(var i = 1; i < tokens.length; ++i)
            {
                if(tokens[i])
                {
                    return prefix + tokens[i];
                }
            }
        }
    }
    
    return null;
};

// Currently not used.
// Given "http://www.somewhere.com/someDir/someSubDir/someFile.ext", will return "http://www.somewhere.com"
// Likewise for https and file URLs.  Case-sensitive, though.
webservices.Utilities.parseOutBaseUrl = function(url)
{
    var baseUrl = webservices.Utilities.parseOutBaseUrlByProtocol(url, "http");
    if(baseUrl)
    {
        return baseUrl;
    }

    var baseUrl = webservices.Utilities.parseOutBaseUrlByProtocol(url, "https");
    if(baseUrl)
    {
        return baseUrl;
    }

    var baseUrl = webservices.Utilities.parseOutBaseUrlByProtocol(url, "file");
    if(baseUrl)
    {
        return baseUrl;
    }

    return url;
};

/**
 * Builds a full URL from the various parts. 
 *  
 * @param protocol "http", "https", "file", etc.
 * @param domain The hostname, such as "www.mycompany.com". 
 * @param port The port on which the server process is running.  Usually 80 for http and 443 for https. 
 * @param uriFragment See lengthy definition in the documentation for the Servers class.
 * @param relativeUrl The part of the URL that comes after the URI fragment.  In this application, it is likely to be one of the constants defined in the CapabilityUrls class. 
 * @return The full URL formed by these parts. 
 */
webservices.Utilities.buildUrlWithProtocolDomainPortUrlFragmentAndRelativeUrl = function(protocol, domain, port, uriFragment, relativeUrl)
{
    return webservices.Utilities.buildUrlWithProtocolDomainPortAndRelativeUrl(protocol, domain, port, webservices.Utilities.combineUriTokens(uriFragment, relativeUrl));
};

/**
 * Builds a full URL from the various parts. 
 *  
 * @param protocol "http", "https", "file", etc.
 * @param domain The hostname, such as "www.mycompany.com".
 * @param port The port on which the server process is running.  Usually 80 for http and 443 for https. 
 * @param relativeUrl The part of the URL that comes after the hostname, such as "someDir/someSubDir/someFile.ext".
 * @return The full URL formed by these parts. 
 */
webservices.Utilities.buildUrlWithProtocolDomainPortAndRelativeUrl = function(protocol, domain, port, relativeUrl)
{
    return webservices.Utilities.combineUriTokens(protocol + "://" + domain + ":" + port, relativeUrl);
};

/**
 * Combines two parts of a URI.  For instance, when passed "http://www.mycompany.com" and "/someDir/someSubDir/someFile.ext", it will 
 * return "http://www.mycompany.com/someDir/someSubDir/someFile.ext".  Or when passed "someDir" and "someSubDir", it 
 * will return "someDir/someSubDir". 
 * 
 * @param uri1 Part of a URI
 * @param uri2 Part of a URI 
 * @return A concatenation of the two parameters, with a "/" inserted between them if necessary. 
 */
webservices.Utilities.combineUriTokens = function(uri1, uri2)
{
	// Either string could be empty.  If so, just return the other one.
	if (!uri1 || 0 === uri1.length)
	{
		return uri2;
	}
	if (!uri2 || 0 === uri2.length)
	{
		return uri1;
	}

    var url = uri1;

	// Insert a slash if neither uri1 nor uri2 contains one
    if((uri2.substring(0, 1) != "/") && (url[url.length - 1] != "/"))
    {
        url += "/";
    }

	// uri1 could end with a slash and/or uri2 could begin with a slash.  Browser probably
	// won't care about a doubled slash, but avoid the possibility anyway.
	if((uri2.substring(0, 1) == "/") && (url[url.length - 1] == "/"))
	{
        url = url.substring(0, url.length - 1);
	}
    url += uri2;
    return url;
};

/**
 * Given a URL, returns the name of the file specified. 
 * For instance, when passed "http://www.mycompany.com/someDir/someSubDir/someFile.ext", it will return "someFile.ext". 
 * When passed "http://www.mycompany.com/someDir/someSubDir/", it will return null. 
 * 
 * @param url A URL 
 * @return The file specified by the URL, with the protocol, domain, and path removed. 
 */
webservices.Utilities.getFileNameFromUrl = function(url)
{
    var tokens = url.split("/");
    if(tokens && (tokens.length > 0))
    {
        return tokens[tokens.length - 1];
    }
    
    return null;
};

/**
 * Indicates whether elevated browser privileges are needed to send an AJAX request. 
 *  
 * @return boolean indicating whether elevated privileges are needed to send an AJAX request. 
 */
webservices.Utilities.needsElevatedPrivileges = function()
{
    return webservices.Utilities.isFireFoxVersionOrHigher(3.5) &&
           (location.protocol == "file:");
};

/**
 * Returns true if the web browser is FireFox, and the version number is higher than the value passed. 
 * Note that only the major and minor version numbers are used here.  Passing a value with two decimal points, such as "3.6.13" 
 * is not supported.
 * 
 * @param requiredVersion An integer or floating point number, such as 3 or 3.6
 * @return false if the web browser is not FireFox.  If the web browser is FireFox, false if the version is less than the value passed, and true if the version is equal to or greater than the version passed. 
 */
webservices.Utilities.isFireFoxVersionOrHigher = function (requiredVersion)
{
    // test for Firefox/x.x or Firefox x.x (ignoring remaining digits)
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
    {
        // capture x.x portion and store as a number
        var version = RegExp.$1;
        version = parseFloat(version);
        return (version >= requiredVersion);
    }

    return false;
};

/**
 * Makes a copy of an array
 * 
 * @param array An array 
 * @return A different array, containing the same elements. 
 */
webservices.Utilities.copyArray = function(array)
{
    var newArray = [];
    for(var i = 0; i < array.length; ++i)
    {
        newArray.push(array[i]);
    }
    return newArray;
};

/**
 * Takes an array, and returns an array containing the same items but in a random order.
 * 
 * @param array An array 
 * @return The same array, but with its items reordered randomly. 
 */
webservices.Utilities.randomizeArray = function(array)
{
    var i = array.length;
    if(i > 0)
    {
        while (--i)
        {
            var j = Math.floor(Math.random() * (i + 1));
            var tempi = array[i];
            var tempj = array[j];
            array[i] = tempj;
            array[j] = tempi;
        }
    }
    return array;
};

/**
 * Takes an array, and returns an webservices.Queue containing the same items. 
 * The first item in the array will be the first one pushed into the Queue.  So, 
 * buildQueueFromArray([1, 2, 3]).pop() will return 3. 
 * 
 * @param array An array 
 * @return A Queue containing the same items as the array. 
 */
webservices.Utilities.buildQueueFromArray = function(array)
{
    var queue = new webservices.Queue();
    for(var i = 0; i < array.length; ++i)
    {
        queue.push(array[i]);
    }
    return queue;
};

/**
 * Returns true if the passed array contains the passed item.
 * 
 * @param array An array
 * @param element Something that may or may not be in the array 
 * @return True if array contains element.  False if array does not contain element.  False if array is null. 
 */
webservices.Utilities.doesArrayHaveElement = function(array, element)
{
    if(!array)
    {
        return false;
    }

    for(var i = 0; i < array.length; ++i)
    {
        if(array[i] == element)
        {
            return true;
        }
    }

    return false;
};

/**
 * Takes a URL and a name/value pair.  Returns the same URL, but with the name/value pair added to the end as a 
 * query string.  Works whether or not other name/value pairs are already at the end of the URL. 
 * Example: appendQueryStringParameterToUrl("http://www.mycompany.com/someDir/someFile", "firstThree", "abc") 
 * will return "http://www.mycompany.com/someDir/someFile?firstThree=abc". 
 * Example: appendQueryStringParameterToUrl("http://www.mycompany.com/someDir/someFile?firstThree=abc", "lastThree", "xyz") 
 * will return "http://www.mycompany.com/someDir/someFile?firstThree=abc&lastThree=xyz". 
 *  
 * @param url A URL
 * @param name The name portion of a name/value pair
 * @param value The value portion of a name/value pair
 */
webservices.Utilities.appendQueryStringParameterToUrl = function(url, name, value)
{
    // copy the whole url except for the ending # char if it's there
    var newUrl = webservices.Utilities.removeEndingPoundCharacter(url);

    // if this is the first query string parameter, need to add the ? char
    // else this is just another query string parameter, need to add the & char
    if(url.indexOf("?") == -1)
    {
        newUrl += "?";
    }
    else
    {
        newUrl += "&";
    }

    // finally add the query string name and value
    newUrl += name + "=" + value;

    return newUrl;
};

/**
 * Takes a URL (or any string).  If it does not end with a '#' character, returns the same string.  If it 
 * does end with a pound character, the return value will be the string with the '#' character removed. 
 * 
 * @param url A URL (or any string) 
 * @return The URL, but with the ending '#' character removed.  If the passed URL did not end with '#', then the passed URL will be returned as-is. 
 */
webservices.Utilities.removeEndingPoundCharacter = function(url)
{
    if(url[url.length - 1] == "#")
    {
        return url.substr(0, url.length - 1);
    }

    return url;
};

/**
 * Escapes HTML, by doing the following: 
 * Converts ampersands to &amp; 
 * Converts less-than signs to &lt; 
 * Converts greater-than signs to &gt; 
 * 
 * @param str The string which may contain HTML.
 * @return The same string, but with the HTML escaped. 
 */
webservices.Utilities.escapeHTML = function(str)
{
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    return str;
};

/**
 * Returns a random integer in the supplied range.
 * 
 * @param min The minimum number to return
 * @param max The maximum number to return
 */
webservices.Utilities.randomInRange = function(min, max)
{
    // Check to see if caller specified the params in the wrong order
    if (max < min)
    {
        return webservices.Utilities.randomInRange(max, min);
    }

    return min + Math.round(Math.random() * (max-min));
};

/**
 * Returns true if the browser is Microsoft Internet Explorer.  Returns false otherwise. 
 *  
 * @return Boolean 
 */
webservices.Utilities.isBrowserIE = function()
{
    return (navigator.appName == 'Microsoft Internet Explorer');
};


/**
 * Class to implement a basic Queue.
 */
webservices.Queue = Class.create({
    
	/**
	 * Constructor
	 */
    initialize : function()
    {
        this._nextIndex = 0;
        this._map = new common.Map();
    },
   
	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._map.destroy();
    },

	/**
	 * Push something onto the queue
	 * 
	 * @param value This will be pushed onto the queue
	 */
    push : function(value)
    {
        this._map.put(this._nextIndex++, value);
    },

	/**
	 * Pop something off of the queue
	 * 
	 * @param key Ignored
	 */
    pop : function(key)
    {
        if(this._map.isEmpty())
        {
            return null;
        }

        var key = this._map.firstKey();
        var value = this._map.firstObject();
        this._map.remove(key);
        return value;
    }
});

/**
 * Class to implement a basic Collection.
 */
webservices.Collection = Class.create({
	/**
	 * Constructor
	 * 
	 * @param array Optional.  If supplied, the items in the array will be added to the newly-constructed Collection.
	 */
    initialize : function(array)
    {
        common.ParameterValidation.validate([array], [ {"type": Array, "required": false, "allowEmpty": true} ]);

        this._nextIndex = 0;
        this._map = new common.Map();

        if(array)
        {
            for(var i = 0; i < array.length; ++i)
            {
                this.add(array[i]);
            }
        }
    },
   
	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._map.destroy();
    },

	/**
	 * Adds an item to the Collection
	 * 
	 * @param item The item to add to the Collection
	 */
    add : function(item)
    {
        this._map.put(item, 1);
    },

	/**
	 * Removes an item from the Collection
	 * 
	 * @param item The item to remove from the Collection
	 */
    remove : function(item)
    {
        if(this._map.isEmpty())
        {
            return null;
        }

        if(this._map.containsKey(item))
        {
            this._map.remove(item);
        }
        else
        {
            throw common.ExceptionFactory.createException(item);
        }
    },

	/**
	 * Returns the size of the Collection
	 *  
	 * @return The number of items in the collection 
	 */
    size : function()
    {
        return this._map.size();
    }
});

/**
 * A class to implement mutual exclusion.
 * Based on <a href="http://en.wikipedia.org/wiki/Lamport%27s_bakery_algorithm">Lamport's bakery algorithm</a>
 */
webservices.Mutex = Class.create({
    s_waitInterval: 50,

    m_map: new common.Map(),

	/**
	 * Constructor
	 * 
	 * @param whatToDo A callback to a function that acts as the critical section, i.e. will be executed with mutual exclusion
	 */
    initialize: function(whatToDo/*, callbackToCallWhenItsDone*/) {
        common.Debug.traceNote("In webservices.Mutex.initialize()");
        this.execute = whatToDo;
        /*this.onCompleted = callbackToCallWhenItsDone;*/
        this.id = ++(webservices.Mutex.s_maxIDSoFar);
        common.Debug.traceNote("Created new Mutex, assigned id: " + this.id);

        // Get <code>number</code>. Instead of global arrays for <code>entering</code> and <code>number</code> as
        // described in the algorithm, use member variables.  The various "threads"' values for <code>number</code>
        // don't need to be consecutive integers...they just need to be pretty close to unique, and able to be ordered.
        this.entering = 1;
        this.number = new Date().getTime();
        common.Debug.traceNote("Thread #" + this.id + " picked a number: " + this.number);
        this.entering = 0;

        this.m_map.put(this.id, this);
        this._waitOnLowerThreadsThenDoCriticalSection(this.m_map.firstKey());
    },

	// private methods

    /** 
     * In the algorithm, there are places where we wait for other "threads" to do something.
     * Busy-waiting is a bad idea in Javascript, and the language has no sleep() or yield().
     * So, this is implemented in the form of a continuation.
     */
    _waitOnLowerThreadsThenDoCriticalSection: function(nextID) {
        common.Debug.traceNote("Thread #" + this.id + " entering waitOnLowerThreadsThenDoCriticalSection(" + nextID + ")");
        for (var j = nextID; j !== null; j = this.m_map.nextKey(j)) {
            common.Debug.traceNote("Thread #" + this.id + " in for loop, j=" + j);
            var jthThread = this.m_map.get(j);
            if ((jthThread.entering) || ((jthThread.number !== 0) &&
                                         ((jthThread.number < this.number) ||
                                          ((jthThread.number == this.number) && (jthThread.id < this.id))))) {
                common.Debug.traceNote("Thread #" + this.id + " going to wait for " + j + "'th thread to do its thing");
                // jthThread is doing its critical section.  Wait until it's done.
                // Since this is Javascript, that means using setTimeout to call a
                // continuation of the current state.

                // Can't do <code>setTimeout("waitOnLowerThreadsThenDoCriticalSection(" + j + ")", this.s_waitInterval)</code>.
                // This is because setTimeout() doesn't work well with object methods. But, we can create a
                // locally-scoped variable, which the passed function will still be able to see.
                var _self = this;
                window.setTimeout(function() { return _self.waitOnLowerThreadsThenDoCriticalSection(j); }, this.s_waitInterval);
                return; // Don't allow the critical section code below to run right now.
            }
        }

        common.Debug.traceNote("Thread #" + this.id + " gained exclusivity");
        // do critical section
        var returnValue = this.execute();

        // clean up, and release the lock
        this.m_map.remove(this.id);
        this.number = 0;

        common.Debug.traceNote("Thread #" + this.id + " finished critical section, return value was: " + returnValue);

        /*
        // if caller wants to be informed of the return value, do that
        if (this.onCompleted) {
            this.onCompleted(returnValue);
        }
        */
    }
});

/**
 * The highest ID given out so far to any webservices.MutexCriticalSection.
 */
webservices.Mutex.s_maxIDSoFar = -1;

// Register namespaces
webservices.registerChildNamespace("Servers.Current");

/**
 * Servers class 
 *  
 * Keeps track of webservers and URLs used.
 *  
 * The term "URI Fragment" is used frequently here.  Most customers do not want their IC servers to be visible to the public.  They will 
 * keep them behind a firewall.  So in order for the Javascript client to send requests to an IC server (specifically the 
 * WebProcessorBridge.exe process), the Javascript is served from a webserver outside the firewall, and firewall rules are configured 
 * to allow that webserver to act as a reverse proxy by sending requests from clients to WebProcessorBridge. 
 * "URI fragment" refers to the portion of a URL which the webserver has been configured to recognize to indicate that the request 
 * should be reverse proxied. 
 * Example: 
 * The IC server is running on ic.mycompany.com.  WebProcessorBridge is listening on port 8114 of this machine. 
 * The webserver is www.mycompany.com.  The reverse proxy is configured such that requests of the form 
 * http://www.mycompany.com/I3Root/Server1/* will be reverse proxied to http://ic.mycompany.com:8114/* 
 * For instance, if the client requests http://www.mycompany.com/I3Root/Server1/websvcs/serverConfiguration, the webserver will 
 * then request http://ic.mycompany.com:8114/websvcs/serverConfiguration from the IC server, wait for the IC server's response, and 
 * then send the IC server's response to the client. 
 * In this example, "I3Root/Server1" is termed the "URI fragment". 
 */

/** Whether the communcation between the browser and the webserver should use HTTPS.  If false, HTTP will be used. */
webservices.Servers.UseHttps = false;

/** The domain (i.e. hostname) of the webserver that served this Javascript. */
webservices.Servers.Domain = document.domain;

/** The port of the webserver that served this Javascript. If a nonstandard one like 8888 is used, use that. Otherwise use 80 for HTTP or 443 for HTTPS. */
webservices.Servers.Port = document.location.port ? document.location.port : ( document.location.protocol == "http:" ? 80 : 443 );

/** The string that was the URI fragment (see above for definition) at the start of this session. */
webservices.Servers.OriginalUriFragment = "";

/** The URI fragment that is currently in use.  May change if a switchover occurs. */
webservices.Servers.CurrentUriFragment = "";

/** 
 * The set of possible URI fragments that may be used. Should match the URI fragments that are configured on the webserver 
 * to trigger reverse proxying to IC servers.
 */
webservices.Servers.UriFragments = [];

/**
 * Builds the full URL at which to access some Capability 
 *  
 * @param uriFragment A URI fragment.  See above for definition of the term.
 * @param relativeUrl The portion of the URI that identifies the Capability being accessed.  Comes after the URI fragment described above.  See definition in the Capability class.
 */
webservices.Servers.buildUrl = function(uriFragment, relativeUrl)
{
    var protocol;
    if(webservices.Servers.UseHttps)
    {
        protocol = "https";
    }
    else
    {
        protocol = "http";
    }

    return webservices.Utilities.buildUrlWithProtocolDomainPortUrlFragmentAndRelativeUrl(protocol, webservices.Servers.Domain, webservices.Servers.Port, uriFragment, relativeUrl);
};

/**
 * Returns how many IC servers the client knows about.
 * For now, this will always either return 1 or 2.
 */
webservices.Servers.get_numberOfServers = function()
{
    return webservices.Servers.UriFragments.length;
}

/**
 * Returns a boolean indicating whether or not a switchover pair has been configured. 
 *  
 * @return true if this server knows about 2 different URI fragments.  False otherwise. 
 */
webservices.Servers.isConfiguredForSwitchover = function()
{
    return (2 == webservices.Servers.get_numberOfServers());
};

/**
 * Switches which URI fragment will be used for requests to the IC server
 */
webservices.Servers.switchCurrentServer = function()
{
    if(webservices.Servers.isConfiguredForSwitchover())
    {
        if(webservices.Servers.CurrentUriFragment == webservices.Servers.UriFragments[0])
        {
            webservices.Servers.CurrentUriFragment = webservices.Servers.UriFragments[1];
        }
        else
        {
            webservices.Servers.CurrentUriFragment = webservices.Servers.UriFragments[0];
        }
    }    
};

/**
 * Indicates whether a switchover has occurred.
 *  
 * @return true if switchover has occurred (i.e. URI fragment currently in use is not the one that was in use at the start of the session), false otherwise. 
 */
webservices.Servers.isCurrentServerTheOriginalServer = function()
{
    return (webservices.Servers.CurrentUriFragment == webservices.Servers.OriginalUriFragment);
};


// Register namespaces
webservices.registerChildNamespace("HttpMethods");

/**
 * Constant to represent the HTTP "GET" method
 */
webservices.HttpMethods.GET = "GET";

/**
 * Constant to represent the HTTP "POST" method
 */
webservices.HttpMethods.POST = "POST";

/**
 * Constant to represent the HTTP "HEAD" method
 */
webservices.HttpMethods.HEAD = "HEAD";

/**
 * Constant to represent the HTTP "DELETE" method
 */
webservices.HttpMethods.DELETE = "DELETE";

// Register namespace
webservices.registerChildNamespace("CapabilityUrls.Common");

// Constants for the Common Capability URLs

/** 
 * Constant for the server configuration URL. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Common.SERVERCONFIGURATION = "websvcs/serverConfiguration";

/** 
 * Constant for the tracker registration URL. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Common.TRACKERREGISTRATION = "websvcs/register";

/** 
 * Constant for the URL to get info (name and picture) about an agent
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Common.PARTYINFO = "websvcs/partyInfo";

// Register namespace
webservices.registerChildNamespace("CapabilityUrls.QueueQuery");

// Constant for the Queue Query Capability URL

/** 
 * Constant for the queue query URL. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.QueueQuery.QUERY = "websvcs/queue/query";

// Register namespace
webservices.registerChildNamespace("CapabilityUrls.Chat");

// Constants for the Chat Capability URLs

/** 
 * Constant for the URL to start a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.START = "websvcs/chat/start";

/** 
 * Constant for the URL to reconnect to a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.RECONNECT = "websvcs/chat/reconnect";

/** 
 * Constant for the URL to poll a chat for new messages. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.POLL = "websvcs/chat/poll";

/** 
 * Constant for the URL to send a message within a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.SENDMESSAGE = "websvcs/chat/sendMessage";

/** 
 * Constant for the URL to send a typing indicator within a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.SETTYPINGSTATE = "websvcs/chat/setTypingState";

/** 
 * Constant for the URL to exit a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.EXIT = "websvcs/chat/exit";

/** 
 * Constant for the URL to retrieve a file within a chat. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Chat.GETFILE = "websvcs/chat/getFile";

/** 
 * Constant for the URL to send a report of the chat's problem to WebProcessorBridge
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Common.PROBLEMREPORT = "websvcs/problemReport";

// Register namespace
webservices.registerChildNamespace("CapabilityUrls.Callback");

// Constants for the Callback Capability URLs

/** 
 * Constant for the URL to create a callback.
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Callback.CREATE = "websvcs/callback/create";

/** 
 * Constant for the URL to query the status of a callback.
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Callback.STATUS = "websvcs/callback/status";

/** 
 * Constant for the URL to reconnect to a callback.  In other words, bring a 
 * previously-created callback into the current web session so it can be modified, 
 * queried, or disconnected. 
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Callback.RECONNECT = "websvcs/callback/reconnect";

/** 
 * Constant for the URL to disconnect a callback (in other words, remove the interaction from the queue, 
 * so the visitor will not get called back).
 * The complete URL is: http://(server)/(uriFragment)/(this_constant)
 */ 
webservices.CapabilityUrls.Callback.DISCONNECT = "websvcs/callback/disconnect";

/**
 * Capability class 
 *  
 * A Capability represents a piece of functionality that the client and server both know how to do. 
 * For instance, sending a message within a chat, or creating a callback. 
 * The client queries the server for its capabilities, and then knows to only utilize the capabilities which both client and server share. 
 * Each capability can be reached by sending an HTTP GET, POST, HEAD, or DELETE request to a certain URL of the format
 * http://(server)/(uriFragment)/(relative URL indicating the type of capability) 
 * For instance, http://www.company.com/I3Root/Server1/websvcs/callback/create 
 * This class maintains a pairing of the relative URL (defined in CapabilityUrls) and the HTTP method. 
 */
webservices.Capability = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param relativeUrl The relative URL that is used to invoke this capability
	 * @param method Whether the URL should be requested via an HTTP GET, POST, HEAD, or DELETE request
	 */
    initialize : function($super, relativeUrl, method)
    {
        var numArgs = 3;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("Capability constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICapability, webservices);

        this._validateUrl(relativeUrl);
        this._relativeUrl = relativeUrl;
        this._validateMethod(method);
        this._method = method;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._relativeUrl = null;
        this._method = null;
        
        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Getter for the relative URL property 
	 * @return A string.  In the default implementation, this will always be one of the constants defined in CapabilityUrls. 
	 */
    get_relativeUrl : function()
    {
        return this._relativeUrl;
    },

	/**
	 * Getter for the method property
	 * 
	 * @return A constant (from webservices.HttpMethods) indicating whether an HTTP GET, POST, HEAD, or DELETE shall be used to request the relative URL. 
	 */
    get_method : function()
    {
        return this._method;
    },
    
    toString : function()
    {
        return "&lt;Capability: " + this._method + ", " + this._relativeUrl + "&gt;";
    },

    // private methods

    _validateUrl : function(url)
    {
        if((url != webservices.CapabilityUrls.Common.SERVERCONFIGURATION) &&
           (url != webservices.CapabilityUrls.Common.TRACKERREGISTRATION) &&
           (url != webservices.CapabilityUrls.Common.PROBLEMREPORT) &&
           (url != webservices.CapabilityUrls.Common.PARTYINFO) &&
           (url != webservices.CapabilityUrls.QueueQuery.QUERY) &&
           (url != webservices.CapabilityUrls.Chat.START) &&
           (url != webservices.CapabilityUrls.Chat.RECONNECT) &&
           (url != webservices.CapabilityUrls.Chat.POLL) &&
           (url != webservices.CapabilityUrls.Chat.SENDMESSAGE) &&
           (url != webservices.CapabilityUrls.Chat.SETTYPINGSTATE) &&
           (url != webservices.CapabilityUrls.Chat.EXIT) &&
           (url != webservices.CapabilityUrls.Chat.GETFILE) &&
           (url != webservices.CapabilityUrls.Callback.CREATE) &&
           (url != webservices.CapabilityUrls.Callback.STATUS) &&
           (url != webservices.CapabilityUrls.Callback.RECONNECT) &&
           (url != webservices.CapabilityUrls.Callback.DISCONNECT))
        {
            throw common.ExceptionFactory.createException(url + " is not a capability url");
        }
    },

    _validateMethod : function(method)
    {
        if((method != webservices.HttpMethods.GET) &&
           (method != webservices.HttpMethods.POST) &&
           (method != webservices.HttpMethods.HEAD) &&
           (method != webservices.HttpMethods.DELETE))
        {
            throw common.ExceptionFactory.createException(method + " is not a valid method");
        }
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal._CapabilityRepository");
webservices.registerChildNamespace("CapabilityRepository");

/** 
 * CapabilityRepository class 
 *  
 * Keeps track of which Capabilities are enabled or disabled, and provides getter methods for the various Capabilities. 
 */
webservices._Internal._CapabilityRepository = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("CapabilityRepository constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        // initialization
        this._chatTrackerAuthenticationCapability = false;
        this._chatStsAuthenticationCapability = false;
        this._chatAnonymousAuthenticationCapability = false;
        this._callbackTrackerAuthenticationCapability = false;
        this._callbackStsAuthenticationCapability = false;
        this._callbackAnonymousAuthenticationCapability = false;
        this._queueQueryTrackerAuthenticationCapability = null;
        this._queueQueryStsAuthenticationCapability = null;
        this._queueQueryAnonymousAuthenticationCapability = null;
        
        this._serverConfigurationCapability = null;
        this._trackerRegistrationCapability = null;
        this._partyInfoCapability = null;
        this._startChatCapability = null;
        this._reconnectChatCapability = null;
        this._pollCapability = null;
        this._sendMessageCapability = null;
        this._setTypingStateCapability = null;
        this._exitCapability = null;
        this._problemReportCapability = null;
        this._createCallbackCapability = null;
        this._callbackStatusCapability = null;
        this._reconnectCallbackCapability = null;
        this._disconnectCallbackCapability = null;
        
        // hardcode the Server Configuration Capability
        this._serverConfigurationCapability = new webservices.Capability(webservices.CapabilityUrls.Common.SERVERCONFIGURATION,
                                                                             webservices.HttpMethods.GET);
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._serverConfigurationCapability)
        {
            this._serverConfigurationCapability.destroy();
            delete this._serverConfigurationCapability;
            this._serverConfigurationCapability = null;
        }

        if(this._startChatCapability)
        {
            this._startChatCapability.destroy();
            delete this._startChatCapability;
            this._startChatCapability = null;
        }

        if(this._reconnectChatCapability)
        {
            this._reconnectChatCapability.destroy();
            delete this._reconnectChatCapability;
            this._reconnectChatCapability = null;
        }

        if(this._pollCapability)
        {
            this._pollCapability.destroy();
            delete this._pollCapability;
            this._pollCapability = null;
        }

        if(this._sendMessageCapability)
        {
            this._sendMessageCapability.destroy();
            delete this._sendMessageCapability;
            this._sendMessageCapability = null;
        }

        if(this._setTypingStateCapability)
        {
            this._setTypingStateCapability.destroy();
            delete this._setTypingStateCapability;
            this._setTypingStateCapability = null;
        }

        if(this._exitCapability)
        {
            this._exitCapability.destroy();
            delete this._exitCapability;
            this._exitCapability = null;
        }

        if(this._problemReportCapability)
        {
            this._problemReportCapability.destroy();
            delete this._problemReportCapability;
            this._problemReportCapability = null;
        }

        if(this._createCallbackCapability)
        {
            this._createCallbackCapability.destroy();
            delete this._createCallbackCapability;
            this._createCallbackCapability = null;
        }

        if(this._callbackStatusCapability)
        {
            this._callbackStatusCapability.destroy();
            delete this._callbackStatusCapability;
            this._callbackStatusCapability = null;
        }

        if(this._reconnectCallbackCapability)
        {
            this._reconnectCallbackCapability.destroy();
            delete this._reconnectCallbackCapability;
            this._reconnectCallbackCapability = null;
        }

        if(this._disconnectCallbackCapability)
        {
            this._disconnectCallbackCapability.destroy();
            delete this._disconnectCallbackCapability;
            this._disconnectCallbackCapability = null;
        }

        if(this._queueQueryTrackerAuthenticationCapability)
        {
            this._queueQueryTrackerAuthenticationCapability.destroy();
            delete this._queueQueryTrackerAuthenticationCapability;
            this._queueQueryTrackerAuthenticationCapability = null;
        }

        if(this._queueQueryStsAuthenticationCapability)
        {
            this._queueQueryStsAuthenticationCapability.destroy();
            delete this._queueQueryStsAuthenticationCapability;
            this._queueQueryStsAuthenticationCapability = null;
        }

        if(this._queueQueryAnonymousAuthenticationCapability)
        {
            this._queueQueryAnonymousAuthenticationCapability.destroy();
            delete this._queueQueryAnonymousAuthenticationCapability;
            this._queueQueryAnonymousAuthenticationCapability = null;
        }

        if(this._trackerRegistrationCapability)
        {
            this._trackerRegistrationCapability.destroy();
            delete this._trackerRegistrationCapability;
            this._trackerRegistrationCapability = null;
        }

        if(this._partyInfoCapability)
        {
            this._partyInfoCapability.destroy();
            delete this._partyInfoCapability;
            this._partyInfoCapability = null;
        }

        this._chatTrackerAuthenticationCapability = null;
        this._chatStsAuthenticationCapability = null;
        this._chatAnonymousAuthenticationCapability = null;
        this._callbackTrackerAuthenticationCapability = null;
        this._callbackStsAuthenticationCapability = null;
        this._callbackAnonymousAuthenticationCapability = null;

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods
	
	/**
	 * Getter for the Capability for querying the server's capabilities. 
	 * Always available, so there are no enableServerConfigurationCapability() or disableServerConfigurationCapability() methods.
	 *  
	 * @return Capability, or null
	 */
    get_serverConfigurationCapability : function()
    {
        return this._serverConfigurationCapability;
    },

	/**
	 * Returns true or false, depending on whether the Capability to start a Chat is enabled. 
	 *  
	 * @return True if Chats can be started, false otherwise. 
	 */
    isStartChatCapabilityEnabled : function()
    {
       return (this._startChatCapability !== null);
    },

	/**
	 * Getter for the Capability for starting a chat
	 *  
	 * @return Capability, or null
	 */
    get_startChatCapability : function()
    {
        return this._startChatCapability;
    },

	/**
	 * Enables the Capability to start a chat
	 */
    enableStartChatCapability : function()
    {
        if(!this._startChatCapability)
        {
            this._startChatCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.START,
                                                                             webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to start a chat
	 */
    disableStartChatCapability : function()
    {
        this._startChatCapability = null;
    },

	/**
	 * Getter for the Capability for reconnecting to a chat
	 *  
	 * @return Capability, or null
	 */
    get_reconnectChatCapability : function()
    {
        return this._reconnectChatCapability;
    },

	/**
	 * Enables the Capability to reconnect to a chat
	 */
    enableReconnectChatCapability : function()
    {
        if(!this._reconnectChatCapability)
        {
            this._reconnectChatCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.RECONNECT,
                                                                                 webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to reconnect to a chat
	 */
    disableReconnectChatCapability : function()
    {
        this._reconnectChatCapability = null;
    },

	/**
	 * Getter for the Capability for polling a chat (i.e. checking for new messages or events)
	 *  
	 * @return Capability, or null
	 */
    get_pollCapability : function()
    {
        return this._pollCapability;
    },

	/**
	 * Enables the Capability to poll a chat
	 */
    enablePollCapability : function()
    {
        if(!this._pollCapability)
        {
            this._pollCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.POLL,
                                                                            webservices.HttpMethods.GET);
        }
    },

	/**
	 * Disables the Capability to poll a chat
	 */
    disablePollCapability : function()
    {
        this._pollCapability = null;
    },

	/**
	 * Getter for the Capability for sending a message within a chat
	 *  
	 * @return Capability, or null
	 */
    get_sendMessageCapability : function()
    {
        return this._sendMessageCapability;
    },

	/**
	 * Enables the Capability to send a message within a chat
	 */
    enableSendMessageCapability : function()
    {
        if(!this._sendMessageCapability)
        {
            this._sendMessageCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.SENDMESSAGE,
                                                                                   webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to send a message within a chat
	 */
    disableSendMessageCapability : function()
    {
        this._sendMessageCapability = null;
    },

	/**
	 * Getter for the Capability for setting a typing indicator within a chat
	 *  
	 * @return Capability, or null
	 */
    get_setTypingStateCapability : function()
    {
        return this._setTypingStateCapability;
    },

	/**
	 * Enables the Capability to set a typing indicator within a chat
	 */
    enableSetTypingStateCapability : function()
    {
        if(!this._setTypingStateCapability)
        {
            this._setTypingStateCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.SETTYPINGSTATE,
                                                                                      webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to set a typing indicator within a chat
	 */
    disableSetTypingStateCapability : function()
    {
        this._setTypingStateCapability = null;
    },

	/**
	 * Getter for the Capability for exiting a chat
	 *  
	 * @return Capability, or null
	 */
    get_exitCapability : function()
    {
        return this._exitCapability;
    },

	/**
	 * Enables the Capability to exit a chat
	 */
    enableExitCapability : function()
    {
        if(!this._exitCapability)
        {
            this._exitCapability = new webservices.Capability(webservices.CapabilityUrls.Chat.EXIT,
                                                                            webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to exit a chat
	 */
    disableExitCapability : function()
    {
        this._exitCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to send a problem report is enabled. 
	 *  
	 * @return True if problem reports can be sent, false otherwise. 
	 */
    isProblemReportCapabilityEnabled : function()
    {
       return (this._problemReportCapability !== null);
    },

    /** 
     * Gets the capability for sending a problem report to the IC server 
     */ 
    get_problemReportCapability : function()
    {
        return this._problemReportCapability;
    },

    /** 
     * Enables the capability of sending a problem report to the IC server
     */ 
    enableProblemReportCapability : function()
    {
        if(!this._problemReportCapability)
        {
            this._problemReportCapability = new webservices.Capability(webservices.CapabilityUrls.Common.PROBLEMREPORT,
                                                                                    webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability of sending a problem report to the IC server
	 */
    disableProblemReportCapability : function()
    {
        this._problemReportCapability = null;
    },
    
	/**
	 * Returns true or false, depending on whether the Capability to create a Callback is enabled. 
	 *  
	 * @return True if Callbacks can be created, false otherwise. 
	 */
    isCreateCallbackCapabilityEnabled : function()
    {
       return (this._createCallbackCapability !== null);
    },

	/**
	 * Getter for the Capability for creating a Callback
	 *  
	 * @return Capability, or null
	 */
    get_createCallbackCapability : function()
    {
        return this._createCallbackCapability;
    },

	/**
	 * Enables the Capability to create a Callback
	 */
    enableCreateCallbackCapability : function()
    {
        if(!this._createCallbackCapability)
        {
            this._createCallbackCapability = new webservices.Capability(webservices.CapabilityUrls.Callback.CREATE,
                                                                            webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to create a Callback
	 */
    disableCreateCallbackCapability : function()
    {
        this._createCallbackCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to query the status of a Callback is enabled. 
	 *  
	 * @return True if Callbacks' status can be queried, false otherwise. 
	 */
    isCallbackStatusCapabilityEnabled : function()
    {
       return (this._callbackStatusCapability !== null);
    },

	/**
	 * Getter for the Capability for querying the status of a Callback
	 *  
	 * @return Capability, or null
	 */
    get_callbackStatusCapability : function()
    {
        return this._callbackStatusCapability;
    },

	/**
	 * Enables the Capability to query the status of a Callback
	 */
    enableCallbackStatusCapability : function()
    {
        if(!this._callbackStatusCapability)
        {
            this._callbackStatusCapability = new webservices.Capability(webservices.CapabilityUrls.Callback.STATUS,
                                                                            webservices.HttpMethods.GET);
        }
    },

	/**
	 * Disables the Capability to query the status of a Callback
	 */
    disableCallbackStatusCapability : function()
    {
        this._callbackStatusCapability = null;
    },

	/**
     * Returns true or false, depending on whether the Capability to reconnect a Callback is enabled. 
     * Reconnecting means to bring a previously-created Callback into the current web session, 
     * so that operations may be performed upon it. 
	 *  
	 * @return True if Callbacks can be reconnected, false otherwise. 
	 */
    isReconnectCallbackCapabilityEnabled : function()
    {
       return (this._reconnectCallbackCapability !== null);
    },

	/**
	 * Getter for the Capability for reconnecting a Callback
	 *  
	 * @return Capability, or null
	 */
    get_reconnectCallbackCapability : function()
    {
        return this._reconnectCallbackCapability;
    },

	/**
	 * Enables the Capability to reconnect a Callback
	 */
    enableReconnectCallbackCapability : function()
    {
        if(!this._reconnectCallbackCapability)
        {
            this._reconnectCallbackCapability = new webservices.Capability(webservices.CapabilityUrls.Callback.RECONNECT,
                                                                            webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to reconnect a Callback
	 */
    disableReconnectCallbackCapability : function()
    {
        this._reconnectCallbackCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to disconnect a Callback is enabled. 
	 *  
	 * @return True if Callbacks can be disconnected, false otherwise. 
	 */
    isDisconnectCallbackCapabilityEnabled : function()
    {
       return (this._disconnectCallbackCapability !== null);
    },

	/**
	 * Getter for the Capability for disconnecting a Callback
	 *  
	 * @return Capability, or null
	 */
    get_disconnectCallbackCapability : function()
    {
        return this._disconnectCallbackCapability;
    },

	/**
	 * Enables the Capability to disconnect a Callback
	 */
    enableDisconnectCallbackCapability : function()
    {
        if(!this._disconnectCallbackCapability)
        {
            this._disconnectCallbackCapability = new webservices.Capability(webservices.CapabilityUrls.Callback.DISCONNECT,
                                                                            webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to disconnect a Callback
	 */
    disableDisconnectCallbackCapability : function()
    {
        this._disconnectCallbackCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to query a queue anonymously is enabled. 
	 *  
	 * @return True if querying a queue anonymously is possible, false otherwise. 
	 */
    isQueueQueryAnonymousAuthenticationCapabilityEnabled : function()
    {
       return (this._queueQueryAnonymousAuthenticationCapability !== null);
    },

	/**
	 * Getter for the Capability for querying a queue anonymously
	 *
	 * @return Capability, or null
	 */
    get_queueQueryAnonymousAuthenticationCapability : function()
    {
        return this._queueQueryAnonymousAuthenticationCapability;
    },

	/**
	 * Enables the Capability to query a queue anonymously
	 */
    enableQueueQueryAnonymousAuthenticationCapability : function()
    {
        if(!this._queueQueryAnonymousAuthenticationCapability)
        {
            this._queueQueryAnonymousAuthenticationCapability = new webservices.Capability(webservices.CapabilityUrls.QueueQuery.QUERY,
                                                                                                         webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to query a queue anonymously
	 */
    disableQueueQueryAnonymousAuthenticationCapability : function()
    {
        this._queueQueryAnonymousAuthenticationCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to query a queue with Tracker is enabled. 
	 *  
	 * @return True if querying a queue with Tracker is possible, false otherwise. 
	 */
    isQueueQueryTrackerAuthenticationCapabilityEnabled : function()
    {
       return (this._queueQueryTrackerAuthenticationCapability !== null);
    },

	/**
	 * Getter for the Capability for querying a queue via Tracker
	 *
	 * @return Capability, or null
	 */
    get_queueQueryTrackerAuthenticationCapability : function()
    {
        return this._queueQueryTrackerAuthenticationCapability;
    },

	/**
	 * Enables the Capability to query a queue via Tracker
	 */
    enableQueueQueryTrackerAuthenticationCapability : function()
    {
        if(!this._queueQueryTrackerAuthenticationCapability)
        {
            this._queueQueryTrackerAuthenticationCapability = new webservices.Capability(webservices.CapabilityUrls.QueueQuery.QUERY,
                                                                                                       webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to query a queue via Tracker
	 */
    disableQueueQueryTrackerAuthenticationCapability : function()
    {
        this._queueQueryTrackerAuthenticationCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to query a queue with STS is enabled. 
	 *  
	 * @return True if querying a queue with STS is possible, false otherwise. 
	 */
    isQueueQueryStsAuthenticationCapabilityEnabled : function()
    {
       return (this._queueQueryStsAuthenticationCapability !== null);
    },

	/**
	 * Getter for the Capability for querying a queue via STS
	 *
	 * @return Capability, or null
	 */
    get_queueQueryStsAuthenticationCapability : function()
    {
        return this._queueQueryStsAuthenticationCapability;
    },

	/**
	 * Enables the Capability to query a queue via STS
	 */
    enableQueueQueryStsAuthenticationCapability : function()
    {
        if(!this._queueQueryStsAuthenticationCapability)
        {
            this._queueQueryStsAuthenticationCapability = new webservices.Capability(webservices.CapabilityUrls.QueueQuery.QUERY,
                                                                                                   webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to query a queue via STS
	 */
    disableQueueQueryStsAuthenticationCapability : function()
    {
        this._queueQueryStsAuthenticationCapability = null;
    },

	/**
     * Returns true or false, depending on whether the Capability to query party info (name, photo) is enabled.
	 *  
	 * @return True if querying party info is possible, false otherwise. 
	 */
    isPartyInfoCapabilityEnabled : function()
    {
       return (this._partyInfoCapability !== null);
    },

	/**
     * Getter for the Capability for querying party info
	 *
	 * @return Capability, or null
	 */
    get_partyInfoCapability : function()
    {
        return this._partyInfoCapability;
    },

	/**
     * Enables the Capability to query party info
	 */
    enablePartyInfoCapability : function()
    {
        if(!this._partyInfoCapability)
        {
            this._partyInfoCapability = new webservices.Capability(webservices.CapabilityUrls.Common.PARTYINFO,
                                                                                 webservices.HttpMethods.POST);
        }
    },

	/**
     * Disables the Capability to query party info
	 */
    disablePartyInfoCapability : function()
    {
        this._partyInfoCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to register with Tracker is enabled. 
	 *  
	 * @return True if Tracker registration is possible, false otherwise. 
	 */
    isTrackerRegistrationCapabilityEnabled : function()
    {
       return (this._trackerRegistrationCapability !== null);
    },

	/**
	 * Getter for the Capability for registering with Tracker
	 *
	 * @return Capability, or null
	 */
    get_trackerRegistrationCapability : function()
    {
        return this._trackerRegistrationCapability;
    },

	/**
	 * Enables the Capability to register with Tracker
	 */
    enableTrackerRegistrationCapability : function()
    {
        if(!this._trackerRegistrationCapability)
        {
            this._trackerRegistrationCapability = new webservices.Capability(webservices.CapabilityUrls.Common.TRACKERREGISTRATION,
                                                                            webservices.HttpMethods.POST);
        }
    },

	/**
	 * Disables the Capability to register with Tracker
	 */
    disableTrackerRegistrationCapability : function()
    {
        this._trackerRegistrationCapability = null;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate a Chat with Tracker is enabled. 
	 *  
	 * @return True if Tracker authentication of Chats is possible, false otherwise. 
	 */
    isChatTrackerAuthenticationCapabilityEnabled : function()
    {
        return this._chatTrackerAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Chat with Tracker
	 */
    enableChatTrackerAuthenticationCapability : function()
    {
        this._chatTrackerAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Chat with Tracker
	 */
    disableChatTrackerAuthenticationCapability : function()
    {
        this._chatTrackerAuthenticationCapability = false;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate a Chat with STS is enabled. 
	 *  
	 * @return True if STS Chat authentication is possible, false otherwise. 
	 */
    isChatStsAuthenticationCapabilityEnabled : function()
    {
        return this._chatStsAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Chat with STS
	 */
    enableChatStsAuthenticationCapability : function()
    {
        this._chatStsAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Chat with STS
	 */
    disableChatStsAuthenticationCapability : function()
    {
        this._chatStsAuthenticationCapability = false;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate a Chat anonymously is enabled. 
	 *  
	 * @return True if anonymous Chat authentication is possible, false otherwise. 
	 */
    isChatAnonymousAuthenticationCapabilityEnabled : function()
    {
        return this._chatAnonymousAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Chat anonymously
	 */
    enableChatAnonymousAuthenticationCapability : function()
    {
        this._chatAnonymousAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Chat anonymously
	 */
    disableChatAnonymousAuthenticationCapability : function()
    {
        this._chatAnonymousAuthenticationCapability = false;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate a Callback with Tracker is enabled. 
	 *  
	 * @return True if Tracker authentication of Callbacks is possible, false otherwise. 
	 */
    isCallbackTrackerAuthenticationCapabilityEnabled : function()
    {
        return this._callbackTrackerAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Callback with Tracker
	 */
    enableCallbackTrackerAuthenticationCapability : function()
    {
        this._callbackTrackerAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Callback with Tracker
	 */
    disableCallbackTrackerAuthenticationCapability : function()
    {
        this._callbackTrackerAuthenticationCapability = false;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate a Callback with STS is enabled. 
	 *  
	 * @return True if STS authentication of Callbacks is possible, false otherwise. 
	 */
    isCallbackStsAuthenticationCapabilityEnabled : function()
    {
        return this._callbackStsAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Callback with STS
	 */
    enableCallbackStsAuthenticationCapability : function()
    {
        this._callbackStsAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Callback with STS
	 */
    disableCallbackStsAuthenticationCapability : function()
    {
        this._callbackStsAuthenticationCapability = false;
    },

	/**
	 * Returns true or false, depending on whether the Capability to authenticate Callbacks anonymously is enabled. 
	 *  
	 * @return True if anonymous authentication of Callbacks is possible, false otherwise. 
	 */
    isCallbackAnonymousAuthenticationCapabilityEnabled : function()
    {
        return this._callbackAnonymousAuthenticationCapability;
    },

	/**
	 * Enables the Capability to authenticate a Callback anonymously
	 */
    enableCallbackAnonymousAuthenticationCapability : function()
    {
        this._callbackAnonymousAuthenticationCapability = true;
    },

	/**
	 * Disables the Capability to authenticate a Callback anonymously
	 */
    disableCallbackAnonymousAuthenticationCapability : function()
    {
        this._callbackAnonymousAuthenticationCapability = false;
    },

	/**
	 * Disables all Capabilities
	 */
    reset : function()
    {
        this.disableStartChatCapability();
        this.disableReconnectChatCapability();
        this.disablePollCapability();
        this.disableSendMessageCapability();
        this.disableSetTypingStateCapability();
        this.disableExitCapability();
        this.disableProblemReportCapability();
        this.disableCreateCallbackCapability();
        this.disableCallbackStatusCapability();
        this.disableReconnectCallbackCapability();
        this.disableDisconnectCallbackCapability();
        this.disableQueueQueryAnonymousAuthenticationCapability();
        this.disableQueueQueryTrackerAuthenticationCapability();
        this.disableQueueQueryStsAuthenticationCapability();
        this.disablePartyInfoCapability();
        this.disableTrackerRegistrationCapability();
        this.disableChatTrackerAuthenticationCapability();
        this.disableChatStsAuthenticationCapability();
        this.disableChatAnonymousAuthenticationCapability();
        this.disableCallbackTrackerAuthenticationCapability();
        this.disableCallbackStsAuthenticationCapability();
        this.disableCallbackAnonymousAuthenticationCapability();
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ServerConfigurationProcessorBase class
 *  
 * When the application is loaded, the client queries the IC server for a list of the server's capabilities.  This class processes 
 * the response to that request.  Capabilities common to both client and server will be stored in the CapabilityRepository.
 */
webservices._Internal._ServerConfigurationProcessorBase = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param capabilityRepository Where to store the capabilities common to client and server.
	 */
    initialize: function($super, capabilityRepository)
    {
        common.ParameterValidation.validate([capabilityRepository], [ {"required": true}, {"required": true} ]);

        $super();

        this._capabilityRepository = capabilityRepository;
        this._lastServerConfigurationVersion = null;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Process the response to a request for the IC server's capabilities. 
	 * 
	 * @param response An instance of webservices.ServerConfigurationResponse 
	 */
    process : function(response)
    {
        common.Interface.ensureImplements(response, webservices.Interfaces.IServerConfigurationResponse);

        // reset the capability repository since we're processing a whole new server configuration
        this._capabilityRepository.reset();

        if(response)
        {
            this._lastServerConfigurationVersion = response.get_serverConfigVersion();
            this._enableCommonCapabilities(response.get_commonCapabilities());
            this._enableChatCapabilities(response.get_chatCapabilities());
            this._enableCallbackCapabilities(response.get_callbackCapabilities());
            this._enableQueueQueryCapabilities(response.get_queueQueryCapabilities());

            if (webservices.ProblemReporter)
            {
                webservices.ProblemReporter.set_regEx(response.get_problemReportRegEx());
            }
        }
    },
    
    /**
     * The server configuration response JSON contains a field "cfgVer".  This is 
     * incremented each time certain properties are changed in IA.  This method 
     * returns the most recent value for this field that has been received from 
     * the server. 
     *  
     * @return An integer indicating the most recent configuration version received from the server. 
     */
    get_lastServerConfigurationVersion : function()
    {
        return this._lastServerConfigurationVersion;
    },

	/**
     * Resets the most recently obtained server configuration version number, so that the next 
     * poll will definitely trigger a server configuration request. 
	 */
    resetServerConfigurationVersion : function()
    {
        this._lastServerConfigurationVersion = null;
    },

    // private methods

    _enableCommonCapabilities : function(capabilities)
    {
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Common.SUPPORT_REGISTRATION_TRACKER) != -1)
        {
            this._capabilityRepository.enableTrackerRegistrationCapability();
        }
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Common.PROBLEM_REPORT) != -1)
        {
            this._capabilityRepository.enableProblemReportCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Common.PARTY_INFO) != -1)
        {
            this._capabilityRepository.enablePartyInfoCapability();
        }
    },
    
    _enableChatCapabilities : function(capabilities)
    {
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_TRACKER) != -1)
        {
            this._capabilityRepository.enableChatTrackerAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_STS) != -1)
        {
            this._capabilityRepository.enableChatStsAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_ANONYMOUS) != -1)
        {
            this._capabilityRepository.enableChatAnonymousAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.START) != -1)
        {
            this._capabilityRepository.enableStartChatCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.RECONNECT) != -1)
        {
            this._capabilityRepository.enableReconnectChatCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.POLL) != -1)
        {
            this._capabilityRepository.enablePollCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.SENDMESSAGE) != -1)
        {
            this._capabilityRepository.enableSendMessageCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.SETTYPINGSTATE) != -1)
        {
            this._capabilityRepository.enableSetTypingStateCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Chat.EXIT) != -1)
        {
            this._capabilityRepository.enableExitCapability();
        }
    },
    
    _enableCallbackCapabilities : function(capabilities)
    {
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_TRACKER) != -1)
        {
            this._capabilityRepository.enableCallbackTrackerAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_STS) != -1)
        {
            this._capabilityRepository.enableCallbackStsAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_ANONYMOUS) != -1)
        {
            this._capabilityRepository.enableCallbackAnonymousAuthenticationCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.CREATE) != -1)
        {
            this._capabilityRepository.enableCreateCallbackCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.STATUS) != -1)
        {
            this._capabilityRepository.enableCallbackStatusCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.RECONNECT) != -1)
        {
            this._capabilityRepository.enableReconnectCallbackCapability();
        }

        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.Callback.DISCONNECT) != -1)
        {
            this._capabilityRepository.enableDisconnectCallbackCapability();
        }
    },

    _enableQueueQueryCapabilities : function(capabilities)
    {
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_TRACKER) != -1)
        {
            this._capabilityRepository.enableQueueQueryTrackerAuthenticationCapability();
        }
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_STS) != -1)
        {
            this._capabilityRepository.enableQueueQueryStsAuthenticationCapability();
        }
        if(capabilities.indexOf(webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_ANONYMOUS) != -1)
        {
            this._capabilityRepository.enableQueueQueryAnonymousAuthenticationCapability();
        }
    }
});

/**
 * An abstract class representing anything that can have listeners listening for success/failure events.
 */
webservices.ListenableBase = Class.create(common.InterfaceImplementation,
{
	/** 
	 * Constructor
	 */
    initialize : function($super)
    {
        common.Debug.traceMethodEntered("ListenableBase.initialize()");

        $super();

        this._successListeners = [];
        this._failureListeners = [];

        common.Debug.traceMethodExited("ListenableBase.initialize()");
    },

	/** 
	 * Destructor
	 */
    destroy : function()
    {
        common.InterfaceImplementation.prototype.destroy.call(this);
    },

	/**
	 * Erases the lists of listeners for success and failure events.
	 */
    reset : function()
    {
        this._successListeners = [];
        this._failureListeners = [];
    },

    /** 
     * Register a listener to be called when an operation succeeds.
     */
    registerSuccessListener : function(listener)
    {
        common.Debug.traceMethodEntered("ListenableBase.registerSuccessListener()");
        this._successListeners.push(listener);
        common.Debug.traceMethodExited("ListenableBase.registerSuccessListener()");
    },

    /** 
     * Register a listener to be called when an operation fails.
     */
    registerFailureListener: function(listener)
    {
        common.Debug.traceMethodEntered("ListenableBase.registerFailureListener()");
        this._failureListeners.push(listener);
        common.Debug.traceMethodExited("ListenableBase.registerFailureListener()");
    },

	/**
	 * Loop through the listeners that are listening for notification of success, and notify them 
	 * that the operation has succeeded. 
	 * 
	 * @param obj This object will be passed to each listener's callback method.
	 */
    notifyListenersOfSuccess: function(obj)
    {
        this._notifyListeners(this._successListeners, obj);
    },

	/**
	 * Loop through the listeners that are listening for notification of failure, and notify them 
	 * that the operation has failed. 
	 * 
	 * @param obj This object will be passed to each listener's callback method.
	 */
    notifyListenersOfFailure : function(obj)
    {
        this._notifyListeners(this._failureListeners, obj);
    },

    // private methods

    _notifyListeners : function(listenerList, obj)
    {
        var exceptions = new Array();
        for (var i = 0; i < listenerList.length; ++i)
        {
            var listener = listenerList[i];
            try
            {
                listener(obj);
            } catch (e)
            {
                exceptions.push(e); // Save for later. Continue notifying listeners.
            }
        }
        if (exceptions.length == 1)
        {
            throw exceptions[0];
        } else if (exceptions.length > 1)
        {
            var masterException = new common.ExceptionFactory.createException("Multiple exceptions.");
            masterException.exceptionList = exceptions;
            throw masterException;
        }
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 *  Timer class
 *  Constructor takes integer specifying how many milliseconds to wait before firing.
 *  After construction, caller can register as a listener to the timer.
 */
webservices.Timer = Class.create(webservices.ListenableBase,
{
    /**
	 * Constructor 
	 *  
	 * @param duration How long before the timer should go off, in milliseconds. 
	 */
    initialize : function($super, duration)
    {
        common.Debug.traceMethodEntered("Timer.initialize()");

        $super();
        this._duration = duration;
        this._windowTimeoutId = null;

        common.Debug.traceMethodExited("Timer.initialize()");
    },

    /**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ListenableBase.prototype.destroy.call(this);

        this._windowTimeoutId = null;
    },

    /**
     *  Function to start the timer, i.e. calling this will cause <code>notifyListenersOfSuccess()</code> to be
     *  called after <code>duration</code> milliseconds
     */
    start : function()
    {
        common.Debug.traceVerboseNote("Starting a " + this._duration + "ms timer...");
        var _self = this;
        this._windowTimeoutId = window.setTimeout(function() { _self.onTimer(); }, this._duration);
        common.Debug.traceVerboseNote("...timer started.  _windowTimeoutId=" + this._windowTimeoutId);
    },

    /**
     *  Returns true if this timer is running, false otherwise (i.e. if it hasn't been started yet, or was
     *  started and already fired and hasn't been started again since firing).
     */
    isRunning : function()
    {
        return (this._windowTimeoutId !== null);
    },

    /**
     *  "Public" function to cancel the timer.
     *  Just creates a webservices.Mutex to execute <code>_cancelImpl()</code> as an atomic operation relative to any other
     *  methods called in this way.
     *  
     *  It is possible that the timer could go off in the short
     *  amount of time between the caller calling this method, and
     *  the implementation of this method actually canceling the
     *  timer.  If the timer is successfully canceled, it will call
     *  <code>notifyListenersOfFailure()</code>.  If not, the timer
     *  will go off, and call <code>notifyListenersOfSuccess</code>
     *  as normal.
     */
    cancel : function()
    {
        common.Debug.traceMethodEntered("Timer.cancel()");
        if (null === this._windowTimeoutId)
        {
            common.Debug.traceNote("Nothing to do!");
        }
        else
        {
            common.Debug.traceNote("Now creating mutex to cancel timer: " + this._windowTimeoutId);

            // Can't do <code>new webservices.Mutex(this._cancelImpl)</code>.
            // Also can't do <code>new webservices.Mutex("this._cancelImpl()")</code>.
            // This is because setTimeout() doesn't work well with object methods. But, we can create a locally-scoped
            // variable, which the passed function will still be able to see.
            var _self = this;
            new webservices.Mutex(function() { return _self._cancelImpl(); });
        }
        common.Debug.traceMethodExited("Timer.cancel()");
    },

    /**
     *  "Private" function to cancel the timer.
     */
    _cancelImpl : function()
    {
        common.Debug.traceMethodEntered("Timer._cancelImpl()");
        common.Debug.traceNote("This._windowTimeoutId=" + this._windowTimeoutId);
        if (this.isRunning())
        {
            window.clearTimeout(this._windowTimeoutId);
            common.Debug.traceNote("_cancelImpl() canceled timer #" + this._windowTimeoutId + "...notifying listeners of timer's failure to go off");
            this.notifyListenersOfFailure();
            common.Debug.traceNote("_cancelImpl() finished notifying listeners of timer #" + this._windowTimeoutId + "'s failure to go off.");
            this._windowTimeoutId = null;
        }
        else
        {
            common.Debug.traceNote("_cancelImpl() failed to cancel timer");
        }
        common.Debug.traceMethodExited("Timer._cancelImpl()");
    },

    /**
     *  "Public" function to restart a timer.
     * 
     *  If a timer is running, but hasn't fired yet, this method will cause the timer to "start over" with the
     *  originally-specified <code>duration</code>.
     *  
     *  Example:  At 1:00:00, a timer is set with <code>duration</code> = 0:30.  <code>notifyListenersOfSuccess()</code>
     *  will be fired at 1:00:30.
     *  But, if <code>restart()</code> is called at 1:00:20, then <code>notifyListenersOfSuccess()<code> will not get
     *  called until 1:00:50.
     *
     *  Note that if a timer was set and has already fired, and it is desired that the timer start again, this
     *  method is not the appropriate one to call.  In this scenario, simply call <code>start()</code>.
     *  <code>restart</code> is only meant to be called on a currently-running timer, and will have no effect if
     *  called on a timer that is not currently running.
     * 
     *  Implementation-wise, this function just creates a webservices.Mutex to execute <code>_restartImpl()</code> as an atomic
	 *  operation relative to any other methods called in this way.
	 *  
	 * @param duration Optional.  If specified, this will be the new duration of the timer, in milliseconds 
     */
    restart : function(duration)
    {
        common.Debug.traceMethodEntered("Timer.restart()");

		if (null != duration)
        {
            this._duration = duration;
		}

        common.Debug.traceNote("Now creating mutex to restart timer: " + this._windowTimeoutId);
        // Can't do <code>new webservices.Mutex(this._restartImpl)</code>.
        // Also can't do <code>new webservices.Mutex("this._restartImpl()")</code>.
        // This is because setTimeout() doesn't work well with object methods. But, we can create a locally-scoped
        // variable, which the passed function will still be able to see.
        var _self = this;
        new webservices.Mutex(function() { return _self._restartImpl(); });
        common.Debug.traceMethodExited("Timer.restart()");
    },

    /**
     *  "Private" function to restart the timer.
     */
    _restartImpl : function()
    {
        common.Debug.traceMethodEntered("Timer._restartImpl()");
        var retVal = false;
        if (this.isRunning())
        {
            common.Debug.traceNote("_restartImpl indicates that timer is already running, so canceling");
            this._cancelImpl();
            this.start();
            retVal = true;
        }
        common.Debug.traceMethodExited("Timer._restartImpl()");
        return retVal;
    },

    /**
     *  Erases the <code>_windowTimeoutId</code>, and calls <code>notifyListenersOfSuccess()</code>.
     */
    onTimer : function()
    {
        common.Debug.traceVerboseNote("Timer firing.  ID was: " + this._windowTimeoutId);
        this.notifyListenersOfSuccess();
        this._windowTimeoutId = null;
    },

	/**
	 * Returns the duration of the timer, in milliseconds 
	 *  
	 * @return The duration of the timer, in milliseconds 
	 */
	get_duration : function()
	{
		return this._duration;
	}
});

/**
 * RecurringTimer class
 *  
 * This class represents a timer which goes off after a certain time period, and every time it 
 * goes off, it re-sets it self to go off again once that time period elapses again.
 */
webservices.RecurringTimer = Class.create(webservices.Timer,
{
	/**
	 * Constructor
	 * 
	 * @param duration How often the timer should go off, in milliseconds.
	 */
    initialize: function($super, duration)
    {
        common.Debug.traceMethodEntered("RecurringTimer.initialize()");
        $super(duration);
        
        this._isRunning = false;
        
        common.Debug.traceMethodExited("RecurringTimer.initialize()");
    },

    /**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Timer.prototype.destroy.call(this);
    },

    // methods

	/**
	 * Start the timer
	 */
    start : function()
    {
        this._isRunning = true;
        webservices.Timer.prototype.start.call(this);
    },

	/**
	 * Stop the timer
	 */
    stop : function()
    {   
        this.cancel();
        this._isRunning = false;
    },

	/**
	 * This method is called when the timer goes off.  Do not call it directly. 
	 * This method will notify this timer's listeners, and then re-start the timer. 
	 *  
	 * @see ListenableBase.notifyListenersOfSuccess() This method provides the mechanism by which the timer's listeners are notified. 
	 */
    onTimer : function()
    {
        webservices.Timer.prototype.onTimer.call(this);
        
        if(this._isRunning)
        {
            common.Debug.traceVerboseNote("Restarting the timer");
            this.start();
        }
    }
});

/**
 * AJAX request functionality class 
 * Wrapper for Prototype's Ajax.Request functionality. 
 */
webservices.AjaxRequest = Class.create(
{
	/**
	 * Constructor
	 * 
	 * @param url  The URL that is being requested
	 * @param options Defined at http://www.prototypejs.org/api/ajax/options
	 */
    initialize : function(url, options)
    {
        this._url = url;
        this._options = options;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._url = null;
        this._options = null;
    },

    // methods

	/**
	 * Sends the AjaxRequest
	 */
    send : function()
    {
        common.Debug.traceAlways("REQUEST: " + this._url);
        common.Debug.traceNote("Asynchronous: " + this._options.asynchronous);

        this._options.onCreate = this.onCreateAjaxRequest.bind(this);
        this._options.onComplete = this.onCompleteAjaxRequest.bind(this);

        new Ajax.Request(this._url, this._options);
    },

    /** 
     * This method is called any time an AJAX request is created. 
     * It sets a timer, which is cleared by onCompleteAjaxRequest().  Thus, if the timer 
     * ever goes off, that means that the AJAX request timed out. 
     *  
     * @param ajaxRequest An AJAX request
	 */
    onCreateAjaxRequest : function(ajaxRequest)
    {
        common.Debug.traceMethodEntered("AjaxRequest.onCreateAjaxRequest()");
        this._ajaxRequest = ajaxRequest;
        var retryCounts = webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.RetryCounts);
        var duration = retryCounts.get_ajaxTimeoutMilliseconds();
        var d = new Date();
        this._ajaxRequest.request.options.ININ_Timeout_ID = window.setTimeout(this.onAjaxRequestTimeout.bind(this), duration);
        common.Debug.traceNote("Set timeout #" + this._ajaxRequest.request.options.ININ_Timeout_ID + " for " + duration + "ms at: " + d.toTimeString());
        common.Debug.traceMethodExited("AjaxRequest.onCreateAjaxRequest()");
    },

    /**
     * AJAX does not have a built-in mechanism for limiting the time to wait on a request.
     * So, this method implements that. 
     *  
     * @param ajaxRequest An AJAX request.  Passed automatically by AJAX, but is ignored because it isn't always passed in IE.  this._ajaxRequest is used instead.
     */
    onAjaxRequestTimeout : function(ajaxRequest)
    {
        common.Debug.traceMethodEntered("AjaxRequest anonymous timeout function");
        var d = new Date();
        common.Debug.traceWarning("AJAX request with timeout #" + this._ajaxRequest.request.options.ININ_Timeout_ID + " timed out at " + d.toTimeString() + "!");
        if (1 == this._ajaxRequest.transport.readyState || 2 == this._ajaxRequest.transport.readyState || 3 == this._ajaxRequest.transport.readyState)
        {
            this._ajaxRequest.transport.onreadystatechange = Prototype.emptyFunction;
            this._ajaxRequest.transport.abort();
            Ajax.activeRequestCount--;
            this._ajaxRequest.request.options.onFailure(this._ajaxRequest);
            if (webservices.ProblemReporter)
            {
                webservices.ProblemReporter.recordTimedOutRequest(this._ajaxRequest);
            }
        }
        common.Debug.traceMethodExited("AjaxRequest anonymous timeout function");
    },

    /** 
     * This method is called when an AJAX request completes. 
     * It clears the timer that was set by onCreateAjaxRequest(). 
     *  
     * @param ajaxRequest An AJAX request.  Passed automatically by AJAX, but is ignored.
	 */
    onCompleteAjaxRequest : function(ajaxRequest)
    {
        common.Debug.traceMethodEntered("AjaxRequest.onCompleteAjaxRequest()");
        window.clearTimeout(this._ajaxRequest.request.options.ININ_Timeout_ID);
        common.Debug.traceNote("Cleared timeout: " + this._ajaxRequest.request.options.ININ_Timeout_ID);
        common.Debug.traceMethodExited("AjaxRequest.onCompleteAjaxRequest()");
    }
});

/**
 * Base class which handles AJAX connection.
 * Don't use this directly, use a derived class instead.
 */
webservices.AjaxManagerBase = Class.create(webservices.ListenableBase,
{
    // constants
    CONTENT_TYPE_HEADER: 'content-type',

	/**
	 * Constructor
	 * 
	 * @param capability  A Capability object representing what this AjaxManager is intended to do (i.e. poll, send message, etc.)
	 * @param serverUriFragment The URI fragment that reverse proxies to the IC server.
	 */
    initialize: function($super, capability, serverUriFragment)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase.initialize()");
        if(!capability)
        {
            common.Debug.traceError("null capability");
            common.Debug.breakpoint();
        } else
        {
            common.Debug.traceNote("Capability=" + capability.toString());
        }

        $super();
        
        common.Interface.ensureImplements(capability, webservices.Interfaces.ICapability);
        this._capability = capability;
        
        if(serverUriFragment)
        {
            this._serverUriFragment = serverUriFragment;
        }
        else
        {
            this._serverUriFragment = webservices.Servers.CurrentUriFragment;
        }

        /** How many times the current AJAX request has been retried */
        this.retriesSoFar = 0;
        common.Debug.traceMethodExited("AjaxManagerBase.initialize()");
    },

    // public methods

    /** 
     * Send the AJAX request (to the url specified in the capability passed to the initialize(), using the HTTP method
     * also specified in the capability).  If HTTP method is POST, the arg to this is used to supply what data
	 * should be POSTed.  Otherwise, the arg is ignored. 
	 *  
	 * @param dataToPost If it is a POST request, this is the data that shall be POSTed.  Otherwise, ignored.
     * @param participantIdToAppend If non-null, (a slash and) the participantID will be appended onto the end of the URL.  A participantID identifies a participant within the context of a particular interaction.  If the web user (the person whose browser is running this code) has several interactions, he/she will have the same number of participantIds.  This should be one of the participantIds representing the web user - it should NOT be a participantId representing an agent.
	 * @param useAsynchronous If true, the request will be sent asynchronously.  If false OR NULL, it will be sent synchronously.
     */
    sendRequest: function(dataToPost, participantIdToAppend, useAsynchronous)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase.sendRequest()");
        common.Interface.ensureImplements(this._capability, webservices.Interfaces.ICapability);

        if(common.Browser.isFireFox() && webservices.Utilities.needsElevatedPrivileges())
        {
            common.Debug.traceScopeEntered("enablePrivilegeFunction");

            try
            {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (ex)
            {
                common.Debug.traceError(ex.message);
                if (webservices.ProblemReporter)
                {
                    webservices.ProblemReporter.sendProblemReport("Browser security settings error: " + ex, "AjaxManagerBase.sendRequest()");
                }
                window.alert(localization.BrowserSecuritySettingsError); 
                
                common.Debug.traceScopeExited("enablePrivilegeFunction");

                return;
            }
            
            common.Debug.traceScopeExited("enablePrivilegeFunction");
        }
        
        common.Debug.traceNote("AjaxManagerBase.sendRequest...dataToPost (which is allowed to be undefined) is: " + dataToPost);
        var _self = this;
        var dataToPostCached = dataToPost;
        var participantIdToAppendCached = participantIdToAppend;
        var sendTimestamp = new Date();
        var options =
        {
            method: this._capability.get_method(),
            contentType: this.buildContentTypeValue(),
            onSuccess: function(xmlHttpRequest)
            {
                common.Debug.traceNote("AjaxManagerBase.sendRequest() succeeded");

                try
                {
                    common.Debug.traceAlways("RESPONSE STATUS: " + xmlHttpRequest.status);
                    common.Debug.traceAlways("RESPONSE: " + xmlHttpRequest.responseText);

                    if(xmlHttpRequest && xmlHttpRequest.status == 200)
                    {
                        _self.onTransportSuccess(xmlHttpRequest);
                    }
                    else
                    {
                        _self.onTransportFailure(xmlHttpRequest, dataToPostCached, participantIdToAppendCached);
                    }
                }
                catch(ex)
                {
                    common.Debug.traceError(ex.message);
                    common.Debug.alert(ex.message);
                    common.Debug.breakpoint();
                    if (webservices.ProblemReporter)
                    {
                        webservices.ProblemReporter.sendProblemReport(ex, "AjaxManagerBase.sendRequest().onSuccess()");
                    }
                }
            },
            onFailure: function(xmlHttpRequest)
            {
                common.Debug.traceError("AjaxManagerBase.sendRequest() failed: " + xmlHttpRequest.request.url);

                try
                {
                    xmlHttpRequest.sendTimestamp = sendTimestamp;
                    _self.onTransportFailure(xmlHttpRequest, dataToPostCached, participantIdToAppendCached);
                }
                catch(ex)
                {
                    common.Debug.traceError(ex.message);
                    common.Debug.alert(ex.message);
                    common.Debug.breakpoint();
                    if (webservices.ProblemReporter)
                    {
                        webservices.ProblemReporter.sendProblemReport(ex, "AjaxManagerBase.sendRequest().onFailure()");
                    }
                }
            },
            onException : function(xmlHttpRequest, ex)
            {
                common.Debug.traceError("AjaxManagerBase.sendRequest() threw an exception: " + ex + ". URL: " + xmlHttpRequest.request.url);

                try
                {
                    xmlHttpRequest.sendTimestamp = sendTimestamp;
                    _self.onTransportFailure(xmlHttpRequest, dataToPostCached, participantIdToAppendCached);
                }
                catch(ex)
                {
                    common.Debug.traceError(ex.message);
                    common.Debug.alert(ex.message);
                    common.Debug.breakpoint();
                    if (webservices.ProblemReporter)
                    {
                        webservices.ProblemReporter.sendProblemReport(ex, "AjaxManagerBase.sendRequest().onException()");
                    }
                }
            },
            requestHeaders:
            {
                Accept: this.buildContentTypeValue()
            },
            postBody: dataToPost,
            asynchronous: !!useAsynchronous
        };
        
        var url = this._buildUrl(this._capability.get_relativeUrl(), participantIdToAppend);
        common.Debug.traceStatus("URL = " + url);

        var request = new webservices.AjaxRequest(url, options);
        request.send();
        common.Debug.traceNote("AjaxManagerBase.sendRequest() has sent the AJAX request.");

        request.destroy();
        delete request;
        request = null;

        common.Debug.traceMethodExited("AjaxManagerBase.sendRequest()");
    },
    
    /**
     * Called when the AJAX request returns successfully (i.e. the <i>transport</i> was successful - we may have
     * been successfully delivered a response from the server indicating that the server failed somehow in
     * processing the request).
     * It does the following:
     * 1) Sets the retry counter to 0
     * 2) Parses AJAX response (using subclass' <code>buildResponse()</code> method).
     * 3a) If AJAX response indicates failure, notifies listeners
     * 3b) If AJAX response indicates success, notifies listeners
     * Note: <code>xmlHttpRequest</code> contains properties <code>responseText</code> and <code>responseXML</code>.
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param xmlHttpRequest Standard xmlHttpRequest object representing the response from the webserver
     */
    onTransportSuccess: function(xmlHttpRequest)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase.onTransportSuccess()");

        this.retriesSoFar = 0; // Clear it out for next time
        this.validateContentType(xmlHttpRequest.getHeader(this.CONTENT_TYPE_HEADER));
        
        var responseObject = this.buildResponse(xmlHttpRequest);
        if (responseObject.isSuccessful())
        {
            common.Debug.traceNote("onTransportSuccess() notifying listeners of successful building of response object");
            this.notifyListenersOfSuccess(responseObject);
            common.Debug.traceNote("onTransportSuccess() done notifying listeners of successful building of response object");
        }
        else
        {
            common.Debug.traceNote("Notifying listeners of failureful building of response object");
            this.notifyListenersOfFailure(responseObject);
            common.Debug.traceNote("Done notifying listeners of failureful building of response object");
        }
        
        responseObject.destroy();
        delete responseObject;
        responseObject = null;
        
        common.Debug.traceMethodExited("AjaxManagerBase.onTransportSuccess()");
    },

    /**
     * 
     * Called when the AJAX request returns unsuccessfully (i.e. the <i>transport</i> was unsuccessful).
     * It calls the listeners.
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param xmlHttpRequest Standard xmlHttpRequest object representing the response from the webserver
	 * @param dataThatWasPosted If it was a POST request, this is the data that was POSTed.  Otherwise, ignore.
	 * @param participantIdToAppend If non-null, (a slash and) the ID will be appended onto the end of the URL.
     */
    onTransportFailure: function(xmlHttpRequest, dataThatWasPosted, participantIdToAppend)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase.onTransportFailure()");
        common.Debug.traceNote("dataThatWasPosted: " + dataThatWasPosted + "  Upon entry, have retried " + this.retriesSoFar + " times.");
        // HTTP status code is in xmlHttpRequest.status

        var responseObject = this.buildResponse(xmlHttpRequest);
        responseObject.xmlHttpRequest = xmlHttpRequest; // Give the ProblemReporter and any failure listeners access to the HTTP status code, etc.
        if (webservices.ProblemReporter)
        {
            webservices.ProblemReporter.recordFailedRequest(responseObject);
        }
        if (this._shouldRequestBeRetried(responseObject))
        {
            ++this.retriesSoFar;
            this.sendRequest(dataThatWasPosted, participantIdToAppend, xmlHttpRequest.request.options.asynchronous);
        }
        else
        {
            this.retriesSoFar = 0; // Clear it out for next time
                
            common.Debug.traceNote("Processing response...");

            common.Debug.traceNote("onTransportFailure notifying listeners of failure.");
            this.notifyListenersOfFailure(responseObject);
            common.Debug.traceNote("onTransportFailure done notifying listeners of failure.");
        }
        common.Debug.traceMethodExited("AjaxManagerBase.onTransportFailure()");
    },
        
    // private methods

    _buildUrl : function(relativeUrl, participantIdToAppend)
    {
        var url = webservices.Servers.buildUrl(this._serverUriFragment, relativeUrl);
        
        if(participantIdToAppend)
        {
            url = url + "/" + participantIdToAppend;
        }
        
        return url;
    },

    _shouldRequestBeRetried : function(response)
    {
        return this._shouldRequestBeRetriedBasedOnMessageTypeAndRetryCount(this._capability.get_relativeUrl(), this.retriesSoFar) &&
               this._shouldRequestBeRetriedBasedOnError(response.get_statusReason());
    },

    _shouldRequestBeRetriedBasedOnMessageTypeAndRetryCount : function(capabilityUrl, retriesSoFar)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase._shouldRequestBeRetriedBasedOnMessageTypeAndRetryCount()");
        var returnVal;
        var retryCounts = webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.RetryCounts);

        if(capabilityUrl == webservices.CapabilityUrls.Chat.POLL)
        {
            returnVal = (retriesSoFar < retryCounts.get_pollRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.EXIT)
        {
            returnVal = (retriesSoFar < retryCounts.get_exitRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Common.SERVERCONFIGURATION)
        {
            if (webservices.Servers.isConfiguredForSwitchover())
            {
                returnVal = false;
                // To clarify:
                // With two servers, A and B, rather than trying A, A, A, A, B, B, B, B,
                // we want to retry in a different order which is determined by the caller,
                // such as A, B, A, B, A, B, A, B.  So false is returned here, simply to give
                // the caller the opportunity to switch to the other server.
            }
            else
            {
                returnVal = (retriesSoFar < retryCounts.get_serverConfigurationRetries());
            }
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.START)
        {
            returnVal = (retriesSoFar < retryCounts.get_startChatRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.RECONNECT)
        {
            returnVal = (retriesSoFar < retryCounts.get_reconnectRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Common.TRACKERREGISTRATION)
        {
            returnVal = (retriesSoFar < retryCounts.get_trackerRegistrationRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.GETFILE)
        {
            returnVal = (retriesSoFar < retryCounts.get_getFileRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Callback.CREATE)
        {
            returnVal = (retriesSoFar < retryCounts.get_createCallbackRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.SENDMESSAGE)
        {
            returnVal = (retriesSoFar < retryCounts.get_sendMessageRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Chat.SETTYPINGSTATE)
        {
            returnVal = (retriesSoFar < retryCounts.get_setTypingStateRetries());
        }
        else if(capabilityUrl == webservices.CapabilityUrls.Common.PROBLEMREPORT)
        {
            returnVal = (retriesSoFar < retryCounts.get_problemReportRetries());
        }
        else
        {
            // Unrecognized capability!
            common.Debug.traceWarning("Unrecognized capability: " + capabilityUrl);
            returnVal = true;
        }
        common.Debug.traceMethodExited("AjaxManagerBase._shouldRequestBeRetriedBasedOnMessageTypeAndRetryCount()");
        return returnVal;
    },

    _shouldRequestBeRetriedBasedOnError : function(error)
    {
        common.Debug.traceMethodEntered("AjaxManagerBase._shouldRequestBeRetriedBasedOnError()");
        var returnVal;
        if(error.get_token(1) == webservices.ErrorCodes.WEBSVC)
        {
            var webSvcError = error.get_token(2);
            if((!webSvcError) || (webSvcError == webservices.ErrorCodes.GENERAL))
            {
                // generic error gets retried
                returnVal = true;
            }
            else
            {
                // any web service error other than general means that something is wrong with
                // the content of the message or the entities it references, so a retry won�t help
                returnVal = false;
            }
        }
        else if(error.get_token(1) == webservices.ErrorCodes.HTTP)
        {
            var httpError = error.get_token(2);

            if(!httpError)
            {
                // generic error gets retried
                returnVal = true;
            }
            else if (httpError.length == 0)
            {
                // Unrecognized error!
                common.Debug.traceWarning("Unrecognized HTTP error");
                returnVal = false;
            }
            else if (httpError == webservices.ErrorCodes.BADGATEWAY)
            {
                common.Debug.traceWarning("Received error 502 - perhaps the reverse proxy is not configured correctly on the webserver, or the IC server is not responding.");
                returnVal = false;
            }
            else if (httpError == webservices.ErrorCodes.SERVICEUNAVAILABLE)
            {
                common.Debug.traceWarning("Received error 503 - perhaps this server is currently the backup in a switchover pair.");
                returnVal = false;
            }
            else if(httpError[0] == '5')
            {
                // these 500 level errors may be temporary, so a retry is warranted
                common.Debug.traceWarning("Received error " + httpError + ".  Retrying.");
                returnVal = true;
            }
            else
            {
                // a 100, 200, 300 or 400 level error would do no good to retry
                // (exception: status code 200 indicates success and therefore wouldn't get here)
                // (exception: status code 404 MAY indicate the server is attempting to beat a DoS attack.  Don't retry, though, else
                //  that will be contributing to the attack).
                common.Debug.traceWarning("Received error " + httpError + ".  Not retrying.");
                returnVal = false;
            }
        }
        else
        {
            // default to true giving a retry attempt the benefit of the doubt
            returnVal = true;
        }
        common.Debug.traceNote("Returning: " + returnVal);
        common.Debug.traceMethodExited("AjaxManagerBase._shouldRequestBeRetriedBasedOnError()");
        return returnVal;
    }
});

// Register namespaces

webservices.registerChildNamespace("_Internal");

/**
 * This class is the main brains of managing the server configuration, but is abstract - use derived class instead
 */
webservices.ServerConfigurationManagerBase = Class.create(webservices.ListenableBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param serverConfigurationProcessor An object to parse the IC server's capabilities
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, serverConfigurationProcessor)
    {
        common.Debug.traceMethodEntered("ServerConfigurationManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ServerConfigurationManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super();
        
        this._genericResponseBuilder = genericResponseBuilder;
        this._capabilityRepository = capabilityRepository;
        this._serverConfigurationProcessor = serverConfigurationProcessor;

        common.Debug.traceMethodExited("ServerConfigurationManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("ServerConfigurationManagerBase.destroy()");

        this._genericResponseBuilder = null;
        this._serverConfigurationProcessor = null;
        this._capabilityRepository = null;

        common.Debug.traceMethodExited("ServerConfigurationManagerBase.destroy()");
    },

    // public methods

	/**
	 * Queries the IC server for its configuration/capabilities.
	 * 
	 * @param callback This function will be called when a response is received from the IC server.  This function should take 1 argument.  It will be passed true if the query succeeded, and false if it failed.
	 */
    getServerConfiguration : function(callback)
    {
        common.Debug.traceMethodEntered("ServerConfigurationManagerBase.getServerConfiguration()");

        // create the get server configuration capability and then get the server configuration
        var capability = this._capabilityRepository.get_serverConfigurationCapability();
        var ajax = this.createAjaxManager(capability);
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Debug.traceNote("ServerConfigurationManagerBase.getServerConfiguration() succeeded: " + response);
            _self._processServerConfiguration(response);
            if (callback)
            {
                callback(true);
            }
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("ServerConfigurationManagerBase.getServerConfiguration() failed: " + response);
            if (callback)
            {
                callback(false, response.get_statusReason());
            }
        });
        ajax.sendRequest(null, false, true);

        common.Debug.traceMethodExited("ServerConfigurationManagerBase.getServerConfiguration()");
    },

	// private methods

    _processServerConfiguration : function(response)
    {
        this._serverConfigurationProcessor.process(response);
    }
});

// Register namespaces
webservices.registerChildNamespace("ErrorCodes");

/**
 * webservices.ErrorCodes enums
 */

// (from systest\eic\main\products\eic\src\WebProcessor\ExternalBridge\error_codes.h)
// TODO: Make the codes be hierarchical, such as webservices.ERROR.CONTENTTYPE.INVALIDCHARSET, as in the .h file

// Codes/namespaces within the root namespace:

/** Namespace to contain all other error codes */
webservices.ErrorCodes.ERROR = "error";

// Codes/namespaces within the error namespace

/** Namespace to contain errors not pertaining to HTTP transport */
webservices.ErrorCodes.WEBSVC = "websvc";

/** Namespace to contain errors pertaining to HTTP transport */
webservices.ErrorCodes.HTTP = "http";

// Codes/namespaces within the error.websvc namespace

/** Generic error */
webservices.ErrorCodes.GENERAL = "general";

/** Namespace for errors indicating that the type of something is wrong */
webservices.ErrorCodes.CONTENTTYPE = "contentType";

/** Namespace for errors indicating that the content of something is wrong */
webservices.ErrorCodes.CONTENT = "content";

/** Namespace for errors indicating that the specified object was not found */
webservices.ErrorCodes.UNKNOWNENTITY = "unknownEntity";

/** Namespace for errors associated with registration, authentication, authorization */
webservices.ErrorCodes.USERDB = "userdb";

// Codes within the error.websvc.contentType namespace

/** Error indicating that the wrong character set was used */
webservices.ErrorCodes.INVALIDCHARSET = "invalidCharset";

/** Error indicating that contentType is not what was desired */
webservices.ErrorCodes.INVALIDCONTENTTYPE = "invalidContentType";

// Codes/namespaces within the error.websvc.content namespace

/** Illegal JSON sequence, XML document, etc */
webservices.ErrorCodes.INVALID = "invalid";

// Codes within the error.websvc.content.invalid namespace

/** Mising a required data element */ 
webservices.ErrorCodes.MISSINGDATA = "missingData";

// Codes within the error.websvc.unknownEntity namespace

/** Error indicating an attempt to access a session that does not exist */
webservices.ErrorCodes.SESSION = "session";

/** Error indicating a participant does not exist */
webservices.ErrorCodes.PARTICIPANT = "participant";

/** Error indicating a target (i.e. queue) does not exist */
webservices.ErrorCodes.BADTARGET = "badTarget";

// Codes within the error.websvc.userdb namespace

/** Error indicating that a user is not online */
webservices.ErrorCodes.NOTONLINE = "notOnline";

/** Error indicating that the authentication credentials given were unacceptable */
webservices.ErrorCodes.BADCREDENTIALS = "badCredentials";

/** Error indicating that an account name (that someone is trying to register) already exists */
webservices.ErrorCodes.ACCOUNTEXISTS = "accountExists";

// Codes within the error.http namespace

/** Error indicating that an attempt was made to send an HTTP request to a hostname that is not valid, such as www.nonexistantcompany.com */
webservices.ErrorCodes.INVALIDHOST = "0";

/** Error representing a standard HTTP 301 error, given when a document has moved permanently */
webservices.ErrorCodes.MOVEDPERMANENTLY = "301";

/** Error representing a standard HTTP 403 error, given when the requestor is not authorized to see the requested document */
webservices.ErrorCodes.FORBIDDEN = "403";

/** Error representing a standard HTTP 404 error, given when a request was made for a document that does not exist */
webservices.ErrorCodes.NOTFOUND = "404";

/** Error representing a standard HTTP 500 error, given when an error occurs internal to the webserver */
webservices.ErrorCodes.INTERNALSERVERERROR = "500";

/** Error representing a standard HTTP 502 error, given when a proxy error occurs.  This may happen when, for instance, a page at http://somewhere makes an AJAX request for a page at https://somewhere (note the protocol change) or http://somewhere_else */
webservices.ErrorCodes.BADGATEWAY = "502";

/** Error representing a standard HTTP 503 error, given when a webserver is temporarily unable to fulfill a request (due to maintenance, overloading, etc.) */
webservices.ErrorCodes.SERVICEUNAVAILABLE = "503";

/**
 * Error class
 *  
 * Represents an error, which contains a source, type, and subtype.
 */
webservices.Error = Class.create(common.InterfaceImplementation,
{
	/** 
	 * Constructor
	 */
    initialize : function($super, errorCode)
    {
        common.ParameterValidation.validate([errorCode], [ {"type": String, "required": true, "allowEmpty": false} ]);

        $super();

        this.addImplementedInterface(webservices.Interfaces.IError, webservices);

        this._errorCode = errorCode;
        this._tokens = this._buildParsedTokenArray(errorCode);
    },

    // public methods

	/**
	 * Returns part of the Error. 
	 * If index is 1, the error source is returned.  If index is 2, the error type is returned.  If index is 3, the 
	 * error's subtype is returned.  But it would likely be better to access these via get_errorSource(), get_errorType(), 
	 * and get_subErrorType() respectively. 
	 * 
	 * @param index Specifies which piece of data about the Error to return 
	 * @return A string containing the Error's source, type, or subtype, depending on the value of index. 
	 */
    get_token : function(index)
    {
        return this._tokens[index];
    },

	/**
	 * Gets this error's source
	 *  
	 * @return A string indicating the source of the error 
	 */
    get_errorSource : function()
    {
        return this.get_token(1);
    },

	/**
	 * Gets this error's type
	 *  
	 * @return A string indicating the type of the error 
	 */
    get_errorType : function()
    {
        return this.get_token(2);
    },

	/**
	 * Gets this error's subtype
	 *  
	 * @return A string indicating the subtype of the error 
	 */
    get_subErrorType : function()
    {
        return this.get_token(3);
    },

	/**
	 * Gets this error's textual representation.
	 *  
	 * @return A string representing the error.
	 */
    get_errorCode : function()
    {
        return this._errorCode;
    },

	// private methods

    _buildParsedTokenArray : function(str)
    {
        return str.split('.');
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ResponseBase 
 *  
 * Base class to represent responses received from the IC server 
 */
webservices.ResponseBase = Class.create(common.InterfaceImplementation,
{
    EXCEPTION_INVALID_INTERACTION_STATE: "Invalid interaction state",

	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("ResponseBase.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.IResponse, webservices);

        this._statusType = null;
        this._statusReason = null;

        common.Debug.traceMethodExited("ResponseBase.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._statusType = null;
        this._statusReason = null;
    },

    // methods

	/**
	 * Returns whether the status of this response indicates success or failure
	 *  
	 * @return webservices.ResponseBase.STATUS_TYPE_SUCCESS or webservices.ResponseBase.STATUS_TYPE_FAILURE
	 */
    get_statusType : function()
    {
        return this._statusType;
    },

	/**
	 * Sets whether the status of this response indicates success or failure
	 *  
	 * @param statusType webservices.ResponseBase.STATUS_TYPE_SUCCESS or webservices.ResponseBase.STATUS_TYPE_FAILURE
	 */
    set_statusType : function(statusType)
    {
        if (statusType != webservices.ResponseBase.STATUS_TYPE_SUCCESS &&
            statusType != webservices.ResponseBase.STATUS_TYPE_FAILURE)
        {
            throw common.ExceptionFactory.createException("Invalid status type: " + statusType);
        }

        this._statusType = statusType;
    },

	/**
	 * Returns whether the response indicates success
	 *  
	 * @return true if the response indicates success, false if it indicates a failure
	 */
    isSuccessful : function()
    {
         return webservices.ResponseBase.STATUS_TYPE_SUCCESS == this._statusType;
    },

	/**
	 * Gets the reason for the failure.  There is no reason to call this on a successful response.
	 * 
	 * @return An instance of Error indicating why the operation failed.  Null if the operation succeeded.
	 */
    get_statusReason : function()
    {
        return this._statusReason;
    },

	/**
	 * Sets the reason for the failure.  There is no reason to call this on a successful response.
	 * 
	 * @param statusReason An instance of Error indicating why the operation failed. 
	 */
    set_statusReason : function(statusReason)
    {
        common.Interface.ensureImplements(statusReason, webservices.Interfaces.IError);
    
        this._statusReason = statusReason;
    },

	/**
	 * Returns a representation of this object as a string.  Useful for debugging purposes.
	 * 
	 * @return string 
	 */
    toString : function()
    {
        var msg = "";
        
        if(this._statusType)
        {
            msg += "TYPE: ";
            msg += this._statusType;
            msg += ", ";
        }

        if(this._statusReason)
        {
            msg += "ERROR CODE: ";
            msg += this._statusReason.get_errorCode();
        }

        return msg;
    }
});

/** Status type indicating success */
webservices.ResponseBase.STATUS_TYPE_SUCCESS = "success";

/** Status type indicating failure */
webservices.ResponseBase.STATUS_TYPE_FAILURE = "failure";

// Register namespaces
webservices.registerChildNamespace("ServerConfigurationCapabilities");
webservices.registerChildNamespace("ServerConfigurationCapabilities.Common");
webservices.registerChildNamespace("ServerConfigurationCapabilities.Chat");
webservices.registerChildNamespace("ServerConfigurationCapabilities.Callback");
webservices.registerChildNamespace("ServerConfigurationCapabilities.QueueQuery");

// List of all capabilities that this client knows about.  The JSON/XML received from the IC server will be parsed to look for these.
// This list may change as future SUs are released.

/** Capability to send a problem report */
webservices.ServerConfigurationCapabilities.Common.PROBLEM_REPORT = "problemReport";

/** Capability to get party info */
webservices.ServerConfigurationCapabilities.Common.PARTY_INFO = "partyInfo";

/** Capability to register via tracker */
webservices.ServerConfigurationCapabilities.Common.SUPPORT_REGISTRATION_TRACKER = "supportRegistrationTracker";

/** Capability to authenticate to a chat using tracker */
webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_TRACKER = "supportAuthenticationTracker";

/** Capability to authenticate to a chat using STS */
webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_STS = "supportAuthenticationSTS";

/** Capability to authenticate to a chat anonymously */
webservices.ServerConfigurationCapabilities.Chat.SUPPORT_AUTHENTICATION_ANONYMOUS = "supportAuthenticationAnonymous";

/** Capability to start a chat */
webservices.ServerConfigurationCapabilities.Chat.START = "start";

/** Capability to reconnect to a chat */
webservices.ServerConfigurationCapabilities.Chat.RECONNECT = "reconnect";

/** Capability to poll a chat for new messages/events */
webservices.ServerConfigurationCapabilities.Chat.POLL = "poll";

/** Capability to send a message in a chat */
webservices.ServerConfigurationCapabilities.Chat.SENDMESSAGE = "sendMessage";

/** Capability to send typing indicators */
webservices.ServerConfigurationCapabilities.Chat.SETTYPINGSTATE = "setTypingState";

/** Capability to exit a chat */
webservices.ServerConfigurationCapabilities.Chat.EXIT = "exit";

/** Capability to create a callback interaction */
webservices.ServerConfigurationCapabilities.Callback.CREATE = "create";

/** Capability to query the status of a callback interaction */
webservices.ServerConfigurationCapabilities.Callback.STATUS = "status";

/** Capability to reconnect a callback interaction */
webservices.ServerConfigurationCapabilities.Callback.RECONNECT = "reconnect";

/** Capability to disconnect a callback interaction */
webservices.ServerConfigurationCapabilities.Callback.DISCONNECT = "disconnect";

/** Capability to authenticate to a callback using tracker */
webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_TRACKER = "supportAuthenticationTracker";

/** Capability to authenticate to a callback using STS */
webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_STS = "supportAuthenticationSTS";

/** Capability to authenticate to a callback anonymously */
webservices.ServerConfigurationCapabilities.Callback.SUPPORT_AUTHENTICATION_ANONYMOUS = "supportAuthenticationAnonymous";

/** Capability to authenticate to a queue query using tracker */
webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_TRACKER = "supportAuthenticationTracker";

/** Capability to authenticate to a queue query using STS */
webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_STS = "supportAuthenticationSTS";

/** Capability to authenticate to a queue query anonymously */
webservices.ServerConfigurationCapabilities.QueueQuery.SUPPORT_AUTHENTICATION_ANONYMOUS = "supportAuthenticationAnonymous";


// Register namespaces


/**
 * ServerConfigurationResponse class 
 *  
 * When an AJAX request is made to the IC server to get the server configuration, ServerConfigurationResponseBuilder 
 * translates the IC server's JSON/XML reply into a ServerConfigurationResponse. 
 *  
 * It contains information about the IC server's Capabilities - callbacks, typing indicators, etc.  This allows 
 * interoperability between clients and servers that are running different SUs. 
 */
webservices.ServerConfigurationResponse = Class.create(webservices.ResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("ServerConfigurationResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.IServerConfigurationResponse, webservices);

        this._commonCapabilities = [];
        this._chatCapabilities = [];
        this._callbackCapabilities = [];
        this._queueQueryCapabilities = [];
        this._problemReportRegEx = null;

        common.Debug.traceMethodExited("ServerConfigurationResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._commonCapabilities)
        {
            delete this._commonCapabilities;
            this._commonCapabilities = null;
        }
        if(this._chatCapabilities)
        {
            delete this._chatCapabilities;
            this._chatCapabilities = null;
        }
        if(this._callbackCapabilities)
        {
            delete this._callbackCapabilities;
            this._callbackCapabilities = null;
        }
        if(this._queueQueryCapabilities)
        {
            delete this._queueQueryCapabilities;
            this._queueQueryCapabilities = null;
        }

        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // public methods

	/**
     * Gets the version number of this server configuration response. 
	 *  
     * @return Version number of server configuration
	 */
    get_serverConfigVersion : function()
    {
        return this._cfgVer;
    },

	/**
     * Sets the version number of this server configuration response
	 *  
	 * @param cfgVer Version number of server configuration
	 */
    set_serverConfigVersion : function(cfgVer)
    {
        this._cfgVer = cfgVer;
    },

	/**
	 * Returns a list of "common" capabilities.  This does not mean capabilities that are shared between the client and 
	 * the IC server.  It refers to capabilities that are common to the various interaction types (chat, callback, etc.). 
	 * See the constants beginning with webservices.ServerConfigurationCapabilities.Common above.
	 *  
	 * @return JSON/XML string 
	 */
    get_commonCapabilities : function()
    {
        return this._commonCapabilities;
    },

	/**
	 * Adds a common (to all interaction types) capability to the list of common capabilities.
	 * 
	 * @param capability One of the ServerConfigurationCapability constants defined above.
	 */
    addCommonCapability : function(capability)
    {
        this._validateCapability(capability);

        // NOTE: Can't check for non-common capabilities, since this needs to support
        // future common capabilities and they could be anything

        this._commonCapabilities.push(capability);
    },

	/**
	 * Sets the entire list of common (to all interaction types) capabilities, overwriting the previous list.
	 * 
	 * @param capabilities Array of zero or more of the ServerConfigurationCapability constants defined above.
	 */
    set_commonCapabilities : function(capabilities)
    {
        this._commonCapabilities = capabilities;
    },

	/**
	 * Returns a list of chat capabilities. 
	 * See the constants beginning with webservices.ServerConfigurationCapabilities.Chat above.
	 *  
	 * @return JSON/XML string 
	 */
    get_chatCapabilities : function()
    {
        return this._chatCapabilities;
    },

	/**
	 * Adds a chat capability to the list of chat capabilities.
	 * 
	 * @param capability One of the ServerConfigurationCapability constants defined above.
	 */
    addChatCapability : function(capability)
    {
        this._validateCapability(capability);

        // NOTE: Can't check for non-chat capabilities, since this needs to support
        // future chat capabilities and they could be anything

        this._chatCapabilities.push(capability);
    },

	/**
	 * Sets the entire list of chat capabilities, overwriting the previous list.
	 * 
	 * @param capabilities Array of zero or more of the ServerConfigurationCapability constants defined above.
	 */
    set_chatCapabilities : function(capabilities)
    {
        this._chatCapabilities = capabilities;
    },

	/**
	 * Returns a list of callback capabilities. 
	 * See the constants beginning with webservices.ServerConfigurationCapabilities.Callback above.
	 *  
	 * @return JSON/XML string 
	 */
    get_callbackCapabilities : function()
    {
        return this._callbackCapabilities;
    },

	/**
	 * Adds a callback capability to the list of callback capabilities.
	 * 
	 * @param capability One of the ServerConfigurationCapability constants defined above.
	 */
    addCallbackCapability : function(capability)
    {
        this._validateCapability(capability);

        // NOTE: Can't check for non-callback capabilities, since this needs to support
        // future callback capabilities and they could be anything

        this._callbackCapabilities.push(capability);
    },

	/**
	 * Sets the entire list of callback capabilities, overwriting the previous list.
	 * 
	 * @param capabilities Array of zero or more of the ServerConfigurationCapability constants defined above.
	 */
    set_callbackCapabilities : function(capabilities)
    {
        this._callbackCapabilities = capabilities;
    },

    /**
     * Gets the regular expression which problem reports must match if they are to be sent. 
     * If this is null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur. 
     * If this is non-null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur provided 
     * that the problem report that is generated matches this regular expression. 
     * If the "sendProblemReport" capability is disabled, then there is no point in calling get_problemReportRegEx() as its return 
     * value should be ignored. 
     */
    get_problemReportRegEx : function()
    {
        return this._problemReportRegEx;
    },

    /**
     * Specifies a regular expression which problem reports must match if they are to be sent. 
     * If this is not set, or set to null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur. 
     * If this is set, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur provided 
     * that the problem report that is generated matches this regular expression. 
     * If the "sendProblemReport" capability is disabled, then there is likely not much point in calling this method.  The value passed will 
     * be stored, but problem reports will not be sent. 
     */
    set_problemReportRegEx : function(regEx)
    {
        this._problemReportRegEx = regEx;
    },

	/**
	 * Returns a list of queue query capabilities. 
	 * See the constants beginning with webservices.ServerConfigurationCapabilities.QueueQuery above.
	 *  
	 * @return JSON/XML string 
	 */
    get_queueQueryCapabilities : function()
    {
        return this._queueQueryCapabilities;
    },

	/**
	 * Adds a queue query capability to the list of queue query capabilities.
	 * 
	 * @param capability One of the ServerConfigurationCapability constants defined above.
	 */
    addQueueQueryCapability : function(capability)
    {
        this._validateCapability(capability);

        // NOTE: Can't check for non-queue query capabilities, since this needs to support
        // future queue query capabilities and they could be anything

        this._queueQueryCapabilities.push(capability);
    },

	/**
	 * Sets the entire list of queue query capabilities, overwriting the previous list.
	 * 
	 * @param capabilities Array of zero or more of the ServerConfigurationCapability constants defined above.
	 */
    set_queueQueryCapabilities : function(capabilities)
    {
        this._queueQueryCapabilities = capabilities;
    },

	// private methods

    _validateCapability : function(capability)
    {
        common.ParameterValidation.validate([capability], [ {"type": String, "required": true, "allowEmpty": false} ]);
    }

});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * Class which handles AJAX connection.
 * To use this:
 * 1) Pass a <code>webservices.Interfaces.ICapability</code> to the constructor, to represent 
 *    what this AJAX manager is supposed to do (e.g. chat, send a message, etc.) 
 * 2) Register one or more callbacks for success and failure using <code>registerSuccessListener()</code> and 
 *    <code>registerFailureListener()</code>.  (These methods are inherited from ListenableBase) 
 * 3) Call <code>sendRequest()</code> at some point.  If doing a POST, the data to post shall be the
 *    arg to that function.
 * 4) The callback that you passed in step #2 will be called.  It will have one parameter, which will be a 
 *    <code>webservices.ResponseBase</code> (or a subclass thereof).
 */
webservices.Json.AjaxManager = Class.create(webservices.AjaxManagerBase,
{
    // constants
    JSON_CONTENT_TYPE_VALUE: 'application/json',
    UTF8_CONTENT_TYPE_VALUE: 'charset=utf-8',

	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder The object that shall be used to translate the IC server's HTTP reply into a ResponseBase (or subclass thereof)
	 * @param capability  A Capability object representing what this AjaxManager is intended to do (i.e. poll, send message, etc.)
	 * @param serverUriFragment The URI fragment that reverse proxies to the IC server. (optional - if not specified, the current one will be used.)
	 */
    initialize : function($super, genericResponseBuilder, capability, serverUriFragment)
    {
        common.Debug.traceMethodEntered("Json.AjaxManager.initialize()");
        $super(capability, serverUriFragment);

        this._genericResponseBuilder = genericResponseBuilder;

        common.Debug.traceMethodExited("Json.AjaxManager.initialize()");
    },

    // public methods

	/**
	 * Returns the content type of the HTTP requests that this AjaxManager will make. 
	 *  
	 * @return String containing the content type of HTTP requests that this AjaxManager will make. 
	 */
    buildContentTypeValue : function()
    {
        return this.JSON_CONTENT_TYPE_VALUE + "; " + this.UTF8_CONTENT_TYPE_VALUE;
    },

	/**
	 * When an AJAX request is sent and the HTTP server replies, this method is used to ensure 
	 * that the content type of the response is one that this AjaxManager knows how to handle. 
	 *  
	 * @param contentType The value of the Content-Type field of an HTTP response that was received
	 */
    validateContentType : function(contentType)
    {
        common.Debug.traceNote('Content-type to validate: ' + contentType);
        if(!contentType)
        {
            common.Debug.traceError('content-type received is null/empty');
        }
        else if(!contentType.include(this.JSON_CONTENT_TYPE_VALUE) && !contentType.include(this.UTF8_CONTENT_TYPE_VALUE))
        {
            common.Debug.traceError('Bad content-type received: ' + contentType);
        }
    },

	/**
	 * Takes an AJAX reply from the IC server, and returns a ResponseBase or subclass thereof.
	 * 
	 * @param xmlHttpRequest What was received from the IC server when an AJAX request was made 
	 * @return A ResponseBase, or subclass thereof. 
	 */
    buildResponse : function(xmlHttpRequest)
    {
        common.Debug.traceMethodEntered("Json.AjaxManager.buildResponse()");
        var retVal = null;
        try
        {
            retVal = this._genericResponseBuilder.buildResponseFromRequest(xmlHttpRequest);
        }
        catch (ex)
        {
            common.Debug.traceError("Caught unhandled exception:\n" + ex);
        }
        common.Debug.traceMethodExited("Json.AjaxManager.buildResponse()");
        return retVal;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * ResponseBuilderBase class 
 * ChatResponseBuilder, CallbackResponseBuilder, etc. are derived from this. 
 */
webservices.Json.ResponseBuilderBase = Class.create(
{
	/**
	 * Constructor
	 */
    initialize : function()
    { },

	/**
	 * Destructor
	 */
    destroy : function()
    { },

	/**
	 * Parses the "status" portion of the JSON protocol, and sets the appropriate properties on the 
	 * response.
	 *  
	 * Effectively a protected method. 
	 *  
	 * @param status The "status" portion of the JSON object that was received from the IC server in the HTTP reply.
	 * @param response A ResponseBase, or subclass thereof.  Its statusType and statusReason properties may be set, depending on 
	 * the value of the status param. 
	 */
    _parseStatus : function(status, response)
    {
        common.Debug.traceMethodEntered("ResponseBaseBuilder.parseStatus()");

        if(status)
        {
            common.Debug.traceNote("status type: " + status.type);
            if(status.type)
            {
                response.set_statusType(status.type);
            }

            common.Debug.traceNote("status reason: " + status.reason);
            if(status.reason)
            {
                var error = null;
                try
                {
                    error = new webservices.Error(status.reason);
                }
                catch(ex)
                {
                    common.Debug.traceError(ex.message);
                    common.Debug.traceWarning("Invalid status reason: " + status.reason);
                }

                if(error)
                {
                    response.set_statusReason(error);
                }
            }
        }

        common.Debug.traceMethodExited("ResponseBaseBuilder.parseStatus()");
    },

	// TODO:  This method seems to be dead code.  Confirm and remove.
    parseStatus1 : function(status, response)
    {
        common.Debug.traceMethodEntered("Json.RegistrationResponseBuilder.buildRegistrationResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (jsonStr)
        {
            response = new webservices.RegistrationResponse();

            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json.registration)
            {
                if(json.registration.status)
                {
                    if(json.registration.status.type)
                    {
                        response.set_statusType(json.registration.status.type);
                    }

                    response._statusReason = json.registration.status.reason;
                }
            }
        }

        common.Debug.traceMethodExited("Json.RegistrationResponseBuilder.buildRegistrationResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * ServerConfigurationProcessor class 
 *  
 * Placeholder for any future JSON-specific functionality relating to processing an IServerConfigurationResponse, etc. 
 */
webservices.Json._Internal.ServerConfigurationProcessor = Class.create(webservices._Internal._ServerConfigurationProcessorBase,
{
	/**
	 * Constructor
	 * 
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities will be stored.
	 */
    initialize: function($super, capabilityRepository)
    {
        $super(capabilityRepository);
    },

	/** 
	 * Destructor 
	 */
    destroy : function()
    {
        webservices._Internal._ServerConfigurationProcessorBase.prototype.destroy.call(this);
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * ServerConfigurationResponseBuilder class
 * When an AJAX request is made to the IC server to get the server configuration, this class translates the IC server's 
 * JSON reply into a response object that implements IServerConfigurationResponse.
 */
webservices.Json._Internal.ServerConfigurationResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
    /**
     * Constructor
     */
    initialize : function($super)
    {
        $super();
    },

    /**
     * Destructor
     */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

    // methods

    /**
     * Translates jsonStr into an implementation of IServerConfigurationResponse, for use by  
     *  
     * @param jsonStr The IC server's reply to the AJAX request for server configuration 
     * @returns An implementation of IServerConfigurationResponse 
     */
    buildServerConfigurationResponse : function(jsonStr)
    {
        common.Debug.traceMethodEntered("Json.ServerConfigurationResponseBuilder.buildServerConfigurationResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (jsonStr)
        {
            response = new webservices.ServerConfigurationResponse();

            // default to failure until at least some point in the JSON is reached
            response.set_statusType(webservices.ResponseBase.STATUS_TYPE_FAILURE);
                
            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json)
            {
                if (common.Utilities.isType(json, Array) && json.length >= 1)
                {
                    if(json[0].serverConfiguration)
                    {
                        response.set_statusType(webservices.ResponseBase.STATUS_TYPE_SUCCESS);
                        response.set_serverConfigVersion(json[0].serverConfiguration.cfgVer);
                
                        // we'll say that every node under serverConfiguration is optional
                        var jsonCapabilities = json[0].serverConfiguration.capabilities;
                        if(jsonCapabilities)
                        {
                            if(jsonCapabilities.common)
                            {
                                response.set_commonCapabilities(jsonCapabilities.common);
                            }

                            if(jsonCapabilities.chat)
                            {
                                response.set_chatCapabilities(jsonCapabilities.chat);
                            }

                            if(jsonCapabilities.callback)
                            {
                                response.set_callbackCapabilities(jsonCapabilities.callback);
                            }

                            if(jsonCapabilities.queueQuery)
                            {
                                response.set_queueQueryCapabilities(jsonCapabilities.queueQuery);
                            }
                        }

                        if (json[0].serverConfiguration.problemReportRegEx)
                        {
                            response.set_problemReportRegEx(json[0].serverConfiguration.problemReportRegEx);
                        }
                    }
                }
            }
        }

        common.Debug.traceMethodExited("Json.ServerConfigurationResponseBuilder.buildServerConfigurationResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * GenericResponseBuilder class 
 * This class is in charge of building responses (i.e. objects which implement ResponseBase or its subclasses) from the IC server's 
 * replies to AJAX requests. 
 * In the case of an HTTP error (i.e. a 404, etc.) or an HTTP reply that is successful but empty, this class builds the 
 * response object itself.  Otherwise, it will delgate to one of the other *ResponseBuilder classes.
 */
webservices.Json._Internal.GenericResponseBuilder = Class.create(
{
	/**
	 * Constructor
	 * 
	 * @param chatResponseBuilder Object to which the task of building chat responses should be delgated.
	 * @param callbackResponseBuilder Object to which the task of building callback responses should be delegated.
	 * @param registrationResponseBuilder Object to which the task of building registration responses should be delegated.
	 * @param serverConfigurationResponseBuilder Object to which the task of building server configuration responses should be delegated.
	 * @param partyInfoResponseBuilder Object to which the task of building party info responses should be delegated.
	 * @param queueQueryResponseBuilder Object to which the task of building queue query responses should be delegated.
	 */
    initialize: function(chatResponseBuilder, callbackResponseBuilder, registrationResponseBuilder, serverConfigurationResponseBuilder,
                         partyInfoResponseBuilder, queueQueryResponseBuilder)
    {
        this._chatResponseBuilder = chatResponseBuilder;
        this._callbackResponseBuilder = callbackResponseBuilder;
        this._registrationResponseBuilder = registrationResponseBuilder;
        this._serverConfigurationResponseBuilder = serverConfigurationResponseBuilder;
        this._partyInfoResponseBuilder = partyInfoResponseBuilder;
        this._queueQueryResponseBuilder = queueQueryResponseBuilder;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    { },

    // methods

	/**
	 * Takes an AJAX reply from the IC server, and returns a ResponseBase or subclass thereof.
	 * 
	 * @param xmlHttpRequest What was received from the IC server when an AJAX request was made 
	 * @return A ResponseBase, or subclass thereof. 
	 */
    buildResponseFromRequest : function(xmlHttpRequest)
    {
        var response = null;

        // need to always return some kind of response for consumers to process
        if(xmlHttpRequest)
        {
            if(xmlHttpRequest.status == 200)
            {
                response = this._buildResponseFromResponseText(xmlHttpRequest.responseText, xmlHttpRequest.request.url);
            }
            else
            {
                var errorCode = webservices.ErrorCodes.ERROR + '.' + webservices.ErrorCodes.HTTP;
                if(xmlHttpRequest.status == 0)
                {
                    errorCode += '.' + webservices.ErrorCodes.INVALIDHOST;
                }
                else if(xmlHttpRequest.status == 403)
                {
                    errorCode += '.' + webservices.ErrorCodes.FORBIDDEN;
                }
                else if(xmlHttpRequest.status == 404)
                {
                    errorCode += '.' + webservices.ErrorCodes.NOTFOUND;
                }
                else if(xmlHttpRequest.status == 500)
                {
                    errorCode += '.' + webservices.ErrorCodes.INTERNALSERVERERROR;
                }
                else if(xmlHttpRequest.status == 503)
                {
                    errorCode += '.' + webservices.ErrorCodes.SERVICEUNAVAILABLE;
                }
                else
                {
                    errorCode += '.' + xmlHttpRequest.status;
                }

                response = new webservices.ResponseBase();
                response.set_statusType(webservices.ResponseBase.STATUS_TYPE_FAILURE);
                response.set_statusReason(new webservices.Error(errorCode));
            }
        }
        else
        {
            response = new webservices.ResponseBase();
            response.set_statusType(webservices.ResponseBase.STATUS_TYPE_FAILURE);
            response.set_statusReason(new webservices.Error(webservices.ErrorCodes.ERROR + '.' + webservices.ErrorCodes.HTTP));
        }


        return response;
    },

	// private methods

    _buildResponseFromResponseText : function(jsonStr, url)
    {
        common.Debug.traceMethodEntered("Json.GenericResponseBuilder.buildResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);
        common.Debug.traceStatus("url is: " + url);

        var response = null;

        if (jsonStr)
        {
            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json)
            {
                if(json.chat)
                {
                    response = this._chatResponseBuilder.buildChatResponse(jsonStr);
                }
                else if(json.callback)
                {
                    response = this._callbackResponseBuilder.buildCallbackResponse(jsonStr, url);
                }
                else if(json.registration)
                {
                    response = this._registrationResponseBuilder.buildRegistrationResponse(jsonStr);
                }
                else if(json.partyInfo)
                {
                    response = this._partyInfoResponseBuilder.buildPartyInfoResponse(jsonStr);
                }
                else if(json.queue)
                {
                    response = this._queueQueryResponseBuilder.buildQueueQueryResponse(jsonStr);
                }
                else if(common.Utilities.isType(json, Array) && json.length >= 1 && json[0].serverConfiguration)
                {
                    response = this._serverConfigurationResponseBuilder.buildServerConfigurationResponse(jsonStr);
                }
            }
        }

        // if it got to this point, then the http part was ok, but the web processor bridge is hosed        
        if(!response)
        {
            response = new webservices.ResponseBase();
            response.set_statusType(webservices.ResponseBase.STATUS_TYPE_FAILURE);
            response.set_statusReason(new webservices.Error(webservices.ErrorCodes.ERROR + '.' + webservices.ErrorCodes.WEBSVC));
        }

        common.Debug.traceMethodExited("Json.GenericResponseBuilder.buildResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * ServerConfigurationManager class 
 * Extends ServerConfigurationManagerBase with JSON-specific functionality
 */
webservices.Json._Internal._ServerConfigurationManager = Class.create(webservices.ServerConfigurationManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
	 * @param serverConfigurationProcessor An instance of (a subclass of) ServerConfigurationProcessorBase, such as ServerConfigurationProcessor
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, serverConfigurationProcessor)
    {
        common.Debug.traceMethodEntered("Json.ServerConfigurationManager.initialize()");

        $super(genericResponseBuilder, capabilityRepository, serverConfigurationProcessor);

        common.Debug.traceMethodExited("Json.ServerConfigurationManager.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.ServerConfigurationManager.createAjaxManager()");
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.ServerConfigurationManager.createAjaxManager()");
        return mgr;
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * (WebServices) LanguageCodeConverter class 
 *  
 * Provides methods pertaining to the use of language codes (aka IETF Tags).  Examples of these tags are: 
 * en-US = English as spoken in the US 
 * en-GB = English as spoken in Great Britain 
 * de-CH = German as spoken in Switzerland 
 * ...etc. 
 *  
 * Note that generally the region portion of a language code is capitalized, but this is merely a convention, and 
 * this web application does not follow that convention. 
 *  
 * There is no need to instantiate this class - a singleton instance called webservices.LanguageCodeConverter is available. 
 */
webservices._Internal.LanguageCodeConverter = Class.create({
    /**
     * Constructor does nothing because all the functionality is essentially static
     */
    initialize : function() {
    },

    /**
     * Attempts to convert a language code into one for which ININ has created a resource file. 
     * It will not convert from one language to another, it just affects regional dialects of langauges. 
     *  
     * Note that LanguageList has functionality where if "xx-YY" is added, it will automatically add the base "XX" to 
     * the list as well.  LanguageCodeConverter is intended for trickier situations than that.
     *  
     * For instance, if passed "en-AU", it will return "en-US" since we publish a resource file for US English 
     * but not one for Australian English nor one for general English ("en").
     *  
     * Note, however, this means that if someone's language preference order is { "en-AU" (which we don't have), 
     * "fr" (which we do have), "en-US" (which we do have) }, this will result in them getting "en-US" since it's 
     * our designated substitute for their first choice.  But such situations will be rare.
     *  
     * @param languageCode A language code (presumably, one in which the user would like to chat, or would like to see the user interface, etc.)
     * @param A language code to use instead of the one that was passed in 
     */
    convert : function(languageCode)
    {
        if (null == languageCode || "" == languageCode) {
            common.Debug.traceError("Received empty languageCode");
            common.Debug.breakpoint();
            return languageCode;
        }

        // We don't distribute a general "pt" file, just "pt-BR".  If someone requests "pt",
        // it's better to give them "pt-BR" rather than something non-Portuguese.
        if (languageCode.match(/^pt/i) && !languageCode.match(/^pt-BR/i)) {
			common.Debug.traceStatus('Substituting "pt-br" for "' + languageCode + '"');
            return "pt-br";
        }

        if (languageCode.match(/^en/i) && !languageCode.match(/^en-US/i)) {
			common.Debug.traceStatus('Substituting "en-us" for "' + languageCode + '"');
            return "en-us";
        }

        // Norwegian Bokmal and Norwegian Nynorsk map to Norwegian.
        if (languageCode.match(/^nb/i) || languageCode.match(/^nn/i)) {
			common.Debug.traceStatus('Substituting "no" for "' + languageCode + '"');
            return "no";
        }

        // We distribute zh-Hans (simplified Chinese) and zh-Hant (traditional Chinese).
        // But, browsers may send any of: zh-Hans, zh-SG (Singapore), zh-Hant,
        // zh-HK (Hong Kong), zh-MO (Macau), zh-TW (Taiwan), zh
        if (languageCode.match(/^zh$/i) || languageCode.match(/^zh-CN/i) || languageCode.match(/^zh-SG/i))
        {
			common.Debug.traceStatus('Substituting "zh-Hans" for "' + languageCode + '"');
            return "zh-Hans";
        }

        if (languageCode.match(/^zh-HK/i) || languageCode.match(/^zh-TW$/i) || languageCode.match(/^zh-MO/i))
        {
			common.Debug.traceStatus('Substituting "zh-Hant" for "' + languageCode + '"');
            return "zh-Hant";
        }

        return languageCode;
    },

    /**
     * Returns the first token of a language code.  For instance, if the parmameter is "en-US", then "en" will be returned. 
     *  
     * @param languageCode The language code whose first token is to be returned. 
     */
    getFirstToken : function(languageCode)
    {
        if(!languageCode)
        {
            return "";
        }

        var tokens = languageCode.split("-");
        return tokens[0];
    }
});
webservices.LanguageCodeConverter = new webservices._Internal.LanguageCodeConverter();

/** 
 * An ordered list of unique language codes.  Adding a language multiple times will have the same effect as adding it only once. 
 */
webservices.LanguageList = Class.create(
{
	/**
	 * Constructor
	 */
    initialize: function()
    {
		this._array = new Array();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
		delete this._array;
	},

	/**
	 * Determines whether the list already contains a certain language code.  Case-insensitive.
	 * 
     * @param languageCode A string whose value is a language code, i.e. "en-US".
     * @return true if the language code is contained in the list.  False if it is empty or not contained in the list. 
	 */
	contains: function(languageCode)
	{
        if (null == languageCode || languageCode.length == 0)
		{
			return false;
		}

		return (-1 != this._array.indexOf(languageCode));
	},

	/**
	 * Adds a language code to the list.  Case-insensitive.  Attempts to add null or the empty string will have no effect.
	 * 
	 * @param languageCode A string whose value is a language code, i.e. "en-US". 
	 */
    push: function(languageCode)
	{
        common.Debug.traceMethodEntered("LanguageList.push()");
        if (null == languageCode || languageCode.length <= 0)
        {
            return;
        }

        languageCode = languageCode.toLowerCase();
        var convertedLanguageCode = webservices.LanguageCodeConverter.convert(languageCode);
        var extraLogInfo = "";
        if (languageCode != convertedLanguageCode)
        {
            extraLogInfo = ' (in lieu of "' + languageCode + '")';
        }

        if (this.contains(convertedLanguageCode))
        {
            common.Debug.traceStatus('Already added language "' + convertedLanguageCode + '"' + extraLogInfo);
        } else
		{
			this._array.push(convertedLanguageCode);
            common.Debug.traceStatus('Added language "' + convertedLanguageCode + '"' + extraLogInfo);

            var hyphenIdx = languageCode.lastIndexOf('-');
            if (hyphenIdx > 0)
            {
                var baseLanguageCode = languageCode.substr(0, hyphenIdx)
                common.Debug.traceStatus('Recursing to add base language, "' + baseLanguageCode + '"');
                this.push(baseLanguageCode);
            }
		}
        common.Debug.traceMethodExited("LanguageList.push()");
	},

	/**
	 * Returns an Array containing the language codes in this list.  The Array is a copy, so the caller may 
	 * alter the array without affecting this LanguageList.
	 *  
	 * @return Array of strings, each of which holds a language code. 
	 */
	toArray: function()
	{
        return this._array.clone();
	}
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * LanguagePreferenceRepository class
 *
 * Many factors influence which language is used for chat.  This class manages those. 
 *  
 * In priority order, the factors are: 
 * 1. Whether the language to use for this chat has been explicitly specified.  To do this, a customer may create a customization 
 *    in which the user can click a French flag, or a link that says "Chat in English", etc. which results in a call to
 *    Bootloader.setLanguage().
 * 2. The language(s) specified by the user's web browser settings.  Javascript can't directly "see" this, only server-side code.  So 
 *    it is included in the server configuration response so that the client side can use it.  Multiple may be specified, with
 *    priorities included.
 * 3. The language specified by the user's OS settings. 
 * 4. The language specified in config.js
 */
webservices._Internal._LanguagePreferenceRepository = Class.create(
{
	/**
	 * Constructor
	 */
    initialize: function()
    {
		this._specifiedLanguage = null;
		this._browserLanguages = null;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
	},

	/**
	 * Returns an array of languages, in the order in which the application should attempt to use them. 
	 *  
	 * @return Array of language codes 
	 */
	getLanguagePreferenceOrder : function()
	{
		common.Debug.traceMethodEntered("LanguagePreferenceRepository.getLanguagePreferenceOrder()");

		var languagePreferenceOrder = new webservices.LanguageList();

		// 1. Explicitly-specified language
		if (this._getSpecifiedLanguage())
		{
			common.Debug.traceStatus("Specified language is: " + this._getSpecifiedLanguage());
            languagePreferenceOrder.push(this._getSpecifiedLanguage());
		}

		// 2. The language(s) specified by the user's web browser settings.
        if (this._getBrowserLanguages())
		{
			var browserLanguages = this._getBrowserLanguages();
			common.Debug.traceStatus("Browser language(s) are: " + browserLanguages.join());
			for (var i=0; i<browserLanguages.length; i++)
			{
				languagePreferenceOrder.push(browserLanguages[i]);
			}
		}

		// 3. The language specified by the user's OS settings.
        if (this._getOSLanguage())
		{
			common.Debug.traceStatus("OS language is: " + this._getOSLanguage());
            languagePreferenceOrder.push(this._getOSLanguage());
		}

		// 4. The langauge specified in config.js
        if (this._getDefaultLanguage())
		{
			common.Debug.traceStatus("Default language is: " + this._getDefaultLanguage());
            languagePreferenceOrder.push(this._getDefaultLanguage());
		}

		common.Debug.traceStatus("Language preference order: " + languagePreferenceOrder.toArray().join());
		common.Debug.traceMethodExited("LanguagePreferenceRepository.getLanguagePreferenceOrder()");
        return languagePreferenceOrder.toArray();
	},

	/**
	 * Setter method so this class can know which language(s) are specified in the web user's browser's settings.
	 * 
	 * @param browserLanguages String value, as specified in the definition of the Accept-Language HTTP parameter:
	 * May contain one or more language codes, separated by commas (and optional whitespace).  Each language code may
	 * have a preference between 1.0 (highest) and 0.0 (lowest) specified.  Example: 
	 * en-us,en;q=0.8;de;q=0.5 
	 * Meaning of previous example:  "I prefer US English.  Other regional forms of English are fine.  If English is 
	 * unavailable, German is acceptable." 
	 */
	setBrowserLanguages : function(browserLanguages)
	{
		common.Debug.traceMethodEntered("LanguagePreferenceRepository.setBrowserLanguages()");
		common.Debug.traceStatus("Browser language(s) are: " + browserLanguages);

		this._reset();

		if (-1 == browserLanguages.indexOf(","))
		{
			this._addBrowserLanguage(browserLanguages);
		}
		else
		{
			// Loop through the specified languages, and add them in the order of their specified preference (from high to low)
			browserLanguages = browserLanguages.replace(/\s*/, "");
			var languages = browserLanguages.split(/,/);
			while (languages.length > 0)
			{
				common.Debug.traceStatus("Searching for highest-preference language of: " + languages.length);
				var maxPreference = -1;
				var maxPreferenceLanguage = null;
				var maxPreferenceLanguageIndex = -1;
				for (var i=0; i<languages.length; i++)
				{
					var token = languages[i];
					common.Debug.traceStatus("Token: " + token);
					if (-1 == token.indexOf(";q="))
					{
						// maxPreference is irrelevant - this one is 1.0
						maxPreferenceLanguage = token;
						maxPreferenceLanguageIndex = i;
						break;
					}
					else
					{
						var languageAndPreference = token.split(/;q=/);
						if (languageAndPreference[1] > maxPreference)
						{
							maxPreference = languageAndPreference[1];
							maxPreferenceLanguage = languageAndPreference[0];
							maxPreferenceLanguageIndex = i;
						}
					}
				}
				common.Debug.traceStatus("Next highest-preference language: " + maxPreferenceLanguage);
				this._addBrowserLanguage(maxPreferenceLanguage);
				languages.splice(maxPreferenceLanguageIndex, 1);
			}
		}
		common.Debug.traceStatus("Method finished.  Browser language(s) are: " + this._getBrowserLanguages().join(", "));
		common.Debug.traceMethodExited("LanguagePreferenceRepository.setBrowserLanguages()");
	},

    // private methods

    _getSpecifiedLanguage : function()
	{
		return localization.LanguageCode;
	},

	/*
	 * Resets this application's copy of the preferred languages specified in the user's browser settings.
	 * 
	 * @author Jonathan.Keller (1/7/2011)
	 */
	_reset : function()
	{
		this._browserLanguages = new Array();
	},

	/*
	 * Adds one language to this application's copy of the preferred languages specified in the user's browser settings.
	 */
	_addBrowserLanguage : function(browserLanguage)
	{
		this._browserLanguages.push(browserLanguage);
	},

	/*
	 * Gets the web user's preferred languages, as specified in their web browser's settings.
	 * 
	 * @return Array of language codes, in order of the web user's preference.  Ties may be in either order, i.e. if HTTP Accept-Language parameter was "en;q=0.8,es;q=0.8", this may return either [ "en", "es" ] or [ "es", "en" ].
	 */
	_getBrowserLanguages : function()
	{
		return this._browserLanguages;
	},

	_getOSLanguage : function()
	{
		return navigator.language /* Firefox */ || navigator.userLanguage /* IE */;
	},

	_getDefaultLanguage : function()
	{
	    return config.DefaultLanguageCode;
	}
});

/**
 * Singleton instance of the _LanguagePreferenceRepository class.
 */
webservices.LanguagePreferenceRepository = new webservices._Internal._LanguagePreferenceRepository();

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * _DefaultRetryCounts class 
 *  
 * Do not instantiate this class directly.  Use 
 * webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.RetryCounts) 
 *  
 * If it is desired to change the number of times that failed AJAX requests 
 * of various types will be retried, do the following:
 * 1. Create a subclass of webservices._Internal._DefaultRetryCounts.  Override one 
 *    or methods to return a different number. 
 * 2. Change the line in RetryCountsFactory that 
 *    instantiates a new webservices._Internal._DefaultRetryCounts. 
 *    Make that line instead create an instance of the subclass from step 1.
 *  
 * Important:  Note that if certain HTTP response codes are received as a 
 * result of a request, the client will not retry the request, regardless 
 * of the value returned by the applicable method below. 
 */
webservices._Internal._DefaultRetryCounts = Class.create(
{
    /**
     * Constructor.  Does nothing.
     */
    initialize : function()
    {
    },

    /**
     * This method returns the number of times a failed poll operation 
     * should be retried. 
     *  
     * Since a chat polls over and over again periodically, this defaults 
     * to 0, because if one poll operation fails, another will happen in 
     * a few seconds anyway. 
     */
    get_pollRetries : function()
    {
        return 0;
    },

    /**
     * This method returns the number of times a failed request to exit 
     * a chat should be retried. 
     */
    get_exitRetries : function()
    {
        return 0;
    },

    /**
     * This method returns the number of times a failed request to start 
     * a chat should be retried. 
     */
    get_startChatRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to reconnect 
     * a chat should be retried.  (Applicable only if the WebProcessorBridge 
     * lists reconnection as a capability, which is not the case at the 
     * present time.) 
     */
    get_reconnectRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to register 
     * a new account with Tracker should be retried. 
     */
    get_trackerRegistrationRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to get a file
     * sent by an agent should be retried. 
     *  
     * Not currently used, since clicking a link to get a file is not handled 
     * via AJAX. 
     */
    get_getFileRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to create a
     * Callback should be retried. 
     */
    get_createCallbackRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to send a
     * message should be retried. 
     */
    get_sendMessageRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to set the
     * web user's typing state (to either true or false) should be retried. 
     */
    get_setTypingStateRetries : function()
    {
        return 1;
    },

    /**
     * This method returns the number of times a failed request to obtain 
     * server configuration should be retried, per server. 
     *  
     * Example: A switchover pair is configured.  For some reason, neither is responding. 
     * A web user loads the chat client.  If this method returns 3 (the default), 
     * the chat client will attempt to contact server #1, #2, #1, #2, #1, #2, #1, 
     * #2, and then give up.  That reflects one try and three retries per server. 
     *  
     * Example 2: Switchover is not configured.  For some reason, the IC server is 
     * not responding.  A web user loads the chat client.  If this method returns 
     * 3 (the default), the chat cilent will attempt to contact the IC server 
     * four times: one try and three retries. 
     *  
     * Note that this applies only to the attempt to obtain server configuration 
     * before beginning a chat. 
     *  
     * This method does not apply to cases in which a chat is in-progress and one 
     * of the other operations (poll, send message, etc.) fails for the specified 
     * number of retries.  In that case, the chat client will attempt to get the 
     * server configuration an indefinite number of times.  These attempts will
     * have a pause between them, the length of which is specified by the return
     * value of get_reconnectTimeoutMilliseconds().  In the case of a switchover pair, 
     * it will try to connect to server #1, then server #2, then pause, and repeat this process 
     * indefinitely. 
     */
    get_serverConfigurationRetries : function()
    {
        return 3;
    },

    /**
     * This method returns the number of times a failed request to send a
     * problem report should be retried. 
     */
    get_problemReportRetries : function()
    {
        return 0;
    },

    /** 
     * If a chat that is in progress fails to connect to the 
     * server (or, in the case of a switchover pair, fails to 
     * connect to both of the servers), the chat will idle for 
     * a period of time before attempting to contact the server(s) 
     * again.  That period of time is determined by choosing a 
     * random integer between the return value of this method and 
     * its companion, get_reconnectTimeoutMillisecondsMaximum. 
     *  
     * If a non-random value is desired, modify RetryCountsFactory 
     * to return a custom subclass of this class, and override both 
     * methods to return the same value. 
     *  
     * Note: if a subclass overrides this method to return a different 
     * value, it is recommended that the string associated with resource ID 
     * "CouldNotConnectServerRetry" also be changed to reflect the new
     * timeout value. 
     */
    get_reconnectTimeoutMillisecondsMinimum : function()
    {
        return 3000;
    },

    /** 
     * If a chat that is in progress fails to connect to the 
     * server (or, in the case of a switchover pair, fails to 
     * connect to both of the servers), the chat will idle for 
     * a period of time before attempting to contact the server(s) 
     * choosing a random integer between the return value of this 
     * method and its companion, * get_reconnectTimeoutMillisecondsMinimum. 
     *  
     * If a non-random value is desired, modify RetryCountsFactory 
     * to return a custom subclass of this class, and override both 
     * methods to return the same value. 
     *  
     * Note: if a subclass overrides this method to return a different 
     * value, it is recommended that the string associated with resource ID 
     * "CouldNotConnectServerRetry" also be changed to reflect the new
     * timeout value. 
     */
    get_reconnectTimeoutMillisecondsMaximum : function()
    {
        return 5000;
    },

    /**
     * Sets how many milliseconds (thousandths of a second) to wait for a response 
     * from an AJAX request before aborting the request. 
     *  
     * The default value is 12 seconds. 
     */
    get_ajaxTimeoutMilliseconds : function()
    {
        return 12000;
    }
});

// Register namespaces
webservices.registerChildNamespace("CustomizableSingletonFactoryTypes");

/**
 * webservices.CustomizableSingletonFactoryTypes enum 
 * Identifies the factories for various types that may be customized. 
 */
webservices.CustomizableSingletonFactoryTypes.MIN = 1;

webservices.CustomizableSingletonFactoryTypes.LoginInfoSource = 1;
webservices.CustomizableSingletonFactoryTypes.MaximumFieldLengths = 2;
webservices.CustomizableSingletonFactoryTypes.RetryCounts = 3;
webservices.CustomizableSingletonFactoryTypes.TabVisibility = 4;
webservices.CustomizableSingletonFactoryTypes.StatusFieldsDisplay = 5;
webservices.CustomizableSingletonFactoryTypes.Linkifier = 6;
webservices.CustomizableSingletonFactoryTypes.SendOnEnter = 7;

webservices.CustomizableSingletonFactoryTypes.MAX = 7;

// Register namespaces
webservices.registerChildNamespace("CustomizableFactoryTypes");

/**
 * webservices.CustomizableFactoryTypes enum 
 * Identifies the factories for various types that may be customized. 
 */
webservices.CustomizableFactoryTypes.MIN = 1001;
webservices.CustomizableFactoryTypes.RegistrationFormPanel = 1001;
webservices.CustomizableFactoryTypes.MAX = 1001;

// Register namespaces
webservices.registerChildNamespace("_Internal");

/** 
 * CustomizationFactoryRegistry class 
 *  
 * This class is used in implementing the "customization points" which 
 * allow customization of certain behaviours.  It maintains an association between 
 * the classes that can be customized, represented by the CustomizableFactoryTypes 
 * enum, and the factories which are used to obtain instances of those classes. 
 *  
 * Do not instantiate this directly. 
 * Instead, use the singleton webservices.CustomizationFactoryRegistry. 
 */
webservices._Internal._CustomizationFactoryRegistry = Class.create(
{
	/**
	 * Constructor
	 */
    initialize : function()
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.initialize()");
        this._factories = new Hash();
        this._singletonFactories = new Hash();
        this._createFactories();
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.initialize()");
    },

    /**
     * Destructor 
     */
    destroy : function()
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.destroy()");
        var keys = this._factories.keys();
        for (var i=0; i<keys.length; i++)
        {
            common.Debug.traceNote("Deleting factory for key: " + keys[i]);
            var factory = this._factories.unset(keys[i]);
            delete factory;
        }
        
        keys = this._singletonFactories.keys();
        for (var i=0; i<keys.length; i++)
        {
            common.Debug.traceNote("Deleting singleton factory for key: " + keys[i]);
            var factory = this._singletonFactories.unset(keys[i]);
            delete factory;
        }
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.destroy()");
    },

    /** 
     * Associates a non-singleton type with the factory that may be used to get instance(s) 
     * of that type. 
     *  
     * @param type A member of the webservices.CustomizableFactoryTypes enum 
     * @param factory Something that implements the webservices.Interfaces.ICustomizationFactory interface 
     */
    registerFactory: function(type, factory)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.registerFactory()");
        common.Interface.ensureImplements(factory, webservices.Interfaces.ICustomizationFactory);
        this._validateType(type);
        this._factories.set(type, factory);
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.registerFactory()");
    },

    /** 
     * Associates a singleton type with the factory that may be used to get instance(s) 
     * of that type. 
     *  
     * @param type A member of the webservices.CustomizableSingletonFactoryTypes enum 
     * @param factory Something that implements the webservices.Interfaces.ICustomizationSingletonFactory interface 
     */
    registerSingletonFactory: function(type, factory)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.registerSingletonFactory()");
        common.Interface.ensureImplements(factory, webservices.Interfaces.ICustomizationSingletonFactory);
        this._validateSingletonType(type);
        this._singletonFactories.set(type, factory);
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.registerSingletonFactory()");
    },

    /**
     * Gets the factory that may be used to create an instance of a particular non-singleton customizable type. 
     *  
     * @param type A member of the webservices.CustomizableFactoryTypes enum 
     * @return A factory that implements the webservices.Interfaces.ICustomizationFactory interface 
     */
    get_factory : function(type)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.get_factory()");
        this._validateType(type);
        var returnValue = this._factories.get(type);
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.get_factory()");
        return returnValue;
    },

    /**
     * Gets the singleton factory that may be used to access the instance of a particular customizable type. 
     *  
     * @param type A member of the webservices.CustomizableSingletonFactoryTypes enum 
     * @return A factory that implements the webservices.Interfaces.ICustomizationSingletonFactory interface 
     * @see get_instance() 
     */
    get_singletonFactory : function(type)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.get_singletonFactory()");
        this._validateSingletonType(type);
        var returnValue = this._singletonFactories.get(type);
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.get_singletonFactory()");
        return returnValue;
    },

    /**
     * Convenience method that implements get_factory(type).create_instance(args) with null-safety.
     * 
     * @param type A member of the webservices.CustomizableFactoryTypes enum 
     * @param args The JSON arguments to pass to the factory's create_instance() method.
     * @return An instance (possibly one of many) of whatever type of object this factory creates 
     */
    create_instance : function(type, args)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.create_instance()");
        var returnValue = null;
        var factory = this.get_factory(type);
        if (null != factory)
        {
            returnValue = factory.create_instance(args);
        }
        else
        {
            common.Debug.traceWarning("Can't find factory for type: " + type);
        }
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.create_instance()");
        return returnValue;
    },

    /**
     * Convenience method that implements get_singletonFactory(type).get_instance() with null-safety.
     * 
     * @param type A member of the webservices.CustomizableSingletonFactoryTypes enum 
     * @return The (only!) instance of whatever type of object this factory creates 
     */
    get_instance : function(type)
    {
        common.Debug.traceMethodEntered("CustomizationFactoryRegistry.get_instance()");
        var returnValue = null;
        var factory = this.get_singletonFactory(type);
        if (null != factory)
        {
            returnValue = factory.get_instance();
        }
        else
        {
            common.Debug.traceWarning("Can't find singleton factory for type: " + type);
        }
        common.Debug.traceMethodExited("CustomizationFactoryRegistry.get_instance()");
        return returnValue;
    },

    _validateType : function(type)
    {
        if (type < webservices.CustomizableFactoryTypes.MIN ||
            type > webservices.CustomizableFactoryTypes.MAX)
        {
            throw common.ExceptionFactory.createException('"' + type + '" is not a valid CustomizableFactoryType.');
        }
    },

    _validateSingletonType : function(type)
    {
        if (type < webservices.CustomizableSingletonFactoryTypes.MIN ||
            type > webservices.CustomizableSingletonFactoryTypes.MAX)
        {
            throw common.ExceptionFactory.createException('"' + type + '" is not a valid CustomizableFactoryType.');
        }
    },

    // Contains/reduces the boilerplate that was previously located in Customizations.js
    _createFactories : function()
    {
        for (name in ININ.Web.Chat.Customizations.singletonImplementations)
        {
            (function(type) {
                ININ.Web.Chat.Customizations[type + "Factory"] = Class.create(common.InterfaceImplementation,
                {
                    _instance : null,

                    /**
                     * Constructor
                     */
                    initialize : function($super)
                    {
                        if(arguments.length != 1)
                        {
                            throw common.ExceptionFactory.createException(type + "Factory constructor called with " + arguments.length + " arguments, but expected 1.");
                        }

                        $super();

                        this.addImplementedInterface(webservices.Interfaces.ICustomizationFactory, webservices);
                    },

                    get_instance: function(args)
                    {
                        if (null == this._instance)
                        {
                            this._instance = new ININ.Web.Chat.Customizations.singletonImplementations[type](args);
                        }
                        return this._instance;
                    }
                });
            })(name);
        }

        // Factory for non-singleton objects

        for (name in ININ.Web.Chat.Customizations.nonSingletonImplementations)
        {
            (function(type) {
                ININ.Web.Chat.Customizations[type + "Factory"] = Class.create(common.InterfaceImplementation,
                {
                    /**
                     * Constructor
                     */
                    initialize : function($super)
                    {
                        if(arguments.length != 1)
                        {
                            throw common.ExceptionFactory.createException(type + "Factory constructor called with " + arguments.length + " arguments, but expected 1.");
                        }

                        $super();

                        this.addImplementedInterface(webservices.Interfaces.ICustomizationFactory, webservices);
                    },

                    create_instance: function(args)
                    {
                        return new ININ.Web.Chat.Customizations.nonSingletonImplementations[type](args);
                    }
                });
            })(name);
        }
    }
});

/** 
 * A class representing a duration of time.  Granularity is currently 1 second. 
 * Provides methods whose names fall into three categories: get___(), getTotal___(), and getRounded___().
 *  
 * Example 1: 
 * 270150 seconds = 3 days, 3 hours, 2 minutes, and 30 seconds.  For a TimeDuration object representing 
 * this duration: 
 * getSeconds() will return 30, whereas getTotalSeconds() will return 270150. There is no getRoundedSeconds() method.
 * getMinutes() will return 2, whereas getTotalMinutes() will return 4502. 
 * getRoundedMinutes() will return 3, since 2:30 is closer to 3:00 than to 2:00.
 * getHours() will return 3, whereas getTotalHours() will return 75. 
 * getRoundedHours() will return 3. 
 * getDays() and getRoundedDays() will both return 3. 
 *  
 * Example 2: 
 * For an object representing 5 days, 14 hours, 45 minutes, and 18 seconds: 
 * getRoundedDays() will return 6.
 * getRoundedHours() will return 15.
 * getRoundedMinutes() will return 45.
 *  
 * Example 3: 
 * For an object representing 1 hour, 29 minutes, and 30 seconds: 
 * getRoundedMinutes() will return 30. 
 * getRoundedHours() will return 1, because this is based on the unrounded number of minutes, not the rounded number of minutes.
 *  
 * Example 4:
 * For an object representing 1 day, 23 hours, 59 minutes, and 59 seconds: 
 * getRoundedDays() will return 2. 
 * getRoundedHours() will return 0, not 24! 
 * getRoundedMinutes() will return 0, not 60!
 *  
 * Note that all methods return integers! 
 * For 179 seconds (which is 2:59), getMinutes() will return 2.  Not 2.98333, and not 3. 
 * There is no getTotalDays() method.  Since this class does not handle longer durations (weeks, 
 * months, years, etc.) getTotalDays() would always return the same as getDays(), so there is no need for it. 
 */
webservices.TimeDuration = Class.create(
{
	/**
     * Constructor 
     *  
     * @params How many seconds this TimeDuration represents 
	 */
    initialize: function(seconds)
    {
        this.set(seconds);
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
	},

    /**
     * Makes this TimeDuration object represent a duration of 0.
     */
    reset : function()
    {
        this._seconds = this._minutes = this._hours = this._days = 0;
        this._totalSeconds = this._totalMinutes = this._totalHours = 0;
    },

	/**
     * Changes the amount of time that this object represents.
     *  
     * @params How many seconds this TimeDuration now represents 
	 */
    set : function(seconds)
    {
        this.reset();

        this._totalSeconds = seconds;
        this._seconds = this._totalSeconds % 60;

        if (this._totalSeconds > 60)
        {
            this._totalMinutes = Math.floor(this._totalSeconds / 60);
            this._minutes = this._totalMinutes % 60;

            if (this._totalMinutes > 60)
            {
                this._totalHours = Math.floor(this._totalMinutes / 60);
                this._hours = this._totalHours % 24;

                if (this._totalHours > 24)
                {
                    this._days = Math.floor(this._totalHours / 24);
                }
            }
        }
    },

    /**
     * Returns how many seconds this TimeDuration object represents, excluding the minutes, hours, and days portion. 
     * For instance, after calling set(275), which is 4 minutes and 35 seconds, this method will return 35. 
     *  
     * @return integer, 0 through 59 
     */
    getSeconds : function()
    {
        return this._seconds;
    },

    /**
     * Returns how many seconds this TimeDuration object represents, including the minutes, hours, and days portion. 
     * For instance, after calling set(275), which is 4 minutes and 35 seconds, this method will return 275.
     *  
     * @return integer 
     */
    getTotalSeconds : function()
    {
        return this._totalSeconds;
    },

    /**
     * Returns how many minutes this TimeDuration object represents, excluding the seconds, hours, and days portion. 
     * For instance, after calling set(7475), which is 2 hours, 4 minutes and 35 seconds, this method will return 4.
     *  
     * @return integer, 0 through 59 
     */
    getMinutes : function()
    {
        return this._minutes;
    },

    /**
     * Returns how many minutes this TimeDuration object represents, if the seconds are rounded to the nearest minute. 
     * For instance, after calling set(275), which is 4 minutes and 35 seconds, this method will return 5. 
     * Another example: after calling set(7399), which is 1 hour, 59 minutes, and 59 seconds, this method will 
     * return 0 since that rounds to 2 hours 0 minutes. 
     *  
     * @return integer, 0 through 59 
     */
    getRoundedMinutes : function()
    {
        if (this.getSeconds() < 30)
        {
            return this.getMinutes();
        }
        else
        {
            return 1 + this.getMinutes();
        }
    },

    /**
     * Returns how many minutes this TimeDuration object represents, including the hours and days portion. 
     * For instance, after calling set(7475), which is 2 hours, 4 minutes and 35 seconds, which 
     * equals 124 minutes and 35 seconds, this method will return 124.
     *  
     * @return integer 
     */
    getTotalMinutes : function()
    {
        return this._totalMinutes;
    },

    /**
     * Returns how many hours this TimeDuration object represents, excluding the seconds, minutes, and days portion. 
     * For instance, after calling set(356521), which is 4 days, 3 hours, 2 minutes, and 1 second, this method will return 3. 
     *  
     * @return integer, 0 through 23 
     */
    getHours : function()
    {
        return this._hours;
    },

    /**
     * Returns how many hours this TimeDuration object represents, if the minutes are rounded to the nearest hour. 
     * For instance, after calling set(7399), which is 1 hour, 59 minutes, and 59 seconds, this method will 
     * return 2 since that rounds to 2 hours 0 minutes.  Days are ignored: if this TimeDuration object represented 
     * 8 days, 1 hour, 59 minutes, and 59 seconds, this method would still return 2. 
     *  
     * @return integer, 0 through 59 
     */
    getRoundedHours : function()
    {
        if (this.getMinutes() < 30)
        {
            return this.getHours();
        }
        else
        {
            return 1 + this.getHours();
        }
    },

    /**
     * Returns how many hours this TimeDuration object represents, including the days portion. 
     * For instance, after calling set(356521), which is 4 days, 3 hours, 2 minutes, and 1 second, which 
     * equals 99 hours, 2 minutes, and 1 second, this method will return 99. 
     *  
     * @return integer
     */
    getTotalHours : function()
    {
        return this._totalHours;
    },

    /**
     * Returns how many days this TimeDuration object represents, excluding the hours, minutes, and seconds portion. 
     * For instance, after calling set(356521), which is 4 days, 3 hours, 2 minutes, and 1 second, this method will 
     * return 4. 
     *  
     * @return integer
     */
    getDays : function()
    {
        return this._days;
    },

    /**
     * Returns how many days this TimeDuration object represents, if the hours are rounded to the nearest day. 
     * For instance, if this object represents 5 days and 12 hours, this method will return 6. 
     *  
     * Note that if this object represents 5 days, 11 hours, 58 minutes, and 30 seconds, this method will return 5. 
     * In other words, this method does NOT round the seconds (5d, 11h, 59m), then round the minutes (5d, 12h), then round 
     * the days. 
     *  
     * @return integer
     */
    getRoundedDays : function()
    {
        if (this.getHours() < 12)
        {
            return this.getDays();
        }
        else
        {
            return 1 + this.getDays();
        }
    }
});

/**
 * Superclass of CallbackManagerBase, ChatManagerBase, RegistrationManagerBase. 
 * All of those are abstract - use their derived classes instead
 */
webservices.InteractionManagerBase = Class.create(webservices.ListenableBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("InteractionManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("InteractionManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super();
        
        this._genericResponseBuilder = genericResponseBuilder;
        this._capabilityRepository = capabilityRepository;
        this._failoverHandler = failoverHandler;

        common.Debug.traceMethodExited("InteractionManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("InteractionManagerBase.destroy()");

        this._genericResponseBuilder = null;
        this._capabilityRepository = null;
        this._failoverHandler = null;

        common.Debug.traceMethodExited("InteractionManagerBase.destroy()");
    },

    // public methods

    /** 
     * Handle a successful response to any AJAX request:
     * 1) Process the response 
     * 2) Alert listeners
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param response An instance of a subclass of ResponseBase, which represents the response to an AJAX request received from the IC server
     */
    onAJAXSuccess: function(response) {
        common.Debug.traceMethodEntered("InteractionManagerBase.onAJAXSuccess()");
        
        common.Debug.traceNote("InteractionManagerBase.onAJAXSuccess calling notifyListenersOfSuccess()");
        this.notifyListenersOfSuccess();
        common.Debug.traceNote("InteractionManagerBase.onAJAXSuccess back from notifyListenersOfSuccess()");
        common.Debug.traceMethodExited("InteractionManagerBase.onAJAXSuccess()");
    },

    /** 
     * Handle an unsuccessful response to any AJAX request.
     * If response is supplied, that indicates that the <i>transport</i> succeeded, but the content
     * of the response indicated a failure.
     * If response is not supplied, that indicates that the transport of the request failed.
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param response An instance of a subclass of ResponseBase, which represents the response to an AJAX request received from the IC server
     */
    onAJAXFailure: function(response) {
        common.Debug.traceMethodEntered("InteractionManagerBase.onAJAXFailure()");

        common.Debug.traceNote("InteractionManagerBase.onAJAXFailure calling handleFailedRequest()");
        this._handleFailedRequest(response);

        common.Debug.traceNote("InteractionManagerBase.onAJAXFailure calling notifyListenersOfFailure()");
        this.notifyListenersOfFailure(response.get_statusReason());
        common.Debug.traceNote("InteractionManagerBase.onAJAXFailure back from notifyListenersOfFailure()");
        common.Debug.traceMethodExited("InteractionManagerBase.onAJAXFailure()");
    },

    // private methods

    _handleFailedRequest : function(response)
    {
        common.Debug.traceMethodEntered("InteractionManagerBase._handleFailedRequest()");
        if(this._isFailoverCondition(response))
        {
            this._handleFailover();
        }
        else if(this._isInvalidSession(response))
        {
            this._handleInvalidSession(response);
        }
        common.Debug.traceMethodExited("InteractionManagerBase._handleFailedRequest()");
    },

    _isFailoverCondition : function(response)
    {
        return !response.isSuccessful() && (response.get_statusReason().get_errorSource() == webservices.ErrorCodes.HTTP);
    },

    _handleFailover : function()
    {
        common.Debug.traceMethodEntered("InteractionManagerBase._handleFailover()");
        common.Debug.traceAlways("InteractionManagerBase._handleFailover: Creating Failover notifications...");

        webservices.NotificationRegistry.process(webservices.NotificationFactory.createFailoverUINotification());
        webservices.NotificationRegistry.process(webservices.NotificationFactory.createFailoverNotification());
        common.Debug.traceMethodExited("InteractionManagerBase._handleFailover()");
    },

    _isInvalidSession : function(response)
    {
        var unknownSessionCode = webservices.ErrorCodes.ERROR + "." +
                                 webservices.ErrorCodes.WEBSVC + "." +
                                 webservices.ErrorCodes.UNKNOWNENTITY + "." +
                                 webservices.ErrorCodes.SESSION;
        return !response.isSuccessful() && (response.get_statusReason().get_errorCode() == unknownSessionCode);
    },

    _handleInvalidSession : function(response)
    {
        // Override in subclasses if it is desired for anything to be done.
    }
});

/**
 * This class is the main brains of working with a queue, but is abstract - use derived class instead
 */
webservices.QueueManagerBase = Class.create(webservices.InteractionManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
     * @param failoverHandler An instance of webservices.Json.FailoverHandler 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("QueueManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("QueueManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);
        
        common.Debug.traceMethodExited("QueueManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
    },

    // public methods

	/**
     * Query the status of a queue.
     * 
     * @param username The username of the person attempting to query a queue 
     * @param userCredentials The password of the person attempting to query a queue (may be empty)
     * @param queueName The name of the queue being queried
     * @param queueType The type of the queue being queried (currently only "Workgroup" is supported)
     */
    queueQuery : function(username, userCredentials, queueName, queueType)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.queueQuery()");

        if (userCredentials == null)
        {
            userCredentials = "";
        }

        var anonymousOk = (userCredentials == "") && webservices.CapabilityRepository.isQueueQueryAnonymousAuthenticationCapabilityEnabled();
        var trackerOk = (userCredentials != "") && webservices.CapabilityRepository.isQueueQueryTrackerAuthenticationCapabilityEnabled();

        if (!(anonymousOk || trackerOk))
        {
            webservices.QueueNotificationRegistry.process(webservices.QueueNotificationFactory.createQueueStatusFailureNotification("error.websvc.unsupportedOperation"));
            return;
        }

        // create the queueQuery capability and then query the queue.  The URL is the same regardless of the authentication method.
        var ajax = this.createAjaxManager(this._capabilityRepository.get_queueQueryAnonymousAuthenticationCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Debug.traceNote("ChatManagerBase.queueQuery() succeeded: " + response);
            webservices.QueueNotificationRegistry.process(webservices.QueueNotificationFactory.createQueueStatusNotification(response.get_agentsAvailable(), response.get_estimatedWaitTime()));
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("ChatManagerBase.queueQuery() failed: " + response);
            webservices.QueueNotificationRegistry.process(webservices.QueueNotificationFactory.createQueueStatusFailureNotification(response.get_statusReason()));
            _self.onAJAXFailure(response);
        });

        ajax.sendRequest(this.serializeQueueQueryPostData(username, userCredentials, queueName, queueType));

        common.Debug.traceMethodExited("ChatManagerBase.queueQuery()");
    }
});

/**
 * QueueQueryResponse class 
 *  
 * When an AJAX request is made to the IC server to query a queue, QueueQueryResponseBuilder 
 * translates the IC server's JSON/XML reply into a QueueQueryResponse. 
 */
webservices.QueueQueryResponse = Class.create(webservices.ResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("QueueQueryResponse.initalize()");

        $super();

        this._estimatedWaitTime = null;
        this._agentsAvailable = null;

        this.addImplementedInterface(webservices.Interfaces.IQueueQueryResponse, webservices);

        common.Debug.traceMethodExited("QueueQueryResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // public methods

    get_agentsAvailable: function()
    {
        return this._agentsAvailable;
    },

    set_agentsAvailable: function(agentsAvailable)
    {
        this._agentsAvailable = agentsAvailable;
    },

    get_estimatedWaitTime: function()
    {
        return this._estimatedWaitTime;
    },

    set_estimatedWaitTime: function(estimatedWaitTime)
    {
        this._estimatedWaitTime = estimatedWaitTime;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * QueueQueryResponseBuilder class 
 * Handles translating the JSON received as the IC server's reply to an AJAX request for querying a queue
 * into an webservices.QueueQueryResponse object.
 */
webservices.Json._Internal.QueueQueryResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        $super();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

	/**
     * Handles translating the JSON received as the IC servers reply to an AJAX request 
     * into an webservices.QueueQueryResponse object.
	 * 
	 * @param jsonStr JSON received from the IC server.  This should have already been vetted to ensure that is not empty, its status indicates success, etc.  In the default implementation, that is done in GenericResponseBuilder.
	 * @return webservices.QueueQueryResponse
	 */
    buildQueueQueryResponse : function(jsonStr)
    {
        common.Debug.traceMethodEntered("Json.QueueQueryResponseBuilder.buildQueueQueryResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (jsonStr)
        {
            response = new webservices.QueueQueryResponse();

            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json.queue)
            {
                response.set_agentsAvailable(json.queue.agentsAvailable);
                response.set_estimatedWaitTime(json.queue.estimatedWaitTime); // seconds

                if(json.queue.status)
                {
                    if(json.queue.status.type)
                    {
                        response.set_statusType(json.queue.status.type);
                    }

                    if(json.queue.status.reason)
                    {
                        var error = null;
                        try
                        {
                            error = new webservices.Error(json.queue.status.reason);
                        }
                        catch(ex)
                        {
                            common.Debug.traceError(ex.message);
                            common.Debug.traceWarning("Invalid status reason: " + json.chat.status.reason);
                        }

                        if(error)
                        {
                            response.set_statusReason(error);
                        }
                    }
                }
            }
        }

        common.Debug.traceMethodExited("Json.QueueQueryResponseBuilder.buildQueueQueryResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * QueueManager class 
 * Extends QueueManagerBase with JSON-specific functionality
 */
webservices.Json.QueueManager = Class.create(webservices.QueueManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
     * @param failoverHandler An instance of webservices.Json.FailoverHandler 
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("Json.QueueManager.initialize()");

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        common.Debug.traceMethodExited("Json.QueueManager.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.QueueManager.createAjaxManager()");
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.QueueManager.createAjaxManager()");
        return mgr;
    },

	/**
     * Takes data necessary to query a queue, and puts it into the appropriate JSON format for sending to the IC server.
	 * @param username The username of the person attempting to query a queue
	 * @param password The password of the person attempting to query a queue
     * @param queueName The name of the queue being queried
     * @param queueType The type of the queue being queried (currently only "Workgroup" is supported)
     */
    serializeQueueQueryPostData : function(username, password, queueName, queueType)
    {
        var json = { };
        
        json.queueName = queueName;
        json.queueType = queueType;
        json.participant = { };
        json.participant.username = username;
        json.participant.password = password;

        return Object.toJSON(json);
    }
});

// Register namespaces
webservices.registerChildNamespace("QueueServicesInitialization");

/**
 * Create objects necessary for querying the queue
 * 
 * @param currentUriFragment The URI fragment currently in use to reverse proxy to the IC server.  See Servers class.
 * @param uriFragments The set of URI fragments that are used to reverse proxy to the IC server(s).  See Servers class.
 * @param useHttps If true, AJAX requests will be made via HTTPS.  If false, they will be made via HTTP.
 */
webservices.QueueServicesInitialization.initialize = function(currentUriFragment, uriFragments, useHttps)
{
    // create singletons
    webservices.QueueNotificationFactory = new webservices._Internal.QueueNotificationFactory();
    webservices.QueueNotificationRegistry = new webservices._Internal._NotificationRegistry(webservices.QueueNotificationFactory);
    webservices.QueueNotificationFactory.delayedInit();
    webservices.CapabilityRepository = new webservices._Internal._CapabilityRepository();
    webservices.Json.GenericResponseBuilder = new webservices.Json._Internal.GenericResponseBuilder(
                                    null,
                                    null,
                                    null,
                                    new webservices.Json._Internal.ServerConfigurationResponseBuilder(),
                                    null,
                                    new webservices.Json._Internal.QueueQueryResponseBuilder());
    webservices.Json.ServerConfigurationProcessor = new webservices.Json._Internal.ServerConfigurationProcessor(webservices.CapabilityRepository, webservices.Json.FailoverHandler);
    webservices.Json.ServerConfigurationManager = new webservices.Json._Internal._ServerConfigurationManager(webservices.Json.GenericResponseBuilder, webservices.CapabilityRepository, webservices.Json.ServerConfigurationProcessor);

    // Set up protocol/servers
    webservices.Servers.UriFragments = uriFragments;
    webservices.Servers.UseHttps = (useHttps == true);

    // use the server as the current uri fragment if it's specified in the query string, else use the one loaded from the page
    var server = common.Utilities.getQueryStringValue("server");
    if(server)
    {
        webservices.Servers.CurrentUriFragment = server;
    }
    else
    {
        webservices.Servers.CurrentUriFragment = currentUriFragment;
    }

    // Factories which can be overridden for customization
    webservices.CustomizationFactoryRegistry = new webservices._Internal._CustomizationFactoryRegistry();
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.RetryCounts, new ININ.Web.Chat.Customizations.RetryCountsFactory());
};

webservices.QueueServicesInitialization.uninitialize = function()
{
};

/**
 * Clean up objects used by the queue.
 */
webservices.QueueServicesInitialization.destroy = function()
{
};


/**
 * This class provides the entry point for customers who wish to provide queue querying
 * on their pages without doing heavy customization. 
 * This can be used by: 
 * var uriFragments = [ "/i3root/Server1", "/i3root/Server2"]; // Or just the first if not using switchover 
 * var currentUriFragment = uriFragments[0]; 
 * var useHttps = true; // Or false, depending on whether the page is access via HTTPS or HTTP
 * var queueQueryer = new webservices.EasyQueueQueryer(currentUriFragment, uriFragments, useHttps);
 * queueQueryer.getQueueInfo(queueName, userId, userCredentials); 
 *  
 * The caller should also register for QueueStatusNotification and QueueStatusFailureNotification. 
 */
webservices.EasyQueueQueryer = Class.create(
{
    initialize: function(currentUriFragment, uriFragments, useHttps)
    {
        this._currentUriFragment = currentUriFragment;
        this._uriFragments = uriFragments;
        this._useHttps = useHttps;
        this._numServerConfigRequestFailovers = 0;
        webservices.QueueServicesInitialization.initialize(this._currentUriFragment, this._uriFragments, this._useHttps);
    },

    /**
     * This method allows you to query the status of an ACD queue. 
     *  
     * @param queueName The name of the ACD queue to query, i.e. "Marketing" 
     * @param userId The user id (in Tracker) of the user who is doing the querying.  For an anonymous user, any string may be passed, such as "Anonymous User".
     * @param userCredentials The credentials (i.e. password) of the user who is doing the querying.  For an anonymous user, pass "".
     */
    getQueueInfo: function(queueName, userId, userCredentials)
    {
        // ServerConfigurationManager expects a callback function that it can just pass (success, failureReason).
        // But the implementation below may need (queueName, userId, userCredentials) also, if it has
        // to fail over.  So, create a closure to give _serverConfigurationCallback() all 5 args that it needs without
        // bothering getServerConfiguration()
        webservices.Json.ServerConfigurationManager.getServerConfiguration(this._serverConfigurationCallback.bind(this, userId, userCredentials, queueName));
    },

    _serverConfigurationCallback : function(userId, userCredentials, queueName, success, failureReason)
    {
        if (success)
        {
            var queueMgr = new webservices.Json.QueueManager(
                                   webservices.Json.GenericResponseBuilder,
                                   webservices.CapabilityRepository,
                                   webservices.Json.FailoverHandler);
            queueMgr.queueQuery(userId, userCredentials, queueName, "Workgroup");
        } else
        {
            if (this._shouldSwitchoverAndTryToGetServerConfigurationAgain())
            {
                common.Debug.traceStatus("Going to switch over, and try again to obtain server configuration.");
                webservices.Servers.switchCurrentServer();
                this._numServerConfigRequestFailovers++;
                webservices.Json.ServerConfigurationManager.getServerConfiguration(this._serverConfigurationCallback.bind(this, userId, userCredentials, queueName));
            } else
            {
                webservices.QueueNotificationRegistry.process(webservices.QueueNotificationFactory.createQueueStatusFailureNotification(failureReason.get_errorCode()));
            }
        }
    },

    _shouldSwitchoverAndTryToGetServerConfigurationAgain : function()
    {
        if (!webservices.Servers.isConfiguredForSwitchover())
        {
            // In this case, the retry logic was already handled
            // in AjaxManagerBase._shouldRequestBeRetriedBasedOnMessageTypeAndRetryCount().
            return false;
        }

        // Adding 1 because retryCounts maintains the number of times to REtry.  So, for instance,
        // initial try + 3 retries = 4 total tries.
        var retryCounts = webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.RetryCounts);
        var numTimesToTry = webservices.Servers.get_numberOfServers() *
                            (1 + retryCounts.get_serverConfigurationRetries());

        return (this._numServerConfigRequestFailovers < numTimesToTry);
    }
});

common.Type.registerNamespace("ININ.Web.Chat.Customizations");

ININ.Web.Chat.Customizations.singletonImplementations =
{
    "RetryCounts"         : webservices._Internal._DefaultRetryCounts
};

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * ISequenceable interface 
 * Provides methods: get_sequenceNumber(), get_dateTime() 
 */
webservices.Interfaces.ISequenceable = new common.Interface('webservices.Interfaces.ISequenceable', ['get_sequenceNumber', 'get_dateTime']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IEvent interface, derived from ISequenceable 
 * Provides method: get_participantId()
 */
webservices.Interfaces.IEvent = new common.Interface('webservices.Interfaces.IEvent', ['get_participantId'], ['webservices.Interfaces.ISequenceable'], webservices);

// IEvent derived interfaces

/**
 * IParticipantStateChangedEvent interface, derived from IEvent
 * Provides additional methods: get_participantName(), get_state()
 */
webservices.Interfaces.IParticipantStateChangedEvent = new common.Interface('webservices.Interfaces.IParticipantStateChangedEvent', ['get_participantName', 'get_state'], ['webservices.Interfaces.IEvent'], webservices);

/**
 * IParticipantSetTypingEvent interface, derived from IEvent
 * Provides additional methods: get_isTyping()
 */
webservices.Interfaces.IParticipantSetTypingEvent = new common.Interface('webservices.Interfaces.IParticipantSetTypingEvent', ['get_isTyping'], ['webservices.Interfaces.IEvent'], webservices);

/**
 * IReceivedTextEvent interface, derived from IEvent
 * Provides additional methods: get_messageText()
 */
webservices.Interfaces.IReceivedTextEvent = new common.Interface('webservices.Interfaces.IReceivedTextEvent', ['get_messageText'], ['webservices.Interfaces.IEvent'], webservices);

/**
 * IReceivedCommandEvent interface, derived from IEvent
 * Provides additional methods: get_command()
 */
webservices.Interfaces.IReceivedCommandEvent = new common.Interface('webservices.Interfaces.IReceivedCommandEvent', ['get_command'], ['webservices.Interfaces.IEvent'], webservices);

/**
 * IReceivedUrlEvent interface, derived from IEvent
 * Provides additional methods: get_messageUrl()
 */
webservices.Interfaces.IReceivedUrlEvent = new common.Interface('webservices.Interfaces.IReceivedUrlEvent', ['get_messageUrl'], ['webservices.Interfaces.IEvent'], webservices);

/**
 * IReceivedFileEvent interface, derived from IEvent
 * Provides additional methods: get_messageRelativeUrl()
 */
webservices.Interfaces.IReceivedFileEvent = new common.Interface('webservices.Interfaces.IReceivedFileEvent', ['get_messageRelativeUrl'], ['webservices.Interfaces.IEvent'], webservices);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

// INotification derived interfaces

/**
 * IParticipantNotification interface, derived from INotification 
 * Provides additional methods: get_participantId(), get_dateTime(), get_isTimedOut(), set_isTimedOut()
 */
webservices.Interfaces.IParticipantNotification = new common.Interface('webservices.Interfaces.IParticipantNotification', ['get_participantId', 'get_dateTime', 'get_isTimedOut', 'set_isTimedOut'], ['webservices.Interfaces.INotification'], webservices);

/**
 * IFailoverNotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IFailoverNotification = new common.Interface('webservices.Interfaces.IFailoverNotification', [], ['webservices.Interfaces.INotification'], webservices);

/**
 * IFailoverUINotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IFailoverUINotification = new common.Interface('webservices.Interfaces.IFailoverUINotification', [], ['webservices.Interfaces.INotification'], webservices);

/**
 * IChatReconnectNotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IChatReconnectNotification = new common.Interface('webservices.Interfaces.IChatReconnectNotification', [], ['webservices.Interfaces.INotification'], webservices);


/**
 * IResumedPollingNotification interface, derived from INotification 
 * Provides additional methods: none 
 *  
 * There is no "IStoppedPollingNotification", because IFailoverNotification servers this purpose.  The sequence will be: 
 * IFailoverNotification indicates that connectivity to the server has been lost. 
 * IReconnectNotification indicates that a server configuration request has completed successfully. 
 * IResumedPollingNotification indicates that the in-progress chat (if any) is polling again. 
 * If network connectivity has been lost for long enough that the server has purged the chat, then IResumedPollingNotification will not be sent. 
 *  
 */
webservices.Interfaces.IResumedPollingNotification = new common.Interface('webservices.Interfaces.IResumedPollingNotification', [], ['webservices.Interfaces.INotification'], webservices);

/**
 * IChatReconnectFailureNotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IChatReconnectFailureNotification = new common.Interface('webservices.Interfaces.IChatReconnectFailureNotification', [], ['webservices.Interfaces.INotification'], webservices);

/**
 * IRefreshPageNotification interface, derived from INotification 
 * Provides additional methods: get_newUriFragment()
 */
webservices.Interfaces.IRefreshPageNotification = new common.Interface('webservices.Interfaces.IRefreshPageNotification', ['get_newUriFragment'], ['webservices.Interfaces.INotification'], webservices);

// IParticipantNotification derived interfaces

/**
 * INewParticipantNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_participantName(), get_interactionType()
 */
webservices.Interfaces.INewParticipantNotification = new common.Interface('webservices.Interfaces.INewParticipantNotification', ['get_participantName', 'get_interactionType'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantJoinedNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_participantName()
 */
webservices.Interfaces.IParticipantJoinedNotification = new common.Interface('webservices.Interfaces.IParticipantJoinedNotification', ['get_participantName'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantLeftNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantLeftNotification = new common.Interface('webservices.Interfaces.IParticipantLeftNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantNameChangedNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_newParticipantName()
 */
webservices.Interfaces.IParticipantNameChangedNotification = new common.Interface('webservices.Interfaces.IParticipantNameChangedNotification', ['get_newParticipantName'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantInitializingNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_participantName()
 */
webservices.Interfaces.IParticipantInitializingNotification = new common.Interface('webservices.Interfaces.IParticipantInitializingNotification', ['get_participantName'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantAlertingNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_participantName()
 */
webservices.Interfaces.IParticipantAlertingNotification = new common.Interface('webservices.Interfaces.IParticipantAlertingNotification', ['get_participantName'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantActiveNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantActiveNotification = new common.Interface('webservices.Interfaces.IParticipantActiveNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantHeldNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantHeldNotification = new common.Interface('webservices.Interfaces.IParticipantHeldNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantVoicemailNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantVoicemailNotification = new common.Interface('webservices.Interfaces.IParticipantVoicemailNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantDisconnectedNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantDisconnectedNotification = new common.Interface('webservices.Interfaces.IParticipantDisconnectedNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantStartedTypingNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantStartedTypingNotification = new common.Interface('webservices.Interfaces.IParticipantStartedTypingNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IParticipantStoppedTypingNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IParticipantStoppedTypingNotification = new common.Interface('webservices.Interfaces.IParticipantStoppedTypingNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IReceivedTextNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_messageText()
 */
webservices.Interfaces.IReceivedTextNotification = new common.Interface('webservices.Interfaces.IReceivedTextNotification', ['get_messageText'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IReceivedCommandNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_command()
 */
webservices.Interfaces.IReceivedCommandNotification = new common.Interface('webservices.Interfaces.IReceivedCommandNotification', ['get_command'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IReceivedUrlNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_messageUrl()
 */
webservices.Interfaces.IReceivedUrlNotification = new common.Interface('webservices.Interfaces.IReceivedUrlNotification', ['get_messageUrl'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IReceivedFileNotification interface, derived from IParticipantNotification 
 * Provides additional methods: get_messageRelativeUrl()
 */
webservices.Interfaces.IReceivedFileNotification = new common.Interface('webservices.Interfaces.IReceivedFileNotification', ['get_messageRelativeUrl'], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * ICurrentParticipantIdChangedNotification interface, derived from IParticipantNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.ICurrentParticipantIdChangedNotification = new common.Interface('webservices.Interfaces.ICurrentParticipantIdChangedNotification', [], ['webservices.Interfaces.IParticipantNotification'], webservices);

/**
 * IPageNotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IPageNotification = new common.Interface('webservices.Interfaces.IPageNotification', [], ['webservices.Interfaces.INotification'], webservices);

/**
 * IPageUnloadNotification interface, derived from IPageNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IPageUnloadNotification = new common.Interface('webservices.Interfaces.IPageUnloadNotification', [], ['webservices.Interfaces.IPageNotification'], webservices);

/**
 * IPageBeforeUnloadNotification interface, derived from IPageNotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IPageBeforeUnloadNotification = new common.Interface('webservices.Interfaces.IPageBeforeUnloadNotification', [], ['webservices.Interfaces.IPageNotification'], webservices);

/**
 * IChatCreationNotification interface, derived from INotification 
 * Provides additional methods: get_currentParticipantId(), get_dateFormat(), get_timeFormat()
 */
webservices.Interfaces.IChatCreationNotification = new common.Interface('webservices.Interfaces.IChatCreationNotification', [ 'get_currentChatId', 'get_currentParticipantId', 'get_dateFormat', 'get_timeFormat' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * IChatCreationFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.IChatCreationFailureNotification = new common.Interface('webservices.Interfaces.IChatCreationFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * IChatCompletionNotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IChatCompletionNotification = new common.Interface('webservices.Interfaces.IChatCompletionNotification', [], ['webservices.Interfaces.INotification'], webservices);


/**
 * IChatCompletionFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.IChatCompletionFailureNotification = new common.Interface('webservices.Interfaces.IChatCompletionFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackCreationNotification interface, derived from INotification 
 * Provides additional methods: get_participantId(), get_callbackId(), get_userIdentityId(), get_participantName(), get_telephone(), get_subject(), get_creationDateTime()
 */
webservices.Interfaces.ICallbackCreationNotification = new common.Interface('webservices.Interfaces.ICallbackCreationNotification', [ 'get_participantId', 'get_callbackId', 'get_userIdentityId', 'get_participantName', 'get_telephone', 'get_subject', 'get_creationDateTime' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackCreationFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.ICallbackCreationFailureNotification = new common.Interface('webservices.Interfaces.ICallbackCreationFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * IChatReconnectUINotification interface, derived from INotification 
 * Provides additional methods: none
 */
webservices.Interfaces.IChatReconnectUINotification = new common.Interface('webservices.Interfaces.IChatReconnectUINotification', [], ['webservices.Interfaces.INotification'], webservices);


/**
 * ICallbackStatusNotification interface, derived from INotification 
 * Provides additional methods: get_participantId(), get_queueWaitTime(), get_assignedAgentName(), get_assignedAgentParticipantId(), get_interactionState(), get_estimatedCallbackTime(), get_queuePosition(), get_queueName(), get_longestWaitTime(), get_interactionsWaitingCount(), get_loggedInAgentsCount(), get_availableAgentsCount(), get_statusIndicator()
 */
webservices.Interfaces.ICallbackStatusNotification = new common.Interface('webservices.Interfaces.ICallbackStatusNotification', [ 'get_participantId', 'get_queueWaitTime', 'get_assignedAgentName', 'get_assignedAgentParticipantId', 'get_interactionState', 'get_estimatedCallbackTime', 'get_queuePosition', 'get_queueName', 'get_longestWaitTime', 'get_interactionsWaitingCount', 'get_loggedInAgentsCount', 'get_availableAgentsCount', 'get_statusIndicator' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackStatusFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.ICallbackStatusFailureNotification = new common.Interface('webservices.Interfaces.ICallbackStatusFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackReconnectNotification interface, derived from INotification 
 * Provides additional method: get_participantId()
 */
webservices.Interfaces.ICallbackReconnectNotification = new common.Interface('webservices.Interfaces.ICallbackReconnectNotification', ['get_participantId'], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackReconnectFailureNotification interface, derived from INotification 
 * Provides additional method: get_error()
 */
webservices.Interfaces.ICallbackReconnectFailureNotification = new common.Interface('webservices.Interfaces.ICallbackReconnectFailureNotification', ['get_error'], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackDisconnectNotification interface, derived from INotification 
 * Provides additional methods: get_participantId() 
 */
webservices.Interfaces.ICallbackDisconnectNotification = new common.Interface('webservices.Interfaces.ICallbackDisconnectNotification', [ 'get_participantId' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * ICallbackDisconnectFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.ICallbackDisconnectFailureNotification = new common.Interface('webservices.Interfaces.ICallbackDisconnectFailureNotification', [ 'get_error' ], ['webservices.Interfaces.INotification'], webservices);

/**
 * IPartyInfoNotification interface, derived from INotification 
 * Provides additional methods: get_name(), get_photo(), get_localParticipantId(), get_remoteParticipantId()
 */
webservices.Interfaces.IPartyInfoNotification = new common.Interface('webservices.Interfaces.IPartyInfoNotification', ['get_name', 'get_photo', 'get_localParticipantId', 'get_remoteParticipantId'], ['webservices.Interfaces.INotification'], webservices);

/**
 * IPartyInfoFailureNotification interface, derived from INotification 
 * Provides additional methods: get_error()
 */
webservices.Interfaces.IPartyInfoFailureNotification = new common.Interface('webservices.Interfaces.IPartyInfoFailureNotification', ['get_error'], ['webservices.Interfaces.INotification'], webservices);


// Register namespaces
webservices.registerChildNamespace("Interfaces");

// Chat Property Update Observer interfaces

/**
 * IPollWaitSuggestionUpdateObserver interface 
 * Provides method: processPollWaitSuggestionUpdate()
 */
webservices.Interfaces.IPollWaitSuggestionUpdateObserver = new common.Interface('webservices.Interfaces.IPollWaitSuggestionUpdateObserver', ['processPollWaitSuggestionUpdate']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IParticipant interface 
 * Provides methods: get_id(), get_name(), get_interactionType(), get_photo(), set_photo()
 */
webservices.Interfaces.IParticipant = new common.Interface('webservices.Interfaces.IParticipant', ['get_id', 'get_name', 'get_interactionType', 'get_photo', 'set_photo']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IParticipantRepository interface 
 * Provides methods: get_currentParticipantId(), addParticipant(), removeParticipant(), changeParticipantName(), markParticipantAsActive(), markParticipantAsInactive(), get_participants(), get_participant(), reset()
 */
webservices.Interfaces.IParticipantRepository = new common.Interface('webservices.Interfaces.IParticipantRepository', ['get_currentParticipantId', 'addParticipant', 'removeParticipant', 'changeParticipantName', 'markParticipantAsActive', 'markParticipantAsInactive', 'get_participants', 'get_participant', 'reset']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * IMessageData interface 
 * Provides methods: get_date(), get_name(), get_text()
 */
webservices.Interfaces.IMessageData = new common.Interface('webservices.Interfaces.IMessageData', ['get_date', 'get_name', 'get_text']);

// Register namespaces
webservices.registerChildNamespace("Interfaces");

/**
 * ISequenceableProcessor interface 
 * Provides method: process() 
 */
webservices.Interfaces.ISequenceableProcessor = new common.Interface('webservices.Interfaces.ISequenceableProcessor', ['process']);

/**
 * StringPosition class 
 * Represents a slice (i.e. beginning and ending indices) of a string, but does not store the string itself. 
 */
webservices.StringPosition = Class.create(
{
	/**
	 * Constructor 
	 * This initializes to non-useful values, and should be considered to be a private constructor. 
	 * Please use either buildFromStartAndLength() or buildFromStartAndStop(). 
	 */
    initialize : function()
    {
        this._startPosition = -1;
        this._length = -1;
    },

    // public methods

	/**
	 * Gets the starting index of the string slice 
	 * @return integer 
	 */
    get_startPosition : function()
    {
        return this._startPosition;
    },

	/**
	 * Gets the ending index of the string slice 
	 * @return integer 
	 */
    get_stopPosition : function()
    {
        return this._startPosition + this._length;
    },

	/**
	 * Gets the length of the string slice 
	 * @return integer 
	 */
    get_length : function()
    {
        return this._length;
    }
});

/**
 * Creates a StringPosition, given the starting index and the number of characters to include in the slice. 
 * 
 * @param start Starting index of the string slice
 * @param length Length of the string slice
 */
webservices.StringPosition.buildFromStartAndLength = function(start, length)
{
    var sp = new webservices.StringPosition();
    sp._startPosition = start;
    sp._length = length;
    return sp;
};

/**
 * Creates a StringPosition, given the starting and ending indices. 
 * 
 * @param start Starting index of the string slice
 * @param stop Ending index of the string slice
 */
webservices.StringPosition.buildFromStartAndStop = function(start, stop)
{
    var sp = new webservices.StringPosition();
    sp._startPosition = start;
    sp._length = stop - start;
    return sp;
};

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * _DefaultLinkifier class 
 *  
 * Do not instantiate this class directly.  Use 
 * webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableFactoryTypes.Linkifier) 
 *  
 * Scans text for URIs (http, https, ftp, file, mailto) and inserts the appropriate HTML to make them become links 
 * Note that this will NOT linkify "www.somewhere.com" - the scheme part (for instance, "http://") is 
 * necessary for linkification.  This may be corrected in a future SU. 
 */
webservices._Internal._DefaultLinkifier = Class.create(
{
    _linkOpeningTagPrefix : '<a href="',
    _linkOpeningTagSuffix : '" target="_blank" class="iwc-message-link">',
    _linkClosingTag : '</a>',
    _hideSchemeFromUser : true,

    // The following regular expression will match URLs specified with a
    // scheme (e.g. http://www.inin.com or http://www.inin.com/directory/file?key=value
    // or ftp://www.inin.com or mailto:support@inin.com).
    // It will also match URLs with no scheme specified (e.g. www.inin.com), IF they
    // are of the form "www dot something"
    //                                    (               scheme              )(URL) |(    www...     )
    _urlMatchingRegularExpression: /(?:(?:((?:(?:https?|ftp):\/\/)|(?:mailto:))(\S+))|(www\.[^\.\s]\S+))/ig,

	/**
	 * Constructor
	 */
    initialize : function()
    {
    },

    // public methods

    /**
	 * Scans text for URIs (http, https, ftp, file, mailto) and inserts the appropriate HTML to make them become links 
	 *  
	 * @param text The text to "linkify" 
	 * @return The text with URLs converted to links 
	 */
    linkifyText : function(text)
    {
        return text.replace(this.getUrlMatchingRegularExpression(), this._onMatch.bind(this));
    },

    /**
     * Creates a hyperlink, using this class' defined tags.
     *  
     * Example:  Depending on the values of this._linkOpeningTagPrefix, etc., 
     * createLink("http://www.inin.com", "Interactive Intelligence") may return 
     * <a href="http://www.inin.com">Interactive Intelligence</a>
     *  
     * @param url The URL that the link points to
     * @param text The text for the user to click on.  If not specified, will default to the value of url. 
     * @return string containing an HTML "a" tag (opening tag, text for the user to click on, and closing tag) 
     */
    createLink : function(url, text)
    {
        return this.getLinkOpeningTagPrefix() + url + this.getLinkOpeningTagSuffix() + (text || url) + this.getLinkClosingTag();
    },

    /**
     * The Linkifier inserts HTML "a" tags into the text. 
     * This method returns the portion of the "a" tag that comes before the URL.
     *  
     * @return string 
     */
    getLinkOpeningTagPrefix : function()
    {
        return this._linkOpeningTagPrefix;
    },

    /**
     * The Linkifier inserts HTML "a" tags into the text. 
     * This method returns the portion of the "a" tag that comes after the URL.
     *  
     * @return string 
     */
    getLinkOpeningTagSuffix : function()
    {
        return this._linkOpeningTagSuffix;
    },

    /**
     * The Linkifier inserts HTML "a" tags into the text. 
     * This method returns the "/a" tag 
     *  
     * @return string, by default "</a>"
     */
    getLinkClosingTag : function()
    {
        return this._linkClosingTag;
    },

    /**
     * Returns the regular expression used to identify URLs in text.
     *  
     * @return regular expression 
     */
    getUrlMatchingRegularExpression : function()
    {
        return this._urlMatchingRegularExpression;
    },

    /**
     * Returns whether to hide "http://" and "mailto:" from 
     * the user when displaying clickable URLs
     *  
     * @return Boolean 
     */
    getHideSchemeFromUser : function()
    {
        return this._hideSchemeFromUser;
    },

    // Private methods

    /**
     * If we've found a URL that was specified with a scheme, e.g. "https://www.inin.com", then:
     * fullURL = URL including scheme, e.g. "https://www.inin.com"
     * scheme = scheme, e.g. "https://"
     * afterScheme = URL without scheme, e.g. "www.inin.com" 
     *  
     * But if we've found a URL that was specified without a scheme, e.g. "www.inin.com", then: 
     * fullURL = what was found, e.g. "www.inin.com"
     * scheme = null
     * afterScheme = ALSO NULL!
     */
    _onMatch : function(fullURL, scheme, afterScheme)
    {
        if (!scheme)
        {
            // Found a URL that was specified without a scheme, e.g. "www.inin.com"
            // Fix up the values so that they are what they'd be if scheme had been provided.
            scheme = "http://";
            afterScheme = fullURL;
            fullURL = scheme + afterScheme;
        }

        // Only allow hiding of scheme from user if it is http or mailto.  Still show it if it is https or ftp.
        if (this.getHideSchemeFromUser() && ("http://" == scheme.toLowerCase() || "mailto:" == scheme.toLowerCase()))
        {
            return this.createLink(fullURL, afterScheme);
        }
        else
        {
            return this.createLink(fullURL);
        }
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * _DefaultSendOnEnter class 
 *  
 * Do not instantiate this class directly.  Use 
 * webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableFactoryTypes.SendOnEnter) 
 *  
 * Implements the rule that the "Send on Enter" checkbox will default to OFF for users of Arabic, Hebrew, Japanese, Korean, Russian, 
 * Serbian, Turkish, and Chinese, and will default to ON for all other supported languages. 
 *  
 * Note that customers who choose to translate our resource file into another language on their own, should consider whether to add 
 * those language code(s) to this class as well. 
 */
webservices._Internal._DefaultSendOnEnter = Class.create(
{
	/**
	 * Constructor
	 */
    initialize : function()
    {
    },

    // public methods

    /**
     * For a given language, gets whether pressing the Enter key should send the message or not.
	 *  
     * @param language The language in which the user is typing
     * @return True if the default behaviour for that language should be for the message to be sent, 
     *         or false if the default behaviour (due to IME, for instance) should not be for the
     *         message to be sent. 
	 */
    getSendOnEnterByDefault : function(language)
    {
        if (!language)
        {
            return true;
        }
        return !webservices.Utilities.doesArrayHaveElement(this._languagesThatUseIME, language.toLowerCase());
    },

    // private members

    _languagesThatUseIME : [ 'ja', 'zh-cn', 'zh-tw' ]
});

// Register namespaces
webservices.registerChildNamespace("InteractionState");

/**
 * State to represent interactions that are initializing
 */
webservices.InteractionState.INITIALIZING = "initializing";

/**
 * State to represent interactions that are alerting
 */
webservices.InteractionState.ALERTING = "alerting";

/**
 * State to represent interactions that are active
 */
webservices.InteractionState.ACTIVE = "active";

/**
 * State to represent interactions that are held
 */
webservices.InteractionState.HELD = "held";

/**
 * State to represent interactions that are in the voicemail state
 */
webservices.InteractionState.VOICEMAIL = "voicemail";

/**
 * State to represent interactions that are disconnected
 */
webservices.InteractionState.DISCONNECTED = "disconnected";

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * InteractionTypes class
 * Contains constants that represent the types of interactions that may be handled by this web application, 
 * and a method to verify whether something is one of those. 
 */
webservices._Internal._InteractionTypes = Class.create({
    /**
     * Interaction type representing a text chat
     */
    CHAT : 1,

    /**
     * Interaction type representing a callback request
     */
    CALLBACK : 2,

    /**
     * Validates whether something is a recognized interaction type.
     * 
     * @param type Something that may or may not be one of the interaction types enumerated above
     * @return True if type is one of the known interaction types, false otherwise. 
     */
    validate : function(type)
    {
        if (this.CHAT == type ||
            this.CALLBACK == type)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
});


webservices.InteractionTypes = new webservices._Internal._InteractionTypes();

// Register namespaces
webservices.registerChildNamespace("_Internal");

/** 
 * SequenceManagerBase class 
 *  
 * Abstract class - use a subclass. 
 *  
 * If network congestion or other issues occur, AJAX responses could be received from the IC server in the wrong order. 
 * This class handles putting them back into the correct order.  It does this by observing the sequence number of all 
 * received events.  If a sequence number is larger than expected, indicating that one or more events are missing, it 
 * queues the events that were received too early, until the preceding event(s) are received or time out. 
 */
webservices._Internal._SequenceManagerBase = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param sequenceObjectProcessor Once the events are in the proper order, they are handed off to this object for processing.
	 * @param timeOutMilliseconds How long before a message is considered to be lost.  Begins at the time when a message with a higher sequence number is received.
	 */
    initialize:function($super, sequenceObjectProcessor, timeOutMilliseconds)
    {
        var numArgs = 3;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("_SequenceManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this._sequenceObjectProcessor = sequenceObjectProcessor;
        this._timeOutMilliseconds = timeOutMilliseconds;
        this._nextExpectedSequenceNumber = 0;
        this._queue = new common.Map();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._sequenceObjectProcessor = null;
        
        this._queue.destroy();
        delete this._queue;
        this._queue = null;

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Called when an object is received.  If it was received in the correct order, it will be immediately processed. 
	 * If not, it will be queued until all objects that were supposed to be received before it have either been 
	 * received or timed out. 
	 * 
	 * @param seqObject The object to process or queue
	 */
    addSequenceableObject : function(seqObject)
    {
        common.Debug.traceMethodEntered("SequenceManagerBase.addSequenceableObject");
        common.Interface.ensureImplements(seqObject, webservices.Interfaces.ISequenceable);

        var success = false;
        
        common.Debug.traceStatus("Got sequenceable object #" + seqObject.get_sequenceNumber());
        common.Debug.traceStatus("Next expected sequence #" + this._nextExpectedSequenceNumber);
        if(this._nextExpectedSequenceNumber == seqObject.get_sequenceNumber())
        {
            // TODO: does this need to be locked?
            // 64-bit floating point value and as such the largest integral value it can represent precisely is 2^53,
			// BUT some operators fail for numbers > ((2^31)-1).  That's still a couple billion, though.
            ++this._nextExpectedSequenceNumber;
			common.Debug.traceStatus("Incremented next expected sequence number to: " + this._nextExpectedSequenceNumber);

            this._processSequenceableObject(seqObject, false); // Can result in a call to reset()

            this._processUnprocessedObjectsInQueue();
            success = true;
        }
        else if(seqObject.get_sequenceNumber() < this._nextExpectedSequenceNumber)
        {
            common.Debug.traceError("Sequence number '" + seqObject.get_sequenceNumber() + "' has already been processed.  Expected: " + this._nextExpectedSequenceNumber);
            common.Debug.breakpoint();
        }
        else
        {
            if(this._queue.containsKey(seqObject.get_sequenceNumber()))
            {
                common.Debug.traceError("Sequence number '" + seqObject.get_sequenceNumber() + "' is already in the queue.");
                common.Debug.breakpoint();
            }
            else
            {
                common.Debug.traceWarning("Queueing object #" + seqObject.get_sequenceNumber());
                common.Debug.breakpoint();

                this._queue.put(seqObject.get_sequenceNumber(), seqObject);
                success = true;
            }
        }
        
        this._processTimedOutObjectsInQueue();
        
        common.Debug.traceMethodExited("SequenceManagerBase.addSequenceableObject");
        
        return success;
    },

	/**
	 * Resets the object to its default state
	 */
    reset : function()
    {
        common.Debug.traceMethodEntered("SequenceManagerBase.reset");
        common.Debug.traceNote("SequenceManagerBase::reset");
        
        this._nextExpectedSequenceNumber = 0;
        this._queue.removeAll();
        common.Debug.traceMethodExited("SequenceManagerBase.reset");
    },

	/**
	 * Returns the number of queued objects.  An object is queued if it is received before another object which it 
	 * should have been received after.  For example, if objects with sequence numbers 1, 2, 3, 5, 6, and 8 are received, 
	 * then 3 of them (5, 6, 8) are queued.  Then, if the object with sequence number 4 is received, 4, 5, and 6 will be 
	 * processed and only 8 will remain in the queue.
	 *  
	 * @return The number of objects in the queue 
	 */
    get_queuedCount : function()
    {
        return this._queue.size();
    },

	/**
	 * Returns a boolean indicating whether or not the queue is empty.
	 *  
	 * @return True if the queue is empty, false otherwise. 
	 */
    isEmpty : function()
    {
        return (this.get_queuedCount() === 0);
    },

    // private methods

    _processSequenceableObject : function(seqObject, timedOut)
    {
        common.Debug.traceMethodEntered("SequenceManagerBase._processSequenceableObject");
        this._sequenceObjectProcessor.process(seqObject, timedOut);
        common.Debug.traceMethodExited("SequenceManagerBase._processSequenceableObject");
    },
    
    _processUnprocessedObjectsInQueue : function()
    {
        common.Debug.traceMethodEntered("SequenceManagerBase._processUnprocessedObjectsInQueue");
            
        // TODO: does this need to be locked?
        while(!this._queue.isEmpty() && this._queue.containsKey(this._nextExpectedSequenceNumber))
        {
            var seqObject = this._queue.get(this._nextExpectedSequenceNumber);
            this._processSequenceableObject(seqObject, false);
            this._queue.remove(this._nextExpectedSequenceNumber);

            // TODO: is integer overflow possible?
            ++this._nextExpectedSequenceNumber;
			common.Debug.traceStatus("Incremented next expected sequence number to: " + this._nextExpectedSequenceNumber);
        }

        common.Debug.traceMethodExited("SequenceManagerBase._processUnprocessedObjectsInQueue");
    },
    
    _processTimedOutObjectsInQueue : function()
    {
        common.Debug.traceMethodEntered("SequenceManagerBase._processTimedOutObjectsInQueue");
            
        // TODO: does this need to be locked?
        
        var timedOutSeqObjects = this._getTimedOutObjectsInQueue();
        if(timedOutSeqObjects && timedOutSeqObjects.length > 0)
        {
            this._orderList(timedOutSeqObjects);
            
            for(var i = 0; i < timedOutSeqObjects.length; ++i)
            {
                this._processSequenceableObject(timedOutSeqObjects[i], true);
            }
            
            // TODO: lock?
            this._nextExpectedSequenceNumber = timedOutSeqObjects[timedOutSeqObjects.length - 1].get_sequenceNumber() + 1;
			common.Debug.traceStatus("Set next expected sequence number to: " + this._nextExpectedSequenceNumber);
        }

        common.Debug.traceMethodExited("SequenceManagerBase._processTimedOutObjectsInQueue");
    },
    
    _getTimedOutObjectsInQueue : function()
    {
        common.Debug.traceMethodEntered("SequenceManagerBase._getTimedOutObjectsInQueue");
        var timedOutSeqObjects = [];
        
        // TODO: does this need to be locked?
        var seqObject = this._queue.firstObject();
        while(seqObject)
        {
            var nextSeqObject = this._queue.nextObject(seqObject.get_sequenceNumber());
            
            if(this._hasSequenceableObjectTimedOut(seqObject))
            {
                timedOutSeqObjects.push(seqObject);
                this._queue.remove(seqObject.get_sequenceNumber());
            }

            seqObject = nextSeqObject;
        }

        common.Debug.traceMethodExited("SequenceManagerBase._getTimedOutObjectsInQueue");
        return timedOutSeqObjects;
    },
    
    _orderList : function(list)
    {
        list.sort(this._orderSeqObjects)
    },

    _orderSeqObjects : function(a, b)
    {
        if(a.get_sequenceNumber() < b.get_sequenceNumber())
        {
            return -1;
        }
        else if(a.get_sequenceNumber() > b.get_sequenceNumber())
        {
            return 1;
        }

        return 0;
    },

    _hasSequenceableObjectTimedOut : function(seqObject)
    {
        return this._comesAfter(this._createTimeOutDate(), seqObject.get_dateTime());
    },

    _comesAfter : function(dateA, dateB)
    {
        return (dateA > dateB);
    },
    
    _createTimeOutDate : function()
    {
        var currentDate = new Date();
        return new Date(currentDate.getTime() - this._timeOutMilliseconds);
    }
});

/**
 * Event class 
 *  
 * Events, as opposed to Notifications, directly mirror the JSON/XML format of the responses received from the IC server. 
 */
webservices.Event = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who took whatever action the event is telling us about
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime)
    {
        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("Event constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IEvent, webservices);

        this._participantId = participantId;
        this._sequenceNumber = sequenceNumber;
        this._dateTime = dateTime;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._dateTime = null;

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Returns the ID of the participant who took whatever action the event is telling us about.
	 *  
	 * @return ID of the participant 
	 */
    get_participantId : function()
    {
        return this._participantId;
    },
    
	/**
	 * Returns the sequence number of this event.
	 *  
	 * @return integer 
	 */
    get_sequenceNumber : function()
    {
        return this._sequenceNumber;
    },

	/**
	 * Returns the timestamp of this event
	 *  
	 * @return Javascript Date object 
	 */
    get_dateTime : function()
    {
        return this._dateTime;
    },
   
	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;Event: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + "&gt;";
    }
});

/** 
 * ParticipantStateChangedEvent class
 *  
 * Events indicating that a participant has changed state. 
 */
webservices.ParticipantStateChangedEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who changed state.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 * @param state The state to which the participant changed
	 * @param participantName The name of the participant
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, state, participantName)
    {
        var numArgs = 6;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ParticipantStateChangedEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IParticipantStateChangedEvent, webservices);

        this._validateState(state);        
        this._state = state;
        this._participantName = participantName;
    },

    // public methods
    
	/**
	 * Returns the state to which the participant changed 
	 *  
	 * @return State string as specified in JSON/XML protocol
	 */
    get_state : function()
    {
        return this._state;
    },

	/**
	 * Returns the name of the participant
	 *  
	 * @return The name of the participant 
	 */
    get_participantName : function()
    {
        return this._participantName;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ParticipantStateChangedEvent: " + this._participantId + ", " + this._participantName + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._state + "&gt;";
    },

	// private methods

    _validateState : function(state)
    {
        if(!state)
        {
            throw common.ExceptionFactory.createException("state is null/undefined");
        }
       
        if((state != webservices.InteractionState.INITIALIZING) &&
           (state != webservices.InteractionState.ALERTING) &&
           (state != webservices.InteractionState.ACTIVE) &&
           (state != webservices.InteractionState.HELD) &&
           (state != webservices.InteractionState.VOICEMAIL) &&
           (state != webservices.InteractionState.DISCONNECTED))
        {
            throw common.ExceptionFactory.createException("Not a valid state: " + state);
        }
    }
});

/**
 * ParticipantSetTypingEvent class 
 *  
 * Events indicating that a participant has started or stopped typing. 
 */
webservices.ParticipantSetTypingEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who started or stopped typing.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object. 
	 * @param isTyping True if the event is to indicate that the participant has started typing, false if the event is to indicate that the participant has stopped typing. 
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, isTyping)
    {
        var numArgs = 5;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ParticipantSetTypingEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IParticipantSetTypingEvent, webservices);
        
        this._isTyping = isTyping;
    },
    
    // public methods

    /**
	 * Returns whether the participant started or stopped typing.
	 *  
	 * @return isTyping True if the event is to indicate that the participant has started typing, false if the event is to indicate that the participant has stopped typing.
	 */
    get_isTyping : function()
    {
        return this._isTyping;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ParticipantSetTypingEvent: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._isTyping + "&gt;";
    }
});

/**
 * ReceivedTextEvent class 
 *  
 * Events indicating that someone has typed something in the chat. 
 */
webservices.ReceivedTextEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who sent the message.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 * @param messageText What the participant typed 
     * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9. 
     * @param contentType The mime type of messageText.  Likely either "text/plain" or "text/html". 
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, messageText, conversationSequenceNumber, contentType)
    {
        var numArgs = 7;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedTextEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IReceivedTextEvent, webservices);

        this._messageText = messageText;
        this._contentType = contentType;
        this._conversationSequenceNumber = conversationSequenceNumber;
    },

	// public methods

	/**
	 * Gets the message that the participant typed.
	 *  
	 * @return string
	 */
    get_messageText : function()
    {
        return this._messageText;
    },

	/**
	 * Gets the mime type of the message that the participant typed.
	 *  
	 * @return string
	 */
    get_contentType : function()
    {
        return this._contentType;
    },

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ReceivedTextEvent: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._messageText + ", " + this._contentType + "&gt;";
    }
});

/**
 * ReceivedCommandEvent class 
 *  
 * Events indicating that someone has typed a special string that represents a command to make the application do something, for instance 
 * change the tracing level. 
 */
webservices.ReceivedCommandEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who sent the command.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 * @param command The command the participant typed 
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, command, conversationSequenceNumber)
    {
        var numArgs = 6;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedCommandEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IReceivedCommandEvent, webservices);

        this._command = command;
        this._conversationSequenceNumber = conversationSequenceNumber;
    },

	// public methods

	/**
	 * Gets the command that the participant typed.
	 *  
	 * @return string
	 */
    get_command : function()
    {
        return this._command;
    },

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ReceivedCommandEvent: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._command + "&gt;";
    }
});

/**
 * ReceivedUrlEvent class
 *  
 * Events indicating that someone in the chat has sent a URL. 
 */
webservices.ReceivedUrlEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who sent the message.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 * @param messageUrl The URL that the participant sent.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, messageUrl, conversationSequenceNumber)
    {
        var numArgs = 6;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedUrlEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IReceivedUrlEvent, webservices);

        this._messageUrl = messageUrl;
        this._conversationSequenceNumber = conversationSequenceNumber;
    },

    // public methods

	/**
	 * Gets the URL that the participant sent.
	 *  
	 * @return string
	 */
    get_messageUrl : function()
    {
        return this._messageUrl;
    },

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ReceivedUrlEvent: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._messageUrl + "&gt;";
    }
});

/**
 * ReceivedFileEvent class
 *  
 * Events indicating that someone in the chat has sent a file. 
 */
webservices.ReceivedFileEvent = Class.create(webservices.Event,
{
	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who sent the message.
	 * @param sequenceNumber Sequence number of this event.  The first event in the chat is sequence number 0, and they increment thereafter.
	 * @param dateTime Timestamp for the event.  Javascript Date object.
	 * @param messageRelativeUrl The URL that the web user can use to retrieve the file.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 */
    initialize:function($super, participantId, sequenceNumber, dateTime, messageRelativeUrl, conversationSequenceNumber)
    {
        var numArgs = 6;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedFileEvent constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(participantId, sequenceNumber, dateTime);

        this.addImplementedInterface(webservices.Interfaces.IReceivedFileEvent, webservices);

        this._messageRelativeUrl = messageRelativeUrl;
        this._conversationSequenceNumber = conversationSequenceNumber;
    },

    // public methods

	/**
	 * Gets the URL that the web user can use to retrieve the file that the participant sent.
	 *  
	 * @return string
	 */
    get_messageRelativeUrl : function()
    {
        return this._messageRelativeUrl;
    },

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Returns a string representation of this event, useful for debugging.
	 *  
	 * @return string 
	 */
    toString : function()
    {
        return "&lt;ReceivedFileEvent: " + this._participantId + ", " + this._sequenceNumber + ", " + this._dateTime + ", " + this._messageRelativeUrl + "&gt;";
    }
});



// Register namespaces
webservices.registerChildNamespace("Json.EventTypes");

// private constants for the event names
webservices.Json.EventTypes.PARTICIPANT_STATE_CHANGED = "participantStateChanged";
webservices.Json.EventTypes.TYPINGINDICATOR = "typingIndicator";
webservices.Json.EventTypes.TEXT = "text";
webservices.Json.EventTypes.URL = "url";
webservices.Json.EventTypes.FILE = "file";
    
webservices.registerChildNamespace("Json");

/**
 * EventFactory class
 * When an AJAX request is made to the IC server, the IC server sends a reply in JSON (or XML) format.
 * This class handles translation of the "event" part of a JSON reply into an webservices.*Event object.
 */
webservices.Json.EventFactory = Class.create(common.InterfaceImplementation,
{
    // public methods

	/**
	 * Translates part of a JSON reply from the IC server into an instance of one of the webservices.*Event classes
	 * @param jsonEvent The "event" portion of a JSON reply from the IC server 
	 * @return An instance of one of the webservices.*Event classes 
	 */
    createEvent : function(jsonEvent)
    {
        if(!jsonEvent)
        {
            throw common.ExceptionFactory.createException("JSON event is null, undefined or empty");
        }
        
        common.ParameterValidation.validate([jsonEvent.type, jsonEvent.participantID, jsonEvent.sequenceNumber], [ {"type": String, "allowEmpty": false, "required": true}, {"type": String, "allowEmpty": false, "required": true}, {"type": Number, "required": true}]);
        
        if(jsonEvent.type == webservices.Json.EventTypes.PARTICIPANT_STATE_CHANGED)
        {
            common.ParameterValidation.validate([jsonEvent.participantName, jsonEvent.state], [ {"type": String, "allowEmpty": true, "required": false}, {"type": String, "allowEmpty": false, "required": true} ]);

            return new webservices.ParticipantStateChangedEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.state, jsonEvent.participantName);
        }
        if(jsonEvent.type == webservices.Json.EventTypes.TYPINGINDICATOR)
        {
            common.ParameterValidation.validate([jsonEvent.value], [ {"type": Boolean, "required": true} ]);

            return new webservices.ParticipantSetTypingEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.value);
        }
        if(jsonEvent.type == webservices.Json.EventTypes.TEXT)
        {
            common.ParameterValidation.validate([jsonEvent.value, jsonEvent.conversationSequenceNumber], [ {"type": String, "allowEmpty": false, "required": true}, {"type": Number, "required": true} ]);

            if (webservices.CommandRepository.isCommand(jsonEvent.value))
            {
                return new webservices.ReceivedCommandEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.value, jsonEvent.conversationSequenceNumber);
            }
            else
            {
                // Necessary kludge for an SU3 ES. Will be resolved in a better way in the normal development timeline.
                if (jsonEvent.participantID == webservices.ParticipantRepository.SYSTEM_SENDER_ID && jsonEvent.displayName)
                {
                    webservices.ParticipantRepository.changeParticipantName(jsonEvent.participantID, jsonEvent.displayName);
                }

                return new webservices.ReceivedTextEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.value, jsonEvent.conversationSequenceNumber, jsonEvent.contentType);
            }
        }
        if(jsonEvent.type == webservices.Json.EventTypes.URL)
        {
            common.ParameterValidation.validate([jsonEvent.value, jsonEvent.conversationSequenceNumber], [ {"type": String, "allowEmpty": false, "required": true}, {"type": Number, "required": true} ]);

            return new webservices.ReceivedUrlEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.value, jsonEvent.conversationSequenceNumber);
        }
        if(jsonEvent.type == webservices.Json.EventTypes.FILE)
        {
            common.ParameterValidation.validate([jsonEvent.value, jsonEvent.conversationSequenceNumber], [ {"type": String, "allowEmpty": false, "required": true}, {"type": Number, "required": true} ]);

            return new webservices.ReceivedFileEvent(jsonEvent.participantID, jsonEvent.sequenceNumber, new Date(), jsonEvent.value, jsonEvent.conversationSequenceNumber);
        }

        throw common.ExceptionFactory.createException("Unknown JSON event object");
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * EventProcessor class 
 * Consumes events (<code>webservices.Interfaces.I*Event</code>), uses NotificationFactory to create the appropriate 
 * notifications (<code>webservices.*Notification</code>) for those events, and then uses notification processor 
 * (<code>webservices.Interfaces.INotificationProcessor</code>) to dispatch those notifications to the 
 * appropriate observers (<code>webservices.Interfaces.I*Observer</code>). 
 */
webservices._Internal._EventProcessor = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param notificationProcessor Something that implements INotificationProcessor (such as NotificationRegistry)
	 * @param participantRepository Keeps track of which participants are in the chat, their names, etc.
	 */
    initialize : function($super, notificationProcessor, participantRepository)
    {
        // validate arguments
        var numArgs = 3;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("EventProcessor constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        // validate argument interfaces
        common.Interface.ensureImplements(notificationProcessor, webservices.Interfaces.INotificationProcessor);
        common.Interface.ensureImplements(participantRepository, webservices.Interfaces.IParticipantRepository);

        $super();

        this.addImplementedInterface(webservices.Interfaces.ISequenceableProcessor, webservices);

        // initialize private members
        this._isStarted = false;
        this._notificationProcessor = notificationProcessor;
        this._participantRepository = participantRepository;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Starts the EventProcessor
	 */
    start : function()
    {
        common.Debug.traceMethodEntered("EventProcessor.start()");
        this._isStarted = true;
        common.Debug.traceMethodExited("EventProcessor.start()");
    },

	/**
	 * Stops the EventProcessor
	 */
    stop : function()
    {
        common.Debug.traceMethodEntered("EventProcessor.stop()");
        this._isStarted = false;
        common.Debug.traceMethodExited("EventProcessor.stop()");
    },

	/**
	 * Processes an event, by sending the appropriate notification(s) to the interested observer(s).
	 * 
	 * @param evt An implementation of webservices.Interfaces.IEvent.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the observer will do something special to indicate this. 
	 */
    process : function(evt, timedOut)
    {
        common.Debug.traceMethodEntered("EventProcessor.process()");
        try
        {
            if(!this._isStarted)
            {
                common.Debug.traceWarning("EventProcessor hasn't been started. Ignoring event");
            }
            else
            {
                common.Interface.ensureImplements(evt, webservices.Interfaces.ISequenceable);
                common.Interface.ensureImplements(evt, webservices.Interfaces.IEvent);
                
                common.Debug.traceStatus("Processing event #" + evt.get_sequenceNumber());
            
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IParticipantStateChangedEvent))
                {
                    // see if this is the first time we've seen this participant
                    if(!this._doesParticipantExist(evt.get_participantId()))
                    {
                        this._processNotification(webservices.NotificationFactory.createNewParticipantNotification(evt.get_participantId(), evt.get_participantName(), webservices.InteractionTypes.CHAT, evt.get_dateTime(), timedOut));
                    }
                }
                
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IParticipantStateChangedEvent))
                {
                    // see if this participant's name changed
                    if(this._didParticipantsNameChange(evt))
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantNameChangedNotification(evt, timedOut));
                    }

                    // see if this participant has joined or left the chat
                    if(!this._isParticipantAlreadyActive(evt.get_participantId()))
                    {
                        // Participant is not in the chat. See if they're in a new state that indicates that they have joined
                        if((evt.get_state() == webservices.InteractionState.ACTIVE) ||
                           (evt.get_state() == webservices.InteractionState.HELD) ||
                           (evt.get_state() == webservices.InteractionState.VOICEMAIL))
                        {
                            this._processNotification(webservices.NotificationFactory.createParticipantJoinedNotification(evt, timedOut));
                        }
                    }
                    else
                    {
                        // Participant is in the chat. See if they're in a new state that indicates that they have left
                        if(evt.get_state() == webservices.InteractionState.DISCONNECTED)
                        {
                            this._processNotification(webservices.NotificationFactory.createParticipantLeftNotification(evt, timedOut));
                        }
                    }

                    // process individual state changes
                    if(evt.get_state() == webservices.InteractionState.INITIALIZING)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantInitializingNotification(evt, timedOut));
                    }
                    else if(evt.get_state() == webservices.InteractionState.ACTIVE)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantActiveNotification(evt, timedOut));
                    }
                    else if(evt.get_state() == webservices.InteractionState.ALERTING)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantAlertingNotification(evt, timedOut));
                    }
                    else if(evt.get_state() == webservices.InteractionState.HELD)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantHeldNotification(evt, timedOut));
                    }
                    else if(evt.get_state() == webservices.InteractionState.VOICEMAIL)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantVoicemailNotification(evt, timedOut));
                    }
                    else if(evt.get_state() == webservices.InteractionState.DISCONNECTED)
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantDisconnectedNotification(evt, timedOut));
                    }
                }
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IParticipantSetTypingEvent))
                {
                    if(evt.get_isTyping())
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantStartedTypingNotification(evt, timedOut));
                    }
                    else
                    {
                        this._processNotification(webservices.NotificationFactory.createParticipantStoppedTypingNotification(evt, timedOut));
                    }
                }
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IReceivedTextEvent))
                {
                    this._processNotification(webservices.NotificationFactory.createReceivedTextNotification(evt, timedOut));
                }
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IReceivedCommandEvent))
                {
                    this._processNotification(webservices.NotificationFactory.createReceivedCommandNotification(evt, timedOut));
                }
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IReceivedUrlEvent))
                {
                    this._processNotification(webservices.NotificationFactory.createReceivedUrlNotification(evt, timedOut));
                }
                if(common.Interface.doesImplement(evt, webservices.Interfaces.IReceivedFileEvent))
                {
                    this._processNotification(webservices.NotificationFactory.createReceivedFileNotification(evt, timedOut));
                }
            }
        }
        catch(ex)
        {
            common.Debug.traceError(ex.message);
            common.Debug.alert(ex.message);
            common.Debug.breakpoint();
            webservices.ProblemReporter.sendProblemReport(ex, "EventProcessor.process()");
        }
        common.Debug.traceMethodExited("EventProcessor.process()");
    },

    // private methods

    _doesParticipantExist : function(participantId)
    {
        var participant = this._participantRepository.get_participant(participantId);
        if(participant)
        {
            return true;
        }
        
        return false;
    },

    _isParticipantAlreadyActive : function(participantId)
    {
        var participant = this._participantRepository.get_participant(participantId);
        if(participant)
        {
            return participant.get_isActive();
        }
        
        return false;
    },

    _didParticipantsNameChange : function(evt)
    {
        var newName = evt.get_participantName();
        if(newName)
        {
            var participant = this._participantRepository.get_participant(evt.get_participantId());
            if(participant)
            {
                if(participant.get_name() != newName)
                {
                    return true;
                }
            }
        }

        return false;
    },

    _processNotification : function(notification)
    {
        this._notificationProcessor.process(notification);
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * EventSequenceManager class 
 * Keeps the events received from the IC server in the correct chronological sequence. 
 */
webservices._Internal._EventSequenceManager = Class.create(webservices._Internal._SequenceManagerBase,
{
    // constants
    TIMEOUT_MILLISECONDS : (5000), // 5 seconds
    
	/**
	 * Constructor
	 * 
	 * @param eventProcessor An instance of webservices.EventProcessor
	 */
    initialize : function($super, eventProcessor)
    {
        var numArgs = 2;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("EventSequenceManager constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super(eventProcessor, this.TIMEOUT_MILLISECONDS);
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ParticipantNotificationBase class 
 *  
 * Base class of objects which other objects may listen for, which indicate that something has occurred pertaining 
 * to a participant in the chat.
 */
webservices._Internal.ParticipantNotificationBase = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices._Internal.ParticipantNotificationBase",

	/**
	 * Constructor
	 * 
	 * @param participantId ID of the person who took whatever action the notification is telling us about
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the notification is for an event that was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize : function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantNotificationBase constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        common.ParameterValidation.validate([participantId, dateTime, isTimedOut], [ {"type": String, "allowEmpty": false, "required": true}, {"type": Date, "required": true}, {"type": Boolean, "required": false}]);
            
        $super();

        this.addImplementedInterface(webservices.Interfaces.IParticipantNotification, webservices);

        this._participantId = participantId;
        this._dateTime = dateTime;
        this._hasTimedOut = (isTimedOut == true);
    },
   
	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._dateTime = null;

        webservices._Internal.NotificationBase.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Returns the ID of the participant who took whatever action the notification indicates.
	 *  
	 * @return ID of the participant 
	 */
    get_participantId : function()
    {
        return this._participantId;
    },

	/**
	 * Returns the timestamp of the event that this notification indicates.
	 *  
	 * @return Javascript Date object 
	 */
    get_dateTime : function()
    {
        return this._dateTime;
    },

	/**
	 *  Indicates whether the event was received late.
	 *  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 *  
	 *  @return true if the event was received late, false if not.
	 */
    get_isTimedOut : function()
    {
        return this._hasTimedOut;
    },

	/**
	 *  Sets whether the event was received late.
	 *  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 *  
	 *  @param value true if the event was received late, false if not.
	 */
    set_isTimedOut : function(value)
    {
        common.ParameterValidation.validate([value], {"type": Boolean, "required": true});

        this._hasTimedOut = value;
    }
});

/**
 * NewParticipantNotification class
 *  
 * Notification indicating that there is a new participant in the chat (though they may not be active yet). 
 */
webservices.NewParticipantNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.NewParticipantNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who is now in the chat.
	 * @param participantName The name of the participant who is now in the chat.
     * @param interactionType The type of interaction in which the person is participating.  A constant defined in webservices.InteractionTypes. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, participantName, interactionType, dateTime, isTimedOut)
    {
        if((arguments.length != 5) && (arguments.length != 6))
        {
            throw common.ExceptionFactory.createException("NewParticipantNotification constructor called with " + arguments.length + " arguments, but expected 5 or 6.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.INewParticipantNotification, webservices);

        this._participantName = participantName;
        this._interactionType = interactionType;
    },

    // public methods

	/**
	 * Returns the name of the participant to whom this notification pertains. 
	 *  
	 * @return The name of the participant 
	 */
    get_participantName : function()
    {
        return this._participantName;
    },

	/**
	 * Gets the type of interaction in which the participant is participating
	 *  
	 * @return A constant defined in webservices.InteractionTypes. 
	 */
    get_interactionType : function()
    {
        return this._interactionType;
    }
});

/**
 * ParticipantJoinedNotification class
 *  
 * Notification indicating that a participant has jonied the chat.
 */
webservices.ParticipantJoinedNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantJoinedNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has joined.
	 * @param participantName The name of the participant who has joined.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, participantName, dateTime, isTimedOut)
    {
        if((arguments.length != 4) && (arguments.length != 5))
        {
            throw common.ExceptionFactory.createException("ParticipantJoinedNotification constructor called with " + arguments.length + " arguments, but expected 4 or 5.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantJoinedNotification, webservices);

        this._participantName = participantName;
    },

    // public methods

	/**
	 * Returns the name of the participant to whom this notification pertains. 
	 *  
	 * @return The name of the participant 
	 */
    get_participantName : function()
    {
        return this._participantName;
    }
});

/**
 * ParticipantLeftNotification class
 *  
 * Notification indicating that a participant has left the chat.
 */
webservices.ParticipantLeftNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantLeftNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has left.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantLeftNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantLeftNotification, webservices);
    }
});

/**
 * ParticipantNameChangedNotification class
 *  
 * Notification indicating that the name of a participant in the chat has changed.
 */
webservices.ParticipantNameChangedNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantNameChangedNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person whose name has changed. 
	 * @param newParticipantName The new name of the participant. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, newParticipantName, dateTime, isTimedOut)
    {
        if((arguments.length != 4) && (arguments.length != 5))
        {
            throw common.ExceptionFactory.createException("ParticipantNameChangedNotification constructor called with " + arguments.length + " arguments, but expected 4 or 5.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantNameChangedNotification, webservices);

        this._newParticipantName = newParticipantName;
    },

    // public methods

	/**
	 * Returns the new name of the participant whose name has changed. 
	 *  
	 * @return The new name of the participant 
	 */
    get_newParticipantName : function()
    {
        return this._newParticipantName;
    }
});

/**
 * ParticipantInitializingNotification class
 *  
 * Notification indicating that a participant in the chat is initializing.
 */
webservices.ParticipantInitializingNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantInitializingNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who is initializing.
	 * @param participantName The name of the participant who is initializing.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, participantName, dateTime, isTimedOut)
    {
        if((arguments.length != 4) && (arguments.length != 5))
        {
            throw common.ExceptionFactory.createException("ParticipantInitializingNotification constructor called with " + arguments.length + " arguments, but expected 4 or 5.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantInitializingNotification, webservices);
        
        this._participantName = participantName;
    },

    // public methods

	/**
	 * Returns the name of the participant who is initializing.
	 *  
	 * @return The name of the participant 
	 */
    get_participantName : function()
    {
        return this._participantName;
    }
});

/**
 * ParticipantAlertingNotification class
 *  
 * Notification indicating that a participant in the chat is alerting.
 */
webservices.ParticipantAlertingNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantAlertingNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who is alerting.
	 * @param participantName The name of the participant who is alerting.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, participantName, dateTime, isTimedOut)
    {
        if((arguments.length != 4) && (arguments.length != 5))
        {
            throw common.ExceptionFactory.createException("ParticipantAlertingNotification constructor called with " + arguments.length + " arguments, but expected 4 or 5.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantAlertingNotification, webservices);
        
        this._participantName = participantName;
    },

    // public methods

	/**
	 * Returns the name of the participant who is alerting.
	 *  
	 * @return The name of the participant 
	 */
    get_participantName : function()
    {
        return this._participantName;
    }
});

/**
 * ParticipantActiveNotification class
 *  
 * Notification indicating that a participant in the chat has become active.
 */
webservices.ParticipantActiveNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantActiveNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has become active.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantActiveNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantActiveNotification, webservices);
    }
});

/**
 * ParticipantHeldNotification class
 *  
 * Notification indicating that a participant in the chat has put the chat on hold.
 */
webservices.ParticipantHeldNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantHeldNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has put the chat on hold. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantHeldNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantHeldNotification, webservices);
    }
});

/**
 * ParticipantVoicemailNotification class
 *  
 * Notification indicating that a participant in the chat has gone to a participant's voicemail.
 */
webservices.ParticipantVoicemailNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantVoicemailNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId The chat has gone to the voicemail of the participant with this ID.
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantVoicemailNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantVoicemailNotification, webservices);
    }
});

/**
 * ParticipantDisconnectedNotification class
 *  
 * Notification indicating that a participant in the chat has disconnected.
 */
webservices.ParticipantDisconnectedNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantDisconnectedNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has disconnected. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantDisconnectedNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantDisconnectedNotification, webservices);
    }
});

/**
 * ParticipantStartedTypingNotification class
 *  
 * Notification indicating that a participant in the chat has started typing.
 */
webservices.ParticipantStartedTypingNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantStartedTypingNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has started typing. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantStartedTypingNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantStartedTypingNotification, webservices);
    }
});

/**
 * ParticipantStoppedTypingNotification class
 *  
 * Notification indicating that a participant in the chat has stopped typing.
 */
webservices.ParticipantStoppedTypingNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ParticipantStoppedTypingNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who has stopped typing. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("ParticipantStoppedTypingNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IParticipantStoppedTypingNotification, webservices);
    }
});

/**
 * ReceivedTextNotification class
 *  
 * Notification indicating that a participant in the chat has typed something.
 */
webservices.ReceivedTextNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ReceivedTextNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who sent a message. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
     * @param messageText What the participant typed 
     * @param contentType The mime type of messageText.  Likely either "text/plain" or "text/html". 
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, conversationSequenceNumber, messageText, contentType, isTimedOut)
    {
        if((arguments.length != 6) && (arguments.length != 7))
        {
            throw common.ExceptionFactory.createException("ReceivedTextNotification constructor called with " + arguments.length + " arguments, but expected 6 or 7.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IReceivedTextNotification, webservices);
        
        this._conversationSequenceNumber = conversationSequenceNumber;
        this._messageText = messageText;
        this._contentType = contentType;
    },

    // public methods

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Gets the message that the participant typed.
	 *  
	 * @return string
	 */
    get_messageText : function()
    {
        return this._messageText;
    },

	/**
	 * Gets the mime type of the message that the participant typed.
	 *  
	 * @return string
	 */
    get_contentType : function()
    {
        return this._contentType;
    }
});

/**
 * ReceivedCommandNotification class
 *  
 * Notification indicating that a participant in the chat has typed a special string that should cause the application to 
 * do something, rather than be displayed to the other participants.
 */
webservices.ReceivedCommandNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ReceivedCommandNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who typed a command. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 * @param command What the participant typed 
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, conversationSequenceNumber, command, isTimedOut)
    {
        if((arguments.length != 5) && (arguments.length != 6))
        {
            throw common.ExceptionFactory.createException("ReceivedCommandNotification constructor called with " + arguments.length + " arguments, but expected 5 or 6.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IReceivedCommandNotification, webservices);
        
        this._conversationSequenceNumber = conversationSequenceNumber;
        this._command = command;
    },

    // public methods

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Gets the message that the participant typed.
	 *  
	 * @return string
	 */
    get_command : function()
    {
        return this._command;
    }
});

/**
 * ReceivedUrlNotification class
 *  
 * Notification indicating that a participant in the chat has sent a URL.
 */
webservices.ReceivedUrlNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ReceivedUrlNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who sent a message. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 * @param messageUrl The URL that the participant sent.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, conversationSequenceNumber, messageUrl, isTimedOut)
    {
        if((arguments.length != 5) && (arguments.length != 6))
        {
            throw common.ExceptionFactory.createException("ReceivedUrlNotification constructor called with " + arguments.length + " arguments, but expected 5 or 6.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IReceivedUrlNotification, webservices);

        this._conversationSequenceNumber = conversationSequenceNumber;
        this._messageUrl = messageUrl;
    },

    // public methods

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Gets the URL that the participant sent.
	 *  
	 * @return string
	 */
    get_messageUrl : function()
    {
        return this._messageUrl;
    }
});

/**
 * ReceivedFileNotification class
 *  
 * Notification indicating that a participant in the chat has sent a file.
 */
webservices.ReceivedFileNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.ReceivedFileNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId ID of the person who sent a message. 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param conversationSequenceNumber Separate sequence number tracking only received text, URLs, and files.  If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 * @param messageRelativeUrl The URL that the web user can use to retrieve the file.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, conversationSequenceNumber, messageRelativeUrl, isTimedOut)
    {
        if((arguments.length != 5) && (arguments.length != 6))
        {
            throw common.ExceptionFactory.createException("ReceivedFileNotification constructor called with " + arguments.length + " arguments, but expected 5 or 6.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.IReceivedFileNotification, webservices);
        
        this._conversationSequenceNumber = conversationSequenceNumber;
        this._messageRelativeUrl = messageRelativeUrl;
    },

    // public methods

	/**
	 * Gets the conversation sequence number.
	 * This is a separate sequence number tracking only received text, URLs, and files. 
	 * If 5 ParticipantStateChangedEvents are sent, followed by 8 ReceivedTextEvents and 2 ReceivedUrlEvents, the 
	 * last event received will have sequenceNumber 14 and conversationSequenceNumber 9.
	 *  
	 * @return integer 
	 */
    get_conversationSequenceNumber : function()
    {
        return this._conversationSequenceNumber;
    },

	/**
	 * Gets the URL that the web user can use to retrieve the file that the participant sent.
	 *  
	 * @return string
	 */
    get_messageRelativeUrl : function()
    {
        return this._messageRelativeUrl;
    }
});


/**
 * FailoverNotification class
 *  
 * Notification indicating that a failover has occurred.
 */
webservices.FailoverNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.FailoverNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("FailoverNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IFailoverNotification, webservices);
    }
});


/**
 * FailoverUINotification class
 *  
 * Notification indicating (to the UI) that a failover has occurred.
 */
webservices.FailoverUINotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.FailoverUINotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("FailoverUINotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IFailoverUINotification, webservices);
    }
});


/**
 * ChatReconnectNotification class
 *  
 * Notification indicating that a chat has reconnected.
 */
webservices.ChatReconnectNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatReconnectNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("ChatReconnectNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatReconnectNotification, webservices);
    }
});


/**
 * ResumedPollingNotification class
 *  
 * Notification indicating that a reconnect has occurred.
 */
webservices.ResumedPollingNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ResumedPollingNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("ResumedPollingNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IResumedPollingNotification, webservices);
    }
});


/**
 * ChatReconnectFailureNotification class
 *  
 * Notification indicating that a chat has failed to reconnect. 
 */
webservices.ChatReconnectFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatReconnectFailureNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("ChatReconnectFailureNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatReconnectFailureNotification, webservices);
    }
});


/**
 * RefreshPageNotification class
 *  
 * Notification indicating that the user needs to refresh the page to start a new chat.
 */
webservices.RefreshPageNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.RefreshPageNotification",

	/**
	 * Constructor 
	 *  
	 * @param newUriFragment The URI fragment that should now be used to reverse proxy requests through the webserver to the IC server. 
	 */
    initialize : function($super, newUriFragment)
    {
        if((arguments.length != 1) && (arguments.length != 2))
        {
            throw common.ExceptionFactory.createException("RefreshPageNotification constructor called with " + arguments.length + " arguments, but expected 1 or 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IRefreshPageNotification, webservices);

        this._newUriFragment = newUriFragment;
    },

    // public methods

	/**
	 * Returns the new URI fragment to use to reverse proxy requests through the webserver to the IC server. 
	 *
	 * @return The URI fragment that should now be used.
	 */
    get_newUriFragment : function()
    {
        return this._newUriFragment;
    }
});


/**
 * CurrentParticipantIdChangedNotification class
 *  
 * Notification indicating that the ID of the current participant (i.e. the person whose web browser is running this code) has changed. 
 */
webservices.CurrentParticipantIdChangedNotification = Class.create(webservices._Internal.ParticipantNotificationBase,
{
    _className : "webservices.CurrentParticipantIdChangedNotification",

	/**
	 * Constructor 
	 *  
	 * @param participantId The new ID of the current participant 
	 * @param dateTime Timestamp for the notification.  Javascript Date object.
	 * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
	 */
    initialize:function($super, participantId, dateTime, isTimedOut)
    {
        if((arguments.length != 3) && (arguments.length != 4))
        {
            throw common.ExceptionFactory.createException("CurrentParticipantIdChangedNotification constructor called with " + arguments.length + " arguments, but expected 3 or 4.");
        }

        $super(participantId, dateTime, isTimedOut);

        this.addImplementedInterface(webservices.Interfaces.ICurrentParticipantIdChangedNotification, webservices);
    }
});

/**
 * PageNotificationBase class 
 *  
 * Base class of objects which other objects may listen for, which indicate that something has occurred pertaining 
 * to the browser loading or unloading the page.  These notifications are not received from the IC server.
 */
webservices._Internal.PageNotificationBase = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices._Internal.PageNotificationBase",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("PageNotificationBase constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPageNotification, webservices);
    }
});

/**
 * PageBeforeUnloadNotification class 
 *  
 * Notification indicating that web browser is about to unload the web page.
 */
webservices.PageBeforeUnloadNotification = Class.create(webservices._Internal.PageNotificationBase,
{
    _className : "webservices.PageBeforeUnloadNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("PageBeforeUnloadNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPageBeforeUnloadNotification, webservices);
    }
});

/**
 * PageUnloadNotification class 
 *  
 * Notification indicating that web browser has completed unloading the web page.
 */
webservices.PageUnloadNotification = Class.create(webservices._Internal.PageNotificationBase,
{
    _className : "webservices.PageUnloadNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("PageUnloadNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPageUnloadNotification, webservices);
    }
});

/**
 * ChatCreationNotification class
 *  
 * Notification indicating that a chat has been created.
 */
webservices.ChatCreationNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatCreationNotification",

	/**
     * Constructor 
     *
     * @param currentParticipantId An identifier which will be used to refer to the party that created the chat. 
     * @param dateFormat A string specifying how dates should be formatted, as described in http://msdn.microsoft.com/en-us/library/dd317787%28v=vs.85%29.aspx 
     * @param timeFormat A string specifying how times should be formatted, as described in http://msdn.microsoft.com/en-us/library/dd318148%28v=vs.85%29.aspx 
	 */
    initialize : function($super, currentChatId, currentParticipantId, dateFormat, timeFormat)
    {
        if(arguments.length != 5)
        {
            throw common.ExceptionFactory.createException("ChatCreationNotification constructor called with " + arguments.length + " arguments, but expected 5.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatCreationNotification, webservices);

		this._currentChatId = currentChatId;
        this._currentParticipantId = currentParticipantId;
        this._dateFormat = dateFormat;
        this._timeFormat = timeFormat;
    },

	 /** 
     * Returns the ID that will be used to refer to this chat. 
     *  
     * @returns GUID 
     */	
	get_currentChatId : function()
	{
		return this._currentChatId;
	},
	
    /** 
     * Returns the ID that will be used to refer to this participant for the remainder of the chat. 
     *  
     * @return GUID 
     */
    get_currentParticipantId : function()
    {
        return this._currentParticipantId;
    },

    /** 
     * Returns the format that will be used to display dates
     *  
     * @return String as described in http://msdn.microsoft.com/en-us/library/dd317787%28v=vs.85%29.aspx 
     */
    get_dateFormat : function()
    {
        return this._dateFormat;
    },

    /** 
     * Returns the format that will be used to display times
     *  
     * @return String as described in http://msdn.microsoft.com/en-us/library/dd318148%28v=vs.85%29.aspx
     */
    get_timeFormat : function()
    {
        return this._timeFormat;
    }
});

/**
 * ChatCreationFailureNotification class
 *  
 * Notification indicating that an attempt to create a chat has failed.
 */
webservices.ChatCreationFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatCreationFailureNotification",

	/**
	 * Constructor
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("ChatCreationFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatCreationFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure.
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * ChatCompletionNotification class
 *  
 * Notification indicating that a chat has completed.
 */
webservices.ChatCompletionNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatCompletionNotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("ChatCompletionNotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatCompletionNotification, webservices);
    }
});

/**
 * ChatCompletionFailureNotification class
 *  
 * Notification indicating that an attempt to exit a chat has failed.
 */
webservices.ChatCompletionFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatCompletionFailureNotification",

	/**
	 * Constructor
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("ChatCompletionFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatCompletionFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure.
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * ChatReconnectUINotification class
 *  
 * Notification indicating (to the UI) that a chat has reconnected. 
 */
webservices.ChatReconnectUINotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.ChatReconnectUINotification",

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("ChatReconnectUINotification constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatReconnectUINotification, webservices);
    }
});

/**
 * CallbackCreationNotification class
 *  
 * Notification indicating that a callback has been created.
 */
webservices.CallbackCreationNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackCreationNotification",

    /** 
     * Constructor 
     * @param participantId An identifier which will be used to refer to the party that created the callback for the duration of the current web session. 
     * @param callbackId ID of the callback.  It may be used for the duration of the callback to bring the callback into a then-current web session.  If the IVR permits, it may also be entered into the IVR to manage the callback via telephone.  Will be null if the IC server does not supply it.
     * @param userIdentityId ID of the user who created this callback.  It may be used for the duration of the callback to bring the callback into a then-current web session.  If the IVR permits, it may also be entered into the IVR to manage the callback via telephone.  Will be null if the IC server does not supply it. 
     * @param participantName The name or username of the web user who has created the callback request 
     * @param telephone The telephone number at which the participant indicated they would like to be called 
     * @param subject The topic which the participant wishes to discuss with the agent 
     * @param creationDateTime A Javascript Date object containing the timestamp of when the callback request was created 
	 */
    initialize : function($super, participantId, callbackId, userIdentityId, participantName, telephone, subject, creationDateTime)
    {
        var numArgs = 8;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("CallbackCreationNotification constructor called with " + arguments.length + " arguments, but expected " + numArgs);
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackCreationNotification, webservices);

        this._participantId = participantId;
        this._callbackId = callbackId;
        this._userIdentityId = userIdentityId;
        this._participantName = participantName;
        this._telephone = telephone;
        this._subject = subject;
        this._creationDateTime = creationDateTime;
    },

    /** 
     * Returns the ID that will be used to refer to this participant for the callback. 
     *  
     * @return GUID 
     */
    get_participantId : function()
    {
        return this._participantId;
    },

	/**
     * Gets the ID of the callback, so it may be reconnected 
     * (i.e. brought into a then-current web session) later. 
     * This ID's lifespan is that of the Callback. 
	 *  
     * @return ID of the callback
	 */
    get_callbackId : function()
    {
        return this._callbackId;
    },

	/**
     * Gets the ID of the user who created this callback
     * This ID's lifespan is that of the Callback. 
	 *  
	 * @return ID of the user 
	 */
    get_userIdentityId : function()
    {
        return this._userIdentityId;
    },

    /**
     * Gets the name or username of the user who created this callback request.
     *  
     * @return String containing the name or username 
     */
    get_participantName : function()
    {
        return this._participantName;
    },

    /**
     * Gets the telephone number at which the participant indicated they would like to be called 
     *  
     * @return String containing the telephone number 
     */
    get_telephone : function()
    {
        return this._telephone;
    },

    /**
     * Gets the subject/description of the callback. 
     * This was supplied by the user when the callback was created. 
     *  
     * @return String containing the subject
     */
    get_subject : function()
    {
        return this._subject;
    },

    /**
     * Gets the date and time when this callback request was sent.
     *  
     * @return Javascript Date object 
     */
    get_creationDateTime : function()
    {
        return this._creationDateTime;
    }
});

/**
 * CallbackCreationFailureNotification class
 *  
 * Notification indicating that an attempt to create a callback has failed.
 */
webservices.CallbackCreationFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackCreationFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("CallbackCreationFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackCreationFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure.
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * CallbackStatusNotification class
 *  
 * Notification containing a callback's status
 */
webservices.CallbackStatusNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackStatusNotification",

    /** 
     * Constructor 
     *  
     * @param participantId The identifier which associates the web visitor with the callback that has been queried. 
     * @param queueWaitTime number of seconds
     * @param assignedAgentName Agent's name
     * @param assignedAgentParticipantId ID identifying the agent
     * @param interactionState The state of the interaction 
     * @param estimatedCallbackTime number of seconds before it is estimated that the callback will be made
     * @param queuePosition integer indicating the callback's position in the queue
     * @param queueName the name of the queue 
     * @param longestWaitTime The longest amount of time (in seconds) an interaction waited before being connected on the queue to which the current callback is targetted.
     * @param interactionsWaitingCount The number of calls waiting
     * @param loggedInAgentsCount the number of logged in agents who meet this callback's routing critieria
     * @param availableAgentsCount the number of available agents who meet this callback's routing criteria
     * @param statusIndicator A key to quickly indicate the status of the callback 
	 */
    initialize : function($super, participantId, queueWaitTime, assignedAgentName, assignedAgentParticipantId,
                          interactionState, estimatedCallbackTime, queuePosition, queueName,
                          longestWaitTime, interactionsWaitingCount, loggedInAgentsCount, availableAgentsCount,
                          statusIndicator)
    {
        var numArgs = 14;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("CallbackStatusNotification constructor called with " + arguments.length + " arguments, but expected " + numArgs);
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackStatusNotification, webservices);

        this._participantId = participantId;
        this._queueWaitTime = queueWaitTime;
        this._assignedAgentName = assignedAgentName;
        this._assignedAgentParticipantId = assignedAgentParticipantId;
        this._interactionState = interactionState;
        this._estimatedCallbackTime = estimatedCallbackTime;
        this._queuePosition = queuePosition;
        this._queueName = queueName;
        this._longestWaitTime = longestWaitTime;
        this._interactionsWaitingCount = interactionsWaitingCount;
        this._loggedInAgentsCount = loggedInAgentsCount;
        this._availableAgentsCount = availableAgentsCount;
        this._statusIndicator = statusIndicator;
    },

    /** 
     * Returns the ID that is used to associate the web visitor with the callback that has been queried. 
     *  
     * @return GUID 
     */
    get_participantId : function()
    {
        return this._participantId;
    },

	/**
     * Gets the queue's wait time
	 *  
     * @return number of seconds
	 */
    get_queueWaitTime : function()
    {
        return this._queueWaitTime;
    },

	/**
     * Gets the assigned agent's name
	 *  
     * @return Agent's name
	 */
    get_assignedAgentName : function()
    {
        return this._assignedAgentName;
    },

	/**
     * Gets the assigned agent's participant ID
	 *  
     * @return ID identifying the agent
	 */
    get_assignedAgentParticipantId : function()
    {
        return this._assignedAgentParticipantId;
    },

	/**
     * Gets the interaction state
	 *  
     * @return interaction state
	 */
    get_interactionState : function()
    {
        return this._interactionState;
    },

	/**
     * Gets the estimated callback time, expressed in "seconds after now"
	 *  
     * @return number of seconds before it is estimated that the callback will be made
	 */
    get_estimatedCallbackTime : function()
    {
        return this._estimatedCallbackTime;
    },

	/**
     * Gets the callback's position in the queue
	 *  
     * @return integer indicating the callback's position in the queue
	 */
    get_queuePosition : function()
    {
        return this._queuePosition;
    },

	/**
     * Gets the name of the queue
	 *  
     * @return the name of the queue
	 */
    get_queueName : function()
    {
        return this._queueName;
    },

	/**
     * Gets the longest amount of time (in seconds) an interaction waited before being connected on the queue to which the current callback is targetted.
	 * 
     * @return longestWaitTime 
	 */
    get_longestWaitTime : function()
    {
        return this._longestWaitTime;
    },

	/**
     * Gets the number of calls waiting
	 *  
     * @return the number of calls waiting
	 */
    get_interactionsWaitingCount : function()
    {
        return this._interactionsWaitingCount;
    },

	/**
     * Gets the number of logged in agents who meet this callback's routing criteria
	 *  
     * @return the number of logged in agents who meet this callback's routing critieria
	 */
    get_loggedInAgentsCount : function()
    {
        return this._loggedInAgentsCount;
    },

	/**
     * Gets the number of available agents who meet this callback's routing criteria
	 *  
     * @return the number of available agents who meet this callback's routing criteria
	 */
    get_availableAgentsCount : function()
    {
        return this._availableAgentsCount;
    },

    /**
     * Returns a key to indicate the status of the callback
     *  
     * @return statusIndicator string 
     */
    get_statusIndicator : function()
    {
        return this._statusIndicator;
    }
});

/**
 * CallbackStatusFailureNotification class
 *  
 * Notification indicating that an attempt to query the status of a callback has failed.
 */
webservices.CallbackStatusFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackStatusFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("CallbackStatusFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackStatusFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure.
     *  
     * @return The error that caused this failure. 
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * CallbackDisconnectNotification class
 *  
 * Notification indicating that a callback interaction has been disconnected (i.e. cancelled)
 */
webservices.CallbackDisconnectNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackDisconnectNotification",

    /** 
     * Constructor 
     * @param participantId The identifier which associated the web visitor with the callback that has been disconnected.  This identifier is no longer valid, and is included so that consumers of this notification may remove it from their data structures, user interfaces, etc.
	 */
    initialize : function($super, participantId)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("CallbackDisconnectNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackDisconnectNotification, webservices);

        this._participantId = participantId;
    },

    /** 
     * Returns the ID that was used to associate the web visitor with the callback that has been disconnected.  This identifier is no longer valid, and is made available so that consumers of this notification may remove it from their data structures, user interfaces, etc.
     *  
     * @return GUID 
     */
    get_participantId : function()
    {
        return this._participantId;
    }
});

/**
 * CallbackDisconnectFailureNotification class
 *  
 * Notification indicating that an attempt to disconnect a callback has failed.
 */
webservices.CallbackDisconnectFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackDisconnectFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        if(arguments.length != 2)
        {
            throw common.ExceptionFactory.createException("CallbackDisconnectFailureNotification constructor called with " + arguments.length + " arguments, but expected 2.");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackDisconnectFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure. 
     *  
     * @return The error that caused this failure. 
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * CallbackReconnectNotification class
 *  
 * Notification indicating that a callback interaction has been reconnected (i.e. brought into the 
 * current web session)
 */
webservices.CallbackReconnectNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackReconnectNotification",

    /** 
     * Constructor 
     *  
     * @param participantId An identifier which will be used to refer to the party that created the callback. 
	 */
    initialize : function($super, participantId)
    {
        var numExpectedArgs = 2;
        if(arguments.length != numExpectedArgs)
        {
            throw common.ExceptionFactory.createException("CallbackReconnectNotification constructor called with " + arguments.length + " arguments, but expected " + numExpectedArgs);
        }

        $super();

        this._participantId = participantId;

        this.addImplementedInterface(webservices.Interfaces.ICallbackReconnectNotification, webservices);
    },

    /** 
     * Returns the ID that will be used to refer to this participant for the callback. 
     *  
     * @return GUID 
     */
    get_participantId : function()
    {
        return this._participantId;
    }
});

/**
 * CallbackReconnectFailureNotification class
 *  
 * Notification indicating that an attempt to reconnect a callback has failed.
 */
webservices.CallbackReconnectFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.CallbackReconnectFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        var numExpectedArgs = 2;
        if(arguments.length != numExpectedArgs)
        {
            throw common.ExceptionFactory.createException("CallbackReconnectFailureNotification constructor called with " + arguments.length + " arguments, but expected " + numExpectedArgs);
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackReconnectFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure. 
     *  
     * @return The error that caused this failure. 
     */
    get_error : function()
    {
        return this._error;
    }
});

/**
 * PartyInfoNotification class
 *  
 * Notification containing information pertaining to a party in an interaction, such as their name and photograph.
 */
webservices.PartyInfoNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.PartyInfoNotification",

    /** 
     * Constructor 
     *  
     * @param localParticipantId The participantId of the agent whose info is being queried. 
     * @param remoteParticipantId The participantId of the agent whose info is being queried. 
	 * @param name The name of the participant
     * @param photo Location of the photo of the participant 
	 */
    initialize : function($super, localParticipantId, remoteParticipantId, name, photo)
    {
        var minExpectedArgs = 4;
        var maxExpectedArgs = 5;
        if(arguments.length < minExpectedArgs || arguments.length > maxExpectedArgs)
        {
            throw common.ExceptionFactory.createException("PartyInfoNotification constructor called with " + arguments.length + " arguments, but expected between " + minExpectedArgs + " and " + maxExpectedArgs);
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPartyInfoNotification, webservices);

        this._name = name;
        this._photo = photo;
        this._localParticipantId = localParticipantId;
        this._remoteParticipantId = remoteParticipantId;
    },

	/**
	 * Gets the name of the participant to whom this response pertains 
	 *  
	 * @return name of the participant 
	 */
    get_name : function()
    {
        return this._name;
    },

	/**
	 * Gets the location of the photo of the participant to whom this response pertains 
	 *  
	 * @return Location of the photo of the participant 
	 */
    get_photo : function()
    {
        return this._photo;
    },

    /** 
     * Returns the ID of the local participant (i.e. the one whose web browser is running this code)
     *  
     * @return GUID 
     */
    get_localParticipantId : function()
    {
        return this._localParticipantId;
    },

    /** 
     * Returns the ID of the remote participant (i.e. the one whose name and photo are supplied by this Notification)
     *  
     * @return GUID 
     */
    get_remoteParticipantId : function()
    {
        return this._remoteParticipantId;
    }
});

/**
 * PartyInfoFailureNotification class
 *  
 * Notification indicating that an attempt to get information about a party in an interaction has failed.
 */
webservices.PartyInfoFailureNotification = Class.create(webservices._Internal.NotificationBase,
{
    _className : "webservices.PartyInfoFailureNotification",

	/**
     * Constructor 
     *  
     * @param error The error that caused the failure 
	 */
    initialize : function($super, error)
    {
        var numExpectedArgs = 2;
        if(arguments.length != numExpectedArgs)
        {
            throw common.ExceptionFactory.createException("PartyInfoFailureNotification constructor called with " + arguments.length + " arguments, but expected " + numExpectedArgs);
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPartyInfoFailureNotification, webservices);

        this._error = error;
    },

    /**
     * Returns the error that caused this failure. 
     *  
     * @return The error that caused this failure. 
     */
    get_error : function()
    {
        return this._error;
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * NotificationFactory class 
 *  
 * Creates Notification objects which other objects may listen for. 
 */
webservices._Internal.NotificationFactory = Class.create(common.InterfaceImplementation,
{
    /**
     * Constructor
     */
    initialize : function($super)
    {
        if(arguments.length != 1)
        {
            throw common.ExceptionFactory.createException("NotificationFactory constructor called with " + arguments.length + " arguments, but expected 1.");
        }

        $super();
    },

    /** 
     * Secondary initializer, to break circular dependency. 
     * webservices.NotificationRegistry.registerNotificationType() requires 
     * webservices.NotificationFactory to already have been constructed. 
     */
    delayedInit : function()
    {
        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantJoinedNotification,
            /**
             * Creates a ParticipantJoinedNotification, to indicate that someone has joined the chat. 
             *  
             * @param evt A ParticipantStateChangedEvent 
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantJoinedNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantJoinedNotification(evt.get_participantId(), evt.get_participantName(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantLeftNotification,
            /**
             * Creates a ParticipantLeftNotification, to indicate that someone has left the chat. 
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantLeftNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantLeftNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.INewParticipantNotification,
            /**
             * Creates a NewParticipantNotification, to indicate that someone has joined an interaction. 
             *  
             * @param participantId ID of the person who is now in the interaction.
             * @param participantName The name of the participant who is now in the interaction.
             * @param interactionType The type of interaction in which the person is participating.  A constant defined in webservices.InteractionTypes. 
             * @param dateTime Timestamp for the notification.  Javascript Date object.
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc.
             * @return NewParticipantNotification
             */
            function(participantId, participantName, interactionType, dateTime, isTimedOut)
            {
                return new webservices.NewParticipantNotification(participantId, participantName, interactionType, dateTime, isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantNameChangedNotification,
            /**
             * Creates a ParticipantNameChangedNotification, to indicate that the name of someone in the chat has changed.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantNameChangedNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantNameChangedNotification(evt.get_participantId(), evt.get_participantName(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantInitializingNotification,
            /**
             * Creates a ParticipantInitializingNotification, to indicate that someone in the chat is initializing.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantInitializingNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantInitializingNotification(evt.get_participantId(), evt.get_participantName(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantAlertingNotification,
            /**
             * Creates a ParticipantAlertingNotification, to indicate that someone in the chat is alerting.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantAlertingNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantAlertingNotification(evt.get_participantId(), evt.get_participantName(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantActiveNotification,
            /**
             * Creates a ParticipantActiveNotification, to indicate that someone in the chat has become active.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantActiveNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantActiveNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantHeldNotification,
            /**
             * Creates a ParticipantHeldNotification, to indicate that someone in the chat has put the chat on hold.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantHeldNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantHeldNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantVoicemailNotification,
            /**
             * Creates a ParticipantVoicemailNotification, to indicate that someone in the chat has entered the voicemail state.
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantVoicemailNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantVoicemailNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantDisconnectedNotification,
            /**
             * Creates a ParticipantDisconnectedNotification, to indicate that someone has disconnected from the chat
             *  
             * @param evt A ParticipantStateChangedEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantDisconnectedNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantDisconnectedNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantStartedTypingNotification,
            /**
             * Creates a ParticipantStartedTypingNotification, to indicate that someone in the chat has begun typing
             *  
             * @param evt A ParticipantSetTypingEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantStartedTypingNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantStartedTypingNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IParticipantStoppedTypingNotification,
            /**
             * Creates a ParticipantStoppedTypingNotification, to indicate that someone in the chat has stopped typing
             *  
             * @param evt A ParticipantSetTypingEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ParticipantStoppedTypingNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ParticipantStoppedTypingNotification(evt.get_participantId(), evt.get_dateTime(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IReceivedTextNotification,
            /**
             * Creates a ReceivedTextNotification, to indicate that a message has been received
             *  
             * @param evt A ReceivedTextEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ReceivedTextNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ReceivedTextNotification(evt.get_participantId(), evt.get_dateTime(), evt.get_conversationSequenceNumber(), evt.get_messageText(), evt.get_contentType(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IReceivedCommandNotification,
            /**
             * Creates a ReceivedCommandNotification, to indicate that a command has been received
             *  
             * @param evt A ReceivedCommandEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ReceivedCommandNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ReceivedCommandNotification(evt.get_participantId(), evt.get_dateTime(), evt.get_conversationSequenceNumber(), evt.get_command(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IReceivedUrlNotification,
            /**
             * Creates a ReceivedUrlNotification, to indicate that a URL has been received
             *  
             * @param evt A ReceivedUrlEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ReceivedUrlNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ReceivedUrlNotification(evt.get_participantId(), evt.get_dateTime(), evt.get_conversationSequenceNumber(), evt.get_messageUrl(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IReceivedFileNotification,
            /**
             * Creates a ReceivedFileNotification, to indicate that a file has been received
             *  
             * @param evt A ReceivedFileEvent
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return ReceivedFileNotification
             */
            function(evt, isTimedOut)
            {
                return new webservices.ReceivedFileNotification(evt.get_participantId(), evt.get_dateTime(), evt.get_conversationSequenceNumber(), evt.get_messageRelativeUrl(), isTimedOut);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IFailoverNotification,
            /**
             * Creates a FailoverNotification, to indicate that a failover has occurred
             * @return FailoverNotification
             */
            function()
            {
                return new webservices.FailoverNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IFailoverUINotification,
            /**
             * Creates a FailoverUINotification, to indicate (to the UI) that a failover has occurred
             * @return FailoverUINotification
             */
            function()
            {
                return new webservices.FailoverUINotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatReconnectUINotification,
            /**
             * Creates a ChatReconnectUINotification, to indicate (to the UI) that a reconnect has occurred
             * @return ChatReconnectUINotification
             */
            function()
            {
                return new webservices.ChatReconnectUINotification();
            });
        
        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IResumedPollingNotification,
            /**
             * Creates a ResumedPollingNotification, to indicate that a reconnect has occurred
             * @return ResumedPollingNotification
             */
            function()
            {
                return new webservices.ResumedPollingNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatReconnectNotification,
            /**
             * Creates a ChatReconnectNotification, to indicate that a reconnect has occurred
             * @return ChatReconnectNotification
             */
            function()
            {
                return new webservices.ChatReconnectNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatReconnectFailureNotification,
            /**
             * Creates a ChatReconnectFailureNotification, to indicate that a reconnect has failed to occur
             * @return ChatReconnectFailureNotification
             */
            function()
            {
                return new webservices.ChatReconnectFailureNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IRefreshPageNotification,
            /**
             * Creates a RefreshPageNotification, to indicate that the user needs to refresh the 
             * page to start a new chat.
             *  
             * @param newUriFragment The URI fragment that should now be used to reverse proxy requests through the webserver to the IC server. 
             * @return RefreshPageNotification
             */
            function(newUriFragment)
            {
                return new webservices.RefreshPageNotification(newUriFragment);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IPageBeforeUnloadNotification,
            /**
             * Creates a PageBeforeUnloadNotification, to indicate that the web browser is about to unload the web page
             *  
             * @return PageBeforeUnloadNotification
             */
            function()
            {
                return new webservices.PageBeforeUnloadNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IPageUnloadNotification,
            /**
             * Creates a PageUnloadNotification, to indicate that the web browser has completed unloading the web page
             *  
             * @return PageUnloadNotification
             */
            function()
            {
                return new webservices.PageUnloadNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatCreationNotification,
            /**
             * Creates a ChatCreationNotification, to indicate that a chat has been created
             *
             * @param currentParticipantId An identifier which will be used to refer to the party that created the chat. 
             * @param dateFormat A string specifying how dates should be formatted, as described in http://msdn.microsoft.com/en-us/library/dd317787%28v=vs.85%29.aspx 
             * @param timeFormat A string specifying how times should be formatted, as described in http://msdn.microsoft.com/en-us/library/dd318148%28v=vs.85%29.aspx 
             * @return ChatCreationNotification
             */
            function(currentChatId, currentParticipantId, dateFormat, timeFormat)
            {
                return new webservices.ChatCreationNotification(currentChatId, currentParticipantId, dateFormat, timeFormat);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatCreationFailureNotification,
            /**
             * Creates a ChatCreationFailureNotification, to indicate that an attempt to create a chat has failed
             *  
             * @param error The error that caused the failure 
             * @return ChatCreationFailureNotification
             */
            function(error)
            {
                return new webservices.ChatCreationFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatCompletionNotification,
            /**
             * Creates a ChatCompletionNotification, to indicate that a chat has completed
             * @return ChatCompletionNotification
             */
            function()
            {
                return new webservices.ChatCompletionNotification();
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IChatCompletionFailureNotification,
            /**
             * Creates a ChatCompletionFailureNotification, to indicate that an attempt to exit a chat has failed
             *  
             * @param error The error that caused the failure 
             * @return ChatCompletionNotification
             */
            function(error)
            {
                return new webservices.ChatCompletionFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackCreationNotification,
            /**
             * Creates a CallbackCreationNotification, to indicate that a callback has been created
             *
             * @param participantId An identifier which will be used to refer to the party that created the callback for the duration of the current web session. 
             * @param callbackId ID of the callback.  It may be used for the duration of the callback to bring the callback into a then-current web session.  If the IVR permits, it may also be entered into the IVR to manage the callback via telephone.  Will be null if the IC server does not supply it.
             * @param userIdentityId ID of the user who created this callback.  It may be used for the duration of the callback to bring the callback into a then-current web session.  If the IVR permits, it may also be entered into the IVR to manage the callback via telephone.  Will be null if the IC server does not supply it.
             * @param participantName The name or username of the web user who has created the callback request 
             * @param telephone The telephone number at which the participant indicated they would like to be called 
             * @param subject The topic which the participant wishes to discuss with the agent
             * @param creationDateTime A Javascript Date object containing the timestamp of when the callback request was created 
             * @return CallbackCreationNotification
             */
            function(participantId, callbackId, userIdentityId, participantName, telephone, subject, creationDateTime)
            {
                return new webservices.CallbackCreationNotification(participantId, callbackId, userIdentityId, participantName, telephone, subject, creationDateTime);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackCreationFailureNotification,
            /**
             * Creates a CallbackCreationFailureNotification, to indicate that an attempt to create a callback has failed
             *  
             * @param error The error that caused the failure 
             * @return CallbackCreationFailureNotification
             */
            function(error)
            {
                return new webservices.CallbackCreationFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackStatusNotification,
            /**
             * Creates a CallbackStatusNotification, which contains information about a callback. 
             *  
             * @param participantId The identifier which associates the web visitor with the callback that has been queried. 
             * @param queueWaitTime number of seconds
             * @param assignedAgentName Agent's name
             * @param assignedAgentParticipantId ID identifying the agent
             * @param interactionState The state of the interaction 
             * @param estimatedCallbackTime number of seconds before it is estimated that the callback will be made
             * @param queuePosition integer indicating the callback's position in the queue
             * @param queueName the name of the queue
             * @param longestWaitTime TODO write what this is!
             * @param interactionsWaitingCount The number of calls waiting
             * @param loggedInAgentsCount the number of logged in agents who meet this callback's routing critieria
             * @param availableAgentsCount the number of available agents who meet this callback's routing criteria
             * @param statusIndicator A key to quickly indicate the status of the callback 
             * @return CallbackStatusNotification 
             */
            function(participantId, queueWaitTime, assignedAgentName, assignedAgentParticipantId,
                     interactionState, estimatedCallbackTime,
                     queuePosition, queueName,
                     longestWaitTime, interactionsWaitingCount, loggedInAgentsCount, availableAgentsCount,
                     statusIndicator)
            {
                return new webservices.CallbackStatusNotification(participantId, queueWaitTime,
                                                                                assignedAgentName, assignedAgentParticipantId,
                                                                                interactionState, estimatedCallbackTime,
                                                                                queuePosition, queueName,
                                                                                longestWaitTime, interactionsWaitingCount,
                                                                                loggedInAgentsCount, availableAgentsCount,
                                                                                statusIndicator);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackStatusFailureNotification,
            /**
             * Creates a CallbackStatusFailureNotification, to indicate that a request to get a Callback's status has failed. 
             *  
             * @param error The error that caused the failure 
             * @return CallbackStatusFailureNotification 
             */
            function(error)
            {
                return new webservices.CallbackStatusFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackDisconnectNotification,
            /** 
             * Creates a CallbackDisconnectNotification, which indicates that a Callback has been disconnected 
             * 
             * @param participantId The identifier which associated the web visitor with the callback that has been disconnected.  This identifier is no longer valid, and is included so that consumers of this notification may remove it from their data structures, user interfaces, etc.
             * @return CallbackDisconnectNotification 
             */
            function(participantId)
            {
                return new webservices.CallbackDisconnectNotification(participantId);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackDisconnectFailureNotification,
            /** 
             * Creates a CallbackDisconnectFailureNotification, which indicates that a request to disconnect a Callback has failed. 
             * 
             * @param error The error that caused the failure 
             * @return CallbackDisconnectFailureNotification 
             */
            function(error)
            {
                return new webservices.CallbackDisconnectFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackReconnectNotification,
            /** 
             * Creates a CallbackReconnectNotification, which indicates that a Callback has 
             * been reconnected (i.e. brought into the current web session)
             * 
             * @param participantId An identifier which will be used to refer to the party that created the callback. 
             * @return CallbackReconnectNotification 
             */
            function(participantId)
            {
                return new webservices.CallbackReconnectNotification(participantId);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICallbackReconnectFailureNotification,
            /** 
             * Creates a CallbackReconnectFailureNotification, which indicates that a request to reconnect a Callback has failed. 
             * 
             * @param error The error that caused the failure 
             * @return CallbackReconnectFailureNotification 
             */
            function(error)
            {
                return new webservices.CallbackReconnectFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IPartyInfoNotification,
            /** 
             * Creates a PartyInfoNotification, which contains the name and photo location of a party involved in 
             * an interaction. 
             *  
             * @param localParticipantId The participantId of the agent whose info is being queried. 
             * @param remoteParticipantId The participantId of the agent whose info is being queried. 
             * @param name The name of the remote participant
             * @param photo Location of the photo of the remote participant 
             * @return PartyInfoNotification 
             */
            function(localParticipantId, remoteParticipantId, name, photo)
            {
                return new webservices.PartyInfoNotification(localParticipantId, remoteParticipantId, name, photo);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.IPartyInfoFailureNotification,
            /** 
             * Creates a PartyInfoFailureNotification, which indicates that a request to reconnect a Callback has failed. 
             * 
             * @param error The error that caused the failure 
             * @return PartyInfoFailureNotification 
             */
            function(error)
            {
                return new webservices.PartyInfoFailureNotification(error);
            });

        webservices.NotificationRegistry.registerNotificationType(webservices.Interfaces.ICurrentParticipantIdChangedNotification,
            /** 
             * Creates a CurrentParticipantIdChangedNotification, which indicates that the GUID used to identify the web user has changed to another GUID.
             * 
             * @param participantId The new ID of the current participant 
             * @param dateTime Timestamp for the notification.  Javascript Date object.
             * @param isTimedOut Whether the event was received late.  If so, perhaps the GUI will do something special to indicate that it is displayed out of sequence, etc..
             * @return CurrentParticipantIdChangedNotification 
             */
            function(participantId, dateTime, isTimedOut)
            {
                return new webservices.CurrentParticipantIdChangedNotification(participantId, dateTime, isTimedOut);
            });
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/** 
 * FailoverHandlerBase class 
 *  
 * In charge of connecting to the other server if the current one goes down for some reason. 
 */ 
webservices._Internal._FailoverHandlerBase = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param capabilityRepository Instance of CapabilityRepository, so we'll know how to get the new server's Capabilities
	 */
    initialize : function($super, capabilityRepository)
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.initialize()");
        var numArgs = 2;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("FailoverHandlerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        common.ParameterValidation.validate([capabilityRepository], [ {"required": true} ]);

        $super();

        this.addImplementedInterface(webservices.Interfaces.IFailoverNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatReconnectFailureNotificationObserver, webservices);
		
        // Observe additional events, so that we know which type(s) of interaction to attempt to reconnect		
        this.addImplementedInterface(webservices.Interfaces.IChatCreationNotification, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatCompletionNotification, webservices);
        this.addImplementedInterface(webservices.Interfaces.ICallbackCreationNotification, webservices);
        this.addImplementedInterface(webservices.Interfaces.ICallbackDisconnectNotification, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCreationNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCompletionNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.ICallbackCreationNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.ICallbackDisconnectNotification);

        this._capabilityRepository = capabilityRepository;
        this._chatManager = null;
        this._callbackManager = null;
        this._attemptingReconnectToFirstServer = true;
		this._attemptingReconnect = false;
        this._foundServerToUseForReconnect = false;
        this._shouldAttemptToReconnectChat = false;
        this._shouldAttemptToReconnectCallback = false;
        this._reconnectAttempts = 0;

        this.RECONNECT_MAX_ATTEMPTS = 12; // per server
        this.RECONNECT_INTERVAL_MILLISECONDS = 2000;

        common.Debug.traceMethodExited("FailoverHandlerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.destroy()");
        common.InterfaceImplementation.prototype.destroy.call(this);
        common.Debug.traceMethodExited("FailoverHandlerBase.destroy()");
    },

    // public methods

	/**
	 * Setter for the ChatManager property
	 * 
	 * @param chatManager An instance of a subclass of ChatManagerBase
	 */
    set_chatManager : function(chatManager)
    {
        this._chatManager = chatManager;
    },

	/**
	 * Setter for the CallbackManager property
	 * 
	 * @param callbackManager An instance of a subclass of CallbackManagerBase
	 */
    set_callbackManager : function(callbackManager)
    {
        this._callbackManager = callbackManager;
    },

	/**
     * Listener for FailoverNotifications.  If one is received, this method 
     * will attempt to reconnect the interaction(s) to other servers.
	 * 
	 * @param notification A FailoverNotification
	 */
    processFailoverNotification : function(notification)
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.processFailoverNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IFailoverNotification);
    
        this.attemptReconnectingToAllAvailableServers();

		common.Debug.traceMethodExited("FailoverHandlerBase.processFailoverNotification()");
    },	

	/**
	 * Listener for ChatReconnectFailureNotifications.  If one is received, this method will set a timer so that another attempt will 
	 * be made once the timer fires. 
	 * 
	 * @param notification A ChatReconnectFailureNotification
	 */
    processChatReconnectFailureNotification : function(notification)
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.processChatReconnectFailureNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IChatReconnectFailureNotification);

        // attempt a connection
        // for switchover, this means each server will be tried on every other timeout
        // for single IC systems, this means the server will be tried on every timeout
        var retryCounts = webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.RetryCounts);
        var minDelay = retryCounts.get_reconnectTimeoutMillisecondsMinimum();
        var maxDelay = retryCounts.get_reconnectTimeoutMillisecondsMaximum();
        var delay = webservices.Utilities.randomInRange(minDelay, maxDelay);
        common.Debug.traceNote("Delaying for " + delay + " milliseconds before attemptReconnectingToAllAvailableServers");
        window.setTimeout(this.onTimerExpired.bindAsEventListener(this), delay);
        common.Debug.traceMethodExited("FailoverHandlerBase.processChatReconnectFailureNotification()");
    },

	/**
	 * Callback that is called when the timer that was set in processChatReconnectFailureNotification() fires.
	 */
    onTimerExpired : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.onTimerExpired()");
        this.attemptReconnectingToAllAvailableServers();
        common.Debug.traceMethodExited("FailoverHandlerBase.onTimerExpired()");
    },

	/**
	 * Begins the process of looping through the known servers and attempting to reconnect to each one, until one succeeds.
	 */
    attemptReconnectingToAllAvailableServers : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase.attemptReconnectingToAllAvailableServers()");
		// there is another server to try so try connecting to it
		if(!this._attemptingReconnect)
		{
            this._attemptingReconnect = true;
            this._attemptingReconnectToFirstServer = true;
            this._reconnectAttempts = 0;
            this._requestServerConfiguration();
		}
        common.Debug.traceMethodExited("FailoverHandlerBase.attemptReconnectingToAllAvailableServers()");
    },

	// private methods

    _requestServerConfiguration : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase._requestServerConfiguration()");
        common.Debug.traceAlways("Attempting reconnect to: " + webservices.Servers.CurrentUriFragment);
        this._requestServerConfigurationAsync();
        common.Debug.traceMethodExited("FailoverHandlerBase._requestServerConfiguration()");
    },

    _requestServerConfigurationAsync : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase._requestServerConfigurationAsync()");
        webservices.Json.ServerConfigurationManager.getServerConfiguration(this._serverConfigurationCallback.bind(this));
        common.Debug.traceMethodExited("FailoverHandlerBase._requestServerConfigurationAsync()");
    },
	
    /**
     * Called upon completion of an attempt to reconnect a Chat, 
     * whether the attempt was successful or not. 
     */
	_onChatReconnectAttemptComplete : function (success, response)
	{
		this._attemptingReconnect = false;
	
		if(success)
		{
            // let the application know that we've reconnected
            var notification = webservices.NotificationFactory.createChatReconnectNotification();
            setTimeout(function(){webservices.NotificationRegistry.process(notification);}, 10);		 
		}
		else
		{
            //the reconnect attempt gave an error; give up.
            var notification = webservices.NotificationFactory.createChatReconnectFailureNotification(response.get_statusReason());
            webservices.NotificationRegistry.process(notification);

            common.Debug.traceError("Error reconnecting to the chat. Displaying refresh notification.");
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createRefreshPageNotification(webservices.Servers.CurrentUriFragment));
		}
	},

    /**
     * Called upon completion of an attempt to reconnect a Callback, 
     * whether the attempt was successful or not. 
     */
    _onCallbackReconnectAttemptComplete : function (success, response)
    {
		this._attemptingReconnect = false;
	
		if(success)
		{
            // let the application know that we've reconnected
            var notification = webservices.NotificationFactory.createCallbackReconnectNotification();
            setTimeout(function(){webservices.NotificationRegistry.process(notification);}, 10);		 
		}
		else
		{
            //the reconnect attempt gave an error; give up.
            var notification = webservices.NotificationFactory.createCallbackReconnectFailureNotification(response.get_statusReason());
            webservices.NotificationRegistry.process(notification);

            common.Debug.traceError("Error reconnecting to the callback. Displaying refresh notification.");
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createRefreshPageNotification(webservices.Servers.CurrentUriFragment));
		}
    },

    _serverConfigurationCallback : function(success, failureReason)
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase._serverConfigurationCallback()");
        if(this._shouldUseServerForReconnect(success, failureReason))
        {
            common.Debug.traceAlways("Using " + webservices.Servers.CurrentUriFragment + " for reconnect...");
	
	        _self = this;

            if (! this._attemptingReconnectToFirstServer)
            {
                // We have successfully switched to the new server.
                common.Debug.traceAlways("Failover completed successfully");

                // TODO: Implement the infrastructure for this:
                //webservices.NotificationRegistry.process(webservices.NotificationFactory.createFailoverCompletedNotification());
            }

            this._reconnectAttempts = 0;

	        //call the reconnect(s)
            if (this._shouldAttemptToReconnectChat) {
                this._chatManager.reconnect(function(success, response){_self._onChatReconnectAttemptComplete(success, response);});   
            }
            if (this._shouldAttemptToReconnectCallback) {
                this._callbackManager.reconnect(function(success, response){_self._onCallbackReconnectAttemptComplete(success, response);});   
            }
        }
        else
        {
            common.Debug.traceAlways("Not using " + webservices.Servers.CurrentUriFragment + " for reconnect...");

            if(this._attemptingReconnectToFirstServer && webservices.Servers.isConfiguredForSwitchover())
            {
                common.Debug.traceAlways("Tried connecting to first server and failed.  It's switchover so try the other server after " + this.RECONNECT_INTERVAL_MILLISECONDS + "ms.");
                webservices.Servers.switchCurrentServer();
                this._attemptingReconnectToFirstServer = false;
                window.setTimeout(this._requestServerConfiguration.bind(this), this.RECONNECT_INTERVAL_MILLISECONDS);
            }
            else
            {
                if(webservices.Servers.isConfiguredForSwitchover())
                {
                    common.Debug.traceAlways("Failed to connect to both IC servers in the switchover pair");
                    // switch back to original server for next reconnect attempt if we're switchover
                    webservices.Servers.switchCurrentServer();
                }
                else
                {
                    common.Debug.traceAlways("Failed to connect to the IC server");
                }

                if (this._reconnectAttempts < this.RECONNECT_MAX_ATTEMPTS)
                {
                    this._attemptingReconnect = false;
                    this._reconnectAttempts++;
                    common.Debug.traceWarning("Reconnect attempt #" + this._reconnectAttempts + " failed.  Cycling after " + this.RECONNECT_INTERVAL_MILLISECONDS + "ms.");
                    window.setTimeout(this.attemptReconnectingToAllAvailableServers.bind(this), this.RECONNECT_INTERVAL_MILLISECONDS);
                }
/* 
                else
                {
                    // It's a total failure
                    common.Debug.traceNote("Sending out reconnect failure notification.");
                }
*/
            }
        }
        common.Debug.traceMethodExited("FailoverHandlerBase._serverConfigurationCallback()");
    },

    _shouldUseServerForReconnect : function(success, failureReason)
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase._shouldUserServerForReconnect()");
        // for a server to be considered for the reconnect:
        // 1) the request had to have succeeded
        // 2) the server should have the minimum server config necessary
        var returnValue = success && this._doesServerHaveMinimumServerConfig();

        common.Debug.traceNote("Returning: " + returnValue);
        common.Debug.traceMethodExited("FailoverHandlerBase._shouldUserServerForReconnect()");
        return returnValue;
    },

    _doesServerHaveMinimumServerConfig : function()
    {
        common.Debug.traceMethodEntered("FailoverHandlerBase._doesServerHaveMinimumServerConfig()");

        var returnValue = ( webservices.CapabilityRepository.get_reconnectChatCapability() &&
                            webservices.CapabilityRepository.get_reconnectCallbackCapability());

        common.Debug.traceNote("Returning: " + returnValue);
        common.Debug.traceMethodExited("FailoverHandlerBase._doesServerHaveMinimumServerConfig()");
        return returnValue;
    },

    processChatCreationNotification : function(chatCreationNotification)
    {
        this._shouldAttemptToReconnectChat = true;
    },

    processChatCompletionNotification : function(chatCompletionNotification)
    {
        this._shouldAttemptToReconnectChat = false;
    },

    processCallbackCreationNotification : function(callbackCreationNotification)
    {
        this._shouldAttemptToReconnectCallback = true;
    },

    processCallbackDisconnectNotification : function(callbackDisconnectNotification)
    {
        this._shouldAttemptToReconnectCallback = false;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * FailoverHandler class 
 * JSON-specific subclass of FailoverHandlerBase.  Ensures the use of webservices.Json.AjaxManager.
 */
webservices.Json._Internal._FailoverHandler = Class.create(webservices._Internal._FailoverHandlerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder The object that shall be used to translate the IC server's HTTP reply into a ResponseBase (or subclass thereof)
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository)
    {
        $super(capabilityRepository);

        this._genericResponseBuilder = genericResponseBuilder;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices._Internal._FailoverHandlerBase.prototype.destroy.call(this);
    },

    // methods

	/**
	 * Overload of FailoverHandlerBase.set_chatManager(). 
	 * 
	 * @param chatManager The ChatManager currently in use
	 */
    set_chatManager : function(chatManager)
    {
        webservices._Internal._FailoverHandlerBase.prototype.set_chatManager.call(this, chatManager);
    },

	/**
	 * FailoverHandlerBase will call this, to get an instance of (a subclass of) AjaxManagerBase. 
	 *  
	 * @param capability  A Capability object representing what this AjaxManager is intended to do (i.e. poll, send message, etc.)
	 * @param serverUriFragment The URI fragment that reverse proxies to the IC server. 
	 * @return AjaxManager 
	 */
    _createAjaxManager : function(capability, serverUriFragment)
    {
        return new webservices.Json.AjaxManager(this._genericResponseBuilder, capability, serverUriFragment);
    },

	/**
	 * Overload of FailoverHandlerBase.processFailoverNotification().
	 *  
	 * @param notification Something that implements IFailoverNotification
	 */
    processFailoverNotification : function(notification)
    {
        webservices._Internal._FailoverHandlerBase.prototype.processFailoverNotification.call(this, notification);
    }
});

/**
 * MessageData class 
 * Represents something that someone has typed in a chat.  Consists of the name of the person 
 * who typed something, what they typed, and when they typed it. 
 */
webservices.MessageData = Class.create(common.InterfaceImplementation,
{
    /**
	 * constructor 
	 * @param date - When the message was typed 
	 * @param name - Who typed the message 
	 * @param text - What was typed 
	 */
    initialize : function($super, date, name, text)
    {
        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("MessageData constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }
        
        $super();

        this.addImplementedInterface(webservices.Interfaces.IMessageData, webservices);

        this._date = date;
        this._name = name;
        this._text = text;
    },

    // public methods

	/**
	 * Returns the timestamp of when the message was typed
	 */
    get_date : function()
    {
        return this._date;
    },

	/**
	 * Returns the name of the person who typed the message
	 */
    get_name : function()
    {
        return this._name;
    },

	/**
	 * Returns the message that was typed
	 */
    get_text : function()
    {
        return this._text;
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ReceivedMessageRepository class 
 *  
 * This class stores all the messages sent during the chat.  Only one instance is needed.
 */
webservices._Internal._ReceivedMessageRepository = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 */
    initialize:function($super)
    {
        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedMessageRepository constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IReceivedTextNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IReceivedUrlNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IReceivedFileNotificationObserver, webservices);
        
        this._receivedMessages = [];
        this._lastConversationSequenceNumber = null;
        this._linkifier = webservices.CustomizationFactoryRegistry.get_instance(webservices.CustomizableSingletonFactoryTypes.Linkifier);
    },
    
	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._receivedMessages)
        {
            delete this._receivedMessages;
            this._receivedMessages = null;
        }

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Called when the web user receives a message from an agent
	 * 
	 * @param notification An instance of ReceivedTextNotification
	 */
    processReceivedTextNotification : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.IReceivedTextNotification);
        this.addMessage(notification.get_dateTime(), notification.get_participantId(), this._linkifier.linkifyText(notification.get_messageText()));
        this._lastConversationSequenceNumber = notification.get_conversationSequenceNumber();
    },

	/**
	 * Called when the web user receives a URL from an agent
	 * 
	 * @param notification An instance of ReceivedUrlNotification
	 */
    processReceivedUrlNotification : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.IReceivedUrlNotification);
        this.addMessage(notification.get_dateTime(), notification.get_participantId(), this._linkifier.linkifyText(notification.get_messageUrl()));
        this._lastConversationSequenceNumber = notification.get_conversationSequenceNumber();
    },

	/**
	 * Called when the web user receives a file from an agent
	 * 
	 * @param notification An instance of ReceivedFileNotification
	 */
    processReceivedFileNotification : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.IReceivedFileNotification);
        var text = this._getFileName(notification.get_messageRelativeUrl());
        var url = this._createFullUrl(notification.get_messageRelativeUrl());
        var message = '<a href="' + url + '" target="blank">' + text + '</a>';
        this.addMessage(notification.get_dateTime(), notification.get_participantId(), message);
        this._lastConversationSequenceNumber = notification.get_conversationSequenceNumber();
    },

	/**
	 * Each message (text, file, or URL) in the chat has a sequence number, so that they may be kept in the proper order. 
	 * This method returns the highest sequence number that has been used so far. 
	 */
    get_lastConversationSequenceNumber : function()
    {
        return this._lastConversationSequenceNumber;
    },

	/**
	 * Adds a message to the repository.
	 * 
	 * @param dateTime When the message was added
	 * @param participantId Who sent the text, file, or URL
	 * @param text The text to store in the repository.  For instance, if a file was received, this could be HTML code to provide a link to the file.
	 */
    addMessage : function(dateTime, participantId, text)
    {
        // can't just check if(!text), since we want to let empty strings through
        if(text === undefined)
        {
            throw common.ExceptionFactory.createException("text parameter to addMessage is undefined");
        }
        if(text === null)
        {
            throw common.ExceptionFactory.createException("text parameter to addMessage is null");
        }
        if(typeof text != "string")
        {
            throw common.ExceptionFactory.createException("text parameter to addMessage is not a string");
        }

        var participantName = this._getParticipantName(participantId);
        this._receivedMessages.push(new webservices.MessageData(dateTime, participantName, text));
    },

	/**
	 * Get the list of messages that are in the repository
	 *  
	 * @return An array of MessageData objects. 
	 */
    get_messages : function()
    {
        return this._receivedMessages;
    },

	/**
	 * Resets the repository to its default state.
	 */
    reset : function()
    {
        this._receivedMessages = [];
    },

    // private methods

    _getFileName : function(relativeUrl)
    {
        return webservices.Utilities.getFileNameFromUrl(relativeUrl);
    },

    _createFullUrl : function(relativeUrl)
    {
        return webservices.Servers.buildUrl(webservices.Servers.CurrentUriFragment, relativeUrl);
    },

    _getParticipantName : function(participantId)
    {
        var participant = webservices.ParticipantRepository.get_participant(participantId);
        if(participant)
        {
            return participant.get_name();
        }

        return "IC";
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ReceivedUrlRepository class 
 *  
 * A place to store the URLs which are sent to the web user by the agent(s) 
 */
webservices._Internal._ReceivedUrlRepository = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 */
    initialize:function($super)
    {
        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ReceivedUrlRepository constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IReceivedUrlNotificationObserver, webservices);
        
        this._receivedUrls = [];
    },
    
	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._receivedUrls)
        {
            delete this._receivedUrls;
            this._receivedUrls = null;
        }

        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Called when the web user receives a URL from an agent
	 * 
	 * @param notification An instance of ReceivedUrlNotification
	 */
    processReceivedUrlNotification : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.IReceivedUrlNotification);
        this.addUrl(notification.get_messageUrl());
    },

	/**
	 * Adds a URL to the repository.  Mostly exists as a helper to processReceivedUrlNotification().
	 * 
	 * @param url The URL to add to the repository.
	 */
    addUrl : function(url)
    {
        if(!url)
        {
            throw common.ExceptionFactory.createException("Url parameter to addUrl is null/undefined");
        }
        if(url.length === 0)
        {
            throw common.ExceptionFactory.createException("Url parameter to addUrl is empty");
        }
        if(typeof url != "string")
        {
            throw common.ExceptionFactory.createException("Url parameter to addUrl is not a string");
        }
        
        this._receivedUrls.push(url);
    },

	/**
	 * Gets the set of URLs that are in the repository
	 *
	 * @return list of URLs
	 */
    get_urls : function()
    {
        return this._receivedUrls;
    },

	/**
	 * Resets the repository to its default state.  Removes all URLs.
	 */
    reset : function()
    {
        this._receivedUrls = [];
    }
});

/**
 * ChatPropertyUpdateRegistry class 
 *  
 * Notifies interested parties about changes to properties of the chat.  Currently this only includes the poll wait time suggestion. 
 */
webservices.ChatPropertyUpdateRegistry = (function()
{
    // private
    var _pollWaitSuggestionUpdateObservers = [];
    
    // public methods
    return {

		/**
		 * Destructor
		 */
        destroy : function()
        {
            delete _pollWaitSuggestionUpdateObservers;
            _pollWaitSuggestionUpdateObservers = null;
        },

		/**
		 * Parties (i.e. other objects) interested in being notified about changes to poll wait time suggestion 
		 * may call this method.  If they do so, their processPollWaitSuggestionUpdate() method will be 
		 * called when this property changes. 
		 *  
		 * @param pollWaitSuggestionUpdateObserver An object with a processPollWaitSuggestionUpdate() method 
		 */
        registerPollWaitSuggestionUpdateObserver : function(pollWaitSuggestionUpdateObserver)
        {
            if(!pollWaitSuggestionUpdateObserver)
            {
                throw common.ExceptionFactory.createException("pollWaitSuggestionUpdateObserver is null");
            }

            common.Interface.ensureImplements(pollWaitSuggestionUpdateObserver, webservices.Interfaces.IPollWaitSuggestionUpdateObserver);

            _pollWaitSuggestionUpdateObservers.push(pollWaitSuggestionUpdateObserver);
        },
        
		/**
		 * This will be called when the poll wait time suggestion changes.  It will notify each interested party (i.e. object) 
		 * of this by calling its processPollWaitSuggestionUpdate() method. 
		 *  
		 * @param pollWaitSuggestion A number (or string containing a number) indicating the number of milliseconds to wait before the next poll.
		 */
        processPollWaitSuggestionUpdate : function(pollWaitSuggestion)
        {
            if(!pollWaitSuggestion)
            {
                throw common.ExceptionFactory.createException("pollWaitSuggestion is null");
            }

            if(typeof pollWaitSuggestion == "string")
            {
                if(pollWaitSuggestion.length === 0)
                {
                    throw common.ExceptionFactory.createException("pollWaitSuggestion is not an empty string");
                }
                
                // convert it to a number and let the number branch handle it
                pollWaitSuggestion = parseInt(pollWaitSuggestion, 10);
            }
            
            if(isNaN(pollWaitSuggestion))
            {
                throw common.ExceptionFactory.createException("pollWaitSuggestion is not a number");
            }

            if(typeof pollWaitSuggestion != "number")
            {
                throw common.ExceptionFactory.createException("pollWaitSuggestion is not a number");
            }

            for(var i = 0; i < _pollWaitSuggestionUpdateObservers.length; ++i)
            {
                var observer = _pollWaitSuggestionUpdateObservers[i];
                observer.processPollWaitSuggestionUpdate(pollWaitSuggestion);
            }
        }
    };

})();

/**
 * Participant class 
 * This class represents a participant in an interaction. 
 *  
 * If a person is participating in two interactions, there will be two 
 * different Participant instances created to represent that situation. 
 */
webservices.Participant = Class.create(common.InterfaceImplementation,
{
    // public methods

	/**
	 * Constructor
	 * 
	 * @param id A unique ID representing this person participating in this interaction.
     * @param name The name of this participant. 
     * @param interactionType The type of interaction in which the person is participating.  A constant defined in webservices.InteractionTypes. 
	 * @param isActive Whether this participant is currently active in the chat.
	 */
    initialize: function($super, id, name, interactionType, isActive)
    {
        common.ParameterValidation.validate([id, name, isActive], [ {"type": String, "allowEmpty": false, "required": true}, {"type": String, "allowEmpty": true, "required": false}, {"type": Boolean, "required": false}]);
            
        $super();

        this.addImplementedInterface(webservices.Interfaces.IParticipant, webservices);

        this._id = id;
        this._name = name;
        this._interactionType = interactionType;
        this._photo = null;

        if(isActive === undefined)
        {
            this._isActive = true;
        }
        else
        {
            this._isActive = isActive;
        }
    },

	/**
	 * Gets the ID of the participant
	 *  
	 * @return The ID of the participant. 
	 */
    get_id : function()
    {
        return this._id;
    },

	/**
	 * Gets the name of the participant
	 *  
	 * @return The name of the participant. 
	 */
    get_name : function()
    {
        return this._name;
    },

	/**
	 * Sets the name of the participant
	 *  
	 * @param newName The name of the participant. 
	 */
    set_name : function(newName)
    {
        this._name = newName;
    },

	/**
	 * Gets the type of interaction in which the participant is participating
	 *  
	 * @return A constant defined in webservices.InteractionTypes. 
	 */
    get_interactionType : function()
    {
        return this._interactionType;
    },

	/**
	 * Gets the photo of the participant
	 *  
	 * @return The photo of the participant. 
	 */
    get_photo : function()
    {
        return this._photo;
    },

	/**
	 * Sets the photo of the participant
	 *  
	 * @param photo The photo of the participant. 
	 */
    set_photo : function(photo)
    {
        this._photo = photo;
    },

	/**
	 * Gets whether the participant is currently active in the chat.
	 *  
	 * @return True if the participant is active, false if the participant is inactive.
	 */
    get_isActive : function()
    {
        return this._isActive;
    },

	/**
	 * Sets whether the participant is currently active in the chat.
	 *  
	 * @param active True if the participant is active, false if the participant is inactive.
	 */
    set_isActive : function(active)
    {
        this._isActive = active;
    }
});


/**
 * ParticipantRepositoryBase class 
 *  
 * Abstract class.  Keeps track of which participants are participating in an 
 * interaction (i.e. a chat, callback, etc.), their status, and which one 
 * is the current chat participant (i.e. the one whose web browser is running this code). 
 */
webservices.ParticipantRepositoryBase = Class.create(common.InterfaceImplementation,
{
    // constants

    /**
     * The participant ID that is used for messages from the IC system itself.
     */
    SYSTEM_SENDER_ID : '00000000-0000-0000-0000-000000000000',

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ParticipantsRepositoryBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IParticipantRepository, webservices);

        // initialize private members
        this._currentParticipantId = null;
        this._participants = [];
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.InterfaceImplementation.prototype.destroy.call(this);

        delete this._participants;
        this._participants = null;
    },

    // public methods

	/**
	 * Gets the ID of the current participant (i.e. the one whose web browser is running this code)
	 *  
	 * @return ID of the current participant 
	 */
    get_currentParticipantId : function()
    {
        return this._currentParticipantId;
    },

    /**
     * Gets the participant ID that is used for messages from the IC system itself. 
     *  
     * @return ID of the "system" participant 
     */
    get_systemParticipantId : function()
    {
        return this.SYSTEM_SENDER_ID;
    },

	/**
	 * Add another participant to the repository
	 * 
	 * @param participant An instance of webservices.Participant
	 */
    addParticipant : function(participant)
    {
        common.Debug.traceMethodEntered("ParticipantRepositoryBase.addParticipant()");

        if(!participant)
        {
            throw common.ExceptionFactory.createException("Participant parameter to addParticipant is null/undefined");
        }
        if(typeof participant != "object")
        {
            throw common.ExceptionFactory.createException("Participant parameter to addParticipant is not an object");
        }
        
        common.Interface.ensureImplements(participant, webservices.Interfaces.IParticipant);
        
        // Don't want the web user's username to be an HTML form, a Javascript function call, etc.!
        participant.set_name(webservices.Utilities.escapeHTML(participant.get_name()));

        // TODO: this should probably be locked
        this._participants.push(participant);
        common.Debug.traceMethodExited("ParticipantRepositoryBase.addParticipant()");
    },

	/**
	 * Remove a participant from the repository
	 * 
     * @param participantId The ID of a participant already involved in an interaction 
     * @return true If the participant was found and removed, false if the ID did not match any participant involved in any interaction
	 */
    removeParticipant : function(participantId)
    {
        if(!participantId)
        {
            throw common.ExceptionFactory.createException("participantId parameter to removeParticipant is null/undefined");
        }
        if(typeof participantId != "string")
        {
            throw common.ExceptionFactory.createException("participantId parameter to removeParticipant is not a string");
        }

        // TODO: this should be locked
        for(var i = 0; i < this._participants.length; ++i)
        {
            var participant = this._participants[i];

            common.Interface.ensureImplements(participant, webservices.Interfaces.IParticipant);
            if(participantId == participant.get_id())
            {
                this._participants.splice(i, 1);
                return true;
            }
        }
        
        return false;
    },

    /**
     * Removes all participants of a particular interaction type
     * 
     * @param interactionType A constant defined in webservices.InteractionTypes
     */
    removeAllParticipantsForInteractionType : function(interactionType)
    {
        if (!webservices.InteractionTypes.validate(interactionType))
        {
            throw common.ExceptionFactory.createException("interactionType parameter to removeAllParticipantsForInteractionType is not valid");
        }

        var i=0;
        // TODO: this should be locked
        while (i < this._participants.length)
        {
            var participant = this._participants[i];

            common.Interface.ensureImplements(participant, webservices.Interfaces.IParticipant);
            if (interactionType == participant.get_interactionType())
            {
                this._participants.splice(i, 1);
            }
            else
            {
                ++i;
            }
        }
    },

	/**
     * Change the name of a participant in an interaction
	 * 
	 * @param participantId The ID of the participant whose name has changed.
	 * @param newParticipantName The new name of the participant identified by participantId
	 */
    changeParticipantName : function(participantId, newParticipantName)
    {
        common.Debug.traceMethodEntered("ParticipantRepositoryBase.changeParticipantName()");
        if(!participantId)
        {
            throw common.ExceptionFactory.createException("participantId parameter to changeParticipantName is null/undefined");
        }
        if(typeof participantId != "string")
        {
            throw common.ExceptionFactory.createException("participantId parameter to changeParticipantName is not a string");
        }

        // Don't want the web user's username to be an HTML form, a Javascript function call, etc.!
        newParticipantName = webservices.Utilities.escapeHTML(newParticipantName);

        // TODO: this should be locked
        for(var i = 0; i < this._participants.length; ++i)
        {
            var participant = this._participants[i];
            
            common.Interface.ensureImplements(participant, webservices.Interfaces.IParticipant);
            if(participantId == participant.get_id())
            {
                participant.set_name(newParticipantName);
                break;
            }
        }
        common.Debug.traceMethodExited("ParticipantRepositoryBase.changeParticipantName()");
    },

	/**
     * Participants in a chat can be active or inactive.  This method may be used to mark a participant as active.
     * Currently not used for any other interaction type.
	 *  
	 * @param participantId The ID of the participant who has just become active
	 */
    markParticipantAsActive : function(participantId)
    {
        var participant = this.get_participant(participantId);
        if(participant)
        {
            participant.set_isActive(true);
        }
    },

	/**
	 * Participants in a chat can be active or inactive.  This method may be used to mark a participant as inactive. 
     * Currently not used for any other interaction type.
	 *  
	 * @param participantId The ID of the participant who has just become inactive
	 */
    markParticipantAsInactive : function(participantId)
    {
        var participant = this.get_participant(participantId);
        if(participant)
        {
            participant.set_isActive(false);
        }
    },

	/**
	 * Returns an array of all the participants in the repository
	 *  
	 * @return array of webservices.Participant 
	 */
    get_participants : function()
    {
        return this._participants;
    },

	/**
	 * Gets a participant, given the participant's ID
	 * 
	 * @param participantId The ID of a participant in an interaction.
	 * @return An webservices.Participant, if the ID belongs to someone in an interaction.  Null otherwise. 
	 */
    get_participant : function(participantId)
    {
        if(!participantId)
        {
            throw common.ExceptionFactory.createException("participantId parameter to get_participant is null/undefined");
        }
        if(typeof participantId != "string")
        {
            throw common.ExceptionFactory.createException("participantId parameter to get_participant is not a string");
        }

        // TODO: lock this with a mutex
        for(var i = 0; i < this._participants.length; ++i)
        {
            var participant = this._participants[i];
            if (participant.get_id() == participantId)
            {
                return participant;
            }
        }

        return null;
    },

	/**
	 * Resets the participant repository to its initial state.
	 */
    reset : function()
    {
        this._participants = [];
    },

    // private methods

    _debug : function()
    {
        common.Debug.traceNote("ParticipantRepositoryBase.debug(): Repository contains:");
        for(var i = 0; i < this._participants.length; ++i)
        {
            var participant = this._participants[i];
            common.Debug.traceNote("    ID:" + participant.get_id() + "  Name:" + participant.get_name() + "  Active:" + participant.get_isActive());
        }
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ParticipantRepository class 
 *  
 * Extends ParticipantRepositoryBase, to use Observer/Notification interfaces. 
 */
webservices._Internal._ParticipantRepository = Class.create(webservices.ParticipantRepositoryBase,
{
	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ParticipantsRepository constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICurrentParticipantIdChangedNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.INewParticipantNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IParticipantJoinedNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IParticipantLeftNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IParticipantNameChangedNotificationObserver, webservices);
    },

	/**
	 * Constructor
	 */
    destroy : function()
    {
        webservices.ParticipantRepositoryBase.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Changes the ID of the current participant (i.e. the participant whose web browser this code is running in)
	 * 
	 * @param notification An ICurrentParticipantIdChangedNotification
	 */
    processCurrentParticipantIdChangedNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ParticipantRepository.processCurrentParticipantIdChangedNotification");
        common.Interface.ensureImplements(notification, webservices.Interfaces.ICurrentParticipantIdChangedNotification);
        this._currentParticipantId = notification.get_participantId();
        common.Debug.traceMethodExited("ParticipantRepository.processCurrentParticipantIdChangedNotification");
    },

	/**
	 * Adds a participant to the repository
	 * 
	 * @param notification An INewParticipantNotification
	 */
    processNewParticipantNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ParticipantRepository.processNewParticipantNotification");
        common.Interface.ensureImplements(notification, webservices.Interfaces.INewParticipantNotification);
        this.addParticipant(this._convertNewParticipantNotificationToParticipant(notification));
        common.Debug.traceMethodExited("ParticipantRepository.processNewParticipantNotification");
    },

	/**
	 * Marks a participant as active in the chat
	 * 
	 * @param notification An IParticipantJoinedNotification
	 */
    processParticipantJoinedNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ParticipantRepository.processParticipantJoinedNotification");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IParticipantJoinedNotification);
        this.markParticipantAsActive(notification.get_participantId());
        common.Debug.traceMethodExited("ParticipantRepository.processParticipantJoinedNotification");
    },

	/**
	 * Marks a participant as inactive in the chat
	 * 
	 * @param notification An IParticipantLeftNotification
	 */
    processParticipantLeftNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ParticipantRepository.processParticipantLeftNotification");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IParticipantLeftNotification);
        this.markParticipantAsInactive(notification.get_participantId());
        common.Debug.traceMethodExited("ParticipantRepository.processParticipantLeftNotification");
    },

	/**
	 * Changes the name of a participant
	 * 
	 * @param notification An IParticipantNameChangedNotification
	 */
    processParticipantNameChangedNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ParticipantRepository.processParticipantNameChangedNotification");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IParticipantNameChangedNotification);
        this.changeParticipantName(notification.get_participantId(), notification.get_newParticipantName());
        common.Debug.traceMethodEntered("ParticipantRepository.processParticipantNameChangedNotification");
    },

    // private methods

    _convertNewParticipantNotificationToParticipant : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.INewParticipantNotification);
        return new webservices.Participant(notification.get_participantId(), notification.get_participantName(), notification.get_interactionType(), false);
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 *  Polling manager class
 * 
 *  This class should be viewed as a singleton.
 */
webservices._Internal._PollManager = Class.create(webservices.ListenableBase,
{
    // constants

	/** By default, this is how long the client will wait between polling requests.  Units = milliseconds. */
    DEFAULT_POLL_INTERVAL : 500,

	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("PollManager.initialize()");
        $super();

        this.addImplementedInterface(webservices.Interfaces.IPollWaitSuggestionUpdateObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IFailoverNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IChatReconnectNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IRefreshPageNotificationObserver, webservices);

        this.reset();
        common.Debug.traceMethodExited("PollManager.initialize()");
    },
 
	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("PollManager.destroy()");
        webservices.ListenableBase.prototype.destroy.call(this);

        this._chatManager = null;
        
        if(this._timer)
        {
            this._timer.destroy();
            delete this._timer;
            this._timer = null;
        }
        common.Debug.traceMethodExited("PollManager.destroy()");
    },

    // public methods

	/**
	 * Resets the PollManager to its default state
	 */
    reset : function()
    {
        common.Debug.traceMethodEntered("PollManager.reset()");

        webservices.ListenableBase.prototype.reset.call(this);

        // initialize data
        this._isActive = false;
        this._fireResumedPollingNotificationAfterNextPoll = false; // Fires upon first poll after recovery from network problems. Does not fire upon first poll of a new, healthy chat.

        if(this._timer)
        {
            this._timer.destroy();
            delete this._timer;
            this._timer = null;
        }

        // Create a timer to do the polling.
        common.Debug.traceNote("Creating poll manager's timer, but not going to start it yet.");
        this._timer = new webservices.RecurringTimer(this.DEFAULT_POLL_INTERVAL);

        var _self = this;
        this._timer.registerSuccessListener(function() { _self.onTimeToPoll(); });

        common.Debug.traceMethodExited("PollManager.reset()");
    },

	/**
	 * Setter for the chat manager property
	 * 
	 * @param chatManager The ChatManager singleton
	 */
    set_chatManager : function(chatManager)
    {
        common.Debug.traceMethodEntered("PollManager.set_chatManager()");
        this._chatManager = chatManager;
        common.Debug.traceMethodExited("PollManager.set_chatManager()");
    },

	/**
	 * Update the duration of the polling timer (in response to the IC server's suggestion to do so)
	 * 
	 * @param pollWaitSuggestion The new suggested polling interval, in milliseconds.
	 */
    processPollWaitSuggestionUpdate : function(pollWaitSuggestion)
    {
        common.Debug.traceMethodEntered("PollManager.processPollWaitSuggestionUpdate()");
        this.changeDuration(pollWaitSuggestion);
        common.Debug.traceMethodExited("PollManager.processPollWaitSuggestionUpdate()");
    },

	/**
	 * Listener for notification that a failover has occurred.  Stops polling, since the chat is dead.
	 * 
	 * @param notification IFailoverNotification
	 */
    processFailoverNotification : function(notification)
    {
        common.Debug.traceMethodEntered("PollManager.processFailoverNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IFailoverNotification);

        common.Debug.traceAlways("PollManager received failover notification. Stopping polling.");
        this.stop();
        common.Debug.traceMethodExited("PollManager.processFailoverNotification()");
    },

	/**
	 * Listener for notification that the chat has reconnected.  Resumes polling.
	 * 
	 * @param notification IChatReconnectNotification
	 */
    processChatReconnectNotification : function(notification)
    {
        common.Debug.traceMethodEntered("PollManager.processChatReconnectNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IChatReconnectNotification);

        common.Debug.traceAlways("PollManager received chat reconnect notification. Starting polling.");
        this._fireResumedPollingNotificationAfterNextPoll = true;
		this.start();

        common.Debug.traceMethodExited("PollManager.processChatReconnectNotification()");
    },

	/**
     * Listener for notification that the user needs to refresh the page to start a new chat. 
     * Stops polling, since the chat is dead.
	 * 
	 * @param notification IRefreshPageNotification
	 */
    processRefreshPageNotification : function(notification)
    {
        common.Debug.traceMethodEntered("PollManager.processRefreshPageNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IRefreshPageNotification);

        common.Debug.traceAlways("PollManager received refresh page notification. Stopping polling.");

        // if we need to refresh the page to start over, make sure we've stopped polling
        this.stop();
        common.Debug.traceMethodExited("PollManager.processRefreshPageNotification()");
    },

    /**
     *  Start polling.  Called when client app is done initializing.
     */
    start : function()
    {
        common.Debug.traceMethodEntered("PollManager.start()");

        this._isActive = true;

        if (this._timer)
        {
            common.Debug.traceNote("In PollManager.start(), timer exists, so stopping it");
            this._timer.stop(); // Just in case it's already running. Won't do any harm if not.
        }

        if(this._isActive)
        {
            common.Debug.traceStatus("Performing first poll");
            this.poll();
            
            common.Debug.traceNote("Starting PollManager's timer.");
            this._timer.start();
        }

        common.Debug.traceMethodExited("PollManager.start()");
    },

	/**
	 * Stop polling.  Called when the chat is finished.
	 */
    stop : function()
    {
        common.Debug.traceMethodEntered("PollManager.stop()");
        this._isActive = false;
        if (this._timer)
        {
            common.Debug.traceNote("In PollManager.stop(), timer exists, so stopping it");
            this._timer.stop();
        }
        common.Debug.traceMethodExited("PollManager.stop()");
    },

	/**
	 * Polling is triggered by a recurring timer.  This method changes the interval at which this timer fires.
	 * 
	 * @param duration The new interval between poll requests, in milliseconds.
	 */
    changeDuration : function(duration)
    {
        common.Debug.traceMethodEntered("PollManager.changeDuration()");
        common.Debug.traceStatus("PollManager setting timer duration to: " + duration + "ms");
        if (this._timer)
        {
            if(duration != this._timer.get_duration())
            {
                this._timer.restart(duration);
            }
        }
        common.Debug.traceMethodExited("PollManager.changeDuration()");
    },

	/**
     * Indicates whether the poll manager is active (i.e. a poll 
     * request is pending right now, or the poll manager is 
     * currently waiting for the timer to fire again). 
	 *  
	 * @return true if the poll manager is active, false if it is not 
	 */
    isActive : function()
    {
        return this._isActive;
    },

    /**
     * Called when the timer goes off, indicating it's time to poll now.
     * Create AJAX mgr, register this as a listener of the AJAX mgr, and send polling request.
     * This method should not be called directly by clients of the API.
     */
    onTimeToPoll : function()
    {
        common.Debug.traceMethodEntered("PollManager.onTimeToPoll()");

        if(!this._isActive)
        {
            common.Debug.traceNote("No longer active, so ignoring this poll timer firing");
        }
        else
        {
            this.poll();
        }
        
        common.Debug.traceMethodExited("PollManager.onTimeToPoll()");
    },
    
	/**
	 * Creates and sends a poll request
	 */
    poll : function()
    {
        common.Debug.traceMethodEntered("PollManager.poll()");

        var ajax = this._chatManager.createAjaxManager(webservices.CapabilityRepository.get_pollCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Debug.traceNote("PollManager.poll succeeded: " + response);
            if (_self._fireResumedPollingNotificationAfterNextPoll)
            {
                _self._fireResumedPollingNotificationAfterNextPoll = false;
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createResumedPollingNotification());
            }
            _self.notifyListenersOfSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("PollManager.poll failed: " + response);
            _self.notifyListenersOfFailure(response);
        });
        common.Debug.traceNote("Sending new poll request.");
        var participantId = webservices.ParticipantRepository.get_currentParticipantId();
        ajax.sendRequest(null, participantId, true);
        
        common.Debug.traceMethodExited("PollManager.poll()");
    }
});

/**
 * InteractionParameters class
 * This class contains parameters that will be necessary to create a Interaction.
 */
webservices.InteractionParameters = Class.create(
{
    /**
     * Constructor 
     *  
     * This constructor allows for all parameters to be specified at once.  But, it is 
     * also valid to populate this object gradually and then create the interaction once 
     * it is fully-populated. 
     *  
	 * @param target The name of the queue to which the interaction should be sent. 
	 * @param targetType "Workgroup" or "User", depending on the queue type of the previous param. 
	 * @param customInfo Customers wishing to customize interactions may set this to any data.  It will be set as 
	 *                   the value of the CUSTOM_INFO attribute on the interaction. 
     * @param routingContexts Optional. An instance of webservices.RoutingContexts that specifies how 
     *                               interactions should be routed. 
	 * @param participantName The name of the participant who wants to interact with an agent.
	 * @param participantCredentials The credentials (i.e. password, certificate, etc.) of the participant who wants to interact with an agent
     * @param Javascript Date object
	 */
    initialize:function(target, targetType, customInfo, routingContexts, participantName, participantCredentials, creationDateTime)
    {
        this.set_target(target);
        this.set_targetType(targetType);
        this.set_customInfo(customInfo);
        this.set_routingContexts(routingContexts);
        this.set_participantName(participantName);
        this.set_participantCredentials(participantCredentials);
        this.set_creationDateTime(creationDateTime);
    },

    // methods

    /**
     * Returns the interaction's target. 
     * @return  The name of the queue to which interactions should be sent. 
	 */
    get_target : function()
    {
        return this._target;
    },

    /**
     * Sets the interaction's target. 
	 * @param target The name of the queue to which interactions should be sent. 
	 */
    set_target : function(target)
    {
        this._target = target;
    },

	/**
     * Returns the interaction's target type. 
     * @return  "Workgroup" or "User", depending on the queue type of the target. 
	 */
    get_targetType : function()
    {
        return this._targetType;
    },

    /**
     * Sets the interaction's target type. 
	 * @param targetType "Workgroup" or "User", depending on the queue type of the target. 
	 */
    set_targetType : function(targetType)
    {
        this._targetType = targetType;
    },

	/**
     * Returns the custom info (if any). 
     * @return  Customers wishing to customize may set this to any data.  It will be set as 
	 *          the value of the CUSTOM_INFO attribute on the interaction. 
	 */
    get_customInfo : function()
    {
        return this._customInfo;
    },

	/**
     * Sets the custom info (if any). 
     * @param customInfo A string, or null.
	 */
    set_customInfo : function(customInfo)
    {
        this._customInfo = customInfo;
    },

	/**
     * Returns the routing contexts (if any). 
     * @return An instance of RoutingContexts, or null.
	 */
    get_routingContexts : function()
    {
        return this._routingContexts;
    },

	/**
     * Sets the custom info (if any). 
     * @param routingContexts Customers wishing to customize may set this to an instance of webservices.RoutingContexts.
	 */
    set_routingContexts : function(routingContexts)
    {
        this._routingContexts = routingContexts;
    },

    /**
     * Returns the participant's name. 
     * @return The name of the participant who wants to interact with an agent.
	 */
    get_participantName : function()
    {
        return this._participantName;
    },

    /**
     * Sets the participant's name. 
	 * @param participantName The name of the participant who wants to interact with an agent.
	 */
    set_participantName : function(participantName)
    {
        this._participantName = participantName;
    },

    /**
     * Returns the participant's credentials (if any). 
     * @return The credentials (i.e. password, certificate, etc.) of the participant 
	 */
    get_participantCredentials : function()
    {
        return this._participantCredentials;
    },

    /**
     * Sets the participant's credentials (if any). 
     * @param participantCredentials The credentials (i.e. password, certificate, etc.) of the participant 
	 */
    set_participantCredentials : function(participantCredentials)
    {
        if(!participantCredentials)
        {
            participantCredentials = "";
        }
        this._participantCredentials = participantCredentials;
    },

    /**
     * Gets the creation date/time of this interaction 
     *  
     * @return Javascript Date object 
     */
    get_creationDateTime : function()
    {
        return this._creationDateTime;
    },

    /**
     * Sets the creation date/time of this interaction 
     *  
     * @param creationDateTime Javascript Date object 
     */
    set_creationDateTime : function(creationDateTime)
    {
        this._creationDateTime = creationDateTime;
    }
});

/**
 * ChatParameters class
 * This class contains parameters that will be necessary to create a Chat.
 */
webservices.ChatParameters = Class.create(webservices.InteractionParameters,
{
    /**
     * Constructor 
     *  
     * This constructor allows for all parameters to be specified at once.  But, it is 
     * also valid to populate this object gradually and then create the chat once 
     * it is fully-populated. 
     *  
	 * @param target The name of the queue to which chats should be sent. 
	 * @param targetType "Workgroup" or "User", depending on the queue type of the previous param. 
	 * @param customInfo Customers wishing to customize chats may set this to any data.  It will be set as 
	 *                   the value of the CUSTOM_INFO attribute on the interaction. 
     * @param routingContexts Optional. An instance of webservices.RoutingContexts that specifies how 
     *                               chats should be routed. 
	 * @param participantName The name of the participant who wants to chat with an agent.
	 * @param participantCredentials The credentials (i.e. password, certificate, etc.) of the participant trying to log in
     * @param Javascript Date object 
	 */
    initialize:function($super, target, targetType, customInfo, routingContexts, participantName, participantCredentials, creationDateTime)
    {
        $super(target, targetType, customInfo, routingContexts, participantName, participantCredentials, creationDateTime);
    }
});

/**
 * Routing Contexts class 
 * This allows the specification of routing information for the interaction. 
 * A "routing context" is a tuple of a "category" and a "context".  This class 
 * represents one or more such tuples. 
 */
webservices.RoutingContexts = Class.create(
{
	/**
     * Constructor 
     * Creates a set of routing contexts, containing one routing context. 
     * Additional ones may be added with the add() method. 
     * @param category The category of what is being specified, i.e. "Product"
     * @param context The specification of something within that category, i.e. "NewAutoInsurancePolicy"
	 */
    initialize: function(category, context)
    {
        common.Debug.traceMethodEntered("RoutingContexts.initalize()");

        this._routingContexts = new Hash();
        this.add(category, context);

        common.Debug.traceMethodExited("RoutingContexts.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        delete this._routingContexts;
        this._routingContexts = null;
    },

	/**
     * Adds another routing context. 
     * @param category The category of what is being specified, i.e. "Product"
     * @param context The specification of something within that category, i.e. "NewAutoInsurancePolicy"
	 */
    add : function(category, context)
    {
        common.Debug.traceMethodEntered("RoutingContexts.add()");
        common.Debug.traceNote("category: " + category + ", context: " + context);

        if (typeof category != "string")
        {
            throw common.ExceptionFactory.createException("category must be a string.");
        }

        if (typeof context != "string")
        {
            throw common.ExceptionFactory.createException("context must be a string.");
        }

        this._routingContexts.set(category, context);

        common.Debug.traceMethodExited("RoutingContexts.add()");
    },

    /**
     * Returns true if this routing context is empty. 
     * @return Boolean 
     */
    isEmpty : function()
    {
        return (this._routingContexts == null || this._routingContexts.length <= 0);
    },

    /**
     * Returns the set of categories that have been added. 
     * @return Array of strings 
     */
    categories : function()
    {
        if (this._routingContexts == null)
        {
            return null;
        }
        return this._routingContexts.keys();
    },

    /**
     * Gets the context of a particular category. 
     * @param category string 
     * @return string 
     */
    getContext : function(category)
    {
        if (this._routingContexts == null)
        {
            return null;
        }
        return this._routingContexts.get(category);
    }
});

/**
 * CallbackParameters class
 * This class contains parameters that will be necessary to create a Callback.
 */
webservices.CallbackParameters = Class.create(webservices.InteractionParameters,
{
    /**
     * Constructor 
     *  
     * This constructor allows for all parameters to be specified at once.  But, it is 
     * also valid to populate this object gradually and then create the callback once 
     * it is fully-populated. 
     *  
	 * @param target The name of the queue to which callbacks should be sent. 
	 * @param targetType "Workgroup" or "User", depending on the queue type of the previous param. 
	 * @param customInfo Customers wishing to customize callbacks may set this to any data.  It will be set as 
	 *                   the value of the CUSTOM_INFO attribute on the interaction. 
     * @param attributes Optional parameter.  An object containing key/value pairs.  If supplied, all 
     *                   keys and values must be strings.  These fields will be passed to WebProcessorBridge
     *                   and set as attributes on the Callback (but each key will be prefixed with a constant
     *                   to form the actual attribute name). 
     * @param routingContexts Optional. An instance of webservices.RoutingContexts that specifies how 
     *                               Callbacks should be routed. 
	 * @param participantName The name of the participant who wants to callback with an agent.
	 * @param participantCredentials The credentials (i.e. password, certificate, etc.) of the participant trying to log in
     * @param Javascript Date object
	 * @param telephone The telephone number at which the participant wishes to be called
	 * @param subject The topic which the participant wishes to discuss with the agent
	 */
    initialize:function($super, target, targetType, customInfo, attributes, routingContexts,
                        participantName, participantCredentials, creationDateTime, telephone, subject)
    {
        $super(target, targetType, customInfo, routingContexts, participantName, participantCredentials, creationDateTime);
        this.set_telephone(telephone);
        this.set_subject(subject);
        this.set_attributes(attributes);
    },

    // methods

    /**
     * Returns the callback telephone number
	 * @return The telephone number at which the participant wishes to be called
	 */
    get_telephone : function()
    {
        return this._telephone;
    },

    /**
     * Sets the callback's telephone number
	 * @param telephone The telephone number at which the participant wishes to be called
	 */
    set_telephone : function(telephone)
    {
        this._telephone = telephone;
    },
    /**
     * Returns the callback's subject (what the participant wants to talk about). 
	 * @return The topic which the participant wishes to discuss with the agent
	 */
    get_subject : function()
    {
        return this._subject;
    },

    /**
     * Sets the callback's subject. 
	 * @param subject The topic which the participant wishes to discuss with the agent
	 */
    set_subject : function(subject)
    {
        this._subject = subject;
    },

    /**
     * Returns the callback's optional attributes. 
     * @return  The attributes to set on the callback interaction.
	 */
    get_attributes : function()
    {
        return this._attributes;
    },

    /**
     * Sets the callback's optional attributes. 
     * @param attributes An object containing key/value pairs.  If supplied, all 
     *                   keys and values must be strings.  These fields will be passed to WebProcessorBridge
     *                   and set as attributes on the Callback (but each key will be prefixed with a constant
     *                   to form the actual attribute name). 
	 */
    set_attributes : function(attributes)
    {
        this._attributes = attributes;
    }
});

// Register namespaces
webservices.registerChildNamespace("TypingIndicator");

/** Default duration of the typing indicator, in milliseconds */
webservices.TypingIndicator.DEFAULT_DURATION_MS = 3000;

webservices.registerChildNamespace("_Internal");

/**
 *  Implements the Typing Indicator functionality.
 *  This class should be viewed as abstract, and its subclasses each as a singleton.
 *  When a user starts typing (i.e. presses a key when their typing indicator status is false), will set the
 *  indicator to true. After that, if a certain amount of time passes and the user doen't hit another key,
 *  will set the indicator to false.
 */
webservices.TypingIndicatorBase = Class.create(webservices.ListenableBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.initialize");
        $super();

        this.addImplementedInterface(webservices.Interfaces.IFailoverNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IResumedPollingNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IFailoverNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IResumedPollingNotification);

        this.reset();
        common.Debug.traceMethodExited("TypingIndicatorBase.initialize");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._timer)
        {
            this._timer.destroy();
            delete this._timer;
            this._timer = null;
        }

        webservices.ListenableBase.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Setter for the chat manager property.
	 * 
	 * @param chatManager An instance of (a subclass of abstract class) ChatManagerBase
	 */
    set_chatManager : function(chatManager)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.set_chatManager()");
        this._chatManager = chatManager;
        common.Debug.traceMethodExited("TypingIndicatorBase.set_chatManager()");
    },

	/**
	 * Change the amount of time that must pass after a keystroke before a user is considered to no longer be typing.
	 * 
	 * @param duration New time limit, in milliseconds.
	 */
    set_duration : function(duration)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.set_duration()");
        if (this._timer)
        {
            if(this._timer.get_duration() != duration)
            {
				this._timer.restart(duration);
            }
        }
        common.Debug.traceMethodExited("TypingIndicatorBase.set_duration()");
    },

	/**
	 * Returns whether the web user is typing. 
	 *  
	 * @return True if the web user is typing, false otherwise. 
	 */
    isTyping : function()
    {
        return this._typingState;
    },
    
    /**
     *  If typing indicator is false, calls <code>set()</code>
     *  If typing indicator is true, will reset the timer to the full time interval.
     */
    keyPressed : function()
    {
        if (!this.isTyping())
        {
            this.set(true);
        }
        else
        {
            this._timer.restart();
        }
    },

    /**
     *  Sets this object's typing state to true or false depending on the arg that's passed in, and sends
     *  an AJAX request to set typing state on the WebProcessor to match.
     *  Called by <code>keyPressed()</code>, with arg=true when user presses a key.
     *  Called when the timer times out with arg=false.
     *  Note: If arg=true, then in <code>onAJAXSuccess()</code>, <code>timer</code> will be
     *  started to set typingState back to false after a certain period of time.
	 *  This should be viewed as a private method.
	 *  
	 *  @param true if the web user is typing, false otherwise
     */
    set : function(typingState)
    {
        if(this._running)
        {
            this._typingState = typingState;
            var ajax = this._chatManager.createAjaxManager(webservices.CapabilityRepository.get_setTypingStateCapability());
            var _self = this;
            ajax.registerSuccessListener(function(response)
            {
                common.Debug.traceNote("TypingIndicator.set succeeded: " + response);
                _self.onAJAXSuccess(response, typingState);
            });
            ajax.registerFailureListener(function(response)
            {
                common.Debug.traceError("TypingIndicator.set failed: " + response);
                _self._typingState = false; // So a failed AJAX request doesn't result in it getting stuck at "true", thus preventing future indicators from being sent.
                _self.notifyListenersOfFailure(response);
            });
            var participantId = webservices.ParticipantRepository.get_currentParticipantId();
            ajax.sendRequest(this.serializeDataToPost(), participantId, true);
        }
    },

    /**
     * This method is called when the AJAX message succeeded.  It does the following:
      * 1) If the typing state was just set to true, this sets a timer to set it back to
     * false if no more typing occurs for a while.
     * 2) Notifies listeners.
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param response The IC server's response to the AJAX request.
	 * @param typingState True or false, whichever the typing state was set to by the AJAX request. 
     */
    onAJAXSuccess : function(response, typingState)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.onAJAXSuccess()");
        
        // Could have used this.typingState, and made this method not take any arguments, but
        // that could open the door to thread-safety issues.
        if (typingState)
        {
            this._timer.start();  // Set timer to clear typing state afer a while
        }
        this.notifyListenersOfSuccess(response);

        common.Debug.traceMethodExited("TypingIndicatorBase.onAJAXSuccess()");
    },
    
	/**
	 * Make this object active.  If stopped, calls to set() will have no effect.
	 */
    start : function()
    {
        this._running = true;
    },
    
	/**
	 * Make this object inactive.  If stopped, calls to set() will have no effect. 
	 * Note that this will restart the timer so that it will run one last time.
	 */
    stop : function()
    {
        this._running = false;
        this._timer.restart(); // Is this really necessary? If user starts typing and this is called, do we care to receive the stopped typing notification?
    },
    
	/**
	 * Resets the object to its default "off" state.
	 */
    reset : function()
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.reset");
        
        webservices.ListenableBase.prototype.reset.call(this);

        this._running = false;
        this._typingState = false;

        if(this._timer)
        {
            this._timer.destroy();
            delete this._timer;
            this._timer = null;
        }

        // A timer to use to know when to set the typing indicator back to false
        common.Debug.traceNote("About to create a timer for typing indicator...but not going to start it yet");
        this._timer = new webservices.Timer(webservices.TypingIndicator.DEFAULT_DURATION_MS);
        common.Debug.traceNote("Created timer.");

        var _self = this;
        this._timer.registerSuccessListener(function() { _self.set(false); });

        common.Debug.traceMethodExited("TypingIndicatorBase.reset");
    },

	/**
	 * Listener for notification that a failover has occurred.  Stops polling, since the chat is dead.
	 * 
	 * @param notification IFailoverNotification
	 */
    processFailoverNotification : function(notification)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.processFailoverNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IFailoverNotification);

        this.stop();

        common.Debug.traceMethodExited("TypingIndicatorBase.processFailoverNotification()");
    },

	/**
	 * Event listener for reconnection of the chat 
	 *  
	 * @param notification Something that implements webservices.Interfaces.IResumedPollingNotification
	 */
    processResumedPollingNotification : function(notification)
    {
        common.Debug.traceMethodEntered("TypingIndicatorBase.processResumedPollingNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IResumedPollingNotification);

        this.start();

        common.Debug.traceMethodExited("TypingIndicatorBase.processResumedPollingNotification()");
    }
});

/**
 * This class is the main brains of the chat, but is abstract - use derived class instead
 */
webservices.ChatManagerBase = Class.create(webservices.InteractionManagerBase,
{
	/** 
	 * The amount of time that must elapse after a keystroke before the web user is considered to be no longer typing. 
	 * Specified in milliseconds.
	 */
    typingIndicatorDuration: webservices.TypingIndicator.DEFAULT_DURATION_MS,

	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param typingIndicator An object to track whether the web user is typing or not
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, typingIndicator, failoverHandler)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.initialize()");

        var numArgs = 5;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ChatManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);
        
        this._typingIndicator = typingIndicator;
        this._failoverHandler = failoverHandler;
		this._isReconnecting = false;
        this._partyManager = null;

        this.addImplementedInterface(webservices.Interfaces.IChatCompletionNotification, webservices);
        this.addImplementedInterface(webservices.Interfaces.IParticipantActiveNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IChatCompletionNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IParticipantActiveNotification);

        common.Debug.traceMethodExited("ChatManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("ChatManagerBase.destroy()");

        this._typingIndicator = null;

        common.Debug.traceMethodExited("ChatManagerBase.destroy()");
    },

    // public methods

	/**
     * Sets the party manager, which can be used to get agent's photos.
	 * 
     * @param partyManager An instance of a subclass of webservices.PartyManagerBase
	 */
    set_partyManager : function(partyManager)
    {
        this._partyManager = partyManager;
    },

	/**
	 * Start a chat.  This method does not return anything, but will cause 
     * either a ChatCreationNotification or a ChatCreationFailureNotification to be 
     * sent to observers of these Notification types. 
	 * 
     * @param parameters An instance of ChatParameters
	 */
    login : function(parameters)
    {
        console.debug(parameters);
        common.Debug.traceMethodEntered("ChatManagerBase.login()");

        var anonymousOk = webservices.CapabilityRepository.isChatAnonymousAuthenticationCapabilityEnabled();
        if (!anonymousOk && !(parameters.get_participantName() && parameters.get_participantCredentials())) {
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCreationFailureNotification(new webservices.Error("error.websvc.unsupportedOperation")));
        } else
        {
            // create the start chat capability and start the chat
            var ajax = this.createAjaxManager(this._capabilityRepository.get_startChatCapability());
            var _self = this;
            ajax.registerSuccessListener(function(response)
            {
                common.Debug.traceNote("ChatManagerBase.login() succeeded: " + response);
                webservices.Servers.OriginalUriFragment = webservices.Servers.CurrentUriFragment;
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCreationNotification(response.chatID, response.currentParticipantID, response.dateFormat, response.timeFormat));
                _self.processResponse(response);
                _self.onAJAXSuccess(response);
            });
            ajax.registerFailureListener(function(response)
            {
                common.Debug.traceError("ChatManagerBase.login() failed: " + response);
                _self.onAJAXFailure(response);
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCreationFailureNotification(response.get_statusReason()));
            });

            // Necessary kludge for an SU3 ES. Will be resolved in a better way in the normal development timeline.
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createNewParticipantNotification(webservices.ParticipantRepository.SYSTEM_SENDER_ID, "IC", webservices.InteractionTypes.CHAT, new Date(), false));

        console.debug(this.serializeLoginPostData(parameters));
        ajax.sendRequest(this.serializeLoginPostData(parameters), null, true);
        }

        common.Debug.traceMethodExited("ChatManagerBase.login()");
    },

	/**
	 * The UI should call this method when the user presses a key, so that a typing indicator may be sent to the IC server.
	 */
    keyPressed: function()
    {
        common.Debug.traceMethodEntered("ChatManagerBase.keyPressed()");
        if (this._typingIndicator) {
            this._typingIndicator.keyPressed();
        }
        common.Debug.traceMethodExited("ChatManagerBase.keyPressed()");
    },

	/**
	 * Sends a message during the course of a chat.
	 * 
	 * @param str The message that the web user typed
	 * @param isContentHtml True if the message is in HTML format, false if it is in plain text format.
	 * @param callback This function will be called when a response is received from the IC server.  This function should take 2 arguments. The first argument will be a boolean indicating whether the send attempt was successful.  The second will be the failure reason (not applicable if the send attempt succeeded). 
	 */
    sendMessage: function(str, isContentHtml, callback)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.sendMessage()");
        var ajax = this.createAjaxManager(this._capabilityRepository.get_sendMessageCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Debug.traceNote("ChatManagerBase.sendMessage() succeeded: " + response);
            _self.processResponse(response);
            _self.onAJAXSuccess(response);
            callback(true, response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("ChatManagerBase.sendMessage() failed: " + response);
            _self.onAJAXFailure(response);
            callback(false, response);
        });
        var participantId = webservices.ParticipantRepository.get_currentParticipantId();
        ajax.sendRequest(this.serializeMessageToSend(str, isContentHtml), participantId, true);
        common.Debug.traceMethodExited("ChatManagerBase.sendMessage()");
    },

	/**
	 * Ends the chat.  This method does not return anything, but will cause 
     * either a ChatCompletionNotification or a ChatCompletionFailureNotification to be 
     * sent to observers of these Notification types. 
	 */
    exitChat: function()
    {
        common.Debug.traceMethodEntered("ChatManagerBase.exitChat()");
        var ajax = this.createAjaxManager(this._capabilityRepository.get_exitCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Debug.traceNote("ChatManagerBase.exitChat() succeeded: " + response);
            _self.processResponse(response);
            _self.onAJAXSuccess(response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCompletionNotification());
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCurrentParticipantIdChangedNotification(null, new Date()));
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("ChatManagerBase.exitChat() failed: " + response);
            response.wasExitRequest = true;
            _self.onAJAXFailure(response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCompletionFailureNotification(response.get_statusReason()));
        });
        var participantId = webservices.ParticipantRepository.get_currentParticipantId();
        ajax.sendRequest(null, participantId, false);
        common.Debug.traceMethodExited("ChatManagerBase.exitChat()");
    },

	/**
	 * Ends the chat.  No confirmation will be given to the caller.
	 */
    exitChatAsync: function()
    {
        common.Debug.traceMethodEntered("ChatManagerBase.exitChatAsync()");
        var ajax = this.createAjaxManager(this._capabilityRepository.get_exitCapability());
        var participantId = webservices.ParticipantRepository.get_currentParticipantId();
        ajax.sendRequest(null, participantId, true);
        common.Debug.traceMethodExited("ChatManagerBase.exitChatAsync()");
    },

	/**
	 * Reconnect to a chat for which connectivity was lost.
	 * 
	 * @param callback This function will be called when a response is received from the IC server.  This function should take 2 arguments. The first argument will be a boolean indicating whether the send attempt was successful.  The second will be the ChatResponse representing the response that was received from IC.
	 */
    reconnect : function(callback)
    {
        //var seqNum = webservices.ReceivedMessageRepository.get_lastMessageSequenceNumber();
        var ajax = this.createAjaxManager(this._capabilityRepository.get_reconnectChatCapability());
        var _self = this;
		
		if(this._isReconnecting == true)
		{
			return;
		}
		
		this._isReconnecting = true;
		
        ajax.registerSuccessListener(function(response)
        {
		
            common.Debug.traceNote("ChatManagerBase.reconnect() succeeded: " + response);
			webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatReconnectUINotification());
			webservices.EventSequenceManager.reset();		
			//var previousParticipants = webservices.ParticipantRepository.get_participants();
			webservices.ParticipantRepository.reset();	
			
			webservices.NotificationRegistry.process(webservices.NotificationFactory.createCurrentParticipantIdChangedNotification(response.currentParticipantID, new Date()));

			_self._isReconnecting = false;
            _self.processResponse(response);
            _self.onAJAXSuccess(response);
            callback(true, response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("ChatManagerBase.reconnect() failed: " + response);
            callback(false, response);
			_self._isReconnecting = false;
        });

        ajax.sendRequest(this.serializeReconnectPostData(this.chatID), false, true);
    },

    /** 
     * Handle a successful response to a request to start a chat.
     * This involves creating the typing indicator and the poll manager, and
     * then using <code>onAJAXSuccess()</code> to handle the response.
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param currentParticipantID The ID of the current participant (i.e. the person whose web browser is running this code) 
     */
    startChat: function(currentChatID, currentParticipantID)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.startChat()");
        var _self = this;
		this.chatID = currentChatID;

        try
        {
            // configure
            if(currentParticipantID)
            {
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createCurrentParticipantIdChangedNotification(currentParticipantID, new Date()));
            }
            
            // start the event processor
            webservices.EventProcessor.start();
        
            // configure the failover handler
            this._failoverHandler.set_chatManager(this);

            // configure the poll manager
            webservices.PollManager.set_chatManager(this);
            webservices.PollManager.registerSuccessListener(function(response)
            {
                common.Debug.traceNote("PollManager.SuccessListener: " + response);
                _self.processResponse(response);
                _self.onAJAXSuccess(response);
            });
            webservices.PollManager.registerFailureListener(function(response)
            {
                common.Debug.traceError("PollManager.FailureListener: " + response);
                _self.onAJAXFailure(response);
            });
            webservices.PollManager.start();

            // configure the typing indicator
            this._typingIndicator.set_chatManager(this);
            this._typingIndicator.set_duration(this.typingIndicatorDuration);
            this._typingIndicator.registerSuccessListener(function(response)
            {
                common.Debug.traceNote("TypingIndicator.SuccessListener: " + response);
                _self.processResponse(response);
                _self.onAJAXSuccess(response);
            });
            this._typingIndicator.registerFailureListener(function(response)
            {
                common.Debug.traceError("TypingIndicator.FailureListener: " + response);
                _self.onAJAXFailure(response);
            });
            this._typingIndicator.start();
        }
        catch(e)
        {
            common.Debug.traceError("Caught unhandled exception:\n" + e);
            common.Debug.alert("Caught unhandled exception:\n" + e);
            webservices.ProblemReporter.sendProblemReport(e, "ChatManagerBase.startChat()");
        }
        common.Debug.traceMethodExited("ChatManagerBase.startChat()");
    },
    
	/**
	 * This method will be called when a chat is exited successfully.
	 *  
	 * @see exitChat() 
     * @param chatCompletionNotification Notification object. Contents ignored.
	 */
    processChatCompletionNotification : function(chatCompletionNotification)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.processChatCompletionNotification()");

        this._tearDownChat();

        common.Debug.traceMethodExited("ChatManagerBase.processChatCompletionNotification()");
    },

    /**
	 * Set chat's state data, based on response's state data 
	 *  
	 * @param response An instance of a subclass of ResponseBase, which represents the response to an AJAX request received from the IC server
     */
    processResponse : function(response)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.processResponse()");

        try
        {
            common.Interface.ensureImplements(response, webservices.Interfaces.IChatResponse);

            if (response.get_pollWaitSuggestion())
            {
                webservices.ChatPropertyUpdateRegistry.processPollWaitSuggestionUpdate(response.get_pollWaitSuggestion());
            }

            var events = response.get_events();
            if(events)
            {
                for(var i = 0; i < events.length; ++i)
                {
                    //webservices.EventSequenceManager.addSequenceableObject(events[i]); // temporarily removed and added the following line instead.
                    webservices.EventProcessor.process(events[i], false);
                }
            }

            var cfgVer = response.get_serverConfigVersion();
            if (cfgVer != webservices.Json.ServerConfigurationProcessor.get_lastServerConfigurationVersion())
            {
                webservices.Json.ServerConfigurationManager.getServerConfiguration();
            }
        } catch (e)
        {
            webservices.ProblemReporter.sendProblemReport(e, "ChatManagerBase.processResponse()");
        }

        common.Debug.traceMethodExited("ChatManagerBase.processResponse()");
    },

    /** 
	 * Called when a participant has joined the chat.  Queries the agent's photo. 
	 *  
	 * @param notification Something that implements IParticipantActiveNotification
     */
    processParticipantActiveNotification : function(notification)
    {
        common.Interface.ensureImplements(notification, webservices.Interfaces.IParticipantActiveNotification);
        
        if (this._partyManager && webservices.CapabilityRepository.isPartyInfoCapabilityEnabled())
        {
            var currentParticipantId = webservices.ParticipantRepository.get_currentParticipantId();
            var otherPartyId = notification.get_participantId();

            // Don't query the photo of the web visitor - there won't be one.
            if (otherPartyId != currentParticipantId)
            {
                var otherParty = webservices.ParticipantRepository.get_participant(otherPartyId);

                // If otherParty's photo is not known, request it
                if (null == otherParty || null == otherParty.get_photo())
                {
                    this._partyManager.getPartyInfo(currentParticipantId, otherPartyId);
                }
            }
        }
    },

    _tearDownChat : function()
    {
        common.Debug.traceMethodEntered("ChatManagerBase._tearDownChat()");
        // immediately stop the sub systems that are running
        webservices.EventProcessor.stop();
        webservices.PollManager.stop();
        this._typingIndicator.stop();

        // Remove chat participants, but leave callback participants intact
        webservices.ParticipantRepository.removeAllParticipantsForInteractionType(webservices.InteractionTypes.CHAT);

        // reset the subsystems back to original state
        webservices.PollManager.reset();
        webservices.EventSequenceManager.reset();
        webservices.ReceivedMessageRepository.reset();
        webservices.ReceivedUrlRepository.reset();
        this._typingIndicator.reset();
        webservices.ProblemReporter.reset();
        webservices.Json.ServerConfigurationProcessor.resetServerConfigurationVersion();

        common.Debug.traceMethodExited("ChatManagerBase._tearDownChat()");
    },

    _handleInvalidSession : function(response)
    {
        common.Debug.traceMethodEntered("ChatManagerBase._handleInvalidSession()");
        if (response.wasExitRequest)
        {
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createChatCompletionNotification());
        } else
        {
            this._tearDownChat();
        }
        common.Debug.traceMethodExited("ChatManagerBase._handleInvalidSession()");
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * This class handles reporting problems back to IC
 */
webservices._Internal._ProblemReporterBase = Class.create(common.InterfaceImplementation,
{
    MAX_RECORDS_TO_KEEP: 8,

	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.initialize()");

        var numArgs = 1;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ProblemReporterBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        $super();

        this.addImplementedInterface(webservices.Interfaces.IFailoverNotificationObserver, webservices);
        this.addImplementedInterface(webservices.Interfaces.IResumedPollingNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IFailoverNotification);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IResumedPollingNotification);

        this._failedRequestHistory = new Array();
        this._timedOutRequestHistory = new Array();
        this._connectivityFailureHistory = new Array();
        this._regEx = null;

        common.Debug.traceMethodExited("ProblemReporterBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.destroy()");

        this._failedRequestHistory = null;
        this._timedOutRequestHistory = null;
        this._connectivityFailureHistory = null;
        this._regEx = null;

        common.Debug.traceMethodExited("ProblemReporterBase.destroy()");
    },

	/**
	 * Sets to default state
	 */
    reset : function()
    {
        this._failedRequestHistory = new Array();
        this._timedOutRequestHistory = new Array();
        this._connectivityFailureHistory = new Array();
        this._regEx = null;
    },

    // public methods

    /** 
     * Send a "problem report" to WebProcessorBridge, since browser-side tracing will be difficult to obtain in a production scenario.
     */
    sendProblemReport : function(reason, attemptedWork, giveResetLink)
    {
        common.Debug.traceMethodEntered("ChatManagerBase.sendProblemReport()");
        var participantId = webservices.ParticipantRepository.get_currentParticipantId();

        if (webservices.CapabilityRepository.isProblemReportCapabilityEnabled() && (null != participantId))
        {
            var problemReport = this._buildProblemReport(reason, attemptedWork);
            var problemReportStr = this.serializeProblemReport(problemReport);

            if ((null == this.get_regEx()) || (new RegExp(this.get_regEx()).test(problemReportStr)))
            {
                common.Debug.traceWarning("Sending problem report.");
                var ajax = this.createAjaxManager();
                ajax.sendRequest(problemReportStr, participantId, true);
            } else
            {
                common.Debug.traceNote("Problem report did not match regular expression.");
            }
        } else
        {
            common.Debug.traceNote("Problem report capability is not enabled, or participant ID has not been set yet.");
        }
      
        /* TODO: Give the user a link to refresh the page
        if (giveResetLink)
        {
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createResetUINotification(webservices.Servers.CurrentUriFragment));
        } 
        */ 

        common.Debug.traceMethodExited("ChatManagerBase.sendProblemReport()");
    },

    /** 
     * Records the failed request (by creating an object representing the failure
     * and adding it to a collection) so that this may be attached to the
     * next problem report to be send. 
     *  
     * @param response A subclass of ResponseBase representing the message that failed to be send properly
     */
    recordFailedRequest : function(response)
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.recordFailedRequest()");
        try
        {
            var url = response.xmlHttpRequest.request.url;
            if (url.indexOf(webservices.CapabilityUrls.Common.PROBLEMREPORT) == -1)
            {
                var sendTimestamp = response.xmlHttpRequest.sendTimestamp;
                var duration = new Date() - sendTimestamp;
                var status = response.xmlHttpRequest.transport.status;
                var failedRequestInfo = { "status": status,
                                          "url": url,
                                          "sendTimestamp": sendTimestamp,
                                          "duration": duration
                                        };
                this._failedRequestHistory.push(failedRequestInfo);
                common.Debug.traceWarning("Failed request: " + failedRequestInfo);

                while (this._failedRequestHistory.length > this.MAX_RECORDS_TO_KEEP)
                {
                    this._failedRequestHistory.shift();
                }

                this.sendProblemReport("Failed request", response.xmlHttpRequest.request.url);
            }
        } catch (e)
        {
            common.Debug.traceError("Unable to record failed request due to exception: " + e);
        }
        common.Debug.traceMethodExited("ProblemReporterBase.recordFailedRequest()");
    },

    /** 
     * Records that an AJAX request has timed out (by creating an object representing the failure
     * and adding it to a collection) so that this may be attached to the next problem 
     * report to send. 
     *  
     * @param ajaxRequest An instance of AJAXRequest. 
     */
    recordTimedOutRequest : function(ajaxRequest)
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.recordTimedOutRequest()");
        try
        {
            var url = ajaxRequest.request.url;
            if (url.indexOf(webservices.CapabilityUrls.Common.PROBLEMREPORT) == -1)
            {
                var sendTimestamp = ajaxRequest.sendTimestamp;
                var duration = new Date() - sendTimestamp;
                var status = ajaxRequest.transport.status;
                var timedOutRequestInfo = { "status": status,
                                            "url": url,
                                            "sendTimestamp": sendTimestamp,
                                            "duration": duration
                                          };
                this._timedOutRequestHistory.push(timedOutRequestInfo);
                common.Debug.traceWarning("Timed-out request: " + timedOutRequestInfo);

                while (this._timedOutRequestHistory.length > this.MAX_RECORDS_TO_KEEP)
                {
                    this._timedOutRequestHistory.shift();
                }
            }
        } catch (e)
        {
            common.Debug.traceError("Unable to record timed out request due to exception: " + e);
        }
        common.Debug.traceMethodExited("ProblemReporterBase.recordTimedOutRequest()");
    },

	/**
     * Listener for notification that a failover has occurred. Records the failure, to be included in the next problem report.
	 * 
	 * @param notification IFailoverNotification
	 */
    processFailoverNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.processFailoverNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IFailoverNotification);
        common.Debug.traceWarning("ProblemReporterBase received failover notification.");
        var timestamp = new Date();
        var connectivityFailureInfo = {
                                        "activity": "failover",
                                        "timestamp": timestamp
                                      };
        this._connectivityFailureHistory.push(connectivityFailureInfo);

        while (this._connectivityFailureHistory.length > this.MAX_RECORDS_TO_KEEP)
        {
            this._connectivityFailureHistory.shift();
        }
            
        common.Debug.traceMethodExited("ProblemReporterBase.processFailoverNotification()");
    },

	/**
     * Listener for notification that polling has resumed after a previous failover. 
     * Records the information to be included in the next problem report.
	 * 
	 * @param notification IResumedPollingNotification
	 */
    processResumedPollingNotification : function(notification)
    {
        common.Debug.traceMethodEntered("ProblemReporterBase.processResumedPollingNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IResumedPollingNotification);
        common.Debug.traceWarning("ProblemReporterBase received resumed polling notification.");
        var timestamp = new Date();
        var connectivityFailureInfo = {
                                        "activity": "resumedPolling",
                                        "timestamp": timestamp
                                      };
        this._connectivityFailureHistory.push(connectivityFailureInfo);

        while (this._connectivityFailureHistory.length > this.MAX_RECORDS_TO_KEEP)
        {
            this._connectivityFailureHistory.shift();
        }

        this.sendProblemReport("Resumed polling", "Sending accumulated problem report info that may not have been transmitted before.");
            
        common.Debug.traceMethodExited("ProblemReporterBase.processResumedPollingNotification()");
    },

    /**
     * Gets the regular expression which problem reports must match if they are to be sent. 
     * If this is null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur. 
     * If this is non-null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur provided 
     * that the problem report that is generated matches this regular expression. 
     * If the "sendProblemReport" capability is disabled, then there is no point in calling get_problemReportRegEx() as its return 
     * value should be ignored. 
     */
    get_regEx : function()
    {
        return this._regEx;
    },

    /**
     * Specifies a regular expression which problem reports must match if they are to be sent. 
     * If this is not set, or set to null, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur. 
     * If this is set, AND if the "sendProblemReport" capability is enabled, problem reports will be sent if problems occur provided 
     * that the problem report that is generated matches this regular expression. 
     * If the "sendProblemReport" capability is disabled, then there is likely not much point in calling this method.  The value passed will 
     * be stored, but problem reports will not be sent. 
     */
    set_regEx : function(regEx)
    {
        this._regEx = regEx;
    },

    // private methods

    _buildProblemReport : function(reason, attemptedWork)
    {
        var problemReportObject =
        {
            "version": 1,
            "attemptedWork": attemptedWork,
            "userAgent": navigator.userAgent,
            "failedRequestHistory": this._failedRequestHistory,
            "timedOutRequestHistory": this._timedOutRequestHistory,
            "connectivityFailureHistory": this._connectivityFailureHistory,
            "exceptions": reason
        };

        if (ININ_Web_Common_Fileversion)
        {
            problemReportObject.bootloaderFileVersion = ININ_Web_Common_Fileversion;
        }

        if (ININ_Web_Chat_WebServices_Fileversion)
        {
            problemReportObject.webServicesFileVersion = ININ_Web_Chat_WebServices_Fileversion;
        }

        // This will not be defined if the customer created a custom UI
        if (ININ_Web_Chat_UI_Fileversion)
        {
            problemReportObject.uiFileVersion = ININ_Web_Chat_UI_Fileversion;
        }

        return problemReportObject;
    }
});

/**
 * This class is the main brains of callbacks, but is abstract - use derived class instead
 */
webservices.CallbackManagerBase = Class.create(webservices.InteractionManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("CallbackManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        this._failoverHandler = failoverHandler;
        this._partyManager = null;
        this._callbackID = null;
        
        this.addImplementedInterface(webservices.Interfaces.ICallbackStatusNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.ICallbackStatusNotification);

        common.Debug.traceMethodExited("CallbackManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.destroy()");

        common.Debug.traceMethodExited("CallbackManagerBase.destroy()");
    },

    // public methods

    /**
     * Sets the party manager, which can be used to get agent's photos.
     * 
     * @param partyManager An instance of a subclass of webservices.PartyManagerBase
     */
    set_partyManager : function(partyManager)
    {
        this._partyManager = partyManager;
    },

	/**
     * Create a callback interaction.  This method does not return anything, but will cause 
     * either a CallbackCreationNotification or a CallbackCreationFailureNotification to be 
     * sent to observers of these Notification types. 
	 * 
     * @param parameters An instance of CallbackParameters
	 */
    createCallback : function(parameters)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.createCallback()");

        var anonymousOk = webservices.CapabilityRepository.isCallbackAnonymousAuthenticationCapabilityEnabled();
        if (!anonymousOk && !(parameters.get_participantName() && parameters.get_participantCredentials())) {
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackCreationFailureNotification(new webservices.Error("error.websvc.unsupportedOperation")));
        } else
        {
            // configure the failover handler
            this._failoverHandler.set_callbackManager(this);

            // create the create callback capability and create the callback
            var ajax = this.createAjaxManager(this._capabilityRepository.get_createCallbackCapability());
            var _self = this;
            ajax.registerSuccessListener(function(response)
            {
                common.Interface.ensureImplements(response, webservices.Interfaces.ICallbackResponse);
                common.Debug.traceNote("CallbackManagerBase.createCallback() succeeded: " + response);
                _self._callbackID = response.get_callbackId();
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackCreationNotification(response.get_participantId(), response.get_callbackId(), response.get_userIdentityId(), parameters.get_participantName(), parameters.get_telephone(), parameters.get_subject(), parameters.get_creationDateTime()));
                _self.onAJAXSuccess(response);
            });
            ajax.registerFailureListener(function(response)
            {
                common.Debug.traceError("CallbackManagerBase.createCallback() failed: " + response);
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackCreationFailureNotification(response.get_statusReason()));
                _self.onAJAXFailure(response);
            });

            parameters.set_creationDateTime(new Date());
            ajax.sendRequest(this.serializeCreateCallbackPostData(parameters));
        }

        common.Debug.traceMethodExited("CallbackManagerBase.createCallback()");
    },

    /**
     * Query the status of a Callback 
     *  
     * @param participantId Identifies the web visitor (the person whose browser is running this code) in the context of a callback.  In this case, the callback is the one whose status the web visitor wishes to query. 
     */
    queryStatus : function(participantId)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.queryStatus()");

        if (null == participantId)
        {
            throw common.ExceptionFactory.createException("CallbackManagerBase.queryStatus(): participantId must be specified");
        }

        // create the callback status capability
        var ajax = this.createAjaxManager(this._capabilityRepository.get_callbackStatusCapability());
        var _self = this;

        ajax.registerSuccessListener(function(response)
        {
            common.Interface.ensureImplements(response, webservices.Interfaces.ICallbackResponse);
            common.Debug.traceNote("CallbackManagerBase.queryStatus() succeeded: " + response);
            webservices.NotificationRegistry.process(
                webservices.NotificationFactory.createCallbackStatusNotification(
                    participantId,
                    response.get_queueWaitTime(),
                    response.get_assignedAgentName(),
                    response.get_assignedAgentParticipantId(),
                    response.get_interactionState(),
                    response.get_estimatedCallbackTime(), 
                    response.get_queuePosition(),
                    response.get_queueName(),
                    response.get_longestWaitTime(),
                    response.get_interactionsWaitingCount(),
                    response.get_loggedInAgentsCount(),
                    response.get_availableAgentsCount(),
                    response.get_statusIndicator()));
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("CallbackManagerBase.queryStatus() failed: " + response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackStatusFailureNotification(response.get_statusReason()));
            _self.onAJAXFailure(response);
        });

        ajax.sendRequest(null, participantId, true);
        common.Debug.traceMethodExited("CallbackManagerBase.queryStatus()");
    },

    /**
     * Disconnect a Callback 
     *  
     * @param participantId Identifies the web visitor (the person whose browser is running this code) in the context of a callback.  In this case, the callback is the one that the web visitor wishes to disconnect. 
     */
    disconnect : function(participantId)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.disconnect()");
        if (null == participantId)
        {
            throw common.ExceptionFactory.createException("CallbackManagerBase.disconnect(): participantId must be specified");
        }

        // create the disconnect callback capability
        var ajax = this.createAjaxManager(this._capabilityRepository.get_disconnectCallbackCapability());
        var _self = this;

        ajax.registerSuccessListener(function(response)
        {
            common.Interface.ensureImplements(response, webservices.Interfaces.ICallbackResponse);
            common.Debug.traceNote("CallbackManagerBase.disconnect() succeeded: " + response);
            _self._callbackID = null;
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackDisconnectNotification(participantId));
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("CallbackManagerBase.disconnect() failed: " + response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackDisconnectFailureNotification(response.get_statusReason()));
            _self.onAJAXFailure(response);
        });

        ajax.sendRequest(null, participantId, true);
        common.Debug.traceMethodExited("CallbackManagerBase.disconnect()");
    },

	/**
	 * Reconnect to a callback for which connectivity was lost.
	 * 
     * @param callbackFunction This function will be called when a response is received from the IC server. 
     * This function should take 2 arguments. The first argument will be a boolean indicating whether the 
     * reconnection attempt was successful.  The second will be the CallbackReconnectResponse representing 
     * the response that was received from IC.
	 */
    reconnect : function(callbackFunction)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.reconnect()");
        var ajax = this.createAjaxManager(this._capabilityRepository.get_reconnectCallbackCapability());
        var _self = this;
		
		if(this._isReconnecting)
		{
			return;
		}
		
		this._isReconnecting = true;
		
        ajax.registerSuccessListener(function(response)
        {
		
            common.Debug.traceNote("CallbackManagerBase.reconnect() succeeded: " + response);

            webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackReconnectNotification(response.get_participantId()));

            callbackFunction(true, response);
			_self._isReconnecting = false;
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("CallbackManagerBase.reconnect() failed: " + response);
            callbackFunction(false, response);
			_self._isReconnecting = false;
        });

        ajax.sendRequest(this.serializeReconnectPostData(this._callbackID), false);
        common.Debug.traceMethodExited("CallbackManagerBase.reconnect()");
    },

    /*
     * In the future, we could receive callback creation and reconnect notifications, and add the local participant
     * to the ParticipantRepository.  But currently there is no benefit in doing so. 
     * The notifications would have to be modified to provide the local participant's name.
     * webservices.NotificationRegistry.process(webservices.NotificationFactory.createNewParticipantNotification(notification.get_participantId(), notification.get_participantName(), webservices.InteractionTypes.CALLBACK, null, false));
     */

    /**
     * Respond to notification that a Callback's status has been received 
     * This just checks to see if the agent's photo is known, and if not, requests it. 
     * @param notification CallbackStatusNotification
     */
    processCallbackStatusNotification : function(notification)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase.processCallbackStatusNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.ICallbackStatusNotification);

        var agentParticipantId = notification.get_assignedAgentParticipantId();
        if (null != agentParticipantId)
        {
            // If not there already, put the agent into the participant repository
            var agent = webservices.ParticipantRepository.get_participant(agentParticipantId);
            if (null == agent)
            { 
                webservices.NotificationRegistry.process(webservices.NotificationFactory.createNewParticipantNotification(agentParticipantId, notification.get_assignedAgentName(), webservices.InteractionTypes.CALLBACK, null, false));
                var agent = webservices.ParticipantRepository.get_participant(agentParticipantId);
            }

            // If agent's photo is not known, request it
            if ((null == agent.get_photo()) && this._partyManager && webservices.CapabilityRepository.isPartyInfoCapabilityEnabled())
            {
                var webVisitorParticipantId = notification.get_participantId();
                this._partyManager.getPartyInfo(webVisitorParticipantId, agentParticipantId);
            }
        }
        common.Debug.traceMethodExited("CallbackManagerBase.processCallbackStatusNotification()");
    },

	// private methods

    _handleInvalidSession : function(response)
    {
        common.Debug.traceMethodEntered("CallbackManagerBase._handleInvalidSession()");
        webservices.NotificationRegistry.process(webservices.NotificationFactory.createCallbackDisconnectNotification(participantId));
        common.Debug.traceMethodExited("CallbackManagerBase._handleInvalidSession()");
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * This class is the main brains of tracker registration, but is abstract - use derived class instead
 */
webservices.RegistrationManagerBase = Class.create(webservices.InteractionManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("RegistrationManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("RegistrationManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);
        
        common.Debug.traceMethodExited("RegistrationManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("RegistrationManagerBase.destroy()");

        common.Debug.traceMethodExited("RegistrationManagerBase.destroy()");
    },

    // public methods

	/**
	 * Register with tracker
	 * 
	 * @param username The username of the person attempting to register
	 * @param password The password of the person attempting to register
	 * @param firstName The first name of the person attempting to register
	 * @param middleName The middle name of the person attempting to register
	 * @param lastName The last name of the person attempting to register
	 * @param homeStreetAddress The street address of the person attempting to register
	 * @param homeCity The city of the person attempting to register
	 * @param homeState The state/province/territory of the person attempting to register
	 * @param homePostalCode The postal code of the person attempting to register
	 * @param homeCountry The country of the person attempting to register
	 * @param homeEmail The email address of the person attempting to register
	 * @param homePhone The home telephone number of the person attempting to register
	 * @param homePhone2 The secondary home telephone number of the person attempting to register
	 * @param homeFax The home fax number of the person attempting to register
	 * @param homePager The home pager number of the person attempting to register
	 * @param homeMobile The personal mobile telephone number of the person attempting to register
	 * @param homeUrl The personal URL of the person attempting to register
	 * @param department The department (of their company) of the person attempting to register
	 * @param company The company for which the person attempting to register works
	 * @param jobTitle The job title of the person attempting to register
	 * @param assistantName The name of the assistant of the person attempting to register
	 * @param assistantPhone The telephone number of the assistant of the person attempting to register
	 * @param businessStreetAddress The street address of the company 
	 * @param businessCity The city in which the company is located
	 * @param businessState The state/province/territory in which the company is located
	 * @param businessPostalCode The postal code of the company
	 * @param businessCountry The country in which the company is located
	 * @param businessEmail The business email address of the person attempting to register
	 * @param businessPhone The business telephone number of the person attempting to register
	 * @param businessPhone2 The secondary business telephone number of the person attempting to register
	 * @param businessFax The business fax number of the person attempting to register
	 * @param businessPager The business pager number of the person attempting to register
	 * @param businessMobile The business mobile telephone number of the person attempting to register
	 * @param businessUrl The business URL of the person attempting to register
	 * @param remarks Freeform string
	 * @param callback This function will be called when a response is received from the IC server.  This function should take 3 arguments. The first argument will be a boolean indicating whether the registration attempt was successful.  The second will be the failure reason (not applicable if the registration attempt succeeded).  The third will be the ID of the current participant (i.e. the person in whose web browser this code is running) and is not applicable if the registration attempt failed.
	 */
    register : function(username, password,
                        firstName, middleName, lastName,
                        homeStreetAddress, homeCity, homeState, homePostalCode, homeCountry,
                        homeEmail, homePhone, homePhone2, homeFax, homePager, homeMobile, homeUrl,
                        department, company, jobTitle,
                        assistantName, assistantPhone,
                        businessStreetAddress, businessCity, businessState, businessPostalCode, businessCountry,
                        businessEmail, businessPhone, businessPhone2, businessFax, businessPager, businessMobile, businessUrl,
                        remarks, callback)
    {
        common.Debug.traceMethodEntered("RegistrationManagerBase.register()");

        // create the register capability and then register
        var ajax = this.createAjaxManager(this._capabilityRepository.get_trackerRegistrationCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Interface.ensureImplements(response, webservices.Interfaces.IRegistrationResponse);
            common.Debug.traceNote("RegistrationManagerBase.register() succeeded: " + response);
            callback(response.isSuccessful(), response.get_statusReason(), response.currentParticipantID);
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("RegistrationManagerBase.register() failed: " + response);
            callback(false, response.get_statusReason());
            _self.onAJAXFailure(response);
        });

        ajax.sendRequest(this.serializeRegistrationPostData(username, password,
                                                            firstName, middleName, lastName,
                                                            homeStreetAddress, homeCity, homeState, homePostalCode, homeCountry,
                                                            homeEmail, homePhone, homePhone2, homeFax, homePager, homeMobile, homeUrl,
                                                            department, company, jobTitle,
                                                            assistantName, assistantPhone,
                                                            businessStreetAddress, businessCity, businessState, businessPostalCode, businessCountry,
                                                            businessEmail, businessPhone, businessPhone2, businessFax, businessPager, businessMobile, businessUrl,
                                                            remarks));

        common.Debug.traceMethodExited("RegistrationManagerBase.register()");
    }
});

/**
 * This class is the main brains pertaining to information about parties in interactions, but is abstract - use derived class instead
 */
webservices.PartyManagerBase = Class.create(webservices.InteractionManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An object to build Response objects (i.e. objects which implement ResponseBase or its subclasses) from the IC server's replies to AJAX requests.
	 * @param capabilityRepository An object to keep track of which Capabilities are enabled or disabled, and provide getter methods for the various Capabilities. 
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize : function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("PartyManagerBase.initialize()");

        var numArgs = 4;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("PartyManagerBase constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

//        common.ParameterValidation.validate(arguments, [ {}, {"required": true} ]);

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        this.addImplementedInterface(webservices.Interfaces.IPartyInfoNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IPartyInfoNotification);

        common.Debug.traceMethodExited("PartyManagerBase.initialize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.Debug.traceMethodEntered("PartyManagerBase.destroy()");

        common.Debug.traceMethodExited("PartyManagerBase.destroy()");
    },

    // public methods

	/**
     * Queries a party's info (name, photo).  This method does not return anything, but will cause 
     * either a PartyInfoNotification or a PartyInfoFailureNotification to be 
     * sent to observers of these Notification types. 
	 * 
     * @param localParticipantId The participantId of the agent whose info is being queried. 
     * @param remoteParticipantId The participantId of the agent whose info is being queried. 
	 */
    getPartyInfo : function(localParticipantId, remoteParticipantId)
    {
        common.Debug.traceMethodEntered("PartyManagerBase.getPartyInfo()");

        if (!webservices.CapabilityRepository.isPartyInfoCapabilityEnabled())
        {
            throw common.ExceptionFactory.createException("PartyManagerBase.getPartyInfo(): The party info capability is not enabled!");
        }

        // create the get party info capability
        var ajax = this.createAjaxManager(this._capabilityRepository.get_partyInfoCapability());
        var _self = this;
        ajax.registerSuccessListener(function(response)
        {
            common.Interface.ensureImplements(response, webservices.Interfaces.PartyResponse);
            common.Debug.traceNote("PartyManagerBase.getPartyInfo() succeeded: " + response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createPartyInfoNotification(localParticipantId, remoteParticipantId, response.get_name(), response.get_photo()));
            _self.onAJAXSuccess(response);
        });
        ajax.registerFailureListener(function(response)
        {
            common.Debug.traceError("PartyManagerBase.getPartyInfo() failed: " + response);
            webservices.NotificationRegistry.process(webservices.NotificationFactory.createPartyInfoFailureNotification(response.get_statusReason()));
            _self.onAJAXFailure(response);
        });

        ajax.sendRequest(this.serializeGetPartyInfoPostData(remoteParticipantId), localParticipantId, true);

        common.Debug.traceMethodExited("PartyManagerBase.getPartyInfo()");
    },

    /**
     * Respond to receipt of information (name, photo location) about a party involved in an interaction 
     * by setting the photo property of the appropriate participant. 
     * 
     * @param notification 
     */
    processPartyInfoNotification : function(notification)
    {
        common.Debug.traceMethodEntered("PartyManagerBase.processPartyInfoNotification()");
        common.Interface.ensureImplements(notification, webservices.Interfaces.IPartyInfoNotification);

        if (notification.get_photo())
        {
            common.Debug.traceNote("PartyManagerBase.processPartyInfoNotification(): agent photo is: " +
                                            notification.get_photo() + " [in " + webservices.Servers.CurrentUriFragment + "]");
            var agentParticipantId = notification.get_remoteParticipantId();
            var agent = webservices.ParticipantRepository.get_participant(agentParticipantId);
            if (!agent)
            {
                throw common.ExceptionFactory.createException("Received party info for unrecognized agent!");
            }
            agent.set_photo(notification.get_photo());
        }
        common.Debug.traceMethodExited("PartyManagerBase.processPartyInfoNotification()");
    }
});

/**
 * Chat Response Base class
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received from the IC server that pertain to chats. 
 */
webservices.ChatResponse = Class.create(webservices.ResponseBase,
{
    EXCEPTION_INVALID_INTERACTION_STATE: "Invalid interaction state",

	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("ChatResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.IChatResponse, webservices);

        this._events = [];
        this._pollWaitSuggestion = null;

        common.Debug.traceMethodExited("ChatResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        if(this._events)
        {
            while(this._events.length > 0)
            {
                var event = this._events.pop();
                event.destroy();
            }
            delete this._events;
            this._events = null;
        }
        this._pollWaitSuggestion = null;

        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // methods

	/**
	 * Gets the number of milliseconds that the IC server suggests waiting before polling again 
	 *  
	 * @return An integer representing how many milliseconds the IC server suggests waiting before polling again 
	 */
    get_pollWaitSuggestion : function()
    {
        return this._pollWaitSuggestion;
    },

	/**
	 * Sets the number of milliseconds that the IC server suggests waiting before polling again 
	 *  
	 * @param pollWaitSuggestion An integer representing how many milliseconds the IC server suggests waiting before polling again 
	 */
    set_pollWaitSuggestion : function(pollWaitSuggestion)
    {
        this._pollWaitSuggestion = pollWaitSuggestion;
    },

	/**
	 * Gets the list of events (e.g. participant joined, etc.) contained in this response
	 *  
	 * @return A list of events.  Each shall be an instance of one of the webservices.*Event classes.
	 */
    get_events : function()
    {
        return this._events;
    },

	/**
	 * Adds an event to the list of events (e.g. participant joined, etc.) contained in this response
	 *  
	 * @param event An instance of one of the webservices.*Event classes.
	 */
    addEvent : function(event)
    {
        this._events.push(event);
    },

	/**
     * Gets the config version that the IC server instructed this client to fetch, if any. 
	 *  
     * @return Version number of server configuration
	 */
    get_serverConfigVersion : function()
    {
        return this._cfgVer;
    },

	/**
     * Sets the config version that the IC server instructed this client to fetch. 
	 *  
	 * @param cfgVer Version number of server configuration
	 */
    set_serverConfigVersion : function(cfgVer)
    {
        this._cfgVer = cfgVer;
    }
});

/**
 * Callback Response Base class 
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received 
 * from the IC server that pertain to callbacks. 
 */
webservices.CallbackResponseBase = Class.create(webservices.ResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("CallbackResponseBase.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackResponse, webservices);

        common.Debug.traceMethodExited("CallbackResponseBase.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ResponseBase.prototype.destroy.call(this);
    }
});

/**
 * Callback Creation Response class 
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received 
 * from the IC server that pertain to the creation of callbacks. 
 */
webservices.CallbackCreateResponse = Class.create(webservices.CallbackResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("CallbackCreateResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackCreateResponse, webservices);

        this._participantId = null;
        this._callbackId = null;
        this._userIdentityId = null;

        common.Debug.traceMethodExited("CallbackCreateResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._participantId = null;
        this._callbackId = null;
        this._userIdentityId = null;

        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // methods

	/**
     * Gets the ID of the participant to whom this response pertains. 
     * This ID's lifespan is that of the web session. 
	 *  
	 * @return ID of the participant 
	 */
    get_participantId : function()
    {
        return this._participantId;
    },

	/**
	 * Sets the ID of the participant to whom this response pertains
	 * 
	 * @param participantId ID of the participant
	 */
    set_participantId : function(participantId)
    {
        this._participantId = participantId;
    },

	/**
     * Gets the ID of the callback, so it may be reconnected 
     * (i.e. brought into a then-current web session) later. 
     * This ID's lifespan is that of the Callback. 
	 *  
     * @return ID of the callback
	 */
    get_callbackId : function()
    {
        return this._callbackId;
    },

	/**
     * Sets the ID of the callback 
	 * 
	 * @param callbackId ID of the callback
	 */
    set_callbackId : function(callbackId)
    {
        this._callbackId = callbackId;
    },

	/**
     * Gets the ID of the user who created this callback
     * This ID's lifespan is that of the Callback. 
	 *  
	 * @return ID of the user 
	 */
    get_userIdentityId : function()
    {
        return this._userIdentityId;
    },

	/**
     * Sets the ID of the user who created this callback
	 * 
	 * @param userIdentityId ID of the user who created this callback
	 */
    set_userIdentityId : function(userIdentityId)
    {
        this._userIdentityId = userIdentityId;
    }
});

/**
 * Callback Status Response class 
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received 
 * from the IC server that pertain to querying the status of callbacks. 
 */
webservices.CallbackStatusResponse = Class.create(webservices.CallbackResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("CallbackStatusResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackStatusResponse, webservices);

        this._queueWaitTime = null;
        this._assignedAgentName = null;
        this._assignedAgentParticipantId = null;
        this._interactionState = null;
        this._estimatedCallbackTime = null;
        this._queuePosition = null;
        this._queueName = null;
        this._longestWaitTime = null;
        this._interactionsWaitingCount = null;
        this._loggedInAgentsCount = null;
        this._availableAgentsCount = null;
        this._statusIndicator = null;

        common.Debug.traceMethodExited("CallbackStatusResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._queueWaitTime = null;
        this._assignedAgentName = null;
        this._assignedAgentParticipantId = null;
        this._interactionState = null;
        this._estimatedCallbackTime = null;
        this._queuePosition = null;
        this._queueName = null;
        this._longestWaitTime = null;
        this._interactionsWaitingCount = null;
        this._loggedInAgentsCount = null;
        this._availableAgentsCount = null;
        this._statusIndicator = null;

        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // methods

	/**
     * Gets the queue's wait time
	 *  
     * @return number of seconds
	 */
    get_queueWaitTime : function()
    {
        return this._queueWaitTime;
    },

	/**
     * Sets the queue's wait time
	 * 
     * @param queueWaitTime number of seconds
	 */
    set_queueWaitTime : function(queueWaitTime)
    {
        this._queueWaitTime = queueWaitTime;
    },

	/**
     * Gets the assigned agent's name
	 *  
     * @return Agent's name
	 */
    get_assignedAgentName : function()
    {
        return this._assignedAgentName;
    },

	/**
     * Sets the assigned agent's name
	 * 
     * @param assignedAgentName Agent's name
	 */
    set_assignedAgentName : function(assignedAgentName)
    {
        this._assignedAgentName = assignedAgentName;
    },

	/**
     * Gets the assigned agent's participant ID
	 *  
     * @return ID identifying the agent
	 */
    get_assignedAgentParticipantId : function()
    {
        return this._assignedAgentParticipantId;
    },

	/**
     * Sets the assigned agent
	 * 
     * @param assignedAgentParticipantId ID identifying the agent
	 */
    set_assignedAgentParticipantId : function(assignedAgentParticipantId)
    {
        this._assignedAgentParticipantId = assignedAgentParticipantId;
    },

	/**
     * Gets the interaction state
	 *  
     * @return interaction state
	 */
    get_interactionState : function()
    {
        return this._interactionState;
    },

	/**
     * Sets the interaction state
	 * 
     * @param interactionState The state of the interaction 
	 */
    set_interactionState : function(interactionState)
    {
        this._interactionState = interactionState;
    },

	/**
     * Gets the estimated callback time, expressed in "seconds after now"
	 *  
     * @return number of seconds before it is estimated that the callback will be made
	 */
    get_estimatedCallbackTime : function()
    {
        return this._estimatedCallbackTime;
    },

	/**
     * Sets the estimated callback time, expressed in "seconds after now"
	 * 
     * @param estimatedCallbackTime number of seconds before it is estimated that the callback will be made
	 */
    set_estimatedCallbackTime : function(estimatedCallbackTime)
    {
        this._estimatedCallbackTime = estimatedCallbackTime;
    },

	/**
     * Gets the callback's position in the queue
	 *  
     * @return integer indicating the callback's position in the queue
	 */
    get_queuePosition : function()
    {
        return this._queuePosition;
    },

	/**
     * Sets the callback's position in the queue
	 * 
     * @param queuePosition integer indicating the callback's position in the queue
	 */
    set_queuePosition : function(queuePosition)
    {
        this._queuePosition = queuePosition;
    },

	/**
     * Gets the name of the queue
	 *  
     * @return the name of the queue
	 */
    get_queueName : function()
    {
        return this._queueName;
    },

	/**
     * Sets the name of the queue
	 * 
     * @param queueName the name of the queue
	 */
    set_queueName : function(queueName)
    {
        this._queueName = queueName;
    },

	/**
     * Gets TODO write this comment block!
	 *  
     * @return 
	 */
    get_longestWaitTime : function()
    {
        return this._longestWaitTime;
    },

	/**
     * Sets TODO write this comment block!
	 * 
     * @param longestWaitTime 
	 */
    set_longestWaitTime : function(longestWaitTime)
    {
        this._longestWaitTime = longestWaitTime;
    },

	/**
     * Gets the number of calls waiting
	 *  
     * @return the number of calls waiting
	 */
    get_interactionsWaitingCount : function()
    {
        return this._interactionsWaitingCount;
    },

	/**
     * Sets the number of calls waiting
	 * 
     * @param interactionsWaitingCount The number of calls waiting
	 */
    set_interactionsWaitingCount : function(interactionsWaitingCount)
    {
        this._interactionsWaitingCount = interactionsWaitingCount;
    },

	/**
     * Gets the number of logged in agents who meet this callback's routing criteria
	 *  
     * @return the number of logged in agents who meet this callback's routing critieria
	 */
    get_loggedInAgentsCount : function()
    {
        return this._loggedInAgentsCount;
    },

	/**
     * Sets the number of logged in agents who meet this callback's routing critieria
	 * 
     * @param loggedInAgentsCount the number of logged in agents who meet this callback's routing critieria
	 */
    set_loggedInAgentsCount : function(loggedInAgentsCount)
    {
        this._loggedInAgentsCount = loggedInAgentsCount;
    },

	/**
     * Gets the number of available agents who meet this callback's routing criteria
	 *  
     * @return the number of available agents who meet this callback's routing criteria
	 */
    get_availableAgentsCount : function()
    {
        return this._availableAgentsCount;
    },

	/**
     * Sets the number of available agents who meet this callback's routing criteria
	 * 
     * @param availableAgentsCount the number of available agents who meet this callback's routing criteria
	 */
    set_availableAgentsCount : function(availableAgentsCount)
    {
        this._availableAgentsCount = availableAgentsCount;
    },

    /**
     * Returns a key to indicate the status of the callback
     *  
     * @return statusIndicator string 
     */
    get_statusIndicator : function()
    {
        return this._statusIndicator;
    },

    /**
     * Sets a key to indicate the status of the callback
     *  
     * @param statusIndicator string 
     */
    set_statusIndicator : function(statusIndicator)
    {
        this._statusIndicator = statusIndicator;
    }
});

/**
 * Callback Reconnection Response class 
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received 
 * from the IC server that pertain to the reconnection of callbacks. 
 */
webservices.CallbackReconnectResponse = Class.create(webservices.CallbackResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("CallbackReconnectResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.ICallbackReconnectResponse, webservices);

        this._participantId = null;

        common.Debug.traceMethodExited("CallbackReconnectResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        this._participantId = null;

        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // methods

	/**
	 * Gets the ID of the participant to whom this response pertains 
	 *  
	 * @return ID of the participant 
	 */
    get_participantId : function()
    {
        return this._participantId;
    },

	/**
	 * Sets the ID of the participant to whom this response pertains
	 * 
	 * @param participantId ID of the participant
	 */
    set_participantId : function(participantId)
    {
        this._participantId = participantId;
    }
});

/**
 * PartyInfoResponse class 
 *  
 * When an AJAX request is made to the IC server to get party info (i.e. the name and photo of a 
 * party in a chat or a callback), PartyInfoResponseBuilder translates the IC server's 
 * JSON/XML reply into a PartyInfoResponse. 
 */
webservices.PartyInfoResponse = Class.create(webservices.ResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("PartyInfoResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.IPartyInfoResponse, webservices);

        common.Debug.traceMethodExited("PartyInfoResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ResponseBase.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Gets the name of the participant to whom this response pertains 
	 *  
	 * @return name of the participant 
	 */
    get_name : function()
    {
        return this._name;
    },

	/**
	 * Sets the name of the participant to whom this response pertains
	 * 
	 * @param name The name of the participant
	 */
    set_name : function(name)
    {
        this._name = name;
    },

	/**
	 * Gets the location of the photo of the participant to whom this response pertains 
	 *  
	 * @return Location of the photo of the participant 
	 */
    get_photo : function()
    {
        return this._photo;
    },

	/**
	 * Sets the location of the photo of the participant to whom this response pertains 
	 *  
	 * @param photo Location of the photo of the participant 
	 */
    set_photo : function(photo)
    {
        this._photo = photo;
    }
});

/**
 * Registration Response Base class
 * AjaxManager will call ResponseBuilder to create these when HTTP JSON/XML relies are received 
 * from the IC server that pertain to registration. 
 */
webservices.RegistrationResponse = Class.create(webservices.ResponseBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("RegistrationResponse.initalize()");

        $super();

        this.addImplementedInterface(webservices.Interfaces.IRegistrationResponse, webservices);

        common.Debug.traceMethodExited("RegistrationResponse.initalize()");
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.ResponseBase.prototype.destroy.call(this);
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * ChatResponseBuilder class 
 * Handles translating the JSON received as the IC server's reply to an AJAX request 
 * into an webservices.ChatResponse object.
 */
webservices.Json._Internal.ChatResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
	/**
	 * Constructor 
	 *  
	 * @param eventFactory An instance of EventFactory, so that the "event" part(s) of the JSON may be translated into webservices.*Event objects.
	 */
    initialize : function($super, eventFactory)
    {
        $super();

        this._eventFactory = eventFactory;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

	/**
     * Handles translating the JSON received as the IC servers reply to an AJAX request 
     * into an webservices.ChatResponse object.
	 * 
	 * @param jsonStr JSON received from the IC server.  This should have already been vetted to ensure that is not empty, its status indicates success, etc.  In the default implementation, that is done in GenericResponseBuilder.
	 * @return webservices.ChatResponse
	 */
    buildChatResponse : function(jsonStr)
    {
        common.Debug.traceMethodEntered("Json.ChatResponseBuilder.buildChatResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (jsonStr)
        {
            response = new webservices.ChatResponse();

            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json.chat)
            {
                this._parseStatus(json.chat.status, response);

                common.Debug.traceNote("status type has been set.");
                if (response.isSuccessful())
                {
                    common.Debug.traceNote("Successful response.");

                    this._parseEvents(json.chat.events, response);

                    common.Debug.traceNote("Participant/Chat ID: " + json.chat.participantID);
					response.chatID = json.chat.chatID;
                    response.currentParticipantID = json.chat.participantID;
                    response.dateFormat = json.chat.dateFormat;
                    response.timeFormat = json.chat.timeFormat;

                    if (json.chat.cfgVer)
                    {
                        response.set_serverConfigVersion(json.chat.cfgVer);
                    }
                }
                else
                {
                    common.Debug.traceNote("Unsuccessful response");
                }

                if(json.chat.pollWaitSuggestion)
                {
                    response.set_pollWaitSuggestion(json.chat.pollWaitSuggestion);
                }
            }
        }

        common.Debug.traceMethodExited("Json.ChatResponseBuilder.buildChatResponse()");

        return response;
    },

	// private methods

    _parseEvents : function(events, response)
    {
        if (events)
        {
            common.Debug.traceNote("Creating events...");
            for (var i = 0; i < events.length; ++i)
            {
                var jsonEvent = events[i];

                common.Debug.traceNote("Creating event: " + jsonEvent.type);
                response.addEvent(this._eventFactory.createEvent(jsonEvent));
            }
            common.Debug.traceNote("Done creating events.");
        }
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * CallbackResponseBuilder class 
 * Handles translating the JSON received as the IC server's reply to an AJAX request 
 * into a webservices.CallbackResponseBase object (or subclass thereof).
 */
webservices.Json._Internal.CallbackResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
	/**
	 * Constructor 
	 */
    initialize : function($super)
    {
        $super();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

	/**
     * Handles translating the JSON received as the IC servers reply to an AJAX request 
     * into a subclass of an webservices.CallbackResponseBase object.
	 * 
	 * @param jsonStr JSON received from the IC server.  This should have already been vetted to ensure that is not empty, its status indicates success, etc.  In the default implementation, that is done in GenericResponseBuilder.
	 * @return webservices.CallbackResponseBase subclass
	 */
    buildCallbackResponse : function(jsonStr, url)
    {
        common.Debug.traceMethodEntered("Json.CallbackResponseBuilder.buildCallbackResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);
        common.Debug.traceStatus("url is: " + url);

        var response = null;

        if (!jsonStr)
        {
            common.Debug.traceError("Missing jsonStr!");
        }
        else if (!url)
        {
            common.Debug.traceError("Missing URL!");
        }
        else
        {
            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(!json.callback)
            {
                common.Debug.traceError("JSON has no 'callback' element!");
                common.Debug.breakpoint();
                return response;
            }

            if (url.include(webservices.CapabilityUrls.Callback.CREATE))
            {
                response = new webservices.CallbackCreateResponse();
            } else if (url.include(webservices.CapabilityUrls.Callback.STATUS))
            {
                response = new webservices.CallbackStatusResponse();
            } else if (url.include(webservices.CapabilityUrls.Callback.DISCONNECT))
            {
                response = new webservices.CallbackResponseBase();
            } else if (url.include(webservices.CapabilityUrls.Callback.RECONNECT))
            {
                response = new webservices.CallbackReconnectResponse();
            } else
            {
                common.Debug.traceError("Unrecognized response type!");
                common.Debug.breakpoint();
                return response;
            }

            this._parseStatus(json.callback.status, response);

            common.Debug.traceNote("status type has been set.");
            if (response.isSuccessful())
            {
                common.Debug.traceNote("Successful response.");

                if (common.Interface.doesImplement(response,webservices.Interfaces.ICallbackCreateResponse))
                {
                    common.Debug.traceNote("Participant/Callback ID: " + json.callback.participantID);
                    response.set_participantId(json.callback.participantID);
                    if (json.callback.callbackID)
                    {
                        response.set_callbackId(json.callback.callbackID);
                    }
                    if (json.callback.userIdentityID)
                    {
                        response.set_userIdentityId(json.callback.userIdentityID);
                    }
                } else if (common.Interface.doesImplement(response,webservices.Interfaces.ICallbackReconnectResponse))
                {
                    common.Debug.traceNote("Participant/Callback ID: " + json.callback.participantID);
                    response.set_participantId(json.callback.participantID);
                } else if (common.Interface.doesImplement(response,webservices.Interfaces.ICallbackStatusResponse))
                {
                    if (json.callback.assignedAgent)
                    {
                        response.set_assignedAgentName(json.callback.assignedAgent.name);
                        response.set_assignedAgentParticipantId(json.callback.assignedAgent.participantID);
                        response.set_statusIndicator("InProcess");
                    }
                    else
                    {
                        response.set_statusIndicator("Waiting");
                    }

                    if (json.callback.acdStatus)
                    {
                        response.set_queueWaitTime(json.callback.acdStatus.queueWaitTime);
                        response.set_interactionState(json.callback.acdStatus.interactionState);
                        response.set_estimatedCallbackTime(json.callback.acdStatus.estimatedCallbackTime);
                        response.set_queuePosition(json.callback.acdStatus.queuePosition);
                        response.set_queueName(json.callback.acdStatus.queueName);
                        response.set_longestWaitTime(json.callback.acdStatus.longestWaitTime);
                        response.set_interactionsWaitingCount(json.callback.acdStatus.callsWaitingCount); // TODO change
                        response.set_loggedInAgentsCount(json.callback.acdStatus.loggedInAgentsCount);
                        response.set_availableAgentsCount(json.callback.acdStatus.availableAgentsCount);
                    }
                }
                // else { nothing to do, since Disconnect response has no state. }
            }
            else
            {
                common.Debug.traceNote("Unsuccessful response");
            }
        }

        common.Debug.traceMethodExited("Json.CallbackResponseBuilder.buildCallbackResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * RegistrationResponseBuilder class 
 * Handles translating the JSON received as the IC server's reply to an AJAX request for registration
 * into an webservices.RegistrationResponse object.
 */
webservices.Json._Internal.RegistrationResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
	/**
	 * Constructor
	 */
    initialize : function($super)
    {
        $super();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

	/**
     * Handles translating the JSON received as the IC servers reply to an AJAX request 
     * into an webservices.RegistrationResponse object.
	 * 
	 * @param jsonStr JSON received from the IC server.  This should have already been vetted to ensure that is not empty, its status indicates success, etc.  In the default implementation, that is done in GenericResponseBuilder.
	 * @return webservices.RegistrationResponse
	 */
    buildRegistrationResponse : function(jsonStr)
    {
        common.Debug.traceMethodEntered("Json.RegistrationResponseBuilder.buildRegistrationResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (jsonStr)
        {
            response = new webservices.RegistrationResponse();

            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(json.registration)
            {
                if(json.registration.status)
                {
                    if(json.registration.status.type)
                    {
                        response.set_statusType(json.registration.status.type);
                    }

                    if(json.registration.status.reason)
                    {
                        var error = null;
                        try
                        {
                            error = new webservices.Error(json.registration.status.reason);
                        }
                        catch(ex)
                        {
                            common.Debug.traceError(ex.message);
                            common.Debug.traceWarning("Invalid status reason: " + json.chat.status.reason);
                        }

                        if(error)
                        {
                            response.set_statusReason(error);
                        }
                    }
                }
            }
        }

        common.Debug.traceMethodExited("Json.RegistrationResponseBuilder.buildRegistrationResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * PartyInfoResponseBuilder class 
 * Handles translating the JSON received as the IC server's reply to an AJAX request 
 * into a webservices.PartyInfoResponse object 
 */
webservices.Json._Internal.PartyInfoResponseBuilder = Class.create(webservices.Json.ResponseBuilderBase,
{
	/**
	 * Constructor 
	 */
    initialize : function($super)
    {
        $super();
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        webservices.Json.ResponseBuilderBase.prototype.destroy.call(this);
    },

	/**
     * Handles translating the JSON received as the IC servers reply to an AJAX request 
     * into a webservices.PartyInfoResponse object.
	 * 
	 * @param jsonStr JSON received from the IC server.  This should have already been vetted to ensure that is not empty, its status indicates success, etc.  In the default implementation, that is done in GenericResponseBuilder.
     * @return webservices.PartyInfoResponse
	 */
    buildPartyInfoResponse : function(jsonStr)
    {
        common.Debug.traceMethodEntered("Json.PartyInfoResponseBuilder.buildPartyInfoResponse()");
        common.Debug.traceStatus("jsonStr is: " + jsonStr);

        var response = null;

        if (!jsonStr)
        {
            common.Debug.traceError("Missing jsonStr!");
        }
        else
        {
            var json = null;
            try
            {
                json = jsonStr.evalJSON();
            }
            catch (e)
            {
                common.Debug.traceError("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
                common.Debug.alert("Caught exception calling JSON.parse or string.evalJSON:\n" + e);
            }

            if(!json.partyInfo)
            {
                common.Debug.traceError("JSON has no 'partyInfo' element!");
                common.Debug.breakpoint();
                return response;
            }

            response = new webservices.PartyInfoResponse();

            this._parseStatus(json.partyInfo.status, response);

            common.Debug.traceNote("status type has been set.");
            if (response.isSuccessful())
            {
                common.Debug.traceNote("Successful response.");

                response.set_name(json.partyInfo.name);
                response.set_photo(json.partyInfo.photo);
            }
            else
            {
                common.Debug.traceNote("Unsuccessful response");
            }
        }

        common.Debug.traceMethodExited("Json.PartyInfoResponseBuilder.buildPartyInfoResponse()");

        return response;
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * <code>webservices.Json._Internal._TypingIndicator</code> class 
 * This class extends <code>TypingIndicatorBase</code>, to provide a JSON-specific implementation of <code>serializeDataToPost()</code>, 
 * which is the method that creates the textual representation of the typing indicator to send to the IC server. 
 * 
 */
webservices.Json._Internal._TypingIndicator = Class.create(webservices.TypingIndicatorBase,
{
	/**
	 * Constructor
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("Json.TypingIndicator.initialize");
        $super();
        common.Debug.traceMethodExited("Json.TypingIndicator.initialize");
    },

    /**
     *  Create a textual representation of the typing indicator to send to the server in the AJAX request.
     *  (JSON flavor of this method)
     */
    serializeDataToPost: function()
    {
        return "{ \"typingIndicator\": " + this._typingState + "}";
    }
});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * ChatManager class 
 * Extends ChatManagerBase with JSON-specific functionality
 */
webservices.Json.ChatManager = Class.create(webservices.ChatManagerBase,
{
    // constants
    HTML_MIME_TYPE_VALUE: 'text/html',
    PLAIN_TEXT_MIME_TYPE_VALUE: 'text/plain',

	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
	 * @param typingIndicator An instance of webservices.Json.TypingIndicator
     * @param failoverHandler An instance of webservices.Json.FailoverHandler 
     * @param acceptHtml If true, this indicates that the client is willing to receive messages from WebProcessorBridge that contain HTML.  Otherwise, only plain text messages are desired.
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, typingIndicator, failoverHandler, acceptHtml)
    {
        common.Debug.traceMethodEntered("Json.ChatManager.initialize()");

        // fields will overwrite or append to the corresponding fields in the chat state.
        $super(genericResponseBuilder, capabilityRepository, typingIndicator, failoverHandler);

        this._mimeType = acceptHtml ? this.HTML_MIME_TYPE_VALUE
                                    : this.PLAIN_TEXT_MIME_TYPE_VALUE;

        common.Debug.traceMethodExited("Json.ChatManager.initialize()");
    },

    // public methods

	/**
	 * Attempt to log in the specified participant
	 *
     * @param parameters An instance of ChatParameters
	 */
    login: function(parameters)
    {
        common.Debug.traceMethodEntered("Json.ChatManager.login()");

        // The idea here is that "chat state" conceptually contains the same data as a response may,
        // so we can just use a response object to represent it.  Each time a response comes in, its
        // fields will overwrite or append to the corresponding fields in the chat state.
        try
        {
            common.Debug.traceNote("Creating an empty WebSvcsJSONCommonRequest, to hold webservices.Json.ChatManager's state");
        }
        catch (e)
        {
            common.Debug.traceError("Caught unhandled exception:\n" + e);
            common.Debug.alert("Caught unhandled exception:\n" + e);
        }

        webservices.ChatManagerBase.prototype.login.call(this, parameters);

        common.Debug.traceMethodExited("Json.ChatManager.login()");
    },

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.ChatManager.createAjaxManager()");
        
        if(!capability)
        {
            common.Debug.traceError("null capability");
            common.Debug.breakpoint();
            webservices.ProblemReporter.sendProblemReport("null capability", "ChatManager.createAjaxManager()");
            return;
        }
        
        common.Debug.traceNote("capability=" + capability.toString());
        
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.ChatManager.createAjaxManager()");
        return mgr;
    },

	/**
	 * Takes data necessary for a login, and puts it into the appropriate JSON format for sending to the IC server.
	 * 
     * @param parameters An instance of ChatParameters
	 * @return String in JSON format, appropriate for sending to IC server 
	 */
    serializeLoginPostData : function(parameters)
    {
        common.Debug.traceMethodEntered("Json.ChatManager.serializeLoginPostData()");
        
        var json = {};

        json.supportedContentTypes = this._mimeType;
        
        json.participant = {};
        json.participant.name = parameters.get_participantName();
        json.participant.credentials = parameters.get_participantCredentials();

        json.target = parameters.get_target();
        json.targetType = parameters.get_targetType();

		if (parameters.get_customInfo())
	    {
			json.customInfo = parameters.get_customInfo();
		}

        if (localization.LanguageCode)
        {
            // The language whose resource file got loaded.
            json.language = localization.LanguageCode;
        }
        else
        {
            common.Debug.traceWarning("Starting a chat, but no language has been specified.");
        }

        json.clientToken = "deprecated";

        if (parameters.attributes) {
            json.attributes = {};
            for (var attr in parameters.attributes) {
                json.attributes[attr] = parameters.attributes[attr];
            }
        }
        console.debug(json);
        common.Debug.traceMethodExited("Json.ChatManager.serializeLoginPostData()");
        return Object.toJSON(json);
    },
	
	serializeReconnectPostData : function(chatId)
	{
		common.Debug.traceMethodEntered("Json.ChatManager.serializeReconnectPostData()");
		
		var json = {};

        json.chatID = chatId;
		
		common.Debug.traceMethodExited("Json.ChatManager.serializeReconnectPostData()");
		return Object.toJSON(json);
	},

    /** 
     * Convert Javascript problem report to JSON 
     * @param problemReport An object containing arbitrary data about a problem encountered by the client
     * @return That object, represented as a JSON string 
     */
    serializeProblemReport : function(problemReport)
    {
        return Object.toJSON(problemReport);
    },

	/**
	 * Puts a message that the web user typed during a chat into the appropriate JSON format for sending to the IC server.
	 * 
	 * @param str The message that the web user typed
	 * @param isContentHtml True if the message is in HTML format, false if it is in plain text format.
	 * @return String in JSON format, appropriate for sending to IC server 
	 */
    serializeMessageToSend : function(str, isContentHtml)
    {
        var contentType = (isContentHtml ? this.HTML_MIME_TYPE_VALUE : this.PLAIN_TEXT_MIME_TYPE_VALUE);
        return Object.toJSON( { "message": str, "contentType": contentType } );
    }
});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * CallbackManager class 
 * Extends CallbackManagerBase with JSON-specific functionality
 */
webservices.Json.CallbackManager = Class.create(webservices.CallbackManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
     * @param failoverHandler An instance of webservices.Json.FailoverHandler 
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("Json.CallbackManager.initialize()");

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        common.Debug.traceMethodExited("Json.CallbackManager.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.CallbackManager.createAjaxManager()");
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.CallbackManager.createAjaxManager()");
        return mgr;
    },

	/**
	 * Takes data necessary to create a callback, and puts it into the appropriate JSON format for sending to the IC server.
	 * 
     * @param parameters An instance of CallbackParameters
	 * @return String in JSON format, appropriate for sending to IC server 
	 */
    serializeCreateCallbackPostData : function(parameters)
    {
        common.Debug.traceMethodEntered("Json.CallbackManager.serializeCreateCallbackPostData()");
        var json = { };

        json.target = parameters.get_target();
        json.targettype = parameters.get_targetType();
        json.subject = parameters.get_subject();

        json.participant = {};
        json.participant.name = parameters.get_participantName();
        json.participant.credentials = parameters.get_participantCredentials();
        json.participant.telephone = parameters.get_telephone();

		if (parameters.get_customInfo())
	    {
			json.customInfo = parameters.get_customInfo();
		}

        var attributes = parameters.get_attributes();
        if (attributes)
        {
            json.attributes = {};
            for (key in attributes)
            {
                var value = attributes[key];
                if (key.constructor === String && (value == null || value.constructor === String))
                {
                    json.attributes[key] = value;
                }
            }
        }

        var routingContexts = parameters.get_routingContexts();
        if (routingContexts && !routingContexts.isEmpty())
        {
            json.routingContexts = new Array();
            var categories = routingContexts.categories();
            for (var i=0; i<categories.length; i++)
            {
                var category = categories[i];
                var obj = {};
                obj.category = category;
                obj.context = routingContexts.getContext(category);
                json.routingContexts[i] = obj;
            }
        }

        json.language = localization.LanguageCode;
        if (!json.language)
        {
            common.Debug.traceWarning("Creating a callback, but no language has been specified.");
        }

        json.clientToken = "deprecated";

        common.Debug.traceMethodExited("Json.CallbackManager.serializeCreateCallbackPostData()");
        return Object.toJSON(json);
    },

    /**
     * Takes data necessary to reconnect to a callback, and puts 
     * it into the appropriate JSON format for sending to the IC server.
     *  
     * @param callbackId This was returned when the callback is created.
     */
    serializeReconnectPostData : function(callbackId)
    {
        common.Debug.traceMethodEntered("Json.CallbackManager.serializeReconnectPostData()");
        var json = { };

        json.callbackID = callbackId;

        common.Debug.traceMethodExited("Json.CallbackManager.serializeReconnectPostData()");
        return Object.toJSON(json);
    }
});



// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * RegistrationManager class 
 * Extends RegistrationManagerBase with JSON-specific functionality
 */
webservices.Json.RegistrationManager = Class.create(webservices.RegistrationManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
     * @param failoverHandler An instance of webservices.Json.FailoverHandler 
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("Json.RegistrationManager.initialize()");

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        common.Debug.traceMethodExited("Json.RegistrationManager.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.RegistrationManager.createAjaxManager()");
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.RegistrationManager.createAjaxManager()");
        return mgr;
    },

	/**
	 * Takes data necessary for a registration, and puts it into the appropriate JSON format for sending to the IC server.
	 * 
	 * @param username The username of the person attempting to register
	 * @param password The password of the person attempting to register
	 * @param firstName The first name of the person attempting to register
	 * @param middleName The middle name of the person attempting to register
	 * @param lastName The last name of the person attempting to register
	 * @param homeStreetAddress The street address of the person attempting to register
	 * @param homeCity The city of the person attempting to register
	 * @param homeState The state/province/territory of the person attempting to register
	 * @param homePostalCode The postal code of the person attempting to register
	 * @param homeCountry The country of the person attempting to register
	 * @param homeEmail The email address of the person attempting to register
	 * @param homePhone The home telephone number of the person attempting to register
	 * @param homePhone2 The secondary home telephone number of the person attempting to register
	 * @param homeFax The home fax number of the person attempting to register
	 * @param homePager The home pager number of the person attempting to register
	 * @param homeMobile The personal mobile telephone number of the person attempting to register
	 * @param homeUrl The personal URL of the person attempting to register
	 * @param department The department (of their company) of the person attempting to register
	 * @param company The company for which the person attempting to register works
	 * @param jobTitle The job title of the person attempting to register
	 * @param assistantName The name of the assistant of the person attempting to register
	 * @param assistantPhone The telephone number of the assistant of the person attempting to register
	 * @param businessStreetAddress The street address of the company 
	 * @param businessCity The city in which the company is located
	 * @param businessState The state/province/territory in which the company is located
	 * @param businessPostalCode The postal code of the company
	 * @param businessCountry The country in which the company is located
	 * @param businessEmail The business email address of the person attempting to register
	 * @param businessPhone The business telephone number of the person attempting to register
	 * @param businessPhone2 The secondary business telephone number of the person attempting to register
	 * @param businessFax The business fax number of the person attempting to register
	 * @param businessPager The business pager number of the person attempting to register
	 * @param businessMobile The business mobile telephone number of the person attempting to register
	 * @param businessUrl The business URL of the person attempting to register
	 * @param remarks Freeform string
	 * @return String in JSON format, appropriate for sending to IC server 
	 */
    serializeRegistrationPostData : function(username, password,
                                             firstName, middleName, lastName,
                                             homeStreetAddress, homeCity, homeState, homePostalCode, homeCountry,
                                             homeEmail, homePhone, homePhone2, homeFax, homePager, homeMobile, homeUrl,
                                             department, company, jobTitle,
                                             assistantName, assistantPhone,
                                             businessStreetAddress, businessCity, businessState, businessPostalCode, businessCountry,
                                             businessEmail, businessPhone, businessPhone2, businessFax, businessPager, businessMobile,
                                             businessUrl, remarks)
    {
        var json = { };
        
        json.contact = { };

        json.contact.username = username;
        json.contact.password = password;

        json.contact.firstName = firstName;
        json.contact.middleName = middleName;
        json.contact.lastName = lastName;
        
        json.contact.homeStreetAddress = homeStreetAddress;
        json.contact.homeCity = homeCity;
        json.contact.homeState = homeState;
        json.contact.homePostalCode = homePostalCode;
        json.contact.homeCountry = homeCountry;

        json.contact.homeEmail = homeEmail;
        json.contact.homePhone = homePhone;
        json.contact.homePhone2 = homePhone2;
        json.contact.homeFax = homeFax;
        json.contact.homePager = homePager;
        json.contact.homeMobile = homeMobile;
        json.contact.homeURL = homeUrl;

        json.contact.department = department;
        json.contact.company = company;
        json.contact.jobTitle = jobTitle;

        json.contact.assistantName = assistantName;
        json.contact.assistantPhone = assistantPhone;

        json.contact.businessStreetAddress = businessStreetAddress;
        json.contact.businessCity = businessCity;
        json.contact.businessState = businessState;
        json.contact.businessPostalCode = businessPostalCode;
        json.contact.businessCountry = businessCountry;

        json.contact.businessEmail = businessEmail;
        json.contact.businessPhone = businessPhone;
        json.contact.businessPhone2 = businessPhone2;
        json.contact.businessFax = businessFax;
        json.contact.businessPager = businessPager;
        json.contact.businessMobile = businessMobile;
        json.contact.businessURL = businessUrl;

        json.contact.remarks = remarks;

        return Object.toJSON(json);
    }
});

// Register namespaces
webservices.registerChildNamespace("Json");

/**
 * PartyManager class 
 * Extends PartyManagerBase with JSON-specific functionality
 */
webservices.Json.PartyManager = Class.create(webservices.PartyManagerBase,
{
	/**
	 * Constructor
	 * 
	 * @param genericResponseBuilder An instance of GenericResponseBuilder, to turn the JSON received from the IC server into a ResponseBase or subclass thereof
	 * @param capabilityRepository An instance of CapabilityRepository, in which the capabilities are stored.
	 * @param failoverHandler In charge of connecting to the other server if the current one goes down for some reason. 
	 */
    initialize: function($super, genericResponseBuilder, capabilityRepository, failoverHandler)
    {
        common.Debug.traceMethodEntered("Json.PartyManager.initialize()");

        $super(genericResponseBuilder, capabilityRepository, failoverHandler);

        common.Debug.traceMethodExited("Json.PartyManager.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @param capability A Capability object representing what this AjaxManager object is intended to do (i.e. poll, send a message, etc.) 
	 * @return AjaxManager 
     */
    createAjaxManager : function(capability)
    {
        common.Debug.traceMethodEntered("Json.PartyManager.createAjaxManager()");
        var mgr = new webservices.Json.AjaxManager(this._genericResponseBuilder, capability);
        common.Debug.traceMethodExited("Json.PartyManager.createAjaxManager()");
        return mgr;
    },

	/**
     * Takes data necessary to query a party's info (name and photo), and puts it into 
     * the appropriate JSON format for sending to the IC server.
	 * 
     * @param participantId The participantId of the agent whose info is being queried. 
	 * @return String in JSON format, appropriate for sending to IC server 
	 */
    serializeGetPartyInfoPostData : function(participantId)
    {
        common.Debug.traceMethodEntered("Json.PartyManager.serializeGetPartyInfoPostData()");
        var json = { };

        json.participantID = participantId;

        common.Debug.traceMethodExited("Json.PartyManager.serializeCreateCallbackPostData()");
        return Object.toJSON(json);
    }
});



// Register namespaces
webservices.registerChildNamespace("Json._Internal");

/**
 * ProblemReporter class 
 * Extends ProblemReporterBase with JSON-specific functionality
 */
webservices.Json._Internal._ProblemReporter = Class.create(webservices._Internal._ProblemReporterBase,
{
	/**
	 * Constructor
	 * 
	 */
    initialize: function($super)
    {
        common.Debug.traceMethodEntered("Json.ProblemReporter.initialize()");

        $super();

        common.Debug.traceMethodExited("Json.ProblemReporter.initialize()");
    },

    // public methods

    /** 
     * Gets an JSON-specific instance of webservices.AjaxManagerBase
	 * This method should not be called directly by clients of the API. 
	 *  
	 * @return AjaxManager 
     */
    createAjaxManager : function()
    {
        common.Debug.traceMethodEntered("Json.ChatManager.createAjaxManager()");
       
        var capability = webservices.CapabilityRepository.get_problemReportCapability();
        var mgr = new webservices.Json.AjaxManager(this, capability, null, this);
        common.Debug.traceMethodExited("Json.ChatManager.createAjaxManager()");
        return mgr;
    },

    /** 
     * Convert Javascript problem report to JSON 
     * @param problemReport An object containing arbitrary data about a problem encountered by the client
     * @return That object, represented as a JSON string, concatenated to a maximum length of 15KB
     */
    serializeProblemReport : function(problemReport)
    {
        var string = Object.toJSON(problemReport);
        return string.substr(0,15359);
    },

    /**
     * Problem report is not expected to send any content in its response. 
     * So, as long as the HTTP status code is 200, build an empty response object indicating success. 
     * Otherwise, build one indicating failure and the received HTTP response code.
     */
    buildResponseFromRequest : function(xmlHttpRequest)
    {
        var response = new webservices.ResponseBase();
        if(xmlHttpRequest && xmlHttpRequest.status == 200)
        {
            response.set_statusType(webservices.ResponseBase.STATUS_TYPE_SUCCESS);
        }
        else
        {
            response.xmlHttpRequest = xmlHttpRequest;
            response.set_statusType(webservices.ResponseBase.STATUS_TYPE_FAILURE);
            var errorCode = webservices.ErrorCodes.ERROR + '.' + webservices.ErrorCodes.HTTP;
            response.set_statusReason(new webservices.Error(errorCode));
        }
        return response;
    }
});

// Register namespaces
webservices.registerChildNamespace("_Internal");

/**
 * ParticipantDisplayNameFormatter class 
 *  
 * Conversions to display a Participant's name in a visually appealing format. 
 * Currently just displays the name if it is known, or "User " followed by the ID if the name is not known. 
 * But, could be extended, for instance if Participant were extended to include first name, last name, job title, etc. 
 */
webservices._Internal._ParticipantDisplayNameFormatter = Class.create(common.InterfaceImplementation,
{
	/**
	 * Constructor
	 * 
	 * @param participantRepository Instance of a subclass of ParticipantRepositoryBase
	 */
    initialize : function($super, participantRepository)
    {
        var numArgs = 2;
        if(arguments.length != numArgs)
        {
            throw common.ExceptionFactory.createException("ParticipantDisplayNameFormatter constructor called with " + arguments.length + " arguments, but expected " + numArgs + ".");
        }

        common.Interface.ensureImplements(participantRepository, [webservices.Interfaces.IParticipantRepository]);

        $super();

        // initialize private members
        this._participantRepository = participantRepository;
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
        common.InterfaceImplementation.prototype.destroy.call(this);
    },

    // public methods

	/**
	 * Creates a display name, given a participant's ID and their name. 
	 *  
	 * @param id The ID of a participant.
	 * @param name The name of that participant.
	 * @return A string that identifies this participant as well as possible given the values passed in.
	 */
    formatDisplayNameFromIdAndName : function(id, name)
    {
        if(name)
        {
            return name;
        }

        return "User " + id;
    },
    
	/**
	 * Creates a display name, given a participant's ID and their name. 
	 *  
	 * @param id The ID of a participant.
	 * @return A string that identifies this participant as well as possible given the values passed in.
	 */
    formatDisplayNameFromId : function(id)
    {
        var name;
        var participant = this._participantRepository.get_participant(id);
        if(participant)
        {
            name = participant.get_name();
        }

        return this.formatDisplayNameFromIdAndName(id, name);
    }
});

// TODO: This class doesn't seem like it's used anywhere.  Safe to remove?

/**
 * ServiceLocator class 
 * Provides a way to store and retrieve singletons by type 
 */
webservices.ServiceLocator = function()
{
    // public methods

    return {
		/**
		 * Register a singleton 
		 *  
		 * @param type The type of singleton that is being registered
		 * @param instance The singleton that is being registered
		 */
        register : function(type, instance)
        {
            common.IoC.registerSingletonInstance(type, instance);
        },

		/**
		 * Retrieve a previously-registered singleton 
		 *  
		 * @param type The type of the singleton that is to be retrieved 
		 * @return Whatever was previously associated with this type by a call to register() 
		 */
        get : function(type)
        {
            return common.IoC.getSingleton(type);
        },

		/**
		 * Unregister a previously registered singleton 
		 *  
		 * @param type The type of singleton to be unregistered.  Whatever was previously associated with this type by a call to register() will no longer be associated. 
		 */
        remove : function(type)
        {
            return common.IoC.removeSingleton(type);
        }
    };
}();

// Register namespaces
webservices.registerChildNamespace("_Internal");

/** 
 * A "command" is logically a tuple of a parameterless function, and a string which a user can 
 * type in the chat to cause that function to be called. 
 *  
 * This class represents a list of all such commands. 
 *  
 * It also is an observer for IReceivedCommandNotification - when it receives one, it executes the command.
 *  
 * Don't use this directly, use the singleton webservices.CommandRepository. 
 */
webservices._Internal._CommandRepository = Class.create(common.InterfaceImplementation,
{
	/**
     * Constructor 
	 */
    initialize : function($super)
    {
        $super();

        this._commands = new Hash();

        this.registerCommand("set tracelevel all",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.ALL);
                             });
        this.registerCommand("set tracelevel verbose",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.VERBOSE_NOTE);
                             });
        this.registerCommand("set tracelevel note",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.NOTE);
                             });
        this.registerCommand("set tracelevel status",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.STATUS);
                             });
        this.registerCommand("set tracelevel warning",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.WARNING);
                             });
        this.registerCommand("set tracelevel error",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.ERROR);
                             });
        this.registerCommand("set tracelevel critical",
                             function()
                             {
                                 common.Debug.setTraceLevel(common.TraceLevels.CRITICAL_ERROR);
                             });

        this.addImplementedInterface(webservices.Interfaces.IReceivedCommandNotificationObserver, webservices);
        webservices.NotificationRegistry.registerObserver(this, webservices.Interfaces.IReceivedCommandNotification);
    },

	/**
	 * Destructor
	 */
    destroy : function()
    {
	},

	/**
     * Adds a command to the repository
     *  
     * @param string The string which, if typed in the chat, will cause the (parameterless) function to be called.
     * @param fn The function that will be called if the string is typed in the chat.  This function should take no parameters, but may return a value.
	 */
    registerCommand : function(string, fn)
    {
        // It would be nice to use an associative array
        this._commands.set(string, fn);
    },

    /**
     * Implementation of IReceivedCommandNotificationObserver 
     * Executes the command that was received 
     * 
	 * @param notification Something that implements IReceivedCommandNotification
     */
    processReceivedCommandNotification : function(notification)
    {
        this.execute(notification.get_command());
    },

    /**
     * Returns whether or not a string is associated with a command.
     * 
     * @param string A string which may or may not have a function associated with it.
     * @return true if the string has a function associated with it, false if not. 
     */
    isCommand : function(string)
    {
        return (-1 != this._commands.keys().indexOf(string));
    },

    /**
     * Executes the function associated with the passed string. 
     *  
     * @param string A string which should have a function associated with it.  If not, no action will be performed. 
     * @return Whatever the function returns.  Throws an exception if the string does not describe a function.
     */
    execute : function(string)
    {
        common.Debug.traceMethodEntered("CommandRepository.execute()");

        if (!this.isCommand(string))
        {
            common.Debug.traceError("CommandRepository.execute() called on non-existent command.");
            throw common.ExceptionFactory.createException("CommandRepository.execute() called on non-existent command.");
        }

        common.Debug.traceStatus("Going to execute command: " + string);

        var fn = this._commands.get(string);
        if (null != fn)
        {
            return fn();
        }

        common.Debug.traceMethodExited("CommandRepository.execute()");
    }
});

// Register namespaces
webservices.registerChildNamespace("WebServicesInitialization");

/**
 * Create objects necessary for the chat
 * 
 * @param currentUriFragment The URI fragment currently in use to reverse proxy to the IC server.  See Servers class.
 * @param uriFragments The set of URI fragments that are used to reverse proxy to the IC server(s).  See Servers class.
 * @param useHttps If true, AJAX requests will be made via HTTPS.  If false, they will be made via HTTP.
 */
webservices.WebServicesInitialization.initialize = function(currentUriFragment, uriFragments, useHttps)
{
    // Factories which can be overridden for customization
    webservices.CustomizationFactoryRegistry = new webservices._Internal._CustomizationFactoryRegistry();

    // This factory does not create singletons
    webservices.CustomizationFactoryRegistry.registerFactory(webservices.CustomizableFactoryTypes.RegistrationFormPanel, new ININ.Web.Chat.Customizations.RegistrationFormPanelFactory());

    // These factories create singletons
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.Linkifier, new ININ.Web.Chat.Customizations.LinkifierFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.LoginInfoSource, new ININ.Web.Chat.Customizations.LoginInfoSourceFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.MaximumFieldLengths, new ININ.Web.Chat.Customizations.MaximumFieldLengthsFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.RetryCounts, new ININ.Web.Chat.Customizations.RetryCountsFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.StatusFieldsDisplay, new ININ.Web.Chat.Customizations.StatusFieldsDisplayFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.TabVisibility, new ININ.Web.Chat.Customizations.TabVisibilityFactory());
    webservices.CustomizationFactoryRegistry.registerSingletonFactory(webservices.CustomizableSingletonFactoryTypes.SendOnEnter, new ININ.Web.Chat.Customizations.SendOnEnterFactory());

    // create singletons
    webservices.NotificationFactory = new webservices._Internal.NotificationFactory();
    webservices.NotificationRegistry = new webservices._Internal._NotificationRegistry(webservices.NotificationFactory);
    webservices.NotificationFactory.delayedInit();
    webservices.ParticipantRepository = new webservices._Internal._ParticipantRepository();
    webservices.ReceivedUrlRepository = new webservices._Internal._ReceivedUrlRepository();
    webservices.ReceivedMessageRepository = new webservices._Internal._ReceivedMessageRepository();
    webservices.PollManager = new webservices._Internal._PollManager();
    webservices.CapabilityRepository = new webservices._Internal._CapabilityRepository();
    webservices.Json.GenericResponseBuilder = new webservices.Json._Internal.GenericResponseBuilder(
                                    new webservices.Json._Internal.ChatResponseBuilder(new webservices.Json.EventFactory()),
                                    new webservices.Json._Internal.CallbackResponseBuilder(),
                                    new webservices.Json._Internal.RegistrationResponseBuilder(),
                                    new webservices.Json._Internal.ServerConfigurationResponseBuilder(),
                                    new webservices.Json._Internal.PartyInfoResponseBuilder(),
                                    new webservices.Json._Internal.QueueQueryResponseBuilder());
    webservices.Json.ServerConfigurationProcessor = new webservices.Json._Internal.ServerConfigurationProcessor(webservices.CapabilityRepository);
    webservices.Json.ServerConfigurationManager = new webservices.Json._Internal._ServerConfigurationManager(webservices.Json.GenericResponseBuilder, webservices.CapabilityRepository, webservices.Json.ServerConfigurationProcessor);
    webservices.Json.FailoverHandler = new webservices.Json._Internal._FailoverHandler(webservices.Json.GenericResponseBuilder, webservices.CapabilityRepository);
    webservices.Json.TypingIndicator = new webservices.Json._Internal._TypingIndicator();
    webservices.ParticipantDisplayNameFormatter = new webservices._Internal._ParticipantDisplayNameFormatter(webservices.ParticipantRepository);
    webservices.CommandRepository = new webservices._Internal._CommandRepository();

    // Set up protocol/servers
    webservices.Servers.UriFragments = uriFragments;
    webservices.Servers.UseHttps = (useHttps == true);

    // use the server as the current uri fragment if it's specified in the query string, else use the one loaded from the page
    var server = common.Utilities.getQueryStringValue("server");
    if(server)
    {
        webservices.Servers.CurrentUriFragment = server;
    }
    else
    {
        webservices.Servers.CurrentUriFragment = currentUriFragment;
    }

    webservices.EventProcessor = new webservices._Internal._EventProcessor(webservices.NotificationRegistry, webservices.ParticipantRepository);
    webservices.EventSequenceManager = new webservices._Internal._EventSequenceManager(webservices.EventProcessor);
    webservices.ProblemReporter = new webservices.Json._Internal._ProblemReporter();

    // TODO: the capabilities don't change now, they are simply enabled or disabled based on which server the chat is pointed at
    // so should these objects still 'observe' changes? I guess we only need to support this when we support failover
    // TODO: Support failover
//    webservices.CapabilityRegistry.registerPollCapabilityObserver(webservices.CapabilityRepository);
//    webservices.CapabilityRegistry.registerSendMessageCapabilityObserver(webservices.CapabilityRepository);
//    webservices.CapabilityRegistry.registerTypingIndicatorCapabilityObserver(webservices.CapabilityRepository);
//    webservices.CapabilityRegistry.registerExitChatCapabilityObserver(webservices.CapabilityRepository);

    webservices.NotificationRegistry.registerObserver(webservices.Json.FailoverHandler, webservices.Interfaces.IFailoverNotification);
    webservices.NotificationRegistry.registerObserver(webservices.Json.FailoverHandler, webservices.Interfaces.IChatReconnectFailureNotification);
    
    webservices.NotificationRegistry.registerObserver(webservices.ReceivedMessageRepository, webservices.Interfaces.IReceivedTextNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ReceivedMessageRepository, webservices.Interfaces.IReceivedUrlNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ReceivedMessageRepository, webservices.Interfaces.IReceivedFileNotification);

    webservices.NotificationRegistry.registerObserver(webservices.ReceivedUrlRepository, webservices.Interfaces.IReceivedUrlNotification);

    webservices.ChatPropertyUpdateRegistry.registerPollWaitSuggestionUpdateObserver(webservices.PollManager);
    webservices.NotificationRegistry.registerObserver(webservices.PollManager, webservices.Interfaces.IFailoverNotification);
    webservices.NotificationRegistry.registerObserver(webservices.PollManager, webservices.Interfaces.IChatReconnectNotification);
    webservices.NotificationRegistry.registerObserver(webservices.PollManager, webservices.Interfaces.IRefreshPageNotification);

    webservices.NotificationRegistry.registerObserver(webservices.ParticipantRepository, webservices.Interfaces.ICurrentParticipantIdChangedNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ParticipantRepository, webservices.Interfaces.INewParticipantNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ParticipantRepository, webservices.Interfaces.IParticipantJoinedNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ParticipantRepository, webservices.Interfaces.IParticipantLeftNotification);
    webservices.NotificationRegistry.registerObserver(webservices.ParticipantRepository, webservices.Interfaces.IParticipantNameChangedNotification);
};

webservices.WebServicesInitialization.uninitialize = function()
{
    webservices.Servers.UseHttps = false;
    webservices.Servers.CurrentUriFragment = "";
    webservices.Servers.UriFragments = [];
    
    webservices.ChatPropertyUpdateRegistry.unregisterPollWaitSuggestionUpdateObserver(webservices.PollManager);
};

/**
 * Clean up objects used by the chat.
 */
webservices.WebServicesInitialization.destroy = function()
{
//    are there more that should be here?
//    
//    I need to be called in the single page AJAX index.html as well

    webservices.CapabilityRepository.destroy();
    delete webservices.CapabilityRepository;
    webservices.CapabilityRepository = undefined;

    webservices.Json.TypingIndicator.destroy();
    delete webservices.Json.TypingIndicator;
    webservices.Json.TypingIndicator = undefined;

    webservices.Json.FailoverHandler.destroy();
    delete webservices.Json.FailoverHandler;
    webservices.Json.FailoverHandler = undefined;

    webservices.EventProcessor.destroy();
    delete webservices.EventProcessor;
    webservices.EventProcessor = undefined;

    webservices.EventSequenceManager.destroy();
    delete webservices.EventSequenceManager;
    webservices.EventSequenceManager = undefined;

    webservices.ParticipantRepository.destroy();
    delete webservices.ParticipantRepository;
    webservices.ParticipantRepository = undefined;

    webservices.PollManager.destroy();
    delete webservices.PollManager;
    webservices.PollManager = undefined;

    webservices.ReceivedMessageRepository.destroy();
    delete webservices.ReceivedMessageRepository;
    webservices.ReceivedMessageRepository = undefined;

    webservices.ReceivedUrlRepository.destroy();
    delete webservices.ReceivedUrlRepository;
    webservices.ReceivedUrlRepository = undefined;

    webservices.ProblemReporter.destroy();
    delete webservices.ProblemReporter
    webservices.ProblemReporter = undefined;

    // Factories for customization
    webservices.CustomizationFactoryRegistry.destroy();
    delete webservices.CustomizationFactoryRegistry;
    webservices.CustomizationFactoryRegistry = undefined;
};

    return webservices;
});


