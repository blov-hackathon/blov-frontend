import React, { Component } from "react";
import styled, { css } from "styled-components";

const NFTstyle = {
    height: "500px",
    width: "300px",
    border: "solid 3px red",
};

class NFT extends React.Component {
    // function
    render() {
        return (
            <div style={NFTstyle}>
                <div>인천멋사혈액원</div>
                <div>전혈 320ML</div>
                <div>01-23-456789</div>
            </div>
        );
    }
}
export default NFT;
