"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    if (ingredient === "") return;
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white p-2">Meal Ideas</h2>
      {meals !== null && <p>Meal ideas with {ingredient}:</p>}
      {meals === null && <p>No meal ideas found for {ingredient}.</p>}
      <ul>
        {meals?.map((item) => (
          <li key={item.id}>
            <p>{item.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
