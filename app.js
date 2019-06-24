document.getElementById("calcButton").addEventListener("click", function(e) {
  document.getElementById("loading").style.display = "block";
  document.getElementById("results").style.display = "none";
  document.getElementById("decision").style.display = "none";
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  const width1 = parseInt(document.getElementById("width-1").value);
  const ratio1 = parseInt(document.getElementById("ratio-1").value);
  const diameter1 = parseInt(document.getElementById("diameter-1").value);
  const width2 = parseInt(document.getElementById("width-2").value);
  const ratio2 = parseInt(document.getElementById("ratio-2").value);
  const diameter2 = parseInt(document.getElementById("diameter-2").value);

  const tire1 = (width1 * ratio1 * 2) / 25.4 / 100 + diameter1;
  const tire2 = (width2 * ratio2 * 2) / 25.4 / 100 + diameter2;
  let difference;
  if (tire1 > tire2) {
    difference = Math.abs(((tire1 - tire2) / tire2) * 100);
  } else {
    difference = Math.abs(((tire2 - tire1) / tire1) * 100);
  }

  console.log(tire1);
  console.log(tire2);
  console.log(difference);

  document.getElementById("loading").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("decision").style.display = "block";
  document.getElementById("result").innerHTML = difference.toFixed(2);

  if (difference > 2.5) {
    document.getElementById("decision").innerHTML = "Replace Tires!";
  } else {
    document.getElementById("decision").innerHTML = "The Tires are OK!";
  }
}
