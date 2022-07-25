//remember forEach takes in index and a copy of array as well as the array[index]
function forEach(array, cb) {
  for(let i = 0; i < array.length; i++) {
    cb(array[i], i, array)
  }
}

function map(array, cb) {
  const updatedArray = []
  for(let i = 0; i < array.length; i++) {
    updatedArray.push(cb(array[i], i, array))
  }
  return updatedArray
}

function filter(array, cb) {
  const updatedArray = []
  for(let i = 0; i < array.length; i++) {
    if(cb(array[i], i, array)) updatedArray.push(array[i])
  }
  return updatedArray
}

function reduce(array, cb, initialValue) {
  
  for(let i = 0; i < array.length; i++) {
    if(initialValue == null) {
      initialValue = array[i]
    }
    else {
      initialValue = cb(initialValue, array[i], i, array)
    }
  }
  return initialValue 
}
  
function some(array, cb) {
  for(let i = 0; i < array.length; i++) {
    if(cb(array[i], i, array)) {
      return true
    }
  }
  return false
}

function every(array, cb) {
  for(let i = 0; i < array.length; i++) {
    if(!cb(array[i], i, array)) {
      return false
    }
  }
  return true
}

  
  function flat(array, depth = 1) {
    const updatedArray = []
    for(let i = 0; i < array.length; i++) {
      if(Array.isArray(array[i]) && depth > 0) {
        updatedArray.push(...flat(array[i], depth - 1))
      } else {
        updatedArray.push(array[i])
      }
    }
    return updatedArray
  }
  

  function find(array, cb) {
    for(let i = 0; i < array.length; i++){
      if(cb(array[i], i, array)){
        return array[i]
      }
    }
  }
  
  module.exports = {
    forEach,
    map,
    filter,
    reduce,
    some,
    every,
    flat,
    find,
  }