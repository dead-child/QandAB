class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter your number");
    this.input2 = createInput("").attribute("placeholder"," Your name...:");

    //Create a input box to enter the number


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)

    this.q1 = createElement('h3')

    this.Ans1 = createElement('h4')
    this.Ans2 = createElement('h4')
    this.Ans3 = createElement('h4')
    this.Ans4 = createElement('h4')
  
    this.message = createElement('h1')
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box

    this.input2.hide();

    this.q1.hide();

    this.Ans1.hide();
    this.Ans2.hide();
    this.Ans3.hide();
    this.Ans4.hide();

 
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.q1.html("What is Your Favourite Colour?")

  this.Ans1.html("1: Red")
  this.Ans2.html("2: green")
  this.Ans3.html("3: Blue")
  this.Ans4.html("4: Yellow")



    this.input1.position(150, 230);
    this.input2.position(340, 230);

    this.q1.position(150, 80);

    this.Ans1.position(150, 110);
    this.Ans2.position(150, 130);
    this.Ans3.position(150, 150);
    this.Ans4.position(150, 170);


    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

      this.input1.hide()
     
      this.button.hide();
      
      this.input2.hide();

      this.message.html(" Thank you,</br> your feedback has been submitted ")
      this.message.position(200,230)

    })


  }
}
