window.onload = () => {
    let iframe = document.getElementById("iFramer");
    let mainContainer = document.getElementById("mainContainer");
    if(window.innerWidth < 600) {
        document.getElementsByClassName("link")[0].style.marginLeft = "";
        document.getElementsByClassName("link")[0].style.left = "30%";
        document.getElementsByClassName("link")[1].style.right = "30%";
        document.getElementById("brandStatement").innerText = "Austin Koeppel, a full stack developer.";
    }
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // localStorage.getItem("siteVisitedBefore");
    }
    hider("lightBulbContainer", true);
    let modal = document.getElementById("contactModal");
    document.getElementById("contact").onclick = () => {
        document.getElementsByClassName("modal")[0].style.display = "block";
    }

    document.getElementById("closeButton").onclick = () => {
        modal.style.display = "none";
    }
    document.getElementsByClassName("vertical-nav")[0].onmouseenter = () => {
        document.getElementById("brandName").style.color = "white";
        if(window.innerWidth < 600) {
            document.getElementById("brandName").innerText = "Portfolio";
        }
        Array.from(document.getElementsByClassName("obscure-cards")).forEach(element => {
            element.classList.add("opaque-cards")
        });
        // console.log("In here");
    }

    document.getElementsByClassName("vertical-nav")[0].onmouseleave = () => {
        document.getElementById("brandName").style.color = "rgb(0,0,0,0)";
        Array.from(document.getElementsByClassName("obscure-cards")).forEach(element => {
            element.classList.remove("opaque-cards")
        });
    }

    document.getElementById("porfolioItem1").onclick = () => {
        iframe.src = "https://austinkoeppel.github.io/clicky-app/";
        fadeOut(mainContainer);
        fadeIn(iframe);
    }

    document.getElementById("porfolioItem2").onclick = () => {
        // fadeOut(iframe);
        iframe.src = "https://austinkoeppel.github.io/clicky-app/";
        fadeOut(mainContainer);
        fadeIn(iframe);
    }

    document.getElementById("porfolioItem3").onclick = () => {
        // fadeOut(iframe);
        iframe.src = "http://sleepy-anchorage-90426.herokuapp.com/";
        fadeOut(mainContainer);
        fadeIn(iframe);
    }

    document.getElementsByClassName("brand")[0].onclick = () => {
        iframe.src = "";
        fadeOut(iframe);
        fadeIn(mainContainer);
    }

    window.onclick = (e) => {
        if(e.target == modal) {
            modal.style.display = "none"
        }
    }
    // setTimeout(() => {
    //     document.getElementsByTagName("body")[0].onclick = loadMainSite;
    // }, 2500);
}

function loadMainSite() {
    document.getElementsByTagName("body")[0].onclick = () => {
        return false;
    }
    hider("lightBulbContainer",true);
    hider("main-container",false);
    document.getElementById("css-swap-spot").href = "./assets/css/lights-off.css";
}

function hider(element, hide) {
    if(document.getElementById(element) && hide) {
        document.getElementById(element).classList.add("hidden");
    }
    if(document.getElementById(element) && !hide) {
        document.getElementById(element).classList.remove("hidden");
    }
}

// fade out
//http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
function fadeOut(el){
    return new Promise((resolve, reject) => {
        if(el.style && el.style.opacity !== 1 && el.style.display !== "none")
        {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = "none";
                    resolve();
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
        else {
            // reject("We are calling it on a non-visible element");
        }
    });
    
}

// fade in
  
function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}