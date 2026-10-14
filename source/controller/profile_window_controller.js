// Elementos presentes no HTML
const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search = document.getElementById("search");
const text_style = document.querySelectorAll(".normal_fonts");
const mobile_text_style = document.querySelectorAll(".mobile_fonts");
const desktop_content = document.getElementById("desktop_content");
const mobile_content = document.getElementById("mobile_content");
const desktop_menubar = document.getElementById("desktop_menubar");
const mobile_menubar = document.getElementById("mobile_menubar");
const title_mobile = document.getElementById("writer_archive_title_mobile");
const title_desktop = document.getElementById("writer_archive_title_desktop");

// Elementos adicionados no HTML
const link_style_menubar = document.createElement("link");
const link_style_content = document.createElement("link")

function loop() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    if (vh > vw) {
        desktop_content.style.display = "none";
        mobile_content.style.display = "flex";
        desktop_menubar.style.display = "none";
        mobile_menubar.style.display = "flex";

        link_style_menubar.rel = "stylesheet";
        link_style_menubar.href = "/source/style/profile_window/style_menubar_mobile.css";
        link_style_content.rel = "stylesheet";
        link_style_content.href="source/style/profile_window/style_mobile_content.css";

        document.head.appendChild(link_style_menubar);
        document.head.appendChild(link_style_content);

        const p_pixel = (vh - vw)/40;
        const title_pixel = (vh - vw)/40;
        
        mobile_text_style.forEach(element => {
            element.style.fontSize = `${p_pixel}px`;
        });
        
        title_mobile.style.fontSize = `${title_pixel}px`;
    } else {
        desktop_content.style.display = "flex";
        mobile_content.style.display = "none";
        desktop_menubar.style.display = "flex";
        mobile_menubar.style.display = "none";

        link_style_menubar.rel = "stylesheet";
        link_style_menubar.href = "/source/style/profile_window/style_menubar.css";
        link_style_content.rel = "stylesheet";
        link_style_content.href="source/style/profile_window/style_desktop_content.css";

        document.head.appendChild(link_style_menubar);
        document.head.appendChild(link_style_content);

        const p_pixel = Math.min(1510, Math.max(310, vw - vh))/40;
        const title_pixel = Math.min(2000, Math.max(500, vw - vh))/30;
    
        text_style.forEach(element => {
            element.style.fontSize = `${p_pixel}px`;
        });
    
        title_desktop.style.fontSize = `${title_pixel}px`;
    }

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
