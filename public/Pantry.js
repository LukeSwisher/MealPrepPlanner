    //string for displaying the list of pantry items
var displayString = " ";

    //array for storing pantry items(user input)
var pantryItems;

console.log(currentUser);

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

displayPantry(pantryItems); //Display pantry on page refresh

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
        var temp = JSON.stringify(pantryItems);
        localStorage.setItem(currentUser + "Pantry", temp);
    }

});
     //remove an element of the pantryItems array at the given index, then display the altered array
document.getElementById("removeBtn").addEventListener('click', function ()
{
    if (document.getElementById("removeText").value != "")
    {
        pantryItems.splice(document.getElementById("removeText").value - 1, 1);
        document.getElementById("removeText").value = "";
        displayPantry(pantryItems);
        var temp = JSON.stringify(pantryItems);
        localStorage.setItem(currentUser + "Pantry", temp);
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