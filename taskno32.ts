/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let current_users:string[] = ['nazeer', 'javed.j9', 'zainab.shah', 'sanil.ahmed', 'kareem889'];
let new_users:string[] = ['aliraza', 'zainab.shah', 'sanil.ahmed', 'hameed78', 'Nazeer'];
new_users.map((user) => {
    if(current_users.includes(user)){
        console.log(`${user} Person will need to enter a new username.`) //user is added for better understanding and testing 
    }
    else{
        console.log(`${user} Username is available`)
    }
})