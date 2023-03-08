describe('standard classes way', () => {
    describe('CoolerArray class', () => {
        it('should exist a variable called "CoolerArray"', () => {
            expect(CoolerArray).not.toBe(undefined)
        })

        it('should be and instance of Array class', () => {
            expect(new CoolerArray() instanceof Array).toBe(true)
        })
    })

    describe('add method', () => {
        it('should exist "add" method', () => {
            expect(typeof new CoolerArray().add).toEqual('function')
        })
        
        it('should push the args received into the new array', () => {
            const array = new CoolerArray()
            
            array.add(1, 2, 3)
            
            expect(array.length).toEqual(3)
        })

        it('should return the same array', () => {
            const array = new CoolerArray()

            const itself = array.add(1, 2, 3)

            expect(itself).toEqual(array)
        })
    })
    
    describe('has method', () => {
        it('should exist "has" method', () => {
            expect(typeof new CoolerArray().has).toEqual('function')
        })

        it('should return a boolean value', () => {
            expect(typeof new CoolerArray().has()).toEqual('boolean')
        })

        it('should return true if the received arg is included inside itself', () => {
            expect(new CoolerArray().add(1).has(1)).toBe(true)
        })

        it('should return false if the received arg is not included inside itself', () => {
            expect(new CoolerArray().has(1)).toBe(false)
        })
    })

    describe('constructor method', () => {
        it('should add the args received when we create a new Array with CoolerArray class', () => {
            expect(new CoolerArray(1, 2, 3).length).toEqual(3)
        })
    })

    describe('unique values', () => {
        it('should store in the new array not repeated values', () => {
            const array = new CoolerArray()

            array.add(1, 2, 1, 3)

            expect(array.length).toEqual(3)
        })

        it('should store in the new array not repeated values when we iniatilize the class', () => {
            const array = new CoolerArray(1, 2, 1, 3)

            expect(array.length).toEqual(3)
        })
    })

    describe('size getter', () => {
        it('should exist "size" property', () => {
            expect(typeof new CoolerArray().size).not.toBe(undefined)
        })

        it('should return the length of itself', () => {
            expect(new CoolerArray(1, 2, 1, 3, 2, 3).size).toEqual(3)
        })
    })
})