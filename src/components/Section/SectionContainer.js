import React, { Component } from "react";
import Section from "./Section";

class SectionContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { section, addToCart } = this.props;
    const { loading } = this.state;

    return (
      <Section addToCart={addToCart} section={section} loading={loading} />
    );
  }
}

export default SectionContainer;
