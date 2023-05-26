const charList = [
    {
        name: "Itadori Yūji",
        species: "Human",
        affiliation: "Tokyo Metropolitan Curse Technical College",
        grade: "-",
    },
    {
        name: "Fushiguro Megumi",
        species: "Human",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Grade 2",
    },
    {
        name: "Kugisaki Nobara",
        species: "Human",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Grade 3",
    },
    {
        name: "Gojō Satoru",
        species: "Human",
        affiliation: "Tokyo Metropolitan Curse Technical College",
        grade: "Special Grade",
    },
    {
        name: "Zen'in Maki",
        species: "Human",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Grade 4",
    },
    {
        name: "Inumaki Toge",
        species: "Human",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Semi-Grade 1",
    },
    {
        name: "Panda",
        species: "Cursed Corpse",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Semi-Grade 2",
    },
    {
        name: "Okkotsu Yūta",
        species: "Human",
        affiliation: "Tokyo Jujutsu High School",
        grade: "Special Grade",
    },
    {
        name: "Sukuna",
        species: "Cursed Spirit",
        affiliation: "Himself",
        grade: "Special Grade",
    },
];

const tableBody = document.getElementById("table-body");
getData();

function getData() {
    tableBody.innerHTML = "";

    charList.forEach((character) => {
        const row = document.createElement("tr");

        for (const key in character) {
            const cell = document.createElement("td");
            cell.innerText = character[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}
