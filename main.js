// put your code here
let formatButton = document.getElementById("submit");
formatButton.addEventListener("click", formatHTML);

const sourceArea = document.getElementById("source");
const targetArea = document.getElementById("target");

const singleTags = ['input', 'link', 'meta', 'br'];
const stack = [];


function formatHTML() {
	sourceArea.textContent = sourceArea.value;
	let sourceContent = sourceArea.textContent;

	// 2nd push htmls tags to stack
	let regexpTag = /<(\/?(\w+))([^>]*)>([^<]*)/g;
	let htmlTags = sourceContent.matchAll(regexpTag);
	let space = '  ';
	for (let match of htmlTags) {


		if (singleTags.includes(match[2])) {
			//	pass

		} else {

			if (!match[1].startsWith('/')) {
				stack.push(match[2])
				targetArea.textContent += (space.repeat(stack.length-1) + match[0]);

			} else {
				targetArea.textContent += (space.repeat(stack.length-1) + match[0]);
				stack.pop()

			}
			console.log(stack);
		}


	}


}
