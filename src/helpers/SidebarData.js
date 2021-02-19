import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const SidebarData =[
    {
        title:'Home',
        icon: <HomeOutlinedIcon fontSize='large' />,
        link:'/'
    },
    {
        title:'Categories',
        icon:<HomeOutlinedIcon fontSize='large' />,
        link:'/categories',
        children: [
            {
                title:'Sub1',
                icon:<HomeOutlinedIcon fontSize='large' />,
                link:'/categories/sub1',
            },
            {
                title:'Sub2',
                icon:<HomeOutlinedIcon fontSize='large' />,
                link:'/categories/sub2',
            }
        ]
    },
    {
        title:'Create',
        icon:<HomeOutlinedIcon fontSize='large' />,
        link:'/create'
    }
];