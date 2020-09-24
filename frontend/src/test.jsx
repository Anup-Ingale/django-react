import React, { PureComponent } from 'react'

class Test extends PureComponent {
    constructor(pros)  {
        super(pros);
        console.log(pros);
        
    }
  

    render() {
        return (
            <div className="row">
                <div className="card">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/41InI9VbIiL._SX395_QL70_ML2_.jpg" alt=""/>
                </div>
                <div className="column">
                    <div className="title">
                        {this.props.name}
                    </div>
                    <div className="price">
                        ₹199.0
                    </div>
                </div>
            </div>
        )
    }
}

export default Test