import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";


export const ProductsContext = createContext({
	products: [],
	setProducts: () => null
})

export const ProductProvider = ({ children }) => {

	const [ products ] = useState([]);	

	useEffect(() => {
		const getCatogoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};
		
		getCatogoriesMap();
	}, []);


	const value = { products }

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}