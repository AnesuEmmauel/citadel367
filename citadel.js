function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function searchFunction(){
  var btn = document.getElementById("search-icon");
  var form = document.getElementById("search-area");
  var stop = document.getElementById("fullstop")

  if (stop.style.display === "none"){
    form.style.display = "none";
    stop.style.display = "inline"
  }else{
    stop.style.display = "none";
    form.style.display = "inline-flex"
  }
}
