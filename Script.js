window.onload = function () { 
    let slides = document.getElementsByClassName('carousel-item'); 
    let slideIndex = 0;

    function addActive(slide) { 
        slide.classList.add('active'); 
    } 

    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 

    function showSlide(index) {
        removeActive(slides[slideIndex]);
        slideIndex = (index + slides.length) % slides.length; // Ensure the index wraps around
        addActive(slides[slideIndex]);
    }

    setInterval(function () { 
        showSlide(slideIndex + 1);
    }, 1500); // Adjust the interval speed (milliseconds)
};
