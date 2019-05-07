import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Poster extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgIndex:0,
            favIndex:[],
        }
    }

    static defaultProps = {
        src:['https://www.classicposters.com/images/nopicture.gif'],
        alt:'Poster manquante',
    };

    static propTypes = {
        src:PropTypes.arrayOf(PropTypes.string),
        alt:PropTypes.string.isRequired,
    };

    nextImage = () => {
        let {imgIndex} = this.state;
        const {src} = this.props;
        imgIndex = (imgIndex + 1) % src.length;
        this.setState({
            imgIndex:imgIndex,
        });
    };

    favImage = () => {
        let {favIndex, imgIndex} = this.state;

        favIndex = [imgIndex, ...favIndex];

        this.setState({
            favIndex:favIndex,
        })
    };

    render(){

        const {src, alt} = this.props;
        const {imgIndex, favIndex} = this.state;

        let favClass = (favIndex.includes(imgIndex)) ? "fav" : "" ;

        return(
            <img src={src[imgIndex]} alt={alt} className={favClass} onDoubleClick={this.favImage} onClick={this.nextImage}/>
        );
    }
}

export default Poster;