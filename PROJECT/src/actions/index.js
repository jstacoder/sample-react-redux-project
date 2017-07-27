export const SAMPLE_ACTION_TYPE = 'SAMPLE_ACTION_TYPE';
export const NOT_LOADING = 'NOT_LOADING';
export const SET_CONTACT_INFO_NAME = 'SET_CONTACT_INFO_NAME';
export const SET_CONTACT_INFO_EMAIL = 'SET_CONTACT_INFO_EMAIL';
export const SET_CONTACT_INFO_AGE = 'SET_CONTACT_INFO_AGE';
export const SET_CONTACT_INFO_COMMENT = 'SET_CONTACT_INFO_COMMENT';
export const RESET_CONTACT_INFO = 'RESET_CONTACT_INFO';

export const setContactInfoName = (name) =>({
    type: SET_CONTACT_INFO_NAME,
    payload:{
        name,
    }
});
export const setContactInfoEmail = (email) =>({
    type: SET_CONTACT_INFO_EMAIL,
    payload:{
        email,
    }
});
export const setContactInfoAge = (age) =>({
    type: SET_CONTACT_INFO_AGE,
    payload:{
        age,
    }
});
export const setContactInfoComment = (comment) =>({
    type: SET_CONTACT_INFO_COMMENT,
    payload:{
        comment,
    }
});
export const resetContactInfo = () =>({
    type:RESET_CONTACT_INFO,
});


export const sampleAction = (arg) =>({
    type: SAMPLE_ACTION_TYPE,
    payload:{
        arg,
    }
});

export const notLoading = () =>({
    type: NOT_LOADING,
});