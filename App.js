import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";



const isUserAuthenticated = false;

export default function App() {



 return (
    isUserAuthenticated ? <RoutesAuth/> : <Routes/>
 );


}
