describe('Super dope Array', () => {
    it('should exist class "CustomArray" and It should be an instance of Array', () => {
        const array = new CustomArray()

        expect(array instanceof Array).toBe(true)
    })

    it('should be able to receive many arguments and It should return a list with same length', () => {
        const array = new CustomArray(1, 2, 3)

        expect(array.length).toEqual(3)
    })

    it('should exist a method named "add" inside CustomArray class', () => {
        expect(CustomArray.prototype.add).not.toBe(undefined)
        expect(typeof CustomArray.prototype.add).toEqual('function')
    })

    it('should have "add" method as property, be callable, and returns itself with new content', () => {
        const array = new CustomArray()

        const itself = array.add(1, 2, 3)

        expect(array.length).toEqual(3)
        expect(array).toEqual(itself)
    })

    it('should exist a method named "has" inside CustomArray class', () => {
        expect(CustomArray.prototype.has).not.toBe(undefined)
        expect(typeof CustomArray.prototype.has).toEqual('function')
    })

    it('should have "has" method as property, be callable, and returns a boolean', () => {
        const array = new CustomArray()

        expect(typeof array.has()).toEqual('boolean')
    })

    it('should receive, the "has" method, a value and returns false if this one does not exist inside the list', () => {
        const array = new CustomArray()

        expect(array.has(1)).toBe(false)
    })

    it('should receive, the "has" method, a value and returns true if this one exists inside the list', () => {
        const array = new CustomArray(1)

        expect(array.has(1)).toBe(true)
    })

    it('should avoid store values that already exists when using "add" method', () => {
        const array = new CustomArray(1, 2, 1, 3)

        expect(array.length).toEqual(3)
    })

    it('should exist a method named "size" inside CustomArray class', () => {
        expect(CustomArray.prototype.size).not.toBe(undefined)
        expect(typeof CustomArray.prototype.size).toEqual('function')
    })

    it('should have "size" method as property, be callable as "getter", and returns its length', () => {
        const array = new CustomArray(1, 2)

        array.add(2, 3, 1, 5, 5)

        expect(array.size).toEqual(4)
    })

    it('should exist a method named "compareWith" inside CustomArray class', () => {
        expect(CustomArray.prototype.compareWith).not.toBe(undefined)
        expect(typeof CustomArray.prototype.compareWith).toEqual('function')
    })

    it('should have "compareWith" method as property, be callable, and returns a boolean', () => {
        const array = new CustomArray(1, 2)

        expect(typeof array.compareWith()).toEqual('boolean')
    })

    it('should returns false from "compareWith" method if length of list received by params is not equal than the length of itself', () => {
        const array = new CustomArray(1, 2, 2, 3)

        expect(array.compareWith([1, 2, 3, 4])).toBe(false)
    })

    it('should returns true from "compareWith" method if length of list received by params is equal than the length of itself', () => {
        const array = new CustomArray(1, 2, 2, 3)

        expect(array.compareWith([1, 2, 3])).toBe(true)
    })
})