const fs = require('fs');
const path = require('path');

try {
    const filePath = path.join(__dirname, '..', 'index.js');
    const content = fs.readFileSync(filePath, 'utf8');

    // Look for Unsplash URLs
    const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s"'`)]+/g;
    const urls = content.match(urlRegex) || [];
    const uniqueUrls = [...new Set(urls)];
    
    console.log("Found URLs:");
    uniqueUrls.forEach(url => console.log(url));

    // Look for "Exclusive Listings" context
    const index = content.indexOf('Exclusive Listings');
    if (index !== -1) {
        const start = Math.max(0, index - 500);
        const end = Math.min(content.length, index + 3000);
        console.log("\n--- Context around 'Exclusive Listings' ---");
        console.log(content.substring(start, end));
    }

} catch (e) {
    console.error("Error:", e.message);
}
