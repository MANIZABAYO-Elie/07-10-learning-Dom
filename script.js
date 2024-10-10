const submitButton = document.getElementById('submit-button');
const sportsItems = document.querySelector('#sports');
submitButton.addEventListener('click',function(){
    //console.log('hello world');
    changeColor();
    
    
})
function changeColor(){
    sportsItems.style.size = "blue";
}



