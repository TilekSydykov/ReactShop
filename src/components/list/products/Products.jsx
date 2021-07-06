import './products.sass'
import {Link} from "react-router-dom";
import {Component} from "react";
import {connect} from "react-redux";
import {loadProducts} from "../../../redux/actions"

class Products extends Component {
    noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
    
    componentDidMount() {
        this.props.loadProducts()
    }

    render() {
        let { products } = this.props;
        return(
            <div className="row cont">
                {
                    products.map((i) => (
                        <div className="col col-md-3" key={i.id}>
                            <div className="card">
                                <img src={(i.image === "" || i.image == null)?  this.noImage: i.image} alt=""/>
                                <div className="card-body">
                                    <Link to={`/product/` + i.id }  className="name link">
                                        {i.name}
                                    </Link>
                                    <div className="price">
                                        {i.price} c/шт
                                    </div>
                                    <div className="desc text-secondary">
                                        {i.description}
                                    </div>
                                    <button className="float-end btn-accent-light">
                                        <i className="fa fa-cart-plus"/>
                                        &nbsp; В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return {
        products: state.productsList
    }
}

export default connect(mapStateToProps, {loadProducts})(Products)