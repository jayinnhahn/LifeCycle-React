
import React from "react";

interface PostProps {
	title: string;
	body: string;
}

const Post: React.FC<PostProps> = ({title, body}) => {
  return (
    <div className="p-4 bg-white border-2 rounded-lg shadow-md p-8 text-center">
        <h4 className="font-bold text-[2.5rem] text-left"> {title} </h4>
        <p className="font-light text-[1rem] w-auto flex flex-wrap text-justify"> {body} </p>
    </div>
  );
};

export default Post
