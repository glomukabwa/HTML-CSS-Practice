let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if(!isBurgerOpen){
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center"
        isBurgerOpen = true;
    }
    else if (isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = " center, center left 50px,"
        isBurgerOpen = false;
    }
}

/*You'll notice that when you click close, we go back but in the position of the burger menu is the close button.Click home to go back and find it but ask Chat for help cz u've copied the correct code */