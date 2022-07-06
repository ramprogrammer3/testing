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