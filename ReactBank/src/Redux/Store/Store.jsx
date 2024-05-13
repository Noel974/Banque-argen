// Import du magasin Redux
import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Reducer/UserReducer'; 

// Configuration du magasin Redux
export const store = configureStore({
	reducer: {
		user: userSlice,
	},
});
