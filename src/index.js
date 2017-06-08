/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React,{Component} from 'react';
import {Circle} from 'rc-progress';
import './style.scss'
export default class extends Component{
    static defaultProps = {
        width:200,
        height:200
    }
    render(){
        let {height,width} = this.props;
        return(
            <div className="nx-loading">
                <div className="nx-loading-circle" style={{height,width}}>
                    <p style={{height:height+7,width:width+7}}/>
                </div>
                <div className="dx-icon">
                    <img src={require("./assert/loading.svg")} />
                </div>
            </div>
        )
    }
}
