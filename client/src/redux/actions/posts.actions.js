import * as api from '../../api';

// Actions Creators
export const getPosts = () => async (dispatch) => {
    try {
        // Récupération de tous les posts
        const { data } = await api.fetchPosts();
        // Lorsque action.type = "FETCH_ALL", on envoie dans actions.payload, nos datas
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        // Création post
        const { data } = await api.createPost(post);
        // Lorsque action.type = "CREATE", on envoie dans actions.payload, notre post
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
