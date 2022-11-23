    //string for displaying the list of pantry items
    var displayString = " ";

    //array for storing pantry items(user input)
    let pantryItems = [];
    displayPantry(pantryItems);

    //add given user input to the pantryItems array and display it
    document.getElementById("addBtn").addEventListener('click', function ()
    {
        if (document.getElementById("addText").value != "")
        {
            const addBox = document.getElementById("addText").value;
            console.log(addBox);
            pantryItems.push(document.getElementById("addText").value);
            document.getElementById("pantryDisplay").innerHTML = displayString;
            document.getElementById("addText").value = "";
            displayPantry(pantryItems);
        }
        
    });
     //remove an element of the pantryItems array at the given index, then display the altered array
    document.getElementById("removeBtn").addEventListener('click', function ()
    {
        if (document.getElementById("removeText").value != "")
        {
            console.log("this worked too!");
            pantryItems.splice(document.getElementById("removeText").value - 1, 1);
            document.getElementById("removeText").value = "";
            displayPantry(pantryItems);
        }
        

    });
    //display the array inside of the textbox in a numbered list
    function displayPantry(array)
    {
        displayString = "";

        for (var x = 0; x < array.length; x++)
        {
            displayString = displayString + "\n" + (x+1) + ". " + array[x];
        }
        document.getElementById("pantryDisplay").innerHTML = displayString;
    }