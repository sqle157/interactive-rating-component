let selectedRating;
const ratingState = document.querySelector('.rating-state');
const thankState = document.querySelector('.thank-state');
const selected = document.getElementById('selected');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.btn-submit');

ratings.forEach((rating) => handleRatingSelection(rating));

submitBtn.addEventListener('click', handleSubmit);

// Helper function to handle rating selection
function handleRatingSelection(rating) {
	rating.addEventListener('click', (e) => {
		removePreviousTarget();
		selectedRating = e.target.dataset.rating;
		e.target.classList.add('target');
	});
}

// Helper function to handle submit button
function handleSubmit() {
	if (selectedRating) {
		ratingState.style.display = 'none';
		thankState.style.display = 'flex';
		selected.innerText = selectedRating;
	}
}

// Helper function to remove previous selected rating
function removePreviousTarget() {
	ratings.forEach((rating) => {
		if (rating.classList.contains('target')) {
			rating.classList.remove('target');
		}
	});
}
