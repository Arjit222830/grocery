import axios from '../axios'

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
}

export const signOut = ()=>{
    return {
        type: "signOut"
    }
}


export const fetchProducts = async () => {
    const response = await axios.get('/products');
    return {
        type: 'fetchProducts', 
        payload: response.data
    }
};

export const fetchProductsWithId = async (id) => {
    const response = await axios.get(`/products/${id}`);
    return {
        type: 'fetchProductsWithId', 
        payload: response.data
    }
};

export const createProduct= async(formValues)=>{
    const response= await axios.post('/products', formValues);
    return {
        type: 'createProduct',
        payload: response.data
    }
};

export const editProduct = async(id, formValues) =>{
    console.log("hrl");
    const response=  await axios.patch(`/products/${id}`, formValues);
    console.log(response.data);
    return { 
        type: 'editProduct', 
        payload: response.data
    }
};

export const fetchProduct= async (id) => {
    const response = await axios.get(`/products/${id}`);
    return { 
        type: 'fetchProduct', 
        payload:response.data
    }
};

export const deleteProduct = async (id)=> {
    await axios.delete(`/products/${id}`);
    return {
        type: 'deleteProduct',
        payload: id
    }
}