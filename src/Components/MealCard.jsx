import { useContext } from "react";
import { MealContext } from "../Contexts/MealContext";

function MealCard({ meal }) {
  const { getMealDetails } = useContext(MealContext);
  function showOverlay(e) {
    console.log("id", e.target);
    console.log("meal id", meal.idMeal);
    getMealDetails(meal.idMeal);
  }

  return (
    <div onClick={showOverlay} className="meal-item" id={meal.idMeal}>
      <div className="overflow-hidden">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-name">
        {meal.strMeal.split(" ").slice(0, 3).join(" ")}
      </div>
    </div>
  );
}

export default MealCard;
