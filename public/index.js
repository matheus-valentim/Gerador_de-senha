const botao = document.getElementById("botao");
const tamanhoElemento = document.getElementById("caracteres");
const numElemento = document.getElementById("numero");
const letraLowerElemento = document.getElementById("minusculas");
const letraCapsElemento = document.getElementById("maiusculas");
const especiaisElemento = document.getElementById("especiais");
const input = document.getElementById("senha");

botao.addEventListener("click", (e) => {
	e.preventDefault();

	const tamanho = tamanhoElemento.value;
	const letraCaps = letraCapsElemento.checked;
	const letraLower = letraLowerElemento.checked;
	const num = numElemento.checked;
	const especiais = especiaisElemento.checked;

	const senha = generatePassword(
		tamanho,
		letraCaps,
		letraLower,
		num,
		especiais
	);
	input.value = senha;
});

const arrayNumeros = arrayElementos(48, 57);
const arrayMinusculos = arrayElementos(97, 122);
const arrayMaiusculos = arrayElementos(65, 90);
const arrayespeciais = arrayElementos(33, 47)
	.concat(arrayElementos(58, 64))
	.concat(arrayElementos(91, 96))
	.concat(arrayElementos(123, 126));

function generatePassword(tamanho, letraCaps, letraLower, num, especiais) {
	let charCodes = arrayMinusculos;
	if (letraCaps) charCodes = charCodes.concat(arrayMaiusculos);
	if (especiais) charCodes = charCodes.concat(arrayespeciais);
	if (num) charCodes = charCodes.concat(arrayNumeros);
	const elementos = [];

	for (let i = 0; i < tamanho; i++) {
		const characterCode =
			charCodes[Math.floor(Math.random() * charCodes.length)];
		elementos.push(String.fromCharCode(characterCode));
	}
	return elementos.join("");
}

function arrayElementos(menor, maior) {
	const array = [];
	for (let i = menor; i <= maior; i++) {
		array.push(i);
	}
	return array;
}
