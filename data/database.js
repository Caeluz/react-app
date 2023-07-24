// database.js
import data from '../data/data.json'; // Assuming data.json is in the data folder relative to the current file

export const getUsers = () => data.users;
export const getUserById = (id) => data.users.find((user) => user.id === id);
export const getProducts = () => data.products;
export const getProductById = (id) => data.products.find((product) => product.id === id);
