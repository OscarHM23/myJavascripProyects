const faker = require('faker');

class brandsService {
  constructor() {
    this.brands = []; //Creacion de un arreglo al inicio de lanzar la aplicacion
    this.generate();
  }

  generate() {
    for (let index = 0; index < 10; index++) {
      this.brands.push({
        id: Math.floor(1000000 + Math.random() * 9000000),
        brandName: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        active: faker.datatype.boolean(),
      });
    }
  }

  getAll() {
    return this.brands;
  }

  create(data) {
    const newBrand = {
      id: Math.floor(1000000 + Math.random() * 9000000),
      ...data, // [...] tomar todo lo que se encuentre en data
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  getById(id) {
    if (id) {
      return this.brands.find((item) => item.id == id); //Buscar en el arreglo el id que se ingresa
    } else {
      throw new Error('The brand does not exist');
    }
  }

  update(id, changes) {
    const index = this.brands.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Brand not found');
    }
    const brand = this.brands[index];
    this.brands[index] = {
      ...brand, //con esto mantenemos la propiedad del producto
      ...changes, //y asi no se borra todo, solo se cambia la propiedad actualizada
    };

    return this.brands[index];
  }

  delete(id) {
    const index = this.brands.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Brand not found');
    }
    this.brands.splice(index, 1); //Index es la posicion en el arreglo y 1 es cuantos elementos borrara a apartir del index
    return { id };
  }
}

module.exports = brandsService;
