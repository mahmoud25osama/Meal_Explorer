import { useContext } from "react";
import omeletteLogo from "../assets/omelette.png";
import { MealContext } from "../Contexts/MealContext";

export default function Hero() {
  const { getMealCat } = useContext(MealContext);

  function getMeal(e) {
    getMealCat(e.target.value);
  }

  return (
    <div className="hero">
      <div className="title">
        <img src={omeletteLogo} alt="omeletteLogo" />
        Meal Explorer
      </div>
      <p>Discover delicious recipes from around the world</p>
      <select onChange={getMeal} id="meal-category">
        <option value="Beef">Select a category</option>
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Dessert">Dessert</option>
        <option value="Lamb">Lamb</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Pasta">Pasta</option>
        <option value="Pork">Pork</option>
        <option value="Seafood">Seafood</option>
        <option value="Side">Side</option>
        <option value="Starter">Starter</option>
        <option value="vegan">vegan</option>
        <option value="vegetarian">vegetarian</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Goat">Goat</option>
      </select>
    </div>
  );
}
