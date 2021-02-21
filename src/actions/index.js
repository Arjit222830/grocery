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
    const response = await axios.get('/product');
    return {
        type: 'fetchProducts', 
        payload: response.data
    }
};

export const fetchProductsWithCategory = async (id) => {
    const response = await axios.get(`/product/category/${id}`);
    return {
        type: 'fetchProductsWithCategory', 
        payload: response.data
    }
};

export const createProduct= async(formValues)=>{
    const response= await axios.post('/product/new', formValues);
    return {
        type: 'createProduct',
        payload: response.data
    }
};

export const editProduct = async(id, formValues) =>{
    console.log("hrl");
    const response=  await axios.put(`/product/update/${id}`, formValues);
    console.log(response.data);
    return { 
        type: 'editProduct', 
        payload: response.data
    }
};

export const fetchProduct= async (id) => {
    const response = await axios.get(`/product/${id}`);
    return { 
        type: 'fetchProduct', 
        payload:response.data
    }
};

export const deleteProduct = async (id)=> {
    await axios.delete(`/product/delete/${id}`);
    return {
        type: 'deleteProduct',
        payload: id
    }
}

export const fetchCategories= (data) => {
    return { 
        type: 'fetchCategories', 
        payload:data
    }
};

export const fetchSubCategories= (data) => {
    return { 
        type: 'fetchSubCategories', 
        payload:data
    }
};