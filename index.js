function displayResults(results) {
  searchResults.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
      return;
  }

  const query = searchInput.value.toLowerCase();
  results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');

      // Highlight matching text in the title
      const highlightedTitle = result.title.replace(
          new RegExp(query, 'gi'),
          match => `<span class="highlight">${match}</span>`
      );

      // Highlight matching text in the description
      const highlightedDescription = result.description.replace(
          new RegExp(query, 'gi'),
          match => `<span class="highlight">${match}</span>`
      );

      resultItem.innerHTML = `
          <h3>${highlightedTitle}</h3>
          <p>${highlightedDescription}</p>
      `;
      searchResults.appendChild(resultItem);
  });
}
<script src="script.js?v=1.2"></script>
