const fs = require("fs").promises;
const path = require("path");

async function updateFile() {
  console.log("coucou");
  try {
    const readFile = await fs.readFile(
      path.resolve(__dirname, "./file/jsonInput.json"),
      "utf-8"
    );
    const newFileContent = changeContent(readFile);

    await fs.writeFile(
      path.resolve(__dirname, "./output/jsonOutput.json"),
      newFileContent,
      "utf-8"
    );
  } catch (error) {
    console.error("cannot read file", error);
  }
}

function changeContent(content) {
  const majTypes = ["String", "Object", "Boolean", "Array", "Number"];
  const minTypes = ["string", "object", "boolean", "array", "number"];
  let newContent = content;
  for (let i = 0; i < majTypes.length; i++) {
    newContent.replace(majTypes[i], minTypes[i]);
  }
  return newContent;
}
updateFile();
