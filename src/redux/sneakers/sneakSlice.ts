
// Импортируем функции из библиотеки Redux Toolkit
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// Импортируем библиотеку axios для выполнения HTTP-запросов
import axios from "axios";
import { SNEAKERS_URL } from "../../constants/constdev";

export type SneakMember = {
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

export type FilterData = {
  minPrice: number;
  maxPrice: number;
  gender: string;
  sizes: string[];
};

type SneakState = {
  allData: SneakMember[];
  data: SneakMember[];
  loading: "pending" | "fulfilled" | "rejected" | "idle";
  totalPages: number;
  currentPage: number;
};

const initialSneakState: SneakState = {
  allData: [],
  data: [],
  loading: "idle",
  totalPages: 0,
  currentPage: 1,
};


// Создаем асинхронный экшен для получения кроссовок с учетом параметров фильтрации

  export const fetchSneak = createAsyncThunk<SneakMember[], FilterData>(
    // Название экшена
    "sneak/fetchSneak", 
    async (params, { rejectWithValue }) => {
      try {
       
        // Формируем строку запроса для размеров, если они указаны
        const sizesQuery = params.sizes
        .map((value) => `sizes[]=${value}`) 
        // Преобразуем каждый размер в строку формата sizes[]=размер
        // Объединяем размеры в одну строку через '&'
        .join("&");
        console.log(sizesQuery);
        // Выполняем GET-запрос к API с параметрами фильтрации 
        const { data } = await axios.get<SneakMember[]>(
          `${SNEAKERS_URL}?price[from]=${params.minPrice}&price[to]=${params.maxPrice}
        ${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""
        }`);

        console.log( `${SNEAKERS_URL}?price[from]=${params.minPrice}&price[to]=${params.maxPrice}
        ${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""
        }`);
        console.log(data);
        localStorage.setItem("sneak", JSON.stringify(data)); 

        return data;
      } catch (error) {
        console.log( `${SNEAKERS_URL}?price[from]=${params.minPrice}&price[to]=${params.maxPrice}
        ${params.gender ? `&gender=${params.gender}` : ""}`);
        console.log(`Failed to fetch:   error sneak`);
        return rejectWithValue("Failed to fetch sneak");
      }    
    });

  

  

export const sneakSlice = createSlice({
  name: "sneak",
  initialState: initialSneakState,
  reducers: {
    loadMore(state) {
      const start = state.currentPage * 6;
      const end = start + 6;
      state.data = state.allData.slice(0, end);
      state.currentPage += 1;

    },
    resetData(state) {
      state.allData = [];
      state.data = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.loading = "idle";  
    },
  },
  extraReducers: (builder) => {
    // Обрабатываем дополнительные редьюсеры для асинхронных действий
    builder.addCase(fetchSneak.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSneak.fulfilled, (state, action: PayloadAction<SneakMember[]>) => {
      state.loading = "fulfilled";
      state.allData = action.payload;
      state.data = action.payload.slice(0, 6);
      state.totalPages = Math.ceil(action.payload.length / 6);
      // Обновляем состояние данными из payload после успешного выполнения экшена
      
    });
    builder.addCase(fetchSneak.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { loadMore, resetData } = sneakSlice.actions;

export default sneakSlice.reducer;
