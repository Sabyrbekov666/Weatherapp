import CardItem from './CardItem'
import './Cards.scss'
import React from 'react'

function Cards() {
	return (
		<div className='cards'>
			<h1>Погода по всему миру</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://i.pinimg.com/originals/af/8c/dc/af8cdc668fa78ef0737dd625772e2b85.png'
							text='Бишкек, Кыргызстан +7°'
							path='/detailedForecast'
						/>
						<CardItem
							src='https://misk.org.kz/media/events/photos/cache/1_CCktfOi_full.jpg'
							text='Алматы, Казахстан +6°'
							path='/'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='https://images.adsttc.com/media/images/5c12/816e/08a5/e58a/ba00/044a/newsletter/1.jpg?1544716646'
							text='Москва, Россия -1°'
							path='/'
						/>
						<CardItem
							src='https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
							text='Париж, Франция +9°'
							path='/'
						/>
						<CardItem
							src='https://equatorial.by/sites/default/files/images/tokyo001.jpg'
							text='Токио, Япония +18°'
							path='/'
						/>
						<CardItem
							src='https://img-fotki.yandex.ru/get/9355/30348152.16e/0_72f3d_ea6f6970_orig'
							text='Мюнхен, Германия +5°'
							path='/'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
