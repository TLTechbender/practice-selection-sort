

function selectionSort(arr) {
   // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
    

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

	
   let newArr = arr.slice();

	let sorted =[];

	while(newArr.length){
      console.log(sorted.join(","));

		let mini = Math.min(...newArr);
		index = newArr.indexOf(mini);

		let choppedOf = newArr.splice(index,1);

		sorted.push(choppedOf[0]);
	}
return sorted;
}



function selectionSortInPlace(arr) {
 // Daaaaaaaaaaaaaaaaaaamn, I honestly do not know what to do here so I'ma just leave it, copy for algorithms is pretty useless, I at least got to have some understanding
  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
