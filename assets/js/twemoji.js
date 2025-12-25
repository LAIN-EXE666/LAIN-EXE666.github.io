// Initialize Twemoji to replace all emojis with Twitter-style emojis
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initTwemoji() {
        // Check if twemoji is loaded
        if (typeof twemoji === 'undefined') {
            console.warn('Twemoji library not loaded');
            return;
        }
        
        // Parse emojis in the entire document
        twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg',
            base: 'https://cdn.jsdelivr.net/npm/twemoji@latest/assets/',
            className: 'twemoji',
            // Let the CSS handle the size
            size: null
        });
    }
    
    // Wait for DOM and Twemoji library to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Small delay to ensure twemoji library is loaded
            setTimeout(initTwemoji, 100);
        });
    } else {
        setTimeout(initTwemoji, 100);
    }
})();

