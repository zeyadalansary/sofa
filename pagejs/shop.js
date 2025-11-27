function getDataFromDB() {
    var x = {
        "products": [
            {
                "id": 1,
                "title": "Cozy Modern Sofa",
                "description": "High performance desktop processor from Intel’s 14th Gen, ideal for gaming and productivity.",
                "category": "Modern Sofas",
                "price": 449.99,
                "discountPercentage": 5,
                "rating": 4.8,
                "stock": 20,
                "brand": "Intel",
                "sku": "CPU-INT-14700K",
                "weight": 0.3,
                "dimensions": { "width": 6.0, "height": 6.0, "depth": 1.0 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 3–5 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Runs everything smoothly." },
                    { "rating": 4, "comment": "Great performance but runs hot." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "1234567890123", "qrCode": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" },
                "images": ["https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtqHKX4y0_VD8jmOYVIhKtgm4lcbZuuMZpRivAHhzjz9Hw3RttnR-0XMKrLR0ZhgqY0E&usqp=CAU"
            },
            {
                "id": 2,
                "title": "Royal Lounge Sofa",
                "description": "Powerful AMD processor with 3D V-Cache, excellent for gaming workloads.",
                "category": "Modern Sofas",
                "price": 499.99,
                "discountPercentage": 4,
                "rating": 4.7,
                "stock": 15,
                "brand": "AMD",
                "sku": "CPU-AMD-7800X3D",
                "weight": 0.3,
                "dimensions": { "width": 6.0, "height": 6.0, "depth": 1.0 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 3–5 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Excellent gaming CPU." },
                    { "rating": 4, "comment": "Good performance, moderate power draw." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "2345678901234", "qrCode": "https://images.unsplash.com/photo-1606813902916-dc3c9b4723e1" },
                "images": ["https://images.unsplash.com/photo-1606813902916-dc3c9b4723e1"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VFeNmzyRtEXcZUUqXdSD0DjC_LyLx0lxkGeHdFjTOyVDG9lbI-xwQpDeRvPMRPV99EQ&usqp=CAU"
            },
            {
                "id": 3,
                "title": "Ultra Comfort Set",
                "description": "High-end GPU for 4K gaming and creative workflows.",
                "category": "Classic Sofas",
                "price": 1199.99,
                "discountPercentage": 6,
                "rating": 4.9,
                "stock": 8,
                "brand": "NVIDIA",
                "sku": "GPU-NVIDIA-4080",
                "weight": 1.2,
                "dimensions": { "width": 30.0, "height": 5.0, "depth": 13.0 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 1 week",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Unreal graphics quality." },
                    { "rating": 5, "comment": "Runs ultra at 4K easily." }
                ],
                "returnPolicy": "7 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "3456789012345", "qrCode": "https://images.unsplash.com/photo-1610465299990-5d206e0c5a39" },
                "images": ["https://images.unsplash.com/photo-1610465299990-5d206e0c5a39"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovb_0AJXfkjKEOyn42ZXBVYLCBG1rgloBvNRXJwr5POYu5s-VpfCQKVbsxDdr5d61Bx0&usqp=CAU"
            },
            {
                "id": 4,
                "title": "Cloud Soft Sofa",
                "description": "GPU based on RDNA 3 architecture, great value for performance.",
                "category": "Classic Sofas",
                "price": 899.99,
                "discountPercentage": 7,
                "rating": 4.8,
                "stock": 6,
                "brand": "AMD",
                "sku": "GPU-AMD-7900XT",
                "weight": 1.15,
                "dimensions": { "width": 30.0, "height": 5.0, "depth": 13.0 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 1 week",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Excellent for 1440p gaming." },
                    { "rating": 4, "comment": "Good value." }
                ],
                "returnPolicy": "7 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "4567890123456", "qrCode": "https://images.unsplash.com/photo-1610465301405-fd6c3e298a96" },
                "images": ["https://images.unsplash.com/photo-1610465301405-fd6c3e298a96"],
                "thumbnail": "https://www.orangetree.in/cdn/shop/files/premium-sofa-regular.jpg?v=1756237350"
            },
            {
                "id": 5,
                "title": "Milano Design Sofa",
                "description": "High-end AM5 motherboard with PCIe 5.0 and advanced VRMs.",
                "category": "Luxury Sofas",
                "price": 499.99,
                "discountPercentage": 8,
                "rating": 4.7,
                "stock": 14,
                "brand": "ASUS",
                "sku": "MB-ASUS-X670E",
                "weight": 1.0,
                "dimensions": { "width": 30.5, "height": 24.5, "depth": 4.5 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 5 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Excellent board for Ryzen 7000 series." },
                    { "rating": 4, "comment": "Lighting is a bit over the top." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "5678901234567", "qrCode": "https://images.unsplash.com/photo-1593642532744-d377ab507dc8" },
                "images": ["https://images.unsplash.com/photo-1593642532744-d377ab507dc8"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUwlvekXEO8e3D6JqmJo-UbUAKngg5rZ_eDruyBEtbkjORQQuslOAkxGwDZRjlqqpeJ8&usqp=CAU"
            },
            {
                "id": 6,
                "title": "Elegant Classic Sofa",
                "description": "Intel LGA 1700 motherboard with DDR5 support and multiple M.2 slots.",
                "category": "Luxury Sofas",
                "price": 189.99,
                "discountPercentage": 6,
                "rating": 4.7,
                "stock": 22,
                "brand": "MSI",
                "sku": "MB-MSI-B760M",
                "weight": 0.9,
                "dimensions": { "width": 24.4, "height": 24.4, "depth": 4.0 },
                "warrantyInformation": "3 years warranty",
                "shippingInformation": "Ships in 5 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 4, "comment": "Good features for the price." },
                    { "rating": 5, "comment": "Stable and solid performance." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "6789012345678", "qrCode": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
                "images": ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJG4mNl-dzEbhseOdYAnPtj0vluPLVydqGT6YpwQ6hQa0ICD45l1dAiFeNcejidRjQiI&usqp=CAU"
            },
            {
                "id": 7,
                "title": "Premium Relax Sofa",
                "description": "High-speed DDR5 memory with RGB lighting, 6000MHz.",
                "category": "Fabric Sofas",
                "price": 189.99,
                "discountPercentage": 10,
                "rating": 4.8,
                "stock": 30,
                "brand": "Corsair",
                "sku": "RAM-COR-VENGEANCE32",
                "weight": 0.1,
                "dimensions": { "width": 14.0, "height": 5.5, "depth": 1.5 },
                "warrantyInformation": "Lifetime warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Looks gorgeous and performs well." },
                    { "rating": 4, "comment": "Pricey but worth it." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "7890123456789", "qrCode": "https://images.unsplash.com/photo-1587202372775-98927b680d96" },
                "images": ["https://images.unsplash.com/photo-1587202372775-98927b680d96"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte0kgSWwIj-EOR10spAWaQVdk7M0RSyjWOuzW28rSZO4AzQHIGQ4eHEvAt7dmbEe1AU4&usqp=CAU"
            },
            {
                "id": 8,
                "title": "Urban Style Sofa",
                "description": "High-performance DDR5 RGB memory kit with low latency.",
                "category": "Fabric Sofas",
                "price": 199.99,
                "discountPercentage": 9,
                "rating": 4.9,
                "stock": 25,
                "brand": "G.Skill",
                "sku": "RAM-GSK-TRIDENTZ5",
                "weight": 0.1,
                "dimensions": { "width": 14.0, "height": 5.5, "depth": 1.5 },
                "warrantyInformation": "Lifetime warranty",
                "shippingInformation": "Ships in 2–3 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Super stable even at high speeds." },
                    { "rating": 5, "comment": "Great overclocking potential." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "8901234567890", "qrCode": "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
                "images": ["https://images.unsplash.com/photo-1519389950473-47ba0277781c"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxWnakyHuareVa_5-eXJ1NLLrTf5INv-EnISh_yCeFKXjXvKluPnvcT1-S_h-Ej9G9vE&usqp=CAU"
            },
            {
                "id": 9,
                "title": "Horizon Comfort Set",
                "description": "NVMe M.2 SSD with fast read/write speeds, ideal for OS & gaming.",
                "category": "Leather Sofas",
                "price": 149.99,
                "discountPercentage": 8,
                "rating": 4.8,
                "stock": 40,
                "brand": "Samsung",
                "sku": "SSD-SAM-970EVO1TB",
                "weight": 0.05,
                "dimensions": { "width": 8.0, "height": 0.3, "depth": 2.2 },
                "warrantyInformation": "5 years warranty",
                "shippingInformation": "Ships in 2 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Very fast and reliable." },
                    { "rating": 4, "comment": "Great value." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "9012345678901", "qrCode": "https://images.unsplash.com/photo-1606813895282-27b9cddc5e12" },
                "images": ["https://images.unsplash.com/photo-1606813895282-27b9cddc5e12"],
                "thumbnail": "https://shopps.in/wp-content/uploads/2023/10/1200x1200-38.jpg"
            },
            {
                "id": 10,
                "title": "Velvet Touch Sofa",
                "description": "Top-tier PCIe 4.0 NVMe SSD ideal for high-end gaming systems.",
                "category": "Leather Sofas",
                "price": 319.99,
                "discountPercentage": 6,
                "rating": 4.9,
                "stock": 28,
                "brand": "Western Digital",
                "sku": "SSD-WD-SN850X2TB",
                "weight": 0.05,
                "dimensions": { "width": 8.0, "height": 0.3, "depth": 2.2 },
                "warrantyInformation": "5 years warranty",
                "shippingInformation": "Ships in 2 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Blazing fast speeds." },
                    { "rating": 5, "comment": "Perfect for high-end builds." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "0123456789012", "qrCode": "https://images.unsplash.com/photo-1616628182504-9b4f1e09a1ef" },
                "images": ["https://images.unsplash.com/photo-1616628182504-9b4f1e09a1ef"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcR_56kc0E8FoS215LLz9UMgz91XIMOyVO8XshPbPMzlANQVMsM1pQhkOQ0tQ00j1FWE&usqp=CAU"
            },
            {
                "id": 11,
                "title": "Nordic Home Sofa",
                "description": "Fully modular 850W PSU with 80+ Gold efficiency and silent fan.",
                "category": "Sofa Sets",
                "price": 159.99,
                "discountPercentage": 12,
                "rating": 4.8,
                "stock": 15,
                "brand": "Corsair",
                "sku": "PSU-COR-RM850X",
                "weight": 1.65,
                "dimensions": { "width": 15.0, "height": 8.6, "depth": 16.0 },
                "warrantyInformation": "10 years warranty",
                "shippingInformation": "Ships in 4 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Quiet and powerful." },
                    { "rating": 4, "comment": "A bit heavy but worth it." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "1234567890987", "qrCode": "https://images.unsplash.com/photo-1603791452906-9ed92dd8b160" },
                "images": ["https://images.unsplash.com/photo-1603791452906-9ed92dd8b160"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeWW7TBCKdP9Sk4pqYNa-pNT7tpTBpScrERXwZdn9cCH4iBY1EDywBXZMc-csPaP6fXo&usqp=CAU"
            },
            {
                "id": 12,
                "title": "Comfort Zone Sofa",
                "description": "High-end 1000W fully modular PSU with excellent efficiency and performance.",
                "category": "Sofa Sets",
                "price": 229.99,
                "discountPercentage": 10,
                "rating": 4.9,
                "stock": 10,
                "brand": "EVGA",
                "sku": "PSU-EVGA-1000G+",
                "weight": 2.0,
                "dimensions": { "width": 15.8, "height": 8.6, "depth": 19.0 },
                "warrantyInformation": "10 years warranty",
                "shippingInformation": "Ships in 4 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Stable even on heavy loads." },
                    { "rating": 4, "comment": "Quiet and reliable." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "2345678909876", "qrCode": "https://images.unsplash.com/photo-1587202372775-98927b680d96" },
                "images": ["https://images.unsplash.com/photo-1587202372775-98927b680d96"],
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXto4bF0pSSqyq5tIN61q8vmGGgIVnzz_OKprF180G8h-wUhGHmz7-1W-xKBJMOC76fxE&usqp=CAU"
            },
            {
                "id": 13,
                "title": "Sky Lounge Sofa",
                "description": "Mid-tower ATX case with airflow front panel and tempered glass side.",
                "category": "Luxury Sofas",
                "price": 99.99,
                "discountPercentage": 8,
                "rating": 4.6,
                "stock": 30,
                "brand": "NZXT",
                "sku": "CASE-NZXT-H5FLOW",
                "weight": 6.5,
                "dimensions": { "width": 21.0, "height": 46.0, "depth": 46.0 },
                "warrantyInformation": "2 years warranty",
                "shippingInformation": "Ships in 5 business days",
                "availabilityStatus": "In Stock",
                "reviews": [
                    { "rating": 5, "comment": "Great airflow, sleek look." },
                    { "rating": 4, "comment": "Cable management could improve." }
                ],
                "returnPolicy": "14 days return",
                "minimumOrderQuantity": 1,
                "meta": { "barcode": "3456789098765", "qrCode": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
                "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"],
                "thumbnail": "https://media.loaf.com/image/upload/c_crop,h_1000,w_1399,x_0,y_50/f_auto/q_auto/c_fill,h_786,w_1100/website/images/original/577227-big-easy-large-sofa-016-cropped-lamp-on.jpg"
            }
        ]
    }
    return x.products;
}






var products = getDataFromDB();
for (var i = 0; i < products.length; i++) {
    paint(products[i]);
}
 var cart = [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];
function paint(p) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("h2");
    var price = document.createElement("h3");
    var btnAdd = document.createElement("button");
    div.classList.add("card");
    btnAdd.textContent = "Add to Cart";
    img.src = p.thumbnail;
    title.textContent = p.title;
    price.textContent = p.price + "$";
    div.append(img, title, price, btnAdd);
    document.getElementById("myProduct").appendChild(div);
    btnAdd.onclick = function () {
        cart.push(p);
        localStorage.setItem("cart", JSON.stringify(cart));
         updateCartCount();
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartcount = document.getElementById("cartCount");
    if (!cartcount) return;
    cartcount.textContent = cart.length;
    cartcount.style.display = cart.length > 0 ? "inline-block" : "none";
}

updateCartCount();


window.addEventListener("storage", function(event) {
    if (event.key === "cart") {
        updateCartCount();
    }
});


function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase()
    document.getElementById("myProduct").textContent = "";
    if (searchInput === "") {
        for (var i = 0; i < products.length; i++) {
            paint(products[i]);
        }
        return;
    }

    for (var i = 0; i < products.length; i++) {
        if (products[i].title.toLowerCase().includes(searchInput)) {
            paint(products[i]);
        }
    }
}
function filterByCategory() {
    var specialtyFilter = document.getElementById("specialtyFilter").value;
    document.getElementById("myProduct").textContent = ""; 
    if (specialtyFilter === "all") {
        for (var i = 0; i < products.length; i++) {
            paint(products[i]);
        }
        return;
    }
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === specialtyFilter) {
            paint(products[i]);
        }
    }
}
function sortByPrice() {
    var sortt = document.getElementById("sort").value;
    document.getElementById("myProduct").textContent = "";

    if (sortt === "all.p") {
        for (var i = 0; i < products.length; i++) {
            paint(products[i]);
        }
        return;
    } 
    
    if (sortt === "low") {
        products.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if (sortt === "high") {
        products.sort(function(a, b) {
            return b.price - a.price;
        });
    }
    for (var i = 0; i < products.length; i++) {
        paint(products[i]);
    }

}



}
