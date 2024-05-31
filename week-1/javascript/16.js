/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

function average(grades) {
  let total = 0;
  let grade = "";

  for (let i = 0; i < grades.length; i++) {
    total += students[i].mark;
  }
  total /= grades.length;

  switch (true){
    case total > 90 : {
      grade = "A";
      break;
    }
    case total > 80 : {
      grade = "B";
      break;
    }
    case total > 70 : {
      grade = "C";
      break;
    }
    case total > 60 : {
      grade = "D";
      break;
    }
    default : {
      grade = "F";
      break;
    }
  }

  return console.log(`Average: ${total} - ${grade}`);
}

average(students);