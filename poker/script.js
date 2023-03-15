class PokerPlayer {
  constructor(player) {
    this.name = player + '';
    this.result = [];
    }
  
   rollDie() {
    
    
     const iPromise = () => {
        return  new Promise((resolve, reject)  => {
         setTimeout(() => {

          let array = ["A", "8", "9", "J", "Q", "K"]
        let rand = Math.floor(Math.random()*array.length);
        let aValue = array[rand];
           resolve(aValue)
          }, 300)
         } ) 
        }
         return  iPromise()
            
  }

  async getResult() {
    
    for (let index = -1; ++index < 5;) {
      
     const result = await this.rollDie();
      if(this.result.length < 5){
        this.result.push(result)
      }
    }
   }
  }
  const getHandName = () => {
     if (player === combinations,isFiveOfAKind){
      console.log('five of a king')
     }
   }
    
     

     const getScore = () => {

     }

     const checkWinner = () => {

     }

