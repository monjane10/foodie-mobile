import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuthenticated = true;

export default function App() {



  return (
      isUserAuthenticated ? <RoutesAuth/> : <Routes/>
  );
}
