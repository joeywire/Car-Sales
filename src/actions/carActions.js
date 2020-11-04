//Action Suite consists of three things: 
    // 1. Action Types 
    // 2. Action Creators 
    // 3. Action Objects 

//Action Types 
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//Action Creators 
export const addFeature = (feature) => {
    //returns an Action Object 
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = (featureID) => {
    return {
        type: REMOVE_FEATURE,
        payload: featureID
    }
}