function checkInvities(guestName) {
    var invities = ["Rose", "Monu", "Ana", "Lana"];
   
    for(let i = 0; i< invities.length ; i++) {
        if(invities[i].toLowerCase() === guestName.toLowerCase()) {
            return true;
        }
    }
    return false;
}