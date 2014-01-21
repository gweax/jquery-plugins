# jQuery plugins

This is a collection of jQuery plugins I wrote.

## jquery.formchanged.js

This plugin returns all form elements that were changed since page load. This is useful if you only want to submit the data that actually changed.

    $("form[name=foo]").formchanged()
    
Will return a jQuery object of all input, textarea, and option elements within the form with name foo, that were changed, that is, where the current value is not the one that was set in the source code. This includes

- input fields
- password fields
- textareas
- checkboxes
- radio buttons
- options of a select box

Please note, that if you manipulate the values or states of those elements by a script, you have to use `.val()` or `.prop()` instead of `.attr()`. The use of `.attr()` to manipulate the value of an element overwrites the original value. So to change the values do it this way:

    $("input[type=text]").val("foo");
    $("input[type=password]").val("t0Ps€cRe7");
    $("textarea").val("long text");
    $("input[type=checkbox]").prop("checked", true);
    $("input[type=radio]").prop("checked", true);
    $("select > option:last").prop("selected", true);
