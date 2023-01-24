let instructor = {
    firstName: "Abhinav",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//Object.keys — O(n)
console.log(Object.keys(instructor));

//Object.values — O(n)
console.log(Object.values(instructor));

//Object.entries — O(n)
console.log(Object.entries(instructor));

//hasOwnProperty — O(1)
console.log(instructor.hasOwnProperty("lastName"));

console.log(instructor.firstName)//O(N)

