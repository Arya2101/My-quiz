class Question{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.input2 = createInput("Enter the correct option no.");
        this.button = createButton('Submit Your Response');
        this.title = createElement('h1');
        this.question1 = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        
    }
    hide(){
        this.input2.hide();
        this.button.hide();
        this.input.hide();
        this.question1.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.title.hide();
        
        
      }

    display(){
        this.title.html("MY QUIZ");
        this.title.position(600,20);
    
        this.question1.html("Question:- What has 4 legs but cannot move?")
        this.question1.position(280,80);

        this.option1.html("1: Elephant");
        this.option1.position(280,100);

        this.option2.html("2: Table");
        this.option2.position(280,120);

        this.option3.html("3: Human");
        this.option3.position(280,140);

        this.option4.html("4: Cannot determine");
        this.option4.position(280,160);
        
        this.input.position(280,240);
        this.input2.position(510,240);
        this.button.position(730,240);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.input2.hide();
            contestant.name = this.input.value();
            contestant.answer = this.input2.value();
            ContestantCount+=1;
            contestant.index = ContestantCount;
            contestant.update();
            contestant.updateCount(ContestantCount);
            
        })

    }
}   