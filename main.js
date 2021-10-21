Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");

Webcam.attach(camera);
function show(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result_show").innerHTML = "<img id='captured_img' src="+data_uri+">";
    })
}
console.log("ml5.version"+ ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wp5Pi5InC/model.json" ,loaded);

function loaded(){
    console.log("model loaded")
}

function identify_pic(){
    img = document.getElementById("captured_img");
    console.log("Hi")
    classifier.classify(img, getResult)
   
}
function getResult(error, results){
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("result_a").innerHTML = results[0].confidence.toFixed(3)
}