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
var ININ_Web_Common_Fileversion = "4.0005.0017.422"; 

define(['prototype'], function(Prototype)
{

/*global ININ: true, Prototype: true, Error: true, window: true */

// Type class
(function()
{
    // private methods
    var _checkForPrototype = function()
    {
        if(!Prototype)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Prototype does not exist");
        }
    };

    var _buildNamespaceName = function(namespaceParts, index)
    {
        return namespaceParts.slice(0, index + 1).join('.');
    };

    var _addNewMembers = function(namespaceObject, name)
    {
        namespaceObject.__isNamespace = true;
        namespaceObject.__typeName = name;
        namespaceObject.getName = function ns$getName() {return this.__typeName;};
    };

    var _verifyNamespaceObjectWithName = function(namespaceObject)
    {
        var parsedName;
        try
        {
            parsedName = eval(namespaceObject.__typeName);
        }
        catch(e)
        {
            parsedName = null;
        }

        if(parsedName !== namespaceObject)
        {
            var msg = "Object in namespace doesn't match the object with name: " + namespaceObject.__typeName;
            delete namespaceObject;
            throw ININ.Web.Common.ExceptionFactory.createException(msg);
        }
    };

    var _registerChildNamespace = function(namespacePath)
    {
        var namespaceParts = namespacePath.split('.');

        var currentPart = namespaceParts[0];
        var namespaceObject = this[currentPart];

        // if the namespace object exists, make sure it's tagged as a namespace
        if (namespaceObject && !namespaceObject.__isNamespace)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Part of the namespace " + namespacePath + " is already an object: " + namespaceParts[0]);
        }

        if (!namespaceObject)
        {
            // create the object, add new members on to the existing object and verify the object
            namespaceObject = this[currentPart] = {};
            _addNewMembers(namespaceObject, currentPart);
            namespaceObject.registerChildNamespace = _registerChildNamespace.bind(namespaceObject);
        }

        if (namespaceParts.length > 1)
        {
            // Iterate
            namespaceObject.registerChildNamespace(namespaceParts.slice(1).join('.'));
        }
        return namespaceObject;
    };

    // public methods
    var typeClass =
    {
        registerNamespace : function(namespacePath)
        {
            var rootObject = window;
            var namespaceParts = namespacePath.split('.');

            for (var i = 0; i < namespaceParts.length; ++i)
            {
                var currentPart = namespaceParts[i];
                var namespaceObject = rootObject[currentPart];

                // if the namespace object exists, make sure it's tagged as a namespace
                if (namespaceObject && !namespaceObject.__isNamespace)
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Part of the namespace " + namespacePath + " is already an object: " + namespaceParts[i]);
                }
                
                if (!namespaceObject)
                {
                    // create the object, add new members on to the existing object and verify the object
                    var name = _buildNamespaceName(namespaceParts, i);
                    namespaceObject = rootObject[currentPart] = {};
                    _addNewMembers(namespaceObject, name);
                    _verifyNamespaceObjectWithName(namespaceObject);
                }
                
                // save this namespace object as the root for the next iteration
                rootObject = namespaceObject;
            }
        },

        registerLocalNamespace : function(name)
        {
            var namespaceObject = {};
            _addNewMembers(namespaceObject, name);
            namespaceObject.registerChildNamespace = _registerChildNamespace.bind(namespaceObject);
            return namespaceObject;
        }

    };

    // register the namespace for this object and then assign the namespace object itself
    typeClass.registerNamespace("ININ.Web.Common.Type");
    ININ.Web.Common.Type = typeClass;
})();

/*global ININ: true, Error: true, Prototype: true, alert: true, console: true, firebug: true */

ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

ININ.Web.Common.Type.registerNamespace("ININ.Web.Common.TraceLevels");

// TraceLevel constants
ININ.Web.Common.TraceLevels.ALL = 100;
ININ.Web.Common.TraceLevels.VERBOSE_NOTE = 99;
ININ.Web.Common.TraceLevels.NOTE = 80;
ININ.Web.Common.TraceLevels.STATUS = 60;
ININ.Web.Common.TraceLevels.WARNING = 40;
ININ.Web.Common.TraceLevels.ERROR = 20;
ININ.Web.Common.TraceLevels.CRITICAL_ERROR = 10;
ININ.Web.Common.TraceLevels.ALWAYS = 0;

// Debug class
ININ.Web.Common.Debug = function()
{
    // private members
    var _enabled = false;
    var _currentTraceLevel = ININ.Web.Common.TraceLevels.STATUS;
    var _scopeTraceLevel = ININ.Web.Common.TraceLevels.NOTE;

    var _isFirebugLite = function()
    {
        return typeof(firebug) != "undefined";
    };

    var _shouldLevelBeTraced = function(level)
    {
        if(ININ.Web.Common.Utilities.isType(level, Number))
        {
            return level <= _currentTraceLevel;
        }

        return true;
    };

    var _beginManualScope = function(text)
    {
        ININ.Web.Common.Debug.traceNote(text);
    };

    var _endManualScope = function(text)
    {
        ININ.Web.Common.Debug.traceNote(text);
    };

    var _beginScope = function(prefix, scopeText)
    {
        if(_shouldLevelBeTraced(_scopeTraceLevel))
        {
            if(_isFirebugLite())
            {
                // for firebug lite
                _beginManualScope(prefix + scopeText);
            }
            else
            {
                try
                {
                    console.group(scopeText);
                }
                catch(ex)
                {
                    // for IE developer tools
                    _beginManualScope(prefix + scopeText);
                }
            }
        }
    };

    var _endScope = function(prefix, scopeText)
    {
        if(_shouldLevelBeTraced(_scopeTraceLevel))
        {
            if(_isFirebugLite())
            {
                // for firebug lite
                _endManualScope(prefix + scopeText);
            }
            else
            {
                try
                {
                    console.groupEnd(scopeText);
                }
                catch(ex)
                {
                    // for IE developer tools
                    _endManualScope(prefix + scopeText);
                }
            }
        }
    };
    
    var _logMessage = function(msg, level)
    {
        if(_shouldLevelBeTraced(level))
        {
            try
            {
                console.log(msg);            
            }
            catch(ex)
            {
                // silently fail
            }
        }
    };

    var _logWarning = function(msg)
    {
        if(_shouldLevelBeTraced(ININ.Web.Common.TraceLevels.WARNING))
        {
            try
            {
                console.warn(msg);            
            }
            catch(ex)
            {
                // silently fail
            }
        }
    };

    var _logError = function(msg)
    {
        if(_shouldLevelBeTraced(ININ.Web.Common.TraceLevels.ERROR))
        {
            try
            {
                console.error(msg);            
            }
            catch(ex)
            {
                // silently fail
            }
        }
    };

    // public methods
    return {
        enable : function()
        {
            _enabled = true;
        },

        disable : function()
        {
            _enabled = false;
        },

        isEnabled : function()
        {
            return _enabled;
        },

        setTraceLevel : function(level)
        {
            if((level != ININ.Web.Common.TraceLevels.ALL) &&
               (level != ININ.Web.Common.TraceLevels.VERBOSE_NOTE) &&
               (level != ININ.Web.Common.TraceLevels.NOTE) &&
               (level != ININ.Web.Common.TraceLevels.STATUS) &&
               (level != ININ.Web.Common.TraceLevels.WARNING) &&
               (level != ININ.Web.Common.TraceLevels.ERROR) &&
               (level != ININ.Web.Common.TraceLevels.CRITICAL_ERROR))
            {
                throw new Error("Level specified is not a value in ININ.Web.Common.TraceLevels");
            }

            _currentTraceLevel = level;
        },

        setScopeTraceLevel : function(level)
        {
            if((level != ININ.Web.Common.TraceLevels.ALL) &&
               (level != ININ.Web.Common.TraceLevels.VERBOSE_NOTE) &&
               (level != ININ.Web.Common.TraceLevels.NOTE) &&
               (level != ININ.Web.Common.TraceLevels.STATUS) &&
               (level != ININ.Web.Common.TraceLevels.WARNING) &&
               (level != ININ.Web.Common.TraceLevels.ERROR) &&
               (level != ININ.Web.Common.TraceLevels.CRITICAL_ERROR))
            {
                throw new Error("Level specified is not a value in ININ.Web.Common.TraceLevels");
            }

            _scopeTraceLevel = level;
        },

        traceMethodEntered : function(methodName)
        {
            _beginScope("Entering method: ", methodName);
        },

        traceMethodExited : function(methodName)
        {
            _endScope("Exiting method: ", methodName);
        },

        traceScopeEntered : function(scopeName)
        {
            _beginScope("Entering scope: ", scopeName);
        },

        traceScopeExited : function(scopeName)
        {
            _endScope("Exiting scope: ", scopeName);
        },

        traceAlways : function(msg)
        {
            _logMessage(msg, ININ.Web.Common.TraceLevels.ALWAYS);
        },

        traceVerboseNote : function(msg)
        {
            _logMessage(msg, ININ.Web.Common.TraceLevels.VERBOSE_NOTE);
        },

        traceNote : function(msg)
        {
            _logMessage(msg, ININ.Web.Common.TraceLevels.NOTE);
        },

        traceStatus : function(msg)
        {
            _logMessage(msg, ININ.Web.Common.TraceLevels.STATUS);
        },

        traceWarning : function(msg)
        {
            _logWarning(msg);
        },

        traceError : function(msg, level)
        {
            _logError(msg);
        },

        traceCriticalError : function(msg, level)
        {
            _logError(msg, ININ.Web.Common.TraceLevels.CRITICAL_ERROR);
        },

        alert : function(msg)
        {
            if(_enabled)
            {
                alert(msg);
            }
        },

        breakpoint : function(msg)
        {
            if(_enabled)
            {
                eval('debugger');
            }
        }
    };
}();

/*global ININ: true */

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common.Utilities");

// Utilities class
ININ.Web.Common.Utilities = (function()
{
    // public methods
    return {
        isNullOrUndefined : function(object)
        {
            return (typeof(object) === "undefined") || (object === null);
        },

        isNullOrEmptyString : function(str)
        {
            return ((null == str) || (str.length == 0));
        },

        isType : function(value, type)
        {
            if(typeof type != "function")
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Invalid type sent into isType()");            
            }
            
            if(this.isNullOrUndefined(value))
            {
                return false;
            }

            if(value instanceof type)
            {
                return true;
            }

            return (value.constructor === type);
        },

        getQueryStringValue : function(field)
        {
            var queryString = window.location.search.substring(1);
            var fieldValuePairs = queryString.split("&");
            for (var i = 0; i < fieldValuePairs.length; ++i)
            {
                var parts = fieldValuePairs[i].split("=");
                if (parts[0] == field)
                {
                    return parts[1];
                }
            }
            
            return null;
        }
    };
})();

ININ.Web.Common.QueryStringDebug = ININ.Web.Common.Utilities.getQueryStringValue('debug');
if(ININ.Web.Common.QueryStringDebug)
{
    ININ.Web.Common.Debug.enable();
}

ININ.Web.Common.QueryStringTraceLevel = ININ.Web.Common.Utilities.getQueryStringValue('traceLevel');
if(ININ.Web.Common.QueryStringTraceLevel)
{
    ININ.Web.Common.Debug.setTraceLevel(ININ.Web.Common.QueryStringTraceLevel);
}

/*global ININ: true, Prototype: true, navigator: true */

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// Browser class
ININ.Web.Common.Browser = (function()
{
    // private methods
    var _detectChromeUserAgent = function()
    {
        return (navigator.userAgent.indexOf('Chrome/') > -1);
    };

    // public methods
    return {
        isIE : function()
        {
            return Prototype.Browser.IE;
        },

        isOpera: function()
        {
            return Prototype.Browser.Opera;
        },

        isFireFox : function()
        {
            return Prototype.Browser.Gecko;
        },

        isWebKit : function()
        {
            return Prototype.Browser.WebKit;
        },

        isSafari : function()
        {
            return Prototype.Browser.WebKit && !_detectChromeUserAgent();
        },

        isMobileSafari : function()
        {
            return Prototype.Browser.MobileSafari;
        },

        isChrome : function()
        {
            return Prototype.Browser.WebKit && _detectChromeUserAgent();
        },

        getFireFoxVersion : function()
        {
            // example: Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729)

            var userAgent;
            if(arguments.length == 0)
            {
                userAgent = navigator.userAgent;
            }
            else if(arguments.length == 1)
            {
                userAgent = arguments[0];
            }
            
            var tokens = userAgent.split(' ');
            if (tokens && tokens.length > 0)
            {
                for(var i = 0; i < tokens.length; ++i)
                {
                    if(tokens[i].startsWith('Firefox'))
                    {
                        var version;
                        
                        var browserTokens = tokens[i].split('/');
                        if (browserTokens && browserTokens.length > 1)
                        {
                            version = new ININ.Web.Common.Version(browserTokens[1]);
                        }
                        
                        return version;
                    }
                }
            }

            return undefined;
        },

        getIEVersion : function()
        {
            // example: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; InfoPath.2; .NET CLR 1.1.4322; .NET CLR 3.5.21022;

            var userAgent;
            if(arguments.length == 0)
            {
                userAgent = navigator.userAgent;
            }
            else if(arguments.length == 1)
            {
                userAgent = arguments[0];
            }
            
            var tokens = userAgent.split('; ');
            if (tokens && tokens.length > 0)
            {
                for(var i = 0; i < tokens.length; ++i)
                {
                    if(tokens[i].startsWith('MSIE'))
                    {
                        var version;
                        
                        var browserTokens = tokens[i].split(' ');
                        if (browserTokens && browserTokens.length > 1)
                        {
                            version = new ININ.Web.Common.Version(browserTokens[1]);
                        }
                        
                        return version;
                    }
                }
            }

            return undefined;
        }

    };
})();

/*global ININ: true, Class: true */

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// Version class
// Supports versions of type X.X.X with an arbitrary long number of X's, where X is a number
ININ.Web.Common.Version = Class.create(
{
    // public methods
    initialize:function()
    {
        this._versionParts = [];
        
        // check number of arguments sent in constructor
        if(arguments.length === 0)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with 0 arguments, but expected at least 1.");
        }
        
        // check for multiple arguments
        if(arguments.length > 1)
        {
            this._assignVersionNumbers(arguments);
            return;
        }

        // check to see if the single argument is a string (and might need to processed)
        var arg = arguments[0];
        if(Object.isString(arg))
        {
            if(arg.blank())
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with a zero length argument.");
            }
            
            if(arg.indexOf(".") != -1)
            {
                this._parseVersionString(arg);
                return;
            }
        }

        this._versionParts[0] = this._getValidArgument(arg);
    },
    
    get_majorVersion : function()
    {
        return this.get_versionPart(0);
    },

    get_minorVersion : function()
    {
        return this.get_versionPart(1);
    },

    get_buildVersion : function()
    {
        return this.get_versionPart(2);
    },

    get_revisionVersion : function()
    {
        return this.get_versionPart(3);
    },

    get_versionPart : function(index)
    {
        if(index >= this._versionParts.length)
        {
            return 0;
        }
        
        return this._versionParts[index];
    },

    equals : function(version)
    {
        var maxNumParts = Math.max(this._versionParts.length, version._versionParts.length);
        for(var i = 0; i < maxNumParts; ++i)
        {
            if(this.get_versionPart(i) != version.get_versionPart(i))
            {
                return false;
            }
        }

        // this means that every single piece of both versions were equal, so return true
        return true;
    },

    isGreaterThan : function(version)
    {
        var maxNumParts = Math.max(this._versionParts.length, version._versionParts.length);
        for(var i = 0; i < maxNumParts; ++i)
        {
            if(this.get_versionPart(i) > version.get_versionPart(i))
            {
                return true;
            }
            if(this.get_versionPart(i) < version.get_versionPart(i))
            {
                return false;
            }
        }

        // this means they're equal, so return false
        return false;
    },

    isLessThan : function(version)
    {
        var maxNumParts = Math.max(this._versionParts.length, version._versionParts.length);
        for(var i = 0; i < maxNumParts; ++i)
        {
            if(this.get_versionPart(i) < version.get_versionPart(i))
            {
                return true;
            }
            if(this.get_versionPart(i) > version.get_versionPart(i))
            {
                return false;
            }
        }

        // this means they're equal, so return false
        return false;
    },

    isGreaterThanOrEqualTo : function(version)
    {
        return (this.isGreaterThan(version) || this.equals(version));
    },

    isLessThanOrEqualTo : function(version)
    {
        return (this.isLessThan(version) || this.equals(version));
    },

    // private methods
    _parseVersionString : function(versionString)
    {
        var versionParts = versionString.split('.');
        this._assignVersionNumbers(versionParts);
    },

    _assignVersionNumbers : function(versionParts)
    {
        // make sure every part is a number
        for(var i = 0; i < versionParts.length; ++i)
        {
            var part = this._getValidArgument(versionParts[i]);
            this._versionParts[i] = part;
        }
    },
    
    _getValidArgument : function(arg)
    {
        var validArg;
        
        if(ININ.Web.Common.Utilities.isNullOrUndefined(arg))
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with null/undefined argument.");
        }

        if(Object.isString(arg))
        {
            if(arg.blank())
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with a zero length argument.");
            }
            
            // convert it to a number and let the number branch handle it
            arg = parseInt(arg, 10);
        }
        
        if(Object.isNumber(arg))
        {
            if(isNaN(arg))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with Nan argument.");
            }
            
            if(arg == Infinity)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with Infinity argument.");
            }

            if(arg < 0)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with a negative number argument.");
            }

            return arg;
        }
        
        throw ININ.Web.Common.ExceptionFactory.createException("Version constructor called with an argument that is not of type String or Number.");
    },
    
    toString : function()
    {
        var output = '';

        for (var i = 0; i < this._versionParts.length; ++i)
        {
            if (output)
            {
                output += '.';
            }

            output += this._versionParts[i];
        }
        
        return output;
    }

});

/*global ININ: true, Error: true, Prototype: true, alert: true */

ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// Debugging class
ININ.Web.Common.ParameterValidation = function()
{
    // private methods
    var _validateType = function(type, argument)
    {
        return ININ.Web.Common.Utilities.isType(argument, type);
    };

    var _validateAllowEmpty = function(allowEmpty, argument)
    {
        // if we're checking whether it's empty, then it really needs to be a string
        if(!ININ.Web.Common.Utilities.isType(argument, String))
        {
            return false;
        }

        if(allowEmpty)
        {
            // any value is ok
            return true;
        }
        
        return !argument.blank();
    };

    var _validateRequired = function(isRequired, argument)
    {
        if(!isRequired)
        {
            // not required, so this validator will pass no matter what
            return true;
        }

        return (!ININ.Web.Common.Utilities.isNullOrUndefined(argument));
    };

    // public methods
    return {
        validate : function(args, validators)
        {
            if(ININ.Web.Common.Debug.isEnabled())
            {
                if(ININ.Web.Common.Utilities.isNullOrUndefined(validators))
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Validators are null/undefined.");
                }

                if(!ININ.Web.Common.Utilities.isNullOrUndefined(args))
                {
                    if(args.length > validators.length)
                    {
                        throw ININ.Web.Common.ExceptionFactory.createException("More args than validators.");
                    }

                    for(var i = 0; i < validators.length; ++i)
                    {
                        var validator = validators[i];
                        var argument = args[i];

                        if(ININ.Web.Common.Utilities.isNullOrUndefined(validator))
                        {
                            throw ININ.Web.Common.ExceptionFactory.createException("Validator at index " + i + " is null/undefined.");
                        }

                        // validate required, if provided
                        if(validator.required)
                        {
                            if(!_validateRequired(validator.required, argument))
                            {
                                throw ININ.Web.Common.ExceptionFactory.createException("Argument at index " + i + " is required, but is not provided");
                            }
                        }

                        // got past the required check, so continue checking if it's actually defined
                        if(!ININ.Web.Common.Utilities.isNullOrUndefined(argument))
                        {
                            // validate the type, if provided
                            if(validator.type)
                            {
                                if(!_validateType(validator.type, argument))
                                {
                                    throw ININ.Web.Common.ExceptionFactory.createException("Argument at index " + i + " is not of type " + validator.type);
                                }
                            }

                            // validate allowEmpty, if provided
                            if(validator.allowEmpty && (typeof validator.allowEmpty != "boolean"))
                            {
                                throw ININ.Web.Common.ExceptionFactory.createException("AllowEmpty value is not a boolean but '" + validator.allowEmpty + "'");
                            }

                            if(ININ.Web.Common.Utilities.isType(argument, String) && (typeof validator.allowEmpty == "boolean") && !validator.allowEmpty)
                            {
                                if(!_validateAllowEmpty(validator.allowEmpty, argument))
                                {
                                    throw ININ.Web.Common.ExceptionFactory.createException("Argument at index " + i + " is not allowed to be empty");
                                }
                            }

                            if(ININ.Web.Common.Utilities.isType(argument, Array) && (validator.elementType))
                            {
                                for(var j = 0; j < argument.length; ++j)
                                {
                                    if(!_validateType(validator.elementType, argument[j]))
                                    {
                                        throw ININ.Web.Common.ExceptionFactory.createException("Element " + j + " in argument at index " + i + " is not of type " + validator.elementType);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}();

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common.DependencyValidators");

// DependencyValidators class
ININ.Web.Common.DependencyValidators = (function()
{
    // private methods
    var _checkForPrototype = function()
    {
        if(!Prototype)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Prototype does not exist");
        }
    };

    var _checkForPrototypeVersion = function(requiredVersionString)
    {
        var requiredVersion = new ININ.Web.Common.Version(requiredVersionString);
        var providedVersion = new ININ.Web.Common.Version(Prototype.Version);
        if(!providedVersion.isGreaterThanOrEqualTo(requiredVersion))
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Prototype is of an unsupported version");
        }
    };
    
    var _checkForJQuery = function()
    {
        if(!jQuery)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("jQuery does not exist");
        }
    };

    var _checkForJQueryVersion = function(requiredVersionString)
    {
        var requiredVersion = new ININ.Web.Common.Version(requiredVersionString);
        var providedVersion = new ININ.Web.Common.Version(jQuery.prototype.jquery);
        if(!providedVersion.isGreaterThanOrEqualTo(requiredVersion))
        {
            throw ININ.Web.Common.ExceptionFactory.createException("JQuery is of an unsupported version");
        }
    };
    
    // public methods
    return {
        requirePrototypeVersion : function(requiredVersion)
        {
            _checkForPrototype();
            _checkForPrototypeVersion(requiredVersion);
        },

        requireJQueryVersion : function(requiredVersion)
        {
            _checkForJQuery();
            _checkForJQueryVersion(requiredVersion);
        }
    };

})();

/*global ININ: true, Error: true, Prototype: true, alert: true */

ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// ExceptionFactory class
ININ.Web.Common.ExceptionFactory = function()
{
    // private methods
    var _popStackFrame = function(error)
    {
        if (ININ.Web.Common.Utilities.isNullOrUndefined(error) ||
            ININ.Web.Common.Utilities.isNullOrUndefined(error.stack) ||
            ININ.Web.Common.Utilities.isNullOrUndefined(error.fileName) ||
            ININ.Web.Common.Utilities.isNullOrUndefined(error.lineNumber))
        {
            return;
        }

        var stackFrames = error.stack.split("\n");
        var currentFrame = stackFrames[0];
        var pattern = error.fileName + ":" + error.lineNumber;
        while(!ININ.Web.Common.Utilities.isNullOrUndefined(currentFrame) && (currentFrame.indexOf(pattern) === -1))
        {
            stackFrames.shift();
            currentFrame = stackFrames[0];
        }

        var nextFrame = stackFrames[1];
        if (ININ.Web.Common.Utilities.isNullOrUndefined(nextFrame))
        {
            return;
        }

        var nextFrameParts = nextFrame.match(/@(.*):(\d+)$/);
        if (ININ.Web.Common.Utilities.isNullOrUndefined(nextFrameParts))
        {
            return;
        }

        error.fileName = nextFrameParts[1];
        error.lineNumber = parseInt(nextFrameParts[2], 10);
        stackFrames.shift();
        error.stack = stackFrames.join("\n");
    };
    
    var _getGeneratedFileNameFromError = function(error)
    {
        // check the firefox variant, then safari variant
        return error.fileName || error.sourceURL || null;
    };

    var _getGeneratedLineNumberFromError = function(error)
    {
        // check the firefox variant, then safari variant
        return error.lineNumber || error.line || null;
    };

    var _setBrowserSpecificMembers = function(error, fileName, lineNumber)
    {
        if(ININ.Web.Common.Browser.isFireFox())
        {
            error.fileName = fileName;
            error.lineNumber = lineNumber;
        }
        else if(ININ.Web.Common.Browser.isSafari())
        {
            // Safari gets mad if you assign it an undefined value
            // it won't assign the real source URL when the error actually gets thrown
            // maybe uses a dirty flag or something to mark that it's been changed (even change to another undefined)
            if(fileName)
            {
                error.sourceURL = fileName;
            }
            if(lineNumber)
            {
                error.line = lineNumber;
            }
        }
    };

    // public methods
    return {
        createException : function(message, fileName, lineNumber)
        {
            ININ.Web.Common.ParameterValidation.validate(arguments, [ {"required": true, "type": String, "allowEmpty": false}, {"type": String, "allowEmpty": false}, {"type": Number} ]);

            // create the error
            var error = new Error(message);

            // pop the stack frame so that the error shows the correct place if file name and line number aren't specified
            _popStackFrame(error);

            // get the line number from error (since browsers like firefox and webkit will set that for you)
            if(!lineNumber)
            {
                lineNumber = _getGeneratedLineNumberFromError(error);
            }

            // get the file name from error (since browsers like firefox and webkit will set that for you)
            if(!fileName)
            {
                fileName = _getGeneratedFileNameFromError(error);
            }

            // attach custom members
            error._message = message;
            error._fileName = fileName;
            error._lineNumber = lineNumber;
            
            // set browser specific members
            _setBrowserSpecificMembers(error, fileName, lineNumber);

            // add methods
            error.alert = function() { alert(this._message); };
            error.get_message = function() { return this._message; };
            error.get_lineNumber = function()
            {
                // webkit browsers set this members when the error gets thrown
                // so we can't set it on creation
                if(this.line)
                {
                    return this.line;
                }

                return this._lineNumber;
            };
            error.get_fileName = function()
            {
                // webkit browsers set this members when the error gets thrown
                // so we can't set it on creation
                if(this.sourceURL)
                {
                    return this.sourceURL;
                }

                return this._fileName;
            };
            error.get_displayMessage = function()
            {
                var msg;
                
                if(this._message)
                {
                    msg = "Message: '" + this._message + "'";
                }
                if(error._fileName)
                {
                    msg = msg + " File: '" + this._fileName + "'";
                }
                if(error._lineNumber)
                {
                    msg = msg + " Line:" + this._lineNumber;
                }
            
                return msg;
            };

            // log the error if enabled
            ININ.Web.Common.Debug.traceError("Exception created: " + error.get_displayMessage());

            return error;
        }
    };
}();

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// check for prototype and version
ININ.Web.Common.DependencyValidators.requirePrototypeVersion("1.6.1");

// Interface class
ININ.Web.Common.Interface = Class.create(
{
    // public methods
    initialize:function(name, methods, bases, namespaceRoot)
    {
        // check number of arguments sent in constructor
        if((arguments.length < 2) || (arguments.length > 4))
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Interface constructor called with " + arguments.length +
                "arguments, but expected exactly 2, 3, or 4.");
        }
        
        // initialize the object
        this.methods = [];
        this._baseInterfaceNames = [];
        var namespace = namespaceRoot || window;
        
        // set the name
        this.name = name;
        
        // keep all base interface names
        this._pushBaseInterfaceNames(bases);
        
        // keep all base interface methods
        this._pushBaseInterfaceMethods(bases, namespaceRoot);

        // keep all parameter methods
        this._pushMethods(methods);
    },
    
    get_name : function()
    {
        return this.name;
    },

    get_methods : function()
    {
        return this.methods;
    },

    get_baseInterfaceNames : function()
    {
        return this._baseInterfaceNames;
    },

    // private methods
    _pushBaseInterfaceNames : function(baseInterfaceNames)
    {
        if(baseInterfaceNames)
        {
            for(var i = 0, len = baseInterfaceNames.length; i < len; ++i)
            {
                var baseName = baseInterfaceNames[i];
                if(typeof baseName !== 'string')
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Interface constructor expects base interface names to be passed in as a string.");
                }

                // make sure we don't already have it, then add it
                if(this._baseInterfaceNames.indexOf(baseName) == -1)
                {
                    this._baseInterfaceNames.push(baseName);        
                }
            }
        }
    },
    
    _pushBaseInterfaceMethods : function(baseInterfaceNames, namespaceRoot)
    {
        if(baseInterfaceNames)
        {
            for(var i = 0, len = baseInterfaceNames.length; i < len; ++i)
            {
                var baseName = baseInterfaceNames[i];
                if(typeof baseName !== 'string')
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Interface constructor expects base interface names to be passed in as a string.");
                }
                if(!baseName)
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Empty base interface name passed into Interface constructor.");
                }

                // save the base interface's methods
                var baseInterface = ININ.Web.Common.Interface.getInterface(baseName, namespaceRoot);
                if(!baseInterface)
                {
                    throw ININ.Web.Common.ExceptionFactory.createException("Unknown base interface passed into Interface constructor: " + baseName);
                }
                this._pushMethods(baseInterface.methods);
            }
        }
    },

    _pushMethods : function(methods)
    {
        for(var i = 0, len = methods.length; i < len; ++i)
        {
            var method = methods[i];
            
            // make sure the method is the right type
            if(typeof method !== 'string')
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Interface constructor expects method names to be passed in as a string.");
            }

            // make sure the method has a name
            if(method.length === 0)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Interface constructor expects method names to be non-empty.");
            }

            // make sure we don't already have it, then add it
            if(this.methods.indexOf(method) == -1)
            {
                this.methods.push(method);        
            }
        }
    }
});

// public static methods
ININ.Web.Common.Interface.isInterface = function(object)
{
    return (object.get_methods() && object.get_baseInterfaceNames() && object.get_name());
};

// This method is meant for ensuring an object implements a class. It will throw an exception if it does not.
// It is meant only for debugging and will only be run when debugging is enabled.
ININ.Web.Common.Interface.ensureImplements = function(object, interfaces, onlyCheckMethods)
{
    if(ININ.Web.Common.Debug.isEnabled())
    {
        // check the number of arguments
        if((arguments.length != 2) && (arguments.length != 3))
        {
            throw ININ.Web.Common.ExceptionFactory.createException("Function Interface.ensureImplements called with " + 
              arguments.length  + " arguments, but expected exactly 2 or 3.");
        }

        var errorMsg = ININ.Web.Common.Interface._ensureImplementsReturnErrorMessage(object, interfaces, onlyCheckMethods);
        if(errorMsg)
        {
            throw ININ.Web.Common.ExceptionFactory.createException(errorMsg);
        }
    }
};

// This method check to see if an object implements a class. It will return false if it does not.
// It will be run no matter if debugging is enabled or not.
ININ.Web.Common.Interface.doesImplement = function(object, interfaces, onlyCheckMethods)
{
    // check the number of arguments
    if((arguments.length != 2) && (arguments.length != 3))
    {
        throw ININ.Web.Common.ExceptionFactory.createException("Function Interface.doesImplement called with " + 
          arguments.length  + " arguments, but expected exactly 2 or 3.");
    }

    if(ININ.Web.Common.Interface._ensureImplementsReturnErrorMessage(object, interfaces, onlyCheckMethods))
    {
        return false;
    }

    return true;
};

ININ.Web.Common.Interface.getInterface = function(namespacePath, namespaceRoot)
{
    var namespace = namespaceRoot || window;
    
    var namespaceParts = namespacePath.split('.');

    if (namespace != window)
    {
        namespaceParts.shift();
    }

    for (var i = 0; i < namespaceParts.length; ++i)
    {
        var currentPart = namespaceParts[i];
        namespace = namespace[currentPart];
    }
    
    return namespace;    
};

// private static methods
ININ.Web.Common.Interface._checkInterfaceParameterForNullUndefinedAndObject = function(param)
{
    var validArg;
    
    if(param === null)
    {
        throw ININ.Web.Common.ExceptionFactory.createException("Interface parameter is null.");
    }

    if(param === undefined)
    {
        throw ININ.Web.Common.ExceptionFactory.createException("Interface parameter is undefined.");
    }

    if(typeof param != "object")
    {
        throw ININ.Web.Common.ExceptionFactory.createException("Interface parameter is not of type object.");
    }
}

ININ.Web.Common.Interface._ensureImplementsReturnErrorMessage = function(object, interfaces, onlyCheckMethods)
{
    ININ.Web.Common.Interface._checkInterfaceParameterForNullUndefinedAndObject(interfaces);

    // convert interfaces parameter to array if not already, so we can support both arrays and non-arrays
    if(typeof interfaces.length == "undefined")
    {
        var singleInterface = interfaces;
        ININ.Web.Common.Interface._checkInterfaceParameterForNullUndefinedAndObject(singleInterface);
        
        interfaces = [];
        interfaces.push(singleInterface);
    }
    
    // make sure the array has something in it
    if(interfaces.length == 0)
    {
        throw ININ.Web.Common.ExceptionFactory.createException("No interfaces passed in to check.");
    }

    // iterate over the interface argument
    for(var i = 0, len = interfaces.length; i < len; ++i)
    {
        var curInterface = interfaces[i];
        ININ.Web.Common.Interface._checkInterfaceParameterForNullUndefinedAndObject(curInterface);

        // make sure the interface we have is an interface
        if(curInterface.constructor !== ININ.Web.Common.Interface)
        {
            return "Function Interface.ensureImplements expects interfaces to be instances of Interface.";
        }
        
        if(!onlyCheckMethods)
        {
            // make sure the class implements interfaces
            if(!object.implementsInterface)
            {
                return "Function Interface.ensureImplements: object does not implement any interfaces.";
            }
            
            // make sure the class implements the interface's name
            if(!object.implementsInterface(curInterface))
            {
                return "Function Interface.ensureImplements: object does not implement the " +
                    curInterface.get_name() + " interface.";
            }
        }
        
        // iterate over the interface's methods and make sure the class implements it
        for(var j = 0, methodsLen = curInterface.methods.length; j < methodsLen; j++)
        {
            var method = curInterface.methods[j];
            if((!object[method]) || (typeof object[method] !== 'function'))
            {
                return "Function Interface.ensureImplements: object does not implement the " +
                  curInterface.get_name() + " interface. Method " + method + " was not found.";
            }
        }
    }
    
    return null;
};

// register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// check for prototype and version
ININ.Web.Common.DependencyValidators.requirePrototypeVersion("1.6.1");

// InterfaceImplementation class
ININ.Web.Common.InterfaceImplementation = Class.create(
{
    // constructor
    initialize : function()
    {
        this._interfaceNames = [];
    },

    // destructor
    destroy : function()
    {
        delete this._interfaceNames;
        this._interfaceNames = null;
    },

    // public methods
    addImplementedInterface : function(interfaceObject, namespaceRoot)
    {
        if(!interfaceObject)
        {
            throw ININ.Web.Common.ExceptionFactory.createException("interface is null/undefined");
        }
        
        namespaceRoot = namespaceRoot || window;
                
        // add the interface
        this._addImplementedInterfaceName(interfaceObject.name, namespaceRoot);

        // add the interface's base interfaces
        var baseInterfaceNames = interfaceObject.get_baseInterfaceNames();
        if(baseInterfaceNames)
        {
            for(var i = 0; i < baseInterfaceNames.length; ++i)
            {
                this.addImplementedInterface(ININ.Web.Common.Interface.getInterface(baseInterfaceNames[i], namespaceRoot), namespaceRoot);
            }
        }
    },

    implementsInterface : function(interfaceObject, namespaceRoot)
    {
        return (this._interfaceNames.indexOf(interfaceObject.name) != -1);
    },

    // private methods
    _addImplementedInterfaceName : function(interfaceName, namespaceRoot)
    {
        // make sure interface is actually implemented first
        ININ.Web.Common.Interface.ensureImplements(this, ININ.Web.Common.Interface.getInterface(interfaceName, namespaceRoot), true);
    
        // add interface
        if(this._interfaceNames.indexOf(interfaceName) == -1)
        {
            this._interfaceNames.push(interfaceName);
        }
    }

});

/*global ININ: true, Class: true */

// Register namespaces
ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");


// Map class
ININ.Web.Common.Map = Class.create(
{
    // constructor
    initialize : function()
    {
        this._map = {};
    },

    // destructor
    destroy : function()
    {
        this.removeAll();
        delete this._map;
        this._map = null;
    },

    // methods
    put : function(key, value)
    {
        this._map[key] = value;
    },

    get : function(key)
    {
         return this._map[key];
    },

    remove : function(key)
    {
         delete this._map[key];
    },

    containsKey : function(soughtKey)
    {
         var foundKey = this.get(soughtKey);
         if (foundKey)
         {
             return true;
         }
         else
         {
             return false;
         }
    },

    containsValue : function(soughtValue)
    {
         var key = this.nextKey();
         while (key)
         {
             if (soughtValue == this.get(key))
             {
                 return true;
             }
             key = this.nextKey(key);
         }
         return false;
    },

    removeAll : function()
    {
        for (var key in this._map)
        {
            if(this._map.hasOwnProperty(key))
            {
                this.remove(key);
            }
        }
    },

    size : function()
    {
         var count = 0;
         for (var key in this._map)
         {
            if(this._map.hasOwnProperty(key))
            {
                 count++;
            }
         }
         return count;
    },

    isEmpty : function()
    {
         return this.size() === 0;
    },

    firstKey : function()
    {
         return this.nextKey();
    },

    firstObject : function()
    {
         return this.get(this.firstKey());
    },

    nextKey : function(returnTheKeyAfterThisOne)
    {
        var readyToReturn = false;
        if (!returnTheKeyAfterThisOne)
        {
            // If no arg supplied, just return the key found in the first iteration of the loop!
            readyToReturn = true;
        }

        for (var key in this._map)
        {
            if(this._map.hasOwnProperty(key))
            {
                if (readyToReturn)
                {
                    return key;
                }
                else if (returnTheKeyAfterThisOne == key)
                {
                    readyToReturn = true;
                }
            }
        }
        return null;
    },

    nextObject : function(key)
    {
        return this.get(this.nextKey(key));
    }
});

/*global ININ: true */

ININ.Web.Common.Type.registerNamespace("ININ.Web.Common");

// Ioc class
ININ.Web.Common.IoC = function()
{
    // private member
    var _typeMap = new ININ.Web.Common.Map();
    var _singletonMap = new ININ.Web.Common.Map();

    // public methods
    return {
        register : function(type, implementationType)
        {
            if(!type)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.register is null or undefined: " + type);
            }

            if(!ININ.Web.Common.Interface.isInterface(type))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.register is not an interface");
            }

            if(_typeMap.get(type.get_name()))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type " + type + " already exists in IoC");
            }

            _typeMap.put(type.get_name(), implementationType);
        },

        registerSingleton : function(type, implementationType)
        {
            if(!type)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.registerSingleton is null or undefined: " + type);
            }

            if(!ININ.Web.Common.Interface.isInterface(type))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.registerSingleton is not an interface");
            }

            if(_singletonMap.get(type.get_name()))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type " + type + " already exists in IoC");
            }

            _singletonMap.put(type.get_name(), new implementationType());
        },

        registerSingletonInstance : function(type, instance)
        {
            if(!type)
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.registerSingleton is null or undefined: " + type);
            }

            if(!ININ.Web.Common.Interface.isInterface(type))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type sent in to IoC.registerSingleton is not an interface");
            }

            if(_singletonMap.get(type.get_name()))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Type " + type + " already exists in IoC");
            }

            ININ.Web.Common.Interface.ensureImplements(instance, [type]);

            _singletonMap.put(type.get_name(), instance);
        },

        get : function(type)
        {
            var implementationType = _typeMap.get(type.get_name());
            if(ININ.Web.Common.Utilities.isNullOrUndefined(implementationType))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Could not find implementationType for " + type.get_name());
            }

            return new implementationType();
        },

        getSingleton : function(type)
        {
            var singleton = _singletonMap.get(type.get_name());
            if(ININ.Web.Common.Utilities.isNullOrUndefined(singleton))
            {
                throw ININ.Web.Common.ExceptionFactory.createException("Could not find singleton for " + type.get_name());
            }

            return singleton;
        },

        remove : function(type)
        {
            var typeName = type.get_name();
            if(_typeMap.containsKey(typeName))
            {
                _typeMap.remove(typeName);
            }
        },

        removeSingleton : function(type)
        {
            var typeName = type.get_name();
            if(_singletonMap.containsKey(typeName))
            {
                _singletonMap.remove(typeName);
            }
        }
    };
}();

    return ININ.Web.Common;
});


