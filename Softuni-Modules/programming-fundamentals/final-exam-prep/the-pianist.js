function solve(input) {
  let numOfPieces = input.shift();
  let store = {};

  for (let i = 0; i < numOfPieces; i++) {
    [piece, composer, key] = input.shift().split("|");
    if (!store.hasOwnProperty(piece)) {
      store[piece] = {};
    }
    store[piece][composer] = key;
  }

  for (let el of input) {
    let [command, piece, composer, key] = el.split("|");
    if (command === `Stop`) {
      for (let [piece, composer] of Object.entries(store)) {
        for (let composerKey of Object.keys(store[piece])) {
          console.log(
            `${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`
          );
          break;
        }
      }
    }
    switch (command) {
      case `Add`:
        if (store.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          store[piece] = {}; // making an empty key with {} as value
          store[piece][composer] = key; // filling the empty {} with key and value (composer -> key)
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;

      case `Remove`:
        if (store.hasOwnProperty(piece)) {
          delete store.piece;
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `"Invalid operation! ${piece} does not exist in the collection."`
          );
        }
        break;
      case `ChangeKey`:
        if (store.hasOwnProperty(piece)) {
          let newKey = composer;
          for (let [keyComposer, valueKey] of Object.entries(store[piece])) {
            store[piece][keyComposer] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
          }
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
    }
  }
}
