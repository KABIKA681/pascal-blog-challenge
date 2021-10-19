const API_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1'
const randomCardsPhoto = document.querySelector('.cards-photo-container');


async function getRandomData() {
    randomCardsPhoto.innerHTML = '';
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json)

    json.forEach(posts => {
        randomCardsPhoto.innerHTML += `
        <div class="cards-photos">
                    <div class="photo">
                        <img src="/asset/pexels-greta-hoffman-9706062.jpg" alt="">
                            </div>
                            <div class="param-photo">
                            <div class="date">${posts.id}</div>
                            <div class="content3">
                            <h3>${posts.title}</h3>
                            </div>
                            <div class="content4">
                            <h4> ${posts.body}</h4>
                            </div>
                            <button>See in details</button>
                                </div>  
                </div>
                <div class="cards-photos">
                    <div class="photo">
                        <img src="/asset/pexels-greta-hoffman-9705923.jpg" alt="">
                            </div>
                            <div class="param-photo">
                            <div class="date">${posts.id}</div>
                            <div class="content3">
                            <h3>${posts.title}</h3>
                            </div>
                            <div class="content4">
                            <h4> ${posts.body}</h4>
                            </div>
                            <button>See in details</button>
                                </div>  
                </div>
                <div class="cards-photos">
                    <div class="photo">
                        <img src="/asset/pexels-greta-hoffman-9706059.jpg" alt="">
                            </div>
                            <div class="param-photo">
                            <div class="date">${posts.id}</div>
                            <div class="content3">
                            <h3>${posts.title}</h3>
                            </div>
                            <div class="content4">
                            <h4> ${posts.body}</h4>
                            </div>
                            <button>See in details</button>
                                </div>  
                </div>        
        `
    });
   
}

getRandomData();