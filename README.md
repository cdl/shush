# shush.js
Duplicate form entries suck. This should help combat them.
* * *

Shush is a simple and easy to use plugin for stopping duplicate form submissions.

## Usage

Link shush.jquery.js into your page, and run the ```.shush()``` method on the selector for your form. For example:

```
$("form#login").shush();
```

It's that easy. It also optionally takes in two function parameters. The first is ran before the form is disabled and submitted. If it returns ```true```, the form is disabled and submitted. If ```false```, the form is re-enabled and the second anonymous function is ran.

```
$("form#login").shush(function() {
	// do whatever you want in here, like run a custom validator
	// return true because it's considered valid
	return true;
}, function() {
	// if the first function returns false, this will be ran
	// (used to show error messages)
	$("#errorMessage[data-reason='invalid']").slideDown(200);
});
```

## Thanks

Thanks to @nathggns for his help with this.