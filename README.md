# KK Smart Kirana Store - Retail & Stock Management System

A browser-based retail billing, inventory, and customer credit (udhaar) management system built for local kirana stores.

I originally started building the core logic for this project in C using CSV file handling, and then created this web interface so shopkeepers can easily manage stock, generate customer invoices with dynamic UPI QR codes, and export CSV records directly from their browser.

## Live Website
https://keshavkhandal43-umyk.github.io/KK-Smart-Kirana-Store/

## Features
- **Live Store Dashboard:** Tracks total items, total stock worth, paid sales, pending udhaar, and low-stock count (stock <= 5).
- **Customer Invoice & Payment Page:** Generates an itemized bill with options for **Cash Paid**, **Online (UPI)** with a dynamic QR code, or **Udhaar (Due)**.
- **Udhaar Register:** Keeps track of pending customer dues with a one-click **Mark Paid** button.
- **Inventory & Restock:** Search products by name or category, add new items, restock (+5 / +10), or delete items.
- **CSV Export:** Download current inventory (`KK_Kirana_Stock.csv`) and sales/udhaar records (`KK_Kirana_Sales_Udhaar.csv`) anytime for Excel.
