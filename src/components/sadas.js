const validate = (contactData) => {
  if (!contactData.name) {
    return "Musisz podać imię";
  } else if (contactData.name.lenght > 2) {
    return "Imię jest za krótkie";
  }
  if (!contactData.lastName) {
    return "Musisz podać nazwisko";
  } else if (contactData.lastName.lenght > 2) {
    return "Nazwisko jest za krótkie";
  }
  if (!contactData.email) {
    return "Email jest wymagany";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)
  ) {
    return "Zły email";
  }
  if (!contactData.phone) {
    return "Numer telefonu jest wymagany";
  } else if (9 > contactData.phone.lenght || contactData.phone.lenght < 12) {
    return "Niepoprawny numer telefonu";
  }
  if (!contactData.guest) {
    return "Wybór klienta jest wymagany";
  }
  if (!contactData.category) {
    return "Wybór kategorii jest wymagany";
  }
  if (!contactData.subject) {
    return "Wybór tematu jest wymagany";
  }
  if (!contactData.message) {
    return "Wiadomość jest wymagana";
  }
  return;
};
