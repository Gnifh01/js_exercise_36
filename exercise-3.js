class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(value) {
    const person_2 = new Person(value.nome, value.cognome);
    return person_2
  }
}

const obj = {
  nome: "Mario",
  cognome: "Rossi",
};

const person = Person.fromObject(obj);

console.log(`${person.firstName} ${person.lastName}`);