import React from 'react';
import './pagination.css';
import { PaginationsProps } from '../../utils/interface';

const MAX_ALLOWED_FREE_ARTICLES = 100; // NEWS API Regulation for free use

const Pagination: React.FC<PaginationsProps> = ({
  currentPage,
  setCurrentPage,
  linksArr,
  pageLinksNumber,
  inputValue,
  setInputValue
}: PaginationsProps): JSX.Element => {
  const MAX_ALLOWED_FREE_PAGES = Math.floor(
    MAX_ALLOWED_FREE_ARTICLES / inputValue
  );
  const ACTIVE_LINK_CLASS = 'active';

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = Number(e.target.value);
    setInputValue(newValue);
  };

  return (
    <div className="pagination-container flex-center">
      <nav className="pagination flex-center">
        <button
          type="button"
          onClick={() =>
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }
          className={currentPage === 1 ? 'prev disabled' : 'prev'}
        >
          Previous
        </button>
        <ol>
          {linksArr.map((l) => {
            const pageLink = l + 1;
            const classLink = pageLink === currentPage ? ACTIVE_LINK_CLASS : '';
            return (
              <li key={l} className={classLink}>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage(
                      pageLink >= MAX_ALLOWED_FREE_PAGES
                        ? MAX_ALLOWED_FREE_PAGES
                        : pageLink
                    )
                  }
                >
                  {pageLink}
                </button>
              </li>
            );
          })}
        </ol>
        <button
          type="button"
          onClick={() =>
            setCurrentPage(
              currentPage === MAX_ALLOWED_FREE_PAGES ||
                currentPage === pageLinksNumber()
                ? currentPage
                : currentPage + 1
            )
          }
          className={
            currentPage === pageLinksNumber() ||
            currentPage === MAX_ALLOWED_FREE_PAGES
              ? 'next disabled'
              : 'next'
          }
        >
          Next
        </button>
      </nav>

      <span className="articles-number flex-center">
        <label htmlFor="articlesNumber">articles / page: </label>
        <input
          type="number"
          id="articlesNumber"
          name="articlesNumber"
          value={inputValue}
          className="articles-number-input"
          min="6"
          max="20"
          step="2"
          onChange={onInputChange}
        />
      </span>
    </div>
  );
};

export default Pagination;
