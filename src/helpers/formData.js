
export const formData= [
    {
        label: 'Name',
        name: 'productName',
        placeholder: 'Enter a name of product',
        type: 'text',
        validation: 'required'
    },
    {
        label: 'Description',
        name: 'description',
        placeholder: 'Enter a description',
        type: 'text',
        validation: 'required|min:6'
    },
    {
        label: 'Price',
        name: 'price',
        placeholder: 'Enter a price',
        type: 'text',
        validation: 'required'
    },
    {
        label: 'Image',
        name: 'images',
        placeholder: 'Enter a image',
        type: 'file',
        validation: 'required'
    },
    {
        label: 'Category',
        name: 'category',
        placeholder: 'Choose a category',
        type: 'select',
        validation: 'required'
    },
    {
        label: 'Sub-Category',
        name: 'subcategory',
        placeholder: 'Enter a Sub-Category',
        type: 'select',
        validation: 'required'
    },
    {
        label: 'Weight',
        name: 'weight',
        placeholder: 'Enter a Weight',
        type: 'number',
        validation: 'required'
    },
    {
        label: 'Measured Unit',
        name: 'measureUnit',
        placeholder: 'Enter a unit of measurement',
        type: 'text',
        validation: 'required'
    }
];
