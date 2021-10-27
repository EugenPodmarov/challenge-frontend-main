# Coffee Circle Frontend Assessment

This test is a part of our hiring process at Coffee Circle for the Frontend Engineer position. It
should take you a maximum of five hours to complete the task and send us back the results.  What we
look for is the overall presentation, design, the file structure, readability and maintainability.

## The Task

Alicia is a long time fan of the coffees from Coffee Circle. As someone who loves discovering new
flavors, she wants to keep track of her future purchases by creating a wishlist of coffees (and
their variations) that she will buy next.

### **Requirements:**

* Display a list of all coffees from `src/coffees.json`, in an aesthetically pleasing presentation,
  that works across multiple screen sizes. You should use React (mandatory) and the styling
  tool you are most familiar with (styled components, css modules, bootstrap, bulma, tailwind, etc).
  Feel free to utilize any js and npm libraries/tools you think are necessary. **Whatever makes you most
  productive, go for it!**
* Within each coffee on the list, users should be able to select specific variations
  (ground vs whole beans, 350g vs 1kg), like in our main website (https://www.coffeecircle.com/en/p/limu).
  It's also ok to have preselected defaults on the first `render()`.
* There should be a way to add a coffee into the wishlist, by calling the already existing `window.addToWishlist()` method.

#### Function: `window.addToWishlist(sku, quantity)`

This is an asynchronous function that simulates an API call, and returns a **Promise that resolves to true
(with a delay) if you pass correct parameters, or rejects with an `Error` if something is
incorrect** (sku is invalid or does not exist, quantity is not a valid integer, etc).

The first parameter is the SKU (Stock Keeping Unit, a default term in eCommerce), and is assembled based on:
**skuBase + variant size code + variant grind code** (all separated by a `-`). For example (Limu coffee blend,
one of the coffees taken from `src/coffees.json`):

```json
{
  "skuBase": "K001",
  "name": "Limu",
  "preparation": "filter-coffee",
  "price": 9.9,
  "image": "https://www.coffeecircle.com/media/image/26/20/53/limu_freisteller_shopware_600x600.jpg",
  "variants": {
    "size": [
      { "label": "350 g", "code": "0350" },
      { "label": "1 kg", "code": "1000" }
    ],
    "grind": [
      { "label": "whole beans", "code": "001" },
      { "label": "ground", "code": "002" }
    ]
  }
}
```

So if you want to add a `Limu Coffee, 1kg, whole beans`, the full SKU of this variation would be `K001-1000-001`
(**skuBase + variant size code + variant grind code**). Just use the already existing method:

```js
window.addToWishlist('K001-1000-001', 1);
```

### Bonus Points if you...

* Handle promise rejections within the UI, for cases where `addToWishlist()` fails.
* Add unit or cypress tests (you can find examples for unit tests here `src/Placeholder.test.js`, and end-to-end tests with cypress on `tests/e2e/tests/index.js`)
* Group the coffees by brewing method (`preparation` property in the .json file)
* Add the option to sort the list (eg: by price, alphabetically, etc.)
* Implement your own ideas and surprise us.

## Getting started

The base repo uses Create React App, so `npm install` then `npm start` should be all you need to
start building things. Your focus shall be on on the `src/` folder, the **`src/index.js`
being the main entrypoint**, and you can start hacking your own solution from there.

The `/public` contains the layout and some minimum functionality and design of the page, but you dont need
to change anything there.

## Submitting your code

1. You can push your solution to a private repository on GitHub, and send us a link (and give read permissions to github user `vitormv`).
2. As a fallback, you can also create a `.zip` of everything, and send it back to vitor@coffeecircle.com.
