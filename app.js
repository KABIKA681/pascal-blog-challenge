const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
const randomCardsPhoto = document.querySelector('.cards-photo-container');
const postImage = document.querySelector("body-body1")



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
                            
                            <button onclick=""><a href="/blog.html" onclick="getSinglePost(${posts.id})" ">View Single Item<a/></button>
                                </div>  
                </div>                     
        `
    });
}

const getSinglePost = async (id) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await post.json();
    console.log(response);
    localStorage.setItem('currentPost', JSON.stringify(response));
    window.location.href = 'singlePost.html';
};


getRandomData();