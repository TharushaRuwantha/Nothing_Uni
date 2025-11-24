// Countdown Timer for February 1st, 2026
document.addEventListener('DOMContentLoaded', function() {
    // Set target date to February 1st, 2026 at midnight
    const targetDate = new Date('2026-02-01T00:00:00').getTime();

    // Loading Screen Logic
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Simulate loading time (2-3 seconds)
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 2500);

    // Countdown Timer Logic
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM elements
        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Check if countdown has ended
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = `
                <div class="countdown-ended">
                    <h2 style="color: var(--maroon); font-size: 48px; text-align: center;">
                        The Programme Has Launched!
                    </h2>
                    <p style="color: var(--medium-gray); font-size: 24px; text-align: center; margin-top: 20px;">
                        Welcome to the BSc (Hons) in Nothing
                    </p>
                </div>
            `;
        }
    }

    // Initial call
    updateCountdown();

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Button Event Listeners
    const notifyBtn = document.getElementById('notify-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');

    notifyBtn.addEventListener('click', function() {
        const email = prompt('Enter your email address to receive notifications about the BSc (Hons) in Nothing:');
        if (email) {
            // In a real implementation, this would send the email to a server
            alert(`Thank you! We'll notify ${email} when applications open.`);
        }
    });

    learnMoreBtn.addEventListener('click', function() {
        // In a real implementation, this would navigate to a detailed programme page
        alert('Programme Details:\n\n' +
              '• Duration: 3-4 years full-time\n' +
              '• Entry Requirements: Nothing but determination\n' +
              '• Career Prospects: Everything and Nothing\n' +
              '• Modules: Philosophy of Absence, Quantum Void Studies, The Art of Non-Being\n\n' +
              'Full prospectus coming February 1st, 2026!');
    });

    // Add smooth scroll animation for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add entrance animations for countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 2800 + (index * 150));
    });

    // Add fade-in animation for program description
    const programDescription = document.querySelector('.program-description');
    if (programDescription) {
        programDescription.style.opacity = '0';
        programDescription.style.transform = 'translateY(20px)';
        setTimeout(() => {
            programDescription.style.transition = 'all 0.8s ease';
            programDescription.style.opacity = '1';
            programDescription.style.transform = 'translateY(0)';
        }, 3500);
    }

    // Add fade-in animation for buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        setTimeout(() => {
            button.style.transition = 'all 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 3800 + (index * 200));
    });
});

// Add a subtle background animation
function createFloatingElements() {
    const main = document.querySelector('main');
    if (!main) return;

    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.background = 'rgba(165, 28, 48, 0.05)';
        circle.style.pointerEvents = 'none';

        const size = Math.random() * 200 + 50;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';

        circle.style.left = Math.random() * 100 + '%';
        circle.style.top = Math.random() * 100 + '%';

        circle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;

        main.appendChild(circle);
    }
}

// CSS animation for floating elements
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.03;
        }
        50% {
            transform: translate(50px, 50px) scale(1.1);
            opacity: 0.08;
        }
    }

    main {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Initialize floating elements after a delay
setTimeout(createFloatingElements, 3000);
