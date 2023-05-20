import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useEffect,useState } from "react";


function DirectMessaging() {
  const [userName, setUserName] = useState();

  const fetchUser = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserName(data.name);
      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  
	if(userName){
        return <ChatEngine
		projectID="5ac9e3eb-4882-405f-a2d7-da68e9068f99"
		userName={userName}
		userSecret="secret@123"
	  />
	}
    return null;

}

export default DirectMessaging;
