
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

/** fordert den Benutzer auf, eine Zahl einzugeben und speichert sie in einer Variablen **/
let zahl1 = prompt("Geben Sie die erste Zahl ein:");

/** fordert den Benutzer auf, eine zweite Zahl einzugeben und speichert sie in einer Variablen **/
let zahl2 = prompt("Geben Sie die zweite Zahl ein:");

/** konvertiert die Eingabezeichenfolgen in Zahlen und berechnet die Summe **/
let summe = parseFloat(zahl1) + parseFloat(zahl2);

/** gibt die Summe der beiden Zahlen in die Konsole aus **/
console.log("Die Summe der Zahlen ist: " + summe);



