const assert = require('assert')
const { Given, When, Then } = require ("cucumber");
let app = require(".");

Given("I am on the homepage", function (){
    this.homepage = "homepage"
});

When("I click Start “Trading Button”", function (){
    return "pending";
});

And("I navigate to the “stockbit.com/#/securities/auth” page", function (){
    return "pending";
});

And("I click on the “Login Button”", function (){
    this.loginButton = isItlogin(this.login)
});

And("I Insert the 6 digit pin trading {int} ", function (){
    this.pinLogin = isItlogin(this.pinLogin)
});

Then("I Insert the 6 digit pin trading ", function (){
    assert.equal
});

