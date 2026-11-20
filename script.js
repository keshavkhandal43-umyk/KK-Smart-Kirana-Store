var MY_UPI_ID = "keshavkhandal@okicici";
var SHOP_NAME = "KK Smart Kirana Store";

var initialStock = [
  { id: 1, name: "Aashirvaad Chakki Atta 10kg", category: "Atta & Rice", price: 465, stock: 18 },
  { id: 2, name: "Aashirvaad Multigrain Atta 5kg", category: "Atta & Rice", price: 295, stock: 4 },
  { id: 3, name: "India Gate Basmati Rice 5kg", category: "Atta & Rice", price: 440, stock: 14 },
  { id: 4, name: "Daawat Rozana Super Rice 1kg", category: "Atta & Rice", price: 78, stock: 25 },
  { id: 5, name: "Madhur Pure Sugar 5kg", category: "Atta & Rice", price: 235, stock: 16 },
  { id: 6, name: "Fortune Besan 1kg", category: "Atta & Rice", price: 112, stock: 5 },
  { id: 7, name: "Rajdhani Sooji / Rava 500g", category: "Atta & Rice", price: 34, stock: 30 },
  { id: 8, name: "Fortune Sunlite Refined Oil 1L", category: "Oil & Ghee", price: 145, stock: 28 },
  { id: 9, name: "Fortune Kachi Ghani Mustard Oil 1L", category: "Oil & Ghee", price: 168, stock: 20 },
  { id: 10, name: "Amul Pure Cow Ghee 1L", category: "Oil & Ghee", price: 630, stock: 3 },
  { id: 11, name: "Saras Desi Ghee 500ml", category: "Oil & Ghee", price: 310, stock: 12 },
  { id: 12, name: "Toor / Arhar Dal Unpolished 1kg", category: "Dal & Masala", price: 165, stock: 24 },
  { id: 13, name: "Tata Sampann Chana Dal 1kg", category: "Dal & Masala", price: 105, stock: 19 },
  { id: 14, name: "Moong Chilka Dal 1kg", category: "Dal & Masala", price: 132, stock: 4 },
  { id: 15, name: "Kabuli Chana / Safed Chole 1kg", category: "Dal & Masala", price: 148, stock: 15 },
  { id: 16, name: "Tata Iodized Salt 1kg", category: "Dal & Masala", price: 28, stock: 45 },
  { id: 17, name: "MDH Deggi Mirch 100g", category: "Dal & Masala", price: 92, stock: 18 },
  { id: 18, name: "Everest Haldi Powder 200g", category: "Dal & Masala", price: 68, stock: 21 },
  { id: 19, name: "Catch Garam Masala 100g", category: "Dal & Masala", price: 88, stock: 5 },
  { id: 20, name: "Amul Taaza Milk 1L", category: "Tea & Dairy", price: 74, stock: 30 },
  { id: 21, name: "Saras Gold Milk 500ml", category: "Tea & Dairy", price: 34, stock: 25 },
  { id: 22, name: "Amul Butter 100g", category: "Tea & Dairy", price: 58, stock: 16 },
  { id: 23, name: "Amul Paneer Fresh 200g", category: "Tea & Dairy", price: 92, stock: 4 },
  { id: 24, name: "Tata Tea Premium 500g", category: "Tea & Dairy", price: 260, stock: 14 },
  { id: 25, name: "Red Label Natural Care 250g", category: "Tea & Dairy", price: 145, stock: 11 },
  { id: 26, name: "Nescafe Classic Coffee 50g", category: "Tea & Dairy", price: 165, stock: 3 },
  { id: 27, name: "Maggi Masala Noodles 70g", category: "Snacks", price: 14, stock: 60 },
  { id: 28, name: "Parle-G Gold Biscuits 250g", category: "Snacks", price: 30, stock: 2 },
  { id: 29, name: "Britannia Good Day Cashew 200g", category: "Snacks", price: 45, stock: 26 },
  { id: 30, name: "Haldiram Bhujia Sev 400g", category: "Snacks", price: 110, stock: 17 },
  { id: 31, name: "Kissan Fresh Tomato Ketchup 950g", category: "Snacks", price: 135, stock: 5 },
  { id: 32, name: "Coca-Cola Cold Drink 2.25L", category: "Snacks", price: 95, stock: 14 },
  { id: 33, name: "Surf Excel Easy Wash 1.5kg", category: "Home Care", price: 215, stock: 13 },
  { id: 34, name: "Vim Dishwash Gel 750ml", category: "Home Care", price: 155, stock: 15 },
  { id: 35, name: "Harpic Toilet Cleaner 1L", category: "Home Care", price: 198, stock: 11 },
  { id: 36, name: "Dettol Soap Pack of 4", category: "Home Care", price: 168, stock: 19 },
  { id: 37, name: "Colgate Strong Teeth 200g", category: "Home Care", price: 118, stock: 22 },
  { id: 38, name: "Clinic Plus Shampoo 340ml", category: "Home Care", price: 210, stock: 4 }
];

var initialBills = [
  {
    billNo: "BILL-101",
    customer: "Rohan Jat",
    mobile: "9829145620",
    details: "Aashirvaad Chakki Atta 10kg x1, Fortune Sunlite Oil 1L x2",
    amount: 755,
    status: "Paid",
    mode: "Cash",
    date: "2026-11-18"
  },
  {
    billNo: "BILL-102",
    customer: "Aman Choudhary",
    mobile: "9414289012",
    details: "Amul Pure Cow Ghee 1L x1, Toor / Arhar Dal Unpolished 1kg x2",
    amount: 960,
    status: "Pending",
    mode: "Due",
    date: "2026-11-18"
  },
  {
    billNo: "BILL-103",
    customer: "Harshvardhan Singh",
    mobile: "9784651209",
    details: "Tata Tea Premium 500g x1, Madhur Pure Sugar 5kg x1",
    amount: 495,
    status: "Pending",
    mode: "Due",
    date: "2026-11-19"
  },
  {
    billNo: "BILL-104",
    customer: "Deepak Saini",
    mobile: "9660123489",
    details: "India Gate Basmati Rice 5kg x1, Fortune Kachi Ghani Mustard Oil 1L x2",
    amount: 776,
    status: "Paid",
    mode: "Online UPI",
    date: "2026-11-19"
  },
  {
    billNo: "BILL-105",
    customer: "Manish Sharma",
    mobile: "9828741236",
    details: "Surf Excel Easy Wash 1.5kg x1, Dettol Soap Pack of 4 x1, Colgate Strong Teeth 200g x1",
    amount: 501,
    status: "Pending",
    mode: "Due",
    date: "2026-11-19"
  },
  {
    billNo: "BILL-106",
    customer: "Neha Gupta",
    mobile: "9460512874",
    details: "Amul Butter 100g x2, Amul Paneer Fresh 200g x2, Maggi Masala Noodles 70g x6",
    amount: 384,
    status: "Paid",
    mode: "Cash",
    date: "2026-11-19"
  },
  {
    billNo: "BILL-107",
    customer: "Vikram Rathore",
    mobile: "9928456123",
    details: "Saras Desi Ghee 500ml x2, Kabuli Chana / Safed Chole 1kg x2, MDH Deggi Mirch 100g x1",
    amount: 1008,
    status: "Pending",
    mode: "Due",
    date: "2026-11-19"
  }
];

var storeProducts = JSON.parse(localStorage.getItem("kk_store_products")) || initialStock;
var storeBills = JSON.parse(localStorage.getItem("kk_store_bills")) || initialBills;
var currentCart = [];
var activeBillTotal = 0;

function saveToBrowser() {
  localStorage.setItem("kk_store_products", JSON.stringify(storeProducts));
  localStorage.setItem("kk_store_bills", JSON.stringify(storeBills));
}

function updateSummaryBoxes() {
  var totalWorth = 0;
  var lowCount = 0;

  for (var i = 0; i < storeProducts.length; i++) {
    totalWorth += storeProducts[i].price * storeProducts[i].stock;
    if (storeProducts[i].stock <= 5) {
      lowCount++;
    }
  }

  var paidSum = 0;
  var dueSum = 0;
  for (var j = 0; j < storeBills.length; j++) {
    if (storeBills[j].status === "Paid") {
      paidSum += storeBills[j].amount;
    } else {
      dueSum += storeBills[j].amount;
    }
  }

  document.getElementById("itemCount").innerText = storeProducts.length;
  document.getElementById("stockWorth").innerText = "Rs. " + totalWorth;
  document.getElementById("paidTotal").innerText = "Rs. " + paidSum;
  document.getElementById("dueTotal").innerText = "Rs. " + dueSum;
  document.getElementById("lowStockMsg").innerText = lowCount + " items low on stock";
}

function showInventory() {
  var searchText = document.getElementById("searchBox").value.toLowerCase();
  var tableBody = document.getElementById("stockTableBody");
  var dropdown = document.getElementById("itemDropdown");

  tableBody.innerHTML = "";
  dropdown.innerHTML = '<option value="">Select Item</option>';

  for (var i = 0; i < storeProducts.length; i++) {
    var item = storeProducts[i];

    if (item.stock > 0) {
      dropdown.innerHTML += '<option value="' + item.id + '">' + item.name + ' - Rs.' + item.price + ' (' + item.stock + ' left)</option>';
    }

    if (item.name.toLowerCase().indexOf(searchText) !== -1 || item.category.toLowerCase().indexOf(searchText) !== -1) {
      var lowFlag = item.stock <= 5;
      var statusBadge = lowFlag ? '<span class="tag-low">Low Stock</span>' : '<span class="tag-ok">In Stock</span>';

      tableBody.innerHTML +=
        "<tr>" +
          "<td><strong>" + item.name + "</strong></td>" +
          "<td>" + item.category + "</td>" +
          "<td>Rs. " + item.price + "</td>" +
          "<td><strong>" + item.stock + "</strong></td>" +
          "<td>" + statusBadge + "</td>" +
          "<td>" +
            '<button class="btn secondary-btn small-btn" onclick="addMoreStock(' + item.id + ', 5)">+5</button> ' +
            '<button class="btn secondary-btn small-btn" onclick="addMoreStock(' + item.id + ', 10)">+10</button> ' +
            '<button class="btn orange-btn small-btn" onclick="deleteProduct(' + item.id + ')">Del</button>' +
          "</td>" +
        "</tr>";
    }
  }
}

function saveNewProduct(event) {
  event.preventDefault();
  var name = document.getElementById("newProdName").value.trim();
  var category = document.getElementById("newProdCat").value;
  var price = parseInt(document.getElementById("newProdPrice").value);
  var qty = parseInt(document.getElementById("newProdQty").value);

  if (!name || price <= 0 || qty <= 0) return;

  var found = false;
  for (var i = 0; i < storeProducts.length; i++) {
    if (storeProducts[i].name.toLowerCase() === name.toLowerCase()) {
      storeProducts[i].stock += qty;
      storeProducts[i].price = price;
      found = true;
      break;
    }
  }

  if (!found) {
    storeProducts.unshift({
      id: Date.now(),
      name: name,
      category: category,
      price: price,
      stock: qty
    });
  }

  event.target.reset();
  saveToBrowser();
  reloadPageData();
  alert("Stock updated successfully!");
}

function addMoreStock(id, extraQty) {
  for (var i = 0; i < storeProducts.length; i++) {
    if (storeProducts[i].id === id) {
      storeProducts[i].stock += extraQty;
      break;
    }
  }
  saveToBrowser();
  reloadPageData();
}

function deleteProduct(id) {
  var confirmDel = confirm("Remove this item from store inventory?");
  if (!confirmDel) return;

  var updatedList = [];
  for (var i = 0; i < storeProducts.length; i++) {
    if (storeProducts[i].id !== id) {
      updatedList.push(storeProducts[i]);
    }
  }
  storeProducts = updatedList;
  saveToBrowser();
  reloadPageData();
}

function addItemToBill() {
  var selectedId = parseInt(document.getElementById("itemDropdown").value);
  var qty = parseInt(document.getElementById("itemQty").value);

  if (!selectedId || qty <= 0) {
    alert("Select a valid item and quantity first.");
    return;
  }

  var product = null;
  for (var i = 0; i < storeProducts.length; i++) {
    if (storeProducts[i].id === selectedId) {
      product = storeProducts[i];
      break;
    }
  }

  var alreadyInCart = 0;
  for (var j = 0; j < currentCart.length; j++) {
    if (currentCart[j].id === selectedId) {
      alreadyInCart = currentCart[j].qty;
    }
  }

  if (qty + alreadyInCart > product.stock) {
    alert("Only " + product.stock + " units available in stock!");
    return;
  }

  var updated = false;
  for (var k = 0; k < currentCart.length; k++) {
    if (currentCart[k].id === selectedId) {
      currentCart[k].qty += qty;
      updated = true;
      break;
    }
  }

  if (!updated) {
    currentCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: qty
    });
  }

  document.getElementById("itemQty").value = 1;
  showBillCart();
}

function removeCartItem(id) {
  var temp = [];
  for (var i = 0; i < currentCart.length; i++) {
    if (currentCart[i].id !== id) {
      temp.push(currentCart[i]);
    }
  }
  currentCart = temp;
  showBillCart();
}

function showBillCart() {
  var cartBody = document.getElementById("billCartBody");
  if (currentCart.length === 0) {
    cartBody.innerHTML = '<tr><td colspan="5" class="center-msg">No items added yet</td></tr>';
    document.getElementById("billGrandTotal").innerText = "Rs. 0";
    return;
  }

  var grandTotal = 0;
  cartBody.innerHTML = "";

  for (var i = 0; i < currentCart.length; i++) {
    var c = currentCart[i];
    var rowTotal = c.price * c.qty;
    grandTotal += rowTotal;

    cartBody.innerHTML +=
      "<tr>" +
        "<td>" + c.name + "</td>" +
        "<td>Rs. " + c.price + "</td>" +
        "<td>" + c.qty + "</td>" +
        "<td><strong>Rs. " + rowTotal + "</strong></td>" +
        '<td><button class="btn secondary-btn small-btn" onclick="removeCartItem(' + c.id + ')">X</button></td>' +
      "</tr>";
  }

  document.getElementById("billGrandTotal").innerText = "Rs. " + grandTotal;
}

// Switch to Next Page (Full Customer Invoice + Payment Modes)
function openBillPage() {
  if (currentCart.length === 0) {
    alert("Please add at least one item to generate bill!");
    return;
  }

  var custName = document.getElementById("custName").value.trim() || "Walk-in Customer";
  var custMobile = document.getElementById("custMobile").value.trim() || "-";
  var nextBillNo = "BILL-" + (101 + storeBills.length);
  var todayDate = new Date().toISOString().slice(0, 10);

  document.getElementById("invBillNo").innerText = nextBillNo;
  document.getElementById("invCustName").innerText = custName;
  document.getElementById("invCustMobile").innerText = custMobile;
  document.getElementById("invDate").innerText = todayDate;

  var invBody = document.getElementById("invItemsBody");
  invBody.innerHTML = "";
  activeBillTotal = 0;

  for (var i = 0; i < currentCart.length; i++) {
    var item = currentCart[i];
    var subTotal = item.price * item.qty;
    activeBillTotal += subTotal;

    invBody.innerHTML +=
      "<tr>" +
        "<td>" + (i + 1) + "</td>" +
        "<td>" + item.name + "</td>" +
        "<td>Rs. " + item.price + "</td>" +
        "<td>" + item.qty + "</td>" +
        "<td><strong>Rs. " + subTotal + "</strong></td>" +
      "</tr>";
  }

  document.getElementById("invFinalAmount").innerText = "Rs. " + activeBillTotal;
  document.getElementById("upiQrSection").classList.add("hidden");

  // Hide dashboard, show invoice page
  document.getElementById("dashboardView").classList.add("hidden");
  document.getElementById("invoicePageView").classList.remove("hidden");
}

function backToDashboard() {
  document.getElementById("invoicePageView").classList.add("hidden");
  document.getElementById("dashboardView").classList.remove("hidden");
}

// Generate Dynamic UPI QR Code with Exact Bill Amount
function showUpiQr() {
  var upiLink = "upi://pay?pa=" + encodeURIComponent(MY_UPI_ID) +
                "&pn=" + encodeURIComponent(SHOP_NAME) +
                "&am=" + activeBillTotal +
                "&cu=INR";

  var qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(upiLink);

  document.getElementById("qrPayAmount").innerText = "Rs. " + activeBillTotal;
  document.getElementById("displayUpiId").innerText = MY_UPI_ID;
  document.getElementById("upiQrImg").src = qrApiUrl;
  document.getElementById("upiQrSection").classList.remove("hidden");
}

// Finalize Bill & Return to Fresh Dashboard
function completePayment(paymentMode) {
  var custName = document.getElementById("custName").value.trim();
  var custMobile = document.getElementById("custMobile").value.trim() || "-";

  if (paymentMode === "Pending" && custName === "") {
    alert("Customer Name is required for Udhaar (Due)! Click 'Edit Cart' and enter Customer Name.");
    return;
  }

  if (custName === "") custName = "Walk-in Customer";

  var summaryList = [];
  for (var i = 0; i < currentCart.length; i++) {
    var cItem = currentCart[i];
    summaryList.push(cItem.name + " x" + cItem.qty);

    for (var j = 0; j < storeProducts.length; j++) {
      if (storeProducts[j].id === cItem.id) {
        storeProducts[j].stock -= cItem.qty;
        break;
      }
    }
  }

  var billStatus = (paymentMode === "Pending") ? "Pending" : "Paid";
  var nextNum = 101 + storeBills.length;

  storeBills.unshift({
    billNo: "BILL-" + nextNum,
    customer: custName,
    mobile: custMobile,
    details: summaryList.join(", "),
    amount: activeBillTotal,
    status: billStatus,
    mode: paymentMode,
    date: new Date().toISOString().slice(0, 10)
  });

  // Reset cart & inputs for next customer
  currentCart = [];
  activeBillTotal = 0;
  document.getElementById("custName").value = "";
  document.getElementById("custMobile").value = "";

  saveToBrowser();
  reloadPageData();
  backToDashboard();

  if (billStatus === "Paid") {
    alert("Payment received via " + paymentMode + "! Bill saved.");
  } else {
    alert("Bill added to " + custName + "'s Udhaar register.");
  }
}

function showUdhaarList() {
  var tbody = document.getElementById("udhaarListBody");
  tbody.innerHTML = "";
  var count = 0;

  for (var i = 0; i < storeBills.length; i++) {
    var b = storeBills[i];
    if (b.status === "Pending") {
      count++;
      tbody.innerHTML +=
        "<tr>" +
          "<td><strong>" + b.customer + "</strong></td>" +
          "<td>" + b.mobile + "</td>" +
          "<td>" + b.details + "</td>" +
          '<td class="red-txt"><strong>Rs. ' + b.amount + "</strong></td>" +
          '<td><button class="btn green-btn small-btn" onclick="clearDue(\'' + b.billNo + '\')">Mark Paid</button></td>' +
        "</tr>";
    }
  }

  if (count === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="center-msg">No pending dues right now</td></tr>';
  }
}

function clearDue(billNo) {
  for (var i = 0; i < storeBills.length; i++) {
    if (storeBills[i].billNo === billNo) {
      storeBills[i].status = "Paid";
      storeBills[i].mode = "Cash Settled";
      break;
    }
  }
  saveToBrowser();
  reloadPageData();
  alert("Customer due cleared!");
}

function downloadStockCSV() {
  var csv = "ID,Item Name,Category,Price,Stock,Total Value\n";
  for (var i = 0; i < storeProducts.length; i++) {
    var p = storeProducts[i];
    csv += p.id + ',"' + p.name + '","' + p.category + '",' + p.price + "," + p.stock + "," + (p.price * p.stock) + "\n";
  }
  triggerFileDownload("KK_Kirana_Stock.csv", csv);
}

function downloadSalesCSV() {
  var csv = "Bill No,Date,Customer,Mobile,Items,Amount,Status,Payment Mode\n";
  for (var i = 0; i < storeBills.length; i++) {
    var b = storeBills[i];
    csv += b.billNo + "," + b.date + ',"' + b.customer + '",' + b.mobile + ',"' + b.details + '",' + b.amount + "," + b.status + "," + (b.mode || "-") + "\n";
  }
  triggerFileDownload("KK_Kirana_Sales_Udhaar.csv", csv);
}

function triggerFileDownload(fileName, content) {
  var link = document.createElement("a");
  link.href = "data:text/csv;charset=utf-8," + encodeURI(content);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function reloadPageData() {
  updateSummaryBoxes();
  showInventory();
  showBillCart();
  showUdhaarList();
}

reloadPageData();