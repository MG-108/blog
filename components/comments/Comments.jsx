import { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        <div className="bg-white dark:bg-secondary-dark-bg shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 dark:text-white">
            {comments.length} Comentários
          </h3>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border-b border-gray-100 mb-4 pb-4 dark:text-white"
            >
              <p className="mb-4">
                <span className="font-semibold text-orange-500 pr-2">
                  {comment.name}
                </span>{" "}
                no dia {moment(comment.createdAt).format("DD/MM/YYYY")}
              </p>
              <p className="whitespace-pre-line dark:text-white w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Comments;
