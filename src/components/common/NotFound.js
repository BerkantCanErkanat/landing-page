import React from "react";
import {Button} from 'reactstrap'
import { useNavigate } from "react-router-dom";
export function NotFound() {
  const navigate = useNavigate();
  return (
    <div id="wrapper">
      <div id="info">
        <h3>This page could not be found</h3>
        <Button onClick={() =>navigate(`/`, { replace: true })}>Go Back Home</Button>
      </div>
      <img src="https://i.imgur.com/qIufhof.png" alt="xx" />
    </div>
  );
}
