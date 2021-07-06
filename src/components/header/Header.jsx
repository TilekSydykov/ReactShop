import {Component} from "react";
import "./header.sass";
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="row">
                    <div className="col column-1">
                        <i className="fa fa-bars"/>
                    </div>
                    <div className="col column-2">
                        <img src={logo}  alt="logo"/>
                    </div>
                    <div className="col column-3">
                        <div className="searchbar">
                            <i className="fa fa-search" />
                            <input type="text" placeholder="поиск..."/>
                            <i className="fa fa-times"/>
                        </div>
                    </div>
                    <div className="col column-4">
                        <div className="tab">
                            <i className="fa fa-cart-plus"/>
                            <br/>
                            Добавить товар
                        </div>
                        <div className="tab">
                            <i className="fa fa-heart"/>
                            <br/>
                            Избранное
                        </div>
                    </div>
                    <div className="col column-5">
                        <button className="btn btn-accent">Регистрация</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header