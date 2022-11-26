/*
	Each function that you write must take at least 2s to execute using the setTimeout function like so:

	function() {
		setTimeout(() => {
			// Your code here
		}, 2 * 1000);
	}
*/

/*
    How the given data is associated:
        Boards have ids and names
        Lists belong to boards
        Cards belong to lists
*/

/*
    Folder structure:
        ├── callback1.js
        ├── callback2.js
        ├── callback3.js
        ├── callback4.js
        ├── callback5.js
        ├── callback6.js
        └── test
            ├── testCallback1.js
            ├── testCallback2.js
            ├── testCallback3.js
            ├── testCallback4.js
            ├── testCallback5.js
            └── testCallback6.js

*/

/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/