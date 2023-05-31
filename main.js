function start(){
    recognition.start();
}

function modelLoaded(){
    console.log("model is Loaded!");
}

console.log('ml5 version - ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.com/models/72Ed_tLWz/model.json',modelLoaded);

function gotResult(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
    }
}