import React, { Component } from 'react';
import './List.css'

class List extends Component {
    render() {
        return (
            <tr className="__TableRow">
                <td className="col-md-3 __Name">{this.props.name}</td>
                <td className="col-md-3 __Number">{this.props.price.toFixed(4)}</td>
                {this.props.percent < 0 ? <td className="col-md-3 __Red __Number">{this.props.percent.toFixed(4)}</td> : 
                this.props.percent === 0 ?<td className="col-md-3 __Number">{this.props.percent.toFixed(4)}</td> : <td className="col-md-3 __Green __Number">{this.props.percent.toFixed(4)}</td>}
                <td className="col-md-3 __Number">{this.props.volume.toFixed(4)}</td>
            </tr>
        );
    }
}

export default List;
