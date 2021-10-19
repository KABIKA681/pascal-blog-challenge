const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
const randomCardsPhoto = document.querySelector('.cards-photo-container');


async function getRandomData() {
    randomCardsPhoto.innerHTML = '';
    const response = await fetch(API_URL);
    const posts = await response.json();
    const bigPosts = posts.filter((post) => post.id % 4 == 0);
    console.log(bigPosts);

    bigPosts.forEach(posts => {
        randomCardsPhoto.innerHTML += `
        <div class="cards-photos">
                    <div class="photo">
                        <img src="/asset/pexels-greta-hoffman-9706062.jpg" alt="">
                            </div>
                            <div class="param-photo">
                            <div class="date">19th October 2021</div>
                            <div class="content3">
                            <h3>${posts.title}</h3>
                            </div>
                            <div class="content4">
                            <h4> ${posts.body}</h4>
                            </div>
                            <button onclick="getOnePost(${posts.id})">See in details</button>
                                </div>  
                </div>                     
        `
    });
   
}
getRandomData();