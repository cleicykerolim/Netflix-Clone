$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        600:{
        0:{
            items:1
        },
            items:3
        },
        1000:{
            items:5
        }
    }
})

function toggle(){
    var trailer= document.querySelector(".trailer")
    var video= document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}