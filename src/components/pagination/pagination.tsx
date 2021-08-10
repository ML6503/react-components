import React from "react";
import './pagination.css';
import { PaginationsProps } from '../../utils/interface';

const MAX_ALLOWED_FREE_PAGES = 5; // NEWS API Regulation for free use

const Pagination: React.FC<PaginationsProps> = ({ currentPage, setCurrentPage, linksArr, pageLinksNumber}): JSX. Element => {
    const ACTIVE_LINK_CLASS = 'active';
    return (
    <div className="pagination-container flex-center">
        
    <nav className="pagination flex-center">
      <a onClick={() => setCurrentPage(currentPage > 1 ? currentPage -1 : currentPage)} className={currentPage === 1 ? 'prev disabled' : 'prev'}>Previous</a>
      <ol>
      {linksArr.map((l) => {
        let pageLink = l + 1;
        let classLink =  pageLink  === currentPage ? ACTIVE_LINK_CLASS : '';
        return (<li key={l} className={classLink}><a onClick={() => setCurrentPage(pageLink >= MAX_ALLOWED_FREE_PAGES ? MAX_ALLOWED_FREE_PAGES : pageLink )}>{pageLink}</a></li>);
      })}     
      </ol>
      <a onClick={() => setCurrentPage(currentPage === MAX_ALLOWED_FREE_PAGES || currentPage === pageLinksNumber()  ? currentPage : currentPage + 1)} className={currentPage === pageLinksNumber() || currentPage === MAX_ALLOWED_FREE_PAGES ? 'next disabled' : 'next'} >Next</a>
        </nav>

        <span className="articles-number flex-center">
            <label htmlFor="articlesNumber">articles / page: </label>
            <input type="number" id="articlesNumber" name="articlesNumber" className="articles-number-input" min="1" max="20" defaultValue="20" />
        </span>
  </div>);
};

export default Pagination;
