
const inpt1 = document.querySelector("#stMov");

const apiFetch = async (movie) => {
    const data = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:"cee05158",
            s: movie
        }
    });
    return data.data.Search;
};


const debounce = (func,delay = 500) =>{
    
    let timeOutId;
    return (...args) => {
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            func.apply(null, args);
        },delay);
        const diver = document.querySelector('.box');
        diver.innerHTML= "";
    }
};

const onInput = async (e) => {
    const movies = await apiFetch(e.target.value);
    console.log(movies)
    const diver = document.querySelector('.add');
    diver.style.visibility = "visible";
    for(elem of movies){
        

        diver.innerHTML += `
        <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img id="poster" src='${elem.Poster}' class="is-rounded" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong id="MovieName">${elem.Title}</strong>
              </p>
          </div>
         
        </div>
      </article>
        `;
    }
    
    
};


inpt1.addEventListener('input', debounce(onInput,300));


















/**
 * apiFetch().then( async (res) => {
    console.log(res.Search[0].Title);
    const title = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:"cee05158",
            i: res.Search[0].imdbID
        }
    });
    console.log(title.data.Actors);
});


 */
