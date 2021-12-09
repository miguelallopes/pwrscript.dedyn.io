document.addEventListener("DOMContentLoaded", Register)

function Register() {
    menu = document.querySelector("nav ul");
    menu.addEventListener("mouseenter", RenderItems);
    menu.addEventListener("mouseleave", UnrenderItems);
    
    menu.addEventListener("focus", RenderItems);
    menu.addEventListener("focusout", UnrenderItems);
}

function RenderItems(event) {
    let buttons = document.querySelectorAll("nav ul li");
    let num = 0
    
    buttons.forEach(

        function Draw(item) {
            item.className = 'show-menus'
            
            ++num
            item.style.transform = "translate(50%,"+ (60 * num) + "deg)";
            console.log("translate(50%,"+ (60 * num) + "deg)");

            
        },
        num = 0
    )
}

function UnrenderItems(event) {
    let buttons = document.querySelectorAll("nav ul li");

    buttons.forEach(
        function Undraw(item) {
            item.className = ''
        }
    )
}