
export const formData= [
    {
        label: 'Name',
        name: 'name',
        placeholder: 'Enter a name of product',
        type: 'text',
        enum: [],
        validation: 'required'
    },
    {
        label: 'Description',
        name: 'description',
        placeholder: 'Enter a description',
        type: 'text',
        enum: [],
        validation: 'required|min:6'
    },
    {
        label: 'Price',
        name: 'price',
        placeholder: 'Enter a price',
        type: 'text',
        enum: [],
        validation: 'required'
    },
    {
        label: 'Image',
        name: 'image',
        placeholder: 'Enter a image',
        type: 'file',
        enum: [],
        validation: 'required'
    },
    {
        label: 'Category',
        name: 'category',
        placeholder: 'Choose a category',
        type: 'select',
        enum: ['1','2','3'],
        validation: 'required'
    },
    {
        label: 'Sub-Category',
        name: 'sub_category',
        placeholder: 'Enter a Sub-Category',
        type: 'select',
        enum: ['1','2','3'],
        validation: 'required'
    },
    {
        label: 'Weight',
        name: 'weight',
        placeholder: 'Enter a Weight',
        type: 'number',
        enum: [],
        validation: 'required'
    },
    {
        label: 'Measured Unit',
        name: 'unit',
        placeholder: 'Enter a unit of measurement',
        type: 'text',
        enum: [],
        validation: 'required'
    }
];
