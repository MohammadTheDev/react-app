import React from "react";

export default function FooterItem({ title, children }) {
  return (
    <div className="col-12 2xl:!w-2/6">
      <div className="footer-widgets__item">
        <span className="footer-widgets__title">
          {title}
          {children}
        </span>
      </div>
    </div>
  );
}
