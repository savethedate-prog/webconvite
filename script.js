/* ===================================
   CONTAGEM 1
   CERIMÓNIA
=================================== */

const ceremonyDate =
new Date(2026, 8, 18, 0, 0, 0);
// Desired displayed days (user override without changing actual dates)
const desiredDaysCeremony = 87;


/* ===================================
   CONTAGEM 2
   COPO-D'ÁGUA
=================================== */

const partyDate =
new Date(2026, 8, 19, 0, 0, 0);
const desiredDaysParty = 88;


function updateCountdowns(){

    const now = new Date();


    /* ==========================
       CERIMÓNIA
    ========================== */

    const ceremonyDifference = ceremonyDate - now;

    // Adjust displayed countdown so it shows the desired number of days
    const ceremonyDisplayedDays = Math.floor(ceremonyDifference / (1000 * 60 * 60 * 24));
    const ceremonyAdjustmentMs = (desiredDaysCeremony - ceremonyDisplayedDays) * 24 * 60 * 60 * 1000;
    const adjustedCeremonyDifference = ceremonyDifference + ceremonyAdjustmentMs;

    const days1 = Math.floor(adjustedCeremonyDifference / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((adjustedCeremonyDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((adjustedCeremonyDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((adjustedCeremonyDifference % (1000 * 60)) / 1000);


    document.getElementById("days1")
        .textContent =
        days1 < 0 ? 0 : days1;

    document.getElementById("hours1")
        .textContent =
        hours1 < 0 ? 0 : hours1;

    document.getElementById("minutes1")
        .textContent =
        minutes1 < 0 ? 0 : minutes1;

    document.getElementById("seconds1")
        .textContent =
        seconds1 < 0 ? 0 : seconds1;


    /* ==========================
       COPO-D'ÁGUA
    ========================== */

    const partyDifference = partyDate - now;
    const partyDisplayedDays = Math.floor(partyDifference / (1000 * 60 * 60 * 24));
    const partyAdjustmentMs = (desiredDaysParty - partyDisplayedDays) * 24 * 60 * 60 * 1000;
    const adjustedPartyDifference = partyDifference + partyAdjustmentMs;

    const days2 = Math.floor(adjustedPartyDifference / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((adjustedPartyDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((adjustedPartyDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((adjustedPartyDifference % (1000 * 60)) / 1000);


    document.getElementById("days2")
        .textContent =
        days2 < 0 ? 0 : days2;

    document.getElementById("hours2")
        .textContent =
        hours2 < 0 ? 0 : hours2;

    document.getElementById("minutes2")
        .textContent =
        minutes2 < 0 ? 0 : minutes2;

    document.getElementById("seconds2")
        .textContent =
        seconds2 < 0 ? 0 : seconds2;
}


/* ===================================
   INICIAR CONTAGENS
=================================== */

updateCountdowns();

setInterval(
    updateCountdowns,
    1000
);


/* ===================================
   ENVELOPE INTRO
=================================== */

const waxSeal = document.getElementById("waxSeal");

const envelopeWrapper = 
document.querySelector(".envelope-wrapper");

const envelopeIntro = 
document.getElementById("envelopeIntro");

const bgMusic = 
document.getElementById("bgMusic");


waxSeal.addEventListener("click", () => {


    // abre envelope
    envelopeWrapper.classList.add(
        "envelope-open"
    );


    // selo desaparece suavemente
    waxSeal.style.transform =
    "translate(-50%,-50%) scale(.4)";


    waxSeal.style.opacity = "0";


    // música com fade
    bgMusic.volume = 0;

    bgMusic.play()
    .then(()=>{


        let volume = 0;


        const fade = setInterval(()=>{


            volume += 0.05;


            bgMusic.volume =
            Math.min(volume,0.5);


            if(volume >= 0.5){

                clearInterval(fade);

            }


        },100);


    })
    .catch(()=>{

        console.log(
        "Áudio aguardando interação"
        );

    });



    // remove envelope depois da animação

    setTimeout(()=>{


        envelopeIntro.style.opacity="0";


    },2200);



    setTimeout(()=>{


        envelopeIntro.style.display="none";


    },3000);


});


/* ===================================
   RSVP
=================================== */

const sendButton =
document.getElementById("sendRSVP");


sendButton.addEventListener(
    "click",
    function(){

        const name =
        document
        .getElementById("guestName")
        .value
        .trim();


        const attendance =
        document.querySelector(
            'input[name="attendance"]:checked'
        );


        if(name === ""){

            alert(
                "Por favor, informe o nome."
            );

            return;
        }


        if(!attendance){

            alert(
                "Por favor, selecione uma resposta."
            );

            return;
        }


        const response =
        attendance.value;


        const message =

`Olá Silvio e Ariel!

Nome:
${name}

Resposta:
${response}

Enviado através do Save the Date.`;


        const phone =
        "244998549192";


        const whatsappURL =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        window.location.href = whatsappURL;
    }
);

/*let musicStarted = false;

function startMusicOnce() {
  if (musicStarted) return;

  const audio = document.getElementById("bgMusic");

  audio.volume = 0.5; // volume mais suave
  audio.play().then(() => {
    musicStarted = true;
  }).catch(err => {
    console.log("Autoplay bloqueado até interação:", err);
  });
}

// ativa em qualquer clique na página
document.addEventListener("click", startMusicOnce);*/