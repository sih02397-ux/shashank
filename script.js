document.addEventListener('DOMContentLoaded', () => {
    // Sidebar navigation links ko handle karne ke liye
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Saare active classes remove karein
            navLinks.forEach(link => link.classList.remove('active'));
            // Click kiye gaye link ko active banayein
            this.classList.add('active');
            
            // Yahan par aap page content ko dynamically load kar sakte hain
            console.log(`Navigating to: ${this.querySelector('span').textContent}`);
        });
    });

    // Voice Playback button ke liye functionality
    const voiceButtons = document.querySelectorAll('.voice-playback');
    voiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Voice playback started!');
            // Yahan par aap text-to-speech API call kar sakte hain
        });
    });

    // Baki buttons ke liye bhi yahan functionality add karein
    const readFullDocBtn = document.querySelector('.btn-primary');
    if (readFullDocBtn) {
        readFullDocBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Default link behavior rokein
            alert('Opening full document...');
            // Yahan par document ko naye tab mein kholne ka code likhein
        });
    }
});