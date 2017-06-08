/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React, {Component} from "react";
import Loading from '../src/index'
export default class DemoContainer extends Component{
    render(){
        return (
            <div style={{height:200,width:200}}>
                <Loading />
            </div>
        )
    }
}
