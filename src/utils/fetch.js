const url = 'http://localhost:3001/v2/api/news';

const fetchAll = () => {
    try {
        fetch(url)
            .then(result => {
                return result.json();
            })
    } catch (e) {
        console.error(e);
    }

    
}
export default fetchAll();

