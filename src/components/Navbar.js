import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import enhanceWithClickOutside from 'react-click-outside';

// import './Navbar.scss';

class Navbar extends React.PureComponent {
	static propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
		}).isRequired,
	};
	state = {
		isOpen: false,
	};

	toggleNavbar = e => {
		e.preventDefault();
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	handleClickOutside() {
		this.setState(state => {
			if (state.isOpen) {
				return { isOpen: false };
			}
			return null;
		});
	}

	render() {
		const burgerClass = `navbar-burger ${
			this.state.isOpen ? 'is-active' : ''
		}`;
		const menuClass = `navbar-menu ${this.state.isOpen ? 'is-active' : ''}`;
		const navLinks = [
			{
				path: '/',
				label: 'Amit Thawait',
			},
			{
				path: '/about',
				label: 'About',
			}
		];
		const { location } = this.props;
		return (
			<nav className="navbar is-transparent swas-navbar">
				<div className="container">
					<div className="navbar-brand">
						<Link
							to="/"
							className="navbar-item navbar-item--site-title"
						>
							Amit Thawait
						</Link>
						{/* eslint-disable jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */}
						<a
							role="button"
							className={burgerClass}
							aria-label="menu"
							aria-expanded="false"
							onClick={this.toggleNavbar}
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
						{/* eslint-enable */}
					</div>
					<div className={menuClass}>
						<div className="navbar-start">
							{navLinks.map(nav => {
								const className =
									nav.path === location.pathname
										? 'navbar-item is-active'
										: 'navbar-item';
								return (
									<Link
										className={className}
										to={nav.path}
										key={nav.path}
									>
										{nav.label}
									</Link>
								);
							})}
						</div>
						<div className="navbar-end">
							<a
								className="navbar-item"
								href="https://github.com/swashata/swas.io"
								target="_blank"
								rel="noopener noreferrer"
							>Github
								{/* <span className="icon">
									<FontAwesomeIcon icon={['fab', 'github']} /> 
								</span> */}
							</a>
							<a
								href="https://twitter.com/swashata"
								className="navbar-item"
								target="_blank"
								rel="noopener noreferrer"
							>Twitter
								{/* <span className="icon">
									<FontAwesomeIcon
										icon={['fab', 'twitter']}
									/>
								</span> */}
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default enhanceWithClickOutside(Navbar);