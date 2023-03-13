import React from 'react';
import ReactPaginate from "react-paginate";
import {MdArrowBack, MdArrowForward} from 'react-icons/md';
import s from './s.module.scss';

export const Pagination = ({currentPage, pageCount = 5, handlePageClick}) => {
  return (
      <div className={s.container}>
        <ReactPaginate
            className={s.pagination}
            previousClassName={s.prev}
            pageLinkClassName={s.item}
            breakLinkClassName={s.break}
            nextClassName={s.next}
            activeLinkClassName={s.active}
            breakLabel="..."
            previousLabel={<MdArrowBack className={s.icon}/>}
            nextLabel={<MdArrowForward className={s.icon}/>}
            onPageChange={event => handlePageClick(event.selected + 1)}
            pageRangeDisplayed={3}
            forcePage={currentPage - 1}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
        />
        <p>1 – 12 из 100+ вариантов аренды</p>
      </div>
  );
};