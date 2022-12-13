var customerName = "bob";

var upperCaseCustomerName = function() {
    customerName = customerName.toUpperCase();
}

var setBestCustomer = function() {
    bestCustomer = "not bob";
}

var overwriteBestCustomer = function() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bill";

var changeLeastFavoriteCustomer = function() {
    leastFavoriteCustomer = "ted";
}