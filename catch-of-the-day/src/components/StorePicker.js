import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    }

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${this.myInput.current.value}`)
    }

    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input 
                        type="text" 
                        ref={this.myInput}
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()} />
                    <button type="submit"> Visit Store -></button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;