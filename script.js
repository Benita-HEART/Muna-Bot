// Function to simulate typing effect
function typingEffect(response, callback) {
  const chatBox = document.getElementById("chatBox");
  let i = 0;
  const interval = setInterval(() => {
    if (i < response.length) {
      const botMessage = document.createElement("p");
      botMessage.textContent = response.substring(0, i + 1);
      botMessage.classList.add('bot-typing');
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
      i++;
    } else {
      clearInterval(interval);
      callback(); // Call the callback after typing effect finishes
    }
  }, 100); // Adjust this to control typing speed
}

// Function to handle chat
function chat() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  const chatBox = document.getElementById("chatBox");
  
  // User input validation
  if (userInput.trim() === "") return;

  // Display user message
  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  chatBox.appendChild(userMessage);
  
  // Chatbot response
  let botResponse = "";

  if (userInput.includes("hello") || userInput.includes("hi")) {
    botResponse = "MunaBot: Hi there! How can I assist you today?";
  } else if (userInput.includes("name")) {
    botResponse = "MunaBot: I am MunaBot, your virtual assistant!";
  } else if (userInput.includes("bye")) {
    botResponse = "MunaBot: Goodbye! See you later.";
  } else if (userInput.includes("time")) {
    botResponse = "MunaBot: I can't tell the time yet, but you can check your device's clock!";
  } else if (userInput.includes("weather")) {
    botResponse = "MunaBot: I’m not able to check the weather right now, but you can use apps like AccuWeather or Google!";
  } else if (userInput.includes("how are you")) {
    botResponse = "MunaBot: I’m doing great, thank you for asking! How about you?";
  } else {
    botResponse = "MunaBot: Sorry, I didn't quite understand that.";
  }

  // Show typing effect before responding
  typingEffect(botResponse, () => {
    const botMessage = document.createElement("p");
    botMessage.textContent = botResponse;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  // Clear the input field
  document.getElementById("userInput").value = "";
}

// Handle click on the Send button
document.getElementById("sendButton").addEventListener("click", chat);

// Allow hitting Enter to send the message
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    chat();
  }
});
