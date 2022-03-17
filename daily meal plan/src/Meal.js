import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5e950c9cc4424c6dabb32f76741506a1&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1 className="meal-title">{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>
          <span>Preparation time:</span> {meal.readyInMinutes} minutes
        </li>
        <li>
          <span>Number of servings:</span> {meal.servings}
        </li>
      </ul>

      <a className="meal-btn" href={meal.sourceUrl}>
        Go to Recipe
      </a>
    </article>
  );
}
