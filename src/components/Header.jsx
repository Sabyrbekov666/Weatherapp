import { Button } from './Button'
import './Header.scss'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)

	return (
		<>
			<nav className='header'>
				<div className='header-container'>
					<Link to='/' className='header-logo' onClick={closeMobileMenu}>
						<img src='https://avatars.mds.yandex.net/get-lpc/1674605/dfa3b016-a623-443b-bfc4-77ebd83c05ac/width_360_q70'></img>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDi75hnXYjpXGDmBoCpOHa_qd9RxdqVgM5uTbneOnHG_2ZruauEmJzRVLuqheIU2wbeFY&usqp=CAU'></img>
						Погода!
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								На сегодня
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/detailedForecast'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Подробный прогноз
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/precipitationMap'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Карта осадков
							</Link>
						</li>

						<li>
							<Link
								to='/sign-up'
								className='nav-links-mobile'
								onClick={closeMobileMenu}
							></Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>Вход</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar
