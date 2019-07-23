import React from 'react';
import PropTypes from 'prop-types';

export default class Dragable extends React.Component{

    Drag =(e) =>{
        e.dataTransfer.setData('transfer',e.target.id);

    }

noAllowDrop =(e) =>{
e.stopPropagation();
}

    render(){
        return(
            <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
            {this.props.children}
            </div>
        )
    }
}

Dragable.PropTypes={
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node
}