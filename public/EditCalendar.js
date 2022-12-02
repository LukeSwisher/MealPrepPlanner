displayRecipes(recipes, "editCalendarDisplay"); //display recipes upon loading the page
var labelString = "Enter recipe numbers for: ";

var array2D //2-dimensional array that holds numerical values representing user selections for every day of the week
var flag = 1; 
var selectedDay; // stores an integer that indicates the selected day of the week
var neededIngredients = ""; //array to store ingredients from selected recipes

//check if key exists in the users local storage: create key and initialize 2D array if it doesn't exist
if (localStorage.getItem(currentUser + "CalendarConfig") === null || localStorage.getItem(currentUser + "CalendarConfig") === " ")
{
    let array2D = new Array(7); // create an empty array of size 7
    for (var i = 0; i < array2D.length; i++) 
    {
  		array2D[i] = new Array(3); // make each element an array of size 3
  	}
  	
  	for (var x = 0; x < array2D.length; x++)
  	{
  		for (var y = 0; y < 3; y++)
  		{
  			array2D[x][y] = 0;
  		}
  	}
  	console.log(JSON.stringify(array2D));
    localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D)); //Update user selections in localStorage
}
else
{
    //set array2D to saved 2D array
	array2D = JSON.parse(localStorage.getItem(currentUser + "CalendarConfig"));
	console.log(JSON.stringify(array2D));
}

        //check if "Pantry" key exists in local storage: create array if it doesn't exist
if (localStorage.getItem(currentUser + "Pantry") === null || localStorage.getItem(currentUser + "Pantry") === " ")
{
	localStorage.setItem(currentUser + "Pantry", " ")
	pantryItems = [];
}
else
{
    	    //set pantryItems to saved array
	pantryItems = JSON.parse(localStorage.getItem(currentUser + "Pantry"));
}

    	    //check if "ShoppingList" key exists in local storage: create array if it doesn't exist
if (localStorage.getItem(currentUser + "ShoppingList") === null || localStorage.getItem(currentUser + "ShoppingList") === " ")
{
	localStorage.setItem(currentUser + "ShoppingList", " ")
	shoppingList = [];
}
else
{
        //set shoppingList to saved array
	shoppingList = JSON.parse(localStorage.getItem(currentUser + "ShoppingList"));
}

    	//Compare the needed ingredients with the pantry to eliminate unnecessary items
function compareLists()
{
	var pantryStringArray = pantryItems;
	var neededStringArray = neededIngredients.split(",");
	var found = 0;

	if (pantryStringArray.length > 0 && neededStringArray.length > 0)
	{
        		//Parse through each item in neededStringArray and check if it exists in pantry
        		//If it does not exist, push the item from neededStringArray into the shoppingList array
		for (var x = 0; x < neededStringArray.lenghth; x++)
		{
			for (var y = 0; y < pantryStringArray.length; y++)
			{
				if (neededStringArray[x] == pantryStringArray[y])
				{
					found = 1;
				}
			}
			if (found != 1)
			{
				shoppingList.push(neededStringArray[x]);
			}
			else
			{
				found = 0;
			}
		}
	}
        	//If the pantry is empty, push all items from neededStringArray into the shoppingList array
	else if (pantryStringArray.length == 0 && neededStringArray.length > 0)
	{
		for (var a = 0; a < neededStringArray.length - 1; a++)
		{
			shoppingList.push(neededStringArray[a]);
			localStorage.setItem(currentUser + "ShoppingList", JSON.stringify(shoppingList));
		}
	}
}

//Button to save the users breakfast selection
document.getElementById("saveBreakfastBtn").addEventListener('click', function ()
{
	if (selectedDay != null && document.getElementById("userBreakfast").value != "" && document.getElementById("userBreakfast").value != 0 && document.getElementById("userBreakfast").value <= recipes.length)
	{
		var userNum = document.getElementById("userBreakfast").value;
		array2D[selectedDay][0] = userNum;
		localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));

		var temp = recipes[userNum - 1].Ingredients.split(", ");

		for (var z = 0; z < temp.length; z++)
		{
			neededIngredients = neededIngredients + temp[z] + ",";
		}
		compareLists();
	}
});

//Button to save the users lunch selection
document.getElementById("saveLunchBtn").addEventListener('click', function ()
{
	if (selectedDay != null && document.getElementById("userLunch").value != "" && document.getElementById("userBreakfast").value != 0 && document.getElementById("userBreakfast").value <= recipes.length)
	{
		array2D[selectedDay][1] = document.getElementById("userLunch").value;
		localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));

		var temp = recipes[userNum - 1].Ingredients.split(", ");

		for (var z = 0; z < temp.length; z++)
		{
			neededIngredients = neededIngredients + temp[z] + ",";
		}
		compareLists();
	}
});

//Button to save the users dinner selection
document.getElementById("saveDinnerBtn").addEventListener('click', function ()
{
	if (selectedDay != null && document.getElementById("userDinner").value != "" && document.getElementById("userBreakfast").value != 0 && document.getElementById("userBreakfast").value <= recipes.length)
	{
		array2D[selectedDay][2] = document.getElementById("userDinner").value;
		localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));

		var temp = recipes[userNum - 1].Ingredients.split(", ");

		for (var z = 0; z < temp.length; z++)
		{
			neededIngredients = neededIngredients + temp[z] + ",";
		}
		compareLists();
	}
});

//Button to select and display selected values for Monday
document.getElementById("editMon").addEventListener('click', function ()
{
	selectedDay = 0;
	document.getElementById("dayLabel").innerHTML = labelString + "Monday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[0][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[0][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[0][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}
	}

});

//Button to select and display selected values for Tuesday
document.getElementById("editTues").addEventListener('click', function ()
{
	selectedDay = 1;
	document.getElementById("dayLabel").innerHTML = labelString + "Tuesday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[1][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[1][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[1][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}



	}
});

//Button to select and display selected values for Wednesday
document.getElementById("editWed").addEventListener('click', function ()
{
	selectedDay = 2;
	document.getElementById("dayLabel").innerHTML = labelString + "Wednesday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[2][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[2][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[2][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}
	}
});

//Button to select and display selected values for Thursday
document.getElementById("editThur").addEventListener('click', function ()
{
	selectedDay = 3;
	document.getElementById("dayLabel").innerHTML = labelString + "Thursday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[3][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[3][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[3][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}
	}
});

//Button to select and display selected values for Friday
document.getElementById("editFri").addEventListener('click', function ()
{
	selectedDay = 4;
	document.getElementById("dayLabel").innerHTML = labelString + "Friday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[4][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[4][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[4][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}
	}
});

//Button to select and display selected values for Saturday
document.getElementById("editSat").addEventListener('click', function ()
{
	selectedDay = 5;
	document.getElementById("dayLabel").innerHTML = labelString + "Saturday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[5][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[5][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[5][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}



	}
});

//Button to select and display selected values for Sunday
document.getElementById("editSun").addEventListener('click', function ()
{
	selectedDay = 6;
	document.getElementById("dayLabel").innerHTML = labelString + "Sunday";
	if (flag != 0)
	{
		if (array2D[selectedDay][0] != 0)
		{
			document.getElementById("userBreakfast").value = array2D[6][0];
		}
		else
		{
			document.getElementById("userBreakfast").value = "";
		}
		if (array2D[selectedDay][1] != 0)
		{
			document.getElementById("userLunch").value = array2D[6][1];
		}
		else
		{
			document.getElementById("userLunch").value = "";
		}
		if (array2D[selectedDay][2] != 0)
		{
			document.getElementById("userDinner").value = array2D[6][2];
		}
		else
		{
			document.getElementById("userDinner").value = "";
		}
	}
});
