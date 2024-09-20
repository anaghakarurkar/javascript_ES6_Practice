function characterCount() {
    var tweet = prompt("Tweet character counter: ");
    const characterLimit = 140;
    var characterCount =  (tweet == null) ? 0 : tweet.length;

    alert("You have written " + characterCount + " characters, you have " + (characterLimit - characterCount) + " characters left.");
}