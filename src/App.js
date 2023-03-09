import { useState } from 'react';
import React from "react";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="8" />
        <Square value=" " />
        <Square value="4" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="6" />
        <Square value="5" />
      </div>
    </div>
  );
}