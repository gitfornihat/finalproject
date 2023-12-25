const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                }else{
                    sectionsClass.classList.remove('active-link')
                }
    })
}
window.addEventListener('scroll',scrollActive)


const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : 
    scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () =>{
    const header = document.getElementById('header')
   
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


const calculateForm = document.getElementById('calculate-form')
const calculateCm = document.getElementById('calculate-cm')
const calculateKg = document.getElementById('calculate-kg')
const calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
    

    calculateMessage.textContent = 'Fill in the Height and Weight'

    setTimeout(()=>{
        calculateMessage.textContent = ''
    }, 3000)

    } else{
        const cm = calculateCm.value / 100
        const kg = calculateKg.value
        const bmi = Math.round(kg / (cm * cm))

        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are thin😕`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy🙂`
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight😔` 
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBmi)


const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000);
    } else{
        emailjs.sendForm('service_c9c7wp9','template_uvmbdcf','#contact-form','E2QLazDKIIgxKsyAp')
        .then(()=>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000);
        },(error)=>{
            alert('Something has failed, mail was not sent', error)
        })

        contactUser.value = ''
    }
}

contactForm.addEventListener('submit',sendEmail)
