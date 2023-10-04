import React from "react";
import "./style.scss";
import Logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="SignUp">
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
        <Link className="registration" to="/signIn">
          Уже есть аккаунт? <span>Войти.</span>
        </Link>
        <form action="">
          <h3>Регистрация</h3>
          <input type="text" name="firstName" placeholder="Имя" />
          <input type="text" name="lastName" placeholder="Фамилия" />
          <input type="text" name="patronymic" placeholder="Отчество" />
          <input
            type="email"
            name="email"
            placeholder="Введите электронную почту (она будет логином)"
          />
          <input
            type="password"
            name="password"
            placeholder="Придумайте пароль"
          />
          <input
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <input
            type="tel"
            name="number"
            placeholder="Номер мобмльного телефона"
            maxLength={15}
          />
          <button className="receive_code">Получить код</button>
          <Link className="enter" to="/signIn">
            Зарегистрироваться
          </Link>
          <p>Нажимая на кнопку «Зарегистрироваться»:</p>
          <div className="checkbox1">
            <input type="checkbox" />
            <p>
              Я принимаю условия <br /> Пользовательского соглашения и даю своё
              согласие <br /> на обработку моей персональной информации на{" "}
              <br /> условиях, определенных Политикой кониденциальности.{" "}
            </p>
          </div>
          <div className="checkbox2">
            <input type="checkbox" />
            <p>
              Я не хочу получать рекламу и другие предложения <br />
              данного сервиса
            </p>
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
