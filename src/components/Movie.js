import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';

class Movie extends Component{

    static defaultProps = {
        titre:'Aucun titre',
        description:'Description à venir',
        annee:'Inconnue',
        posters:['https://www.classicposters.com/images/nopicture.gif'],
        alt:'Poster manquante',
    };

    static propTypes = {
        titre:PropTypes.string.isRequired,
        description:PropTypes.string,
        annee:PropTypes.number.isRequired,
        src:PropTypes.arrayOf(PropTypes.string),
        alt:PropTypes.string.isRequired,
    };

    render(){

        const cetteAnnee=new Date().getFullYear();

        const {titre, description, src, alt} = this.props;
        const annee = (this.props.annee===cetteAnnee ? "Cette année" : this.props.annee);

        return(
            <div className="MovieScope">
                <div><Poster src={src} alt={alt}/></div>
                <h3>{titre}</h3>
                <p>Année de sortie : {annee}</p>
                <p>Description : {description}</p>
            </div>
        );
    }
}

export default Movie;