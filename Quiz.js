class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref('GameState');
        gameStateRef.on("value",function(data){
            GameState = data.val();
        })
    }

    update(state){
    db.ref('/').update({
        GameState: state
    })
    }

    async start(){
        if(GameState == 0){
            contestant = new Contestant();
            var contestantCountRef = await db.ref('ContestantCount').once("value");
            if(contestantCountRef.exists()){
                ContestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }

    }
    play(){
        
        question.hide();
        

        
        Contestant.getContestantInfo();
        if(allContestant !== undefined){
            textSize(40);
            fill("blue");
            text("'RESULTS DECLARED'",200,70);
            var display_position = 100;
            for(var plr in allContestant){
                var correctAns = "2";
                if(correctAns == allContestant[plr].answer)
                fill("green");
                else
                fill("red");
                display_position+=40;
                 textSize(25);
                text(allContestant[plr].name + ": " + allContestant[plr].answer, 120,display_position);
            }
        
        }

            }
}
