const calendarElements1 = ["monMeal1","tuesMeal1","wedMeal1","thursMeal1","friMeal1","satMeal1","sunMeal1"];
const calendarElements2 = ["monMeal2","tuesMeal2","wedMeal2","thursMeal2","friMeal2","satMeal2","sunMeal2"];
const calendarElements3 = ["monMeal3","tuesMeal3","wedMeal3","thursMeal3","friMeal3","satMeal3","sunMeal3"];

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

console.log(JSON.stringify(array2D));

displayHome();

document.getElementById("clearHomeBtn").addEventListener('click', function ()
        {
            for (var x = 0; x < 7; x++)
            {
                for (var y = 0; y < 3; y++)
                {
                    array2D[x][y] = 0;
                }
            }
            localStorage.setItem(currentUser + "CalendarConfig", JSON.stringify(array2D));
            console.log(JSON.stringify(array2D));
            document.getElementById("breakfastDisplay").innerHTML = "";
            document.getElementById("lunchDisplay").innerHTML = "";
            document.getElementById("dinnerDisplay").innerHTML = "";
            displayHome();
        });

function displayHome()
        {
            for (var z = 0; z < 7; z++)
            {
                if (array2D[z][0] != 0)
                {
            document.getElementById(calendarElements1[z]).innerHTML = recipes[array2D[z][0] - 1].Name;
                  }
                else
                {
                    document.getElementById(calendarElements1[z]).innerHTML = "Select Breakfast";
                    console.log("none selected for Breakfast" + z);
                }

                if (array2D[z][1] != 0)
                {
                    document.getElementById(calendarElements2[z]).innerHTML = recipes[array2D[z][1] - 1].Name;
                }
                else
                {
                    document.getElementById(calendarElements2[z]).innerHTML = "Select Lunch";
                    console.log("none selected for Lunch" + z);
                }

                if (array2D[z][2] != 0)
                {
                    document.getElementById(calendarElements3[z]).innerHTML = recipes[array2D[z][2] - 1].Name;
                }
                else
                {
                    document.getElementById(calendarElements3[z]).innerHTML = "Select Dinner";
                    console.log("none selected for Dinner" + z);
                }
            }
        }


        document.getElementById("selectMon").addEventListener('click', function ()
        {
                if (array2D[0][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[0][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[0][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[0][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[0][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[0][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });


                document.getElementById("selectTues").addEventListener('click', function ()
        {
                if (array2D[1][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[1][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[1][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[1][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[1][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[1][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });


                        document.getElementById("selectWed").addEventListener('click', function ()
        {
                if (array2D[2][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[2][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[2][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[2][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[2][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[2][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });

                                document.getElementById("selectThurs").addEventListener('click', function ()
        {
                if (array2D[3][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[3][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[3][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[3][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[3][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[3][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });

                            document.getElementById("selectFri").addEventListener('click', function ()
        {
                if (array2D[4][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[4][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[4][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[4][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[4][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[4][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });

                            document.getElementById("selectSat").addEventListener('click', function ()
        {
                if (array2D[5][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[5][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[5][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[5][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[5][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[5][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });

                            document.getElementById("selectSun").addEventListener('click', function ()
        {
                if (array2D[6][0] != 0)
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: " + formatRecipe(recipes[array2D[6][0] - 1]);
                }
                else
                {
                    document.getElementById("breakfastDisplay").innerHTML = "Breakfast: No recipe selected";
                }

                if (array2D[6][1] != 0)
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: " + formatRecipe(recipes[array2D[6][1] - 1]);
                }
                else
                {
                    document.getElementById("lunchDisplay").innerHTML = "Lunch: No recipe selected";
                }

                if (array2D[6][2] != 0)
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: " + formatRecipe(recipes[array2D[6][2] - 1]);
                }
                else
                {
                    document.getElementById("dinnerDisplay").innerHTML = "Dinner: No recipe selected";
                }
        });