import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './components/Root';
import store from "./store";

import './styles/styles.scss';

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
