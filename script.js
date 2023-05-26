function getCharacters(done) {
  const results = fetch("https://fakestoreapi.com/products");

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getCharacters((data) => {
  data.forEach((item) => {
    const article = document.createRange().createContextualFragment(/*html*/ `
    <article class="box">
    <div class="image-container">
      <img src="${item.image}" alt="${item.category}" />
      <div class="overlay">
        <div class="overlay-content">
          Comprar
        </div>
      </div>
    </div>
    <div class="item">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    </div>
    <p class="price">$${item.price}</p>
  </article>
  
  
        `);

    const main = document.querySelector("main");
    main.append(article);
  });
});
