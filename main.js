function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
    rotate
}

function draw(){
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    stroke(255,100,150);
    strokeWeight(8);
    noFill();
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0,0, 300,300, 0, end1);

    stroke(150,100,255);
    strokeWeight(8);
    noFill();
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0,0, 280,280, 0, end2);

    stroke(100,255,150);
    strokeWeight(8);
    noFill();
    let end3 = map(hr%12, 0, 12, 0, 360);
    arc(0,0, 260,260, 0, end3);
}
