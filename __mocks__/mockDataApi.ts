import { AppDispatch, store } from '../../src/redux/store';

import {
    getArticlesSuccess,
  } from '../../src/redux/articlesSlice';
import { DataApi } from '../../src/utils/interface';

export const mockDataApi: DataApi = {
    status: "ok",
    totalResults: 2, 
    articles: [
    {
        author: "Michele Kambas",
        content: "NICOSIA, Aug 23 (Reuters) - The government of Cyprus...",
        description: "The government of Cyprus said on Monday it would revoke the passports from Turkish Cypriot officials in the breakaway state in the northern part of the island.",
        publishedAt: "2021-08-23T13:04:00Z",
        source: { id: 'Reuters', name: 'Reuters' },
        title: "Cyprus says to strip passports from Turk Cypriot officials - Reuters",
        url: "https://www.reuters.com/world/europe/cyprus-says-strip-passports-turk-cypriot-officials-2021-08-23/",
        urlToImage: "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50"
    },
    {
        author: "Tamara Hardingham-Gill, CNN",
        content: "(CNN) The artist behind the world's first underwater sculpture park has just unveiled his latest sub-aquatic project -- a spectacular sunken forest located off the coast of Pernera beach in Ayia Napa… ",
        description: "The Museum of Underwater Sculpture in Cyprus (Musan,) which cost €1 million ($1.1million) to bring to life, is made up of 93 sculptures by Jason deCaires Taylor, who aims to put the focus on 're-wilding our natural spaces' and 're-reforesting areas of barren …",
        publishedAt: "2021-08-17T09:02:48Z",
        source: { id: 'cnn', name: 'CNN' },
        title: "The underwater forest growing in the Med",
        url: "https://www.cnn.com/travel/article/inside-museum-of-underwater-sculpture-in-cyprus/index.html",
        urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/210811132427-06b-museum-of-underwater-sculpture-ayia-napa-restricted-super-tease.jpg"
    } 
] } ;


export const fetchArticles = jest.fn(() => {
    Promise.resolve(mockDataApi);
    // Promise.resolve({
    //     json: () => Promise.resolve(mockDataApi),
    // });
    // console.log('mock Data', mockDataApi);
    // (store.dispatch as AppDispatch)(getArticlesSuccess(mockDataApi));
    
});

// export const fetchArticles = (
//     urlQuery: string
//   )  => {
    
  
//     return async (dispatch: AppDispatch) => {
        
//       dispatch(getArticles());
  
//     return new Promise((resolve, reject) => {
//         process.nextTick(() => 
//         (mockDataApi as DataApi)
//         ? resolve(
//             dispatch(getArticlesSuccess(mockDataApi))) 
//             // ? resolve(() => {
//             //     if (mockDataApi.status === 'error') {
//             //         throw new Error((mockDataApi as DataApi).message);
//             //       }
//             //     dispatch(getArticlesSuccess(mockDataApi));
//             // }) 
//             : reject({
//                 error: 'API news server status: Not reachable',
//             })
//          );
//     });

//     };
//   };  