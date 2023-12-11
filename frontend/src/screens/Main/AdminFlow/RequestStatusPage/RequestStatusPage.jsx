import React, { useState } from "react";
import RequestStatusBar from "../../../../components/RequestStatusBar";
import AdminNavBar from "../../../../components/AdminNavBar";
import RequestStatusProjectInformation from "../RequestStatusProjectInformation";
import OriginalRequest from "../OriginalRequest";
const RequestStatusPage = () => {
  const [activeTab, setActiveTab] = useState(0); // '0' corresponds to the "Admin Page" tab

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
      {/*<AdminNavBar activeTab={activeTab} onChangeTab={handleTabChange} />*/}
      <RequestStatusBar status={2} />
      <RequestStatusProjectInformation />
      <OriginalRequest />
    </>
  );
};

export default RequestStatusPage;
