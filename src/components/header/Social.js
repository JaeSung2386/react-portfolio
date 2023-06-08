import React from "react";

function Social() {
  const SOCIAL_ICONS = [
    { code: "Tistory", icon: "", link: "" },
    { code: "WordPress", icon: "", link: "" },
    { code: "GitHub", icon: "", link: "" },
    { code: "LinkedIn", icon: "", link: "" }
  ];
  return (
    <ul>
      {SOCIAL_ICONS.map((item, index) => {
        return (
          <li key={index}>
            <a href="#">{item.code}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
