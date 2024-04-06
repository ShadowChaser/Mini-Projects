const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value.toLowerCase();
  const reverse = reverseString(value);
  if (value === 0 || value === "") {
    alert("Enter a value");
  } else if (value === reverse) {
    alert("Palindrome");
  } else {
    alert("Not Palindrome");
  }
}

function clearValue() {
  input.value = "";
}
