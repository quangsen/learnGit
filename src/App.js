import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contact from './Component/contact';

class App extends Component {
    render() {
        return (
            <div>
                <p>Nguyen Van Quang</p>
                <contact />
            </div>
        );
    }
}

export default App;
