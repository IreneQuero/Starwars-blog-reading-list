import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Planet } from "./views/planet";
import { Person } from "./views/person";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	const { store, actions } = useContext(Context);

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<Navbar />
					{store.isLoading?<div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div></div>:
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planet/:planetId" element={<Planet />} />
						<Route path="/person/:personId" element={<Person />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
