let apiDiv = document.querySelector('.apiDiv');
let apiDiv1 = document.querySelector('.apiDiv1');
let api_keys = 'api_key=661ad9a76a4f96b8c106da64250fee1e';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_keys;
let ImgUrl = 'https://image.tmdb.org/t/p/w500'

function getMovie(url) {
  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    showData(data.results)
  })
}
let url2 = base_url + '/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&' + api_keys;
function getMovie2(url2) {
  fetch(url2).then((res) => {
    return res.json();
  }).then((data) => {
    showData1(data.results);
  })
}
getMovie(url);
getMovie2(url2);

function showData(data) {
  apiDiv.innerHTML = '';
  data.forEach((movies) => {
    const { title, poster_path, vote_average } = movies;
    let movie1 = document.createElement('div');
    movie1.classList.add('movie');
    movie1.innerHTML = `
    <div class = 'home2'>
      <img class = 'image' src = '${ImgUrl + poster_path}'/>
      <h2 class = 'title'>${title}</h2>
      <span class = '${colorName(vote_average)}'>${vote_average} &#9733;</span>
    </div>
    `
    apiDiv.append(movie1);
  })
};
function showData1(data) {
  apiDiv1.innerHTML = '';
  data.forEach((movies1) => {
    const { title, poster_path, vote_average } = movies1;
    let movie2 = document.createElement('div');
    movie2.classList.add('movie');
    movie2.innerHTML = `
    <div class = 'home2'>
      <img class = 'image' src = '${ImgUrl + poster_path}'/>
      <h2 class = 'title'>${title}</h2>
      <span class = '${colorName(vote_average)}'>${vote_average} &#9733;</span>
    </div>
    `
    apiDiv1.append(movie2);
  })
};
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let home2 = document.querySelector('.home');
let i = 0;
right.addEventListener('click',function(){
  home2.scrollLeft += 30+'px';
  i+= 30;
})
left.addEventListener('click',function(){
  home2.scrollLeft -= 30;
  i-= 30;
});
function colorName(vote){
  if(vote>7){
    return 'green';
  }
  else if(vote>5){
    return 'orange';
  }
  else{
    return 'red'
  }
}
