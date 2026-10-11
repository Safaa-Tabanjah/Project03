let count =0;

const result = document.getElementById("counter");
const incrementBtn = document.getElementById("Increment");
const decrementBtn = document.getElementById("Decrement");
const resetBtn = document.getElementById("Reset");


incrementBtn.addEventListener("click", function() {
  count+=1
  result.textContent = count;

  if (count > 0) {
    result.style.color = "green";
  } else if (count < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "black";
  }     
});

decrementBtn.addEventListener("click", function() {
    count-=1
    result.textContent = count;

    if (count > 0) {
      result.style.color = "green";
    } else if (count < 0) {
      result.style.color = "red";
    } else {
      result.style.color = "black";
    }
});

resetBtn.addEventListener("click", function() {
    count = 0;
    result.textContent = count;
    result.style.color = "black";
});


