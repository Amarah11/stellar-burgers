import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCombinerItems = (state: RootState) => state.combiner;

export const selectConstructorBun = (state: RootState) => state.combiner.bun;

export const selectIngredientCount = (ingredientId: string) =>
  createSelector([selectCombinerItems], (combinerItems) => {
    let count = 0;
    if (combinerItems.bun?._id === ingredientId) {
      count += 2;
    }
    if (combinerItems.ingredients) {
      combinerItems.ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          count++;
        }
      });
    }
    return count;
  });

export const selectCombinerPrice = createSelector(
  [selectCombinerItems],
  (combinerItems) => {
    const bunPrice = combinerItems.bun ? combinerItems.bun.price * 2 : 0;
    const ingredientsPrice = combinerItems.ingredients
      ? combinerItems.ingredients.reduce(
          (sum, ingredient) => sum + ingredient.price,
          0
        )
      : 0;
    return bunPrice + ingredientsPrice;
  }
);
