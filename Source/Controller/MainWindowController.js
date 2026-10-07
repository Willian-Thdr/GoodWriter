const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search_area = document.getElementById("search_div");

function start() {
    search_area.classList.add("willappair")
}

function open_search() {
    search_div.classList.add("clicked")
    search_area.classList.remove("willappair")
    open_search_button.classList.add("willappair")
}

document.addEventListener("keyboad", function(event) {
    if (event.key === 'Enter') {
        search_div.classList.remove("clicked")
        search_area.classList.add("willappair")
        open_search_button.classList.remove("willappair")
    }
})

start()