export const fetchMovies = async (moviename) => {
    return axios.get(`${APIENDPOINT}&s=${moviename}`);
}

export const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 5; i++) {
        products.push(`Product ${i + 1}`);
    }
    return products;
}
export const filterProducts = (filterTerm) => {
    if (!filterTerm) {
        return generateProducts();
    }
    return generateProducts().filter((product) => product.includes(filterTerm));
}