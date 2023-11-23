// let Json = {
//     'userInfo' : [ {
//             'Username' : '',
//             'Tlf-nummer' : '',
//             'Email' : '',
//             'Password' : '',
//     }
// ]
// }

// Retrieve the stored array from localStorage or use an empty array
const storedArray = localStorage.getItem('inputArray');
const initialArray = storedArray ? JSON.parse(storedArray) : [];

// State variable for the array
let inputArray = initialArray;

// Function to update the array
export const updateInputArray = (newItem) => {
  inputArray = [...inputArray, newItem];
  localStorage.setItem('inputArray', JSON.stringify(inputArray));
};

// Function to get the current array
export const getInputArray = () => inputArray;