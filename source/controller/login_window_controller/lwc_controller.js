const links_icon = document.querySelectorAll(".size_adaptative");
const font_adaptative = document.querySelectorAll(".font_adaptative");

function github_redirect() {
    window.open("https://github.com/Willian-Thdr");
}

function repet() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    if (vh > vw) {
        const new_size = Math.min(14400, Math.max(4, 2*vh - vw))/6.5;
        const new_font = Math.min(14400, Math.max(4, 2*vh - vw))/50;
        
        links_icon.forEach(element => {
            element.style.width = `${new_size}px`
            element.style.height = `${new_size}px`
        });

        font_adaptative.forEach(element => {
            element.style.fontSize = `${new_font}px`
        });
    } else {
        const new_size = Math.min(14400, Math.max(4, vw - vh))/6.5;
        const new_font = Math.min(14400, Math.max(4, vw - vh))/50;
        
        links_icon.forEach(element => {
            element.style.width = `${new_size}px`
            element.style.height = `${new_size}px`
        });

        font_adaptative.forEach(element => {
            element.style.fontSize = `${new_font}px`
        });
    }

    requestAnimationFrame(repet);
}

window.addEventListener("resize", repet);
repet();
