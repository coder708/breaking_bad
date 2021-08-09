import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagi">
      {pageNumbers.map((number) => (
        <div key={number} className="page_item">
          <a onClick={() => paginate(number)} href="!#" className="page_link">
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
