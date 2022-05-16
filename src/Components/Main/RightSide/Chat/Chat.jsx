import React, {useEffect, useRef, useState} from 'react';
import UseInput from '../../../../Hooks/useInput';
import MyInput from '../../../../UI/MyInput/MyInput';
import cl from "./Chat.module.css";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Loader from '../../../../UI/Loader/Loader';
import {firestore} from "../../../../index";
import {getDocument, setDocument} from "../../../../utils/functions";
import SendButton from "../../../../UI/SendButton/SendButton";
import ChatItem from "./ChatItem/ChatItem";
import useDocumentListener from "../../../../Hooks/useDocumentListener";

const Chat = ({user, currentUser, theme}) => {
    const {bind, clear} = UseInput('');
    const [personalMessages, setPersonalMessages] = useState([]);
    const prevInputValue = useRef(bind.value);
    useEffect(() => {
        console.log("work");

        async function getMessages() {
            const messages = await getDocument("messages", `${user.uid} ${currentUser.uid}`);
            setPersonalMessages(messages);
        }
        getMessages();
    }, [currentUser.uid, user.uid]);

    useDocumentListener("messages", `${user.uid} ${currentUser.uid}`, (data) => setPersonalMessages(data) );

    const [loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );

    async function addMessage() {
        if (bind.value) {
            const data = (personalMessages) ? personalMessages.data : [];
            prevInputValue.current = bind.value;
            clear();
            await setDocument("messages", `${user.uid} ${currentUser.uid}`, {
                data: [...data,
                    {
                        message: [prevInputValue.current],
                        user: {
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                        }
                    }
                ]
            });
            await setDocument("messages", `${currentUser.uid} ${user.uid}`, {
                data: [...data,
                    {
                        message: [prevInputValue.current],
                        user: {
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                        }
                    }
                ]
            });
        }
    }
    if (loading) return <Loader/>;
    return (
        <div className={cl.container}>
            <div className={cl.Chat}>
                {
                    (personalMessages) ? personalMessages.data.map((obj, index) => <ChatItem theme={theme} key={index} message={obj.message} user={user} sender={obj.user}/>) : <span></span>
                }
                <form   action="" onSubmit={(e) => e.preventDefault()} className={`${cl.Chat__form} ${cl[theme]}`}>
                    <MyInput style={{marginRight: 10}} type="text" {...bind}></MyInput>
                    <SendButton onClick={addMessage}/>
                </form>
            </div>
        </div>
    );
};

export default Chat;