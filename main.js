const password = "PASSWORD";
let role = localStorage.getItem("rle");

const toShow = document.querySelectorAll(".showOnScrollRight, .showOnScrollLeft")

function openDiv(name){
    const div = document.getElementById(name);
    div.classList.add("open")
}

function closeDiv(name){
    const div = document.getElementById(name);
    div.classList.remove("open")
}

function hideDiv(name){    
    const div = document.getElementById(name);
    div.classList.add("hidden");    
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

function setRole(r){    
    if (r == "operator" || r == "shopKeeper"){        
        lock();
    }

    localStorage.setItem("rle", r);
    role = r
    if (r != "operator"){
        document.querySelectorAll(".operator").forEach(function(element){
            element.remove();
        })
    }
    if (r != "shopKeeper"){
        document.querySelectorAll(".shopKeeper").forEach(function(element){
            element.remove();
        })
    }
    if (r != "customer"){
        document.querySelectorAll(".customer").forEach(function(element){
            element.remove();
        })
    }
    hideDiv('selection');
}

function lock(){
    let correct = false;
    while (!correct){
        const inp = prompt("Enter the password to open the operator window.", "Password here");
        if (inp == null){
            location.replace("home.htm");
            break;
        }
        else if (inp == password){
            correct = true;
        }            
        else{
            const conf = confirm("Password was entered incorrectly. Please enter again.");
            if (!conf) {
                location.replace("home.htm");
                break;
            }
        }
    }    
}

const nav = document.getElementById("topnav");
window.onscroll = function(){        
    if (window.scrollY >= 50){
        nav.classList.add("sticky")
    }    
    else if (location.pathname.split("/").slice(-1) == "index.htm"){
        nav.classList.remove("sticky")
    }
}

console.log(role)
if (role == null){
    document.getElementById("selection").classList.remove("hidden")
}
else{
    setRole(role);
}