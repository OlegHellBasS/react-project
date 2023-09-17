import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating,stars}) => {
    return (
        <h6><span>IMDB</span> <StarRatings
            rating={rating}
            numberOfStars={stars}
            starDimension="15px"
            starSpacing="5px"
        /></h6>

    );
};

export {StarsRating};