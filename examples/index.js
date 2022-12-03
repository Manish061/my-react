// const numberRow = document.querySelector(".number-row");
// const upRow = document.querySelector(".up-row");
// const homeRow = document.querySelector(".home-row");
// const downRow = document.querySelector(".down-row");
// const numRowKeys = "`1234567890-=";
// const upRowKeys = "QWERTYUIOP[]\\";
// const homeRowKeys = "ASDFGHJKL;'";
// const downRowKeys = "ZXCVBNM,./";

// const template = document.querySelector("#key");
// const textContainer = document.querySelector(".text-container");
// const input = document.querySelector("#input");

// input && input.addEventListener("input", handleInputChange);

// function handleInputChange(e) {
//   const { value } = e.target;
//   const lastCharEntered = value[value.length - 1];
//   if (!value || !lastCharEntered) {
//     return;
//   }
//   const allRowKeys = [numRowKeys, upRowKeys, homeRowKeys, downRowKeys];

//   const resultingRow = allRowKeys.filter(
//     (rowKeys) =>
//       rowKeys
//         .split("")
//         .map((key) => key.toLowerCase())
//         .join("")
//         .indexOf(lastCharEntered.toLowerCase()) > -1
//   );
//   if (resultingRow.length > 0) {
//     document
//       .querySelector(`[data-id='${lastCharEntered.toUpperCase()}']`)
//       .classList.toggle("pressed");
//   }
// }

// function addKeys(row, keys) {
//   if (row && template) {
//     keys.split("").forEach((key) => {
//       const cloneNode = template.content.cloneNode(true);
//       const kbd = cloneNode.querySelector("kbd");
//       kbd.textContent = key;
//       kbd.setAttribute("data-id", key);
//       if (key === "F" || key === "J") {
//         kbd.classList.toggle("home");
//       }
//       row.appendChild(cloneNode);
//     });
//   }
// }

// addKeys(numberRow, numRowKeys);
// addKeys(upRow, upRowKeys);
// addKeys(homeRow, homeRowKeys);
// addKeys(downRow, downRowKeys);

// const key = new Key();

const row = new Row();
const renderTree = row.render();
const traversedTree = traverse(renderTree);
console.log(traversedTree);

const rootNode = document.querySelector("#root");
rootNode && render(rootNode)(renderTree);
