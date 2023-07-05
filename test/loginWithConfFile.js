const{Selector} = require ("testcafe");

fixture`login suite`.page("./")

test('valid login', async (t) =>//the t (test controller) Exposses the test function
{
    await t
        .typeText("#user-name","standard_user")
        .typeText("#password","secret_sauce")
        //.wait(5000)
        .click("#login-button")
        .expect(Selector (".title").innerText)
        .eql("Products")

});

test('invalid login', async (t) =>//the t (test controller) Exposses the test function
{
    await t
        .typeText("#user-name","test")
        .typeText("#password","passtest")
        //.wait(5000)
        .click("#login-button")
        .expect(Selector (`h3[data-test="error"]`).innerText)
        .eql("Epic sadface: Username and password do not match any user in this service")

});