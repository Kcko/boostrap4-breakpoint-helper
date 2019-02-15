/*!
 * Bootstrap Breakpoint Helper
 *
 *
 * @author  Roman Janko <admin@rjwebdesign.cz>
 * @version  1.0.0
 *
 */

;(function() {
    'use strict';

    (function ($) {
        $.fn.bootstrapBreakpointHelper = function(options) {

            var settings = $.extend({}, $.fn.bootstrapBreakpointHelper.defaults, options);
           
            if (this.length == 0) {
                debug('Selector invalid or missing!');
                return;
            } else if (this.length > 1) {
                return this.each(function() {
                    $.fn.bootstrapBreakpointHelper.apply($(this), [settings]);
                });
            }

        
            var $this = $(this);
            var $window = $(window);
            var selectedBreakpoint = {};
            
            var calculate = function() {
                
                var winW = $window.width();
                var selectedBreakpoint = settings.lowerBreakpoint;
                $.each(settings.breakpoints, function(k, v){
                    if (winW >= v) {
                        selectedBreakpoint = k;
                        return false;
                    }   
                });

                selectedBreakpoint = {
                    'breakpoint': selectedBreakpoint,
                    'resolution': winW
                }

                // internal data inside 
                $this.data('breakpoint', selectedBreakpoint.breakpoint);
                $this.data('resolution', winW);

                // data attribute
                $this.attr('data-breakpoint', selectedBreakpoint.breakpoint);
                $this.attr('data-resolution', winW);

                // trigger publisher
                $.publish("jq-bootstrap-breakpoint-helper/onresolutionchange", [selectedBreakpoint]);

            };


            var debounce;
            $window.resize(function(){
                clearTimeout(debounce);
                debounce = setTimeout(calculate, 250);
            });

            calculate();  
        };


        function debug(message) {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };


        $.fn.bootstrapBreakpointHelper.defaults = {
            breakpoints: {
                'xl': 1200,
                'lg': 992,
                'md': 768,
                'sm': 576,
                'xs': 0
            },
            lowerBreakpoint: 'xs'	
        };



    })(jQuery);
})();
