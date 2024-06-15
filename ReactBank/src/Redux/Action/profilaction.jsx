import { updateUserProfile } from '../Reducer/UserReducer';
import { UserProfile } from "../../ServiceAPI/ServiceAPI"; // Import de la fonction UserProfile de l'API

// Action asynchrone pour récupérer le profil de l'utilisateur
export const profileAction = () => async (dispatch) => {
	try {
		// Récupération du jeton depuis le stockage local
		const token =
			localStorage.getItem("authToken");

		// Appel de l'API UserProfile avec le jeton
		const response = await UserProfile(token);
		console.log("UserProfile API response:", response);

		// Déclenchement de l'action updateUserProfile pour mettre à jour le profil de l'utilisateur
		dispatch(updateUserProfile(response.body));
	} catch (error) {
		console.error("Erreur lors de la récupération du profil utilisateur:", error);
	}
};
