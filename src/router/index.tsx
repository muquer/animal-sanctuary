import { createBrowserRouter } from "react-router-dom";
import { baseUrl } from "../constants";

export const routes = [{
    path: `/${baseUrl}`,

},
{
    name: 'matchmaking',
    label:'Matchmaking',
    path: `/matchmaking`,
},
{
    name: 'adopters',
    label:'Adopters',
    path: `/adopters`,
},
{
    name: 'animals',
    label: 'Animals',
    path: `/animals`,
},
]

export const MainRouter = createBrowserRouter(routes);
