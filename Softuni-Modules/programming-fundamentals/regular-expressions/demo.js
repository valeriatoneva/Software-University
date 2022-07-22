let text = `2015-05-11`;
let regex = /\d{4}-\d{2}-\d{2}/g;
let matches = text.match(regex);
let firstMatch = regex.exec(text);
let replacement = `2016-05-11`;
let res = text.replace(regex, replacement)
