import React, { useEffect, useState } from "react";
// import Loader from "../components/common/Loader";

const LiveChat = () => {
  const [loading, setLoading] = useState(true);

  //get localstorage data of flowns
  // const flowns_id = localStorage.getItem("flow_ns");
  const flowns_id = "f101693";

  const chatUrl = `https://app.yoursupport.ai/flow/${flowns_id}#/livechat`;
  console.log(chatUrl);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* <Loader loading={loading} /> */}
      <div
        className="w-full h-full"
      >
        <div className="w-full h-full">
          <iframe className="w-full h-full" src={chatUrl} title="WebChat" />
        </div>
      </div>
    </>
  );
};

export default LiveChat;
