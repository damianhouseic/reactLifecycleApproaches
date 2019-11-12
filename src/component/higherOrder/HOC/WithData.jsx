import React, { Component } from "react";

export const withData = config => WrappedComponent => {
  return class WithData extends Component {
    constructor(props, ctx) {
      super(props, ctx);
      this.state = {
        data: undefined,
        loading: true
      };
    }

    componentDidMount() {
      const { requestFunction } = config;
      this.setState({ loading: true });
      requestFunction().then(data => this.setState({ data, loading: false }));
    }

    renderLoading() {
      return <section>Loading...</section>;
    }

    renderData() {
      const { data } = this.state;
      return <WrappedComponent data={data} />;
    }
    render() {
      const { loading } = this.state;
      return loading ? this.renderLoading() : this.renderData();
    }
  };
};
