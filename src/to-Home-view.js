export const toHomeView = () => `
<div id="home">
  <h1></h1>
  <div class="home-content">
    <p>Welcome to Folk Club Biad! Here you can enjoy:</p>
    
      <p>Bulgarian Pop-folk Music!</p>
      <p>Serbian Pop-folk Music!</p>
      <p>Greek Pop-folk Music!</p>
    
    <p>Relax and listen to one of the best Balkan Hits!</p>
  </div>
</div>
`;

export const toSearchView = (artists, searchTerm) => `
<div class="search-heading"><h1>Songs found for: ${searchTerm}</h1></div><br>
<div id="search-content">
    ${gifs.data.map(gif => `
    <div class="search-item">
        <img class="gif" data-gif-id="${gif.id}" src="${gif.images.downsized_medium.url}">
    </div>`).join('\n') || '<p>Search for something</p>'}
</div>
`;