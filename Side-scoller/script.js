window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;


   class InputHandler{
    //keyboard events
      constructor(){
        this.keys = [];
        window.addEventListener('keydown', e =>{
            console.log(e.key);
            if(e.key === "ArrowDown"){
              this.keys.push(e.key);
            }
            console.log(e.key, this.keys);
        });
      }
   }

   class Player{

   }

   class Background{

   }

   class enemy{

   }
    
   function handleEnemies(){
     // add and remove enemies
   }

   function displayStatusText(){
     //display score

   }

   const input = new InputHandler();

   function animate(){
      //update and drawing game

   }
});