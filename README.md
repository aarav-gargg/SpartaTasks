#Frontend Developer Technical Evaluation
Project Overview
This repository contains my solutions for two tasks selected from the Frontend Developer (Intern) technical evaluation. The tasks demonstrate proficiency in API handling, dynamic UI elements, and form management using frontend technologies like HTML, CSS (Tailwind CSS), JavaScript, and Axios.

Task 1: Fetching Data from an API and Displaying It
Objective:
To fetch data from a public API (https://fakestoreapi.com/products) and display the fetched data in a structured and styled format. The solution focuses on correct data fetching, error handling, and responsiveness.
Approach:
1. Axios was used to fetch data asynchronously using the async/await syntax for cleaner and more readable code.
2. Tailwind CSS was used for responsive styling to ensure the layout adjusts to different screen sizes.
3. Basic error handling was implemented to manage API failures gracefully by displaying an error message to the user.
4. A loading state was added to indicate that the data is being fetched.

Task 2: Interactive Card Display
Objective:
To implement four content cards where the first card’s content is visible by default, and clicking on any other card reveals its content while hiding the others.
Approach:
1.JavaScript click event handlers were used to toggle the visibility of cards. Only one card’s content is visible at any given time.
2.Tailwind CSS was used to create a clean and responsive layout for the cards, ensuring a smooth user experience across different devices.
3.The implementation ensures that the UI remains intuitive and interactive, without page reloads.

Task 3: Candidate Registration Form with Dynamic Features.
Objective:
Design and implement a candidate registration form that captures essential information, focusing on dynamic interactions and validation.

Approach:
1. The form consists of multiple sections: Basic Information, Address Information, and Educational Qualifications.
2. A checkbox allows users to copy their Permanent Address to the Current Address fields automatically.
3. The form dynamically displays relevant fields based on the qualification selected (12th, Graduation, Post Graduation).
4. Validation is implemented to ensure that required fields are not empty and that passwords match.
5. The Confirm Password and Password fields include toggle visibility functionality.
6. On successful form submission, the data entered is displayed on a separate page.

Installation Instructions:
Clone the repository:
    git clone [<repository-url>](https://github.com/aarav-gargg/SpartaTasks.git)
Install the packages
    npm install 
Run the folder
   npm run dev
