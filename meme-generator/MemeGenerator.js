import React, { Component } from "react";
import TextForm from "./TextForm";
import CurrentImage from "./CurrentImage";
import MemeLibrary from "./MemeLibrary";

class MemeGenerator extends Component {
  state = {
    userText: "",
    allImages: [],
    currentImage: "",
    allEdits: []
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(output => {
        this.setState({
          allImages: output.data.memes
        });
      })
      .catch(err => console.log(err));
  }

  onSaveMeme = e => {
    e.preventDefault();

    const canv = document.getElementById("imageCanvas");
    // Canvas2Image.saveAsPNG(canv);

    var image = canv
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.location.href = image;
  };

  handleTextChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // collected from studyJS:  http://www.studyjs.com/canvas/image.html
  calculateAspectRatio = function(image) {
    let canvas = document.getElementById("imageCanvas");

    let imageAspectRatio = image.width / image.height;
    let canvasAspectRatio = canvas.width / canvas.height;
    let renderableHeight, renderableWidth, xStart, yStart;
    let AspectRatio = {};

    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = image.width * (renderableHeight / image.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    }

    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = image.height * (renderableWidth / image.width);
      xStart = 0;
      yStart = (canvas.width - renderableHeight) / 2;
    }

    //keep aspect ratio
    else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }
    AspectRatio.renderableHeight = renderableHeight;
    AspectRatio.renderableWidth = renderableWidth;
    AspectRatio.startX = xStart;
    AspectRatio.startY = yStart;
    return AspectRatio;
  };

  loadImageInCanvas = event => {
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = event ? event.target.src : this.state.currentImage.src;
    img.crossOrigin = "Anonymous";
    img.addEventListener("load", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // from studyJS
      let AR = this.calculateAspectRatio(img);
      ctx.drawImage(
        img,
        AR.startX,
        AR.startY,
        AR.renderableWidth,
        AR.renderableHeight
      );
    });
  };

  handleImgClick = e => {
    this.setState({ currentImage: e.target });

    this.loadImageInCanvas(e);
  };

  getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  handleText(e) {
    const canv = e.target;

    const ctx = canv.getContext("2d");
    const pos = this.getMousePos(canv, e);

    ctx.font = "800 40px Impact, Arial";
    ctx.fillStyle = "#433487";
    ctx.fillText(this.state.userText, pos.x, pos.y);

    this.setState(ps => {
      ps.allEdits.push({
        posX: pos.x,
        posY: pos.y,
        text: this.state.userText
      });
      return ps;
    });
  }

  addTextToCanvas = e => {
    e.preventDefault();
    this.handleText(e);
    this.setState({ userText: "" });
  };

  removeLastText = e => {
    e.preventDefault();
    const canv = document.getElementById("imageCanvas");
    const ctx = canv.getContext("2d");

    this.setState(ps => {
      ps.allEdits.pop();
      return ps;
    });
    this.loadImageInCanvas(false);

    setTimeout(() => {
      ctx.font = "800 40px Impact, Arial";
      ctx.fillStyle = "#433487";
      this.state.allEdits.forEach(edit => {
        ctx.fillText(edit.text, edit.posX, edit.posY);
      });
    }, 200);
  };

  render() {
    return (
      <div className="meme-generator">
        {/* form for text */}
        <div className="top-container" id="top-container">
          <TextForm
            removeLastText={this.removeLastText}
            userText={this.state.userText}
            handleTextChange={this.handleTextChange}
            onSaveMeme={this.onSaveMeme}
          />

          {/* current working image */}
          <CurrentImage
            currentImage={this.state.currentImage}
            addTextToCanvas={this.addTextToCanvas}
          />
        </div>
        <hr />

        {/* all meme images */}
        <MemeLibrary
          allImages={this.state.allImages}
          handleImgClick={this.handleImgClick}
        />
      </div>
    );
  }
}

export default MemeGenerator;
