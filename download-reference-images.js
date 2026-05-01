// Download script to get exact images from reference site
const fs = require('fs');
const https = require('https');
const path = require('path');

// Reference site image URLs
const imageUrls = [
  {
    name: 'west-mambalam-reference.jpg',
    url: 'https://www.scchomes.in/uploads/property/2-3bhk-apartments-west-mambalam-old-mambalam-road.jpg'
  },
  {
    name: 'hasthinapuram-reference.jpg', 
    url: 'https://www.scchomes.in/uploads/property/3-4bhk-apartments-hasthinapuram-gayathri-nagar.jpg'
  },
  {
    name: 'chrompet-reference.jpg',
    url: 'https://www.scchomes.in/uploads/property/2bhk-apartments-chrompet-near-railway-bus.jpg'
  },
  {
    name: 'injambakkam-reference.jpg',
    url: 'https://www.scchomes.in/uploads/property/4-bhk-house-injambakkam-near-iskcon-temple-g2-villa.jpg'
  },
  {
    name: 'medavakkam-reference.jpg',
    url: 'https://www.scchomes.in/uploads/property/2-3-bhk-apartments-medavakkam-near-thiruvalluvar-nagar-park.jpg'
  },
  {
    name: 'keelkattalai-reference.jpg',
    url: 'https://www.scchomes.in/uploads/property/Villa.jpg'
  }
];

// Download function
async function downloadImages() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  
  for (const image of imageUrls) {
    try {
      console.log(`Downloading ${image.name}...`);
      const response = await https.get(image.url);
      const filePath = path.join(assetsDir, image.name);
      
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      
      return new Promise((resolve, reject) => {
        fileStream.on('finish', () => {
          console.log(`Downloaded ${image.name}`);
          resolve();
        });
        fileStream.on('error', reject);
      });
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error.message);
    }
  }
}

// Run downloads
downloadImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch(error => {
  console.error('Download failed:', error);
});

console.log('Run this script with: node download-reference-images.js');
