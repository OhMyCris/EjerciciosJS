const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalSales = 0;

for (let i = 0; i < products.length; i++) {
    totalSales += products[i].sellCount;
}

console.log("El total de ventas de todos los productos es:", totalSales);

/* Otra forma de hacerlo */

let totalVentas = 0;

products.forEach(producto => {
    totalVentas += producto.sellCount;
    
});