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
        }

      }

}

let loaded_projects = []


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

            loaded_projects.forEach( project => {
                if (project.type == "gitlab") {
                    document.getElementById("my-projects").innerHTML += '<div class="project"><br><img src="' + project.image + '"><h4 class="project-title"> <a href="' + project.url + '">' + project.name + '</a></h4><span class="project-summary">' + project.description+'</span></div>'
            
                } else {
                    document.getElementById("my-projects").innerHTML += '<div class="project"><br><img src="/static/img/pwrcord.png"><h4 class="project-title"> <a href="' + project.url + '">' + project.name + '</a></h4><span class="project-summary">' + project.description+'</span></div>'
            
                }
            }

            )
        }
    ).catch(reason => {
        
            document.getElementById("projects-loader").remove()
        document.getElementById("my-projects").insertAdjacentHTML("afterbegin", '<h2 style="text-align: center;color:white;vertical-align: middle;">Unable to load projects</h2>')
                
    })
}
load_projects()