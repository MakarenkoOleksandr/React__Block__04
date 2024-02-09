## Exercise 1 / Odd Counter

- In App.js declare a button and an `h2`
- Declare at least one [counter] state
- The button should have an onClick event increasing the counter state
- The h2 should render the state only if the counter is odd

https://barcelonacodeschool.com/files/pics/reactb4e1counter.gif

<!-- http://barcelonacodeschool.com/files/currfiles/react_block4_ex1.mp4 -->

Hint: useEffect has a dependency array that can listen to changes in a specific state

**_Your solution goes to the ex01 folder_**

## Exercise 2 / Converter EUR -> USD

- Inside functional App.js we should create two functional components.
- In the first there will only be an input with an onChange event and type="number" sending the user input to the App.js state
- The second component should render the converted value inside an h1
- For the conversion you can use this rate:
  > 1€ = 1.17$
- Extra:
  or you can use an external API to get real exchange rate: https://apilayer.com/marketplace/currency_data-api
  (they will ask you to register and will give you a free plan and an api key)

> Use axios to get the data from the API or fetch; in both cases you can wrap this into useEffect to get the rates on initial load:

```js
// example with axios
// initializing state
  const [rateEURtoUSD, setRate] = useState(1.2);
    // declaring API key
    let apiKey =
      "you_api_key_which_you_can_get_from_https://currencylayer.com/";
    // composing url
    let url = `https://api.apilayer.com/currency_data/live?apikey=${apiKey}`;
    axios
      .get(url)
      .then((res) => {
        // setting rate in state from the incoming data
        setRate(res.data.quotes.USDEUR);
      })
      .catch((error) => {
        console.log(error);
      });
```

```js
// example with fetch
fetch(`https://api.apilayer.com/currency_data/live?apikey=${apiKey}`)
  .then((res) => res.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

> In case of errors about CORS , check this link : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

**_Your solution goes to the ex02 folder_**

## Exercise 3 / Input validation

- In functional App.js create a form with two inputs and a button:
  - one input with `name="email"`, `type="email"` and onChange event updating state.
  - the other input with `name="password"` and onChange event updating state. Note: DO NOT use type="password" if you want the test to see that input. However, adding type="password" is a good practice in real life. 
- In App.js declare the following array of users:
  <!-- const users = [
    { email: "a@a.com", password: "a" },
    { email: "b@b.com", password: "b" },
    { email: "c@c.com", password: "c" },
  ] -->
- Add onSubmit event to the form <!-- <form onSubmit={handleSubmit} >[...]</form> -->
- When button is clicked (or form is submitted aka pressing enter) check if email and password from the inputs exist in users array
- If email and password are correct you should display "Match found successfully" with a green color otherwise "Match not found" in red wrapped in an `h2`.
- In both cases below the message you should display a series of messages with 1s interval inside an `h3`:

  - This message will disappear in 3
  - This message will disappear in 2
  - This message will disappear in 1
  - This message will disappear in 0

- Finally unmount (unrender) the messages.

> Use `setInterval` to display every message for 1 second

https://barcelonacodeschool.com/files/currfiles/reactB4E3.mov

**_Your solution goes to the ex03 folder_**

## Exercise 4 / Display Cart ( function )

- Create a brand new React application with 'Create React App' by running "create-react-app ex04" in the terminal from 03_react/block04 folder.

In the App.js create a shopping cart that will display a list of products in it. For the products you can use the same array from the products page ( below ) but with a new key value pair for the quantity. We assume that all these products have been added to the cart with initial quantity 1.

Requirements:

- use functional components with React Hooks for this exercise
- you should display the total cost of all products rendered inside an `h2`
- you should be able to change each product's quantity using: `<button>+</button>` and `<button>-</button>`
- Once total is 500€ or more you should display 'Free Shipping' message in green, initially or if the total goes below 500€ display 'Shipping will be charged' message in red.

[screenshot of cart example]: (https://barcelonacodeschool.com/files/pics/cur_files/reactB4E4.png)
[screenshot of cart example]: (http://barcelonacodeschool.com/files/pics/cur_files/reactB4E4-02.png)

**_Your solution goes to the ex04 folder_**

<!-- const products = [
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
      quantity: 1
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
      quantity: 1
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
      quantity: 1
    },
  ]; -->
