import React from 'react';
import PDF from 'react-pdfjs';
// import file from '../pdf/Amigossauro_RioContentMkt.pdf';
// import file from '/upload-folder/Amigossauro_RioContentMkt.pdf';

class Apresentacao extends React.Component {
  state = {
    currentPage: 2,
    pages: 0
  }

  prevPage = (ev) => {
    ev.preventDefault();
    this.setState({
      currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
    });
  }

  nextPage = (ev) => {
    ev.preventDefault();
    this.setState({ currentPage: this.state.currentPage < this.state.pages ? this.state.currentPage + 1 : this.state.pages });
  }

  onFileChange = (ev) => {
    this.setState({
      file: ev.target.files[0]
    });
  }

  _onDocumentComplete = (pages) => {
    this.setState({pages: pages});
  }

  render() {
    return (
      <div className="text-center">
        <br/>
        <br/>
        <h1>Apresentação = &lt;3</h1>
        <div style={{marginBottom: '80px'}}>
          <PDF
            style={{maxWitdh: '100%'}}
            page={this.state.currentPage}
            file={'/upload-folder/Amigossauro_RioContentMkt.pdf'}
            onDocumentComplete={this._onDocumentComplete}
          />
        </div>

        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around'}}>
            <div style={{witdh: '500px'}}>
              <div onClick={this.prevPage} className="owl-prev" style={{cursor: 'pointer', marginRight: '100px'}}>&lt;</div>

              <div onClick={this.nextPage} className="owl-next" style={{cursor: 'pointer', marginLeft: '100px'}}>&gt;</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Apresentacao;
