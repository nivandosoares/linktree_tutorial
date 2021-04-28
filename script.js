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
/*
Get_data_from(pexels_background_url, pexels_api_key).then (image => {
   //set it to the background
   document.body.style.backgroundImage = `url(${image.src.original})`
    
})*/
/* ---- particles.js config ---- */

window.addEventListener('DOMContentLoaded', (event) => {

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
}
);


