import React from 'react';
import { ImCross } from 'react-icons/im';
import ContactList from '../contactList/ContactList';

const ModalB = ({ setOpenPopup, setOpenModalA }) => {
  return (
    <div className="popup_wrapper">
      <div className="popup_content position-relative">
        <ImCross onClick={() => setOpenPopup(false)} className="crossBtn" />
        <div>
          <h1 className="text-center mb-4">Modal B</h1>
          <div className="d-flex justify-content-center gap-4  ">
            <button
              style={{ backgroundColor: '#46139f', width: '120px' }}
              className=" btn text-white"
              onClick={() => {
                setOpenPopup(false);
                setOpenModalA(true);
              }}
            >
              All Contacts
            </button>
            <button
              style={{ backgroundColor: '#ff7f50', width: '120px' }}
              className=" btn text-white"
            >
              US Contacts
            </button>
            <button
              style={{ backgroundColor: '#46139f', width: '120px' }}
              className="btn  text-white"
              onClick={() => setOpenPopup(false)}
            >
              Close
            </button>
          </div>
          <ContactList endPoint="https://contact.mediusware.com/api/country-contacts/United States/" />
        </div>
      </div>
    </div>
  );
};

export default ModalB;
