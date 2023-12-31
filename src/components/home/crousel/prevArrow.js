const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, background: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={onClick}
      >
  
      </div>
    )
  }
  
  export default PrevArrow