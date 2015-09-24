//Note to self: the style property does not include the styles in an external CSS file, only
//inline styles. So 'display' is initially set to 'none' in CSS.

function dropDownMenus() {
    var menuItems = document.getElementsByClassName('dropdown');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', (function(currentItem) { 
            return function(e) { //Wrap function inside an IIFE in order to be able to pass each 
                                 //event listener a unique value for menuItems[i].
                for (var i = 0; i < menuItems.length; i++) {
                    if (menuItems[i] == currentItem) {
                        continue;
                    }
                    else {
                        menuItems[i].children[1].style.display = 'none';
                    }
                };
                if (currentItem.children[1].style.display == 'block') {
                    currentItem.children[1].style.display = 'none';
                }
                else {
                    currentItem.children[1].style.display = 'block';
                    e.stopPropagation(); //Without this, event will bubble up to the document event listener, 
                                         //which will promptly hide it again and no one will ever see it.
                }
            };
        })(menuItems[i]));
        document.addEventListener('click', (function(currentItem) { 
            return function() {
                    if (currentItem.children[1].style.display == 'block') {    
                        currentItem.children[1].style.display = 'none';
                    }
            };
        })(menuItems[i])); //Hides each item if user clicks anywhere else on the page, including other menu items.
    }
}

window.onload = dropDownMenus;
