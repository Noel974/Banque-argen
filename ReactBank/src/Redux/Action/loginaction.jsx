import { authenticateUser } from '../Reducer/UserReducer'; // Import de l'action signIn depuis le slice d'authentification
import { LoginUser } from "../../ServiceAPI/ServiceAPI"; // Import de la fonction de connexion de l'API

// Action en cas d'échec de la connexion
export const actionLoginFailed = (errorMessage) => ({
	type: "CONNEXION_ECHOUEE", // Type de l'action pour gérer l'échec de la connexion
	payload: errorMessage, // Message d'erreur à transmettre
});

// Action asynchrone pour la connexion
export const connexion = (userData) => async (dispatch) => {
	try {
		// Appel de l'API de connexion avec les informations de l'utilisateur
		const response = await LoginUser(userData.email, userData.password);
		console.log('Réponse de l\'API :', response);

		if (response && response.body && response.body.token) {
			// Récupération du jeton d'authentification depuis la réponse
			const { token } = response.body;
			
			// Déclenchement de l'action signIn pour indiquer que l'utilisateur est connecté
			dispatch(authenticateUser({ token }));
			
			// Stockage du jeton dans le stockage local pour une persistance à long terme
			localStorage.setItem("authToken", token);
			
			// Affichage du jeton dans la console pour le débogage
			console.log("Authentification réussie. Token :", token);
		} else {
			// Si la réponse de l'API est invalide, déclencher une erreur
			throw new Error("Réponse invalide de l'API lors de la connexion.");
		}
	} catch (error) {
		// En cas d'erreur lors de la connexion, affichage de l'erreur dans la console
		console.error("Échec de la connexion :", error);
		
		// Déclenchement de l'action actionIdentification pour gérer l'échec de la connexion
		dispatch(actionLoginFailed(error.message));
	}
};
