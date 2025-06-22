type TypeUser = {
    name:string,
    age:number,
}

type TypeAddress = {
    country:string,
    city:string
}

const user:TypeUser = {
    age:10,
    name:'Slash',
}

const address:TypeAddress = {
    country:'Ukraine',
    city:'Kiev',
}

let common:TypeUser & TypeAddress

common = {
    ...user, ...address
}

