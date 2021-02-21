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
                title:'1',
                icon:<HomeOutlinedIcon fontSize='large' />,
                link:'/categories/#1234',
            },
            {
                title:'2',
                icon:<HomeOutlinedIcon fontSize='large' />,
                link:'/categories/#2345',
            },
            {
                title:'3',
                icon:<HomeOutlinedIcon fontSize='large' />,
                link:'/categories/#3456',
            }
        ]
    },
    {
        title:'Create',
        icon:<HomeOutlinedIcon fontSize='large' />,
        link:'/create'
    }
];