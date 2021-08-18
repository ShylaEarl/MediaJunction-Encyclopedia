console.log('js');

$(document).ready(onReady);

function onReady(){

    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");
    const subitems = document.querySelectorAll(".subitem");


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
        if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");
        } else if (this.classList.contains(".flag")){
            this.classList.remove("submenu-active");
        } else {
            this.classList.add("submenu-active");
        }
    }

    // if (this.classList.contains("submenu-active")) {
    //     this.classList.remove("submenu-active");
    // } else if (this.classList.contains(".submenu-active") && this.classList.contains(".flag")) {
    //     menu.querySelector(".submenu-active").classList.remove("submenu-active");
    //     this.classList.add("submenu-active");
    // } else {
    //     this.classList.add("submenu-active");
    // }

    function toggleSingleSubItem() {
        if (this.classList.contains("subitem-active")) {
            this.classList.remove("subitem-active");
        } else if (menu.querySelector(".subitem-active")) {
            menu.querySelector(".subitem-active").classList.remove("subitem-active");
            this.classList.add("subitem-active");
            this.closest(".item").classList.add("flag");
        } else {
            this.classList.add("subitem-active");
            this.closest(".item").classList.add("flag");
        }
    }

    // function toggleSingleItem() {
    //     if (menu.querySelectorAll(".active-highlight")) {
    //         menu.querySelector(".active-highlight").classList.remove("active-highlight");
    //     }
    //     if (this.classList.contains("active-highlight")){
    //         if(this.querySelector(".submenu")) {
    //             this.classList.remove("active-highlight");
    //             this.children().querySelector(".active-highlight").classList.remove("active-highlight");
    //         }
    //     } else {
    //         this.classList.add("active-highlight");
    //     }
    // }

    function toggleSingleItem() {
        if (this.classList.contains("item-active") && !this.classList.contains("submenu-active")) {
            this.classList.remove("item-active");
        } else if (menu.querySelector(".item-active")) {
            if (!this.classList.contains("submenu-active")) {
                menu.querySelector(".item-active").classList.remove("item-active", "submenu-active", "flag");
                this.classList.add("item-active");
            } else {
                menu.querySelector(".item-active").classList.remove("item-active", "submenu-active", "flag");
            }
        } else if (this.classList.contains("flag")) {
            this.classList.remove("item-active", "submenu-active", "flag");
        } else {
            this.classList.add("item-active");
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

        if (item.classList.contains("item")) {
            item.addEventListener("click", toggleSingleItem, false);
        }
        item.addEventListener("keypress", toggleSingleItem, false);
    }

    for (let subitem of subitems) {
        subitem.addEventListener("click", toggleSingleSubItem, false);
        subitem.addEventListener("keypress", toggleSingleSubItem, false);
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

