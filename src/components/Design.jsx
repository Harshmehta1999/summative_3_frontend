import React, { Component } from 'react'
import GlobalNav from './GlobalNav'
import Axios from "axios";
import * as UTILS from "../utils";


export default class Design extends Component {
    constructor(props) {
        super(props);
        
        this.state = { design:[] };
        
      }

      componentDidMount(){
        Axios.get(UTILS.category_design_url).then(
          res => {
            if (res.data.result === false) {
              this.setState({ result: false });
            } else {
              console.table(res.data)
              this.setState({design: res.data, result: true });
            }
          },
     
        );
        
      }
    
    render() {
        return (
            <React.Fragment>
                <GlobalNav />
                    {this.state.design.map((design, i) => {
      return <h2> key={i} design price= {design.price}<br></br></h2>
  

    })}
            </React.Fragment>
           
        )
    }
}
