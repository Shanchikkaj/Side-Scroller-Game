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
            
            if( (e.key === 'ArrowDown'|| 
              e.key === 'ArrowUp' || 
              e.key === 'ArrowLeft' ||
              e.key === 'ArrowRight')
             
              && this.keys.indexOf(e.key) === -1){
              this.keys.push(e.key);
            }
           
        });
        window.addEventListener('keyup', e =>{
          if(e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' || 
              e.key === 'ArrowLeft' ||
              e.key === 'ArrowRight'
          ){
            this.keys.splice(this.keys.indexOf(e.key),1);
          }
          
        });
      
      }
   }

   class Player{
       constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 200;
        this.height = 200;
        this.x = 0;
        this.y = this.gameHeight -this.height;
        this.image = document.getElementById('playerImage');
        this.frameX =0;
        this.framey = 0;
        this.speed = 0;
       }
       draw(context){
        context.fillStyle = 'white';
        context.fillRect(this.x,this.y,this.width, this.height);
        context.drawImage(this.image, 5*this.width ,1*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
       }
       update(input){
        //horizontal movement
        this.x += this.speed;
        if(input.keys.indexOf('ArrowRight') > -1) {
          this.speed = 5;
        } else if (input.keys.indexOf('ArrowLeft') > -1){
          this.speed = -5;

        }
        else{
          this.speed =0;
        }
        if (this.x < 0) this.x = 0;
        else if(this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width 
       }
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
   const player = new Player(canvas.width, canvas.height);
   player.draw(ctx);
   player.update(input);

   function animate(){
      //update and drawing game
      ctx.clearRect(0,0,canvas.width, canvas.height);
      player.draw(ctx);
      player.update(input);
      requestAnimationFrame(animate);
   }
   animate();
});