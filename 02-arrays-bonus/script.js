const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
console.log(teachers);

// NON MODIFICARE QUESTA VARIABILE
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.length;
for (i = reversedTeachers - 1; i >= 0; i--) console.log(teachers[i]);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const word = teachers[i];
  if (word.length >= 5) {
    longNames.push(word);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const removeTeacher = teachers.splice(teachers.length - 6, 1);

console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();

console.log(teachersString);
