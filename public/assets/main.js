const wishlist = new Map();

/**
 * Call this function with a valid SKU and quantity to add a product to the wishlist.
 * It simulates an API request by returning a Promise that will be fulllfilled after 500ms.
 * You are not supposed to modify this function, just use it "as is".
 *
 * @param {string} sku 
 * @param {integer} quantity 
 * @returns Promise<true> | Promise<Error>
 */
window.addToWishlist = (sku, quantity) => {
  // sku should be a string
  if (typeof sku !== 'string' && !(sku instanceof String)) {
    return Promise.reject(new Error('SKU should be a String'));
  }

  // quantity should be an integer
  if (!Number.isInteger(quantity)) {
    return Promise.reject(new Error('Quantity is not an Integer'));
  }

  // validate SKU format
  if (!/^K\d{3}-\d{4}-\d{3}$/.test(sku)) {
    return Promise.reject(new Error(`The SKU "${sku}" has an invalid format`));
  }

  // check if SKU exists
  const validSkus = [
    "K001-0350-001", "K001-0350-002", "K001-1000-001", "K001-1000-002", "K003-0350-001", "K003-0350-002", "K003-1000-001", "K003-1000-002", "K009-0350-001", "K009-0350-002", "K009-1000-001", "K009-1000-002", "K029-0350-001", "K029-0350-002", "K029-1000-001", "K029-1000-002", "K039-0350-001", "K039-0350-002", "K039-1000-001", "K039-1000-002", "K063-0350-001", "K073-0350-001", "K073-0350-002", "K073-1000-001", "K073-1000-002", "K088-0350-001", "K088-1000-001"
  ];

  if (validSkus.indexOf(sku) === -1) {
    return Promise.reject(new Error(`The SKU "${sku}" does not exist`));
  }

  // return ok after 500ms
  return new Promise((resolve) => {
    setTimeout(() => {
      addSku(sku, quantity);

      resolve(true);
    }, 500);
  });
};

const addSku = (sku, quantity) => {
  if (!wishlist.has(sku)) {
    wishlist.set(sku, 0);
  }

  wishlist.set(sku, wishlist.get(sku) + quantity);

  document.querySelector('.wishlist--content').innerHTML = Array.from(wishlist.keys()).map(sku => {
    return `
      <span class="wishlist--sku">${sku}</span>
      <span class="wishlist--quantity">x${wishlist.get(sku)}</span>
    `;
  }).join('\n');

  console.log('%c ADDED TO WISHLIST! ', 'background: #224737; color: #fff', `SKU: ${sku}, qty: ${quantity}`);
};
