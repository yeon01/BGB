import { useEffect } from "react";
import { withRouter } from "react-router-dom";

    const ScrollTop = ({ children, location: { pathname } }) => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }, [pathname]);

      return children || null;
    };

export default withRouter(ScrollTop);
