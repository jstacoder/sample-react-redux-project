export const SAMPLE_ACTION_TYPE = 'SAMPLE_ACTION_TYPE';
export const NOT_LOADING = 'NOT_LOADING';

export const sampleAction = (arg) =>({
    type: SAMPLE_ACTION_TYPE,
    payload:{
        arg,
    }
});

export const notLoading = () =>({
    type: NOT_LOADING,
});