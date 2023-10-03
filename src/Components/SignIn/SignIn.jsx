import React from "react";
import "./style.scss";
import Logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="Logo">
        <div className="LogoImg">
          <img src={Logo} alt="logo" />
        </div>
        <h2>ФЕДЕРАЦИЯ СОВРЕМЕННОГО МЕЧЕВОГО БОЯ </h2>
        <p>
          Заявите о себе, общайтесь, знакомьтесь с единомышленниками по всей
          стране, <br /> участвуйте в соревнованиях{" "}
          <span>
            (и еще куча всего, что может дать мне, как участниу, этот <br />{" "}
            сервис)
          </span>
        </p>
      </div>
      <div className="Registration">
        <form action="">
          <div className="center">
            <label htmlFor="login">Логин</label>
            <input type="text" id="login" />
          </div>
          <div className="center">
            <label style={{ marginTop: "14px" }} htmlFor="password">
              Пароль
            </label>
            <input type="password" id="password" />
          </div>
          <Link className="enter" to="/">
            ВОЙТИ
          </Link>
          <Link className="registration" to="/signUp">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
