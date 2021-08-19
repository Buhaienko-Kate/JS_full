const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  //put your code here
  return allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => 'Good job, ' + name);
};

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];
console.log(getMessagesForBestStudents(allStud, retakeStud));
getMessagesForBestStudents(allStud, retakeStud);

//output:
//['Good job, a', 'Good job, c']
