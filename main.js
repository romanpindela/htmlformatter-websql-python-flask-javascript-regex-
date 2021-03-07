// put your code here
let formatButton = document.getElementById("submit");
formatButton.addEventListener("click", formatHTML);

const sourceArea = document.getElementById("source");
const targetArea = document.getElementById("target");

let stack = [];


function formatHTML(){
    // 1st copy source innerHTML to target
    targetArea.textContent = sourceArea.value;
    targetContent = targetArea.textContent;

    // 2nd push htmls tags to stack
    let regexpTag = /<(\/?(\w+))([^>]*)>([^<]*)/g;
    let htmlTags = targetContent.matchAll(regexpTag);
    for (let htmlTag of htmlTags){
        console.log(htmlTag);
    }



}
