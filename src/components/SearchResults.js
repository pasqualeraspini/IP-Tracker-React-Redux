import React from 'react';
import { connect } from 'react-redux';
import './searchResults.css'

class SearchResults extends React.Component {
    render() {     
        const { ip, isp } = this.props.result.data || {};
        const { city, country, postalCode, timezone } = this.props.result.data.location || {};

        return (
            <div className={"search-results"}>
                <div className="info address">
                    <span>Ip Address</span>
                    <div className="result">{ip}</div>
                </div>
                <div className="info location">
                    <span>Location</span>
                    <div className="result">{city} {country} {postalCode}</div>
                </div>
                <div className="info timezone">
                    <span>timezone</span>
                    <div className="result">{timezone}</div>
                </div>
                <div className="info isp">
                    <span>Isp</span>
                    <div className="result">{isp}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.addressReducer 
    }
}

export default connect(mapStateToProps)(SearchResults)