const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

let timeout = setTimeout(AutoChange, 5000, 1);

rightButton.addEventListener("click", () => {
    clearTimeout(timeout);
    timeout = setTimeout(AutoChange, 5000, 1);
    ChangeSlide(1);
});

leftButton.addEventListener("click", () => {
    clearTimeout(timeout);
    timeout = setTimeout(AutoChange, 5000, -1);
    ChangeSlide(-1);
});


function AutoChange(direction){
    ChangeSlide(direction);
    timeout = setTimeout(AutoChange, 5000, direction);
}

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