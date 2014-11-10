/* likeButton function

*/
function likeButton (recipesObject,event){
	if (event.target === document.getElementById("likeButton")){
		recipesObject.like = parseInt(recipesObject.like) + 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";
	}else {
		recipesObject.like = parseInt(recipesObject.like) - 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";

	}
	document.getElementById("likeCounter").innerHTML = recipesObject.like;
}