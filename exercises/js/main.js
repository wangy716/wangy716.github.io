let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}
let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);


alert('welcome~');
var greeting = prompt('How are you today?(enter good, soso, or bad)');
if(greeting === 'good'){
  alert('Glad to hear!!')
} else if(greeting === 'bad'){
  alert('Sorry to hear that...')
} else{
  alert('seems like you are soso');
}

alert('and...')
var day= prompt('what day is today? (enter 1-5)');
var result = 5-day;
alert(result+'days till Friday!!! FIGHTING!!')





