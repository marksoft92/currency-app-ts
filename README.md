# News App

This is a News App built with React and TypeScript. The app allows users to browse news articles from different countries and view detailed information about each article. It utilizes external APIs to fetch the news data and offers language selection for localized content.

## Installation

1. Clone the repository:


2. Navigate to the project directory:


3. Install the dependencies:


## Usage

To run the application locally, follow these steps:

1. Start the development server:


2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. On the left side of the homepage, you will find a list of countries. Click on a country to see related news articles.

4. After clicking on a country, a responsive table will display the news articles associated with the selected country.

5. Click on a news article to view its details within the application.

6. You can also switch between different languages to display content in your preferred language.

## Technologies Used

The following technologies were used in the development of this project:

- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that improves code quality and developer productivity.
- React Router: Library for declarative routing in React applications.
- Eslint: Tool used for static code analysis and linting to ensure code consistency, readability, and adherence to coding standards.

Other project-specific libraries and tools may be listed here.

## API Information

I utilized external APIs to enhance the functionality of the News App. The chosen API provides news articles and language selection. However, due to limitations in the API, I had to work around the absence of a proper article identifier. As a solution, I used the article title as the identifier. Consequently, I couldn't directly fetch a single article using the REST API. Instead, I had to retrieve articles based on the title from my reducer. Although a book API might have been more suitable for this task, it did not pose a problem for me.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and distribute this code as needed. Contributions are also welcome.
