

function ParseFeed() {

    let xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    
    xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET", "/rss.xml", false)
    xmlhttp.send()
    return xmlhttp.responseXML;
}

function RenderFeed() {
    var article = ParseFeed().getElementsByTagName("item")
    for (let index = 0; index < article.length; index++) {
        let image = article[index].getElementsByTagName("enclosure")[0].getAttribute("url")
        image = "/static/img/pwrscript.png"
        document.getElementById("blog").insertAdjacentHTML('afterbegin', '<div class="blog-post-card"> <div class="blog-data"><a href="'+article[index].getElementsByTagName("link")[0].textContent+'">  <h2>' + article[index].getElementsByTagName("title")[0].textContent + '</h2> </a><span>' + article[index].getElementsByTagName("description")[0].textContent + '</span></div></div>')
        document.querySelector(".blog-post-card > a[href='https://www.pwrscript.dedyn.io']")
    }
    
        
}

RenderFeed()