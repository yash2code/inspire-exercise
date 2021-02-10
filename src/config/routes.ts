import IRoute from '../interfaces/route';
import ListItemView from '../pages/listItemView';
import ItemView from '../pages/itemView';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'ListItemView Page',
        component: ListItemView,
        exact: true
    },
    {
        path: '/item',
        name: 'ItemView Page',
        component: ItemView,
        exact: true
    },
    {
        path: '/item/:id',
        name: 'ItemView Page',
        component: ItemView,
        exact: true
    },
]

export default routes;