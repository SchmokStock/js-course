const startResult = 0;
let currentResult = startResult;

currentResult = currentResult + 22;

// `` can do line breaks within string
// also allowing to add variables with ${ } instead of pluses
let resultDescription = `"${currentResult}" 'lol'`;

// \n does a line break within string.
// 'hey\'' the \' escapes the standard assignment and ' is presented as string
// also applied to \ itself. so to wirte \ as string use \\
let errorMessage = "an error \n occure!";

outputResult(currentResult, resultDescription);
