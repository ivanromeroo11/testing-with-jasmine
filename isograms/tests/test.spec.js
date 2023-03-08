describe('isogram kata', () => {
    it('should exist isIsogram variable', () => {
        expect(isIsogram).not.toBe(undefined)
    })
    
    it('should exist a function named isIsogram', () => {
        const isIsogramType = typeof isIsogram

        expect(isIsogramType).toEqual('function')
    })

    it('should return a boolean', () => {
        expect(typeof isIsogram()).toEqual('boolean')
    })

    it('should set an empty string as default value if receives nothing as argument', () => {
        expect(isIsogram()).toBe(true)
    })

    it('should return true if the string is "Dermatoglyphics"', () => {
        expect(isIsogram('Dermatoglyphics')).toBe(true)
    })
    
    it('should return true if the string is "isogram"', () => {
        expect(isIsogram('isogram')).toBe(true)
    })
    
    it('should return false if the string is "aba"', () => {
        expect(isIsogram('aba')).toBe(false)
    })
    
    it('should return false if the string is "moOse"', () => {
        expect(isIsogram('moOse')).toBe(false)
    })
    
    it('should return false if the string is "isIsogram"', () => {
        expect(isIsogram('isIsogram')).toBe(false)
    })
    
    it('should return true if the string is an emtpy string', () => {
        expect(isIsogram('')).toBe(true)
    })
})