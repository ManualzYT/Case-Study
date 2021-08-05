Webcam.set({
    width:300,
    height: 300,
    image_format:'png',
    png_quality:99,
    constraints:{
        facingMode:"environment"
    } 
 });
 
 camera = document.getElementById("camera");
 Webcam.attach('#camera');
 
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("preview").innerHTML = '<img id="capture_image" src="'+ data_uri + '">';
     })
 }