import React from "react";
import "./ObjectPage.less";
import Header from "../Header/Header";

const ObjectPage = () => {
  return (
    <div className="objectPageRoot">
      <Header />
      <main>
        <div className="object-card">
          <div className="object-style">Модернізм</div>
          <div className="object-title">Садиба Барбана</div>
          <div className="object-img">
            <img src="img/obj_page_img.png" alt="" />
          </div>
          <div className="object-address">
            <img src="icons/address.png" alt="" />
            вулиця Обсерваторна, 6, Київ, 02000
          </div>
          <div className="object-description">
            Садиба Барбана є зразком одноповерхового житла середнього класу із
            цегляним декором. 2015 року Науково-дослідний інститут
            пам'яткоохоронних досліджень пропонував внести будівлю до переліку
            щойно виявлених об'єктів культурної спадщини[1]. В обґрунтуванні
            було зазначено, що це «рідкісний взірець одноповерхового садибного
            будинку. Прикрашений вишуканим неокласичним декором — русти, лиштви,
            складний карниз. Цінна пам'ятка культурного надбання міста Києва».
            Міністерство культури та інформаційної політики України не включило
            садибу до реєстру нерухомих пам'яток України[5].{" "}
          </div>
          <div className="object-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5678344241364!2d30.48567707635903!3d50.430523071588354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cee9c6ab905b%3A0x226e12153cabed24!2z0LLRg9C70LjRhtGPINCa0YPQtNGA0Y_RiNC-0LLQsCwgNywg0JrQuNGX0LIsIDAzMDM1!5e0!3m2!1suk!2sua!4v1687613227227!5m2!1suk!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
        <div className="object-details">
          <ul>
            <h3>Відомості</h3>
            <li>
              Рік побудови <span className="accent">1891</span>{" "}
            </li>
            <li>
              Тип будівлі <span className="accent">Маєток</span>{" "}
            </li>
            <li>
              Стиль <span className="accent">Модернізм</span>{" "}
            </li>
            <li>
              Термін занепаду <span className="accent">25</span>{" "}
            </li>
            <li>
              Стан <span className="accent">Частково Зруйновано</span>{" "}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ObjectPage;
