import { useEffect, useState } from "react"

import {customerTable} from "../utilities/database.config";

const IDBVersion = 1
const IDBName = "foodmart"
const shoppingCartDB = "shopping-cart"


function openDatabase() {
	let db;
	const indexedDBOpenRequest = indexedDB.open(IDBName, IDBVersion)
	indexedDBOpenRequest.onerror = (err) => console.log("Error opening IndexedDB", err);
	indexedDBOpenRequest.onupgradeneeded = (evt:IDBVersionChangeEvent) => {
		db = evt.target

		const shoppingCartObjectStore = db.createObjectStore(shoppingCartDB, { autoIncrement: true, keyPath: 'id'})
		shoppingCartObjectStore.createIndex('cart1', 'cart1', { unique: false})
	}
	indexedDBOpenRequest.onsuccess = () => {
		console.log("Database opened successfully");
		db = indexedDBOpenRequest.result;
	}
	return db
}


export function useIndexedDBStorage<T>(key: string, initialValue: T | (() => T)) {
	const [value, setValue] = useState<T | []>([])
	
	useEffect(() => {
		
		
	}, [key, value])

	return [value, setValue] as [typeof value, typeof setValue]
}
