import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.scss';
import * as serviceWorker from './serviceWorker';
import Latihan8 from './Tabelform';
import Foo from './latihan'

ReactDOM.render(<Latihan8 />,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();