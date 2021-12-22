var expect = require('chai').expect;
//Test Suite
describe('checkForShip ', function () {

    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    //test spec
    it('should correctly report no ship at a given players coordinate', function () {
        player = {
            ships: [{
                locations: [
                    [0, 0]
                ]
            }]
        }
        expect(checkForShip(player, [9, 9])).to.be.false;
    })
    //test spec
    it('should correctly report ship at a given players coordinate', function () {
        player = {
            ships: [{
                locations: [
                    [0, 0]
                ]
            }]
        }
        expect(checkForShip(player, [0, 0])).to.be.true;

    })
    //test spec
    it('should handle ships at more than one coordinate', function () {
        player = {
            ships: [{
                locations: [
                    [0, 0],
                    [0, 1]
                ]
            }]
        }
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;

    })
    //test spec
    it('should handle checking multiple ships', function () {
        player = {
            ships: [{
                locations: [
                    [0, 0],
                    [0, 1]
                ]
            },
            {
                locations: [
                    [1, 0],
                    [1, 1]
                ]
            },
            {
                locations: [
                    [2, 0],
                    [2, 1]
                ]
            }]
        }
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [2, 0])).to.be.true;
        expect(checkForShip(player, [2, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;

    })

})

describe('damageShip', function (){
    var damageShip = require('../game_logic/ship_methods').damageShip;
    it('should register damage on a ship on a given location',function(){
      var ship ={
        locations:[[0,0]],
        damage: []
      }
     damageShip(ship,[0,0])
     expect(ship.damage).to.not.be.empty
     expect(ship.damage[0]).to.deep.equal([0,0])
  
    })

})