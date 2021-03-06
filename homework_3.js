class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
    this.owners = [];
  }
  addOwner(owner) {
    return this.owners.push(owner);
  }
  getCarInfo() {
    return `${this.make}, ${this.model}, released in, ${this.year}`;
  }
  removeOwner(owner) {
    return this.owners.pop(owner);
  }
  getOwnersCount() {
    return this.owners.length;
  }

  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  }
  getFullInfo() {
    return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount} person owns this car. These are - ${this.getOwnerNames}.`;
  }
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }
  fullName() {
    return `${this.name} ${this.surname}`;
  }

  countCars() {
    return this.cars.length;
  }
  buysCar(car) {
    this.cars.push(car);
    car.addOwner(this);
  }

  sellsCar(car) {
    this.cars.pop();
    car.removeOwner(this);
  }

  getAllCarsInfo() {
    return `${this.name} owns these cars: ${this.cars.map((car) =>
      car.getCarInfo()
    )}`;
  }
}
  
  
  let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
  let ilona = new Person("Elon", "Musk", 30, "M");
  let duti_picoti = new Car("BMW", "525", "1999");
  let stodevianosto = new Car("Mercedes", "E190", 1991);
  
  console.log(ilona);