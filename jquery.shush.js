(function($) {
	$.fn.shush = function(btnSelector) {
		// Cache global variables
		var $form = $(this);
		var $btn = btnSelector || "input[type=submit]";
		var $button, $buttontype;

		if (btnSelector instanceof jQuery) {
			$button = $form.children(btnSelector[0]);
		} else if (typeof(btnSelector) == 'string') {
			$button = $.find(btnSelector)[0];
			if ($button.length == 0) {
				if (window.console) {
					console.error("Couldn't find element with selector " + btnSelector);
					return false;
				}
			}
		} else {
			if (window.console) {
				console.error("Expected parameter type 'string' or 'jQuery', got " + typeof(btnSelector));
				return false;
			}
			
		}

		// passed validation
		$form.submit(function(e) {
			// prevent form from submitting
			e.preventDefault();
			$button.attr("disabled", "disabled");
			return true;
		});
	}
}(window.Zepto || window.jQuery));