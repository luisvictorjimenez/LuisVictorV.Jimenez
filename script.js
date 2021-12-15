function myFunction() {
    var x = document.getElementById("JS");
    x.value = x.value.toUpperCase();
  }
  
  function confirmInput() {
    JS = document.forms[0].JS.value;
    alert("Hello " + JS + "! Redirecting to EMAIL...");}