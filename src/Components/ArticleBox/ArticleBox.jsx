import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleSpinner from "../CircleSpinner/CircleSpinner";

export default function ArticleBox(props) {
  const [isImgShow, setIsImgShow] = useState(false);

  const onImageLoaded = () => setIsImgShow(true);

  return (
    <div className="col-12 2xl:w-2/6">
      <div className="article-card my-12 mx-0 transition-all duration-400 ease-in-out rounded-2xl shadow-lg hover:-translate-y-6">
        <div className="article-card__header">
          <Link
            to={`/article-info/:${props.articleName}`}
            // className="article-card__link-img"
          >
            <img
              src={props.cover}
              className="rounded-t-lg"
              alt="Article Cover"
              onLoad={onImageLoaded}
            />
            {!isImgShow && <CircleSpinner />}
          </Link>
        </div>
        <div className="pt-4 pb-12 px-8">
          <a href="#" className="font-bold">
            {props.title}
          </a>
          <p className="text-[#898989] text-xl pt-4 pb-10 px-0">{props.desc}</p>
          <Link
            to={`/article-info/:${props.articleNameF}`}
            className="text-text border-0.5 border-solid border-accent text-5 py-2 px-4 rounded-2 transition-all duration-400 ease-in-out hover:text-[#fff] hover:bg-secondary"
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
}
