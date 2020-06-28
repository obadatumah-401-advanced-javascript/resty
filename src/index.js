import React from 'react';
import ReactDom from 'react-dom';
import App from './app'

class Main extends React.Component {
    render() {
return <App />
    }
}

const renderElement = document.getElementById('root');
ReactDom.render( <Main /> , renderElement);