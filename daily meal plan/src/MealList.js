import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <div>
      <div className="nutrients">
        <h1 className="nutrients-title">Nutrition Facts </h1>
        <ul className="nutrients-list">
          <li>
            <span> Calories:</span> {nutrients.calories.toFixed(0)}
          </li>
          <li>
            <span>Carbohydrates:</span> {nutrients.carbohydrates.toFixed(0)}
          </li>
          <li>
            <span>Fat:</span> {nutrients.fat.toFixed(0)}
          </li>
          <li>
            <span>Protein:</span> {nutrients.protein.toFixed(0)}
          </li>
        </ul>
      </div>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </div>
  );
}
