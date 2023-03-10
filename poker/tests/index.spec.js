describe('Poker kata', () => {
    describe('class PokerPlayer', () => {
        it('should exist a variable named "PokerPlayer"', () => {

        })

        it('should be a function (remember a class is a function)', () => {

        })
    })

    describe('PokerPlayer properties', () => {
        it('should have a "name" property and need to be a "string"', () => {

        })

        it('should have the same value than the one received into the constructor', () => {

        })

        it('should have a "result" property and need to be an "array"', () => {

        })

        it('should be an empty array first time we create a player', () => {

        })
    })

    describe('PokerPlayer "rollDie" method', () => {
        it('should be a function', () => {

        })

        it('should return an instance of a promise', () => {

        })

        it('should return a string', () => {

        })

        it('should return some value between these ones, randomly: A, 8, 9, J, Q, K', () => {

        })

        it('should return a proper value after 300ms and never before (use console.time function to check it)', () => {

        })
    })

    describe('PokerPlayer "getResult" method', () => {
        it('should be a function', () => {

        })

        it('should return an array', () => {

        })

        it('should call "throwDie" five times, returning an array with five elements', () => {

        })

        it('should return the proper five-length-array after 1800ms and never before (use console.time function to check it)', () => {

        })

        it('should save the same array It will return into "result" property', () => {

        })
    })

    describe('standalone "getHandName" function', () => {
        it('should exist a function named "getHandName"', () => {

        })

        it('should return a string', () => {

        })

        it('should return "five of a kind" if the player result has five elements equal', () => {

        })

        it('should return "four of a kind" if the player result has four elements equal', () => {

        })

        it('should return "full house" if the player result has "three of a kind" and "one pair" at the same time', () => {

        })

        it('should return "three of a kind" if the player result has three elements equal', () => {

        })

        it('should return "two pair" if the player result has two elements equal twice', () => {

        })

        it('should return "one pair" if the player result has two elements equal', () => {

        })

        it('should return "high die [die side]" (example: "high die 9") if the player result has no combinations', () => {

        })
    })

    describe('standalone "getScore" function', () => {
        it('should exist a function named "getScore', () => {

        })

        it('should return a number', () => {

        })

        it('should receive the name of the hand and return its proper score', () => {
            /**
             * Examples:
                Five of a kind = 7
                Four of a kind = 6
                Full house = 5
                Three of a kind = 4
                Two pair = 3
                One pair = 2
                High card = 1
             */
        })
    })

    describe('standalone "checkWinner" function', () => {
        it('should exist a function named "checkWinner"', () => {

        })

        it('should return a string', () => {

        })

        it('should receive two players, use the two previous functions, and return the name property of the winner', () => {
            /**
             * Be specially carefully if both player have "high card" hand,
             * because you'll need to compare then, the highest single value of each hand
             */
        })
    })

    describe('testing all together', () => {
        it('should win player 1')
    })
})