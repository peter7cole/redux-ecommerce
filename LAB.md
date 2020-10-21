# LAB REQUIREMENTS

## 36 ([src](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-36/lab/))

### Assignment: E-Commerce Application
- Write a React application that will serve as the online store for a fictional company
- For this assignment, we’ll be using Redux to manage a list of categories and products

### Requirements
- Design your application with a header, main section, and a footer
  - The overall styling is up to you
- Display a list of categories
- When the user selects (clicks on) a category …
  - Identify that category as selected
  - Show a list of products associated with the category
### Implementation Notes/Details
- Manage state in a Redux store
- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger the reducer to filter the product list when the active category is changed
    - HINT: Different reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
- Create 2 components
`<Categories />`
  - Shows a list of all categories
  - Dispatches an action when one is clicked to “activate” it
`<Products />`
  - Displays a list of products associated with the selected category

### Testing
- Tests are not required for this assignment