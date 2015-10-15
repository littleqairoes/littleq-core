/**
 * The global namespace for LittleQCore utils.
 * Copied from Telescope Project
 * @namespace LittleQCore.utils
 */

LittleQCore.utils = {}

/**
 * Convert a camelCase string to dash-separated string
 * @param {String} str
 */

LittleQCore.utils.camelToDash = function(str) {
	return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Convert an underscore-separated string to dash-separated string
 * @param {String} str
 */

LittleQCore.utils.underscoreToDash = function (str) {
  return str.replace('_', '-');
};

/**
 * Convert a dash separated string to camelCase.
 * @param {String} str
 */

LittleQCore.utils.dashToCamel = function (str) {
  return str.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
};

/**
 * Convert a string to camelCase and remove spaces.
 * @param {String} str
 */

LittleQCore.utils.camelCaseify = function(str) {
  return this.dashToCamel(str.replace(' ', '-'));
};

/**
 * Trim a sentence to a specified amount of words and append an ellipsis.
 * @param {String} s - Sentence to trim.
 * @param {Number} numWords - Number of words to trim sentence to.
 */
LittleQCore.utils.trimWords = function(s, numWords) {
  
  if (!s)
    return s;

  var expString = s.split(/\s+/,numWords);
  if(expString.length >= numWords)
    return expString.join(" ")+"…";
  return s;
};

/**
 * Capitalize a string.
 * @param {String} str
 */
LittleQCore.utils.capitalise = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

LittleQCore.utils.loggedMessageWithTime = function(message) {
	var d = new Date();
	var str = "### "+message+" rendered at "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
  console.log(str);
  return str;
}

LittleQCore.utils.nl2br = function(str) {
  var breakTag = '<br />';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

LittleQCore.utils.scrollPageTo = function(element, target, offsetTop, offsetLeft){
  $(element).scrollTo({top: $(target).offset().top-offsetTop, left: $(target).offset().left-offsetLeft})
}

LittleQCore.utils.getDateRange = function(pageNumber) {
  var now = moment(new Date());
  var dayToDisplay=now.subtract(pageNumber-1, 'days');
  var range={};
  range.start = dayToDisplay.startOf('day').valueOf();
  range.end = dayToDisplay.endOf('day').valueOf();
  // console.log("after: ", dayToDisplay.startOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // console.log("before: ", dayToDisplay.endOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));
  return range;
};

//////////////////////////
// URL Helper Functions //
//////////////////////////

LittleQCore.utils.slugify = function (s) {
  var slug = getSlug(s, {
    truncate: 60
  });

  // can't have posts with an "edit" slug
  if (slug === "edit") {
    slug = "edit-1";
  }

  return slug;
};

LittleQCore.utils.getDomain = function(url) {
  var urlObject = Npm.require('url');
  return urlObject.parse(url).hostname.replace('www.', '');
};

// add http: if missing
LittleQCore.utils.addHttp = function (url) {
  if (url.substring(0, 5) !== "http:" && url.substring(0, 6) !== "https:") {
    url = "http:"+url;
  }
  return url;
};

/////////////////////////////
// String Helper Functions //
/////////////////////////////

LittleQCore.utils.cleanUp = function(s) {
  return this.stripHTML(s);
};

LittleQCore.utils.sanitize = function(s) {
  // console.log('// before sanitization:')
  // console.log(s)
  if(Meteor.isServer){
    s = sanitizeHtml(s, {
      allowedTags: [
        'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
        'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike',
        'code', 'hr', 'br', 'div', 'table', 'thead', 'caption',
        'tbody', 'tr', 'th', 'td', 'pre', 'img'
      ]
    });
    // console.log('// after sanitization:')
    // console.log(s)
  }
  return s;
};

LittleQCore.utils.stripHTML = function(s) {
  return s.replace(/<(?:.|\n)*?>/gm, '');
};

LittleQCore.utils.stripMarkdown = function(s) {
  var html_body = marked(s);
  return this.stripHTML(html_body);
};

// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
LittleQCore.utils.checkNested = function(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments);
  obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
};

// see http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
LittleQCore.utils.getNestedProperty = function (obj, desc) {
  var arr = desc.split(".");
  while(arr.length && (obj = obj[arr.shift()]));
  return obj;
};

// see: http://stackoverflow.com/questions/9399365/deep-extend-like-jquerys-for-nodejs
LittleQCore.utils.deepExtend = function () {
  var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false,
      toString = Object.prototype.toString,
      hasOwn = Object.prototype.hasOwnProperty,
      class2type = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object"
      },
      jQuery = {
        isFunction: function (obj) {
          return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray ||
        function (obj) {
          return jQuery.type(obj) === "array";
        },
        isWindow: function (obj) {
          return obj !== null && obj === obj.window;
        },
        isNumeric: function (obj) {
          return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function (obj) {
          return obj === null ? String(obj) : class2type[toString.call(obj)] || "object";
        },
        isPlainObject: function (obj) {
          if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {
            return false;
          }
          try {
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
              return false;
            }
          } catch (e) {
            return false;
          }
          var key;
          for (key in obj) {}
          return key === undefined || hasOwn.call(obj, key);
        }
      };
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (length === i) {
      target = this;
      --i;
    }
    for (i; i < length; i++) {
      if ((options = arguments[i]) !== null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            // WARNING: RECURSION
            target[name] = ProjectPotential.utils.deepExtend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };