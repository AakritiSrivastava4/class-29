class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(9);
            push ();
            stroke ("#ff0c0c");
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            line (pointA.x, pointA.y, pointB.x+20, pointB.y);
            pop ();
        }
        image(this.sling1,200,80,30,140)
        image(this.sling2,180,70,30,100)
    }
    
}