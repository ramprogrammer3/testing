
test("if 1 is equal to 1",()=>{
    expect(1).toBe(1) 
})

console.log("***************************************************")
test("if 1 is equal to 1",()=>{
    expect(1).toBe(2) 
})
console.log("***************************************************")

test("if 1 is equal to 1",()=>{
    expect(1).toBe(2) 
})
test("if 1 is equal to 1",()=>{
    expect(1).toBe(1) 
})
console.log("***************************************************")
const add = (x,y) =>{
    return x + y;
}
const {add} = require('./index')
test("checking if add function is doing its job",()=>{
    expect(add(1,1)).toBe(2) 
})

console.log("***************************************************")

const add = (x,y) =>{
    return x * y;
}
module.exports = {
    add
}

const {add} = require('./index')
test("checking if add function is doing its job",()=>{
    expect(add(2,3)).toBe(5) 
})
console.log("***************************************************")
const add = (x,y) =>{
    return x * y;
}
function inchesToCentimeter(x){
    return x * 2.54
}
module.exports = {
    add,
    inchesToCentimeter
}

const {add,inchesToCentimeter} = require('./index')
test("testig inchesToCentimeter function ",()=>{
    expect(inchesToCentimeter(1)).toBe(2.54) 
})




function inchesToCentimeter(x){
    return x * 3
}
console.log("***************************************************")

const {add,inchesToCentimeter} = require('./index')
test("testig inchesToCentimeter function ",()=>{
    expect({a : 10}).toBe({a : 10}) 
})


const {add,inchesToCentimeter} = require('./index')
test("testig inchesToCentimeter function ",()=>{
    expect({a : 10}).toEqual({a : 10}) 
})


console.log("***************************************************")

function palindrome(str){
    if(str == (str.split("").reverse().join(""))){
        return true
    }else{
        return false
    }
}

test("palindrom function " , ()=>{
    expect(palindrome("mon")).toBe(true)
})

console.log("***************************************************")

function getData(){
    return new Promise((resolve,reject)=>{
            axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response)=>{
                resolve(resolve.data)
            }).catch((err)=>{
                reject(err)
            })
    })
}


test("test getData function " ,async()=>{
    let response = await getData()
    expect(response).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })
})

console.log("***************************************************")


function getData(number){
    return new Promise((resolve,reject)=>{
            axios.get(`https://jsonplaceholder.typicode.com/todos/${number}`)
            .then((response)=>{
                resolve(response.data)
            }).catch((err)=>{
                reject(err)
            })
    })
}


test("test getData function " ,async()=>{
    let response = await getData(1)
    expect(response).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })
})


let response = await getData(2)
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")

const { expect } = require('chai')
const {add,inchesToCentimeter,palindrome, getData} = require('./index')

describe("1 is equal to 1",()=>{
    it("output should be 1 ",()=>{
        expect(1).to.equal(1)
    })
})


describe("1 is equal to 1",()=>{
    it("output should be 1 ",()=>{
        expect(add(1,2)).to.equal(1)
    })
})


describe("1 is equal to 1",()=>{
    it("output should be 1 ",()=>{
        expect(add(1,2)).to.equal(3)
    })
})

console.log("***************************************************")



const express = require('express')
const app = express()
const port = 8080


app.get("/users",(req,res)=>{
    res.status(200).send("users data")
})
app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})

module.exports = {
    app
}



const { expect } = require('chai')
const {app} = require('./index')
const request = require('supertest')

describe("Testing /users GET API ",()=>{
    it("USER DATA ",(done)=>{
        request(app)
        .get("/users")
        .expect(200)
        .expect("users data", done)
    })
})



app.get("/users",(req,res)=>{
    res.status(200).json({name : "ramkumar"})
})


describe("Testing /users GET API ",()=>{
    it("USER DATA ",(done)=>{
        request(app)
        .get("/users")
        .expect(200)
        .expect({name : "ramkumar"}, done)
    })
})

console.log("***************************************************")


app.post("/users",(req,res)=>{
    res.status(201).json({success : "user stored in db"})
})


describe("Testing /users POST API ",()=>{
    it("USER  STORED IN DB ",(done)=>{
        request(app)
        .post("/users")
        .expect(201)
        .expect({success : "user stored in db"}, done)
    })
})
console.log("***************************************************")

const express = require('express')
const app = express()
const port = 8080


app.get("/users",(req,res)=>{
    res.status(200).json({name : "ramkumar"})
})

app.post("/users",(req,res)=>{
    res.status(201).json({success : "user stored in db"})
})
app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})

module.exports = {
    app
}


const { expect } = require('chai')
const {app} = require('./index')
const request = require('supertest')

describe("Testing /users POST API ",()=>{
    it("USER  STORED IN DB ",(done)=>{
        request(app)
        .post("/users")
        .expect(201)
        .expect({success : "user stored in db"}, done)
    })
})
console.log("***************************************************")

app.get("/users",(req,res)=>{
    res.status(200).json({name : "ramkumar"})
})

app.post("/signin",(req,res)=>{
    res.redirect("/users")
})
app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})

module.exports = {
    app
}


const { expect } = require('chai')
const {app} = require('./index')
const request = require('supertest')

describe("Testing /signin POST API ",()=>{
    it("USER  STORED IN DB ",(done)=>{
        request(app)
        .post("/signin")
        .expect(302)
        .expect("Location", ()=>{
            request(app)
            .get("/users")
            .expect(200)
            .expect({name : "ramkumar"},done)
        })
    })
})

console.log("***************************************************")
console.log("***************************************************")