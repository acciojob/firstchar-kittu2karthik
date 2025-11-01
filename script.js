function firstChar(text) {
    if (!text) return ''; // Handle empty or null input
    return text.trim().charAt(0) || ''; // Trim spaces and get the first character, return empty string if none
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
