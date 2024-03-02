const CarritoCompra = require("../index.js");

describe("CarritoCompra", () => {
  let carrito;
const producto1 = { nombre: "Camiseta", precio: 20 };
const producto2 = { nombre: "Pantalón", precio: 30 };
  beforeEach(() => {
    carrito = new CarritoCompra();
    
  });

  test("Inicializacion del carrito vacio", () => {
    expect(carrito.carrito).toHaveLength(0);
  });

  test("Debe ser una clase", () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe("function");
  });

  test("Debe tener el metodo agregarProducto ", () => {
    expect(carrito.agregarProducto).toBeDefined();
  });

  test("Debe tener el motodo calcularTotal", () => {
    expect(carrito.calcularTotal).toBeDefined();
  });
  test("Debe tener el motodo aplicarDescuento", () => {
    expect(carrito.aplicarDescuento).toBeDefined();
  });
  test("Debe agregar un producto al carrito", () => {
    carrito.agregarProducto(producto1);
    expect(carrito.carrito).toContainEqual(producto1);
  });
  test("Debe Calcular el total ", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(50);
  });

  test("Debe aplicar descuento correctamente", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.aplicarDescuento(10)).toBe(45); // Total: 50 - 10% = 45
  });

  test("Debe aplicar descuento del 0%", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.aplicarDescuento(0)).toBe(50); // No hay descuento, el total es 50
  });
});
