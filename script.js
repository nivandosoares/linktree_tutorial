github_user_url = 'https://api.github.com/users/nivandosoares'
pexels_background_url = 'https://api.pexels.com/v1/photos/1257860'
pexels_api_key = '563492ad6f91700001000001cd666b8c57c94181aca5492e5fe89981'

async function Get_data_from(url, api_key){
  try{
    response = await fetch(url,{
      Authorization: api_key
    })
    return response.json()
  }catch(error){
    console.log(error)
  }
}


/*
async function Get_GithubUser_from(url){
  try{
    response = await fetch(url)
    return response.json()
  }catch(error){
    console.log(error)
  }
}*/

Get_data_from(github_user_url).then (data => {
 //console.log(data)
  document.getElementById("avatar").src = data.avatar_url;
 	document.querySelector('.nome').innerHTML = data.name
 	document.querySelector('.short-info').innerHTML = data.bio
})
/*
async function Get_background_from(url){
  try{
    response = await fetch(url, {
      headers: {
        Authorization: pexels_api_key
      }
    })
    return response.json()
  }catch(error){
    console.log(error)
  }
}
*/
Get_data_from(pexels_background_url, pexels_api_key).then (data => {
 //console.log(data)
   document.body.style.backgroundImage = `url(${data.src.original})`
    
})
