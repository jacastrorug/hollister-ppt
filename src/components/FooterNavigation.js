import React from "react";
import { Link } from "gatsby";

const FooterNavigation = (props) => {
  const { left, right, leftLight, rightLight, backgroundDark } = props;
  return (
    <footer id="footer" className="footer-navigation">
      <div>
        {left && (
          <Link to={left} className="link-navigation left-arrow">
            <i className="fas fa-arrow-left fa-2x" />
          </Link>
        )}
        {right && (
          <Link to={right} className="link-navigation right-arrow">
            <i className="fas fa-arrow-right fa-2x" />
          </Link>
        )}
      </div>
    </footer>
  );
};

export default FooterNavigation;
