import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;

export const getItems = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

// export const getVisibleContacts = state => {
//   const contacts = getItems(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return  contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// }

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
