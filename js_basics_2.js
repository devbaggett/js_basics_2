function magic_multiply(num1, num2){
	if (typeof(num2) == "string"){
		return "Error: Can not multiply by string"
	}
	else if (typeof(num1) == "string"){
		let repeatedString = "";
		while (num2 > 0){
			repeatedString += num1;
			num2--;
		}
		return repeatedString;
	}
	if (num1.length && !num2.length){
		let x = [];
		for (var i = 0; i < num1.length; i++){
			x.push(num1[i] * num2);
		}
		return x;
	}
	else if (num2.length && !num1.length){
		let x = [];
		for (var i = 0; i < num2.length; i++){
			x.push(num2[i] * num1);
		}
		return x;
	}
	return num1 * num2;
}

// Test 1

let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10


// Test 2

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"


// Test 3

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]


// Test 4

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"


// Test 5

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

