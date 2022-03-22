import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecordVinyl,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

class SideNav extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="side-nav">
          {/* left most is first here */}
          <FontAwesomeIcon className="icons" icon={faRecordVinyl} size="xs" />

          <Link href="/vinyl">
            <a>
              <FontAwesomeIcon
                className="icons"
                icon={faRecordVinyl}
                size="xs"
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FontAwesomeIcon
                className="icons house"
                icon={faHouseChimney}
                size="s"
              />
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideNav;
