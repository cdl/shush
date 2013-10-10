# shush.js
Duplicate form entries suck. This should help combat them.
* * *

Shush is a simple and easy to use plugin for stopping duplicate form submissions.

## Usage

Link shush.js/shush.min.js into your page, and run the ```.shush()``` method on the selector for your form. For example:

```
$("form#login").shush();
```

It's that easy. It also optionally takes in a single paramether (either a string or a jQuery/Zepto object) that is considered your submit button. Otherwise, it'll just use the submit input that's inside the form .shush() is called on.

```
$("form#login").shush("button#submit");
```

## Disclaimer

This plugin is still under heavy development and has yet to be majorly tested. Use it at your own risk.

### Thanks

Thanks to the following people for their help:
* [@nathggns](https://github.com/nathggns)
* [@elidupuis](https://github.com/elidupuis)