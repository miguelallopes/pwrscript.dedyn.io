function hideSearch() {
    document.getElementById("search-form").classList.add("hidden")
}
function showSearch() {
    document.getElementById("search-form").classList.remove("hidden")
}
function hideClock() {

    document.getElementById("g").classList.add("hidden")
    document.getElementById("clock-table").classList.add("hidden")
    document.getElementById("clock-calendar").classList.add("hidden")
}

function showClock() {

    document.getElementById("g").classList.remove("hidden")
    document.getElementById("clock-table").classList.remove("hidden")
    document.getElementById("clock-calendar").classList.remove("hidden")
}

function showAboutMe() {
    document.getElementById("about-me").classList.remove("hidden")

    
}

function hideAboutMe() {
    document.getElementById("about-me").classList.add("hidden")
    
    
}

function showContactMe() {
    document.getElementById("contact-me").classList.remove("hidden")

    
}

function hideContactMe() {
    document.getElementById("contact-me").classList.add("hidden")
    
    
}

function showBlog(){
    document.getElementById("blog").classList.remove("hidden")

}

function hideBlog(){
    document.getElementById("blog").classList.add("hidden")

}

function showProjects(){
    document.getElementById("my-projects").classList.remove("hidden")

}

function hideProjects(){
    document.getElementById("my-projects").classList.add("hidden")

}

// button

function Blog() {
    hideSearch();
    hideClock();
    hideContactMe();
    hideAboutMe();
    hideProjects()
    showBlog()
}

function Social() {
    hideSearch();
    hideClock();
    hideAboutMe();
    hideBlog()
    hideProjects()
    showContactMe();
}

function Search() {
    hideContactMe();
    hideAboutMe();
    showSearch();
    hideBlog()
    hideProjects()
    showClock();
}

function Projects() {
    
    hideSearch();
    hideClock();
    hideContactMe();
    hideBlog()
    hideAboutMe();
    showProjects()
    
}

function AboutMe() {
    hideSearch();
    hideClock();
    hideContactMe();
    hideBlog()
    hideProjects()
    showAboutMe();
}
Search()