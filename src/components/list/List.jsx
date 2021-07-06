import './list.sass'
import DoubleRangeSlider from "./range/Range";
import Products from "./products/Products";
import {Component} from "react";

class List extends Component {
    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-accent">
                            <i className="fa fa-sort-amount-down"/>
                            &nbsp; Фильтры
                        </button>
                        <select name="" id="" className="slc-accent float-end w-25">
                            <option value="">Доставка</option>
                            <option value="">Без доставки</option>
                        </select>
                        <select name="" id="" className="slc-accent float-end w-25">
                            <option value="">Цена по увеличению</option>
                            <option value="">Цена по уменьшению</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-5 price-filters">
                            <b>Цена</b>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="input-accent w-100">
                                        от
                                        <input type="number" min="0" max="15000" className="" />
                                        сом
                                    </div>
                                </div>
                                <div className="col col-md-6">
                                    <div className="input-accent w-100">
                                        от
                                        <input type="number" min="0" max="15000" className="" />
                                        сом
                                    </div>
                                </div>
                            </div>
                            <div className="row min-max-slider">
                                <DoubleRangeSlider/>
                            </div>
                        </div>
                        <div className="col col-md-7 price-filters">
                            <b>&nbsp;</b>
                            <div className="row">
                                <div className="col col-md-3">
                                    <select name="" id="" className="slc-accent w-100">
                                        <option value="">Доставка</option>
                                        <option value="">Без доставки</option>
                                    </select>
                                </div>
                                <div className="col col-md-3">
                                    <select name="" id="" className="slc-accent w-100">
                                        <option value="">Страна производителя</option>
                                        <option value="">Кр</option>
                                    </select>
                                </div>
                                <div className="col col-md-3">
                                    <select name="" id="" className="slc-accent w-100">
                                        <option value="">Компания</option>
                                        <option value="">ну компания</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Products/>
            </div>
        )
    }
}


export default List