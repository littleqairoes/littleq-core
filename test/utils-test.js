Tinytest.add("LittleQCore.utils should exist", function(test){
	test.isNotNull(LittleQCore.utils, "should exist")
})

Tinytest.add("LittleQCore.utils.camelToDash should change camel text to dashed", function(test){
	var arr = [
		{
			val: "thisIsCamelText",
			exp: "this-is-camel-text"
		},
		{
			val: "camelText",
			exp: "camel-text"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.camelToDash(arr[i].val), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.underscoreToDash should change underscores to dash", function(test){
	var arr = [
		{
			val: "this_is_camel_text",
			exp: "this-is-camel-text"
		},
		{
			val: "camel_text",
			exp: "camel-text"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.underscoreToDash(arr[i].val), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.dashToCamel should change dashed to camel", function(test){
	var arr = [
		{
			val: "this-is-camel-text",
			exp: "thisIsCamelText"
		},
		{
			val: "camel-text",
			exp: "camelText"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.dashToCamel(arr[i].val), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.camelCaseify should camel-case-ify texts", function(test){
	var arr = [
		{
			val: "this is camel text",
			exp: "thisIsCamelText"
		},
		{
			val: "camel text",
			exp: "camelText"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.camelCaseify(arr[i].val), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.trimWords should trim words from long text given number", function(test){
	var arr = [
		{
			val: "this is camel text",
			val2: 3,
			exp: "this is camel…"
		},
		{
			val: "camel text",
			val2: 1,
			exp: "camel…"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.trimWords(arr[i].val, arr[i].val2), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.capitalize should capitalize text", function(test){
	var arr = [
		{
			val: "this is camel text",
			exp: "This is camel text"
		},
		{
			val: "camel text",
			exp: "Camel text"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.capitalize(arr[i].val), arr[i].exp, "should be equal")
	}
})

Tinytest.add("LittleQCore.utils.nl2br should change \\n to <br />", function(test){
	var arr = [
		{
			val: "this is\ncamel text",
			exp: "this is<br />\ncamel text"
		},
		{
			val: "camel\ntext",
			exp: "camel<br />\ntext"
		}
	]	
	for (var i in arr) {
		test.equal(LittleQCore.utils.nl2br(arr[i].val), arr[i].exp, "should be equal")
	}
})