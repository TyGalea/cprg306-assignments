"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

const fetchMealIngredient = async (meal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealIngredients, setMealIngredients] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  const handleMealSelect = async (meal) => {
    setMealIngredients([]);
    setSelectedMeal(meal);
    const ingredients = await fetchMealIngredient(meal);
    for (let i = 1; i < 21; i++) {
      if (ingredients[0][`strIngredient${i}`] === "") {
        break;
      }
      setMealIngredients((mealIngredients) => [
        ...mealIngredients,
        ingredients[0][`strIngredient${i}`] +
          " (" +
          ingredients[0][`strMeasure${i}`] +
          ")",
      ]);
    }
  };

  useEffect(() => {
    if (ingredient === "") return;
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white p-2">Meal Ideas</h2>
      {meals !== null && ingredient === "" && (
        <p>Select an item to see meal ideas</p>
      )}
      {meals !== null && ingredient !== "" && (
        <p>Meal ideas with {ingredient}:</p>
      )}
      {meals === null && <p>No meal ideas found for {ingredient}</p>}
      <ul>
        {meals?.map((item) => (
          <li
            key={item.id}
            onClick={() => handleMealSelect(item.strMeal)}
            className="p-2 m-1 bg-slate-800 hover:bg-orange-800 cursor-pointer"
          >
            <p>{item.strMeal}</p>
            {selectedMeal.localeCompare(item.strMeal) === 0 && (
              <p className="pl-5 text-sm text-gray-400">Ingredients needed:</p>
            )}
            <ul>
              {selectedMeal.localeCompare(item.strMeal) === 0 &&
                mealIngredients.map((item) => (
                  <li className="pl-10 text-sm text-gray-400">{item}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
