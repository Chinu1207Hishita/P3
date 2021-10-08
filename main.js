rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;

function setup()
{
var canvas =  createCanvas(800,700);
canvas.parent('canvas');
video = createCapture(VIDEO);
video.size(800,700);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
pose.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log("poseNet is initialized");
}

function gotPoses()
{
  if (results.length > 0)
  {
    rightWristX =  results[0].pose.rightWrist.x;
    rightWristY =  results[0].pose.rightWrist.y;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}