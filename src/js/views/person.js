import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = (props) => {
	const { store, actions } = useContext(Context);
	const { personId } = useParams();

	const [isLoading, setIsLoading] = useState(true)
    const [person, setPerson] = useState([])


    useEffect(() => {getPersonFetch(personId)},[])

    async function getPersonFetch(id) {
        setIsLoading(true)
        try {await fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())
        .then(data => {setPerson(data.result.properties)
            setIsLoading(false)
    })
    }catch (error) {
        console.log('there is a problem with fetch:' + error.message)
        setIsLoading(false);
    }
    }

	return (
			<div className="container">
				<div className="card mb-3">
					{isLoading?
					<div className="container d-flex justify-content-center mb-5 mt-5"><div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
				:
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://cherry-brightspot.s3.amazonaws.com/d3/52/3cce57164534a50d08dfb1b8ace7/original.jpg" className="img-fluid rounded-start " alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body text-center">
						<h1 className="card-title">{person.name}</h1>
						<p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						</div>
					</div>
					<div className="card-footer text-muted">
						<div className="row">
							<div className="container col-2">
								Name: <br/>
								{person.name}
							</div>
							<div className="container col-2">
								birth year: <br/>
								{person.birth_year}
							</div>
							<div className="container col-2">
								Gender: <br/>
								{person.gender}
							</div>
							<div className="container col-2">
								Height: <br/>
								{person.height}
							</div>
							<div className="container col-2">
								Skin color: <br/>
								{person.skin_color}
							</div>
							<div className="container col-2">
								Eye color: <br/>
								{person.eye_color}
							</div>
						</div>
					</div>
				</div>
				}
			</div>
		</div>
	);
};

Person.propTypes = {
	match: PropTypes.object
};
