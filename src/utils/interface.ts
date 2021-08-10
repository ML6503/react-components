export interface InputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export interface SearchProps {
    setDataApi: React.Dispatch<React.SetStateAction<string>>;
    currentPage: number;
    articlesOnPageNumber: number;
};

export interface PublishingSource {
    id: null | number;
    name: string;
};

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: PublishingSource;
    title: string;
    url: string;
    urlToImage?: string;
};

export interface DataApi {
    status: string;
    articles?: Array<Article>;
    totalResults?: number;  
    code?: string;
    message?: string;    
};

export interface ArticlesProps {
    dataApi: DataApi;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    articlesOnPageNumber: number;
    setArticlesOnPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export interface ArticleProps {
   article: Article;   
};

export interface PaginationsProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    linksArr: Array<number>;
    pageLinksNumber: () => number;
    inputValue: number;
    setInputValue: React.Dispatch<React.SetStateAction<number>>;
};