window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display"); /*we added a new class ".display"*/
    }, 4000); /*spin for 4s. */
};

document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout (() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

$("img .js-tilt ").tilt({ /*using tilt.js effect i.e scale on hover. */
    scale: 1.7
})





