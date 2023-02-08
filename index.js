function getPilihanKomputer(){
const comp = Math.random();
if (comp < 0.34) return 'batu';
if (comp >= 0.34 && comp < 0.67) return 'gunting';
return 'kertas';
}

function getHasil(comp, player){
    if (player == comp) return "Seri Yaa Bos!";
    if  (player == "gunting") return (comp == "kertas")? " Horee Kamu Menang!" : " Yahh Kamu Kalah..";
    if (player == "kertas") return (comp == "gunting")? " Yahh Kamu Kalah.." : "Horee Kamu Menang!";
    if (player == "batu") return (comp == "kertas")? " Yahh Kamu Kalah.." : "Horee Kamu Menang!";
}

function putar (){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['batu','gunting','kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        } 
    imgKomputer.setAttribute('src','img/' + gambar[i++] + '.png');
    if (i == gambar.length) i=0;
    }, 100)
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const Hasil = getHasil(pilihanKomputer,pilihanPlayer);

        putar ();

        setTimeout (function(){
            const imgKomputer = document.querySelector ('.img-komputer');
            imgKomputer.setAttribute ('src', 'img/' + pilihanKomputer + '.png');
  
      const info = document.querySelector('.info');
      info.innerHTML = Hasil;
        },1000)
    

         

    })

})

//pake ini juga bisa 

// const pGajah = document.querySelector ('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const Hasil = getHasil(pilihanKomputer,pilihanPlayer);
    

//     const imgKomputer = document.querySelector ('.img-komputer');
//     imgKomputer.setAttribute ('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });

// const pOrang = document.querySelector ('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const Hasil = getHasil(pilihanKomputer,pilihanPlayer);
    

//     const imgKomputer = document.querySelector ('.img-komputer');
//     imgKomputer.setAttribute ('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });

// const pSemut = document.querySelector ('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const Hasil = getHasil(pilihanKomputer,pilihanPlayer);
    

//     const imgKomputer = document.querySelector ('.img-komputer');
//     imgKomputer.setAttribute ('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });
