import axios from "axios"; 

// Récupérer l'URL de l'API à partir des variables d'environnement
const API = process.env.REACT_APP_API;

/**
 * Fonction pour connecter un utilisateur à l'API.
 * @param {string} email - L'adresse e-mail de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise} - Une promesse contenant la réponse de la requête HTTP.
 */
export const LoginUser = async (email, password) => {
    try {
        // Effectuer une requête POST vers l'endpoint /user/login de l'API
        // avec les informations d'authentification fournies
        const response = await axios.post(`${API}/user/login`, { email, password });
        // Si la requête est réussie, renvoyer les données de la réponse
        return response.data;
    } catch (error) {
        // Si la requête échoue, renvoyer l'erreur
        throw error;
    }
};

/**
 * Fonction pour récupérer le profil de l'utilisateur.
 * @param {string} token - Le jeton d'authentification de l'utilisateur.
 * @returns {Promise} - Une promesse contenant les données du profil de l'utilisateur.
 */
export const UserProfile = async (token) => {
    try {
      // Effectuez la requête POST avec axios
      const response = await axios.post(`${API}/user/profile`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Renvoyez les données de la réponse
      return response.data;
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Une erreur est survenue lors de la récupération du profil utilisateur:', error);
      throw error;
    }
  };
  

/**
 * Fonction pour mettre à jour le profil de l'utilisateur avec une requête PUT.
 * @param {Object} userData - Les données à mettre à jour dans le profil de l'utilisateur.
 * @param {string} token - Le jeton d'authentification de l'utilisateur.
 * @returns {Promise} - Une promesse contenant les données mises à jour du profil de l'utilisateur.
 */
export const updateUserProfileApi = async (userData, token) => {
    try {
        // Effectuer une requête PUT vers l'endpoint /user/profile de l'API
        // avec les données utilisateur à mettre à jour et le jeton d'authentification dans les en-têtes
        const response = await axios.put(
            `${API}/user/profile`,
            userData,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        // Renvoyer les données mises à jour du profil de l'utilisateur
        return response.data;
    } catch (error) {
        // Gérer les erreurs en les lançant à l'appelant
        throw error;
    }
};
