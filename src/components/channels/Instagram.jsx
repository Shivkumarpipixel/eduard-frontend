import React, { useState, useEffect } from "react";
import Loader from "../../components/common/Loader";

const channelUrl = import.meta.env.VITE_CHANNEL_URL;

const Instagram = () => {

  const [loading, setLoading] = useState(true);
  const workspaceId = localStorage.getItem("workspace_id");
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])

  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <Loader loading={loading} />
        {!loading && (
          <div className="w-full h-full">
            <iframe
              src={`https://${channelUrl}/${workspaceId}#/instagram`}
              title="Instagram"
              style={iframeStyle}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Instagram;
