function searchProduct() {
  const query = document.getElementById('searchInput').value;
  if (query.trim() !== "") {
    alert("Searching for: " + query);
  } else {
    alert("Please enter a product to search.");
  }
}
