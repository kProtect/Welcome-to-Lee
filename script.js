function updateCharCount() {
  let message = document.getElementById("message").value;
  let charCount = document.getElementById("charCount");
  let remaining = 100 - message.length;

  charCount.textContent = remaining;
}
