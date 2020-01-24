let slideIndex = 0;
carousel();

function carousel(){
    let i;
    let x = document.getElementsByClassName("my-slides");
    for (let index = 0; index < x.length; index++) {
        x[index].style.display = "none";
        
    }
    slideIndex++;
    if (slideIndex >= x.length) {slideIndex = 0}
    x[slideIndex].style.display ="block";
    setTimeout(carousel, 2000);// Cambia imagen cada 2 seg
    
}

function dropIt () {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    console.log("ahsdfha");
    // if(!event.target.matches('.dropbtn')) {
    //     let dropdowns = document.getElementsByClassName("dropdown-content");
    //     let i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //         let openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains("show")) {
    //             openDropdown.classList.remove("show");
    //         }
    //     }
    // }
}