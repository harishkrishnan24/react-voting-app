class ProductList extends React.Component {
  render() {
    const products = Data.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map(product => (
      <Product
        key={"Product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitter_avatar_url}
        productImageUrl={product.product_image_url}
      />
    ));
    console.log("sds");
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
            <div className="description">
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
