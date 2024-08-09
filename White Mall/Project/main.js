const toShow = document.querySelectorAll(".showOnScrollRight, .showOnScrollLeft")

function checkScroll(){
}

function openDiv(name){
    const div = document.getElementById(name);
    div.classList.add("open")
}

function closeDiv(name){
    const div = document.getElementById(name);
    div.classList.remove("open")
}

function typeWriter() {
    const typeWriters = document.querySelectorAll(".typeWriter");

    typeWriters.forEach(function(element){
        const text = element.textContent;
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(function() {
                element.textContent = text.substring(0, i + 1);
            }, 30*i);
        }
    })
}

function loop(){
    checkScroll();

    loop();
}