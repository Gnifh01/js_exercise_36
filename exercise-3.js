class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(object) {
    console.log(object instanceof Person);
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${obj.firstName} ${obj.lastName}`);