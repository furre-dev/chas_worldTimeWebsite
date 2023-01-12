# Build a World Time website with React Router

In today's assignment we're going to practice React Router and build a complete website.
It should look similar to this one: [World Time](https://davidshore.github.io/worldTime)

## How to complete this assignment

### Project setup

In the terminal, "cd" into the folder of your project and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm run dev`.

### Build Components for Home Page, About Page, Contact Page and SingleClock

1. The Home Page component should contain a minimum och two Clock components.
2. Create components for the About and Contact page and add a title to each.
3. Make a copy of the Clock-component and name it SingleClock. Make the styles of the clock bigger.

### Install react-router-dom and put the pages together into a website

1. Enter `npm install react-router-dom` in the terminal.
2. Create the layout component Root.jsx that holds the navigation html code and add an <Outlet> component imported from react-router-dom that will represent the content of each page.
3. Create the router object in the main.jsx file using the following code:

```
  const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "clock/:cityKey",
        element: <SingleClock />,
      },
    ],
  },
]);
```

4. Also in main.jsx, make sure you import all the Page-components. 
Then replace `<App />` in the JSX with the following code:
`<RouterProvider router={router} /> `. Import `RouterProvider` from `react-router-dom`.

 
5. Update the Root.jsx component and add links to the pages Home, About and Contact using the `Link` component imported from `react-router-dom`
6. Update Home.jsx wrapping the word `bigger` of each Clock with the `Link` component. Each link should contain a key from the object timeZones found in timeZones.js
7. Remove the props from SingleClock.jsx and use the hook: `useParams()` from `react-router-dom` to get the cityKey
   from the url. import the object in timeZones.js to get the data using the cityKey.

### :books: Reading List

- [React router Getting Started](https://reactrouter.com/en/main/start/overview)

---

### :sos: How to get help

Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your team.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be able to create a website with several pages in React.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Add more content to each page.
1. Add a footer the Root.jsx.
1. Add a 404 error page.
1. Add bread crumbs to SingleClock page.
