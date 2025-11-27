var images1 = document.getElementsByClassName('slideshow');
var index = 0;
var image = ['./11288303.png','./11444651.png','e8d5577f-ec36-4a39-aa39-7daf72ae8cb2.jpg','./fbbaf6e4-1a4c-467a-8a2c-9f1fdadd658f.jpg'];

function nextImage() {
  images1[0].src = image[index];
  index++;
  if (index == image.length) index = 0;
}
setInterval(nextImage, 3000);

function getDataFromDB() {
  var data = {
    "products": [
      {
        "id": 101,
        "title": "Comforty Modern Sofa Set",
        "brand": "Comforty",
        "description": "Elegant and modern 3-seater sofa set with soft fabric upholstery and durable wooden frame, perfect for living rooms.",
        "category": "sofas",
        "price_egp": 12999.00,
        "currency": "EGP",
        "discountPercentage": 10,
        "rating": 4.8,
        "stock": 12,
        "thumbnail": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "images": [
          "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
          "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
        ],
        "specs": {
          "dimensions_cm": "230 x 90 x 85",
          "materials": ["fabric upholstery", "solid wood frame", "foam cushions"],
          "warranty_years": 3,
          "made_in": "Egypt"
        },
        "tags": ["sofa", "living room", "comfort", "modern"],
        "date_added": "2025-10-11"
      },
      {
        "id": 102,
        "title": "Comforty L-Shape Corner Sofa",
        "brand": "Comforty",
        "description": "Spacious L-shaped corner sofa with a sleek design and comfortable cushioning. Perfect for family gatherings.",
        "category": "sofas",
        "price_egp": 15999.00,
        "currency": "EGP",
        "discountPercentage": 12,
        "rating": 4.9,
        "stock": 8,
        "thumbnail": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
        "images": [
          "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
          "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg"
        ],
        "specs": {
          "dimensions_cm": "280 x 180 x 85",
          "materials": ["microfiber fabric", "metal legs", "foam padding"],
          "warranty_years": 5,
          "made_in": "Egypt"
        },
        "tags": ["corner sofa", "family", "modern", "large"],
        "date_added": "2025-10-11"
      },
      {
        "id": 103,
        "title": "Comforty Classic Velvet Sofa",
        "brand": "Comforty",
        "description": "Luxury velvet sofa with golden metal legs and tufted backrest — combines elegance with comfort.",
        "category": "sofas",
        "price_egp": 18499.00,
        "currency": "EGP",
        "discountPercentage": 15,
        "rating": 4.7,
        "stock": 10,
        "thumbnail": "https://images.pexels.com/photos/6580224/pexels-photo-6580224.jpeg",
        "images": [
          "https://images.pexels.com/photos/6580224/pexels-photo-6580224.jpeg",
          "https://images.pexels.com/photos/6580225/pexels-photo-6580225.jpeg"
        ],
        "specs": {
          "dimensions_cm": "220 x 95 x 80",
          "materials": ["velvet fabric", "metal legs", "high-density foam"],
          "warranty_years": 4,
          "made_in": "Egypt"
        },
        "tags": ["velvet", "luxury", "gold", "classic"],
        "date_added": "2025-10-11"
      },
      {
        "id": 104,
        "title": "Comforty Minimalist Sofa Bed",
        "brand": "Comforty",
        "description": "Minimalist sofa bed design ideal for small spaces — converts easily into a bed with soft linen fabric.",
        "category": "sofa beds",
        "price_egp": 10999.00,
        "currency": "EGP",
        "discountPercentage": 8,
        "rating": 4.6,
        "stock": 18,
        "thumbnail": "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
        "images": [
          "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
          "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        ],
        "specs": {
          "dimensions_cm": "200 x 90 x 85",
          "materials": ["linen fabric", "metal frame", "foldable design"],
          "warranty_years": 2,
          "made_in": "Egypt"
        },
        "tags": ["sofa bed", "minimalist", "space saving", "modern"],
        "date_added": "2025-10-11"
      },
        {
        "id": 101,
        "title": "Comforty Modern Sofa Set",
        "brand": "Comforty",
        "description": "Elegant and modern 3-seater sofa set with soft fabric upholstery and durable wooden frame, perfect for living rooms.",
        "category": "sofas",
        "price_egp": 12999.00,
        "currency": "EGP",
        "discountPercentage": 10,
        "rating": 4.8,
        "stock": 12,
        "thumbnail": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "images": [
          "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
          "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
        ],
        "specs": {
          "dimensions_cm": "230 x 90 x 85",
          "materials": ["fabric upholstery", "solid wood frame", "foam cushions"],
          "warranty_years": 3,
          "made_in": "Egypt"
        },
        "tags": ["sofa", "living room", "comfort", "modern"],
        "date_added": "2025-10-11"
      },
      {
        "id": 102,
        "title": "Comforty L-Shape Corner Sofa",
        "brand": "Comforty",
        "description": "Spacious L-shaped corner sofa with a sleek design and comfortable cushioning. Perfect for family gatherings.",
        "category": "sofas",
        "price_egp": 15999.00,
        "currency": "EGP",
        "discountPercentage": 12,
        "rating": 4.9,
        "stock": 8,
        "thumbnail": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
        "images": [
          "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
          "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg"
        ],
        "specs": {
          "dimensions_cm": "280 x 180 x 85",
          "materials": ["microfiber fabric", "metal legs", "foam padding"],
          "warranty_years": 5,
          "made_in": "Egypt"
        },
        "tags": ["corner sofa", "family", "modern", "large"],
        "date_added": "2025-10-11"
      },
      {
        "id": 103,
        "title": "Comforty Classic Velvet Sofa",
        "brand": "Comforty",
        "description": "Luxury velvet sofa with golden metal legs and tufted backrest — combines elegance with comfort.",
        "category": "sofas",
        "price_egp": 18499.00,
        "currency": "EGP",
        "discountPercentage": 15,
        "rating": 4.7,
        "stock": 10,
        "thumbnail": "https://images.pexels.com/photos/6580224/pexels-photo-6580224.jpeg",
        "images": [
          "https://images.pexels.com/photos/6580224/pexels-photo-6580224.jpeg",
          "https://images.pexels.com/photos/6580225/pexels-photo-6580225.jpeg"
        ],
        "specs": {
          "dimensions_cm": "220 x 95 x 80",
          "materials": ["velvet fabric", "metal legs", "high-density foam"],
          "warranty_years": 4,
          "made_in": "Egypt"
        },
        "tags": ["velvet", "luxury", "gold", "classic"],
        "date_added": "2025-10-11"
      },
      {
        "id": 104,
        "title": "Comforty Minimalist Sofa Bed",
        "brand": "Comforty",
        "description": "Minimalist sofa bed design ideal for small spaces — converts easily into a bed with soft linen fabric.",
        "category": "sofa beds",
        "price_egp": 10999.00,
        "currency": "EGP",
        "discountPercentage": 8,
        "rating": 4.6,
        "stock": 18,
        "thumbnail": "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
        "images": [
          "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
          "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        ],
        "specs": {
          "dimensions_cm": "200 x 90 x 85",
          "materials": ["linen fabric", "metal frame", "foldable design"],
          "warranty_years": 2,
          "made_in": "Egypt"
        },
        "tags": ["sofa bed", "minimalist", "space saving", "modern"],
        "date_added": "2025-10-11"
      }
    ]
  };
  return data.products;
}

function getPaymentMethods() {
  var payments = {
    "payments": [
      {
        "id": 201,
        "title": "Bank Misr",
        "description": "Secure payments through Egyptian bank accounts — available nationwide.",
        "thumbnail": "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg",
        "category": "bank",
        "tags": ["bank misr", "egypt", "secure payment"]
      },
      {
        "id": 202,
        "title": "Fawry Service",
        "description": "Pay easily with Fawry through thousands of service points across Egypt.",
        "thumbnail": "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg",
        "category": "payment",
        "tags": ["fawry", "egypt", "payment"]
      },
      {
        "id": 203,
        "title": "Vodafone Cash",
        "description": "Instant mobile wallet payments via Vodafone Cash service.",
        "thumbnail": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
        "category": "mobile wallet",
        "tags": ["vodafone cash", "mobile payment", "egypt"]
      },
      {
        "id": 204,
        "title": "Visa / MasterCard",
        "description": "Pay online safely with Visa or MasterCard debit or credit cards.",
        "thumbnail": "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg",
        "category": "card",
        "tags": ["visa", "mastercard", "online payment"]
      }
    ]
  };
  return payments.payments;
}
var payments = getPaymentMethods();

for (var i = 0; i < payments.length; i++) {
  payment(payments[i]);
}
function payment(pay) {
  var container = document.getElementById("payment-container");
  var paym = document.createElement("div");
  var img = document.createElement("img");
  var title = document.createElement("h3");
 
  img.src = pay.thumbnail;
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.borderRadius = "10px";

  title.textContent = pay.title;


  paym.append(img, title);
  paym.className = "payment";
  container.appendChild(paym);
  document.body.appendChild(container);
}

var FeaturedProducts = document.createElement("h2");
FeaturedProducts.textContent = "Featured Products";
document.body.appendChild(FeaturedProducts);
FeaturedProducts.classList.add("featured-products");

var products = getDataFromDB();
for (var i = 0; i < products.length; i++) {
  paint(products[i]);
}

function paint(product) {
  var container = document.getElementById("product-container");
  var prod = document.createElement("div");
  var img = document.createElement("img");
  var title = document.createElement("h3");
  var price = document.createElement("h4");
  var desc = document.createElement("p");
  var rating = document.createElement("p");
  var discount = document.createElement("p");

  img.src = product.thumbnail;
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.borderRadius = "10px";

  title.textContent = product.title;
  price.textContent = product.price_egp + " EGP";
  desc.textContent = product.description;
  rating.textContent = "Rating: " + product.rating;
  discount.textContent = "Discount: " + product.discountPercentage + "%";

  prod.append(img, title, price, desc, rating, discount);
  prod.className = "product";
  container.appendChild(prod);
  document.body.appendChild(container);
}


// إنشاء الـ strip-wrap + scroller بالكود
document.addEventListener("DOMContentLoaded", async () => {
  const stripWrap = document.createElement("div");
  stripWrap.className = "strip-wrap";

  const scroller = document.createElement("div");
  scroller.id = "scroller";
  stripWrap.appendChild(scroller);

  const banner = document.querySelector(".slideshow");
  banner.insertAdjacentElement("afterend", stripWrap);

  const queries = [
    "interior", "chair", "sofa", "living room",
    "armchair", "furniture", "modern interior",
    "dining room", "home decor", "lounge"
  ];

  async function loadPhotos(query) {
    const accessKey = "PaMz3gvN-6p5r6LuMggfopXphifwOQBbVmANd-5qLB4";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5`,
      {
        headers: { Authorization: `Client-ID ${accessKey}` }
      }
    );
    const data = await res.json();
    return data.results; 
  }

  for (let i = 0; i < queries.length; i++) {
    const photos = await loadPhotos(queries[i]);

    photos.forEach((photo) => {
      const item = document.createElement("div");
      item.className = "item";

      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = queries[i];
      img.loading = "lazy";

      item.appendChild(img);
      scroller.appendChild(item);
    });
  }

  // Auto scroll داخل الـ DOMContentLoaded بعد ما scroller اتبني
  let scrollPos = 0;
  function autoScroll() {
    scrollPos += 1; // سرعة الحركة
    if (scrollPos >= scroller.scrollWidth - scroller.clientWidth) {
      scrollPos = 0; // يرجع من الأول
    }
    scroller.scrollLeft = scrollPos;
    requestAnimationFrame(autoScroll);
  }
  autoScroll();
});
