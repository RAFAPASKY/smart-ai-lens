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
        basic.showNumber(2)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME * 2)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.three)) {
        basic.showNumber(3)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME * 3)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.four)) {
        basic.showNumber(4)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME * 4)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.five)) {
        basic.showNumber(5)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME * 5)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.six)) {
        basic.showNumber(6)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        basic.pause(TIME * 6)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
