const faker = require('faker');

class productsService {
  constructor() {
    this.products = []; //Creacion de un arreglo al inicio de lanzar la aplicacion
    this.generate();
  }

  generate() {
    for (let index = 0; index < 10; index++) {
      this.products.push({
        id: Math.floor(1000000 + Math.random() * 9000000),
        image: faker.image.imageUrl(),
        productName: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        stock: faker.datatype.number({ min: 0, max: 500 }),
        categoryId: Math.floor(10000 + Math.random() * 90000),
        brandId: Math.floor(10000 + Math.random() * 90000),
      });
    }
  }

  getAll() {
    return this.products;
  }

  create(data) {
    const newProduct = {
      id: Math.floor(1000000 + Math.random() * 9000000),
      ...data, // [...] tomar todo lo que se encuentre en data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  getById(id) {
    if (id) {
      return this.products.find((item) => item.id == id); //Buscar en el arreglo el id que se ingresa
    } else {
      throw new Error('The product does not exist');
    }
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product, //con esto mantenemos la propiedad del producto
      ...changes, //y asi no se borra todo, solo se cambia la propiedad actualizada
    };

    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1); //Index es la posicion en el arreglo y 1 es cuantos elementos borrara a apartir del index
    return { id };
  }
}

module.exports = productsService;
