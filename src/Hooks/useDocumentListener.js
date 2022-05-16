import {doc, onSnapshot} from "firebase/firestore";
import {firestore} from "../index";
import {useEffect} from "react";

const useDocumentListener = (collection, document, callback) => {
    useEffect(() => {
        onSnapshot(doc(firestore, collection, document), (doc) => {
            callback(doc.data())
        });
    }, [])

};

export default useDocumentListener;