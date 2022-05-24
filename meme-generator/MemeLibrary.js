import React from "react";

function getMemeImageElements(allImages, handleImgClick) {
  let imgStyles = {
    cursor: "pointer",
    width: "150px",
    height: "150px"
  };

  let memeImages;
  if (allImages) {
    memeImages = allImages.map(image => (
      <a key={image.id} href="#top-container">
        <img
          id={image.id}
          src={image.url}
          alt={image.name}
          style={imgStyles}
          onClick={handleImgClick}
        />
      </a>
    ));

    return memeImages;
  }
  return null;
}

function MemeLibrary(props) {
  const { allImages, handleImgClick } = props;

  const memeImages = getMemeImageElements(allImages, handleImgClick);

  return (
    <div id="meme-library-container">
      <h2>Meme Library</h2>
      <div className="meme-library">{memeImages}</div>
    </div>
  );
}

export default MemeLibrary;
