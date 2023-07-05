const{Selector} = require ("testcafe");
import LoginPage from "../pageObjects/LoginPage";


fixture`login suite`.page("./")

test('valid login', async (t) =>//the t (test controller) Exposses the test function
{
    LoginPage.login("standard_user", "secret_sauce");

    await t
        .expect(Selector (".title").innerText)
        .eql("Products");

});

test('invalid login', async (t) =>//the t (test controller) Exposses the test function
{
    LoginPage.login("test", "test");
    await t
        .takeScreenshot("./screenshot")
        .expect(Selector (`h3[data-test="error"]`).innerText)
        .eql("Epic sadface: Username and password do not match any user in this service");

});