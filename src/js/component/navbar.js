import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavoriteItem } from "./favoriteItem.js"
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState(store.favorite)

	useEffect(() => {
		setFavorites(store.favorite)
	},[store.favorite])


	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" className="logo"></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							favorites <span className="badge rounded-pill bg-dark">{favorites.length}</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{favorites.map((favorite, i) => {
							return <FavoriteItem key={i} name={favorite.name} i={i} />
						})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
