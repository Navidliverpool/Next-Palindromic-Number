// Solution from Codewars.

// O(1) solution

// The idea is to split the number into two equal length parts
// and to increment / mirror the first half to product the next palindrome 

function nextPal(val) {

    let str = `${val}`
    ,   len = Math.ceil(str.length / 2)
    
    ,   abc = str.slice(0, len)
    ,   xyz = str.slice(-len)
    
    ,   cba = [ ...abc ].reverse().join('')
  
    if (+xyz >= +cba)
      abc = `${+abc + 1}`;
      
    xyz = [...abc]
      .reverse()
      // ignore the middle char for odd lengths + handle edge case 999 -> 1001
      .slice(str.length % 2 + abc.length - xyz.length)
      .join('')
    
    return +(abc + xyz);
      
  }