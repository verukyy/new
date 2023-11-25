function searchPasswords() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = ''; // Wyczyść wyniki poprzedniego wyszukiwania

  // Pobierz hasła z pliku hasla.js
  const passwords = [
    { nazwa: "VerukyyBroswer - przegladarka internetowa", sciezka: "verukyybroser/" },
    { nazwa: "VerukyyCode - Program do pisania kodów", sciezka: "verukyycode/" },
    { nazwa: "Nowosci - Nowości i informacje ", sciezka: "news-and-info/" },

    // Dodaj więcej haseł z pliku hasla.js
  ];

  const matchingPasswords = passwords.filter(password => password.nazwa.toLowerCase().includes(searchInput));

  if (matchingPasswords.length === 0) {
    searchResults.innerHTML = "Brak pasujących haseł.";
  } else {
    matchingPasswords.forEach(password => {
      const resultItem = document.createElement("div");
      resultItem.innerHTML = `<a href="${password.sciezka}">${password.nazwa}</a>`;
      searchResults.appendChild(resultItem);
    });
  }
}
