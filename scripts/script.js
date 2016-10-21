// try {
// 	var repoUrl = 'https://api.github.com/users/YOUR_USERNAME/repos?access_token=' + ACCESS_TOKEN
// 	var profileUrl = 'https://api.github.com/users/YOUR_USERNAME?access_token=' + ACCESS_TOKEN
// }
// catch {
// 	var repoUrl = 'https://api.github.com/users/YOUR_USERNAME/repos'
// 	var profileUrl = 'https://api.github.com/users/YOUR_USERNAME'
// }


	var gitURL = "https://api.github.com/users/Carson777" 
	// ?access_token=" + ACCESS_TOKEN
	var gitURLRepo = "https://api.github.com/users/Carson777/repos"
	// ?access_token=" + ACCESS_TOKEN


var promise = $.getJSON(gitURL)
var promise2 = $.getJSON(gitURLRepo)
var email = ""
var emailNode = document.querySelector(".email")
var avatarURL = ""
var imageNode = document.querySelector(".profileIMG")
var userName = ""
var userNameNode = document.querySelector(".userName")
var login = ""
var loginNode = document.querySelector(".login")
var bio = ""
var bioNode = document.querySelector(".bio")
var repoBodyNode = document.querySelector(".repoBody")
var tempRepoNode = ""


var responseHandler = function(response){
	
	email = response.email
	emailNode.textContent = email
	avatarURL = response.avatar_url
	imageNode.src = avatarURL
	userName = response.name
	userNameNode.textContent = userName
	login = response.login
	loginNode.textContent = login
	bio = response.bio
	bioNode.textContent = bio

}
var responseHandler2 = function(response){
	for(var i = 0; i < response.length; i++){
		tempRepoNode += "<p class = 'repoNode'><h4 class = 'repoTitle'>" + response[i].name + "</h4>" + "<p class = 'repoDescription'>" + "Description: " + response[i].description + "</p><p class = 'repoLanguage'>" + "Language: " + response[i].language + "</p></p>"
	}
	repoBodyNode.innerHTML = tempRepoNode
}
//this (responseHandler) will run once the data request has returned from the server
promise.then(responseHandler)
promise2.then(responseHandler2)

