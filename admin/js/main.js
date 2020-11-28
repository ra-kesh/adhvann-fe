document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML='';
    posts.forEach(post=> {
        let postHTML= ` 
            <article class="d-flex justify-content-between align-items-center article-inline">
                    <div class="id w5">${post.id}</div>
                    <div class="name w27">${post.title}</div>
                    <div class="date w27">${post.date}</div>
                    <div class="category w27">${post.category}</div>
                    <div class="edit w9"><button class="btn btn-link">edit</button></div>
                    <div class="remove w5"><button class="btn btn-link">X</button></div>
            </article>`;
    articles.insertAdjacentElement('beforeend',postHTML);
    });
})