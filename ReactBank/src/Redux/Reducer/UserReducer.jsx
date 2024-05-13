import { createSlice } from "@reduxjs/toolkit";

// État initial de l'utilisateur
const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

// Création d'une tranche (slice) pour l'utilisateur avec les réducteurs
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Réducteur pour l'authentification de l'utilisateur
        authenticateUser(state, action) {
            const { token, user } = action.payload;
            state.isAuthenticated = true;
            state.token = token;
            state.user = user;
        },
        // Réducteur pour la déconnexion de l'utilisateur
        deauthenticateUser(state) {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
        // Réducteur pour la mise à jour du profil utilisateur
        updateUserProfile(state, action) {
            state.user = action.payload;
        },
    },
});

// Export des actions pour les utiliser dans les composants
export const { authenticateUser, deauthenticateUser, updateUserProfile } = userSlice.actions;

// Export du réducteur pour la configuration du store
export default userSlice.reducer;
