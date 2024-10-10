const submitButton = document.getElementById('submit-button');
const sports = document.querySelectorAll('#sports');
submitButton.addEventListener('click',function(){
    console.log('hello world');
    changeColor();
    
    
})
function changeColor(){
    sports.style.color = "blue";
}



