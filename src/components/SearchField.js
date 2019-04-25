import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions'

//will go to actions.js to send search input
const mapDispatchToProps = (dispatch) => {
    return {
        search: (event) => dispatch(search({ search: event.target.value }))
    }
}

class SearchField extends Component {
    render() {
        const { search, disabled } = this.props

        const styles = disabled == "disabled" ? { backgroundColor: "#d3d3d3" } : null;

        return (
            <div className="searchfield">
                <input type="text" placeholder="Search by book title..."
                    onChange={search} disabled={disabled} style={styles}></input>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchField);