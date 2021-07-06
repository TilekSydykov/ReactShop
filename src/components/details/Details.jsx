import {Link} from "react-router-dom";
import './details.sass'
import {Component} from "react";
import { loadProduct } from "../../redux/actions";
import { connect } from "react-redux";

class Details extends Component {

    noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"

    componentDidMount() {
        this.props.loadProduct(this.props.match.params.id);
    }

    render() {
        
        let {products} = this.props
        let product = {};
        console.log(products)
       
        if(products.length > 0 ){
            product = products[0]

            return(
                <div className="details">
                    <p className="path">
                        <Link to="/" className="link">Home</Link> > items > {product.name}
                    </p>
                    <div className="row">
                        <div className="col col-md-4">
                            <img className="product-main-image"
                                src={(product.image === "" || product.image == null)?  this.noImage: product.image}
                                alt=""/>
                        </div>
                        <div className="col col-md-5 product-details">
                            <div className="name">
                                {product.name}
                            </div>
                            <div className="desc">
                                Производство: api не рассказывает
                                <br/>
                                Компания: бекендер не выдал
                                <br/>
                                Доставка: на усмотрение бекендера
                            </div>
                            <div className="actions">
                                <button className="btn btn-accent-light">
                                    <i className="fa fa-heart"/>
                                    &nbsp; В избранное
                                </button>
                                <button className="btn btn-accent">
                                    <i className="fa fa-cart-plus"/>
                                    &nbsp; В корзину
                                </button>
                            </div>
                        </div>
                        <div className="col col-md-3"></div>
                    </div>
                </div>
            )
        }
        else{
            return (
            <div>
                404 продукт не найден
            </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsList
    }
}

export default connect(mapStateToProps, {loadProduct})(Details)