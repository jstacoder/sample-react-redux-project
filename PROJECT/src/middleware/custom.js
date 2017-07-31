
export const logger = store => {
    // runs on createStore()
    // returns a decorator for dispatch()

    console.log("INSIDE STORE CALLBACK");

    return dispatch => {
        // runs on createStore()
        // returns a new dispatch() func
        console.log("INDSIDE DISPATCH CALLBACK");

        return action =>{
            // runs every dispatch()
            console.log("INSIDE ACTION DISPATCH CALLBACK", action);
            return dispatch(action)
        }
    }
}
