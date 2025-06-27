const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

//Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios..
test('prueba que un usuario no exista', () => {    
    let user2 = new User(3312,"Daniel", "daniel@generation.org"); 
    expect(userController.getUsers()).not.toContain(user2);
  });  


test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//Implementar 1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios.
// ESTA HONESTAMENTE NO LE ENTENDI, PARA MI YA SE REALIZA EN LA PRUEBA DE ARRIBA.
test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


// Implementar 2 pruebas unitarias para la función findByEmail().
test('encontrar email con findByEmail', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user); 
  let email = "santiago@generation.org";
  expect(userController.findByEmail(email).email).toBe("santiago@generation.org")
})

test('Verificar que un email random no se encuentre', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user); 
  let email = "santiago@generation.org";
  expect(userController.findByEmail(email).email).not.toBe("Daniel @generation.com")
})

// Implementar 2 pruebas unitarias para la función findById().
test('encontrar un id con findById', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user); 
  let id = 1234;
  expect(userController.findById(id).id).toBe(1234)
})
 
test('Ver si no se encuentre un id', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user); 
  let id = 1234;
  expect(userController.findById(id).id).not.toBe(3312)
})
