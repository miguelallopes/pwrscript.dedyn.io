

if(navigator.userAgent.toLowerCase().match(/mobile/i)) { 
    document.body.style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.74),rgb(69, 69, 139));"
    
    document.body.style.backgroundSize = "100vw"
} else {
    let number = Math.floor(Math.random() * 3);

    document.body.style.background = "url('/static/img/background" + number + ".gif')" 
    // document.body.style.backgroundPosition = "center"
    
    document.body.style.backgroundSize = "100vw"
    document.body.style.backgroundRepeat = "no-repeat"
    
}



