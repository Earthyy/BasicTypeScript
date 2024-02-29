// void fuction
function sayHello(){
    console.info('Hello World');
}

sayHello()

// return function
function userName(name:string, lname:string = "None", age: any = " "): string{
    return name + " " + lname + " age: " + age ;
}

console.info(userName("supanat", "Noisupa", 15));
console.info(userName("Rungrawekan", undefined, 20));

//Arrow Function
let fullname=(fistname:string,lastname:string)=>fistname+ " " +lastname;
console.log(fullname("Earth","cookie"))

//Rest Parameter
function sum(a:number, b:number,...rest:number[]): number{
    return a + b + rest.reduce((a,b) => a + b , 0);
}

console.log(sum(1,2,3,4,5,6,7,8,9))

//Name Parameter
function calAge({yearbrith, thisyear}:{yearbrith:number, thisyear:number}): number{
    return thisyear - yearbrith ;
}

console.log(calAge({yearbrith:2002, thisyear:2024}))

//callBack Function
function callName(name: string, lname: string = "None", ageCallback: () => number): string {
    //const age = ageCallback();  // เรียกใช้ callback function เพื่อรับค่า age
    return name + " " + lname + " age: " + ageCallback();
}

console.info(callName("supanat", "Noisupa", () => calAge({ yearbrith: 2002, thisyear: 2024 })));

