const request = require('supertest')
const baseUrl = require('../../env')

describe ('Post Request example',() => {
    it('Success create user',async () =>{
        const response = request (baseUrl())
        .post("/user")
        .send({
            "id": 112,
            "username": "fnnrzkn",
            "firstName": "fnn",
            "lastName": "rzkn",
            "email": "fnnrzkn@mailsec.co",
            "password": "123fnnrzkn",
            "phone": "08921712123",
            "userStatus": 200
        })
        console.log ((await response).status)
        console.log ((await response).body)
    })
})