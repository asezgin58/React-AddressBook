import React, {Component} from 'react';
import logo from './logo.svg';
import AddressPanel from './Components/AdressPanel';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Address Book Application
                    </p>
                </header>
                <main>
                    <AddressPanel/>
                </main>


            </div>
        );
    }
}

export default App;
