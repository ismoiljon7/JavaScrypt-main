let ism = prompt(`Ismingizni kiriting:`);

let birinchiHarf = ism.charAt().toUpperCase();
let davomi = ism.slice(1).toLowerCase();
let result = birinchiHarf + davomi;

alert(`salom, ${result}`);
