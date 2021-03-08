
import { useAuth } from "../provider/Auth";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../App.css";
        function Home() {
            const history = useHistory();
            const { user , singIn} = useAuth();
            return (
                <div className="Home">
                    <h1>Welcome Poke Trainer!</h1>
                    <img src="show1.png" alt=""/>
                    <div className="decoration decoration-pikachu"></div>
                    <div className="decoration decoration-eevee"></div>
                    <div className="decoration decoration-charmander"></div>
                    <div className="decoration decoration-squirtle"></div>
                    <div>
                        {user ? <Redirect to="/"/> :
                            <><h2>You are not logged-in</h2>
                            <button onClick={() => singIn(() => {
                                history.push("/pokedex")
                            })}>Login</button></>}
                    </div>
                </div>
              )
          }
          
          export default Home