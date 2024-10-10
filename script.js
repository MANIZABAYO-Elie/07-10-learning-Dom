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
const countValue = document.getElementById('count_value');
const plusBtn =  document.getElementById('plusBtn');
const minusBtn =  document.getElementById('minusBtn');
let count =0;
minusBtn.addEventListener('click',function(){
   
    countValue.innerHTML = count--;
    
    console.log("clicked");
})
plusBtn.addEventListener('click',function(){
   
    countValue.innerHTML = count++;
    
    console.log("clicked");
})


