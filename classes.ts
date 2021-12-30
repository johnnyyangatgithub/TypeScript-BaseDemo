class Vehicle {

  constructor(public color: string){ }

  protected drive():void {
    console.log('chugga chugga');
  }

  protected hunk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);


//Inheritance system
class Car extends Vehicle {

  constructor(public wheels: number, color:string){
    super(color);
  }

  //Overriden
  drive(): void {
    console.log('vroom');
    
  }
}

const car = new Car(4, 'orange');
car.drive();