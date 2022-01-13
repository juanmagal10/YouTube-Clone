let contenedor = document.querySelector("#contenedor");
let navLi = document.querySelectorAll(".nav-li");
// for (let i = 0; i < 9; i++) {
//     navLi[i].style.color = "rgba(0,0,0,0)";
// }


document.querySelector("#boton-menu").addEventListener("click", () => {
    contenedor.classList.toggle("active");
    for (let i = 0; i < 9; i++) {
        navLi[i].classList.toggle("transparent");
        navLi[i].style.color = "rgb(0,0,0)";
    }
    if (navLi[0].classList.contains("transparent")) {
        for (let i = 0; i < 9; i++) {
            navLi[i].style.color = "rgba(0,0,0,0)";
            
        }
    }
       
});
const comprobarAncho = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove("active");
        for (let i = 0; i < 9; i++) {
            navLi[i].style.color = "rgba(0,0,0,0)";
        }
    } else {
         contenedor.classList.add("active");
        for (let i = 0; i < 9; i++) {
            navLi[i].style.color = "rgb(0,0,0)";
        }
    }
}
comprobarAncho();

window.addEventListener("resize", () => {
    comprobarAncho();
});