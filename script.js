// Loader
function loader() {
    const loader = document.querySelector('.loader_container');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
};

//social links
const socialSideContainer = document.querySelector('.social_side_container');
const socialLinks = document.querySelector('.social_links');
const socialIcon = document.querySelector('.social_side_container i');

socialSideContainer.addEventListener('click', function() {
    if (socialLinks.style.display === 'flex') {
        socialLinks.style.display = 'none';
        socialIcon.classList.remove('fa-times');
        socialIcon.classList.add('fa-th');
    } else {
        socialLinks.style.display = 'flex';
        socialIcon.classList.remove('fa-th');
        socialIcon.classList.add('fa-times');
    }
});

//contact links
const contactSideContainer = document.querySelector('.contact_side_container');
const contactLinks = document.querySelector('.contact_me_links');
const contactIcon = document.querySelector('.contact_side_container i');

contactSideContainer.addEventListener('click', function() {
    if (contactLinks.style.display === 'flex') {
        contactLinks.style.display = 'none';
        contactIcon.classList.remove('fa-times');
        contactIcon.classList.add('fa-comment');
    } else {
        contactLinks.style.display = 'flex';
        contactIcon.classList.remove('fa-comment');
        contactIcon.classList.add('fa-times');
    }
});





//Toggle Switch
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;
const header = document.querySelector('.header_container');
const logoImage = document.querySelector('.logo_image');
const navbarLinks = document.querySelectorAll('.navbar_link');
const copyRight = document.querySelector('.copyright');
const temporary = document.querySelector('.temporary');

toggleSwitch.addEventListener('click', function() {
    if (toggleSwitch.classList.contains('day')) {
        toggleSwitch.classList.remove('day');
        toggleSwitch.classList.add('night');
        body.style.backgroundColor = '#2C3E50';
        header.style.backgroundColor = '#34495E51';
        logoImage.src = ' /assets/test2.1.png';
        contactSideContainer.style.backgroundColor = '#fdfffd';
        socialSideContainer.style.backgroundColor = '#fdfffd';
        contactIcon.style.color = '#34495E';
        socialIcon.style.color = '#34495E';
        copyRight.style.color = '#ECF0F1';
        temporary.style.color = '#ECF0F1';
        navbarLinks.forEach(link => {
            link.style.color = '#ECF0F1';
            link.onmouseover = function() {
                link.style.color = '#F39C12';
            };
            link.onmouseout = function() {
                link.style.color = '#ECF0F1';
            };
        });
    } else {
        toggleSwitch.classList.remove('night');
        toggleSwitch.classList.add('day');
        body.style.backgroundColor = '#bdd2af';
        header.style.backgroundColor = '#f8f9fa51';
        logoImage.src = '/assets/test2.2.png';
        contactSideContainer.style.backgroundColor = '#223233';
        socialSideContainer.style.backgroundColor = '#223233';
        contactIcon.style.color = '#fdfffd';
        socialIcon.style.color = '#fdfffd';
        copyRight.style.color = '#000';
        temporary.style.color = '#100111';
        navbarLinks.forEach(link => {
            link.style.color = '#322f22';
            link.onmouseover = function() {
                link.style.color = '#007bff';
            };
            link.onmouseout = function() {
                link.style.color = '#322f22';
            }
        });
    }
});
