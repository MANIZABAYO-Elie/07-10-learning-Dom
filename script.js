const submitButton = document.getElementById('submit-button');
const sportsItems = document.querySelector('#sports');
const thanks   = document.querySelector('#thanks')
submitButton.addEventListener('click',function(){
    //console.log('hello world');
    changeColor();
    //display()
    
    
})
function changeColor(){
    sportsItems.style.size = "blue";

}
function display(){
    thanks.innerHTML = "thanks for reaching with us"
}



