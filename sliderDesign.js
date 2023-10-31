function ChangeSlide(direction){
    const slides = document.querySelectorAll(".slide");
    let newSlide = 0;
    for(let i = 0; i < slides.length; i++){
        if(slides[i].attributes.length == 2){
            if(i + direction >= slides.length){
                newSlide = 0;
            }
            else if(i + direction < 0){
                newSlide = slides.length - 1;
            }
            else{
                newSlide = i + direction;
            }
            slides[i].removeAttribute("data-active");
            slides[newSlide].setAttribute("data-active", "");
            break;
        };
    }
}