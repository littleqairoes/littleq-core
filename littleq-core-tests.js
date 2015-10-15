// Write your tests here!
// Here is an example.
Tinytest.add('example 1', function (test) {
  test.equal(true, true, "Test run to see if it works");
});


Tinytest.addAsync("example 2", function(test, done){
	test.equal("1", "1", "Hehehe")
	done();
})