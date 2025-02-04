function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.indexof(str[i])===str.lastindexof(str[i])){
		return str[i]
	}
	else 
		return null
}
const input = prompt("Enter a string")
alert(firstNonRepeatedChar(input)); 
