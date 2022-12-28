//Construction Function//

// function BellBoy (name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// var houseKeeper = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoria: ["bathroom", "lobby", "bedroom"]
// }

function HouseKeeper (yearsOfExperience, name, cleaningRepertoria) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoria = cleaningRepertoria;
    this.clean = function () {
        alert("cleaning is progress...");
    }
}

var houseKeeper1 = new HouseKeeper(9, "Tom", ["bedroom", "lobby"]);

console.log(houseKeeper1.name);

