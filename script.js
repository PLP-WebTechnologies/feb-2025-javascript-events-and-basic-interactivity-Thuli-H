// 🎨 Change box color randomly
function changeColor() {
  const box = document.getElementById("color-box");
  const colors = ["#ffb6c1", "#ff69b4", "#f06292", "#ec407a"];
  box.style.background = colors[Math.floor(Math.random() * colors.length)];
}

// 🤫 Double-click secret
function revealSecret() {
  document.getElementById("secret").textContent = "🎉 You found the hidden message!";
}

// 🖼️ Image switch
function showImage(thumb, src) {
  document.querySelectorAll(".gallery img").forEach(img => img.classList.remove("active"));
  thumb.classList.add("active");
  document.getElementById("main-img").src = src;
}

// ⌨️ Keypress detection
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    alert("You pressed H! 💖");
  }
});

// ✅ Form validation
function validateForm() {
  let valid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("form-success").textContent = "";

  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("email-error").textContent = "Invalid email format.";
    valid = false;
  }

  if (password.length < 8) {
    document.getElementById("password-error").textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("form-success").textContent = "🎉 Form submitted successfully!";
  }

  return false; // prevent form from submitting
}

// 🔁 Live password feedback
document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("password-error");
  if (this.value.length < 8) {
    feedback.textContent = "Still too short...";
  } else {
    feedback.textContent = "Looks good!";
  }
});

#color-box {
  width: 100px;
  height: 100px;
  background: #ffb6c1;
  margin: 20px auto;
  border-radius: 10px;
  transition: background 0.3s;
}

.gallery {
  text-align: center;
}

.gallery img {
  width: 100px;
  margin: 10px;
  border: 3px solid transparent;
  cursor: pointer;
  border-radius: 8px;
  transition: border 0.3s;
}

.gallery img.active {
  border-color: #d63384;
}

#main-img {
  width: 200px;
  display: block;
  margin: 10px auto;
  border-radius: 12px;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 0.9em;
}

.success {
  color: green;
  font-size: 0.9em;
}

#secret {
  text-align: center;
  font-weight: bold;
  color: #99004d;
}
