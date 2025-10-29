import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from '../../services/store';
import {
  selectIsAuthenticated,
  selectOrderRequest,
  selectOrderModalData,
  selectCombinerItems,
  selectCombinerPrice
} from '../../services/selectors';
import {
  createOrder,
  clearOrderModal
} from '../../services/slices/ordersSlice';
import { clearCombiner } from '../../services/slices/combinersSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const orderRequest = useSelector(selectOrderRequest);
  const orderModalData = useSelector(selectOrderModalData);
  const constructorItems = useSelector(selectCombinerItems);
  const price = useSelector(selectCombinerPrice);

  const onOrderClick = async () => {
    if (!constructorItems.bun || orderRequest) return;

    // ПРоверка авторизации
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Собираем ижентефикаторы для заказа
    const ingredients = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];

    try {
      await dispatch(createOrder(ingredients));
      dispatch(clearCombiner());
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
    }
  };

  const closeOrderModal = () => {
    dispatch(clearOrderModal());
  };

  // Очищаем конструктор
  useEffect(() => {
    if (orderModalData) {
      dispatch(clearCombiner());
    }
  }, [dispatch, orderModalData]);

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={null}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
