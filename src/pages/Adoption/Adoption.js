import React from "react";
import classes from "./Adoption.module.css";
import { Reviews } from "./Reviews";
import reviewsData from "../../Data.json";

const Adoption = () => {
  {/* load the reviews from data.json */}
  const [reviews, setReviews] = React.useState(reviewsData.data)

  {/* expand the reviews */}
  const handleOpen = (review) => {
    const newReviews = reviews.map((item) => {
      item.open = item.title === review.title ? !item.open : false;
      return item;
    })
    setReviews(newReviews)
  }

  return (
    <div className={classes.Adoption}>
      <div className={classes.introduction}>
        <h1>How to adopt a cat</h1>
        &nbsp;
        <p>
          Cats in the Sky is home for up to 20 cats. Our staff cares for the
          kitties day and night, and they stay with us until they find their
          Forever Homes. Since we opened in 2016, we have found homes for
          hundreds of cats.
        </p>
        &nbsp;
        <p>
          All of our cats are adoptable and most were pulled from the Animal Care
          & Control's "at-risk" list by our partner, Anjellicle Cats Rescue.
        </p>
        &nbsp;
        <p>
          If you're interested in adopting a cat, please email us or talk to our
          staff during your visit and we will help you through the process.
        </p>
      </div>
      <div className={classes.ReviewsWrapper}>
        <Reviews reviews={reviews} handleOpen={handleOpen} />
      </div>
    </div>
  )
};

export { Adoption };