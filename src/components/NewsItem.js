import React from "react";

export default function NewsItem(props) {
  let { imgUrl, img, title = "", description = "" } = props;
  return (
    <div className="container mt-5">
      <div className="card" style={{ height: "25rem" }}>
        <img
          src={img}
          style={{ height: "12rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title"
            style={{
              height: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </h5>
          <p
            className="card-text"
            style={{
              height: "4rem",
              // overflow: "hidden",
              textOverflow: "ellipsis",
              paddingbottom: "2px",
            }}
          >
            {description && description.length >100
              ? description.substring(0, 105) + "..."
              : description}
          </p>
          <a href={imgUrl} target="blank" className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
