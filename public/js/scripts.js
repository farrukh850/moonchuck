// Top navbar toggle 
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

// What people say Javascrip
$(document).ready(function(){
    $('.slider').slick({
      centerMode: true,
      slidesToShow: 2.2,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      pauseOnHover: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1
          },
        },
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            slidesToShow: 1
        },
        },
        {
          breakpoint: 1300,
          settings: {
            centerMode: false,
            slidesToShow: 2
        },
        }
      ]
    });
  });

// FAQ javascript
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    document.querySelectorAll('[id^="content-"]').forEach((item) => {
      if (item.id !== `content-${id}`) {
        item.classList.add('hidden');
        const otherIcon = document.getElementById(item.id.replace('content-', 'icon-'));
        otherIcon.textContent = '+';
      }
    });
    content.classList.toggle('hidden');
    if (content.classList.contains('hidden')) {
      icon.textContent = '+';
    } else {
      icon.textContent = '×';
    }
}

// Pricing plans Javascript
  const prices = {
    monthly: {
      basic: "$79",
      standard: "$349",
      pro: "$599",
    },
    yearly: {
      basic: "$790", 
      standard: "$3490", 
      pro: "$5990", 
    },
  };
  const basicPrice = document.getElementById("basic-price");
  const basicFrequency = document.getElementById("basic-frequency");
  const standardPrice = document.getElementById("standard-price");
  const standardFrequency = document.getElementById("standard-frequency");
  const proPrice = document.getElementById("pro-price");
  const proFrequency = document.getElementById("pro-frequency");

  const monthlyButton = document.getElementById("monthly-button");
  const yearlyButton = document.getElementById("yearly-button");

  function updatePrices(billing) {
    const isMonthly = billing === "monthly";

    basicPrice.textContent = prices[billing].basic;
    standardPrice.textContent = prices[billing].standard;
    proPrice.textContent = prices[billing].pro;

    basicFrequency.textContent = isMonthly ? "mo" : "yr";
    standardFrequency.textContent = isMonthly ? "mo" : "yr";
    proFrequency.textContent = isMonthly ? "mo" : "yr";

    if (isMonthly) {
      monthlyButton.classList.add("bg-white");
      yearlyButton.classList.remove("bg-white");
    } else {
      yearlyButton.classList.add("bg-white");
      monthlyButton.classList.remove("bg-white");
    }
  }

  updatePrices("monthly");

  monthlyButton.addEventListener("click", () => updatePrices("monthly"));
  yearlyButton.addEventListener("click", () => updatePrices("yearly"));

  // Smooth scroll to section
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });