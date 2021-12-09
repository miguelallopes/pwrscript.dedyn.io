function greet() {
    var actual_time = new Date();
    var hour = actual_time.getHours()
    
    switch (true) {
        case (hour >= 19 || hour < 6):
            
            return "Good night, what you want to search?"
        case (hour < 12):
                
            return "Good morning, how are you feeling today?"
        case (hour <= 18):
            return "Good aftermoon, let's find something..."
    
    }
}

document.getElementById('search-term').placeholder = greet();

function updateTime() {
    let data = new Date()
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();

    if (hour >= 19 || hour <= 6) {
        document.getElementById("sun-state-image").src = "/static/img/moon.png"
    } else {

        document.getElementById("sun-state-image").src = "/static/img/sun.png"
    }

    let month = ["jan.", "feb.", "mar.", "apr.", "may", "jun.", "jul.","aug.","sep.","oct.", "nov.","dec."]

    if (hour.toString().length == 1) {
        hour = "0" + hour
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute
    }
    if (second.toString().length == 1) {
        second = "0" + second
    }

    document.getElementById("clock_hour").innerText = hour;
    document.getElementById("clock_minute").innerText = minute;
    //document.getElementById("clock_second").innerText = second;
    document.getElementById("clock_day").innerText = data.getDate()
    document.getElementById("clock_month").innerText = month[data.getMonth()]
    document.getElementById("clock_year").innerText = data.getFullYear();

    switch (data.getDay()) {
        
        case 0:
            document.getElementById("clock_weekday").innerText = "Sunday,"
            break;
        case 1:
            document.getElementById("clock_weekday").innerText = "Monday,"
            break;
        case 2:
            document.getElementById("clock_weekday").innerText = "Tuesday,"
            break;
        case 3:
            document.getElementById("clock_weekday").innerText = "Wednesday,"
            break;
        case 4:
            document.getElementById("clock_weekday").innerText = "Thursday,"
            break;
        case 5:
            document.getElementById("clock_weekday").innerText = "Friday,"
            break;
        case 6:
            document.getElementById("clock_weekday").innerText = "Saturday,"
            break;
    
        default:
            break;
    }
}

setInterval(updateTime,1000)
