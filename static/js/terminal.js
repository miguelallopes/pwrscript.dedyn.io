let terminal_me



function executeTerminalCommand(input=document.getElementById("terminal-input").value) {
    
    if (input.startsWith("echo ")) {
        document.getElementById("terminal-output").insertAdjacentHTML('beforeend', '<ul class="terminal-output-indicator">'+input.substring(5)+'</ul>')
    } else if (input.startsWith("help")) {
        
        document.getElementById("terminal-output").insertAdjacentHTML('beforeend', '<ul>'+'echo [text]'+'</ul>')
    }

}

document.getElementById("terminal-input").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        document.getElementById("terminal-enter").click()
    }
})