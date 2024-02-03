# Dashboard Framework Demo App
This repository houses a versatile Dashboard Framework designed to streamline the development of client-specific dashboards. The framework provides a set of reusable components, allowing easy configuration of dashboards with varying layouts, column numbers, and widget arrangements.

## Techstack
##  ![javascript-color](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/5baa6eb0-ef53-49a2-9445-328f78567010) JavaScript, ![react-color](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/298662a4-b2b8-45c2-81c1-b8b199bd4e77) React, ![tailwindcss-color](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/4df9e04f-2c66-4bc9-89f8-5c466c3a9ea0) Tailwind CSS, ![jest-color](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/4d0a5aa0-e98a-4632-b7b7-36f9e035bbc9) Jest, ![webpack-color](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/5a8db7ff-5cc7-4def-84d0-6475e4f49db0) Webpack

## Folder structure
- **src/design-system/Dashboard** - this is the **dashboard framework** being used by the **dashboard-framework-demo-app**.
   - this contains separate components, hooks and files that is sole purpose is to standalone to the **dashboard framework**.
   - I've been planning to create a another repository for the **dashboard framework** which will be installed and imported by the **dashboard-framework-demo-app**, but just for simplicity and quickly finished the app added the dashboard framework in this repository.
   - This accepts a configuration that will be automatically rendered by the **dashboard framework** based on the data in the configuration.
- src/assets - contains static files for **dashboard-framework-demo-app**.
- src/components - contains reusable components for the **dashboard-framework-demo-app**.
- src/constants - constants for **the dashboard-framework-demo-app**.
   - src/constants/DashboardConfiguration - contains the configuration being used by the **dashboard-framework-demo-app**, and which is being passed to the **dashboard framework**.
- src/pages - contains the pages of the **dashboard-framework-demo-app**.
- src/routes - contains the routes of the **dashboard-framework-demo-app**.
- src/routes - contains the utils for the **dashboard-framework-demo-app**.
  
## Files structure
- *.jsx - contains a react component.
- *.js - contains javascript files.
- *.test.js - contains the test files.
- Applied **barrel export patter**n. As you will notice there are index files for each folder that exports the actual component. This helps to simplify imports and make the project structure more organized.

## Pre-requisites
- Have node installed in your machine
- Recommended node version: **v18.18.0** before installing dependencies and running application. This is also to install the version of dependencies for this project.
  
## How to run
1. Clone the repository.
2. Access repository directory using command line.
3. run "npm install".
4. run "npm run start".
5. The application is running on port 8080 and access it with localhost:8080.

## How to run unit tests
1. Clone the repository.
2. Access repository directory using command line.
3. run "npm install".
4. run "npm run coverage".
5. The application is will now run the test and you can view the coverage report under the coverage folder generated jest.

### Unit Tests Results
![image](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/4bdcc1b9-533c-458d-bb6c-0db3fc522509)
![image](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/59ec2a1c-2af1-43ba-80db-bcfb583f14aa)

## Site Images
### Desktop
![default-dashboard](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/0f253a4e-168e-47e5-90b7-180a9b843f12)
![app-initialize](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/c084ffb2-17ca-4198-857e-0e5a4f7cc267)
![error-screen](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/8b791752-8198-4462-acb9-4953e58f7f09)

### Mobile
![screencapture-localhost-8080-2024-02-03-16_48_26](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/a52ae387-6f54-4ecc-a3c7-8e4d6f8ae1c6) <br/>
![screencapture-localhost-8080-2024-02-03-16_47_51](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/d75ff29f-1df8-4ac7-8241-65739c1078c4)  <br/>
![screencapture-localhost-8080-2024-02-03-16_48_10](https://github.com/jercatallo/dashboard-framework-demo-app/assets/49897728/9b43cf84-2d35-4a8d-8aad-2304c0dc62ea)  <br/>

