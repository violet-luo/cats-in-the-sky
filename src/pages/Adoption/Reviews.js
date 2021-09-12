import React from "react";
import classes from "./Reviews.module.css";
import downIcon from "../../images/down.png";

const Reviews = ({ reviews, handleOpen }) => {
  const renderReviews = () => {
    return reviews.map((review) => {
      const open = review.open;
      return (
        <div className={classes.review} key={review.title}>
          <p>
            Poster by <strong>{review.postedBy}</strong>
          </p>
          <p>{review.createdAt}</p>
          <p className={classes.titleLine}>
            <span>{review.title}</span>
            {/* rotate the downward arrow if expand the review */}
            <img
              src={downIcon}
              alt=""
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              onClick={() => handleOpen(review)}
            />
          </p>
          {/* expand the review */}
          <p style={{ display: open ? "block" : "none" }}>
            <small>{review.body}</small>
          </p>
        </div>
      );
    });
  };
  return (
    <div className={classes.Reviews}>
      <h1>Reviews</h1>
      {/* in case review is N/A */}
      <div className={classes.reviewList}>
        {reviews.length > 0 ? renderReviews() : "No Reviews"}
      </div>
    </div>
  )
};

export { Reviews };
