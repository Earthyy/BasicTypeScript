// www.typescriptlang.org
/*class Point {
    x: number = 0;
    y: number = 0;
}

const point = new Point();  
point.x = 10;               
point.y = 20;               

console.log(`${point.x}` , "" , `${point.y}`);  */

// use construtor
class Point {
    // Fill
    x: number = 0;
    y: number = 0;
    readonly version:string = "0.1" //constanc
    // Fill
    constructor(x:number = 0,y:number = 0){
        this.x = x;
        this.y = y;
    }
}

const point = new Point(10,20); 
point.x = 1000;               
console.log(`${point.x}` , "" , `${point.y}`);  

// use getter setter
class P{
    _x:number = 0;
    get x():number{
        this._x +=1;
        return this._x;
    }
    set x(value: number){
        this._x = value;
    }
}
const p = new P();
p.x = 20;
console.log(p.x)


class Preson{
    name:string = "";
    constructor(name:string = "none"){
        this.name = name;
    }

    sayHi() {
        console.log(`Hello ${this.name}`);
    }
}

class Employee extends Preson{ 
    salary:number=0;
    constructor(name:string, salary:number) {
        super(name);
        this.salary = salary;
    }

    sayHi() {
        super.sayHi();
        console.log(`Salary:  ${this.salary}`);
    }
}

const ps = new Employee("jone", 18900);
ps.sayHi();
