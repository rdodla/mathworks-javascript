export class Vehicle {
  make = 'Default make';
  model = 'Default model';
  color = 'red';

  static vin = 0;

  /*
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  */

  constructor(config = {}) {
    this.make = config.make || this.make;
    this.model = config.model || this.model;
    this.color = config.color || this.color;
    this.speed = 0;

    Vehicle.vin = Vehicle.vin + 1;
    this._vin = Vehicle.vin;

    // Intended private
    this.odometer = 0;
    this.mileage = 0;
  }

  getMake() {
    return this.make;
  }

  get vin() {
    return this._vin;
  }

  set mileage(miles) {
    this.odometer += miles;
  }

  get mileage() {
    return this.odometer;
  }

  toString() {
    return `${this.make} ${this.model}`;
  }
}
