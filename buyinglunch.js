function whosPaying(names) {
    var chosenNameIndex = Math.floor(Math.random() * names.length);
    return names[chosenNameIndex] + " is going to buy lunch today!";
}