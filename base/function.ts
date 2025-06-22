type TypeNameReturn = {
    name:string
}

type TypeNameReturnConst = (name:string) =>TypeNameReturn
function getUserName(name:string):TypeNameReturn {
    return {name}
}

const getUname:TypeNameReturnConst = (name) =>{
    return {name}
}

const getNumbers = (...numbers:number[]) =>{
    return numbers
}

function getCar(name:string):string
function getCar(name:string, price:number):string
function getCar(name:string, price?:number):string{
    return price? `Назва ${name}, ціна ${price}`:`Назва ${name}`
}

const car1 = getCar('audi')
const car2 = getCar('bmw',123)

