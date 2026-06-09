
/*Begnining navigation menu*/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "160px";
  document.getElementById("main").style.marginLeft = "160px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*End of navigation menu*/
/*------------------------*/

/*Begining of gallery pictures full screen view*/
const images = document.querySelectorAll(".img-card img, img-card-abstract img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});
/*End of gallery pictures full screen view*/
