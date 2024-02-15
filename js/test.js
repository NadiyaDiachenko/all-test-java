// let one = `Hello`;
//  alert(one);
// console.log(one);

// document.getElementById(`messege`).innerHTML = one;

// const planets = ["earth", "Mars", "venus"];
// for (const planet of planets) {
// console.log(planet)
// }

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     }
//   ];
  

// for (const book of books) {
//     console.log(book.author)
// }


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     console.log(hexColors);
//     // rgbColors.push(color.rgb);
//     // console.log(rgbColors)
//     // console.log(color.rgb)
//     // console.log(color.hex)
//   }


// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let priseProduct = null;
//     for (const product of products){
//         if (product.name === productName) {
//        priseProduct = product.price
//     }
   
        
//     }
//     return priseProduct;
//   }
 

 
//   getProductPrice("Grip")


// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const newMas = [];
    
//     for (const product of products) {
//         if(product[propName]) {
//             newMas.push(product[propName]);
            
//         }
        
//     }
//     console.log(newMas)
//     return newMas;
    
//   }
//   getAllPropValues("name");
//  getAllPropValues("price");

function calculateTotalPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
  const sum = [];
  for (const product of products) {
    if(product[productName]){
        sum = price * quantity;
    }
    else{
        return `Product ${productName} not found!`
    }
  }
  }
  calculateTotalPrice("Blaster")
  calculateTotalPrice("Radar")