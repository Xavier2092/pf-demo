import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import CreatorForm from "../SignUpForm/CreatorForm/CreatorForm";
import { useSelector } from "react-redux";
import logo from "../Header/LOGO.png";
import "./style.css";
import Footer from "../Footer/Footer";

export default function Profile() {

    const { user } = useAuth0();
    const { isCreator } = useSelector(state => state);

    return (
        <div>
            <div>
            <div className="logoIndex">
                <Link to={'/'}><img src={logo}  alt="img not found"/></Link>
            </div>
            <div>
                <h1 className="title">Bienvenido {user.name}</h1>
            </div>
            {/* <div>
                <h2>Mis datos</h2>
                <span>Todos los datos del usuario...</span>
                <h4>{user.name}</h4>
                <h4>{user.nickname}</h4>
                <h4>{user.email}</h4>
            </div> */}
            <div>
                <h2>¿Desea subir al siguiente nivel?</h2>
                <div>
                    <h4 className="title">Beneficios de convertirse en Creador.</h4>
                    <ul className="title">
                        <li>Posibilidad de publicar tu contenido.</li>
                        <li>Visibilidad a tu contenido.</li>
                        <li>Sección donde gestionar tu contenido.</li>
                    </ul>
                </div>
            </div> <br />
            {isCreator ? (
                <div>
                    <span>Nos enorgullece decirte que ya estás disfrutando de los beneficios de ser Creador.</span>
                    {/* <h4>Para cambiar a Creador, por favor complete el siguiente formulario.</h4>
                    <span>Ya ha completado el formulario. Gracias!</span> */}
                </div>
            ) : (
                <div>
                    <h4 className="title">Para cambiar a Creador, por favor complete el siguiente formulario.</h4>
                    <CreatorForm />
                </div>
            )}
            </div>
            <br />
            <br />
            <Footer />
        </div>
    )
}