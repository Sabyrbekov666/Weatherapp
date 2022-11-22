import '../App.css'
import { Button } from './Button'
import './HeroSection.scss'
import React from 'react'

function HeroSection() {
	return (
		<div className='hero-container'>
			<img src='https://i.pinimg.com/originals/15/19/17/151917b3730b63a77f577112e3e26b0a.jpg' />
			<h1>Бишкек, Кыргызстан</h1>
			<p>
				Сегодня: слабый дождь не прекратится · +5⁠…⁠+7° · слабый ветер 2 м⁠/⁠с
			</p>
			<div className='hero-btns'></div>
		</div>
	)
}

export default HeroSection
