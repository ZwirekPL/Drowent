
const nav = document.querySelector(".nav");

const sticky = nav.offsetTop;
console.log(sticky)

export function stickyPoint() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
    nav.classList.remove("sticky");
    }
}




