'use strict';

var Peaks = require('../../src/main.js');

describe('Peaks.time', function() {
  var sandbox, p;

  beforeEach(function beforeEach(done) {
    sandbox = sinon.sandbox.create();

    p = Peaks.init({
      container: document.getElementById('waveform-visualiser-container'),
      mediaElement: document.querySelector('audio'),
      dataUri: {
        json: 'base/test_data/sample.json'
      },
      keyboard: true,
      height: 240
    });

    p.on('segments.ready', done);
  });

  afterEach(function() {
    p.destroy();
    sandbox.restore();
  });

  describe.skip('getCurrentTime', function() {
    var newTime = 6.0;

    it('should return the actual value of the audio element', function() {
      expect(p.player.getCurrentTime()).to.equal(0);
    });

    // @see https://github.com/bbc/peaks.js/issues/9
    // @see https://github.com/bbc/peaks.js/issues/12
    // For some reason, the event is not emitted during the tests
    it('should return an updated time if it has been modified through the audio element', function(done) {
      p.on('player_seek', function(currentTime) {
        expect(p.player.getCurrentTime()).to.equal(newTime);
        expect(currentTime).to.equal(newTime);
        done();
      });

      document.querySelector('audio').currentTime = newTime;
    });
  });

  describe.skip('seek', function() {
    var newTime = 6.0;

    it('should change the currentTime value of the audio element', function() {
      p.player.seek(newTime);

      expect(p.player.getCurrentTime()).to.equal(newTime);
    });
  });
});