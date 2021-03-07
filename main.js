// put your code here
let formatButton = document.getElementById("submit");
formatButton.addEventListener("click", formatHTML);

const sourceArea = document.getElementById("source");
const targetArea = document.getElementById("target");

function formatHTML(){
    // 1st copy source innerHTML to target
    targetArea.textContent = sourceArea.value;


}
