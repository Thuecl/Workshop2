


var puzzles = [{id: "A1#", puzzle: "Ingen biler", color: "white"}, 
                  {id: "A2#", puzzle: "Kæde", color: "white"}, 
                  {id: "A3#", puzzle: "Bremseskiver", color: "white"}, 
                  {id: "A4#", puzzle: "Samtidig / nøgleboks", color: "white"}, 
                  {id: "A5#", puzzle: "Jetoner / rød kasse", color: "white"}, 
                  {id: "A6#", puzzle: "Snekæder", color: "white"}, 
                  {id: "B1#", puzzle: "Midterkonsol", color: "white"}, 
                  {id: "B2#", puzzle: "Handskerum", color: "white"}, 
                  {id: "B3#", puzzle: "Bagagerum", color: "white"}, 
                  {id: "C1#", puzzle: "Hvidt metalskab", color: "white"}, 
                  {id: "C2#", puzzle: "Blå boks / hvid stjerne", color: "white"}, 
                  {id: "C3#", puzzle: "Benzindunke", color: "white"}, 
                  {id: "C4#", puzzle: "Boltreol", color: "white"}, 
                  {id: "C5#", puzzle: "Herth+Buss", color: "white"}, 
                  {id: "D1#", puzzle: "Blå lås", color: "white"}, 
                  {id: "D2#", puzzle: "Ejnar Hessel", color: "white"}, 
                  {id: "D3#", puzzle: "Mapper", color: "white"}, 
                  {id: "D4#", puzzle: "Glasplader", color: "white"}, 
                  {id: "D5#", puzzle: "Fake", color: "white"}, 
                  {id: "D6#", puzzle: "Hulplade", color: "white"}
];

var tempList = puzzles;



fetch('message.txt')

  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })

  .then(text => {

// tempList.push(text);

    for (var i = 0; i < puzzles.length; i++) {
        if (text.includes(puzzles[i].id)){
                puzzles[i].color = "green"
        }} 

var listAsString = "<ul>";
listAsString += "</ul>";

for (var j = 0; j < puzzles.length; j++) {
    listAsString += "<ul><span style='color: " + puzzles[j].color + "'>" + puzzles[j].id + " - " + puzzles[j].puzzle + "</span></ul>";
}

listAsString += "</ul>";

document.getElementById("puzzlesDiv").innerHTML = listAsString;
document.getElementById("puzzlesDiv2").textContent = text;
 
  } );

