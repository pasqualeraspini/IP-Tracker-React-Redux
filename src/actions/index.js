import axios from 'axios';

export const searchIp = ip => {
    return dispatch => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`)
             .then(result => {
                 dispatch({
                     type: 'SEARCH_IP',
                     payload: result.data
                 })
             })
             .catch(() => {
                window.alert(`Can't find any address with ${ip}` )
             })
    }
}

export const searchDomain = domain => {
    return dispatch => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${domain}`)
             .then(result => {
                 dispatch({
                     type: 'SEARCH_DOMAIN',
                     payload: result.data
                 })
             })
             .catch(() => {
                window.alert(`Can't find any address with ${domain}`)
            })
    }
}