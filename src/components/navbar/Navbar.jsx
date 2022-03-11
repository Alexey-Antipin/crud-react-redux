import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.scss";

export const Navbar = () => {

    const [turnOff, setturnOff] = useState(false)

    const clickHandler = () => {
        setturnOff(!turnOff)
    }

    return (
        <div className="Navbar">
            <header>
                {turnOff == false ?
                    <button
                        className="Navbar__button_menu"
                        onClick={clickHandler}>
                        <Link to={"/"}>В главное меню</Link>
                    </button>
                    :
                    <button
                        className="Navbar__button"
                        onClick={clickHandler}>
                        <Link to={"/PageTodo"}>Список todo</Link>
                    </button>}
            </header>
        </div>
    )
}