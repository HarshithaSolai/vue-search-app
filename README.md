
# ABN AMRO Assignment for Front-End Developer 

## Objective : 
  - The purpose of this assignment is to showcase my familiarity with frontend technologies, programming patterns, my ability to write clean and reusable code and my basic knowledge on design. 

  - Create a Single Page Application which allows users to search various topics and view its result in landing page.

## Table of contents:
- [Requirement Analysis](#requirement-analysis)
- [Environment Setup](#environment-setup)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Programming patterns](#programming-patterns)
- [Design](#design)
- [API Endpoints](#api-endpoints)
- [Live Demo](#live-demo)
- [Running Scripts](#running-scripts)

## Requirement Analysis
### Functional Requirments
- Search for a topic (people, organisations, addresses)
- Display search results in vertical tiles (cards)
- Each result card must contain its corresponding fields based on the topic searched
- Create mock API response (JSON) for backend data

Additional Features that I implemented : 
- Filter option to filter the topics to be searched
- Filter option 'All' to search in all the topics and displays the mix of search result topics
- Handling various scenarios like enabling the search button only when user types more than 3 characters
- Showing various status like loading, error and no data scenarios
- On Click of title of search result, User is taken to the Info page. (for now all links take to the same page)

### Non-Functional Requirements
- Responsive & Mobile friendly 
- Performance Optimization
- Maintainability & Reusable code 
- User-friendly Design 
- User Engagement during API data fetch (Loading Indicator)

## Environment Setup
- **node version** : v18.12.1
- **npm version** : 9.2.0
## Tech Stack
- **UI Framework** : Vue (Because that is what I will be using in ABN AMRO and in technical point of view it's easy to develop, component-based architecture so we can create modular and reusable code, its virtual DOM minimizes unnecessary DOM manipulations)
- **Routing** : Vue Router
- **CSS Framework** : Tailwind CSS (Tailwind automatically removes all unused CSS when building for production, responsive design with breakpoints, reusable classes, don't have to spend time on writing long css in style)
- **Data/State Management** : I did not use any state management libraries since the requirement was simple and could be handled with default vue data handling techniques. For complex applications, I would be using Pinia or Vuex for data/state management.
- **Testing Framework** : Jest - Unit testing
- **Bundling** : Vite
- **Hosting** : Netlify (I thought it will be easy for reviewers to see live demo of the app without having to run scripts)

- **Debugging** : Vue-Devtools for Chrome
- **Others** : ES-Lint for linting, Prettier for formatting

## Architecture  
Based on the requirements, I am planning to use Client-Side Rendering Architecture. I am just using Vue without any framework like Nuxt as it is not required for this assignment.

### Programming patterns
- Clean code (Created components based on Single Responsibility and DRY Principles )
- Reusable components (BaseCard component is reused by all topics cards)
- Dymanic component rendering (using dynamic binding :is directive)
- Conditional rendering using (v-if, v-else-if, and v-else directives)
- Loading and Error handling using composables
- Custom Events and Emitting
- I staretd with Options API method of creating components first and then made it reusable using Composition API and composables (It was easy to migrate since it was very similar to native hooks & custom hooks in react). 

## Design
### UX
- Used ABN AMRO Brand Colors and Fonts
- Simple UI with only required info 
- Responsive design : Works in all devices and screen sizes. (followed mobile-first approach using Tailwind CSS) 

### UI Component Hierarchy
  
  ```
  App
    Header 
    HomePage
      SearchComponent
      FilterComponent
      StatusMessage
      CardsList
        BaseCard
          PeopleCard
          AddressCard
          OrganizationCard
    InfoPage
  ```
## API Endpoints 
Used mockaroo to generate mock people, organizations and addresses (JSON format) data, stored in mock-data.json. Created a mock service to utilize ths json data to simulate API call.

## Live Demo
Please check https://vue-search-app.netlify.app/ for live demo.
If you want to run the app in local, please check next section.

## Running Scripts
After cloning the project, you can run the following in the project directory.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Unit Testing

```sh
npm run test
```