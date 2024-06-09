PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
let TIME = 1000
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.one)) {
        basic.showNumber(1)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.two)) {
    	
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.three)) {
    	
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.four)) {
    	
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.five)) {
    	
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.six)) {
    	
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
