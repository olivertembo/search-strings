function StringSearch(pattern, text) {
  const results = [];

  const splitPattern = pattern.split("|");
  const splitText = text.split(" ");
 
  splitText.forEach((t) => {
    splitPattern.forEach((p) => {
      if (t === p) {
        results.push(p);
      }
    })
  })

  return results;
}

export default StringSearch;
