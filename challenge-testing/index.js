class CarritoCompra{
        constructor(){
           this.carrito=[]
        }
    agregarProducto(producto){
       this.carrito.push(producto)    
    }
    calcularTotal(){
        let total = 0;
        for (let producto of this.carrito){
            total +=producto.precio;
        } 
        return total
    }
    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }

}

module.exports=CarritoCompra;