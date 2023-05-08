import React, { useEffect, useState } from 'react';

const ContactList = ({ endPoint, onItemClick }) => {
  const [contact, setContact] = useState([]);
  const [selected, setSelected] = useState(false);

  const getContacts = async () => {
    const response = await fetch(endPoint);
    const contacts = await response.json();
    return contacts;
  };
  useEffect(() => {
    getContacts().then((contacts) => setContact(contacts.results));
  }, []);
  const filterData = async () => {
    console.log(selected);
    if (selected && contact.length > 0) {
      const data = await contact?.filter((item) => Number(item.id) % 2 === 0);
      console.log(data);
      setContact(data);
    }
  };
  useEffect(() => {
    filterData();
  }, [selected]);
  return (
    <div className="contact-list">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {contact?.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.phone}</td>
                <td>{element.phone}</td>
                <td>{element.country.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex align-items-center">
        <label htmlFor="check">Only even</label>
        <input
          onChange={(e) => setSelected(e.target.checked)}
          type="checkbox"
          name=""
          id="check"
        />
      </div>
    </div>
  );
};

export default ContactList;
