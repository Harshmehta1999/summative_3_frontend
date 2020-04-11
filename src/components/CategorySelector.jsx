import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import SubNav from "./SubNav";
import "../css/addartwork.css"

export default class CategorySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], selected_id: null };
    this.writer_id = null;
  }

  componentDidMount() {
    Axios.get(UTILS.categories_url).then(
      res => {
        this.setState({ categories: res.data });
        console.log(res.data);
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <SubNav />

        <div>
          <select id="lang" onChange={this.props.onCategoryUpdated}>
            {this.state.categories.map((writer, i) => {
              let fullname = `${writer.category_title} ${writer.cat_id}`;
              return (
                <option key={i} value={writer.cat_id}>
                  {fullname}
                </option>
              );
            })}
          </select>
          <p></p>
          <p>{this.state.value}</p>
        </div>
      </React.Fragment>
    );
  }
}
