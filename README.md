# CPU Monitor

Simple, effective CPU monitor tool built on React, Chart.js, Node (via the OS module) and WebSockets.

## Features
- A real-time chart that displays the CPU load trend over the last 10 minutes
- Automatically alerts the user if high CPU load is detected (and when it recovers as well)
- Keeps track of all the previous alerts

## Getting started
1. *npm install* to install all dependencies
2. *npm start* to build and initiate the application (accessed via localhost:5000)

In addition, *npm run dev* is available for access to hot reloading during the dev process, and *npm test* starts the test script.

## Design decisions/Areas for improvement
- The Context API and useReducer hook combination was chosen to help achieve a Flux-like architecture without resorting to a third-party framework like Redux, which may be overkill for the scope of this application. However, if we expect the app to scale much further functionality-wise, I would consider transitioning over to Redux (the ability to combine multiple reducers and have just one dispatch function is important for predictability in a larger-scale application).
- Currently, both the CPU service and the Express server setup are stored in a monolithic fashion in the same file. However, in a production environment, I would separate out the CPU service from the Express server due to the service needing to live on the host's own environment.
- I would also think about the multi-user aspect of the application in a production environment - the address to the WS server established by the CPU service needs to be stored in a remote service and tied to a certain user ID to allow for access to the CPU data from the correct machine.
- For a more enhanced dev environment, I would also consider dockerizing the Node environment for the Express server in order to provide consistency among multiple developers.