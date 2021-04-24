fetch('https://api.github.com/users/nivandosoares')

.then(response => response.json())

.then(data => {

 	// console.log(data)
 	
 	document.getElementById("avatar").src = data.avatar_url;
 	document.querySelector('.nome').innerHTML = data.name
 	document.querySelector('.short-info').innerHTML = data.bio
 	
     

})

.catch(error => console.error(error))

//alert("burro demais kkkkkkkkk")
//api_pexels key 563492ad6f91700001000001cd666b8c57c94181aca5492e5fe89981
//photo id 1257860



fetch("https://api.pexels.com/v1/photos/1257860",{
  headers: {
    Authorization: "563492ad6f91700001000001cd666b8c57c94181aca5492e5fe89981"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
    // console.log(data)
   document.body.style.backgroundImage = `url(${data.src.original})`
    
   })
document.body.style.backgroundPosition = "center center"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundAtachment = "fixed"
document.body.style.backgroundSize = "cover"