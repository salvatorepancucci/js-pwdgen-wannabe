let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colorePreferito = prompt("Inserisci il tuo colore preferito:");
let risultato = nome + cognome + colorePreferito + "23";
document.getElementById("risultato").innerText = `La tua password è ${risultato}`;