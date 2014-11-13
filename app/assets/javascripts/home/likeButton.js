/* likeButton function

*/
function likeButton (recipesObject, likes,event){
	if (event.target === document.getElementById("likeButton")){
		likes = likes + 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";
	}else {
		likes = likes - 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";

	}
	document.getElementById("likeCounter").innerHTML = likes;
	recipesObject.like = likes;
	$.post('/sendLikes', JSON.stringify(recipesObject))
}