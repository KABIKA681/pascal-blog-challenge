const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
const randomCardsPhoto = document.querySelector('#cards-photo-container');
const blogApp = document.querySelector(".body-body1")

async function getRandomData() {
    randomCardsPhoto.innerHTML = '';
    const response = await fetch(API_URL);
    const posts = await response.json();
    const bigPosts = posts.filter((post) => post.id % 5 == 0);

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
                            
                            <a href="#" onclick="getSinglePost(${posts.id})" ">
                            <button >View Single Item</button><a/>
                                </div>  
                </div>                     
        `
    });
}
getRandomData();

    const getSinglePost = async (id) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const response = await post.json();
    localStorage.setItem('currentPost', JSON.stringify(response));
    window.location.href = 'blog.html';
};  
const showCurrentPost = () => {
    const currentPost = JSON.parse(localStorage.getItem('currentPost'));
    let body = '';
    body += `
    <div class="paragraph1">
    <img src="/asset/pexels-greta-hoffman-9706062.jpg" alt="">
    <h1>${currentPost.title}</h1>
    <p class="ppp">quia et suscipit nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoadipisicing elit. Beatae dolor quisquam aut repellat quaerat consequatur cum consectetur accusamus nam numquam. Dolore numquam voluptas soluta eos accusamus? Architecto deleniti odit ipsum.</p>
        <div class="para">
            <p class="pppp"> Comments
            </p>
        </div>
       <div class="para2">
        <p class="para2">${currentPost.body}
    </p>
       </div>
      
</div>
       `;
    
       blogApp.innerHTML = body;
};
showCurrentPost()



