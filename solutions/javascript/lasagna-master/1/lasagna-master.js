/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(remainingTime){
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (remainingTime > 0) {
    return 'Not done, please wait.';
  } else {
    return 'You forgot to set the timer.';
  }
}


export function preparationTime(layers, averagePreparation){
  if (averagePreparation === undefined) {
    averagePreparation = 2;
  }
return averagePreparation * (layers.length)
  
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles'){
      noodles += 50;
    }
    if (layers[i] === 'sauce'){
      sauce += 0.2;
    }
  }
  return {
    noodles: noodles,
    sauce: sauce
  };
}

export function addSecretIngredient(friendList, myList) {
  const secretIngredient = friendList[friendList.length - 1];
  myList.push(secretIngredient);
}


export function scaleRecipe(recipe, portions){
  const factor = portions /2;
  const scaledRecipe = {};
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
    
  }
return scaledRecipe;
  
}
