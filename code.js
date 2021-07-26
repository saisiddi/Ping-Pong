var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ad71164b-1e5c-4b19-a4e8-d3eefc3a1aca","a8dec20b-3832-441c-9eb3-6900733d84f4","61dbbd8d-4c1a-42d7-82b9-98098f0c7024","377d998b-2572-4de2-a6e7-7b99c8c15183"],"propsByKey":{"ad71164b-1e5c-4b19-a4e8-d3eefc3a1aca":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"a8dec20b-3832-441c-9eb3-6900733d84f4":{"name":"playerPaddle","sourceUrl":"assets/api/v1/animation-library/gamelab/qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD/category_people/kid_15_walking.png","frameSize":{"x":217,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qlB4XRMjWhG4H3chPaxZHMsKo.lkG4KD/category_people/kid_15_walking.png"},"61dbbd8d-4c1a-42d7-82b9-98098f0c7024":{"name":"computerPaddle","sourceUrl":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png","frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png"},"377d998b-2572-4de2-a6e7-7b99c8c15183":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"8OaOft.PCCn8JfALcmaAgKgxIDP5.7lQ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/377d998b-2572-4de2-a6e7-7b99c8c15183.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200);
background.setAnimation("background");
var playerPaddle= createSprite(355,200,10,100);
playerPaddle.setAnimation("playerPaddle");
playerPaddle.scale=.3
playerPaddle.shapeColor="black";
var computerPaddle= createSprite(35,200,10,100);
computerPaddle.setAnimation("computerPaddle");
computerPaddle.scale=.4
computerPaddle.shapeColor="black";
var ball= createSprite(200,200,10,10);
ball.setAnimation("ball");
ball.scale=.1
ball.shapeColor="black";
ball.velocityX=5;
ball.velocityX=-5;
ball.velocityY=5;
ball.velocityY=-5;
function draw() {
if (ball.isTouching(computerPaddle)||ball.isTouching(playerPaddle)) {
playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
}
if (keyDown("up")) {
playerPaddle.y=playerPaddle.y-10;
}
if (keyDown("down")) {
playerPaddle.y=playerPaddle.y+10;
}
computerPaddle.y=ball.y+10
createEdgeSprites();
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(playerPaddle);
ball.bounceOff(computerPaddle);
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
