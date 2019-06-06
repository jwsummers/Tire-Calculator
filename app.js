document.getElementById("calcButton").addEventListener("click", function(e) {
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);
  document.getElementById("results").style.display = "block";

  e.preventDefault();
});

function calculateResults() {
  const width1 = document.getElementById("width-1").value;
  const ratio1 = document.getElementById("ratio-1").value;
  const diameter1 = document.getElementById("diameter-1").value;
  const width2 = document.getElementById("width-2").value;
  const ratio2 = document.getElementById("ratio-2").value;
  const diameter2 = document.getElementById("diameter-2").value;

  const tire1 = parseInt((width1 * ratio1 * 2) / 25.4 / 100 + diameter1);
  const tire2 = parseInt((width2 * ratio2 * 2) / 25.4 / 100 + diameter2);
  const difference = ((tire1 - tire2) / tire2) * 100;

  document.getElementById("loading").style.display = "none";
  document.getElementById("result").innerHTML = difference.toFixed(2);

  if (difference > 2.5) {
    document.getElementById("decision").innerHTML = "Replace Tires!";
  } else {
    document.getElementById("decision").innerHTML = "The Tires are OK!";
  }
}
