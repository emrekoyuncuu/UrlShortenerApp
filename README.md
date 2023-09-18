# Url Shortener App

I've recently started diving into the world of React, and this project marks my very first attempt in this exciting journey. So, without further ado, let me share what I've been up to.

First off, I created an input screen to capture user input. To handle this input effectively, I set up a variable that dynamically captures text as it changes. When you hit the button, it does the job of copying the final version of the text.

After that, I integrated the API from the shrtco site, making good use of the AXIOS library. This API makes it a breeze to grab data that users enter, which is then stored in a variable and shown on the screen. To make it easy for users to copy the content, I used in a library called 'react-copy-to-clipboard.'

It's worth mentioning that sometimes the API doesn't work very well as efficiently with certain links.

To spruce up the navigation, I crafted a nav bar, and for the user interface design, I opted for 'Bootstrap.' However, I'm considering using 'Material UI' for future projects as it might be a better fit.

For handling transitions between pages, I relied on the 'React Router DOM' library. Within the app's about page, I added three card structures using Bootstrap. Some of the buttons in these cards are now clickable, although not all of them have links because this project is more of a test run.

To make the user experience more engaging, I threw in some pre-made CSS animations for the background, without resorting to any additional libraries.

Lastly, I organized the project meticulously, and it now resides in a GitHub repository. You can also check out the live website thanks to GitHub Pages.

# Link

### [Url Shortener App](https://emrekoyuncuu.github.io/UrlShortenerApp/)
##### If you just want the link: https://emrekoyuncuu.github.io/UrlShortenerApp/

# URL Shortener App Architecture

## Frontend

- **React**: Used to build the user interface.
  - Components for input, button, navigation bar, and card structures.
  - Utilizes state to capture and display user input.
  - Integrates with API using Axios.
  - Utilizes 'react-copy-to-clipboard' for easy content copying.
  - Implements CSS animations for background effects.

- **Bootstrap**: Chosen for UI design, including navigation bar and card structures.
- **React Router DOM**: Handles page transitions.
- **Google Fonts**: Used to enhance typography.
- **Vite**: Build tool and development server for the frontend.

## Backend

- **API Integration**: Utilizes the shrtco API.
  - Fetches data from user input.
  - Handles URL shortening.

## Deployment

- **GitHub Pages**: Hosts the live website.

## Flow Chart

![flow_chart](https://github.com/emrekoyuncuu/UrlShortenerApp/assets/80685689/5af20f4b-7ed1-47db-ab17-43791548d57f)
