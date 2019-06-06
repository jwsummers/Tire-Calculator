document.getElementById("calcButton").addEventListener("click", function(e) {
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  const width1 = document.getElementById("width-1");
  const ratio1 = document.getElementById("ratio-1");
  const diameter1 = document.getElementById("diameter-1");
  const width2 = document.getElementById("width-2");
  const ratio2 = document.getElementById("ratio-2");
  const diameter2 = document.getElementById("diameter-2");

  const tire1 = (width1 * ratio1 * 2) / 25.4 / 100 + diameter1;
  const tire2 = (width2 * ratio2 * 2) / 25.4 / 100 + diameter2;
  const difference = (tire1 - tire2) / tire2;

  document.getElementById("loading").style.display = "none";

  console.log(width1);
}
