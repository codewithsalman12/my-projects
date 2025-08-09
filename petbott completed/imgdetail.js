const param = new URLSearchParams(window.location.search)

// console.log(param.get('qty'))

const img = param.get('img')
const color = param.get('color')
const qty = param.get('qty')
const description = param.get('description')
const price = param.get('price')
const name = param.get('name')


const main = document.getElementById('main')

main.innerHTML = `<div class="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div class="row g-0 flex-column flex-md-row">
                <div class="col-md-5 bg-light p-4 d-flex align-items-center justify-content-center">
                    <img src="${img}" class="img-fluid rounded-4" alt="Sport Water Bottle">
                </div>
                <div class="col-md-7 p-4">
                    <div class="card-body">
                        <h3 class="card-title fw-bold mb-3 text2">${name}</h3>
                        <p class="card-text text-muted">${description}
                          
                        </p>
                        <p class="card-text fw-semibold fs-5 text-success">Price: Rs.${price}</p>

                        <h5 class="mt-4 mb-3">Available Colors</h5>
                        <table class="table table-bordered table-hover">
                            <thead class="table-secondary">
                                <tr>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${color}</td>
                                    <td>${qty} pieces</td>
                                </tr>
                            </tbody>
                        </table>
                            <a href="#" class="btn btn8">Buy Now</a>

                    </div>
                </div>
            </div>
        </div>`