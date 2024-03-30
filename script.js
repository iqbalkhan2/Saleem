





function downloadFile() {
  var link = document.createElement('a');
  link.href = '"C:\Users\Admin\Music\Saleem Boss\html-css-js-website-smooth-scroll-master\index.html"'; 
  link.download = 'index.html'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


//Deal of the Day


const deals = [
  "$100 One Lesson half hour on the raod half in  class Training",
  "$200 Five Lesson Two lesson on the Road three in class Training!",
  "$500 Five Lesson on the road!",
  "$1000 Ten Lesson on the road in class Training!",
  "$1500 Full Course on the road in class training."
];

// Function to pick a random deal
function pickRandomDeal() {
  return deals[Math.floor(Math.random() * deals.length)];
}

// Function to display a deal card
function displayDeal(deal) {
  const dealContainer = document.getElementById('dealContainer');
  const dealCard = document.createElement('div');
  dealCard.classList.add('deal-card');
  const dealContent = document.createElement('div');
  dealContent.classList.add('deal-content');
  dealContent.innerText = deal;
  dealCard.appendChild(dealContent);
  dealContainer.innerHTML = ''; // Clear previous deal
  dealContainer.appendChild(dealCard);
}

document.getElementById('submitButton').addEventListener('click', function() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  if (!phoneNumber.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
  }
  const deal = pickRandomDeal();
  displayDeal(deal);
  sendPhoneNumber(phoneNumber);
});

function sendPhoneNumber(phoneNumber) {
  Email.send({
      SecureToken: "YourSecureTokenHere",
      To: 'recipient@example.com',
      From: 'your_email@example.com',
      Subject: 'New Phone Number for Deal of the Day',
      Body: 'Phone Number: ' + phoneNumber
  }).then(
      message => console.log(message)
  );
}






function openSignup() {
  document.getElementById("signupContainer").style.right = "0"; 
}

function closeSignup() {
  document.getElementById("signupContainer").style.right = "-300px"; 
}


let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.getElementsByClassName('review-slide');
  const dots = document.getElementsByClassName('slider-dot');

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  showSlide(slideIndex += n);
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



  function makeCall() {
    window.location.href = 'tel:+16477395426';
  }




  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const fullName = document.getElementById("fullName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const packageSelected = document.getElementById("packageSelected").value;
    const lessonTime = document.getElementById("lessonTime").value;
    const emailAddress = document.getElementById("emailAddress").value;

    const emailBody = `
        Full Name: ${fullName}
        Mobile Number: ${mobileNumber}
        Package Selected: ${packageSelected}
        Lesson Time: ${lessonTime}
        Email Address: ${emailAddress}
    `;

    // Send email
    const mailtoLink = `mailto:iqbalkhan2@yahoo.com?subject=Registration Details&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    // Display confirmation message and redirect after 3 seconds
    alert('Email sent. Redirecting to home page...');
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'home.html' with the URL of your home page
    }, 3000); // 3000 milliseconds = 3 seconds
});


// Reviews


