import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFishFins } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="ontainer mx-auto px-2 mb-8">
      <div className="border-b w-full inline-block border-white-400 pt-6 pb-0">
        <div className="md:float-left block">
          <p>
            <span className="cursor-pointer font-bold text-4xl text-white">
              fishEnthusiast
            </span>
          </p>
        </div>
        <div className="hidden md:float-left md:contents">
          <span className="pb-1 md:float-right mt-2 ml-4 mb-0">
            <FontAwesomeIcon
              icon={faFishFins}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
