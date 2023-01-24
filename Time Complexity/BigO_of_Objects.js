//Big O of Objects

let instructor = {
    firstName: "Abhinav",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//Insertion — O(1)
instructor.lastName="Awasthi"

//Removal — O(1)
delete instructor.favoriteNumbers

//Access — O(1)
console.log(instructor.firstName);

//Searching — O(n)
for(let i=0;i<instructor.length;i++){
    //O(N)
}

