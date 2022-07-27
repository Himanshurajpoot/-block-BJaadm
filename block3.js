let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
  let filteredNumbers = [...words].sort((a,b)=>a.length-b.length).pop()
  console.log(filteredNumbers)
  
  // - Convert the above array "words" into an array of length of word instead of word.
     let arraylength=[...words].map((element) =>element.length)
     console.log(arraylength)
  // - Create a new array that only contains word with atleast one vowel.
  function checkVowel(words){
    return (
        words.toLowerCase().includes("a")||
        words.toLowerCase().includes("e")||
        words.toLowerCase().includes("i")||
        words.toLowerCase().includes("o")||
        words.toLowerCase().includes("u")
    )
  }
let vowelFilter=words.filter((element)=>checkVowel(element))
console.log(vowelFilter)
  // - Find the index of the word "rhythm"
  
  let Findindex= words.findIndex((element)=>element==="rhythm")
  console.log(Findindex)
  

  // - Create a new array that contians words not starting with vowel.
let notWithVowel=words.filter(
    (w)=> !checkVowel(w[0])
)
console.log(notWithVowel)
  // - Create a new array that contianse words not ending with vowel
  let notEndWithVowel=words.filter(
    (w)=> !checkVowel(w[w.length-1])
)
console.log(notEndWithVowel)
  
  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((acc,num)=>acc+num,0)
console.log(sumArray)
  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
   let multiplied = [...numbers].map((element)=>element*3)
   console.log(multiplied)
  // - Create a new array that contains only even numbers
  let even=numbers.filter((element)=>element%2==0)
  console.log(even)
  // - Create  a new array that contains only odd numbers.
  let odd = numbers.filter((element)=>element%2!==0)
  console.log(odd)
  // - Create a new array that should have true for even number and false for odd numbers.
  let trueandfalse = [...numbers].map((element)=>element%2==0)
  console.log(trueandfalse)
  // - Sort the above number in assending order.
  let numbershorted= [...numbers].sort((a,b)=> a-b)
  console.log(numbershorted)

  // - Does sort mutate the original array?
  // yes
  // - Find the sum of the numbers in the array.
  let sum=numbers.reduce((acc,num)=>acc+num,0)
  console.log(sum)
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  function averageNumbers(array){
    let average = array.reduce((acc,curr)=>acc+curr,0)
    return average/ array.length
  }

  
  
  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  function averageWordLength(words){
    return(
        words
        .map((w)=> w.length)
        .reduce((acc,carr)=>{
            return acc+carr
        },0)/words.length
    )
  }