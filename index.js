var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {key: value})
}

test = updateObjectWithKeyAndValue(object, key, 1)

console.log(test)