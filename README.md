# JS-Dropdown
Simple drop-down menus with flyout submenus in JavaScript and CSS

This is a set of basic JavaScript (no jQuery) drop-down menus with CSS flyouts that I came up with in order to practice some of the concepts introduced in the initial chapters of "Eloquent JavaScript". This exercise particularly helped to get a handle on closures and IIFEs since it involved looping over a NodeList and passing a unique value to the event listener for each one. I realize there is a pretty straightforward way to do this using jQuery, but since it was a learning exercise I went with plain JavaScript instead.

Setup in HTML is pretty straightforward as can be seen in the template: a set of nested lists with .dropdown and .flyout classes on the appropriate list items to implement the submenus.
