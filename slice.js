function tweetSlice() {
    var tweet = prompt("Tweet under 140 characters: ");

    tweet = (tweet == null) ? "You have not composed the tweet." : tweet.slice(0, 140);
     
    alert(tweet);
}