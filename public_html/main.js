//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 26 Jul 2012

(function (global) {
    'use strict';

 // Pragmas

    /*jslint devel: true, indent: 4, maxlen: 80, nomen: true */

 // Prerequisites

    if (Object.prototype.hasOwnProperty('Q') === false) {
        throw new Error('Method Q is missing.');
    }

 // Declarations

    var Q, draw_sample_chart;

 // Definitions

    Q = Object.prototype.Q;

    draw_sample_chart = function () {
     // This function needs documentation.
        var d_url, gviz, open_editor, wrapper;
        d_url = 'https://spreadsheets.google.com/spreadsheet/tq' +
                '?key=tnxuU73jT7eIL-aZke85e3A&pub=1&range=A1:E13';
        gviz = global.google.visualization;
        open_editor = function () {
         // Handler for the "Open Editor" button.
            var editor = new gviz.ChartEditor();
            gviz.events.addListener(editor, 'ok', function () {
             // This function needs documentation.
                wrapper = editor.getChartWrapper();
                wrapper.draw(global.document.getElementById('visualization'));
                return;
            });
            editor.openDialog(wrapper);
            return;
        };
        wrapper = new gviz.ChartWrapper({
            dataSourceUrl: d_url,
            containerId: 'visualization',
            chartType: 'LineChart'
        });
        wrapper.draw();
        $('#edit-button').click(function () {
         // This function needs documentation.
            open_editor();
            return;
        });
        return;
    };

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
        var first, g_analytics, g_loader;
        first = true;
        g_analytics = Q.avar();
        g_loader = Q.avar();
        g_analytics.onerror = g_loader.onerror = function (message) {
         // This function needs documentation.
            if (first === true) {
                first = false;
                console.error('Error:', message);
            }
            return;
        };
        g_analytics.onready = function (evt) {
         // This function loads Google Analytics.
            var temp;
            if (global.location.protocol === 'https:') {
                temp = Q.lib('https://ssl.google-analytics.com/ga.js');
            } else {
                temp = Q.lib('http://www.google-analytics.com/ga.js');
            }
            temp.onerror = function (message) {
             // This function needs documentation.
                return evt.fail(message);
            };
            temp.onready = function (temp_evt) {
             // This function needs documentation.
                temp_evt.exit();
                return evt.exit();
            };
            return;
        };
        g_loader.onready = function (evt) {
         // This function draws a sample chart if and only if the imports from
         // Google Loader have loaded successfully.
            if ((global.google.hasOwnProperty('visualization') === false) ||
                    (global.hasOwnProperty('jQuery') === false)) {
             // This would be very unexpected!
                return evt.stay('Awaiting results from Google Loader ...');
            }
            draw_sample_chart();
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
