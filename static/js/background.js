

if(navigator.userAgent.toLowerCase().match(/mobile/i)) { 

} else {
    let number = Math.floor(Math.random() * 3);

    document.body.style.background = "url('/static/img/background" + number + ".gif')" 
    // document.body.style.backgroundPosition = "center"
    
    document.body.style.backgroundSize = "100vw"
    document.body.style.backgroundRepeat = "no-repeat"
    
}



