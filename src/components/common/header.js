import React from "react";
import './style.css'

const Header = () => {
  return(
		<nav className='navbar'>
			<div className='inside-nav'>
				<nav className='nav'>
					<div className="menu">
						<a href="#" className="logo">
							<div>
								<img src={process.env.PUBLIC_URL +"/Untitled.svg"} style={{width: '100%'}} />
							</div>
						</a>
					</div>
					<div className="menu">
						<div className="menu-inside">
							<span></span>
							<a href="#">Script</a>
							<span></span>
							<a href="#">Script</a>
							<span></span>
							<a href="#">Script</a>

						</div>
					</div>
					<div className="menu">

					</div>
				</nav>
			</div>
		</nav>
	)
}

export default Header