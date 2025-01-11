import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "./Button";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
      <ArrowLeft size={16} />
      Back
    </Button>
  );
};

export default BackButton;