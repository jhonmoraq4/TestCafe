const{Selector} = require ("testcafe");

fixture`login suite`.page('https://www.saucedemo.com/')

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