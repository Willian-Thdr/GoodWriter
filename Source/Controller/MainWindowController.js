const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search_area = document.getElementById("search");

function start() {
    search_area.classList.add("willappair");
    search_div.classList.add("normal");
}

function open_search() {
    search_div.classList.add("clicked");
    search_div.classList.add("normal");
    open_search_button.classList.add("willappair");
    search_area.classList.remove("willappair");
    search_area.classList.add("open");
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        search_div.classList.remove("clicked");
        search_div.classList.add("normal");
        open_search_button.classList.remove("willappair");
        search_area.classList.add("willappair");
        search_area.classList.remove("open");
        
    } else if (event.key === "Escape") {
        search_div.classList.remove("clicked");
        search_div.classList.add("normal");
        open_search_button.classList.remove("willappair");
        search_area.classList.add("willappair");
        search_area.classList.remove("open");
    }
})

start()