var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'current least favorite customer';
  leastFavoriteCustomer = 'new least favorite customer'; 
}
