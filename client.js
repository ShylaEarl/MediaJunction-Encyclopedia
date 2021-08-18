console.log('js');

$(document).ready(onReady);

function onReady(){

    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item, .subitem");
    const buttons = document.querySelectorAll(".triangle-symbol");
    const submenus = document.querySelectorAll(".submenu");

    /* Event Listeners */
    toggle.addEventListener("click", toggleMenu);
    for (button of buttons) {
        button.addEventListener("click", toggleSubmenu);
    }
    for (item of items) {
        item.addEventListener("click", toggleActive);
    }
    document.addEventListener("click", closeSubmenu);

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

    /* Toggle submenus */
    function toggleSubmenu() {
        console.log($(this).parent().parent().children(".submenu"));
        let subList = $(this).parent().parent().children(".submenu");
        console.log(subList);
        if(this.classList.contains("submenu-active")){
            subList.removeClass("submenu-active");
        } else {
            subList.addClass("submenu-active");
        }
    }

    /* Toggle active Item */
    function toggleActive() {
        console.log($(this));
        console.log(items);
        if(this.classList.contains("highlight-active")){
            this.classList.remove("highlight-active");
        } else if (!this.classList.contains("highlight-active") && menu.querySelector(".highlight-active")) {
            for (item of items){
                item.classList.remove("highlight-active"); 
            }
            this.classList.add("highlight-active");
        } else {
            this.classList.add("highlight-active");
        }
    }

    /* Close Submenu From Anywhere */
    function closeSubmenu(e) {
        let isClickInside = menu.contains(e.target);

        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }

} //end onReady function
    

