var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {key: value})
}

test = updateObjectWithKeyAndValue(recipes, key, 1)

console.log(test)