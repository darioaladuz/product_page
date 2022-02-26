function getSelectionText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	return text;
}
const text = document.getElementById("t");
console.log(text);
const highlight = document.getElementById("ht");
const buttons = document.querySelectorAll('input[type="button"]');
// buttons.forEach(button => {
// 	button.addEventListener('click', (e) => {
// 		const temp = e.target.value; 
// 		const changed = getSelectionText();
// 		const fn = temp === 'strong' ? 'font-weight: bold' : 'font-style: italic';
// 		console.log({
// 			temp,
// 			changed,
// 			fn
// 		})
// 	text.innerHTML = text.innerHTML.replace(
// 		changed,
// 		`<span style="${temp === 'strong' ? 'font-weight: bold' : temp === 'italic' ? 'font-style: italic' : null}">${changed}</span>`
// 	);
// 	}
// })

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		const temp = e.target.value;
		const changed = getSelectionText();
		const fn = temp === 'strong' ? 'font-weight: bold' : 'font-style: italic';
		console.log({
			temp,
			changed,
			fn
		})
		text.innerHTML = text.innerHTML.replace(
			changed,
			`<span style="${fn}>${changed}</span>`
		)
	})
})