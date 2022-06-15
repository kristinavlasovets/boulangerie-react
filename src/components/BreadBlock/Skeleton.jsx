import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    className="bread-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="441" rx="3" ry="3" width="97" height="14" />
    <rect x="8" y="332" rx="3" ry="3" width="258" height="67" />
    <rect x="29" y="18" rx="3" ry="3" width="211" height="7" />
    <circle cx="136" cy="171" r="109" />
    <rect x="147" y="419" rx="0" ry="0" width="119" height="37" />
  </ContentLoader>
);
