
let newlist = document.getElementById("newlist");
let toplist = document.getElementById("toplist");

function release() {
  newlist.innerHTML = ``;
  newreleases = shoes.sort(() => 0.5 - Math.random()).slice(0, 4);
  newreleases.map((p) => {
    newlist.innerHTML += `
<div class="col-6 col-md-3">
    <div class="product-card text-center">
    <a href="assets/pages/product.html?name=${p.name}&img=${p.img}&gender=${p.gender}&rater=${p.raters}&description=${p.description}&price=${p.price}&rating=${p.rating}" class="text-decoration-none">
        <img src="${p.img}" alt="${p.name}">
        <h6 class="mt-2 fw-bold">${p.name}</h6>
        <p>$${p.price} USD</p>
      </a>
    </div>
</div>`;
  });
}
release();

function topPriceShoes() {
  toplist.innerHTML = ``;

  // Sort shoes by price descending and take top 4
  const topShoes = [...shoes]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  // Add them to DOM
  topShoes.map((p) => {
    toplist.innerHTML += `
<div class="col-6 col-md-3">
    <div class="product-card text-center">
    <a href="assets/pages/product.html?name=${p.name}&img=${p.img}&gender=${p.gender}&rater=${p.raters}&description=${p.description}&price=${p.price}&rating=${p.rating}" class="text-decoration-none">
        <img src="${p.img}" alt="${p.name}">
        <h6 class="mt-2 fw-bold">${p.name}</h6>
        <p>$${p.price} USD</p>
      </a>
    </div>
</div>`;
  });
}

topPriceShoes();


{
  /* <a href="/petbot/pages/product.html?name=${p.name}&img=${p.img}&color=${p.color}&qty=${p.qty}&description=${p.description}&price=${p.price}" class="text-decoration-none"></a> */
}
