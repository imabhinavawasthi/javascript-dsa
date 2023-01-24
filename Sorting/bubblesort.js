// Creating the bblSort function
function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       let swapping=false
      // Last i elements are already in place 
      for(var j = 0; j < ( arr.length - i -1 ); j++){//compare & swap
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           swapping=true
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
      if(swapping==false){
        break;
      }
    }
    // Print the sorted array
    console.log(arr);
   }
    
   // This is our unsorted array
   var arr = [234, 43, 55, 63,  5, 6, 235, 547];
    
   // Now pass this array to the bblSort() function
   bubbleSort(arr);