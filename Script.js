document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Curtain Preloader with Multi-Language Words
  // ==========================================
  const words = ["HELLO", "नमस्ते", "CIAO", "HOLA", "BONJOUR"];
  const wordElement = document.getElementById("loader-word");
  const preloader = document.getElementById("preloader");
  let wordIndex = 0;

  const wordInterval = setInterval(() => {
    wordIndex++;
    if (wordIndex < words.length) {
      wordElement.innerText = words[wordIndex];
    } else {
      clearInterval(wordInterval);
      // कर्टेन ऊपर स्लाइड होने वाला इफ़ेक्ट
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 300);
    }
  }, 220);

  // ==========================================
  // 2. Expandable Work Cards Interactivity
  // ==========================================
  const workCards = document.querySelectorAll(".work-card");

  workCards.forEach((card) => {
    card.addEventListener("click", () => {
      // पहले से एक्टिव कार्ड से क्लास हटाएं
      workCards.forEach((c) => c.classList.remove("active"));
      // चुने हुए कार्ड को एक्टिव बनाएं
      card.classList.add("active");
    });
  });

  // ==========================================
  // 3. Services Accordion
  // ==========================================
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // सभी अकॉर्डियन बंद करें
      accordionItems.forEach((acc) => acc.classList.remove("active"));

      // अगर बंद था, तो खोलें
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // ==========================================
  // 4. Experience Hover Floating Image Preview
  // ==========================================
  const expRows = document.querySelectorAll(".exp-row");
  const popup = document.getElementById("hover-image-popup");
  const popupImg = document.getElementById("popup-img");

  expRows.forEach((row) => {
    row.addEventListener("mouseenter", (e) => {
      const imgSrc = row.getAttribute("data-preview");
      if (imgSrc) {
        popupImg.src = imgSrc;
        popup.style.opacity = "1";
        popup.style.transform = "translate(-50%, -50%) scale(1)";
      }
    });

    row.addEventListener("mousemove", (e) => {
      // माउस कर्सर के साथ पॉपअप मूव कराना
      popup.style.left = `${e.clientX}px`;
      popup.style.top = `${e.clientY}px`;
    });

    row.addEventListener("mouseleave", () => {
      popup.style.opacity = "0";
      popup.style.transform = "translate(-50%, -50%) scale(0.8)";
    });
  });
});
