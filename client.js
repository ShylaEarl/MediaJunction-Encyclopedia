console.log('js');

$(document).ready(onReady);

function onReady(){

    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");

    /* Toggle mobile menu */
    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML = "<i class='mobile fa fa-bars'></i>";
        } else {
            menu.classList.add("active");
            toggle.querySelector("a").innerHTML = "<i class='mobile fa fa-times'></i>";
        }
    }

    /* Activate Submenu */
    function toggleItem() {
        if (this.classList.contains("submenu-active")) {
            this.classList.remove("submenu-active");
        } else if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");
        } else {
            this.classList.add("submenu-active");
        }
    }

    /* Close Submenu From Anywhere */
    function closeSubmenu(e) {
        let isClickInside = menu.contains(e.target);

        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }
    
    /* Event Listeners */
    toggle.addEventListener("click", toggleMenu, false);
    for (let item of items) {
        if (item.querySelector(".submenu")) {
            item.addEventListener("click", toggleItem, false);
        }
        item.addEventListener("keypress", toggleItem, false);
    }
    document.addEventListener("click", closeSubmenu, false);

    //desktop side nav drop down menu
    // $('.side-menu li').on('click', 'a', function(e){
	  
    //     if ($(this).parent().children('ul').length){
    //         e.preventDefault();
    //         $(this).addClass('active');
    //         $(this).parent().children('ul').slideDown();
    //         setTimeout(function(){ 
    //           $.fn.matchHeight._update();
    //           $.fn.matchHeight._maintainScroll = true;
    //         }, 1000);
    //     }	    
    // });
    
    // $('.side-menu li').on('click', 'a.active', function(e){
    //     e.preventDefault();
    //     $(this).removeClass('active');
    //     $(this).parent().children('ul').slideUp();  
    //     setTimeout(function(){ 
    //       $.fn.matchHeight._update();
    //       $.fn.matchHeight._maintainScroll = true;
    //     }, 1000);
    // });

} //end onReady function

