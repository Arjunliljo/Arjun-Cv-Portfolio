function SecondaryBtn({ hyper, children }) {
  if (hyper)
    return (
      <div className="btn-secondary-box">
        <a href={hyper} className="btn-secondary">
          {children}
        </a>
      </div>
    );

  return (
    <div className="btn-secondary-box">
      <button className="btn-secondary">{children}</button>;
    </div>
  );
}

export default SecondaryBtn;
