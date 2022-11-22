import { Button } from './Button'
import './Footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Специальный район Тиёда: локальный прогноз погоды рассчитан с помощью
					технологии Meteum
				</p>
				<p className='footer-subscription-text'>
					Исходные данные: ООО «Яндекс.Пробки»; Росгидромет, ФГБУ «ЦАО»; © 2022
					ECMWF; NOAA
				</p>
			</section>
			<div class='footer-links'>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Ссылки</h2>
						<Link to='/sign-up'>Канал в мессенджере</Link>
						<Link to='/'>Справка</Link>
						<Link to='/'>Пользовательское соглашение</Link>
						<Link to='/'>Обратная связь</Link>
						<Link to='/'>Поддержка</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Партнерам</h2>
						<Link to='/'>Реклама</Link>
						<Link to='/'>API Яндекс погоды</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Прогноз погоды</h2>
						<Link to='/'>Почасавой прогноз</Link>
						<Link to='/'>Подробный прогноз на 10 дней </Link>
						<Link to='/'>Прогноз на месяц</Link>
						<Link to='/'>Показ на карте</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
