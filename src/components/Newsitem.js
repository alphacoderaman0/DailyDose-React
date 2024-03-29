import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, sources } =
   props;
  return (
    <div className="my-3">
      <div className="card ">
        <div
          style={{ display: "flex", justifyContent: "flex-end", right: "0" }}
        >
          <span className="position-absolute badge rounded-pill bg-danger">
            {sources}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.deccanherald.com/deccanherald%2F2024-03%2Fe691af5e-ada1-42a3-aff6-0ef47fe599af%2F2023newsmlRC2R3Z9A5CAK2115118513.jpeg?rect=0%2C0%2C3500%2C1838&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} ...</p>
          <p className="card-text text-left">
            <small className="text-body-secondary">
              By <strong>{!author ? "Unknown" : author}</strong> on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
