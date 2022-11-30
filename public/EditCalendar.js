displayRecipes(recipes, "editCalendarDisplay");
var labelString = "Enter recipe numbers for: ";

var Array2D;

var flag = 0;

//check if key exists in the users local storage: create array if it doesn't exist
        if (localStorage.getItem(currentUser + "CalendarConfig") === null || localStorage.getItem(currentUser + "Recipes") === " ")
        {
            localStorage.setItem(currentUser + "CalendarConfig", " ")
            Array2D = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        }
        else
        {
            //set recipes to saved array
            Array2D = JSON.parse(localStorage.getItem(currentUser + "CalendarConfig"));
        }

        if (Array2D != [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]])
        {
        	flag = 1;
        }


document.getElementById("editMon").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Monday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[0][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[0][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[0][2]
		}

        });

document.getElementById("editTues").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Tuesday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[1][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[1][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[1][2]
		}
        });

document.getElementById("editWed").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Wednesday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[2][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[2][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[2][2]
		}
        });

document.getElementById("editThur").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Thursday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[3][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[3][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[3][2]
		}
        });

document.getElementById("editFri").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Friday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[4][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[4][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[4][2]
		}
        });

document.getElementById("editSat").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Saturday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[5][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[5][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[5][2]
		}
        });

document.getElementById("editSun").addEventListener('click', function ()
    {
    	document.getElementById("dayLabel").innerHTML = labelString + "Sunday";
    	if (flag != 0)
		{
			document.getElementById("userBreakfast").innerHTML = Array2D[6][0]
			document.getElementById("userBreakfast").innerHTML = Array2D[6][1]
			document.getElementById("userBreakfast").innerHTML = Array2D[6][2]
		}
        });