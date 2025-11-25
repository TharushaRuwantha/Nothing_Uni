# Nothing University - BSc (Hons) in Nothing
## Programme Launch Countdown

A elegant countdown timer website for the launch of Nothing University's groundbreaking BSc (Hons) in Nothing programme on **February 1st, 2026**.

## Features

### 🎨 Design
- **Harvard-Inspired Aesthetic**: Sophisticated maroon (#A51C30) and white color scheme
- **University Shield**: Custom-designed seal with "VERITAS" and "NIHIL" Latin mottos
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Professional Typography**: Classic serif fonts for academic elegance

### ⏱️ Countdown Timer
- Real-time countdown to February 1st, 2026
- Displays: Days, Hours, Minutes, and Seconds
- Automatic update every second
- Beautiful animated countdown boxes with hover effects

### 🎬 Loading Screen
- Professional loading animation (2.5 seconds)
- University shield display
- Smooth fade-in transition to main content

### ✨ Interactive Elements
- "Notify Me" button for email notifications
- "Learn More" button with programme details
- Smooth entrance animations for all elements
- Subtle floating background elements
- Hover effects on countdown timer and buttons

## File Structure

```
Nothing_Uni/
├── index.html          # Main HTML structure
├── styles.css          # Harvard-inspired styling
├── script.js           # Countdown logic and animations
├── Logo1.png           # University logo (transparent PNG)
└── README.md           # This file
```

## Setup Instructions

1. **Logo Already Included**: The `Logo1.png` file is included in the repository
   - The logo should be a PNG file with a transparent background
   - Recommended size: 300x300px or larger (maintains quality)
   - The logo will be displayed in two places:
     - Loading screen (180px width on desktop)
     - Header (150px width on desktop)
   - Smaller sizes on mobile devices for optimal responsiveness

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Advanced styling with gradients, animations, and flexbox
- **JavaScript (Vanilla)**: Countdown logic, loading screen, and dynamic animations

## How to Use

1. **Open the page**: Simply open `index.html` in any modern web browser (logo is already included)
2. **Experience**: The loading screen will appear for 2.5 seconds with your logo
3. **Countdown**: The timer will automatically start counting down to Feb 1st, 2026
4. **Interact**: Try the "Notify Me" and "Learn More" buttons

## Customization

### Change Target Date
Edit the target date in `script.js`:
```javascript
const targetDate = new Date('2026-02-01T00:00:00').getTime();
```

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --maroon: #A51C30;
    --white: #FFFFFF;
    --gold: #C4A04A;
    /* ... other colors */
}
```

### Adjust Loading Time
Modify the timeout in `script.js`:
```javascript
setTimeout(() => {
    loadingScreen.classList.add('hidden');
    mainContent.classList.add('visible');
}, 2500); // Change this value (in milliseconds)
```

### Change Logo Size
Adjust logo dimensions in `styles.css`:
```css
.loading-logo {
    width: 180px; /* Change loading screen logo size */
}

.header-logo {
    width: 150px; /* Change header logo size */
}
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## Credits

**Designed for Nothing University**
- Latin Motto: "Veritas ex Nihilo" (Truth from Nothing)
- Inspired by the timeless elegance of Harvard University's visual identity
- Color Palette: Harvard Crimson adapted to maroon (#A51C30)

## License

© 2026 Nothing University. All rights reserved.

---

*"Where Nothing Becomes Everything"*
