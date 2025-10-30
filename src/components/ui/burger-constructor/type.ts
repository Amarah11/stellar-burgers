import { TConstructorIngredient, TOrder } from '@utils-types';

export type TConstructorItems = {
  bun: TConstructorIngredient | null; // булочка может отсутствовать
  ingredients: TConstructorIngredient[]; // массив ингредиентов
};

export type BurgerConstructorUIProps = {
  constructorItems: TConstructorItems;
  orderRequest: boolean;
  price: number;
  orderModalData: TOrder | null;
  onOrderClick: () => void;
  closeOrderModal: () => void;
};
