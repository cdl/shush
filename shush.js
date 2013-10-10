(function($) {

    $.fn.shush = function(btnSelector) {
        // Cache global variables
        var $form = $(this);
        var $btn = btnSelector || "input[type=submit]";
  
        if (!($btn instanceof $)) {
            // if $btn (either the passed parameter or input[type=submit] selector)
            // isn't already a jQuery object
            var btnType = typeof($btn);

            switch (btnType) {
                // check the type $btn
                case "string":
                    // if it's a string (e.g.: the default "input[type=submit]")
                    // find the button in the DOM within form.
                    $btn = $form.find($btn);

                    // if it can't find the button in the form
                    if ($btn.length === 0) {
                        // error and break out of the function
                        if (window.console) {
                            console.error("Couldn't find element with selector " + $btn);
                        }

                        return false; 
                    }
                break;

                case "object":
                    // if it's an object (e.g.: HTMLElement) turn it into a
                    // Zepto or jQuery object
                    $btn = $($btn);
                break;

                default:
                    // if it's none of these things, error + return out
                    if (window.console) {
                        console.error("Expected parameter type 'string', 'jQuery', 'Zepto', or 'Object', got " + typeof(btnSelector));
                    }

                    return false;
                break;
            }
        }

        // passed validation
        $form.submit(function(e) {
            e.preventDefault();

            // disable the button, add
            // .shush-disabled to it
            $btn
                .attr("disabled", "disabled")
                .addClass("shush-disabled");

            // unbind this event handler and then submit it
            $form
                .unbind("submit")
                .submit();
        });
    }
}(window.Zepto || window.jQuery));
