let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // Create an array peopleName and store value of sex key from persons array
  let peopelName = [...persons].map((element)=>element.name);
  console.log(peopelName);
  // Create an array peopleGrade and store the value of grade key from persons array
   let peopleGrade = [...persons].map((element)=>element.grade);
   console.log(peopleGrade);
  // Create an array peopleSex and store the value of sex key from persons array
   let peopleSex = [...persons].map((element)=>element.sex);
   console.log(peopleSex);
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
  let filteredName = peopelName.filter((element)=>element.startsWith("J")||element.startsWith('P'));
  console.log(filteredName);
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterLength=peopelName.filter((element)=>element.startsWith("A")||
element.startsWith('C')).length
console.log(filterLength);
  // Log all the filtered male ('M') in persons array
  
let flterMale=persons.filter((element)=>element.sex==="M");
console.log(flterMale);
  // Log all the filtered female ('F') in persons array
  let filterF = persons.filter((element)=>element.sex==="F");
  console.log(filterF);
  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filtered =filterF.filter((element)=>element.name.startsWith('C')||element.name.startsWith('J'));
     console.log(filtered);
  // Log all the even numbers from peopleGrade array
  let filterEven=peopleGrade.filter((element)=>element%2===0);
console.log(filterEven);
  // Find the first name that starts with 'J' in persons array and log the object
  let startingWithJ=persons.find((element)=> element.name.startsWith('J'));
  console.log(startingWithJ);

  // Find the first name that starts with 'P' in persons array and log the object
   let startingWithP=persons.find((element)=>element.name.startsWith("P"));
   console.log(startingWithP);
  // Find the first name that starts with 'J', grade is greater than 10 and is a female
     let str2=persons.find((element)=>element.name.startsWith('J')
     &&element.grade>10
     &&element.sex==='F')
      console.log(str2.name)
  // Filter all the female from persons array and store in femalePersons array
  let femalePersons=persons.filter((element)=>element.sex==="F");
  console.log(femalePersons);
  // Filter all the male from persons array and store in malePersons array
  let malePersons = persons.filter((element)=>element.sex==="M");
  console.log(malePersons); 
  
  // Find the sum of all grades and store in gradeTotal
  let gradeTotal = peopleGrade.reduce((acc,cv)=>acc+cv,0);
  console.log(gradeTotal);
  // Find the average grade
  let findAverage = peopleGrade.reduce((a,b)=>a+b,0)/peopleGrade.length;
  console.log(findAverage);
  // Find the average grade of male
  let Averagemale=malePersons.map((a)=>a.grade);
  let Averagemale2=Averagemale.reduce((a,b)=>a+b,0)/Averagemale.length;
  console.log(Averagemale2)

  // Find the average grade of female
  let Averagefemale=femalePersons.map((a)=>a.grade);
  let Averagefemale2=Averagefemale.reduce((a,b)=>a+b,0)/Averagefemale.length;
  console.log(Averagefemale2);

  // Find the highest grade
  
  let findhighest = [...peopleGrade].sort((a,b)=>a-b).pop();
  console.log(findhighest);
  // Find the highest grade in male
    let highestgradeMale= malePersons.map((a)=>a.grade);
    let highestgradeMale2=highestgradeMale.sort((a,b)=>a-b).pop();
    console.log(highestgradeMale2);
  // Find the highest grade in female
  let highestgradefeMale=femalePersons.map((a)=>a.grade);
  let highestgradefeMale2=highestgradefeMale.sort((a,b)=>a-b).pop();
  console.log(highestgradefeMale2);
  // Find the highest grade for people whose name starts with 'J' or 'P'
    let str=persons.filter((element)=>element.name .startsWith('J')||
    element.name.startsWith('P'))
    .map((element)=>element.grade)
    .sort((a,b)=>a-b).pop();
    console.log(str);
  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
  let sortedToAssending = [...peopleGrade].sort((a,b)=>a-b);
  console.log(sortedToAssending);
  // Sort the peopleGrade in descending order
  let sortedTodescending = [...peopleGrade].sort((a,b)=>b-a);
  console.log(sortedTodescending);
  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  let sortedTodescending2 = [...peopleGrade].sort((a,b)=>b-a);
  console.log(sortedTodescending2);
  // Sort the array peopelName in ascending `ABCD..Za....z`
  let sortToName=[...peopelName].sort((a,b)=>a.length-b.length);
  console.log(sortToName);
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
  let sortToName2=[...peopelName].sort((a,b)=>a.length-b.length);
  console.log(sortToName2);