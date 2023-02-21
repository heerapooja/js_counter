let counter = 0;
function increment(){
    counter++;
    document.getElementById("counter").innerHTML = counter;
}
function decrement(){
    if (counter > 0) {
        counter--;
    }
    document.getElementById("counter").innerHTML = counter;
}
function reset(){
    if (counter) {
        counter = 0;
    }
    document.getElementById("counter").innerHTML = counter;
}
