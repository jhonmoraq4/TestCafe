fixture `request`;
test("Get Request" , async (t) => {
    
 const results = await t.request ({
     method: "GET",
     url: "https://jsonplaceholder.typicode.com/todos/1",
    // body: {name: 'Jhane Doe', position: 'CTO'},
    // params: { udi:503, auth: true},
    // withCredentials:true,
    // auth: {username:'admin', password:'1234'},
    // headers:{"Accept":"text/html"}
 });

 await t.expect(results.body.title).eql("delectus aut autem");
 await t.expect(results.body.userId).eql(1)
 await t.expect(results.status).eql(200)
    
})