import React from 'react';

export interface InputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface InputDateProps {
  inputDateValue: string;
  setInputDateValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchProps {
  currentPage: number;
  articlesOnPageNumber: number;
}

export interface PublishingSource {
  id: string;
  name: string;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: PublishingSource;
  title: string;
  url: string;
  urlToImage?: string;
}

export interface DataApi {
  status: string;
  articles?: Array<Article>;
  totalResults?: number;
  code?: string;
  message?: string;
}

export interface ArticlesProps {
  dataApi: DataApi;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  articlesOnPageNumber: number;
  setArticlesOnPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface ArticleProps {
  article: Article;
  articles?: Array<Article>;
}

export interface PaginationsProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  linksArr: Array<number>;
  pageLinksNumber: () => number;
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface SortBySelectProps {
  key: string;
  id: string;
  sortValue: string;
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
  selectOptions: Array<string>;
}

export interface NavLinkProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

export interface RouteInterface {
  path: string;
  name: string;
  Component:
    | React.FC<{
        dataApi?: DataApi;
        setDataApi?: React.Dispatch<React.SetStateAction<string>>;
      }>
    | (() => JSX.Element);
  exact: boolean;
}

export interface StateInterface {
  dataApi: DataApi;
  isLoading: boolean;
  errorHttp: null | string;
}

// export interface NewsPageProps {
export interface ApiGlobalProps {
  dataApi: DataApi;
  setDataApi: React.Dispatch<React.SetStateAction<string>>;
}

export interface DetailsLocationState {
  title: string;
  publishedAt: string;
}

export interface ErrorProps {
  error: string;
}
