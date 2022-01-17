let count = 0, laptopClick = 0, gitClick = 0, mailClick = 0;

const pop = document.querySelectorAll('.navs i');
const loadSite = document.querySelector('.textInt');
const mailBtn = document.querySelector('.mail');
const codeBtn = document.querySelector('.prog-cont');
const gitBtn = document.querySelector('.git');
const home = document.querySelector('.home a');


pop.forEach(icons => {
    icons.addEventListener('click', (icons) => {
        let item = icons.target;
        if (item.classList.contains('fa-laptop-code')) {
            laptopClick++;
            if (laptopClick % 2 == 0) {
                gsap.fromTo('.prog-cont', { x: '0', y: 0, scale: 1, opacity: 1 }, { x: '-50vw', y: '-50%', scale: 0, opacity: '0' })
               

                loadSite.style.display = 'block';
                item.style.color = 'white' 
                
            } else {
                gsap.fromTo('.prog-cont', { x: '-50vw', y: "-50%", scale: 0, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1 })
                loadSite.style.display = 'none';
                item.style.color = 'red' 

                // loadSite.classList.remove('.textInt');

            }
        }

        else if (item.classList.contains('fa-envelope-open-text')) {
            mailClick++;
            if (mailClick % 2 == 0) {
                gsap.fromTo('.mail', { x: 0, y: 0, scale: 1, opacity: 1 }, { x: '-50vw', y: "-10%", scale: 0, opacity: 0 })
                loadSite.style.display = 'block';
                item.style.color = 'white' 

            } else {
                gsap.fromTo('.mail', { x: '-50vw', y: "-10%", scale: 0, opacity: 0}, { x: 0, y: 0, scale: 1, opacity: 1})
                loadSite.style.display = 'none';
                item.style.color = 'red' 


            }

        }

        else if (item.classList.contains('fa-github')) {
            gitClick++;
            if (gitClick % 2 == 0) {
                gsap.fromTo('.git', { x: 0, y: 0, scale: 1, opacity: 1 }, { x: '-50vw', y: '40%', scale: 0, opacity: 0 });
                loadSite.style.display = 'block';
                item.style.color = 'white' 

                
            } else {
                gsap.fromTo('.git', { x: '-50vw', y: '40%', scale: 0, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1 });
                loadSite.style.display = 'none';
                item.style.color = 'red' 
               

                

            }
        }
    })


})


function socialMediaIcon() {
    const media = document.querySelector('.socialIcons');
    const social = document.querySelector('.social');

    social.addEventListener('click', () => {
        if (!social.classList.contains('active')) {
            count++;

            media.innerHTML = '<i class="fab fa-facebook-f social-logo" ></i> <i class="fab fa-instagram social-logo"></i> <i class="fab fa-twitter social-logo"></i>  <i class="fab fa-youtube social-logo"></i> ';
            StaggerAnimation(count, social);
            social.style.color = 'red' 
            home.style.color = 'white' 
            
            social.classList.add('active');
        } else if (social.classList.contains('active')) {
            count++;
            StaggerAnimation(count, social);
            social.style.color = 'white' 
            home.style.color = 'red' 

            social.classList.remove('active');
        }

    })
}

function StaggerAnimation(count, social) {
    const icons = document.querySelectorAll('.social-logo');
    console.log(count)
    if (count % 2 == 0) {
        gsap.fromTo(icons, .2, { scale: 1.3 }, { scale: 0, stagger: .2 })

    } else {
        gsap.fromTo(icons, .2, { scale: 0 }, { scale: 1.3, stagger: .2 })
        social.style.color = 'white' 

    }

}



socialMediaIcon();