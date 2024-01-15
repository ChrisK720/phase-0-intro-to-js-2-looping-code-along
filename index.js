// Code your solutions in this file


// I need to do the following:
//take a usesr's input
// make sure is positive 

// make a while loop:
// while loop takes in the positive number 
// prints it out then subtrcts 1 from it all this while the positive integer is greater that -1

function countDown(pos) {
    // any number less than or equal to zero is not positive.
    if(pos <= 0 ) {
       console.log('please enter a valid number')
    }else{
        while(pos >= 0){
            console.log(pos)
            pos -= 1
        }
    }

}

// I need to take in an array of names and the description of a gift
// I will need to init an empty array
// for each index of the array I need to push in the value of the index along with other stuf
// At the end I will need to return the modified array

function writeCards(names,descri) {
    const newArr = []
    for(let i = 0; i < names.length; i++){
      const name = names[i]
      const message = `Thank you, ${name}, for the wonderful ${descri} gift!`
      message.toString()
      newArr.push(message)
      console.log(newArr)
    }
    return newArr
   
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")