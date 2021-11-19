function setup() {
    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO)
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#3dffe1");
    textSize(difference);
    fill("#000000");
  
    text("💕",50, 400);

}


function ModelLoaded() {
    console.log("dummy function to trigger the poseNet model")
}

var difference = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x


        difference = floor(leftWristX - rightWristX);
    }

}