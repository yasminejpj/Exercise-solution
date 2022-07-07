// Question 3.1
// scan 1: find the length of the longest name

const teachingTeam = ['Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'P'];

let lengthOfLongestName = 0;

for (let member of teachingTeam) {
    if (member.length > lengthOfLongestName)
        lengthOfLongestName = member.length;
}

// scan 2: display names of that longest length.
for (let member of teachingTeam) {
    if (member.length === lengthOfLongestName)
        console.log(member);
}
 