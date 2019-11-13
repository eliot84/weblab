
    	//FUNCTIONS ARE USED TO ENCAPSULATE CODE AND MAKE IT MORE READABLE AND REUSABLE WITH LESS REPETITION.. 


  
    	//declare a function with it's processes
    	function myFunk(){
    		console.log("Hello from the function");
    	}

    	//A function needs to be called for it to run it's processes. 
    	myFunk();

    	/////////////////////////////////////////////////////
    	//functions can also take in arguments (data) for processing

    	var aPerson = "John";

    	person("john");

    	function person (personName){
    		var name = personName;

    		console.log("The person name is: " + name);
    	}

    	/////////////////////////////////////////////////////
    	//A function can output a result

    	var number1 = 10;
    	var number2 = 20;

    	var answer = add(number1, number2);

    	console.log("When you add: " + number1 + " + " + number2 + " you get: " + answer);

    	function add( x, y){
    		var a = x;
    		var b = y;
    		var result = a + b;

    		return result;
    	}
    	////////////////////////////////////////////////////////
    	// SCOPE

    	//Global variable: defined outside of a function will keep its original value and can be read by either of these processes. 
  		var country = "USA";
  		var change = "Ocean";

  		console.log("We are currently in: " + country);
  		takeFlight();

  		function takeFlight (){
  			console.log("hello from inside function take flight, the country is: " + country);

  			var insiderVariable = "the secret is red!";

  			change = "land";
  		}

  		//console.log("the secret var from take flight is: " + insiderVariable);
  		console.log("the change is: " + change);

