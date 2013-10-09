(function($) {
	$.fn.shush = function(btnSelector) {
		// Cache global variables
		var $form = $(this);
		var $btn = btnSelector || "input[type=submit]";

		if (typeof($btn) == 'string') {
			$btn = $form.find($btn)[0];
			if ($btn.length == 0) {
				if (window.console) {
					console.error("Couldn't find element with selector " + btnSelector);
					return false;
				}
			}
		} else if ($btn instanceof Object) {
			$btn = $form.children(btnSelector[0])[0];
		} else {
			if (window.console) {
				console.error("Expected parameter type 'string', 'jQuery', or 'Object', got " + typeof(btnSelector));
				return false;
			}
			
		}

		// passed validation
		$form.submit(function(e) {
			// prevent form from submitting
			e.preventDefault();
			$($btn).attr("disabled", "disabled");
			$($btn).addClass('shush-disabled');
			$form.unbind('submit').submit();
		});
	}
}(window.Zepto || window.jQuery));