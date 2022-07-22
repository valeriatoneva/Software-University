function solve(text) {
  let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matches = text.match(regex);

  let res = "";

  for (let el of matches) {
    res += el + " ";
  }

  console.log(res);
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);
