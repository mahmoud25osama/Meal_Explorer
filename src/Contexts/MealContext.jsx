import { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

export function MealProvider({ children }) {
  const [mealData, setMealData] = useState(null);
  const [mealDetail, setMealDetail] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  async function getMealCat(optionValue) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${optionValue}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();
      setMealData(response);
      console.log("res", response);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }

  async function getMealDetails(mealId) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      console.log("response Meal Detail", response.meals);
      setMealDetail(response.meals[0]);
      console.log("Before", isOverlayOpen);
      setIsOverlayOpen(true);
      console.log("After", isOverlayOpen);
    } catch (e) {
      console.log("Fetch Detail Error: ", e.message);
    }
  }

  function closeOverlay() {
    setIsOverlayOpen(false);
    setMealDetail(null);
  }

  useEffect(() => {
    getMealCat("Beef");
  }, []);

  return (
    <MealContext.Provider
      value={{
        mealData,
        getMealCat,
        isOverlayOpen,
        closeOverlay,
        mealDetail,
        getMealDetails,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
