displayRecipes(recipes, "editCalendarDisplay");
var labelString = "Enter recipe numbers for: ";
var array2D
var flag = 1;
var selectedDay;

//check if key exists in the users local storage: create array if it doesn't exist
        if (localStorage.getItem(currentUser + "CalendarConfig") === null || localStorage.getItem(currentUser + "CalendarConfig") === " ")
        {
        	let array2D = new Array(7); // create an empty array of
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
            //set recipes to saved array
            array2D = JSON.parse(localStorage.getItem(currentUser + "CalendarConfig"));
            console.log(JSON.stringify(array2D));
        }


document.getElementById("saveBreakfastBtn").addEventListener('click', function ()
    	{
    		if (selectedDay != null && document.getElementById("userBreakfast").value != "" && document.getElementById("userBreakfast").value != 0)
    		{
    			var userNum = document.getElementById("userBreakfast").value - 1;
    			array2D[selectedDay][0] = userNum;
    			localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));
    		}
        });

document.getElementById("saveLunchBtn").addEventListener('click', function ()
    	{
    		if (selectedDay != null && document.getElementById("userLunch").value != "" && document.getElementById("userBreakfast").value != 0)
    		{
    			array2D[selectedDay][1] = document.getElementById("userLunch").value - 1;
    			localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));
    		}
        });

document.getElementById("saveDinnerBtn").addEventListener('click', function ()
    	{
    		if (selectedDay != null && document.getElementById("userDinner").value != "" && document.getElementById("userBreakfast").value != 0)
    		{
    			array2D[selectedDay][2] = document.getElementById("userDinner").value - 1;
    			localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));
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
				document.getElementById("userBreakfast").value = array2D[0][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[0][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[0][2] + 1;
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
				document.getElementById("userBreakfast").value = array2D[1][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[1][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[1][2] + 1;
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
				document.getElementById("userBreakfast").value = array2D[2][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[2][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[2][2] + 1;
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
				document.getElementById("userBreakfast").value = array2D[3][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[3][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[3][2] + 1;
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
				document.getElementById("userBreakfast").value = array2D[4][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[4][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[4][2] + 1;
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
			document.getElementById("userBreakfast").value = array2D[5][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[5][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[5][2] + 1;
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
				document.getElementById("userBreakfast").value = array2D[6][0] + 1;
			}
			else
			{
				document.getElementById("userBreakfast").value = "";
			}
			if (array2D[selectedDay][1] != 0)
			{
				document.getElementById("userLunch").value = array2D[6][1] + 1;
			}
			else
			{
				document.getElementById("userLunch").value = "";
			}
			if (array2D[selectedDay][2] != 0)
			{
				document.getElementById("userDinner").value = array2D[6][2] + 1;
			}
			else
			{
				document.getElementById("userDinner").value = "";
			}
		}
        });
