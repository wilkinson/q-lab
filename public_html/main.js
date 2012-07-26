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

    global._gaq.push(['_setAccount', 'UA-33661349-1']);
    global._gaq.push(['_setDomainName', 'qmachine.org']);
    global._gaq.push(['_trackPageview']);

    global.window.onload = function (evt) {
     // This function needs documentation.
        var g_analytics, g_loader;
        if (global.location.protocol === 'https:') {
            g_analytics = Q.lib('https://ssl.google-analytics.com/ga.js');
        } else {
            g_analytics = Q.lib('http://www.google-analytics.com/ga.js');
        }
        g_loader = Q.lib('//www.google.com/jsapi');
        g_analytics.onerror = g_loader.onerror = function (message) {
         // This function needs documentation.
            console.error('Error:', message);
            return;
        };
        g_loader.onready = function (evt) {
         // This function needs documentation.
            if (global.hasOwnProperty('google') === false) {
                return evt.stay('Awaiting "google" object ...');
            }
            global.google.load({
                modules: [
                    {
                        name: 'jquery',
                        version: '1.7.2'
                    },
                    {
                        name: 'visualization',
                        version: '1',
                        packages: [
                            'charteditor'
                        ]
                    }
                ]
            });
            return evt.exit();
        };
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
