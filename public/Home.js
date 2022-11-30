const calendarElements1 = ["monMeal1","tuesMeal1","wedMeal1","thursMeal1","friMeal1","satMeal1","sunMeal1"];
const calendarElements2 = ["monMeal2","tuesMeal2","wedMeal2","thursMeal2","friMeal2","satMeal2","sunMeal2"];
const calendarElements3 = ["monMeal3","tuesMeal3","wedMeal3","thursMeal3","friMeal3","satMeal3","sunMeal3"];

console.log(JSON.stringify(array2D));

for (var z = 0; z < 7; z++)
{
    if (array2D[z][0] != 0 && array2D[z][1] != 0 && array2D[z][2] != 0)
    {
        document.getElementById(calendarElements1[z]).innerHTML = recipes[array2D[z][0]];
        document.getElementById(calendarElements2[z]).innerHTML = recipes[array2D[z][1]];
        document.getElementById(calendarElements3[z]).innerHTML = recipes[array2D[z][2]];
    }
    else
    {
        console.log("none selected for " + z);
    }
}