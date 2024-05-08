function emailGenerator(lastName, firstName){
    firstName = firstName.trim().toLowerCase();
    lastName = lastName.trim().toLowerCase();
    const domain = '@mail.ru';
    const email = `${firstName}.${lastName}.${domain}`
    return email
}
const firstName = 'Ulugbek';
const lastName = 'Nabiev';
const email = emailGenerator(firstName, lastName);
console.log(email);

function generateId(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = "";
    for (let i = 0; i < 2; i++) {
    letters += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    let numbers = Math.floor(Math.random()*100000)
    const id = `${letters}${numbers}`
    console.log(id);
}
generateId()