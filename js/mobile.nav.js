let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

let isMenuOpen = false;/*We're setting it to false bcz currently it is not open */

headerMobileBtn.onclick = function(){
    if(!isMenuOpen){
        headerMain.style.display = "flex"; /*We've set flex-direction to column for this so don't worry */
        isMenuOpen = true;
    }
    else if(isMenuOpen){
        headerMain.style.display = "none";
        isMenuOpen = false;
    }
}