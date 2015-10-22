function fadeIn(el) {
  
  el.style.opacity = 0;
  el.style.display = 'block';
    
  var counter = 0;
  var fadeInt = setInterval(function() {
    if (counter < 1.05) {
      el.style.opacity = counter;
      counter += 0.05;
    } else {
    	clearInterval(fadeInt);
    }
  }, 8);
  
}
  
function fadeOut(el) {
  
  var counter = 1;
  var fadeInt = setInterval(function() {
    if (counter > 0) {
      el.style.opacity = counter;
      counter -= 0.05;
    } else {
    	clearInterval(fadeInt);
    	el.style.display = "none";
    }
  }, 8);
  
}


//Adds "open" and "close" event listeners to drop-down menus and "close" listener to document.body

function dropDownMenus() {
    
  var menuItems = document.querySelectorAll('.dropdown');
  
  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', showDropDown(menuItems[i]));
  }
  
  document.addEventListener('click', documentListener);
      
  function showDropDown(selectedMenu) {
    
      return function(event) {
        
          for (var i = 0; i < menuItems.length; i++) {
            
              var dropDownMenu = menuItems[i].children[1];
              
              if (menuItems[i] == selectedMenu && dropDownMenu.style.display == 'block') {
                  fadeOut(dropDownMenu);
              } else if (menuItems[i] == selectedMenu) {
                  fadeIn(dropDownMenu);
              } else {
                  fadeOut(dropDownMenu);
              }
              
          }
          
          event.stopPropagation();
          
      };
  }
    
  function documentListener() {
    
      for (var i = 0; i < menuItems.length; i++) {
          fadeOut(menuItems[i].children[1]);
      }
      
  }
    
}

window.onload = dropDownMenus;
