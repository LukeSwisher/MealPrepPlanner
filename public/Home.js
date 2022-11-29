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


            for (var i = 0; i < recipes.length; i++) {
                var optn = recipes.name;
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
             //   el.style.color = 'red';
                document.getElementById("monBreakfast").appendChild(el);
             //   document.getElementById("monBreakfast").style.color = "black";
            }