// call method will take the reference and invoke the function

const obj = {
  firstname: 'Saikumar',
  lastname: 'Bolisetti',
  
}
const getFullName = function(home) {
    console.log(this.firstname + ' ' + this.lastname, home);
  }

getFullName.call(obj, 'KDP')

const obj2 = {
  firstname: 'Elon',
  lastname: 'Musk',
}

getFullName.call(obj2, 'USA')


// apply method does the same thing but the args will be passed in an array

getFullName.apply(obj, ['AUS'])


// bind method doesn't invoke the function but it will give you the function to execute later

const bindMethod = getFullName.bind(obj, 'LA');
bindMethod()
