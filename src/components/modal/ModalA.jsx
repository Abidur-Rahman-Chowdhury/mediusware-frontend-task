// import React, { useState } from 'react';
// import Modal from 'react-modal';
// // import ContactList from '../contactList/ContactList';

// const ModalA = ({ isOpen, onRequestClose }) => {
//   const [onlyEven, setOnlyEven] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [contacts, setContacts] = useState([]);

//   const loadContacts = (page, searchTerm, onlyEven) => {
//     // Make API call to load contacts based on page, searchTerm and onlyEven
//     // Set the loaded contacts to the state using setContacts
//   }

//   const handleCheckboxChange = (event) => {
//     setOnlyEven(event.target.checked);
//     setPage(1); // Reset page to 1 when checkbox is changed
//     loadContacts(1, searchTerm, event.target.checked);
//   }

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);
//     setPage(1); // Reset page to 1 when search term is changed
//     loadContacts(1, searchTerm, onlyEven);
//   }

//   const handleLoadMore = () => {
//     setPage(page + 1);
//     loadContacts(page + 1, searchTerm, onlyEven);
//   }

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
//       <div className="modal-header">
//         <h2>All Contacts</h2>
//         <button className="modal-close-button" onClick={onRequestClose}>X</button>
//       </div>
//       <div className="modal-body">
//         <div className="search-box">
//           <label>
//             <input type="checkbox" checked={onlyEven} onChange={handleCheckboxChange} />
//             Only even
//           </label>
//           <input type="text" placeholder="Search contacts" value={searchTerm} onChange={handleSearch} />
//         </div>
//         {/* <ContactList contacts={contacts} onItemClick={(contact) => console.log(contact)} /> */}
//         <button className="load-more-button" onClick={handleLoadMore}>Load more</button>
//       </div>
//       <div className="modal-footer">
//         <button className="modal-button" onClick={() => onRequestClose('all')}>All Contacts</button>
//         <button className="modal-button" onClick={() => onRequestClose('us')}>US Contacts</button>
//         <button className="modal-button" onClick={onRequestClose}>Close</button>
//         <label className="modal-checkbox-label">
//           <input type="checkbox" checked={onlyEven} onChange={handleCheckboxChange} />
//           Only even
//         </label>
//       </div>
//     </Modal>
//   );
// }

// export default ModalA;

import React from 'react';
import { ImCross } from 'react-icons/im';
import ContactList from '../contactList/ContactList';

const ModalA = ({ setOpenPopup, setOpenModalB }) => {
    return (
      
        <div className="popup_wrapper">
           
      <div className="popup_content position-relative">
        <ImCross onClick={() => setOpenPopup(false)} className="crossBtn" />
                <div>
                <h1 className='text-center mb-4'>Modal A</h1>
          <div className="d-flex justify-content-center gap-4  ">
            <button
              style={{ backgroundColor: '#46139f', width: '120px' }}
              className=" btn text-white"
            >
              All Contacts
            </button>
            <button
              style={{ backgroundColor: '#ff7f50', width: '120px' }}
                          className=" btn text-white"
                          onClick={() => {
                              setOpenPopup(false)
                              setOpenModalB(true)
                          }}
            >
              US Contacts
            </button>
            <button
              style={{ backgroundColor: '#46139f', width: '120px' }}
                          className="btn  text-white"
                          onClick={()=>setOpenPopup(false)}
            >
              Close
            </button>
          </div>
                    <ContactList endPoint="https://contact.mediusware.com/api/contacts/" />
                    
        </div>
      </div>
    </div>
  );
};

export default ModalA;
