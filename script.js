const img_url = 'https://image.tmdb.org/t/p/w1280';
const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI=
      'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
var count=0;

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
        if(count==0) clearMovies();
        count++;
        const {title,vote_average,release_data,overview,popularity,poster_path} = el;
         
        const infoEl = document.createElement("div");
        infoEl.id=count;
        infoEl.classList.add("movie");

         const titleEl = document.createElement("h3");
         titleEl.innerHTML= `${title}`;
         titleEl.classList.add("movie-info");


         const rateEl = document.createElement("h3");
         rateEl.innerHTML= `${vote_average}`;
         rateEl.classList.add("movie-info");
         rateEl.classList.add(changeColor(vote_average));

         const imgEl = document.createElement("img");
         imgEl.src = IMGPATH + poster_path;
         
         document.getElementById("main").appendChild(infoEl);
         document.getElementById(count).appendChild(titleEl);
         document.getElementById(count).appendChild(imgEl);   
         document.getElementById(count).appendChild(rateEl);
    
        
        })
        
        function changeColor(rate){
            if(rate>=8) return "yellow";
            else if(rate>=5) return "green";
            else return "orange";
        }
        document.getElementById("form").addEventListener("submit",searchMovie);

        function searchMovie(event){
            event.preventDefault();
            let search_movie = document.getElementById("search").value;
            console.log("movie searching",search_movie);
            if(search_movie){
                console.log(SEARCHAPI+search_movie)
                getMovies(SEARCHAPI+search_movie);
                search_movie ="";
                count=0;
            }
           
        }
function clearMovies(){   
     var i=0;
     while(document.getElementById("main").childNodes.length)
     {
       console.log(document.getElementById("main").childNodes.length);
       console.log("yes",i)
       console.log("id",document.getElementById("main").childNodes[0].id);
       document.getElementById("main").removeChild(document.getElementById("main").childNodes[0]);
       i++;
    }
}

}



