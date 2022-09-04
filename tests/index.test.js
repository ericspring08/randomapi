const axios = require('axios')

describe('Integer Feature Tests', () => {
    describe('Basic Integer Test', () => {
        it('gets integer response', () => {
            data = axios.get('http://localhost:5000/api/integer').then((res) => {
                expect(typeof res.data.integer).toBe("number")  
            })
        })
    })
})

describe('Float Feature Tests', () => {
    describe('Basic Float Test', () => {
        it('gets float response', () => {
            data = axios.get('http://localhost:5000/api/float').then((res) => {
                expect(typeof res.data.float).toBe("number")  
            })
        })
    })
})

describe('Boolean Feature Tests', () => {
    describe('Basic Boolean Test', () => {
        it('gets boolean response', () => {
            data = axios.get('http://localhost:5000/api/boolean').then((res) => {
                expect(typeof res.data.boolean).toBe("boolean")  
            })
        })
    })
})