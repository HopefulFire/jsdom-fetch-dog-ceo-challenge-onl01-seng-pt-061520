const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function() {
	const imageContainer = document.getElementById('dog-image-container');

	fetch(imgUrl).then(function(response) {
		return response.json();
	}).then(function(json) {
		for (let i = 0; i < json.length; i++) {
			const imgTag = document.createElement('img');
			imgTag.src = json[i];
			imageContainer.appendChild(imgTag);
		}
	})
})