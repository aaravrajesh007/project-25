class Paper{
constructor(x,y,r){
var options={
   restitution:0.8,
   friction:0.3,
   density:1.2,
}
   this.body=Bodies.circle(x,y,r,options);
   this.r=r;
   this.image=loadImage("images/paper.png");
   World.add(world,this.body);
   }
   display(){
      /*
      var pos=this.body.position;
   fill("blue");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r)
    */
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y ,this.r,this.r);

   }
}