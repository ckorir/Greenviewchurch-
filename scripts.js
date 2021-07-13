let menuStatus = false;

let menu = function(){
    let opennav = document.querySelector(".burger");
    let menulist = document.querySelector(".navlinks");
    let menulistUl = document.querySelector(".navlinks ul");

    if(menuStatus === false){
        menulist.style.display = "block";
        
        menuStatus = true;
    }

    else if(menuStatus === true){
        menulist.style.display = "none";
        
        menuStatus = false;
    }

}


