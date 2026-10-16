function back() {
    window.close()
}

function confirm() {
    const email_entry = document.getElementById("email_entry");
    const password_entry = document.getElementById("password_entry");
    const password_confirm = document.getElementById("password_confirm");
    const name_entry = document.getElementById("name_entry");

    const elements = [email_entry.value, password_entry.value, password_confirm.value, name_entry.value]

    let checker = true;

    for (let i = 0; i <= elements.length - 1; i++) {
        if (!elements[i]) {
            checker = false;
        } else if (elements[i]) {
            checker = true;
        }

        
        if (checker == false) {
            console.log("Erro: Preencha todos os campos");
            return;
        }
        
        if (i == elements.length - 1) {
            const data = {
                email: elements[0], 
                password: elements[1], 
                name: elements[3]
            }

            // window.close();
        }
    }
}
