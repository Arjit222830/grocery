
export const openSidebar= (flag)=>{
    return {
        type: "setOpenSidebar",
        payload:flag
    }
}

export const err= (value)=>{
    return {
        type: "setError",
        payload:value
    }
}

export const signIn = (user)=>{
    return {
        type: "signIn",
        payload: user
    }
};

export const signOut = ()=>{
    return {
        type: "signOut"
    }
};