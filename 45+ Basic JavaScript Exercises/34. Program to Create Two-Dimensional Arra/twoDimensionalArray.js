const myFriends = [
    ["Sohan", "MCA", 24, "UEM"],
    ["Sayanta", "MCA", 24, "UEM"],
    ["Achyut", "MCA", 24, "JISCE"],
    ["Subhajit", "MCA", 24, "IEM"],
    ["Sagar", "MCA", 24, "JISCE"]
]

for (let i = 0; i < myFriends.length; i++) {
    for (let j = 0; j < myFriends.length; j++) {
        console.log(myFriends[i][j]);
    }
}