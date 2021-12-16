class Project {
    constructor(data, type="github") {
        this.name = data.name;
        this.url = data.html_url;
        this.description = data.description;
        this.data = data;
        this.type = type;
        if (type == "gitlab") {
            this.image = data.avatar_url
            this.url = data.web_url
        } else {
            /*
            fetch(this.url).then(
                request => {
                    request.text().then(contents => {
                        this.image = new DOMParser().parseFromString(contents,"text/html").querySelector('meta[property="og:image"]').content
                    })
                    
                }

            )
            */

          
            if (this.name == "PWRCord") {
                this.image = "static/img/discord.png"
            } else if (this.name == "GlobalProgramLib") {

                this.image = "static/img/globalprogramlib.png"
            
        } else if (this.name == "PWRUPnPMineExpose") {

            this.image = "static/img/PWRUPnPMineExpose.png"
        }
     else if (this.name == "Calculadora") {

        this.image = "static/img/calculadoralogo.png"
    }
    else if (this.name == "crafatar.py") {

       this.image = "static/img/crafatar.png"
   }
   else if (this.name == "PWRMod") {

      this.image = "static/img/pwrmod.png"
  }
        }

      }

}

let loaded_projects = []

let loaded_social_contacts = {}


async function load_projects() { 
    let projects = []

    // Get project list to fetch
    let projects_response = await fetch("/static/json/projects.json")

    if (projects_response.ok) {
        let projects_json = await projects_response.json();

        if (projects_json.version == 1) {
            
            projects_json.github.forEach(project => {
                projects.push(
                    fetch("https://api.github.com/repos/" + project).then(
                                    
                    async(response) => await response.json()).then(
                        async(data) => {
                            loaded_projects.push( new Project(data) )
                            
                        }
                )
                )
            });

            projects_json.gitlab.forEach(project => {
                projects.push(
                    fetch("https://gitlab.com/api/v4/projects/" + project).then(
                                    
                    async(response) => await response.json()).then(
                        async(data) => {
                            loaded_projects.push( new Project(data, "gitlab") )
                            
                        }
                )  
                )
            });
            
        }
    }

    return Promise.all(projects).then(
        function l () {
            document.getElementById("projects-loader").remove()

            if (loaded_projects.length == 0) {
                document.getElementById("my-projects").insertAdjacentHTML("afterbegin", '<h2 style="text-align: center;color:white;vertical-align: middle;">Coming Soon</h2>')
                return
            }

            loaded_projects.sort((a,b) => {
                let name_a = a.name.toLowerCase(), name_b = b.name.toLowerCase();

                if (name_a < name_b) {
                    return -1;
                }

                if (name_a > name_b) {
                    return 1;
                }

                return 0;
            })

            loaded_projects.forEach( project => {
                    document.getElementById("my-projects").innerHTML += '<div class="project"><br><img src="' + project.image + '"><h4 class="project-title"> <a href="' + project.url + '">' + project.name + '</a></h4><span class="project-summary">' + project.description+'</span></div>'
            
            
                
            }

            )
        }
    ).catch(reason => {
        
            document.getElementById("projects-loader").remove()
        document.getElementById("my-projects").insertAdjacentHTML("afterbegin", '<h2 style="text-align: center;color:white;vertical-align: middle;">Unable to load projects</h2>')
                
    })
}

function showAdequateProjects() {
    let data = document.getElementById("project-search").value

    data = data.toLowerCase()
    
    if (data == '') {

        document.querySelectorAll(".project").forEach( project => {
                project.remove();
        })


        loaded_projects.forEach( project => {
            document.getElementById("my-projects").innerHTML += '<div class="project"><br><img src="' + project.image + '"><h4 class="project-title"> <a href="' + project.url + '">' + project.name + '</a></h4><span class="project-summary">' + project.description+'</span></div>'
    
    
        
    }
    )
    
    document.getElementById("project-search").focus()
        return ;
    }
    
    

    document.querySelectorAll(".project").forEach( project => {
        if (!(project.getElementsByTagName("h4")[0].innerText.toLowerCase().startsWith(data))) {
            project.remove();
        }
    })

    
}

async function load_social_contacts() {  
    let social_response = await fetch("/static/json/social.json")

    if (social_response.ok) {
        let social_json = await social_response.json();
        if (social_json.version == 1) { 
            loaded_social_contacts["discord"] = social_json.discord
            loaded_social_contacts["github"] = social_json.github
            loaded_social_contacts["gitlab"] = social_json.gitlab
            loaded_social_contacts["email"] = social_json.email

            document.getElementById("social-email").href = "mailto:" + loaded_social_contacts["email"]
            document.getElementById("social-discord").href = "https://discord.com/users/" + loaded_social_contacts["discord"]
            document.getElementById("social-github").href = "https://github.com/" + loaded_social_contacts["github"]
            document.getElementById("social-gitlab").href = "https://gitlab.com/" + loaded_social_contacts["gitlab"]
        }
        
    }
}
let born = 7

async function load_about_me() {
    let a_response = await fetch("/static/json/about_me.json")

    if (a_response.ok) {
        let a_json = await a_response.json();
        if (a_json.version == 1) { 
            document.getElementById("about-me-name").innerText = a_json.name

            born = new Date(2004,12,02,11,8);
            now = new Date()
            let bornyears = now.getFullYear() - born.getFullYear()
            
            if (now.getMonth() == 11 ) {
                bornyears= bornyears + 1;
            }

            

            document.getElementById("about-me-description").innerText = "Hi, I'm a "+ bornyears + " years old student from Portugal  "
        }
        
    }
}

load_social_contacts()
load_projects()
load_about_me()

showAdequateProjects()
