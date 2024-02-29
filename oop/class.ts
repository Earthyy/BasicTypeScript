class Human {
    name: string = '' //null
    lname: string = '' //null
    age: number = 0

    sayHello() { //method
        return "Hello " + this.name + "  " + this.lname + 'age ' +this.age + " years old";
    }
}

const user: any = new Human() //เรียกใช้งาน class ผ่านตัวเเปร user โดน set datatype เป็น any 
user.name = 'Supanat'
user.lname = 'Noisupa'
user.age = 65
console.log(user.sayHello())