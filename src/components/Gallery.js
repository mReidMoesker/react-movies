function Gallery(props) {
  return (
    <div className="gallery poppins flex">
      {props.images.map((url, index) => (
        <img key={index} src={url} alt={`Gallery item ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;