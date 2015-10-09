function dropDownMenus() {
    
    var menuItems = document.querySelectorAll('.dropdown');
    
    //Another way to do the following would be to make menuItems an array and use forEach, thus eliminating
    //having to figure out how to pass the callback function a unique value for i in each iteration.
    
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', showDropDown(menuItems[i]));
    }
    
    document.addEventListener('click', documentListener);
        
    //Returns a function so that a unique value for the counter can be passed from the loop above.
    
    function showDropDown(selectedMenu) {
        return function(event) {
            for (var i = 0; i < menuItems.length; i++) {
                if (menuItems[i] == selectedMenu && menuItems[i].children[1].style.display == 'block') {
                    menuItems[i].children[1].style.display = 'none';
                } else if (menuItems[i] == selectedMenu) 
                    menuItems[i].children[1].style.display = 'block';
                else {
                    menuItems[i].children[1].style.display = 'none';
                }
            }
            event.stopPropagation(); //Otherwise document listener will fire and immediately hide the selected menu.
        }
    }
    
    function documentListener() {
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].children[1].style.display = 'none';
        }
    }
    
}

window.onload = dropDownMenus;
