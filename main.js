const password = "PASSWORD";
const roleLibrary = "ROLE"
let role = localStorage.getItem(roleLibrary);

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

function setRoleSimple(r){
    localStorage.setItem(roleLibrary, r)
}

function setRole(r){    
    if (r == "operator" || r == "shopKeeper"){        
        lock();
    }

    setRoleSimple(r);
    role = r
    document.querySelectorAll(".operator, .shopKeeper, .customer").forEach(function(element){
        element.hidden = false;
    })

    if (r != "operator"){
        document.querySelectorAll(".operator").forEach(function(element){
            element.hidden = true;
        })
    }
    if (r != "shopKeeper"){
        document.querySelectorAll(".shopKeeper").forEach(function(element){
            element.hidden = true;
        })
    }
    if (r != "customer"){
        document.querySelectorAll(".customer").forEach(function(element){
            element.hidden = true;
        })
    }
    console.log(r)
    hideDiv('selection');
}

function lock(){
    let correct = false;
    while (!correct){
        const inp = prompt("Enter the password to open the operator window.", "Password here");
        if (inp == null){
            location.replace("index.htm");
            break;
        }
        else if (inp == password){
            correct = true;
        }            
        else{
            const conf = confirm("Password was entered incorrectly. Please enter again.");
            if (!conf) {
                
                location.replace("index.htm");
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

const roles = ["customer", "operator", "shopKeeper"];
if (!roles.includes(role)){
    document.getElementById("selection").classList.remove("hidden")
}
else{
    // setRoleSimple(role);
    setRole(role);
}