Webcam.set({
    height: 250,
    width: 250,
    image_type: "png",
    png_quality: 50,
    constraints:{
    facing_mode: "environment"
}
});
Webcam.attach("#camera");
function snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = "<img id='picture' src='"+data_uri+"'>"
    });
}
classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
 image = document.getElementById("picture");
 classifier.classify(image, identify);
}
function identify(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("identification").innerHTML = result[0].label;
    }
}
