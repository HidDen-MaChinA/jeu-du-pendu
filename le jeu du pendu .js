const prompt=require("prompt-sync")();
//just change the val of mot
let hidden_word="hidden"
let word=hidden_word.split("")
let iteration=0;
let cache=[]
//the part for make the word hidden
for(let i=0;i<word.length;i++){
    cache.push("*")
}
//end of the part for make the word hidden
let jouer=prompt("do you want to play? o/n:")
if(jouer=="n"){
    return 0
}
//all of this are the principal part of the programs
if(jouer=="o"){
while(iteration<10){   
    console.log("you have "+(10-iteration)+"/10")
        console.log(cache.join(""))
    let lettre=prompt("devine une lettre,ecrit 'STOP' si tu veux arreter: ")
    for(let i=0;i<cache.length;i++){
        if(cache[i]==lettre){
            console.log(lettre,"is already here")
        }
    }
    if(lettre=="STOP"){
        console.log("the game is over")
        return 0
    }
        for(let i=0;i<word.length;i++){
            if(word[i]==lettre){
                cache[i]=lettre
            }
        }
        if(lettre.length>1){
            if(lettre==hidden_word){
                return console.log("you win,the word was",hidden_word)
            }
            else{ 
                console.log("you lose,the word was :"+hidden_word)
                return 0
            }
        }
        if(cache.join("")==hidden_word){
            console.log("you win,the word was",hidden_word)
            return 0
        }
        iteration++
    }
}
console.log("you lose,the word was :"+hidden_word)