const header= documant.queryselector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 80);
} )