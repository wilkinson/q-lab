//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 26 Jul 2012

(function (global) {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, nomen: true */

 // Prerequisites

    if (Object.prototype.hasOwnProperty('Q') === false) {
        throw new Error('Method Q is missing.');
    }

 // Declarations

    var Q;

 // Definitions

    Q = Object.prototype.Q;

 // Out-of-scope definitions

    if (global.hasOwnProperty('_gaq') === false) {
     // This creates a global-scope reference for use with Google Analytics.
        global._gaq = [];
    }

 // Google Analytics

    global._gaq.push(['_setAccount', 'UA-33661349-1']);
    global._gaq.push(['_setDomainName', 'qmachine.org']);
    global._gaq.push(['_trackPageview']);

    global.window.onload = function (evt) {
     // This function needs documentation.
        if (global.location.protocol === 'https:') {
            Q.lib('https://ssl.google-analytics.com/ga.js');
        } else {
            Q.lib('http://www.google-analytics.com/ga.js');
        }
        Q.lib('//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
        return;
    };

 // That's all, folks!

    return;

}(Function.prototype.call.call(function (that) {
    'use strict';
 // See the bottom of "quanah.js" for documentation.
    /*jslint indent: 4, maxlen: 80 */
    /*global global: true */
    if (this === null) {
        return (typeof global === 'object') ? global : that;
    }
    return (typeof this.global === 'object') ? this.global : this;
}, null, this)));

//- vim:set syntax=javascript:
