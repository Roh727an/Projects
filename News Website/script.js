const API_KEY="b966c02a30764ce58ef79874248acc02";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load',()=> fetchNews("India"));

function reload(){
    // Whenever Sme Click on Logo/Home page will be reloaded
    window.location.reload();
}

// Fetch Data
async function fetchNews(query) {
    // async function gives us a Promise that we have to wait to recive(res)
    // fetch function gives a promise
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}
// Bind Data to API
function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}
// Fill Data from API
function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    })
}

let curSelectedNav=null;
function onNavItemClick(id){
    // Fetch News According to Topic
    fetchNews(id);
    // Active Class Effect
    // 1.Get Currect Selected Element by id
    const navItem=document.getElementById(id);
    // If previously any class is active then remove it
    curSelectedNav?.classList.remove('active');
    // made currect click class as Active class
    curSelectedNav=navItem;
    // add active to current class
    curSelectedNav.classList.add('active');
}

// Take Care of Search Box & Button
const searchButton=document.getElementById('search-button');
const searchText=document.getElementById('search-text');

searchButton.addEventListener('click',()=>{
    const query=searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav=null;
})
