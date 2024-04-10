import React  from "react";
import './News';
const Newsitem = (props) => {
 

let { title, description, imageUrl, newsUrl, author, date, sources } =
   props;
  return (
    <div className="my-3" >
      <div className="card" style={{border:'none',boxShadow: '0px 0px 11px -3px rgba(0,0,0,0.75)', borderRadius:'10px'}}>
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
        <div className="card-body" style={{color: props.mode === 'dark' ? 'white' : '#042743',
                  backgroundColor: props.mode === 'dark' ? '#343a40e6' : 'white', borderRadius:'0px 0px 10px 10px'}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} ...</p>
          <p className="card-text text-left" >
            <small className={`text-body-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
              By <strong style={{color:'red'}}>{!author ? "Unknown" : author}</strong> on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className={`btn btn-sm btn-danger`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
