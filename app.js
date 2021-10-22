const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
const randomCardsPhoto = document.querySelector('#cards-photo-container');
const postImage = document.querySelector(".body-body1")

async function getRandomData() {
    randomCardsPhoto.innerHTML = '';
    const response = await fetch(API_URL);
    const posts = await response.json();
    const bigPosts = posts.filter((post) => post.id % 5 == 0);
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
                            
                            <a href="/blog.html" onclick="getSinglePost(${posts.id})" ">
                            <button >View Single Item</button><a/>
                                </div>  
                </div>                     
        `
    });
}
getRandomData();

  


