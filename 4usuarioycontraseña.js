function handleLogin() {
    const username = prompt("Ingrese su nombre de usuario:");
    if (username === null || username === "") {
        alert("Cancelado");
        return;
    }
    if (username === "Admin") {
        const password = prompt("Ingrese su contraseña:");
        if (password === null || password === "") {
        alert("Cancelado");
        return;
    }
    if (password === "Jedi") {
        alert("¡Que la fuerza te acompañe!");
    } else {
        alert("Contraseña incorrecta");
    } 
} else {
        alert("No te conozco");
    }
}

handleLogin();