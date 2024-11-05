const faker = require('faker');

class usersService {
  constructor() {
    this.users = []; //Creacion de un arreglo al inicio de lanzar la aplicacion
    this.generate();
  }

  generate() {
    for (let index = 0; index < 10; index++) {
      this.users.push({
        id: Math.floor(10000 + Math.random() * 90000),
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      });
    }
  }

  getAll() {
    return this.users;
  }

  create(data) {
    const newUser = {
      id: Math.floor(10000 + Math.random() * 90000),
      ...data, // [...] tomar todo lo que se encuentre en data
    };
    this.users.push(newUser);
    return newUser;
  }

  getById(id) {
    if (id) {
      return this.users.find((item) => item.id == id); //Buscar en el arreglo el id que se ingresa
    } else {
      throw new Error('The user does not exist');
    }
  }

  update(id, changes) {
    const index = this.users.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user, //con esto mantenemos la propiedad del producto
      ...changes, //y asi no se borra todo, solo se cambia la propiedad actualizada
    };

    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1); //Index es la posicion en el arreglo y 1 es cuantos elementos borrara a apartir del index
    return { id };
  }
}

module.exports = usersService;
