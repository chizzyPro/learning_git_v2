let posts = [{title:'Post One', body:"This is the body for post one"}, 
		{title:"Post Two", body:"This is the body for post two"}]
	

function getPost(posts){
	posts.forEach((post) => {
	console.log(`${post.title}: ${post.body}`)
	})
}
getPost(post)

