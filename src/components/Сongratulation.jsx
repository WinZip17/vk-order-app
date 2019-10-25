import React from 'react';
import "../css/Сongratulation.css"
import manager from "../media/manager.jpg"

const Сongratulation = (props) => {
    const time = new Date().getHours();
    const workTime = "Спасибо  за информацию, наш менеджер уже начал готовить расчет, мы свяжемся с Вами в ближайшие 30 минут";
    const nonWorkTime = "Спасибо за информацию, наш менеджер поготовит расчет и свяжется с Вами завтра до 11:00";

    return (
        <div className="СongratulationFormSell">
            <div className='Сongratulation mx-auto'>
                <img className='manager' src={manager} alt='Менеджер'/>
                <h2>{time < 9 || time > 21 ? nonWorkTime : workTime}</h2>
            </div>
        </div>
    );
};

export default Сongratulation;