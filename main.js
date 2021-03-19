song = "";
leftWristX=0;
rightWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
	stroke("#FF0000");

}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWristX;
        leftWristY=results[0].pose.leftWristY;
        console.log("leftWristX="+leftWristX +"leftWristY="+leftWristY)

        rightWristX=results[0].posse.rightWrist.x;
        rightWristY=results[0].posse.rightWrist.y;
        console.log("rightWristX="+rightWristX +"rightWristY="+rightWristY)
    }
}