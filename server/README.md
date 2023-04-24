# Power Consumption Backend

## Introduction

This backend project is designed to monitor and report the power usage of a specified application running on a system. The main functionality includes finding the target application's process ID, calculating its power usage based on the system's CPU information, and returning the results through an API endpoint. The backend is built using Node.js and Express.js, along with other middleware and utility libraries.

The primary use case for this backend service is to provide insights into the power consumption of different applications, which can help users and administrators optimize their systems for energy efficiency and performance.

## Prerequisites

To run this backend code, you need the following hardware, software, and dependencies:

- A compatible computer or server running a supported operating system (e.g., Windows, macOS, or Linux)
- Node.js (version 12.x or later)
- npm (version 6.x or later) for managing dependencies

The backend project also relies on the following external libraries and modules:

- express: For creating the web server and handling API routes
- dotenv: For loading environment variables from a .env file
- os-utils: For fetching operating system information
- pidusage: For obtaining CPU usage information of a specified process
- systeminformation: For retrieving detailed system information, including process details
- cors: For handling Cross-Origin Resource Sharing (CORS) in the Express.js server

Ensure that your system meets these prerequisites before attempting to set up and run the backend code.

## Installation

Provide step-by-step instructions on how to set up and install your backend code.

1. Clone the repository
2. Install dependencies using `npm install`
3. Configure environment variables in a `.env` file
4. Run the backend server using `npm start` or a specific command

## Usage

Once the backend server is running, you can use the API endpoint to get the power usage of a specified application. To do this, send an HTTP GET request to the following endpoint:

```bash
http://localhost:<port>/api/power-usage/<app_name>
```

Replace <port> with the port number you specified in the .env file and <app_name> with the name of the application whose power usage you want to monitor. The server will respond with a JSON object containing the application name, process ID (PID), and power usage (in watts).

Example usage:

If the backend server is running on port 3000 and you want to get the power usage for an application called "example-app", send a GET request to:

```bash
http://localhost:3000/api/power-usage/example-app
```

The response might look like:

```json
{
  "appName": "example-app",
  "pid": 12345,
  "powerUsage": "10.23 W"
}
```

Use this API endpoint to integrate the backend service with other components of your application or to build custom monitoring tools for power usage analysis.

## Code Organization

The backend code is organized into several modules, each with a specific purpose. Here's an overview of each module:

### config.js

This file exports a configuration object containing the backend's environment variables. The `dotenv` library is used to load the variables from the `.env` file.

- File name: config.js
- Purpose: Load and export configuration variables for the backend server
- Dependencies: dotenv
- Important variables: `config.port`
- Description: This file exports a configuration object containing the backend's environment variables. The dotenv library is used to load the variables from the .env file.

### appController.js

This file exports the `appTarget` function, which is an asynchronous Express.js route handler for calculating the power usage of a specified application. It utilizes the `getTargetAppPid` and `calculatePowerUsage` functions from the `appMiddleware` module.

- File name: appController.js
- Purpose: Route handler for calculating power usage of a specified application
- Dependencies: appMiddleware module
- Important functions: `appTarget`
- Description: This file exports the appTarget function, which is an asynchronous Express.js route handler for calculating the power usage of a specified application. It utilizes the getTargetAppPid and calculatePowerUsage functions from the appMiddleware module.

### appMiddleware.js

This file exports the `getTargetAppPid` and `calculatePowerUsage` functions. These functions are used to find the target application's process ID and calculate its power usage based on the system's CPU information and the application's CPU usage.

- File name: appMiddleware.js
- Purpose: Provide utility functions for calculating power usage of a specified application
- Dependencies: os-utils, pidusage, systeminformation
- Important functions: `getTargetAppPid`, `calculatePowerUsage`
- Description: This file exports the getTargetAppPid and calculatePowerUsage functions. These functions are used to find the target application's process ID and calculate its power usage based on the system's CPU information and the application's CPU usage.

### appRoute.js

This file exports an Express.js router with a single route for getting the power usage of a specified application by its name. It uses the `appTarget` function from the `appController` module as the route handler.

- File name: appRoute.js
- Purpose: Define the API route for getting power usage of a specified application
- Dependencies: express, appController module
- Important routes: `/power-usage/:appName`
- Description: This file exports an Express.js router with a single route for getting the power usage of a specified application by its name. It uses the appTarget function from the appController module as the route handler.

### app.js

This file sets up and starts the Express.js backend server. It imports the required dependencies and routes, then configures the server to use the routes and listen for incoming connections on the specified port.

- File name: app.js
- Purpose: Initialize and start the backend server
- Dependencies: express, config, appRoute, cors
- Main functionality: Set up and start the backend server
- Description: This file sets up and starts the Express.js backend server. It imports the required dependencies and routes, then configures the server to use the routes and listen for incoming connections on the specified port.

These modules work together to provide a backend service for monitoring and reporting the power usage of specified applications running on a system.

<!-- ## Testing -->

## Contributions

We welcome contributions to this backend project! If you would like to contribute

## License

This backend project is released under the MIT License. By contributing to the project or using the code, you agree to abide by the terms and conditions specified in the license.

The MIT License grants you permission to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the following conditions are met:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.
2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to the LICENSE file in the project repository.

## Contact

If you have any questions, issues, or suggestions regarding this backend project, please feel free to reach out to the project maintainers. You can contact them through the following channels:

- GitHub Issues: Open a new issue on the project's GitHub repository page to report bugs, request features, or ask questions.

Please provide as much information as possible when contacting the project maintainers to help them understand and address your concerns more effectively.
