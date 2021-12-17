import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditActionButtons from "../../components/edit/EditActionButtons";
import EditContext from "../../context/EditContext";
import client from "../../libs/api/client";

const EditActionButtonContainer = () => {
  const { editInfo, setEditInfo } = useContext(EditContext);
  const navigate = useNavigate();

  const onPublish = async () => {
    const reponse = await client.post("/coktail", editInfo);
  };

  const onCancle = () => {
    navigate(-1);
  };

  return <EditActionButtons onPublish={onPublish} onCancle={onCancle} />;
};

export default EditActionButtonContainer;
