//  1.reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Sample Output
console.log(reverseString("hello")); // "olleh"



// 2.check if a string is a palindrome
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Sample Output
console.log(isPalindrome("madam")); // true





// 3. Count Vowels and Consonants
function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if it's an alphabet letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    return { vowels: vowelCount, consonants: consonantCount };
}

// Example Output
console.log(countVowelsAndConsonants("hello world")); // { vowels: 3, consonants: 7 }



// 4. Second-Largest Distinct Number
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

// Sample Output
console.log(secondLargest([10, 5, 20, 8, 20])); // 10






// 5. removes duplicates from an array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// Sample Output
console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]




// 6. sum of all even numbers in an array 
function sumOfEvens(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// Example Output
console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // 12



// 7. frequency of an element 
function getFrequency(arr, target) {
    let count = 0;
    for (let element of arr) {
        if (element === target) {
            count++;
        }
    }
    return count;
}

// Example Output
console.log(getFrequency([1, 2, 3, 2, 4, 2], 2)); // 3



// 8. check anagram
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    let charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    
    return true;
}

// Example Output
console.log(areAnagrams("listen", "silent")); // true


// 9. moves zeros to the end of an array
function moveZeros(arr) {
    let insertPos = 0;
    
    // Shift all non-zero elements forward
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    
    // Fill the remaining spots with zeros
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    
    return arr;
}

// Sample Output
console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]






