/**
 * Write a JavaScript code to reverse the array colors without using the reverse method.

  Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
 */

 const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reverse_color = [];

for (let color of colors){
    // console.log(color);
    reverse_color.unshift(color);
}
console.log(reverse_color);