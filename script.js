let slideIndex = 1
showSlide(slideIndex)

function changeSlides(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    let slideImages = document.querySelectorAll(".js-slideImages")

    if (n > slideImages.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slideImages.length

    for (let i = 0; i < slideImages.length; i++)
        slideImages[i].style.display = "none"

    slideImages[slideIndex - 1].style.display = "inline-block"

}