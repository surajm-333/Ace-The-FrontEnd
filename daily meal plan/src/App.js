import React, { useState } from "react";
import MealList from "./MealList";
import NavBar from "./Navbar";
function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5e950c9cc4424c6dabb32f76741506a1&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <div className="container">
          <NavBar />
          <div className="right-sidebar"></div>
          <div className="content">
            <div className="left-content">
              <div className="left">
                <h2>Food</h2>
                <h3>
                  Discover Healthy
                  <br></br>& Delicious Food
                </h3>
              </div>
              <div className="controls">
                <input
                  type="number"
                  placeholder="Calories (e.g. 2000)"
                  onChange={handleChange}
                />
                <button onClick={getMealData}>Get Daily Meal Plan</button>
              </div>
            </div>
            <div className="right">
              <img src={require("./img/veg.png")} className="veg" alt="veg" />
              <img
                src={require("./img/fd.png")}
                className="plate"
                alt="plate"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="meal-list-container">
        {mealData && <MealList mealData={mealData} />}
      </section>
    </div>
  );
}

export default App;
