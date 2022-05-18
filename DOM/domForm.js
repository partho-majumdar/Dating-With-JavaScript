function validateForm() {
  const form = document.forms["myForm"];
  const value = form["fname"].value;

  if (value === "") {
    alert("Please enter your name");
    return false;
  }
}
