import { Location } from 'react-router-dom';
import { TIngredient } from '@utils-types';

export type TBurgerIngredientUIProps = {
  ingredient: TIngredient;
  count: number | undefined;
  locationState: { background: Location };
  handleAdd: () => void;
};
