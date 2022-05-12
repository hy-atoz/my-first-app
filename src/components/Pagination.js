import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';

function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      nextLabel='Next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel='< Previous'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakLabel='...'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
