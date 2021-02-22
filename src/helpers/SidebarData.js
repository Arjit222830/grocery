import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const SidebarData =(props)=> {
    console.log(props.categories);
    return [
        {
            title:'Home',
            icon: <HomeOutlinedIcon fontSize='large' />,
            link:'/'
        },
        {
            title:'Categories',
            icon:<HomeOutlinedIcon fontSize='large' />,
            link:'/categories',
            children: props.categories.map((p)=>{
                return {
                    title:p.name,
                    icon:<HomeOutlinedIcon fontSize='large' />,
                    link:`/categories/${p.name}`,
                }
            })
        },
        {
            title:'Create',
            icon:<HomeOutlinedIcon fontSize='large' />,
            link:'/create'
        }
    ];
}