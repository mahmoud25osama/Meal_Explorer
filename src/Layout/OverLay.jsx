import { useContext } from "react";
import { MealContext } from "../Contexts/MealContext";

function OverLay() {
  const { mealDetail, isOverlayOpen, closeOverlay } = useContext(MealContext);

  // Don't render if no meal detail
  if (!mealDetail) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetail[`strIngredient${i}`];
    const measure = mealDetail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className={`overlay ${isOverlayOpen ? "toggle" : ""}`}>
      <div
        className={`item-description ${
          isOverlayOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="max-h-[90vh] p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Close button */}
          <button onClick={closeOverlay} className="close-btn">
            ×
          </button>
          <div className="scroll">
            <div className="head">
              <h2 className="meal-title">{mealDetail.strMeal}</h2>
            </div>

            <div className="info">
              <span>Category: {mealDetail.strCategory}</span>
              <span>●</span>
              <span>Cuisine: {mealDetail.strArea}</span>
            </div>

            <div className="img">
              <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} />
            </div>

            <div className="ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="instructions">
              <h3>Instructions:</h3>
              <p>{mealDetail.strInstructions}</p>
            </div>

            {mealDetail.strYoutube && (
              <a
                href={mealDetail.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtubeLink"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverLay;
