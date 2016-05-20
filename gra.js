var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {preload: preload, create: create, update: update});

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('paddle', 'assets/paddle.png');
	game.load.image('ball', 'assets/ball.png');
	game.load.image('brick', 'assets/brick0.png');
}

var bricks;
var paddle;
var ball;
var bop;

function create(){

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.checkCollision.down = false;

	game.add.sprite(0, 0, 'sky');
	
	paddle = game.add.sprite(game.world.centerX,500,'paddle');
	game.physics.enable(paddle);
	


	bricks=game.add.group();
	bricks.enableBody = true;
	bricks.physicsBodyType = Phaser.Physics.ARCADE;

	var cegua;

	for (var y=0; y<4; y++){
		for (var x=0; x<15; x++){
			cegua = bricks.create(120 +(x*36), 100+(y*52),'brick');
			cegua.body.immovable = true;
		}
	}



}

function update(){

	paddle.x = game.input.x-(paddle.width/2);
    if (paddle.x < 24)
    {
        paddle.x = 24;
    }
    else if (paddle.x > game.width - 24)
    {
        paddle.x = game.width - 24;
    }


}