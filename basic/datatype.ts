let q:number = 10, b = 20; //สามารถทำเเบบนี้ได้ในกรณีที่เป็น Datatype เดียวกาน 
//Array
let myArray: any[] = [1, 2 ,3 , 'supanat', 'noisupa'];
let pop1: any;
pop1 = myArray.pop();
console.log("pop รอบ 1 "+ pop1)
pop1 = myArray.pop();
console.log("pop รอบ 2 "+ pop1)
myArray.push('supanat noisupa');
console.log(myArray)

//Tuple
let employee: [number, string, string, boolean][] = [[1, 'Supanat', 'Noisupa', false], [2, 'Rungrawekan', 'boon', false]]
console.log(employee)
console.log(employee[1])
employee.push([3, 'Rungrawekan', 'Noisupa', true])

//enum return เป็นตำเเหน่งของข้อมูลเป็นเเบบค่าคงที่
enum UseStatus{
    Task = 1,
    Working,
    Finish,
}
console.log(UseStatus.Working, UseStatus.Finish) 