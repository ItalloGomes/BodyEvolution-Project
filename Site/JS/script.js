

window.setInterval(() => { mudaBackground() }, 5000)

var n = 1;

function mudaBackground(){

    if(n < 4){
        
        // console.log('entrou 1')
        
        document.getElementById('containerSlider').style.backgroundImage = `URL(../IMGS/slider/back${n}.jpg)`
        n++;
        
    }else{

        // console.log('entrou 2')
        
        n = 1;
        document.getElementById('containerSlider').style.backgroundImage = `URL(../IMGS/slider/back${n}.jpg)`
        n++;
    
    }

}