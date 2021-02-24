About

A SPA built with React and Redux that displays products, saves products to carts, and allows users to make pseudo-purchases. This is built over a backend rails api that uses bcrypt for user authentication. Product details come from a restful api provided by RapidAPI. 

Installation
```
* Clone this repository
$ git clone https://github.com/isaiah3031/etsy-esque

# Go into the repository
$ cd etsy-esque

# Install dependencies
$ yarn install
$ bundle install

# Run the backend 
$ cd /etsy-esque
$ rails s -p 3001

# Open a new console(This project requires two servers)

# Go into the frontend folder
$ cd etsy-esque/client

# Add your RapidAPI Key
$ code .env
// REACT_APP_API_KEY=your_api_key 
// Example:
// REACT_APP_GOOGLE_API_KEY=123456

# install frontend dependencies 
$ yarn install

# Run the frontend 
$ PORT=3000 yarn start
```

* Credits
    - [Search Icon](iconfinder.com)
    - [Cart Icon](https://www.iconfinder.com/icons/3338944/business_tools_cart_basket_shopping_cart_trolley_icon)
    - [User Icon](iconfinder.com)
    - [Store Logo](https://www.iconfinder.com/icons/3669215/ic_store_icon)
    - [Create React App](https://create-react-app.dev/)
    - [Target API](https://rapidapi.com/apidojo/api/target1)
