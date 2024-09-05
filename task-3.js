/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.

  Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
 */

  const numbers =  ['Tom', 'Tim', 'Tin', 'Tik'];
  let num = "";
  for(let number of numbers){
    num = num + number;
  }
  console.log(num);