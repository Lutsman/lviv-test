import React from 'react';
import ReactDOM from 'react-dom';
// import './venodrs';
import './styles/styles.scss';
import {Root} from './components/Root';
import store from "./store";

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
