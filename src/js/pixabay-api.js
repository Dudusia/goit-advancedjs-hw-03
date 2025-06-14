export const fetchImagesByQuery = searchedQuery => {
  const apiKey = '50853777-8fecba6f69a77bb52efd7171d';
  const apiUrl = 'https://us-central1-dev-test-448809.cloudfunctions.net/pixabayProxy/';
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${apiUrl}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
