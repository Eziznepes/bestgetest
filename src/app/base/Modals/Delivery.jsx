import React, { useState } from "react";
import Modal from "./Modal";
import { cancelIcon } from "../SVG";
import CustomSelect from "../CustomSelect";

const regionList = [
  {
    id: "1",
    image: "/images/netherlandsFlag.png",
    value: "Nederland",
  },
  {
    id: "2",
    image: "/images/netherlandsFlag.png",
    value: "Spain",
  },
  {
    id: "3",
    image: "/images/netherlandsFlag.png",
    value: "Italy",
  },
];

const stateList = [
  {
    id: "1",
    value: "Noord Holland",
  },
  {
    id: "2",
    value: "South Holland",
  },
  {
    id: "3",
    value: "West Holland",
  },
];

const cityList = [
  {
    id: "1",
    value: "Amsterdam",
  },
  {
    id: "2",
    value: "London",
  },
  {
    id: "3",
    value: "Madrid",
  },
];

export default function Delivery({ setDelivery }) {
  const [form, setForm] = useState({
    region: {
      id: "1",
      image: "/images/netherlandsFlag.png",
      value: "Nederland",
    },
    fullName: "",
    phoneCode: "",
    phoneNumber: "",
    postCode: "",
    home: "",
    addition: "",
    state: {
      id: "1",
      value: "Noord Holland",
    },
    city: {
      id: "1",
      value: "Amsterdam",
    },
    street: "",
    save: "",
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onChangeInput = (input) => (e) => {
    setForm((form) => ({ ...form, [input]: e.target.value }));
  };
  const selectHandler = (item, type = null) => {
    updateForm({
      [type]: item,
    });
  };
  return (
    <Modal setModal={setDelivery}>
      <div className="modalDelivery">
        <div
          className="modalDelivery__close"
          onClick={() => setDelivery(false)}
        >
          {cancelIcon}
        </div>
        <div className="modalDelivery__inner">
          <h5>Nieuw adres toevoegen</h5>
          <div className="modalDelivery__form">
            <div className="modalDelivery__input">
              <h6 className="xsm">Land/Regio</h6>
              <div className="modalDelivery__input-row">
                <CustomSelect
                  type="region"
                  list={regionList}
                  selected={regionList[0]}
                  onChange={selectHandler}
                />
              </div>
            </div>
            <div className="modalDelivery__input">
              <h6 className="xsm">Persoonlijke gegevens</h6>
              <div className="modalDelivery__input-row">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Naam"
                    value={form.fullName}
                    onChange={onChangeInput("fullName")}
                  />
                </div>
                <div className="input__row">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="+31"
                      maxLength={4}
                      value={form.phoneCode}
                      onChange={onChangeInput("phoneCode")}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Mobiele nummer"
                      value={form.phoneNumber}
                      onChange={onChangeInput("phoneNumber")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modalDelivery__input">
              <h6 className="xsm">Adres</h6>
              <div className="modalDelivery__input-row">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Postcode*"
                    value={form.postCode}
                    onChange={onChangeInput("postCode")}
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Huis nummer"
                    value={form.home}
                    onChange={onChangeInput("home")}
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Toevoeging (optionel)"
                    value={form.addition}
                    onChange={onChangeInput("addition")}
                  />
                </div>
                <CustomSelect
                  type="region"
                  list={stateList}
                  selected={stateList[0]}
                  onChange={selectHandler}
                />
                <CustomSelect
                  type="region"
                  list={cityList}
                  selected={cityList[0]}
                  onChange={selectHandler}
                />
                <div className="input">
                  <input
                    type="text"
                    placeholder="Straatnaam"
                    value={form.street}
                    onChange={onChangeInput("street")}
                  />
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor=""></label>
              <p>Bewaren voor de volgende keer</p>
            </div>
          </div>
          <div className="modalDelivery__btns">
            <button className="button primary">Bevestigen</button>
            <button className="button primary">Annuleren</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
