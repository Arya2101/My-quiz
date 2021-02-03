class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }
   
    getCount(){
      var contestantCountRef = db.ref('ContestantCount');
      contestantCountRef.on("value",(data)=>{
        ContestantCount = data.val();
      })
    }
  
    updateCount(count){
      db.ref('/').update({
        ContestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      db.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = db.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
      allContestant = data.val();
      })
    }
  }  