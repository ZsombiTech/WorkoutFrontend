import React, { useState } from "react";
import Table from "./Table";
import axios from "axios";

export default function Diet() {
  const [name, setName] = useState<string>();
  const [calories, setCalories] = useState<number>();
  const [amount, setAmount] = useState<number>();

  const handleAdd = () => {
    const username = localStorage.getItem("displayName");
    const addfood = {
      username: username,
      foodname: name,
      calories: calories,
      amount: amount,
    };

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .post("http://workoutbackendd.herokuapp.com/addtable", addfood, config)
      .then((response) => {
        window.location.reload();
      });
    window.location.reload();
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleCalories = (event: any) => {
    setCalories(event.target.value);
  };

  const handleAmount = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <div className="ran">
      <h1 className="profiletitle">What did I eat?</h1>
      <div className="profilebox5">
        <Table />
      </div>
      <div className="profilebox5">
        <div className="profileflexbox4">
          <div className="profiletext2">
            <h1 className="profiletitle">Add meal</h1>
            <br />
          </div>
        </div>
        <hr />
        <div className="flexbuttons5">
          <input
            type="text"
            placeholder="Food name"
            className="stepinput foodinput"
            value={name}
            onChange={handleName}
          />
          <input
            type="text"
            placeholder="Calories"
            className="stepinput foodinput"
            value={calories}
            onChange={handleCalories}
          />
          <input
            type="text"
            placeholder="Amount"
            className="stepinput foodinput"
            value={amount}
            onChange={handleAmount}
          />
          <button className="stepbutton" onClick={handleAdd}>
            Add
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
