class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(250,50);
        
        var input=createInput("Name");
        input.position(250,120);

        var button=createButton("Play");
        button.position(250,180);
        
        var gretting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            gretting.html("hello  "+ name)
            gretting.position(250,100);
        });
   
        
        
    }
}