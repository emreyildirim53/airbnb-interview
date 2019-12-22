var findMissing = function(fullSequence, missingSequence) {
  var missingVal = new Set([...new Set(fullSequence)]
    .filter(x => !new Set(missingSequence).has(x)));
  return [...missingVal].join(' ');
}

console.log(findMissing([4, 12, 9, 5, 6], [9, 4, 6, 12]));
