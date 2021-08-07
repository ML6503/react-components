export interface InputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export interface SearchProps {
    setDataApi: React.Dispatch<React.SetStateAction<string>>;
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
    urlToImage: string;
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
};