//Se crea una const para englobar todp
let obtenerPedidos = async () => {
    //Se crean 2 endpoints para los pedidos y productos
    let responsePedidos = await fetch('http://localhost:3000/orders');
    let pedidos = await responsePedidos.json();

    //Ordena los pedidos por fecha ultimos primero
    let sortedPedidos = pedidos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    let responseProductos = await fetch('http://localhost:3000/products');
    const productos = await responseProductos.json();


    //Muestra los pedidos en el HTML
    sortedPedidos.forEach(pedido => {
        console.log(pedido.products);
        const pedidoDiv$$ = document.createElement('div');
        document.body.appendChild(pedidoDiv$$);

        //Crea el elemento fecha para el pedido
        const fechaPedido = document.createElement('p');
        fechaPedido.textContent = `Fecha del pedido: ${pedido.fecha}`;
        pedidoDiv.appendChild(fechaPedido);

        pedido.productos.forEach((productoPedido) => {
            const { id, cantidad } = productoPedido;
            const producto = productos.find(producto => producto.id === id);

            if (producto) {
                const nombreProducto = document.createElement('p');
                nombreProducto.textContent = `Producto: ${producto.nombre} - Cantidad: ${cantidad}`;
                pedidoDiv.appendChild(nombreProducto);
            }
        })

        
    })
}

obtenerPedidos();

//No funciona