import React from "react";
import "./MainPage.scss";
import sches from "../../../svg/sches.svg";

export const MainPage = () => {

    return (
        <div className="Logo">
            <div className="Logo__animation">
                <div className="Logo__logo_up">
                    <img src={sches} className="Logo__logo_down" alt="logo" />
                </div>
            </div>
            <div className="Logo__text">
                <h3>Добро пожаловать</h3>
                на главную страницу, чтобы перейти <br />
                к Todo листу, наверху есть кнопка,<br />
                кликните по ней "Список todo".
            </div>
        </div>
    )
}