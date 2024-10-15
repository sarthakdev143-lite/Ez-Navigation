document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const slides = document.querySelectorAll('.slide');

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            // Remove active class from all features and slides
            features.forEach(f => f.classList.remove('active'));
            slides.forEach(s => s.classList.remove('active'));

            // Add active class to the clicked feature
            feature.classList.add('active');

            // Show the corresponding slide
            const target = feature.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Activate the default feature
    document.querySelector('.feature.active').click();
});
