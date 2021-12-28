import * as api from '../../api';

// Actions Creators
export const getPosts = () => async (dispatch) => {
    try {
        // Récupération de tous les posts
        const { data } = await api.fetchPosts();
        // Si type d'action = "FETCH_ALL", on envoie dans payload, nos datas
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
