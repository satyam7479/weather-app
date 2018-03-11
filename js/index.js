//var result = parseInt(document.getElementById("result").innerHTML);

//document.getElementById("convert").onclick = function () {
// result =  result * 1.8 + 32;
// document.getElementById("result").innerHTML = result;
//  console.log(result);
//}

function multiplyBy() {
    input = document.getElementById("input").value;
    document.getElementById("result").innerHTML = input * 1.8 + 32;

    var result  = input * 1.8 + 32;

  if (result < 40) {
    document.body.style.backgroundColor = "lightblue";
    }

  else if (result >= 40 && result < 60) {
   document.body.style.backgroundColor = "orange";
   }

  else if (result >= 60 && result < 80) {
   document.body.style.backgroundColor = "yellow";
    }

  else {
    document.body.style.backgroundColor = "red";
   }
  }



