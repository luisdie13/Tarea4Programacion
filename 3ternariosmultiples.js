function calculateMessage(login) {
    let message = login === "Trabajador" ? "Hola" :
    login === "Dueño" ? "Felicidades" :
    login === "" ? "Sin sesión" : "Usuario no reconocido";
    return message;
}