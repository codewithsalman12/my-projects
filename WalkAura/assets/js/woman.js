let womanlist = document.getElementById("womanlist");

function womenlist() {
  womanlist.innerHTML = ``;
    shoes.filter((p) => p.gender === "women").map((p) => {
        womanlist.innerHTML += `
    <div class="col-6 col-md-3">
    <div class="product-card text-center">
    <a href="/assets/pages/product.html?name=${p.name}&img=${p.img}&gender=${p.gender}&rater=${p.raters}&description=${p.description}&price=${p.price}&rating=${p.rating}" class="text-decoration-none">
        <img src="${p.img}" alt="${p.name}">
        <h6 class="mt-2 fw-bold">${p.name}</h6>
        <p>$${p.price} USD</p>
      </a>
    </div>
</div>`;
    });
}

womenlist()

