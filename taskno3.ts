/*
taskno 3
*/

let userName:string = "Sanil Ahmed";
console.log(`Lowercase ${userName.toLowerCase()}`);
console.log(`Uppercase ${userName.toUpperCase()}`);
function toTitleCase(username: string): string {
    return userName.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
console.log(`Titlcase ${toTitleCase(userName)}`);