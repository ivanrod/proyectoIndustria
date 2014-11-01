/* likeButton function

*/
function likeButton (recipesObject,event){
	console.log(event.target)
	if (event.target === document.getElementById("likeButton")){
		recipesObject.like = recipesObject.like + 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";
	}else {
		recipesObject.like = recipesObject.like - 1;
		document.getElementsByClassName("likeClick")[0].style.display="none";

	}
}