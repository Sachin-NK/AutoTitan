document.addEventListener("DOMContentLoaded", function () {
    const chatBotIcon = document.getElementById("chatBot");
    const chatContainer = document.getElementById("chatContainer");
    const sendMessage = document.getElementById("sendMessage");
    const userMessage = document.getElementById("userMessage");
    const chatBody = document.getElementById("chatBody");

    // Toggle chat visibility on clicking the chatbot icon
    chatBotIcon.addEventListener("click", function () {
        chatContainer.style.display =
            chatContainer.style.display === "none" ? "flex" : "none";
    });

    // Handle sending messages
    sendMessage.addEventListener("click", async function () {
        const message = userMessage.value.trim();
        if (message) {
            // Append user message
            chatBody.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
            userMessage.value = "";

            // Send the message to the backend
            try {
                const response = await fetch("http://127.0.0.1:8000/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        input: message,
                    }),
                });
                const data = await response.json();

                // Append chatbot response
                chatBody.innerHTML += `<div><strong>Bot:</strong> ${data.response}</div>`;
                chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the latest message
            } catch (error) {
                console.error("Error:", error);
                chatBody.innerHTML += `<div><strong>Bot:</strong> Sorry, something went wrong.</div>`;
            }
        }
    });
});
