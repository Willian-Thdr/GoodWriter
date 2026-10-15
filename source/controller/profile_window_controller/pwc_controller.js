// Elementos em IDs
const open_search_button = document.getElementById("open_search");
const search_div = document.getElementById("search_div");
const search = document.getElementById("search");
const desktop_content = document.getElementById("desktop_content");
const mobile_content = document.getElementById("mobile_content");
const desktop_menubar = document.getElementById("desktop_menubar");
const mobile_menubar = document.getElementById("mobile_menubar");
const title_mobile = document.getElementById("writer_archive_title_mobile");
const title_desktop = document.getElementById("writer_archive_title_desktop");
const pencil = document.getElementById("pencil");

// Elementos em classes
const text_style = document.querySelectorAll(".normal_fonts");
const mobile_text_style = document.querySelectorAll(".mobile_fonts");
const image_adaptive = document.querySelectorAll(".size_adaptative");

// Elementos adicionados no HTML
const link_style_menubar = document.createElement("link");
const link_style_content = document.createElement("link")

function loop() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    if (vh > vw) {
        // Ativação/desativação de styles na interface
        
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

        // Adaptação da forma e tamanho de elementos na interface

        // Cálculo

        const new_p_element_size = Math.min(600, Math.max(400, vh - vw))/40;
        const new_title_font_size = Math.min(700, Math.max(300, vh - vw))/40;
        const new_image_profile_size = Math.min(14400, Math.max(4, 2*vh - vw))/6.5;
        
        // Modificação

        mobile_text_style.forEach(element => {
            element.style.fontSize = `${new_p_element_size}px`;
        });

        image_adaptive.forEach(element => {
            element.style.width = `${new_image_profile_size}px`
            element.style.height = `${new_image_profile_size}px`
        });

        title_mobile.style.fontSize = `${new_title_font_size}px`;

    } else {
        // Ativação/desativação de styles na interface

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

        // Adaptação da forma e tamanho de elementos na interface

        // Cálculo

        const new_p_element_size = Math.min(1510, Math.max(310, vw - vh))/40;
        const new_title_font_size = Math.min(2000, Math.max(500, vw - vh))/30;
        const new_image_profile_size = Math.min(14400, Math.max(4, 2*vw - vh))/9;
        const new_pencil_size = Math.min(14400, Math.max(4.5, 2*vw - vh))/75;
        
        // Modificação

        image_adaptive.forEach(element => {
            element.style.width = `${new_image_profile_size}px`
            element.style.height = `${new_image_profile_size}px`
        });

        text_style.forEach(element => {
            element.style.fontSize = `${new_p_element_size}px`;
        });
    
        title_desktop.style.fontSize = `${new_title_font_size}px`;

        pencil.style.width = `${new_pencil_size}px`;
        pencil.style.height = `${new_pencil_size}px`;
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
