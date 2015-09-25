/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');
var assign = require('object-assign');

var ImageButton = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        image: React.PropTypes.string,
        onClick: React.PropTypes.func
    },
    getStyle() {
        var style = {
            cursor: "pointer",
            margin: 0,
            padding: 0,
            display: "inline-block"
        };
        if (this.props.image && this.props.image !== "") {
            assign(style, {
                overflow: "hidden"
            });
        } else {
            assign(style, {
                height: "48px",
                width: "48px",
                border: "1px solid grey",
                borderRadius: "4px",
                backgroundColor: "rgb(250, 250, 250)"
            });
        }
        return style;
    },
    render() {
        return (
            <div id={this.props.id} style={this.getStyle()} onClick={this.props.onClick}>
                <img src={this.props.image}></img>
            </div>
        );
    }
});

module.exports = ImageButton;