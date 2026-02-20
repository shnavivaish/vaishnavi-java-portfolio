let name="jab we met";
let guess=prompt("enter a guess");
while((name!=guess)&&(guess!="quit")){
    // print("wrong choise do it again");
    guess=prompt("enter again");
  
}
if(guess==name){
    alert("congratulation you guess it right");
}else{
    alert("no problem. may be try it next time");
}
