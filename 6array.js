function findMinMax(arrayLength) {
    let smallest = Number.MAX_VALUE;
    let largest = Number.MIN_VALUE;

    for (let i = 0; i < arrayLength; i++) {
        const number = parseFloat(prompt(`Ingrese el número ${i + 1}: `));

        if (number < smallest) {
        smallest = number;
    }

    if (number > largest) {
        largest = number;
    }
    }

    alert(`El número más pequeño es: ${smallest}`);
    alert(`El número más grande es: ${largest}`);
}

const arrayLength = parseInt(prompt("¿Cuántos números desea ingresar? "));
findMinMax(arrayLength);