github_user_url = 'https://api.github.com/users/nivandosoares'
photo_id = '1257860'
pexels_background_url = `https://api.pexels.com/v1/photos/${photo_id}`

base64_api_key = 'NTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxY2Q2NjZiOGM1N2M5NDE4MWFjYTU0OTJlNWZlODk5ODE='
//decoding the base64 api_key to string
pexels_api_key = atob(base64_api_key)
//feel free to change these values to make your own linktree clone
//just get a diferent photo with a diferent id on pexels.com API (see the documentation) to make the background and use your github link

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
Get_data_from(github_user_url).then (user => {
  //set the avatar, bio and name 
    document.getElementById("avatar").src = user.avatar_url
 	document.querySelector('.nome').innerHTML = user.name
 	document.querySelector('.short-info').innerHTML = user.bio
    
     
})

//fetch the background from pexels 
Get_data_from(pexels_background_url, pexels_api_key).then (image => {
   //set it to the background

   document.body.style.backgroundImage = `url(${image.src.original})`
   
   //set the image reference 
   document.querySelector('.rodape').innerHTML = `<p>This <a href=${image.url}>Photo</a>
    was taken by <a href=${image.photographer_url}>${image.photographer}</a> on Pexels</p>`
    
})