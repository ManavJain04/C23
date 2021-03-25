class Box
{
    constructor(x,y,w,h){
        var bop={restitution:1.0}
        this.body=Bodies.rectangle(x,y,w,h,bop);
        World.add(world,this.body)
    }
    display()
    {
        var p=this.body.position;  // fetching body postion
        var a=this.body.angle;
        push()//this is for saving the setttings or capture the settings
        translate(p.x,p.y) //it will change the position
        rotate(a)//it will change the angle 
        rectMode(CENTER);
    fill("green")
    rect(0,0,50,50)
    pop(); //change settings to 0 
   }
}