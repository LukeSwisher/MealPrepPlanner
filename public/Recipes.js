        //string for displaying the list of recipes
        var displayString = " ";

        //array for storing recipes(user input)
        var recipes;
        
        //check if "Recipe" key exists in the users local storage: create array if it doesn't exist
        if (localStorage.getItem(currentUser + "Recipes") === null || localStorage.getItem(currentUser + "Recipes") === " ")
        {
            localStorage.setItem(currentUser + "Recipes", " ")
            recipes = [];
        }
        else
        {
            //set recipes to saved array
            recipes = JSON.parse(localStorage.getItem(currentUser + "Recipes"));
        }
        console.log(JSON.stringify(recipes));
        displayRecipes(recipes, "allRecipes");

        //add recipe button
        document.getElementById("addRecipeBtn").addEventListener('click', function ()
        {
            if (document.getElementById("addName").value != "" && document.getElementById("addInstructions").value != "" && document.getElementById("addIngredients").value != "")
            {
                //create new recipe object
                let newRecipe = {
                    Name: document.getElementById("addName").value,
                    Instructions: document.getElementById("addInstructions").value,
                    Ingredients: document.getElementById("addIngredients").value,
                  };

                //update recipes in local storage
                recipes.push(newRecipe);
                localStorage.setItem(currentUser + "Recipes", JSON.stringify(recipes));
                console.log(JSON.stringify(recipes));

                //clear all forms
                document.getElementById("addName").value = "";
                document.getElementById("addInstructions").value = "";
                document.getElementById("addIngredients").value = "";

                displayRecipes(recipes,"allRecipes");
            }
        });

        //display selected array
    document.getElementById("selectBtn").addEventListener('click', function ()
    {
        displayString = "";
        if (document.getElementById("selectRecipe").value != "") //&& typeof document.getElementById("selectRecipe").value === 'number' && document.getElementById("selectRecipe").value <= recipes.length && document.getElementById("selectRecipe").value >= 1)
        {
            document.getElementById("selectedRecipe").innerHTML = formatRecipe(recipes[document.getElementById("selectRecipe").value - 1]);
            document.getElementById("selectRecipe").value = "";
        }

        });

        //display the array inside of the textbox in a numbered list
        function displayRecipes(array, displayID)
        {
            displayString = "";
            if(recipes.length != 0)
            {
              for (var x = 0; x < array.length; x++)
            {
                displayString = displayString + "\n" + (x+1) + ". " + array[x].Name;
            }
            document.getElementById(displayID).innerHTML = displayString;  
            }
            else
            {
                console.log("failed " + displayString);
            }
            
        }

        //format string to display selected recipe
        function formatRecipe(Object)
        {
            displayString = Object.Name + "<br/><br/>" + "Ingredients:<br/>" + Object.Ingredients + "<br/><br/>" + "Instructions:<br/>" + Object.Instructions;
            return displayString;
        }