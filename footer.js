// Footer 

document.addEventListener("DOMContentLoaded", function () {
    // Create the footer content
    const footerContent = `
      <div class="footer-container">
          <div>
            <p id="popup-trigger">disclaimer</p>
            <div id="popup" class="popup">
              <p>The contents on this ‘website’ are for educational purposes only. The creators and operators of this website make no warranties, express or implied, regarding the accuracy, currency, or completeness of the information provided on the website. They shall not be held responsible for any errors or omissions, or for any actions taken based on the information provided on this website.</p>
              <button class="popup-close" onclick="closePopup()">Close</button>
            </div>     
            <p><a href="../about-temp2.html">about</a> </p>   
            <p><a href="../contribute.html">contribute</a> </p>
            <p><a href="">say hi👋</a> </p>
          </div>
          <div class="footer-beta">
            <p>thisisatestversion</p>
          </div>
      </div>
    `;
  
    // Get the footer element by ID and insert the content
    const footerElement = document.getElementById("footer");
    footerElement.innerHTML = footerContent;
  });
  
  // Function to close the popup
function closePopup() {
    const popupElement = document.getElementById("popup");
    popupElement.style.display = "none";
  }