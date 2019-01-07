import React from 'react';
import PropTypes from 'prop-types'
import {formatPrice} from '../helpers';


class Fish extends React.Component {
    static propTypes= {
        details: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
    }

    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        const price = this.props.details.price;
        const desc = this.props.details.desc;
        const status = this.props.details.status;
        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3>
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                    <p>{desc}</p>
                    <button 
                        onClick={() => this.props.addToOrder(this.props.index)} 
                        disabled={!isAvailable}>
                        {isAvailable ? 'Add To Cart' : 'Sold Out'}
                    </button>
                </h3>
            </li>
        )
    }
}

export default Fish;