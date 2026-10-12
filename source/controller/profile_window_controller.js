const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search = document.getElementById("search");

function start() {
    search.classList.add("willappair");
}

function open_search() {
    search_div.classList.add("clicked");
    open_search_button.classList.add("willappair");
    search.classList.add("appair")
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter' || event.key === "Escape") {
        search_div.classList.remove("clicked")
        open_search_button.classList.remove("willappair");
        search.classList.remove("appair")
    }
})

start()