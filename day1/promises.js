// callbacks
// items:
let check = [
  {name: 'chachapa', price: 15},
  {name: 'pizza', price: 27},
  {name: 'New York Steak', price: 15},
  {name: 'Impossible Burger', price: 12},
]
function totalCheck(items, callback) {
  let sum = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0)
  callback(sum, 0.10);
}

function get10Percet(amount, percent) {
  console.log(amount * percent)
  return amount * percent;
};

// console.log(totalCheck(check, get10Percet));

// promises
function totalCheckPromise(items) {
  return new Promise((resolve, reject) => {
    if (items.length === 0) {
      reject("The check is empty")
    } else {
      let sum = items.reduce((acc, item) => {
        return acc + item.price;
      }, 0)
      resolve(sum);
    }
  })
}

function calculateTip(amount, percentage) {
  console.log(amount * percentage);
  return amount * percentage
}

totalCheckPromise(check)
  .then(sum => {
    calculateTip(sum, 0.05);
  })
  .catch(error => console.log(error));

// inside of a function
async function printTotal(amount) {
  const total = await totalCheckPromise(amount);
  calculateTip(total, 0.05);
}

printTotal(check);