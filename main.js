nosex = 0;
nosey = 0;

function preload() {
    clownnose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    s = ml5.poseNet(video, modelLoaded);
    s.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotPoses(r) {
    if (r.length > 0) {
        console.log(r);
        nosex = r[0].pose.nose.x - 15;
        nosey = r[0].pose.nose.y - 15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownnose, nosex, nosey, 30, 30);
}

function A() {
    save('myFilterImage.png');
}
