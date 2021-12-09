function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

let url = window.location.href

let search_term = getUrlParameter("search-term")
let search_engine = getUrlParameter("search-engine")
if (search_term != '' && search_engine != '') {
    search(search_term,search_engine)
}