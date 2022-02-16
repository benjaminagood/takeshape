function header() {
    var x = document.getElementById("header");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

$( document ).ready(function() {
  $( ".three li" ).each(function() {
    var one = Math.floor(Math.random() * (50 - 30 + 1)) + 30 + '%',
        two = Math.floor(Math.random() * (50 - 30 + 1)) + 30 + '%',
        three = Math.floor(Math.random() * (50 - 30 + 1)) + 30 + '%',
        four = Math.floor(Math.random() * (50 - 30 + 1)) + 30 + '%';
    $(this).css({"border-top-left-radius": one, "border-top-right-radius": two, "border-bottom-left-radius": three, "border-bottom-right-radius": four});
  });
});

$( document ).ready(function() {
  $( ".three-article hr" ).each(function() {
    var one = Math.floor(Math.random() * (80 - 30 + 1)) + 30 + '%',
        two = Math.floor(Math.random() * (80 - 30 + 1)) + 30 + '%',
        three = Math.floor(Math.random() * (80 - 30 + 1)) + 30 + '%',
        four = Math.floor(Math.random() * (80 - 30 + 1)) + 30 + '%';
    $(this).css({"border-top-left-radius": one, "border-top-right-radius": two, "border-bottom-left-radius": three, "border-bottom-right-radius": four});
  });
});
