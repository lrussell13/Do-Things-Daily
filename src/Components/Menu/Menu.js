import React from 'react';
import './Menu.css';
import bars from './Bars.png';
import cross from './Cross.png';


class Menu extends React.Component {
    state = {
        active: false
    }

    onToggle = () =>  {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }

    chooseBars = () => {
        if(this.state.active){
            return <img src={cross} alt='close'/>
        }
        return <img src={bars} alt='open'/>
    }

    render(){
        return (
            <div className="menu">
                <div className="bar-container" onClick={this.onToggle}>
                    {this.chooseBars()}
                </div>
                <div className={this.state.active ? "overlay": "overlay none"}>
                    <div className="bar-container" onClick={this.onToggle}>
                        {this.chooseBars()}
                    </div>
                    <nav>
                        <ul>
                            <li>
                                Today
                            </li>
                            <li>
                                Calendar
                            </li>
                            <li>
                                Log Out
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }   
}


export default Menu;