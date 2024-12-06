const FavouriteMovie = "Avatar";

let guess = prompt("Guess My Favourite Movie ");

while((guess != FavouriteMovie) && (guess != quit) ){
    guess = prompt("Wrong guess. Please Try again..");
}

if(guess == FavouriteMovie){
    console.log("You got it!!");
}else{
    console.log("you quit");
}