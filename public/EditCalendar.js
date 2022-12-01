displayRecipes(recipes, "editCalendarDisplay");
var labelString = "Enter recipe numbers for: ";
var array2D
var flag = 1;
var selectedDay;
var neededIngredients = "";

//check if key exists in the users local storage: create array if it doesn't exist
if (localStorage.getItem(currentUser + "CalendarConfig") === null || localStorage.getItem(currentUser + "CalendarConfig") === " ")
{
    let array2D = new Array(7); // create an empty array of size 7
	for (var i = 0; i < array2D.length; i++) 
	{
  		array2D[i] = new Array(3); // make each element an array
	}
			
	for (var x = 0; x < array2D.length; x++)
	{
		for (var y = 0; y < 3; y++)
		{
			array2D[x][y] = 0;
		}
	}
	console.log(JSON.stringify(array2D));
    localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));
}
else
{
    //set array2D to saved array
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

        function compareLists()
   		{
        	var pantryStringArray = pantryItems;
        	var neededStringArray = neededIngredients.split(",");
        	var found = 0;

        	if (pantryStringArray.length > 0 && neededStringArray.length > 0)
        	{
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
        	else if (pantryStringArray.length == 0 && neededStringArray.length > 0)
        	{
        		for (var a = 0; a < neededStringArray.length - 1; a++)
        		{
        			shoppingList.push(neededStringArray[a]);
        			localStorage.setItem(currentUser + "ShoppingList", JSON.stringify(shoppingList));
        		}
        	}
    	}


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
