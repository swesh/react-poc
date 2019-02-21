import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import styles from './ProductsComponent.css';

class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: [
                {
                    id: 1,
                    name: "Item One",
                    description:
                        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    status: "Available"
                },
                {
                    id: 2,
                    name: "Item Two",
                    description: "sunt aut facere ptio reprehenderit",
                    status: "Not Available"
                },
                {
                    id: 3,
                    name: "Item Three",
                    description: "provident occaecati excepturi optio reprehenderit",
                    status: "Available"
                },
                {
                    id: 4,
                    name: "Item Four",
                    description: "reprehenderit",
                    status: "Not Available"
                }
            ]
        };
    }

    render() {
        let pList = this.state.productsData.map(product => {
            return (
                <li className="list-group-item" key={product.id}>
                    <Link to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
                </li>
            );
        });
        return (
            <div>
                <h1 className="text-info">Products Component</h1>
                <div>
                    <div className={styles.graybox}>
                        <ul className="list-group">
                            {pList}
                        </ul>
                    </div>
                </div>

                <Route exact path={`${this.props.match.url}/:productId`} render={
                    (props) => {
                        return <ProductDetailsComponent data={this.state.productsData} {...props} />
                    }
                } />

                <Route exact path={this.props.match.url} render={
                    () => (
                        <div className={styles.outerdiv}>
                            <div className={styles.innerdiv}>
                                <h3 className="text-warning">Please select a product</h3>
                            </div>
                        </div>
                    )
                } />
            </div>
        );
    }
}

// var obj = { id: 1, name: "Manish", city: "Pune" };
// var id = obj.id;
// var { id, city } = obj;

const ProductDetailsComponent = ({ data, match }) => {

    let product = data.find(p => p.id == match.params.productId);
    let productView;

    if (product) {
        productView = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        );
    } else {
        productView = (<h3 className="text-danger">Product not Found...</h3>);
    }

    return (
        <div className={styles.outerdiv}>
            <div className={styles.innerdiv}>
                {productView}
            </div>
        </div>
    );
}

export default ProductsComponent;