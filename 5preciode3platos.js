function calculateTotalBill(dish1Price, dish2Price, dish3Price, taxRate) {
    const subtotal = dish1Price + dish2Price + dish3Price;
    const taxAmount = subtotal * (taxRate / 100);
    const totalBill = subtotal + taxAmount;
    
    alert(`El total de su factura es: ${totalBill.toFixed(2)}`);
}

const dish1Price = parseFloat(prompt("Ingrese el precio del primer plato: "));
const dish2Price = parseFloat(prompt("Ingrese el precio del segundo plato: "));
const dish3Price = parseFloat(prompt("Ingrese el precio del tercer plato: "));
const taxRate = parseFloat(prompt("Ingrese el porcentaje de impuesto: "));

calculateTotalBill(dish1Price, dish2Price, dish3Price, taxRate);