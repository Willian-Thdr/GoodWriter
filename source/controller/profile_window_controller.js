const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search = document.getElementById("search");
const title = document.getElementById("writer_archive_title");
const text_style = document.querySelectorAll(".normal_fonts");

function loop() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    const p_pixel = Math.min(1500, Math.max(300, vw - vh))/50;
    const title_pixel = Math.min(2000, Math.max(350, vw - vh))/50;

    text_style.forEach(element => {
        element.style.fontSize = `${p_pixel}px`;
    });

    title.style.fontSize = `${title_pixel}px`;

    requestAnimationFrame(loop);
}

function open_search() {
    search_div.classList.add("clicked");
    open_search_button.classList.add("willappair");
    search.classList.add("appair");
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter' || event.key === "Escape") {
        search_div.classList.remove("clicked");
        open_search_button.classList.remove("willappair");
        search.classList.remove("appair");
    }
})

window.addEventListener("resize", loop);
loop();
