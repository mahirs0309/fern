// Script to add a floating "Build with Fern" button and handle theme-based styling
window.addEventListener('load', function() {
  try {
    // Function to get theme-based colors based on CSS variables
    function getThemeColors() {
      const isDarkMode = document.documentElement.classList.contains('dark');
      const root = document.documentElement;
      const style = getComputedStyle(root);
      
      // Try to get CSS variables first
      let bgColor, textColor, hoverBgColor;
      
      if (isDarkMode) {
        bgColor = style.getPropertyValue('--translucent-bg').trim() || 'rgba(91, 185, 140, 0.2)';
        textColor = style.getPropertyValue('--text-color').trim() || '#5bb98c';
        hoverBgColor = style.getPropertyValue('--translucent-hover').trim() || 'rgba(91, 185, 140, 0.3)';
      } else {
        bgColor = style.getPropertyValue('--translucent-bg').trim() || 'rgba(23, 65, 40, 0.15)';
        textColor = style.getPropertyValue('--text-color').trim() || '#174128';
        hoverBgColor = style.getPropertyValue('--translucent-hover').trim() || 'rgba(23, 65, 40, 0.25)';
      }
      
      // If CSS variables don't work (fallback)
      if (!bgColor || bgColor === '') {
        bgColor = isDarkMode ? 'rgba(91, 185, 140, 0.2)' : 'rgba(23, 65, 40, 0.15)';
        textColor = isDarkMode ? '#5bb98c' : '#174128';
        hoverBgColor = isDarkMode ? 'rgba(91, 185, 140, 0.3)' : 'rgba(23, 65, 40, 0.25)';
      }
      
      return { bgColor, textColor, hoverBgColor };
    }
    
    // Get initial theme colors
    const { bgColor, textColor, hoverBgColor } = getThemeColors();
    
    // Create floating button with theme-based styles
    const button = document.createElement('a');
    button.id = 'build-with-fern-button';
    button.href = 'https://buildwithfern.com';
    button.target = '_blank';
    button.style.position = 'fixed';
    button.style.bottom = '30px';
    button.style.right = '30px';
    button.style.width = 'auto';
    button.style.height = 'auto';
    button.style.padding = '12px 20px';
    button.style.borderRadius = '12px';
    button.style.backgroundColor = bgColor;
    button.style.color = textColor;
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    button.style.zIndex = '9999';
    button.style.textDecoration = 'none';
    button.style.transition = 'all 0.3s ease';
    button.style.fontSize = '14px';
    button.style.fontWeight = 'bold';
    button.innerText = 'Build with Fern';
    
    // Add hover effects
    button.onmouseover = function() {
      this.style.backgroundColor = hoverBgColor;
      this.style.transform = 'scale(1.05)';
    };
    
    button.onmouseout = function() {
      this.style.backgroundColor = bgColor;
      this.style.transform = 'scale(1)';
    };
    
    // Add to document
    document.body.appendChild(button);
    
    // Mark home page for special styling
    if (window.location.pathname === '/' || window.location.pathname === '') {
      document.body.classList.add('home-page');
      
      // Style API Reference buttons on home page
      const styleApiReferenceButtons = () => {
        // Find API Reference buttons by context and text
        const apiButtons = document.querySelectorAll('.content-container a');
        
        apiButtons.forEach(function(btn) {
          if (btn.textContent && 
              btn.textContent.includes('View API Reference') && 
              !btn.closest('.pagination-nav') && 
              !btn.closest('nav') && 
              !btn.closest('aside')) {
            
            const { bgColor, textColor, hoverBgColor } = getThemeColors();
            
            // Apply theme-based styling
            btn.style.backgroundColor = bgColor;
            btn.style.color = textColor;
            btn.style.borderColor = 'transparent';
            
            // Add hover events
            btn.addEventListener('mouseover', function() {
              this.style.backgroundColor = hoverBgColor;
            });
            
            btn.addEventListener('mouseout', function() {
              this.style.backgroundColor = bgColor;
            });
          }
        });
      };
      
      // Initial styling after a short delay to ensure DOM is ready
      setTimeout(styleApiReferenceButtons, 500);
    }
    
    // Listen for theme changes to update button styling
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class' && 
            mutation.target === document.documentElement) {
          
          const { bgColor, textColor, hoverBgColor } = getThemeColors();
          
          // Update floating button
          if (button) {
            button.style.backgroundColor = bgColor;
            button.style.color = textColor;
            button.onmouseover = function() {
              this.style.backgroundColor = hoverBgColor;
              this.style.transform = 'scale(1.05)';
            };
            button.onmouseout = function() {
              this.style.backgroundColor = bgColor;
              this.style.transform = 'scale(1)';
            };
          }
          
          // Also update any API Reference buttons on home page
          if (document.body.classList.contains('home-page')) {
            const apiButtons = document.querySelectorAll('.content-container a');
            
            apiButtons.forEach(function(btn) {
              if (btn.textContent && 
                  btn.textContent.includes('View API Reference') && 
                  !btn.closest('.pagination-nav') && 
                  !btn.closest('nav') && 
                  !btn.closest('aside')) {
                
                btn.style.backgroundColor = bgColor;
                btn.style.color = textColor;
                
                // Re-add event listeners
                btn.onmouseover = function() {
                  this.style.backgroundColor = hoverBgColor;
                };
                btn.onmouseout = function() {
                  this.style.backgroundColor = bgColor;
                };
              }
            });
          }
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
  } catch (e) {
    console.error('Error in Fern custom script:', e);
  }
}); 