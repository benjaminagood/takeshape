function header() {
    var x = document.getElementById("header");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

$( document ).ready(function() {
  $( "li" ).each(function() {
    var one = Math.floor(Math.random() * (50 - 40 + 1)) + 40 + '%',
        two = Math.floor(Math.random() * (50 - 40 + 1)) + 40 + '%',
        three = Math.floor(Math.random() * (50 - 40 + 1)) + 40 + '%',
        four = Math.floor(Math.random() * (50 - 40 + 1)) + 40 + '%';
    $(this).css({"border-top-left-radius": one, "border-top-right-radius": two, "border-bottom-left-radius": three, "border-bottom-right-radius": four});
  });
});
