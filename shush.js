(function($) {

    $.fn.shush = function(btnSelector) {
        // Cache global variables
        var $form = $(this);
        var $btn = btnSelector || "input[type=submit]";
  
        if (!($btn instanceof $)) {
            var btnType = typeof($btn);

            switch (btnType) {
                case "string":
                    $btn = $form.find($btn);

                    if ($btn.length === 0) {
                        if (window.console) {
                            console.error("Couldn't find element with selector " + $btn);
                        }

                        return false;
                    }
                break;

                case "object":
                    $btn = $($btn);
                break;

                default:
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

            $btn
                .attr("disabled", "disabled")
                .addClass("shush-disabled");

            $form
                .unbind("submit")
                .submit();
        });
    }
}(window.Zepto || window.jQuery));
