import React, { PureComponent } from "react";
// import { Document, Page } from "react-pdf";
import throttle from "lodash.throttle";
import pdf from "./django.pdf";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page : {
        width : 100
    }
});

class pdfViewer2 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {width: null}
  }

  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount () {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  render() {
    return (
      <div id="row" style={{height: "100vh", width: "100vw", display: "flex", overflow: "hidden"}}>
        <div id="placeholderWrapper" style={{width: "10vw", height: "100vh"}}/>
        <div id="pdfWrapper" style={{width: "90vw"}} ref={(ref) => this.pdfWrapper = ref}>
          <PdfComponent wrapperDivSize={this.state.width} />
        </div>
      </div>
    )
  }
}

class PdfComponent extends PureComponent {
  render() {
    return (
      <div>
        <Document
          style={styles.page}
          file={pdf}
        >
          <Page size="A4" pageIndex={1} width={this.props.wrapperDivSize} />
        </Document>
      </div>
    )
  }
}

export default pdfViewer2;