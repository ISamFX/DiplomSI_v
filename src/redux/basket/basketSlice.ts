// Импортируем функции createAsyncThunk и createSlice из библиотеки Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Basket_URL } from "../../constants/constdev";
// Импортируем библиотеку axios для выполнения HTTP-запросов
import axios from "axios";

export interface ISneakers {
id: number;
vendorСode: string; 
inStock: number;
title: string;
description:string; 
imgUrl: string;
stars: number;
sizes: string[];
price: number;
oldPrice: number;
gender: string;
color: string;
compound: string;
country: string;
};

export type BasketItem = {
  uuid: string;
  product: ISneakers;
};

export type BasketState = {
  products: BasketItem[];
};


// Создаем асинхронный экшен для получения корзины
export const fetchBasket = createAsyncThunk<ISneakers[]>(
  
  "basket/fetchBasket", // Название экшена
  async (): Promise<ISneakers[]> => { // Асинхронная функция, возвращающая массив кросс
    try {
      // Выполняем GET-запрос к API для получения данных корзины
      const { data } = await axios.get<ISneakers[]>(`${Basket_URL}`);

      return data; // Возвращаем полученные данные
    } catch (error) {
      console.log("Failed to fetch:"); // Логируем ошибку, если запрос не удался
      return []; // Возвращаем пустой массив в случае ошибки
    }
  }
);

// Создаем асинхронный экшен для добавления кроссовка в корзину POST-запрос
export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket", // Название экшена
  async (item) => { // Принимаем объект кроссовка для добавления
    try {
      // Выполняем POST-запрос к API для добавления кроссовка в корзину
      const { data } = await axios.post(`${Basket_URL}`, item);

      return data; // Возвращаем добавленный объект кроссовка
    } catch (error) {
      throw new Error("Failed to post basket"); // Генерируем ошибку при неудаче
    }
  }
);

// Создаем асинхронный экшен для удаления кроссовка из корзины
export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket", // Название экшена
  async (id) => { // Принимаем идентификатор кроссовка для удаления
    try {
      // Выполняем DELETE-запрос к API для удаления кроссовка из корзины
      await axios.delete(`${Basket_URL}/${id}`);

      return id; // Возвращаем идентификатор удаленного кроссовка
    } catch (error) {
      throw new Error("Failed to delete basket"); // Генерируем ошибку при неудаче
    }
  }
);

// Определяем интерфейс состояния корзины
interface IState {
  data: ISneakers[]; // Массив кроссовок в состоянии корзины
}

// Начальное состояние корзины
const initialState: IState = {
  data: [], // Изначально корзина пуста
};

// Создаем срез состояния для корзины с помощью createSlice
export const basketSlice = createSlice({
  name: "basket", // Имя среза состояния
  initialState,   // Начальное состояние
  reducers: {},   // Редьюсеры не используются, так как все действия асинхронные
  extraReducers: (builder) => { // Обрабатываем дополнительные редьюсеры для асинхронных действий
    // Обработка успешного выполнения fetchBasket
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload; // Обновляем состояние данными из payload
    });

    // Обработка успешного выполнения postBasket
    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); // Добавляем новый элемент в массив данных
    });

    // Обработка успешного выполнения delBasket
    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload); // Удаляем элемент по id из массива данных
    });
  },
});

// Экспортируем редьюсер среза состояния по умолчанию
export default basketSlice.reducer;

export const basketSelector = (state: { basket: BasketState }) => state.basket;








