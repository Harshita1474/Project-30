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
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    if(this.body.speed > 3){
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     pop();
  }

 

};


