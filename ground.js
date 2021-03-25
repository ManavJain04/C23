class Ground{
    constructor(){
        var op={isStatic:true}
        this.body=Bodies.rectangle(200,380,400,20,op);
        World.add(world,this.body)
    
}
   display(){
       var p=this.body.position;
       rectMode(CENTER);
       fill("brown");
       rect(p.x,p.y,400,20);

   }
}