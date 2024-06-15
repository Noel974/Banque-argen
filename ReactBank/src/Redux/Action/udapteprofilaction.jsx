import { updateUserProfileApi } from "../../ServiceAPI/ServiceAPI";
import { updateUserProfile } from '../Reducer/UserReducer';

// Async action for updating user profile
export const updateUserProfileAction = (updatedProfile) => async (dispatch) => {
	try {
		const token =
			localStorage.getItem("authToken");
		const response = await updateUserProfileApi(updatedProfile, token);
		console.log("updateUserProfileApi response:", response);
		dispatch(updateUserProfile(response.body));
	} catch (error) {
		console.error("Error updating user profile:", error);
	}
};
