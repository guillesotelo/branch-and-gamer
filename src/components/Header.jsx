import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();

    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    function inicio() {
        dispatch(buscarProducto(""));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                {" "}
                <button onClick={inicio}>
                    <img className='logo' src='https://i.postimg.cc/MK3vy7xt/Captura-de-Pantalla-2021-07-01-a-la-s-01-10-58.png' alt='Branch&Gamer'/>
                </button>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor"
                    aria-controls="navbarColor"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span className="navbar-toggler-icon"></span>{" "}
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                    <ul className="navbar-nav">
                        <li className="nav-item rounded bg-light search-nav-item">
                            <input
                                type="text"
                                id="search"
                                className="bg-light"
                                placeholder="Busca un producto"
                                onKeyUp={buscar}
                            />
                            <span className="fa fa-search text-muted"></span>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" href="#">
                                <Link to="/login">
                                    <span class="fa fa-user-o"></span>
                                    <span class="text">Login</span>
                                </Link>
                            </div>{" "}
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" href="#">
                                <Link to="/cart">
                                    <span className="fa fa-shopping-cart"></span>
                                    <span className="text">Cart</span>
                                </Link>
                            </div>{" "}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
