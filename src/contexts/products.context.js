import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.util";


export const ProductsContext = createContext({
	products: [],
	setProducts: () => null
})

export const ProductProvider = ({ children }) => {

	const [ products ] = useState([]);	


	const value = { products }

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}