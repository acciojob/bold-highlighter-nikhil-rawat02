let strongWords = document.getElementsByTagName("strong");

function highlight() {
    //Write your code here
	for(let word of strongWords){
		word.style.color ="green";
	}	
}
function return_normal() {
    //Write your code here
	for(let word of strongWords){
		word.style.color ="black";
	}    
}
