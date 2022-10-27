import { useState } from 'react';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log('Loaded');
        setPortfolio([])
        const getPortfolio = async () => {
            const response = await axios.get('http://localhost:4417/news');
            const data = response.data;

            // for (let i = 0; i < data.length; i++){
            //     let newArticle = {
            //         symbol: data[i]._id,
            //         name: data[i].name,
            //         crypto: data[i].crypto
            //     }
            //     let cloneArticles = articles;
            //     cloneArticles.push(newArticle);
            //     setPortfolio(cloneArticles);
            }
        };
    getPortfolio();
    }, [articles]);

    return (

    )
}

export default News;