/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
let temp = {}
for(let i=0;i<transactions.length;i++){
  let t = transactions[i];
  if(temp[t.category]){
    temp[t.category] += t.price;
  }
  else{
    temp[t.category] = t.price;
  }
}

let keys = Object.keys(temp);
let ans = []
for(let i=0;i<keys.length;i++){
   ans.push(
    {
      category : keys[i],
      totalSpent : temp[keys[i]]
    }
   )
}
return ans;

}

module.exports = calculateTotalSpentByCategory;
