function Headings({ children, aria, style }) {
  return (
    <div className="heading-secondary-box" aria-labelledby={aria}>
      <h2 className="heading-secondary" style={style}>
        {children}
      </h2>
    </div>
  );
}

export default Headings;
