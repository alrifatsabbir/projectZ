// Loader
function loader() {
    const loader = document.querySelector('.loader_container');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1500);
};

//Refresh Web Page
function refresh(){
    window.location.reload();
}

//Hero Page Resume Download
const downloadResumeButton = document.getElementById('resume_btn_cta');
if (downloadResumeButton) {
    downloadResumeButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '/projectZ/assets/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        const toast = document.createElement('div');
        toast.className = 'toast_for_resume';
        toast.innerText = 'Thank you for downloading my resume.';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
            document.body.removeChild(toast);
            }, 500);
        }, 3000);
    });
}

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
const home = document.getElementById('home');
const heroHeaders = document.querySelectorAll('.hero_article_header, .hero_article_header1');
const heroParagraph = document.querySelector('.hero_article_paragraph');
const typingBar1 = document.querySelector('.typing');
const resumeDownloadBtn = document.getElementById('resume_btn_cta');
const contactHeroBtn = document.getElementById('contact_btn_cta');

toggleSwitch.addEventListener('click', function() {
    if (toggleSwitch.classList.contains('day')) {
        toggleSwitch.classList.remove('day');
        toggleSwitch.classList.add('night');
        body.style.background = 'linear-gradient(90deg, #2C3E50,#0c0c0f)';
        header.style.backgroundColor = '#34495E51';
        logoImage.src = '/projectZ/assets/logo2.png';
        home.style.background = 'linear-gradient(to left,#0c0c0f33, #0c0c0f75), url("/projectZ/assets/hero_bg.jpg") no-repeat center/cover';
        contactSideContainer.style.backgroundColor = '#fdfffd';
        socialSideContainer.style.backgroundColor = '#fdfffd';
        contactIcon.style.color = '#34495E';
        socialIcon.style.color = '#34495E';
        copyRight.style.color = '#ECF0F1';
        resumeDownloadBtn.style.backgroundColor = '#dfddfd';
        resumeDownloadBtn.onmouseover = function (){
            resumeDownloadBtn.style.backgroundColor = 'transparent';
            resumeDownloadBtn.style.color = '#dfddfd';
            resumeDownloadBtn.style.boxShadow = '2px 2px 4px #dfddfd';
            resumeDownloadBtn.style.textShadow = '1px 1px 5px #fddfdd';
        };
        resumeDownloadBtn.onmouseout = function(){
            resumeDownloadBtn.style.backgroundColor = '#dfddfd';
            resumeDownloadBtn.style.color = '#10211f';
            resumeDownloadBtn.style.boxShadow = 'none';
            resumeDownloadBtn.style.textShadow = 'none';
        }
        contactHeroBtn.style.color = '#dfddfd';
        contactHeroBtn.style.border = '1px solid #dfddfd';
        contactHeroBtn.style.boxShadow = '2px 2px 4px #dfddfd';
        contactHeroBtn.onmouseover = function (){
            contactHeroBtn.style.backgroundColor = '#dfddfd';
            contactHeroBtn.style.color = '#10211f';
        }
        contactHeroBtn.onmouseout = function (){
            contactHeroBtn.style.backgroundColor = 'transparent';
            contactHeroBtn.style.color = '#dfddfd';
        }
        navbarLinks.forEach(link => {
            link.style.color = '#ECF0F1';
            link.onmouseover = function() {
                link.style.color = '#F39C12';
                link.style.filter = 'drop-shadow(1px 1px 3px #232)';
            };
            link.onmouseout = function() {
                link.style.color = '#ECF0F1';
                link.style.filter = 'none';
            };
        });

        heroHeaders.forEach(header => {
            header.style.color = '#dfddfd';  
            header.style.textShadow = '1px 1px 5px #F39C12';
        });
        heroParagraph.style.color = '#ddf';
    } else {
        toggleSwitch.classList.remove('night');
        toggleSwitch.classList.add('day');
        body.style.background = 'linear-gradient(90deg, #bdd2af, #fdfffd)';
        header.style.backgroundColor = '#f8f9fa51';
        logoImage.src = '/projectZ/assets/logo1.png';
        contactSideContainer.style.backgroundColor = '#223233';
        socialSideContainer.style.backgroundColor = '#223233';
        contactIcon.style.color = '#fdfffd';
        socialIcon.style.color = '#fdfffd';
        copyRight.style.color = '#000';
        home.style.background = 'linear-gradient(to left, #d3d3d31a, #b1b1b133), url("/projectZ/assets/hero_bg.jpg") no-repeat center/cover';
        resumeDownloadBtn.style.backgroundColor = '#ddffdd';
        resumeDownloadBtn.onmouseover = function (){
            resumeDownloadBtn.style.backgroundColor = 'transparent';
            resumeDownloadBtn.style.color = '#ddffdd';
            resumeDownloadBtn.style.boxShadow = '2px 2px 4px #ddffdd';
            resumeDownloadBtn.style.textShadow = '1px 1px 5px #fddfdd';
        };
        resumeDownloadBtn.onmouseout = function(){
            resumeDownloadBtn.style.backgroundColor = '#ddffdd';
            resumeDownloadBtn.style.color = '#10211f';
            resumeDownloadBtn.style.boxShadow = 'none';
            resumeDownloadBtn.style.textShadow = 'none';
        }
        contactHeroBtn.style.color = '#ddffdd';
        contactHeroBtn.style.border = '1px solid #ddffdd';
        contactHeroBtn.style.boxShadow = '2px 2px 4px #ddffdd';
        contactHeroBtn.onmouseover = function(){
            contactHeroBtn.style.backgroundColor = '#ddffdd';
            contactHeroBtn.style.color = '#10211f';
        }
        contactHeroBtn.onmouseout = function (){
            contactHeroBtn.style.backgroundColor = 'transparent';
            contactHeroBtn.style.color = '#ddffdd';
        }
        navbarLinks.forEach(link => {
            link.style.color = '#322f22';
            link.onmouseover = function() {
                link.style.color = '#007bff';
                link.style.filter = 'drop-shadow(1px 1px 3px #ffd)';

            };
            link.onmouseout = function() {
                link.style.color = '#322f22';
                link.style.filter = 'none';
            }
        });

        heroHeaders.forEach(header => {
            header.style.color = '#fdffdf'; 
            header.style.textShadow = '5px 1px 5px #16bbc783';
        });
        heroParagraph.style.color = '#ddf';
    }
});

