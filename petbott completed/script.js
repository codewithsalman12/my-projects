const products = [{
        name: "SPORT WATER BOTTLE FOR GIRLS",
        price: 800,
        Image: "bottle/bm-main.webp",
        description: "600ml Sports Water Bottle for Girls & Boys | Multicolor School Bottle with Ice Cube Tube & Straw",
        cat: "Bottle",
        color: "black",
        qty: 45
    },
    {
        name: "Storage jar",
        price: 300,
        Image: "jar/jar-main-1.webp",
        description: "3 In 1 Storage Jar With 3 Portion Compartment Air Tight Storage Capacity Food Storage Jar, Cereal Dispenser, Pulses Container 3 Partitions Dry Fruit Storage Spice Jar",
        cat: "jar",
        color: "red",
        qty: 40
    },
    {
        name: "Plastic Water Glass",
        price: 650,
        Image: "glass/glass-main-1.webp",
        description: "Enjoy tropical vibes with this Pack of 8 Pineapple Plastic Glasses   Durable, BPA-free, and perfect for parties or daily use.",
        cat: "Glass",
        color: "green",
        qty: 42
    },
    {
        name: "Kitchen Storage Jar Set",
        price: 280,
        Image: "jar/jar2-main.webp",
        description: "( Pack of 2 )1000ml - 800 ML - 600 MLLarge Food Containers Seal Pot Kitchen Storage Sealed Jar Airproof Food Sealed Cans For Coffee Sugar Tea Tin.",
        cat: "jar",
        color: "green",
        qty: 42
    },
    {
        name: "UTOPIA SHAKER BOTTLE",
        price: 1200,
        Image: "bottle/bp2-main.webp",
        description: "Utopia - Fitness Sports Classic Protein Mixer Shaker Bottle with Twist and Lock Box Storage (24-Oz) BPA Free & Leakproof.",
        cat: "Bottle",
        color: "green",
        qty: 42
    },
    {
        name: "Plastic Glass",
        price: 500,
        Image: "glass/glass2-main.webp",
        description: "Pack Of 4 Glass Set - Imported High Quality Unbreakable, Stylish and Durable Plastic",

        cat: "Glass",
        color: "green",
        qty: 42
    },
    {
        name: "VACUUM BOTTLE",
        price: 1000,
        Image: "bottle/bc-5.webp",
        description: "1500ML Stainless Steel Thermo Cup Large Capacity Portable Vacuum Flask with Straw Outdoor Thermos Water Bottle Sports.",
        cat: "Bottle",
        color: "green",
        qty: 42
    },
    {
        name: "pantry jars",
        price: 2100,
        Image: "jar/jar3-main.webp",
        description: "8pcs 1000ml Food grainer jars / pantry jars / pure glass / airtight cover(32 Free Stickers)",
        cat: "jar",
        color: "green",
        qty: 42
    },
    {
        name: "BUBBLE WATER BOTTLE",
        price: 900,
        Image: "bottle/bp-3-3.webp",
        description: "Bubble Water Bottle For Kids Boys Girls Multipurpose 500ml Color May VaryMade from BPAfree durable plastic safe for everyday use.Perfect for school, travel, or outdoor activities with fun, vibrant design.",
        cat: "Bottle",
        color: "green",
        qty: 42
    },
    {
        name: "ACRYLIC GLASS",
        price: 1300,
        Image: "glass/glass3-main.webp",
        description: "1 Piece Acrylic Glass  Unbreakable and Luxurious Design.Crystal-clear finish with a premium feel for any occasion.Ideal for indoor and outdoor use stylish and practical.",

        cat: "Glass",
        color: "green",
        qty: 42
    },

    {
        name: "COFFEE CUPS",
        price: 1300,
        Image: "bottle/bv-1.webp",
        description: "360ml stainless Steel Coffee Cup Travel Thermal Mug Leak-Proof Thermos Bottle Tea Coffee Mug Office Business Style Thermos.",
        cat: "Bottle",
        color: "green",
        qty: 42
    },
    {
        name: "4 GRID SPICE JAR",
        price: 200,
        Image: "jar/jar4-main.webp",
        description: "New High quality 4 grid spice jar Four Grid Salt Seasoning Box 4 grid masala box with spoon Kitchen Jar Storage Organizer 4 grid spice container spice rack Solid Seasoning Containers Home Kitchen Supplies Items",
        cat: "jar",
        color: "green",
        qty: 42
    },
    {
        name: "S-W BOTTLE",
        price: 960,
        Image: "bottle/b-main1.webp",
        description: "Smart Water Bottle Stainless Steel Cap | Leakproof BPA-Free Flask for Gym Outdoor Travel Camping Hiking Sports Office School Fitness Hydration Lightweight Durable Eco-Friendly Stylish Portable Reusable Unisex Multi-Color",
        cat: "Bottle",
        color: "green",
        qty: 42
    },
    {
        name: "Plastic Glass ",
        price: 700,
        Image: "glass/glass4-main.webp",
        description: "Pack of 4 Plastic Glass  Unbreakable Set for Kids, Imported High Quality.Lightweight and safe for daily use, perfect for little hands.Bright colors make mealtime fun and engaging for kids.Easy to clean and resable, ideal for home or travel use.",

        cat: "Glass",
        color: "green",
        qty: 42

    },
    {
        name: "Plastic Masala Jar",
        price: 350,
        Image: "jar/jar5-main.webp",
        description: "New Plastic Masala Jar | Pack 1 & Pack 2 | Transparent Spice Storage Container with Lid | Durable Kitchen Organizer Jar | Airtight Masala Box for Spices & Dry Items | Good Quality Plastic Jar for Kitchen Use",
        cat: "jar",
        color: "green",
        qty: 42
    },
    {
        name: "Lighting Glass",
        price: 650,
        Image: "glass/glass5-main.webp",
        description: "Lighting Glass, Rainbow Color Changing Flashing Light Cup, Led Glass Inductive",

        cat: "Glass",
        color: "green",
        qty: 42
    },
    {
        name: "Royal multipulle jar",
        price: 430,
        Image: "jar/jar6-main.webp",
        description: "Grocery Jar Air Tight Jars for Kitchen \ Spice Jar \ Fridge Door Spice Jar \ Kitchen Container \ Storage Snack Jar \ Spice Jar Set Masla\ Sugar\ Biscuit \ Daal \ Self storage Jar \ Spice Jar Kitchen seasoning Masla Box",
        cat: "jar",
        color: "green",
        qty: 42
    },
    {
        name: "Ring Glass",
        price: 600,
        Image: "glass/glass6-main.webp",
        description: "KJ | Original ring designed acrylo tummbler drinking glass, high quality acrylic color shaded transparent glass with ring designed inside, unique designed and colored glasses, made in pakistan.",

        cat: "Glass",
        color: "green",
        qty: 42
    },











];
let productlist = document.getElementById("container");

function All() {
    productlist.innerHTML = ``;
    products.map((p) => {
        productlist.innerHTML += `
<div class="card mt-3 mb-2" style="width: 340px;">
  <img src="${p.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.description}</p>
    <a href="/imdetail.html?name=${p.name}&color=${p.color}&qty=${p.qty}&img=${p.Image}&price=${p.price}&description=${p.description}" class="btn btn8">learn More</a>
  </div>
</div>`;
    });
}
All();


function Bottles() {
    productlist.innerHTML = ``;
    products.filter((p) => p.cat === "Bottle").map((p) => {
        productlist.innerHTML += `<div class="card mt-3 mb-2" style="width: 340px;">
  <img src="${p.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.description}</p>
    <a href="/imdetail.html?name=${p.name}&color=${p.color}&qty=${p.qty}&img=${p.Image}&price=${p.price}&description=${p.description}" class="btn btn8">learn More</a>
  </div>
</div>`;
    });
}


function jar() {
    productlist.innerHTML = ``;
    products.filter((p) => p.cat === "jar").map((p) => {
        productlist.innerHTML += `<div class="card mt-3 mb-2" style="width: 340px;">
  <img src="${p.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.description}</p>
    <a href="/imdetail.html?name=${p.name}&color=${p.color}&qty=${p.qty}&img=${p.Image}&price=${p.price}&description=${p.description}" class="btn btn8">learn More</a>
  </div>
</div>`;
    });
}

function Glass() {
    productlist.innerHTML = ``;
    products.filter((p) => p.cat === "Glass").map((p) => {
        productlist.innerHTML += `<div class="card mt-3 mb-2" style="width: 340px;">
  <img src="${p.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.description}</p>
    <a href="/imdetail.html?name=${p.name}&color=${p.color}&qty=${p.qty}&img=${p.Image}&price=${p.price}&description=${p.description}" class="btn btn8">learnmore</a>
  </div>
</div>`;
    });
}







$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        animate: 200
    });
});

