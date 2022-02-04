//sync
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} and ${second} \n`,
  { flag: "a" }
);

//Async
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "UTF8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const second = result;
  writeFile(
    "./content/result.txt",
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("done with this");
    }
  );
});

console.log("starting second");
