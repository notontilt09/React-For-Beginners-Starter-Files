import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        const price = this.props.details.price;
        const desc = this.props.details.desc;
        const status = this.props.details.status;
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3>
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                    <p>{desc}</p>
                    <button>Add To Cart</button>
                </h3>
            </li>
        )
    }
}

export default Fish;