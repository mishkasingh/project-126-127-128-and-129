Peter_pan_song="";
Harry_potter_theme_song="";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
scoreleftWrist = 0;


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
Harry_potter_theme_song = loadSound("music.mp3");
}

function draw() {
    image (video, 0,0,600,530);

fill('#c2e8dc');
stroke('#c2e8dc');

Peter_pan_song = Peter_pan_song.isPlaying();
console.log(Peter_pan_song);

if(scoreLeftWrist > 0.2){
    circle(leftWrist_x,leftWrist_y,20);
    Harry_potter_theme_song.stop();
    if(Peter_pan_song == flase){
        Peter_pan_song.play();
    }
else{
    document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song"
}
}

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
    }
}
