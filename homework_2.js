function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owners = [];
  this.getCarInfo = function () {
    return `${this.make} ${this.model} released in ${this.year}`;
  };

  this.addOwner = function(owner) {
      this.owners.push(owner);
  };

  this.removeOwner = function(owner) {
      this.owner.pop(owner);
  };
  this.getOwnersCount = function() {
      this.owners.length;
  };

  this.getOwnerNames = function() {
    return this.owners.map((owner) => owner.fullName());
  };

  this.getFullInfo = function() {
    return `${this.make} ${this.model} ${this.year} ${this.getOwnersCount()} ${this.getOwnerNames()}` 
  }
};



function Person(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars; 
    this.fullName = function () {
      return `${this.name}  ${this.surname}`
    };

    this.countCars = function () {
     return this.cars.length;
    };

    this.buysCar = function (car) {
        this.cars.push(car);
    };

    this.sellsCar = function (car) {
        this.cars.pop(car);

    };
    this.getAllCarsInfo = function () {
      return `${this.name} owns these cars: ${this.cars.map((car) => car.getCarInfo())}.`


    }

}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

console.log(ilona);
