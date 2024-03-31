const  express = require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");



//post review rought
router.post("/", validateReview, isLoggedIn,wrapAsync(reviewController.createReview));
    // delete review rought
    router.delete("/:reviewId", isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
    );
    module.exports=router;
    