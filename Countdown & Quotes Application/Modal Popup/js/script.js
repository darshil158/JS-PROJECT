setTimeout(() => {
  document.getElementById("title").innerHTML = `Coming in 3 Seconds !!!`;
}, 3000);

setTimeout(() => {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}, 5000);

function CloseModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
