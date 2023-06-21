function findMax(numbers) {
    if (numbers.length === 0) {
      return null; 
    }
  
    let max = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; 
      }
    }
  
    return max; 
  }
  const numbers = [5, 8, 2, 1, 10, 6];
const maximum = findMax(numbers);
console.log(maximum); 