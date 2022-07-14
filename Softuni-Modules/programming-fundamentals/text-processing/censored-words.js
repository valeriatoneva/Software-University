function solve (txt, word){
    let newText = txt.split(word);
    let res = newText.join("*".repeat(word.length))
    console.log(res)
    }
    solve('A small sentence with some words', 'small')