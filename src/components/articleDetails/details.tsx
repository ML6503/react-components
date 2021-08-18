import React, { useEffect, useState } from "react";
import {  useLocation, useParams, useRouteMatch } from "react-router-dom";
import { Article,  NewsPageProps } from '../../utils/interface';
import './details.css';

// const Details = ({dataApi, setDataApi} : NewsPageProps)  => {
    const Details = ()  => {
    const articleId = useParams<{ id: string }>();

    const location = useLocation();
    console.log('article ID from params arr', articleId);
    let str =  articleId.id.split(" ").reverse()[0];
    let utcDate =  str.substr(str.indexOf("$") + 1);
    console.log('publishedAt', utcDate);
    // console.log('articles', dataApi);
    const getTitle = () => articleId.id.split("$2", 1);
    const getDate = () =>  {
       
        let date = new Date(utcDate).toString().split(" ", 4).join(' ');
        return date;
    };

    useEffect(() => {
        // Fetch single product here
       
      }, []);

    return (
        <section className="article-details">
            {/* <div>Product: {articleId}</div>; */}
            <h2>{getTitle()}</h2>
            <p>published on : {getDate()}</p>
           
        </section>
    );
};

export default Details;
