import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";
const PaginationComponent = (props) => {
  const { maxnum, activenum, handleClick } = props;
  const forcePageActive =
    activenum && !isNaN(activenum) ? parseInt(activenum) - 1 : 0;
  const handlePageClick = (e) => {
    const pageNo = e?.selected !== undefined ? e.selected + 1 : 1;

    if (!pageNo || isNaN(pageNo) || pageNo < 1) return;

    handleClick(pageNo);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="paginationWap">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={maxnum}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
          forcePage={forcePageActive}
        />
      </div>
    </>
  );
};

export default PaginationComponent;
