github_user_url = 'https://api.github.com/users/nivandosoares'
photo_id = '1257860'
pexels_background_url = `https://api.pexels.com/v1/photos/${photo_id}`
//pexels_api_key = '563492ad6f91700001000001cd666b8c57c94181aca5492e5fe89981'
base64_api_key = 'NTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxY2Q2NjZiOGM1N2M5NDE4MWFjYTU0OTJlNWZlODk5ODE='
pexels_api_key = atob(base64_api_key)
//feel free to change these values to make your own linktree clone
//just get a diferent photo with a diferent id on pexels.com id to make the background and use your github link

// Set the async function that will make the request using fetch and return a promise

async function Get_data_from(url, api_key){
  try{
    response = await fetch(url,{
      headers:{
        Authorization: api_key
      }
    })
    return response.json()
  }catch(error){
    console.log(error)
  }
}

//fecth my github profile via github API and get a promise with data
Get_data_from(github_user_url).then (data => {
  //set the avatar, bio and name 
  document.getElementById("avatar").src = data.avatar_url
 	document.querySelector('.nome').innerHTML = data.name
 	document.querySelector('.short-info').innerHTML = data.bio
})

Get_data_from(pexels_background_url, pexels_api_key).then (data => {
   console.log(data)
   document.body.style.backgroundImage = `url(${data.src.original})`
    
})
