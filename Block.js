class Block{
  constructor(x, y, width, height){

    var options = {
      'restitution':1.0,
      'friction':1.0,
      'density':1.0
  }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;

    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position; 
    
    if(this.body.speed < 3){
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   } 

  }

 

};


