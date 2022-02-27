const searchFood =() =>{
  const searchFild = document.getElementById("search-fild");
  const searchText = searchFild.value;
  searchFild.value = '';
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
  `;
  fetch(url)
  .then(response => response.json())
  .then(data =>DisplaySearchResult(data.meals))
}


const DisplaySearchResult = meals =>{
  const searchResult = document.getElementById("search-result");
for(const meal of meals){
  const div = document.createElement("div");
    div.classList.add("col")
    div.innerHTML =`
    <div onclick="loadDittils(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,50)}</p>
            </div>
          </div>
    `;

    searchResult.appendChild(div);
} 
}


const loadDittils =mealID =>{
  const url=`
  https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayMealDetails(data.meals[0]))
}


const displayMealDetails = meal =>{
  console.log(meal)
 const mealDetails = document.getElementById("meal-dettils");
 const div = document.createElement("div");
 div.classList.add("card")
 div.innerHTML =`
 <img class="w-25" src="${meal.strMealThumb}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${meal.strArea}</h5>
   <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
 `;
 mealDetails.appendChild(div);

}



