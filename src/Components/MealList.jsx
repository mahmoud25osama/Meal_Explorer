import { useContext } from "react";
import MealCard from "./MealCard";
import { MealContext } from "../Contexts/MealContext";

function MealList() {
  const { mealData } = useContext(MealContext);
  return (
    <div className="meal-list" id="meal-list">
      {mealData && mealData.meals ? (
        mealData.meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <p className="col-span-full text-center text-gray-500 text-lg">
          Loading meals...
        </p>
      )}
    </div>
  );
}

export default MealList;
