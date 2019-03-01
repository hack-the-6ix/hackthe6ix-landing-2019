import Home from './Home';
import { Landing } from '../layouts';

export const routes = [
    {
        path: '/',
        component: Landing,
        children: [
            {
              path: '/',
              name: 'Home',
              component: Home
            }
        ]
    }
]