# CPU Monitor

Simple, effective CPU monitor tool built on React, Chart.js, Node (via the OS module) and WebSockets.

## Features
- A real-time chart that displays the CPU load trend over the last 10 minutes
- Automatically alerts the user if high CPU load is detected (and when it recovers as well)
- Keeps track of all the previous alerts

## Getting started
1. *npm install* to install all dependencies
2. *npm start* to build the application and initiate the Express server (accessed via localhost:5000)

In addition, *npm run dev* executes a dev environment with hot loading available, and *npm test* starts the test script.

## Design decisions/Areas for improvement
- The Context API and useReducer hook combination was chosen to help achieve a Flux-like architecture without resorting to a third-party framework like Redux, which may be overkill for the scope of this application. However, if we expect the app to scale much further functionality-wise, I would consider transitioning over to Redux (the ability to combine multiple reducers and have just one dispatch function is important for predictability in a larger-scale application).
- Chart.js was chosen over D3 for its simplistic yet highly customizable way of creating a chart graph. However, if we foresee needing a more complex visualization, I would still opt for D3.
- WebSockets was chosen over long polling in order to reduce the overhead that comes with constant HTTP requests. However, I would look into SSE as it provides better backward-compatibility (via polyfill) and the app only requires a uni-directional data flow.
- Currently, both the CPU service and the Express server setup are stored in a monolithic fashion in the same file. However, in a production environment, I would separate out the CPU service from the Express server due to the service needing to live on the host's own environment. Also, currently the WS server address is hardcoded in the React application, but in production, this would likely need to be a variable that differs depending on the user logged into the application (each user will have its own associated WS address).
- For a more enhanced dev environment, I would also consider dockerizing the Node environment for the Express server in order to provide consistency among multiple developers.