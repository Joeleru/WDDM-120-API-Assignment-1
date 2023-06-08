// const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f9ff7d7b3amsh6e2d4b7ba3548f8p127674jsn8d3f5d684262',
//         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         displayData(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function displayData(data) {
//     const resultDiv = document.getElementById('result');

//     if (data.hints.length > 0) {
//         const food = data.hints[0].food;
//         const foodName = food.label;
//         const foodCategory = food.category;
//         const nutrients = food.nutrients;

//         let content = `
//             <h2>${foodName}</h2>
//             <p>Category: ${foodCategory}</p>
//             <ul>
//                 <li>Energy: ${nutrients.ENERC_KCAL} kcal</li>
//                 <li>Protein: ${nutrients.PROCNT} g</li>
//                 <li>Fat: ${nutrients.FAT} g</li>
//                 <li>Carbohydrates: ${nutrients.CHOCDF} g</li>
//                 <li>Fiber: ${nutrients.FIBTG} g</li>
//             </ul>
//         `;

//         if (foodCategory === 'Branded foods') {
//             const brand = food.brand;
//             content += `<p>Brand: ${brand}</p>`;
//         }

//         resultDiv.innerHTML = content;
//     } else {
//         resultDiv.innerHTML = 'No results found.';
//     }
// }

// window.onload = fetchData;


const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f9ff7d7b3amsh6e2d4b7ba3548f8p127674jsn8d3f5d684262',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayData(result);
    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    const resultDiv = document.getElementById('result');
    
    if (data.hints.length > 0) {
        let content = '';

        data.hints.forEach((hint, index) => {
            const food = hint.food;
            const foodName = food.label;
            const imageSrc = food.image;
            const isGeneric = food.categoryLabel === 'food' ? 'Generic' : 'Branded';
            const nutrients = food.nutrients;

            content += `
                <div class="food-item">
                    <h2>${foodName}</h2>
                    <p>${isGeneric}</p>
                    <img src="${imageSrc}" alt="${foodName}">
                    <ul>
                        <li>Energy: ${nutrients.ENERC_KCAL} kcal</li>
                        <li>Protein: ${nutrients.PROCNT} g</li>
                        <li>Fat: ${nutrients.FAT} g</li>
                        <li>Carbohydrates: ${nutrients.CHOCDF} g</li>
                        <li>Fiber: ${nutrients.FIBTG} g</li>
                    </ul>
                </div>
            `;
        });

        resultDiv.innerHTML = content;
    } else {
        resultDiv.innerHTML = 'No results found.';
    }
}

window.onload = fetchData;

