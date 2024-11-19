const slideIndex = 1
showSlides(slideIndex)

const plusSlides = n => 
    showSlides(slideIndex += n)

const currentSlide = n => 
    showSlides(slideIndex = n)

const showSlides = n => {
    var i
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot')
    if(n > slides.length) { slideIndex =  }
    if(n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'        
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[,]
    }
}
 