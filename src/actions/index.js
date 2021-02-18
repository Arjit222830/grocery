
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