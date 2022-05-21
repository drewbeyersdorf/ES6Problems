function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  /*
   key difference here is that var is used to delcare globally
   and ley is used to rewrite and be forgotten in the same way. 
   So using it in a loop above only makes it 'block scope' when
   inside the if statement.
  */