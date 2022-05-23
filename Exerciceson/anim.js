function anim() {
    // réglages
    tl.pause
    /*tl.fromTo('.etoiles>*', {
        opacity: "random(0.1,1)",
        scale: "random(0.1,1)"
    }, {
        opacity: "random(0.2,1)",
        scale: "random(0.2,2)",
        duration: 1,
        stagger: {
            from: "random",
            amount: 50,
            repeat: 10,
            repeatRefresh: true,
            yoyo: true
        }
    })*/
    let date = new Date();
    let heure = date.getHours();
    let maree = heure
 

    

    tl.set ('#generique',{
        opacity: 0
    },0)
    tl.set('#RB2', {
        opacity: 0
    }, 0)
    tl.set('#RB22', {
        opacity: 0
    }, 0)
    tl.set('#rb3,#rb4,#rb5,#rb6,#rb7', {
        opacity: 0
    }, 0)
    tl.set('#astro2', {
        opacity: 1,
        scale: 7.2,
        x: -1965,
        y: 230,
        rotation: -29
    }, 0)
    tl.set('#tuyau', {
        opacity: 0
    }, 0)
    tl.set('#Reflect', {
        opacity: 0
    }, 0)
    tl.set('#rays',{
        opacity:0
    },0)
    tl.set('#med',{
        opacity:0
    },0)
    tl.set('#tuyau6,#tuyau7,#tuyau8,#tuyau9,#tuyau10,#tuyau11,#tuyau12,#tuyau13,#tuyau14,#tuyau15,#tuyau16,#tuyau17,#tuyau18,#tuyau19,#tuyau20,#tuyau21,#tuyau22,#tuyau23,#tuyau24,#tuyau25,#tuyau26,#tuyau27,#tuyau28,#tuyau29',{
        opacity:0
    },0)
    tl.set('#FLOAT',{
        scale:0.1,
        duration: 0.1,
        transformOrigin: "50% 50%",
    },0)
    tl.set('#hublot',{
        opacity:0,
        transformOrigin: "50% 50%",
    },0)
    tl.set('#rivets',{
        opacity:0,
        transformOrigin: "50% 50%",
    },0)
  
    tl.set('#wave1,#wave2,#wave3,#wave4',{
        opacity:0,
        
    },0)
    tl.to('#FLOAT',{
        scale:1,
        duration: 12,
        transformOrigin: "50% 50%",
        ease: Power3.easeIn, 
    },0)
    tl.to('#RB', {
        x: 250,
        y: 25,
        scale: 2,
        duration: 6,
        ease: "power1.out"
    }, 0)
    tl.to('#RB', {
        x: -300,
        y: 50,
        scale: 3,
        duration: 6,
        ease: "power1.in"
    }, 6)
    tl.to('#RB', {
        x: -140,
        y: 112,
        scale: 1,
        duration: 1,
        ease: "power1.in"
    }, 12)
    tl.set('#RB2', {
        opacity: 1,
        duration:1
    }, 12)
    tl.to("#RB2", {
        duration: 1,
        morphSVG: "#Reflect"
    }, 13);
    tl.set('#RB', {
        opacity: 0
    }, 13)
    tl.set('#RB2', {
        opacity: 0
    }, 14)
    tl.set('#RG1', {
        opacity: 0
    }, 14)
    tl.set('#astro', {
        opacity: 1
    }, 14)
    tl.to('#astro2', {
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 7
    }, 14)
    tl.set('#tuyau', {
        opacity: 1
    }, 21)
    tl.fromTo('#tuyau', {
        drawSVG: '0 1%'
    }, {
        drawSVG: '1% 100%',
        duration: 2,
        ease: "none"
    }, 21)
    tl.to('#tuyau, #astro2, #bg, #etoiles',{
        y:540,
        duration:4
    },23)
    tl.to('#rays',{
        opacity:1,
        duration:3
    },27)
    tl.fromTo('#tuyau2', {
        drawSVG: '0 1%'
    }, {
        drawSVG: '1% 100%',
        duration: 2,
        ease: "none"
    }, 30)
    tl.fromTo('#tuyau3', {
        drawSVG: '0 1%'
    }, {
        drawSVG: '1% 100%',
        duration: 2,
        ease: "none"
    }, 32)
    tl.fromTo('#tuyau4', {
        drawSVG: '0 1%'
    }, {
        drawSVG: '1% 100%',
        duration: 2,
        ease: "none"
    }, 32)
    tl.fromTo('#tuyau5', {
        drawSVG: '0 1%'
    }, {
        drawSVG: '1% 100%',
        duration: 2,
        ease: "none"
    }, 32)
    tl.to('#med',{
        opacity:1,
        duration:1
    },34)
    tl.to('#med,#tuyau2,#tuyau3,#tuyau4',{
        opacity:0,
        duration:4
    },35)
    tl.to('#tuyau6',{
        opacity:1,
        duration:0.5
    },39)
    tl.to('#tuyau7',{
        opacity:1,
        duration:0.5
    },39.5)
    tl.to('#tuyau8',{
        opacity:1,
        duration:0.5
    },40)
    tl.to('#tuyau9',{
        opacity:1,
        duration:0.5
    },40.5)
    tl.to('#tuyau10',{
        opacity:1,
        duration:0.5
    },41)
    tl.to('#tuyau11',{
        opacity:1,
        duration:0.5
    },41.5)
    tl.to('#tuyau12',{
        opacity:1,
        duration:0.5
    },42)
    tl.to('#tuyau13',{
        opacity:1,
        duration:0.5
    },42.5)
    tl.to('#tuyau14',{
        opacity:1,
        duration:0.5
    },43)
    tl.to('#tuyau15',{
        opacity:1,
        duration:0.5
    },43.5)
    tl.to('#tuyau16',{
        opacity:1,
        duration:0.5
    },44)
    tl.to('#tuyau17',{
        opacity:1,
        duration:0.5
    },44.5)
    tl.to('#tuyau18',{
        opacity:1,
        duration:0.5
    },45)
    tl.to('#tuyau19',{
        opacity:1,
        duration:0.5
    },45.5)
    tl.to('#tuyau20',{
        opacity:1,
        duration:0.5
    },46)
    tl.to('#tuyau21',{
        opacity:1,
        duration:0.5
    },46.5)
    tl.to('#tuyau22',{
        opacity:1,
        duration:0.5
    },47)
    tl.to('#tuyau23',{
        opacity:1,
        duration:0.5
    },47.5)
    tl.to('#tuyau24',{
        opacity:1,
        duration:0.5
    },48)
    tl.to('#tuyau25',{
        opacity:1,
        duration:0.5
    },48.5)
    tl.to('#tuyau26',{
        opacity:1,
        duration:0.5
    },49)
    tl.to('#tuyau27',{
        opacity:1,
        duration:0.5
    },49.5)
    tl.to('#tuyau28',{
        opacity:1,
        duration:0.5
    },50)
    tl.to('#tuyau29',{
        opacity:1,
        duration:0.5
    },50.5)
    tl.to('#tuyau5,#tuyau6,#tuyau7,#tuyau8,#tuyau9,#tuyau10,#tuyau11,#tuyau12,#tuyau13,#tuyau14,#tuyau15,#tuyau16,#tuyau17,#tuyau18,#tuyau19,#tuyau20,#tuyau21,#tuyau22,#tuyau23,#tuyau24,#tuyau25,#tuyau26,#tuyau27,#tuyau28,#tuyau29',{
        morphSVG:'#rb4',
        duration:4
    },51.5)
    tl.to('#tuyau5,#tuyau6,#tuyau7,#tuyau8,#tuyau9,#tuyau10,#tuyau11,#tuyau12,#tuyau13,#tuyau14,#tuyau15,#tuyau16,#tuyau17,#tuyau18,#tuyau19,#tuyau20,#tuyau21,#tuyau22,#tuyau23,#tuyau24,#tuyau25,#tuyau26,#tuyau27,#tuyau28,#tuyau29',{
        opacity:0,
        duration:1
    },55.5)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },55.5)
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },55.75)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },56)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },56.25)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },56.5)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },56.75)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },57)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },57.5)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },58.25)
    
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },58.5)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },58.75)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },59)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },59.25)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },59.5)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },59.75)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },60)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },60.25)
    
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },60.5)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },60.75)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },61)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },61.25)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },61.5)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },61.75)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },62)
    tl.to('#rays',{
        opacity:0,
        duration:1
    },62)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },65)
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },65.25)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },65.5)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },65.75)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },66)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },66.25)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },66.5)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },66.75)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },67)
    
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },67.25)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },67.5)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },67.75)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },68)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },68.25)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },68.5)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },68.25)
    tl.to('#rb4',{
        opacity:1,
        duration:1
    },69.25)
    
    tl.to('#rb5',{
        opacity:1,
        duration:1
    },69.5)
    tl.to('#rb6',{
        opacity:1,
        duration:1
    },69.75)
    tl.to('#rb4',{
        opacity:0,
        duration:1
    },70)
    tl.to('#rb7',{
        opacity:1,
        duration:1
    },70.25)
    tl.to('#rb5',{
        opacity:0,
        duration:1
    },70.5)
    tl.to('#rb6',{
        opacity:0,
        duration:1
    },70.75)
    tl.to('#rb7',{
        opacity:0,
        duration:1
    },71)
    tl.to('#RB2',{
        morphSVG:'#RB2',
        opacity:0,
        duration:0
    },71)
    tl.to('#RB2',{
        opacity:1,
        duration:2,
        scale:2,
        ease:"none"
    },74)
    tl.to('#RB2',{
        opacity:0,
        duration:2,
        scale:4,
        ease:"none"
    },76)
    tl.to('#RB22',{
        opacity:0,
        duration:0,
        x:300,
        y:80,
        rotation:225
    },75)
    tl.to('#RB22',{
        opacity:1,
        duration:2,
        scale:2,
        ease:"none"
    },78.75)
    tl.to('#RB22',{
        opacity:0,
        duration:2,
        scale:4,
        ease:"none"
    },80.80)
    tl.to('#RB2',{
        morphSVG:'#RB2',
        opacity:0,
        duration:0
    },82)
    tl.to('#RB2',{
        opacity:1,
        duration:2,
        scale:2,
        ease:"none"
    },83)
    tl.to('#RB2',{
        opacity:0,
        duration:2,
        scale:4,
        ease:"none"
    },85)
    tl.to('#RB22',{
        opacity:0,
        duration:0,
        x:300,
        y:80,
        rotation:225
    },86)
    tl.to('#RB22',{
        opacity:1,
        duration:2.2,
        scale:2,
        ease:"none"
    },87.8)
    tl.to('#RB22',{
        opacity:0,
        duration:2,
        scale:4,
        ease:"none"
    },90)
    tl.to('#vitre',{
        scale:0.27,
        duration:1,
        transformOrigin:"50% 50%"
    },94)
    
    tl.set('#hublot',{
        opacity:1,
        transformOrigin:"50% 50%"
    },94)
    tl.fromTo('#hublot',{
        drawSVG: '0 0.01%'
    }, {
        drawSVG: '0.01% 100%',
        duration: 4,
        ease: "none"
    },96)
    tl.to('#rivets',{
        opacity:1,
        duration:3,
        rotation:360,
        transformOrigin:"50% 50%"
    },100)
    tl.to('#wave1,#wave3',{
        opacity:1,
        duration:0.5
    },101)
    tl.to('#wave2,#wave4',{
        opacity:1,
        duration:0.5
    },101)
    
    tl.to('#wave1,#wave3',{
        duration:12,
        x:-950,
        transformOrigin:"50% 50%",
    },101)
    tl.to('#wave2,#wave4',{
        duration:12,
        x:950,
        transformOrigin:"50% 50%"
    },101)
    tl.to('#wave2,#wave4,#wave1,#wave3',{
        y: 25*maree,
        duration:3
    },109)
    tl.to ('#generique',{
        opacity: 1,
        duration: 4
    },112)
}   