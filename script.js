const img_url = 'https://image.tmdb.org/t/p/w1280';
const api_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
let count=0;

getMovies(api_url);
async function getMovies(url){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("an error occured");
    }
    const data = await response.json();
    showMovies(data.results)
}
function showMovies(movies){
    movies.forEach(el=>{
         count++;
        const {title,vote_average,release_data,overview,popularity,poster_path} = el;
         const infoEl = document.createElement("div");
         infoEl.id=count;
         infoEl.classList.add("movie");

         const titleEl = document.createElement("h3");
         titleEl.innerHTML= `${title}`;
         titleEl.classList.add("movie-info");


         const rateEl = document.createElement("h3");
         rateEl.innerHTML= `Rating:${vote_average}`;
         rateEl.classList.add("movie-info");


         const imgEl = document.createElement("img");
         imgEl.src = IMGPATH + poster_path;

         
         document.body.appendChild(infoEl);
         document.getElementById(count).appendChild(imgEl);   
         document.getElementById(count).appendChild(titleEl);
         document.getElementById(count).appendChild(rateEl);
     
    }) 
    
    
    

}
