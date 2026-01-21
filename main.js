const displayArea = document.getElementById('display-area');

function printResult(title, content) {
    if (typeof content === 'object') {
        content = JSON.stringify(content, null, 2);
    }
    const htmlBlock = `
        <div class="result-box">
            <h3>${title}</h3>
            <pre>${content}</pre>
        </div>
    `;
    displayArea.innerHTML += htmlBlock;
}

// --- Câu 1: Khai báo Constructor Function Product ---

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- Câu 2: Khởi tạo mảng products ---

var products = [
    new Product(1, "iPhone 15 Pro Max", 32000000, 10, "Phone", true),
    new Product(2, "Samsung S24", 31000000, 5, "Phone", true),
    new Product(3, "Macbook Air", 25000000, 0, "Laptop", true),
    new Product(4, "Chuột Logitech", 500000, 20, "Accessories", true),
    new Product(5, "Bàn phím cơ", 2000000, 15, "Accessories", false),
    new Product(6, "Dell XPS 13", 35000000, 3, "Laptop", true)
];
printResult("Câu 2: Danh sách sản phẩm khởi tạo", products);


// --- Câu 3: Tạo mảng mới chỉ chứa Name và Price ---

var namesAndPrices = [];

for (var i = 0; i < products.length; i++) {
    var item = products[i];

    var tempObj = {
        name: item.name,
        price: item.price
    };
    namesAndPrices.push(tempObj);
}
printResult("Câu 3: Mảng chỉ chứa Tên và Giá", namesAndPrices);


// --- Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0) ---

var inStockProducts = [];

for (var i = 0; i < products.length; i++) {
    var item = products[i];

    if (item.quantity > 0) {
        inStockProducts.push(item);
    }
}
printResult("Câu 4: Các sản phẩm còn hàng trong kho", inStockProducts);


// --- Câu 5: Kiểm tra có sản phẩm nào giá trên 30.000.000 không ---

var hasExpensiveProduct = false;

for (var i = 0; i < products.length; i++) {
    if (products[i].price > 30000000) {
        hasExpensiveProduct = true;
        break;
    }
}
printResult("Câu 5: Có sản phẩm giá trên 30 triệu không?", hasExpensiveProduct ? "CÓ" : "KHÔNG");


// --- Câu 6: Kiểm tra tất cả sản phẩm danh mục 'Accessories' có đang bán không ---

var accessories = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].category === "Accessories") {
        accessories.push(products[i]);
    }
}
var allAvailable = true;
for (var i = 0; i < accessories.length; i++) {
    if (accessories[i].isAvailable === false) {
        allAvailable = false;
        break;
    }
}
printResult("Câu 6: Tất cả phụ kiện (Accessories) đều đang bán?", allAvailable ? "ĐÚNG" : "SAI (có món ngừng bán)");


// --- câu 7: Tính tổng giá trị kho hàng (price * quantity) ---

var totalValue = 0;

for (var i = 0; i < products.length; i++) {
    var item = products[i];
    var itemTotal = item.price * item.quantity;

    totalValue = totalValue + itemTotal;
}
var formattedMoney = totalValue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
printResult("Câu 7: Tổng giá trị kho hàng", formattedMoney);


// --- Câu 8: Dùng for...of duyệt mảng và in ra ---

var resultQ8 = "";

for (var item of products) {
    resultQ8 += "Tên: " + item.name + " - Danh mục: " + item.category + " - Còn bán: " + item.isAvailable + "\n";
}
printResult("Câu 8: Duyệt mảng (dùng for...of)", resultQ8);


// --- câu 9: Dùng for...in duyệt thuộc tính đối tượng ---

var firstProduct = products[0];
var resultQ9 = "";

for (var key in firstProduct) {
    resultQ9 += "Thuộc tính: " + key + " --> Giá trị: " + firstProduct[key] + "\n";
}
printResult("Câu 9: Duyệt object (dùng for...in)", resultQ9);

// --- Câu 10: Lấy tên các sản phẩm Đang bán VÀ Còn hàng ---

var activeNames = [];

for (var i = 0; i < products.length; i++) {
    var item = products[i];

    if (item.isAvailable === true && item.quantity > 0) {
        activeNames.push(item.name);
    }
}
printResult("Câu 10: Tên các SP đang bán và còn hàng", activeNames);