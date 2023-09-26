# Currency Exchange Rate App

![React Badge](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript&logoColor=white) 
![React Router Badge](https://img.shields.io/badge/React%20Router-6.9.0-CA4245?logo=react-router&logoColor=white) 
![ESLint Badge](https://img.shields.io/badge/Eslint-8.0.1-4B32C3?logo=eslint&logoColor=white) 
![Ant Design Badge](https://img.shields.io/badge/Ant%20Design%20Icons-5.0.1-0170FE?logo=ant-design&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green)

## Description 🔥

This is a Currency Exchange Rate App built with React and TypeScript. The app allows users to check exchange rates for various currencies in comparison to the Polish Złoty (PLN). It provides the latest exchange rates and historical time series data for selected currencies.

## Installation

1. Clone the repository:


2. Navigate to the project directory:


3. Install the dependencies:
   ### Certainly! Here's the updated information with shield icons representing the versions of your project's dependencies in blue:

---

**Node.js and npm Version Requirements**

Before setting up this project, please ensure that you have Node.js and npm installed with the following minimum versions:

- ![Node.js Badge](https://img.shields.io/badge/Node.js-14.17.0%20or%20higher-blue)
- ![npm Badge](https://img.shields.io/badge/npm-7.24.0%20or%20higher-blue)

You can download and install Node.js from [here](https://nodejs.org/).

---

**Project Dependencies**

The project relies on various dependencies to function correctly. Below is a list of key dependencies and their versions:

- **@ant-design/icons**: ![Ant Design Icons](https://img.shields.io/badge/Ant%20Design%20Icons-5.0.1-blue)
- **@reduxjs/toolkit**: ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.3-blue)
- **@testing-library/jest-dom**: ![Testing Library Jest DOM](https://img.shields.io/badge/Testing%20Library%20Jest%20DOM-5.16.5-blue)
- **@testing-library/react**: ![Testing Library React](https://img.shields.io/badge/Testing%20Library%20React-13.4.0-blue)
- **@testing-library/user-event**: ![Testing Library User Event](https://img.shields.io/badge/Testing%20Library%20User%20Event-14.4.3-blue)
- **@types/jest**: ![Types Jest](https://img.shields.io/badge/Types%20Jest-27.5.2-blue)
- **@types/node**: ![Types Node](https://img.shields.io/badge/Types%20Node-17.0.45-blue)
- **@types/react**: ![Types React](https://img.shields.io/badge/Types%20React-18.2.22-blue)
- **@types/react-dom**: ![Types React DOM](https://img.shields.io/badge/Types%20React%20DOM-18.2.7-blue)
- **antd**: ![Ant Design](https://img.shields.io/badge/Ant%20Design-5.3.2-blue)
- **axios**: ![Axios](https://img.shields.io/badge/Axios-1.3.4-blue)
- **dayjs**: ![Dayjs](https://img.shields.io/badge/Dayjs-1.11.7-blue)
- **dotenv**: ![dotenv](https://img.shields.io/badge/dotenv-16.3.1-blue)
- **node-less**: ![node-less](https://img.shields.io/badge/node-less-1.0.0-blue)
- **node-sass**: ![node-sass](https://img.shields.io/badge/node-sass-8.0.0-blue)
- **react**: ![React](https://img.shields.io/badge/React-18.2.0-blue)
- **react-dom**: ![React DOM](https://img.shields.io/badge/React%20DOM-18.2.0-blue)
- **react-intl**: ![React Intl](https://img.shields.io/badge/React%20Intl-6.3.2-blue)
- **react-redux**: ![React Redux](https://img.shields.io/badge/React%20Redux-8.0.5-blue)
- **react-router**: ![React Router](https://img.shields.io/badge/React%20Router-6.9.0-blue)
- **react-router-dom**: ![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.9.0-blue)
- **react-scripts**: ![React Scripts](https://img.shields.io/badge/React%20Scripts-5.0.1-blue)
- **typescript**: ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
- **web-vitals**: ![Web Vitals](https://img.shields.io/badge/Web%20Vitals-2.1.4-blue)

Please note that these versions are subject to change as new releases become available. It's essential to keep your project's dependencies up-to-date for security and compatibility reasons.

---

**Installing Dependencies**

Once you've verified that your Node.js and npm versions meet the requirements, you can install the project's dependencies by running the following command in your project directory:

```bash npm install```

This command will download and install all the necessary dependencies listed in your project's `package.json` file.

---

Feel free to reach out if you have any further questions or need additional assistance.


4. Create a `.env.local` file in the project's root directory.

5. In the `.env.local` file, add your API key as follows:

REACT_APP_API_KEY=YOUR_API_KEY


6. Save the `.env.local` file.

## Usage

To run the application locally, follow these steps:

1. Start the development server:


2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. On the left side of the homepage, you will find a list of currencies. Click on a currency to see its latest exchange rate.

4. After clicking on a currency, you will also see a historical time series chart displaying the exchange rate data for that currency over time.

5. You can switch between different currencies and view their exchange rate details.

6. The app provides language selection options for localized content.

## Technologies Used

The following technologies were used in the development of this project:

- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that improves code quality and developer productivity.
- React Router: Library for declarative routing in React applications.
- Eslint: Tool used for static code analysis and linting to ensure code consistency, readability, and adherence to coding standards.

Other project-specific libraries and tools may be listed here.

Certainly! Here's the updated information regarding the API usage in your Currency Exchange Rate App:

---

**API Integration**

The Currency Exchange Rate App integrates with external APIs to provide users with up-to-date currency exchange rate information and historical time series data. One of the primary APIs used in this application is the [ExchangeRates Data API](https://apilayer.com/marketplace/exchangerates_data-api), offered by apilayer.

**ExchangeRates Data API**

- **Provider**: apilayer
- **Purpose**: The API is employed to efficiently retrieve currency exchange rate data for various currencies, ensuring that users have access to accurate and current information.

By leveraging the capabilities of the ExchangeRates Data API, the Currency Exchange Rate App delivers a seamless and informative currency exchange experience.

---

Should you have any further questions or require additional information, please don't hesitate to reach out.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and distribute this code as needed. Contributions are also welcome.
