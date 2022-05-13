"use strict";

function Car(name, color, airbag, time) {
  this.name = name;
  this.time = time;
  this.color = color;
  this.airbag = airbag;

  this.isBuy = false;
  this.speed = function () {
    console.log(`${this.name} has 100km/h in  ${this.time}s `);
  };
}
//-- ------------ konstructorga prototayp orqali metod quwsa buladi

Car.prototype.town = function () {
  console.log("Uzbekistan");
};

// ------------- Car bu yerda konstruktor va doim kotta harf bilan yoziladi
// *----------- this bu yerda konteks deyiladi
const mers = new Car("mers", "yellow", false, 8);
const bmw = new Car("bmw", "black", true, 5);

bmw.speed();
mers.speed();
bmw.town();

console.log(mers);
console.log(bmw);
