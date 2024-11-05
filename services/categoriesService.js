const faker = require('faker');

class categoriesService {
  constructor() {
    this.categories = []; //Creacion de un arreglo al inicio de lanzar la aplicacion
    this.generate();
  }

  generate() {
    for (let index = 0; index < 10; index++) {
      this.categories.push({
        id: Math.floor(10000 + Math.random() * 90000),
        categoryName: faker.commerce.department(),
        description: faker.lorem.sentence(),
        active: faker.datatype.boolean(),
      });
    }
  }

  getAll() {
    return this.categories;
  }

  create(data) {
    const newCategory = {
      id: Math.floor(10000 + Math.random() * 90000),
      ...data, // [...] tomar todo lo que se encuentre en data
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  getById(id) {
    if (id) {
      return this.categories.find((item) => item.id == id); //Buscar en el arreglo el id que se ingresa
    } else {
      throw new Error('The category does not exist');
    }
  }

  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Category not found');
    }
    const user = this.categories[index];
    this.categories[index] = {
      ...user, //con esto mantenemos la propiedad del producto
      ...changes, //y asi no se borra todo, solo se cambia la propiedad actualizada
    };

    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1); //Index es la posicion en el arreglo y 1 es cuantos elementos borrara a apartir del index
    return { id };
  }
}

module.exports = categoriesService;
