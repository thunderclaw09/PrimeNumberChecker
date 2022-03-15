function SubmitBtn(){
  console.log("The button was pressed!");
  var number = document.getElementById("TheInput").value;
  console.log("Value:", number);
  var answerYes = "<h3>The number is a prime number.</h3>";
  var answerNo = "<h3>The number is not a prime number.</h3>";

  var divisor = 2;
  while (true){
    var remainder = number % divisor;
    if (remainder > 0){
      divisor++;
    }else if(remainder == 0){
      document.write(answerNo, "It is divisible by ", divisor);
      console.log("The number is not a prime number.");
      break;
    }else if(divisor == number){
      document.write(answerYes);
      console.log("The number is a prime number.");
      break;
    }
  }
}