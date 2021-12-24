

function google_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.google.pt/search?q=" + term;
    }
}

function bing_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.bing.com/search?q=" + term;
    }
}

function github_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.github.com/search?q=" + term;
    }
}

function duckduckgo_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://duckduckgo.com/?q=" + term;
    }
}

function yahoo_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://search.yahoo.com/search?p=" + term;
    }
}

function ecosia_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.ecosia.org/search?q=" + term;
    }
}

function github_gist_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://gist.github.com/search?q=" + term;
    }
}

function gitlab_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://gitlab.com/search?search=" + term;
    }
}

function youtube_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.youtube.com/results?search_query=" + term;
    }
}

function vimeo_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://vimeo.com/search?q=" + term;
    }
}

function spotify_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://open.spotify.com/search/" + term;
    }
}
function stackoverflow_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://stackoverflow.com/search?q=" + term;
    }
}

function musixmatch_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://www.musixmatch.com/pt/search/" + term;
    }
}

function applemusic_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://music.apple.com/search?term=" + term;
    }
}


function yandex_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://yandex.com/search/?text=" + term;
    }
}
function giphy_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://giphy.com/search/" + term;
    }
}

function tenor_search(term) {
    if (!(term === undefined || term == ""))
    {
        window.location.href = "https://tenor.com/search/" + term;
    }
}



function search(term, engine = document.getElementById('search-engine').value) {
    if (!(term === undefined || term == ""))
    {

        switch (engine) {
            case 'Google':
                google_search(term);
                break;
            case 'Bing':
                bing_search(term);
                break;
            case 'DuckDuckGo':
                duckduckgo_search(term);
                break;
            case 'Ecosia':
                ecosia_search(term);
                break;
            case 'Yahoo':
                yahoo_search(term);
                break;
            case 'Yandex':
                yandex_search(term);
                break;
            
            // Development
            case 'Github':
                github_search(term);
                break;
            case 'Github Gist':
                github_gist_search(term);
                break;
            case 'GitLab':
                gitlab_search(term);
                break;
            case 'Stack Overflow':
                stackoverflow_search(term);
                break;
            // Video
            case 'Vimeo':
                vimeo_search(term);
                break;
            case 'Youtube':
                youtube_search(term);
                break;
            // Image

            case 'GIPHY':
                giphy_search(term);
                break;
            case 'Tenor':
                tenor_search(term);
                break;

            // Spotify
            
            case 'Apple Music':
                applemusic_search(term);
                break;
            case 'Musixmatch':
                musixmatch_search(term);
                break;
            case 'Spotify':
                spotify_search(term);
                break;


            

        
            default:
                break;
        }
    }
}


