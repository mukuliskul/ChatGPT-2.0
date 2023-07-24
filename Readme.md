# ChatGPT 2.0 using React and OpenAI API

This is a chat application developed using React and Express, which leverages the power of the OpenAI API to integrate an AI-powered chatbot into a web application. With this application, users can have interactive conversations with the ChatGPT model to obtain responses to their queries and engage in various conversational scenarios.

## Skills Learned

During the development of ChatGPT 2.0 using React and the OpenAI API, several skills were acquired and honed. These skills include:

1. **Front-end Development with React:** Developed proficiency in building interactive user interfaces and components using React. Learned how to manage state, handle user input, and display dynamic content in a React application.

2. **Back-end Development with Express:** Gained experience in setting up a backend server using Express. Learned how to handle HTTP requests, route endpoints, and integrate external APIs into the backend.

3. **API Integration:** Acquired skills in integrating external APIs into web applications. Specifically, learned how to work with the OpenAI API to communicate with the ChatGPT model and retrieve responses based on user input.

4. **Asynchronous Requests:** Learned how to handle asynchronous requests in React and Express to ensure smooth communication between the front-end and backend components of the application.

5. **CSS Styling:** Gained experience in styling web pages using CSS. Learned how to create visually appealing and responsive layouts for the chat application.

6. **Web Application Deployment:** Learned how to set up and deploy a web application using Node.js, React, and Express to make it accessible to users over the internet.

These skills collectively enable the development of interactive and dynamic web applications, paving the way for future projects involving front-end and back-end technologies. The knowledge gained from building ChatGPT 2.0 has prepared the developer to tackle more complex web development challenges and create innovative and user-friendly applications.

## Prerequisites

Before running this application, ensure you have the following installed:

1. Node.js
2. React
3. Express
4. OpenAI API key (Please note that the API key provided in the code has been revoked and will not work. You need to replace it with your own OpenAI API key.)

## Getting Started

Follow the steps below to set up and run the ChatGPT 2.0 application:

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_directory>
```

2. Install the dependencies:

```bash
npm install
```

3. Replace the `apiKey` value in `index.js` with your own OpenAI API key.

4. Start the server:

```bash
node index.js
```

5. Start the React app:

```bash
npm start
```

6. Access the application in your web browser at `http://localhost:3000`.

## How to Use

Once the application is up and running, you can start interacting with the ChatGPT model.

1. The chat window will display the conversation between you and the ChatGPT model.
2. The conversation starts with a default greeting from the ChatGPT model, followed by your response.
3. Type your message in the input field and press Enter to send your message to the ChatGPT model.
4. The model will process your message and generate a response, which will be displayed in the chat window.
5. You can continue the conversation by sending additional messages.

To start a new chat conversation, click on the "+ New chat" button in the side menu. This will clear the chat history, allowing you to begin a fresh conversation.

## Files Overview

### `index.js`

This file contains the backend code for the Express server. It sets up the server to listen on port 3080 and handles incoming POST requests. The OpenAI API is used to generate responses to user messages.

### `app.js`

This file contains the front-end code for the React application. It handles user input and displays the chat history along with the responses from the ChatGPT model.

### `app.css`

This file contains the CSS styling for the React components, defining the layout and appearance of the chat window and input field.

## Important Note

The provided API key in the code has been revoked and will not work. To use the ChatGPT 2.0 application, you need to obtain your own OpenAI API key and replace it in the `index.js` file.

## Credits

This application was developed as a part of gaining experience in building chat applications using React, Express, and the OpenAI API. It demonstrates the integration of external APIs into web applications and showcases the capabilities of front-end development using React and back-end development using Express.

## License

This project is licensed under the MIT License - see the LICENSE file for details.