const randomCardsPhoto = document.querySelector('#cards-photo-container');

async function fetchPosts() {
    
    try {
    randomCardsPhoto.innerHTML = '';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json;
    const mainPosts = posts.filter((post) => post.id % 5 == 0);
    console.log(mainPosts)
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`)
    }
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
                                    
                                    <a href="/blog.html" onclick="getSinglePost(${posts.id})" "><button >View Single Item</button><a/>
                                        </div>  
                        </div>                     
                `
            });
        
    } catch (e){
        console.log(e);
    }
}
fetchPosts();

function listsPosts(elementContainerId) {
    const elementContainerId = document.getElementById(elementContainerId);

    if (!elementContainerId) {
        return;
    }

    fetchPosts()
        .then((posts) => { 
            if (!posts) {
                elementContainerId.innerHTML = 'No posts fetched'
                
                return;
            }
            for (const post of posts) {
                elementContainerId.appendChild(postElement(post))
            }

        })
        .catch((e) => {
            console.log(e)
        });
}
function postElement(post) {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', 'https://jsonplaceholder.typicode.com/posts/1');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerText = post.title;

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}






















// const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
// const randomCardsPhoto = document.querySelector('#cards-photo-container');
// const postImage = document.querySelector(".body-body1")

// async function getRandomData() {
//     randomCardsPhoto.innerHTML = '';
//     const response = await fetch(API_URL);
//     const posts = await response.json();
//     const bigPosts = posts.filter((post) => post.id % 5 == 0);
//     console.log(bigPosts);

//     bigPosts.forEach(posts => {
//         randomCardsPhoto.innerHTML += `
//         <div class="cards-photos">
//                     <div class="photo">
//                         <img src="/asset/pexels-greta-hoffman-9706062.jpg" alt="">
//                             </div>
//                             <div class="param-photo">
//                             <div class="date">19th October 2021</div>
//                             <div class="content3">
//                             <h3>${posts.title}</h3>
//                             </div>
//                             <div class="content4">
//                             <h4> ${posts.body}</h4>
//                             </div>
                            
//                             <a href="/blog.html" onclick="getSinglePost(${posts.id})" "><button >View Single Item</button><a/>
//                                 </div>  
//                 </div>                     
//         `
//     });
// }
// getRandomData();

  


