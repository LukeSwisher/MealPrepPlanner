    var displayString = " ";
    var shoppingList;

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

    
    displayShoppingList(shoppingList);

    //Add an item to the shopping list and display it
    document.getElementById("addItemBtn").addEventListener('click', function ()
    {
        if (document.getElementById("addItemText").value != "")
        {
            const addBox = document.getElementById("addItemText").value;
            console.log(addBox);
            shoppingList.push(document.getElementById("addItemText").value);
            document.getElementById("shoppingListDisplay").innerHTML = displayString;
            document.getElementById("addItemText").value = "";
            displayShoppingList(shoppingList);
            var temp = JSON.stringify(shoppingList);
            localStorage.setItem(currentUser + "ShoppingList", temp);
        }
        
    });

    //Clear the shopping list
    document.getElementById("removeItemBtn").addEventListener('click', function ()
    {
      document.getElementById("shoppingListDisplay").innerHTML = "";
      shoppingList = [];
      var temp = JSON.stringify(shoppingList);
      localStorage.setItem(currentUser + "ShoppingList", temp);
    });

    //Display shoppingList array on the page
    function displayShoppingList(array)
    {
        displayString = "";

        for (var x = 0; x < array.length; x++)
        {
            displayString = displayString + "\n" + (x+1) + ". " + array[x];
        }
        document.getElementById("shoppingListDisplay").innerHTML = displayString;
    }