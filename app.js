function sounds(){
    if (document.activeElement.id == "w"){
    const audio=new Audio ("./sounds/tom.wav");
    audio.play();
}
else if (document.activeElement.id == "a"){
    const audio=new Audio ("./sounds/boom.wav");
    audio.play();}
else if (document.activeElement.id == "s"){
    const audio=new Audio ("./sounds/clap.wav");
    audio.play();} 
else if (document.activeElement.id == "d"){
    const audio=new Audio ("./sounds/hihat.wav");
    audio.play();} 
else if (document.activeElement.id == "j"){
    const audio=new Audio ("./sounds/kick.wav");
    audio.play();} 
else if (document.activeElement.id == "k"){
    const audio=new Audio ("./sounds/openhat.wav");
audio.play();} 
else if (document.activeElement.id == "l"){
    const audio=new Audio ("./sounds/snare.wav");
    audio.play();}       
}
document.addEventListener("keypress", (e) => {
    if (e.key== "w") {
    const audio=new Audio("./sounds/tom.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});
}
    else if (e.key== "a") {
    const audio=new Audio("./sounds/boom.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});}
    else if (e.key== "s") {
    const audio=new Audio("./sounds/clap.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});}   

    else if (e.key== "d") {
    const audio=new Audio("./sounds/hihat.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
 });}
        
else if (e.key== "j") {
    const audio=new Audio("./sounds/kick.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});}

else if (e.key== "k") {
    const audio=new Audio("./sounds/openhat.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});}

else if (e.key== "l") {
    const audio=new Audio("./sounds/snare.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval(()=>{
    document.getElementById("w").classList.remove("add"),2000
});}
})
