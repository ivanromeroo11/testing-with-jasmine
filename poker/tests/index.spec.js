describe('Poker kata', () => {
    describe('class PokerPlayer', () => {
        it('should exist a variable named "PokerPlayer"', () => {
            expect(PokerPlayer).not.toBe(undefined)
        })

        it('should be a function (remember a class is a function)', () => {
            expect(typeof PokerPlayer).toEqual('function')
        })
    })

    describe('PokerPlayer properties', () => {
        it('should have a "name" property and need to be a "string"', () => {
            const player = new PokerPlayer()

            expect(typeof player.name).toEqual('string')
        })

        it('should have the same value than the one received into the constructor', () => {
            const player = new PokerPlayer('Player')

            expect(player.name).toEqual('Player')
        })

        it('should have a "result" property and need to be an "array"', () => {
            expect(typeof new PokerPlayer().result).toEqual('object')
        })

        it('should be an empty array first time we create a player', () => {
            expect(new PokerPlayer().result.length).toEqual(0)
        })
    })

    describe('PokerPlayer "rollDie" method', () => {
        it('should be a function', () => {
            expect(typeof new PokerPlayer().rollDie).toEqual('function')
        })

        it('should return an instance of a promise', () => {
            expect(new PokerPlayer().rollDie() instanceof Promise).toBe(true)
        })

        it('should return a string', async () => {
            const die = await new PokerPlayer().rollDie()
            
            expect(typeof die).toEqual('string')
        })
        
        it('should return some value between these ones, randomly: A, 8, 9, J, Q, K', async () => {
            const posibilities = ['A', '8', '9', 'J', 'Q', 'K']
            const die = await new PokerPlayer().rollDie()
            
            expect(posibilities.includes(die)).toBe(true)
        })
        
        it('should return a proper value after 300ms and never before', async () => {
            const t0 = performance.now()
            await new PokerPlayer().rollDie()
            const t1 = performance.now()

            expect(t1 - t0 >= 300).toBe(true)
        })
    })

    describe('PokerPlayer "getResult" method', () => {
        it('should be a function', () => {
            expect(typeof new PokerPlayer().getResult).toEqual('function')
        })

        it('should return undefined', async () => {
            expect(await new PokerPlayer().getResult()).toBe(undefined)
        })

        it('should call "throwDie" five times, saving the results into "result" property', async () => {
            const player = new PokerPlayer()

            await player.getResult()

            expect(player.result.length).toEqual(5)
        })

        it('should return the proper five-length-array after 1500ms and never before', async () => {
            const player = new PokerPlayer()

            const t0 = performance.now()
            await player.getResult()
            const t1 = performance.now()

            expect(t1 - t0 >= 1500).toBe(true)
        })

        it('should save only five elements into "result" property, event rolling dice more than 5 times', async () => {
            const player = new PokerPlayer()

            await player.getResult()
            await player.getResult()

            expect(player.result.length).toEqual(5)
        })
    })

    describe('standalone "isFiveOfAKind function', () => {
        it('should exist a function named "isFiveOfAKind"', () => {
            expect(typeof isFiveOfAKind).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isFiveOfAKind()).toEqual('boolean')
        })

        it('should return an false if it is not a five of a kind hand', () => {
            const twoPair = diceCounter(combinations.two_pair)

            expect(isFiveOfAKind(values(twoPair))).toBe(false)
        })
        
        it('should return true when it receives 5 dice of same kind', () => {
            const fiveOfAKind = diceCounter(combinations.five_of_a_kind)

            expect(isFiveOfAKind(values(fiveOfAKind))).toBe(true)
        })
    })

    describe('standalone "isFourOfAKind function', () => {
        it('should exist a function named "isFourOfAKind"', () => {
            expect(typeof isFourOfAKind).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isFourOfAKind()).toEqual('boolean')
        })

        it('should return false if it is not a four of a kind hand', () => {
            const twoPair = diceCounter(combinations.two_pair)

            expect(isFourOfAKind(values(twoPair))).toBe(false)
        })

        it('should return true when it receives 4 dice of same kind', () => {
            const fourOfAKind = diceCounter(combinations.four_of_a_kind)

            expect(isFourOfAKind(values(fourOfAKind))).toBe(true)
        })
    })

    describe('standalone "isFullHouse" function', () => {
        it('should exist a function named "isFullHouse"', () => {
            expect(typeof isFullHouse).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isFullHouse()).toEqual('boolean')
        })

        it('should return false if it is not a full house hand', () => {
            const twoPair = diceCounter(combinations.two_pair)

            expect(isFullHouse(values(twoPair))).toBe(false)
        })

        it('should return true when it receives one pair and three of a kind at the same time', () => {
            const fullHouse = diceCounter(combinations.full_house)

            expect(isFullHouse(values(fullHouse))).toBe(true)
        })
    })

    describe('standalone "isThreeOfAKind" function', () => {
        it('should exist a function named "isThreeOfAKind"', () => {
            expect(typeof isThreeOfAKind).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isThreeOfAKind()).toEqual('boolean')
        })

        it('should return false if it is not a three of a kind hand', () => {
            const twoPair = diceCounter(combinations.two_pair)

            expect(isThreeOfAKind(values(twoPair))).toBe(false)
        })

        it('should return true when it receives three dice of the same kind', () => {
            const threeOfAKind = diceCounter(combinations.three_of_a_kind)

            expect(isThreeOfAKind(values(threeOfAKind))).toBe(true)
        })
    })

    describe('standalone "isTwoPair" function', () => {
        it('should exist a function named "isTwoPair"', () => {
            expect(typeof isTwoPair).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isTwoPair()).toEqual('boolean')
        })

        it('should return an false if it is not a two pair', () => {
            const threeOfAKind = diceCounter(combinations.three_of_a_kind)

            expect(isTwoPair(values(threeOfAKind))).toBe(false)
        })

        it('should return true when it receives one pair twice at the same time', () => {
            const twoPair = diceCounter(combinations.two_pair)

            expect(isTwoPair(values(twoPair))).toBe(true)
        })
    })

    describe('standalone "isOnePair" function', () => {
        it('should exist a function named "isOnePair"', () => {
            expect(typeof isOnePair).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isOnePair()).toEqual('boolean')
        })

        it('should return an false if it is not a one pair', () => {
            const threeOfAKind = diceCounter(combinations.three_of_a_kind)

            expect(isOnePair(values(threeOfAKind))).toBe(false)
        })

        it('should return true when it receives two dice of the same kind', () => {
            const onePair = diceCounter(combinations.one_pair)

            expect(isOnePair(values(onePair))).toBe(true)
        })
    })

    describe('standalone "isHighCard" function', () => {
        it('should exist a function named "isHighCard"', () => {
            expect(typeof isHighCard).toEqual('function')
        })

        it('should return a boolean', () => {
            expect(typeof isHighCard()).toEqual('boolean')
        })

        it('should return true when it receives five dice', () => {
            const highCard = diceCounter(combinations.high_card)

            expect(isHighCard(values(highCard))).toBe(true)
        })
    })

    describe('standalone "getHighestDie" function', () => {
        it('should exist a function named "getHighestDie"', () => {
            expect(typeof getHighestDie).toEqual('function')
        })

        it('should return an object', () => {
            expect(typeof getHighestDie()).toEqual('object')
        })

        it('should return an object with the die result as object property and its value as object value', () => {
            const hand = diceCounter(combinations.high_card)

            const { A } = getHighestDie(keys(hand))

            expect(A).toEqual(6)
        })
    })

    describe('standalone "getHandName" function', () => {
        it('should exist a function named "getHandName"', () => {
            expect(typeof getHandName).toEqual('function')
        })

        it('should return a string', () => {
            expect(typeof getHandName()).toEqual('string')
        })

        it('should return "five of a kind" if the player result has five elements equal', () => {
            expect(getHandName(combinations.five_of_a_kind)).toEqual('five of a kind')
        })

        it('should return "four of a kind" if the player result has four elements equal', () => {
            expect(getHandName(combinations.four_of_a_kind)).toEqual('four of a kind')
        })

        it('should return "full house" if the player result has "three of a kind" and "one pair" at the same time', () => {
            expect(getHandName(combinations.full_house)).toEqual('full house')
        })
        
        it('should return "three of a kind" if the player result has three elements equal', () => {
            expect(getHandName(combinations.three_of_a_kind)).toEqual('three of a kind')
        })
        
        it('should return "two pair" if the player result has two elements equal twice', () => {
            expect(getHandName(combinations.two_pair)).toEqual('two pair')
        })
        
        it('should return "one pair" if the player result has two elements equal', () => {
            expect(getHandName(combinations.one_pair)).toEqual('one pair')
        })

        it('should return "[die side]" (example: "9") if the player result has no combinations', () => {
            expect(getHandName(combinations.high_card)).toEqual('A')
        })
    })

    describe('standalone "getScore" function', () => {
        it('should exist a function named "getScore', () => {
            expect(typeof getScore).toEqual('function')
        })

        it('should return a number', () => {
            expect(typeof getScore()).toEqual('number')
        })

        it('should receive the name of the hand and return its proper score', () => {
            /**
             * Examples:
                Five of a kind = 12
                Four of a kind = 11
                Full house = 10
                Three of a kind = 9
                Two pair = 8
                One pair = 7
                High die = depends of die scoring: 1, 2, 3, 4, 5 or 6
             */
            const fullHouse = getHandName(combinations.full_house)
            const twoPair = getHandName(combinations.two_pair)
            const highDie = getHandName(combinations.high_card)

            expect(getScore(fullHouse)).toEqual(10)
            expect(getScore(twoPair)).toEqual(8)
            expect(getScore(highDie)).toEqual(6)
        })
    })

    describe('standalone "checkWinner" function', () => {
        it('should exist a function named "checkWinner"', () => {
            expect(typeof checkWinner).toEqual('function')
        })

        it('should return a string', () => {
            expect(typeof checkWinner()).toEqual('string')
        })

        it('should receive two players (remember, they are PokerPlayer instances), use the previous functions, and return a sentence with the results!', () => {
            const p1 = new PokerPlayer('p1')
            const p2 = new PokerPlayer('p2')

            p1.result = combinations.four_of_a_kind
            p2.result = combinations.one_pair

            expect(checkWinner(p1, p2)).toEqual('p1 wins with "four of a kind" hand (it wins against "one pair" from p2)')
        })
    })
    
    describe('testing more cases', () => {
        const p1 = new PokerPlayer('p1')
        const p2 = new PokerPlayer('p2')
        
        it('should win player 2', () => {
            p1.result = combinations.four_of_a_kind
            p2.result = combinations.five_of_a_kind

            expect(checkWinner(p1, p2)).toEqual('p2 wins with "five of a kind" hand (it wins against "four of a kind" from p1)')
        })

        it('should win player 1', () => {
            p1.result = combinations.three_of_a_kind
            p2.result = combinations.high_card

            expect(checkWinner(p1, p2)).toEqual('p1 wins with "three of a kind" hand (it wins against "A" from p2)')
        })

        it('should be a draw', () => {
            p1.result = combinations.full_house
            p2.result = combinations.full_house

            expect(checkWinner(p1, p2)).toEqual('It is a draw! Both have "full house"')
        })
    })
})