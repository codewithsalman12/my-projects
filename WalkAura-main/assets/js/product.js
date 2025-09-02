const param= new URLSearchParams(window.location.search)

const img=param.get('img')
const gender=param.get('gender')
const rater=param.get('rater')
const rating=param.get('rating')
const description=param.get('description')
const price=param.get('price')
const name=param.get('name')

let productDetails = document.getElementById("productDetails");

productDetails.innerHTML =`
<div class="row g-5">
        <div class="col-md-6">
          <img
            src="${img}"
            alt="${name}"
            class="product-image"
          />
        </div>
        <div class="col-md-6">
          <h2 class="fw-bold">${name}</h2>
          <p class="product-rating">
            <span class="text-muted ms-2">(${rating}/5 - ${rater} reviews)</span>
          </p>
          <p class="price">$ ${price} USD</p>
          <p>
            ${description}
          </p>
          <form>
            <div class="mb-4">
              <label for="qty" class="form-label fw-semibold">Quantity:</label>
              <input
                type="number"
                class="form-control w-25"
                id="qty"
                value="1"
                min="1"
                max="5"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-add">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
          </form>
        </div>
      </div>`