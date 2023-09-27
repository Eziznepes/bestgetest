"use client";

export default function Wrapper({ children, id }) {
  return (
    <div className="wrapper big" id={id}>
      <div className="auto__container">
        <div className="wrapper__inner">{children}</div>
      </div>
    </div>
  );
}
