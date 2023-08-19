class ProducManager {
  constructor(productos, idProducto) {
    this.productos = [];
    this.idProducto = 1;
  }

  getProduct() {
    return this.productos;
  }

  addProduct(title, descriptions, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !descriptions || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son Obligatorios");
      return;
    }
    // Validar que el campo "code" no esté repetido
    if (this.productos.some((prod) => prod.code === code)) {
      console.log("El código del producto ya está en uso.");
      return;
    }
    // agregamos productos
    const newProducto = {
        id: this.idProducto++,
        title,
        descriptions,
        price,
        thumbnail,
        code,
        stock,
      };

      this.productos.push(newProducto);
      console.log("El producto se agrego exitosamente");
  }

  getProductById (id){
    const producto = this.productos.find(prod => prod.id === id)

    if (!producto) {
        console.log("Producto no encontrado.");
    }
    return producto;
  }
}

const productoss = new ProducManager();

productoss.addProduct("Iphone 11 ","Blanco", 760,"ruta-imagen-1.jpg","as12", 5);
productoss.addProduct("Iphone 12 ","Violeta", 860,"ruta-imagen-2.jpg","as13", 8);
console.log(productoss.getProduct());
console.log(productoss.getProductById(1));
