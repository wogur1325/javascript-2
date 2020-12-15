/// 인텔리 센스 동작을 위한 코드
/// <reference path="../lib/p5.global-mode.d.ts" />

let fontD2Coding ;
let fontD2CodingBold ;

function preload()
{
    //fontD2Coding        = loadFont( "../fonts/D2Coding-Ver1.3.2-20180524.ttf" );
    //fontD2CodingBold    = loadFont( "../fonts/D2CodingBold-Ver1.3.2-20180524.ttf" );
}

function setup()
{
    createCanvas( 640, 320 );
    console.log("setup()호출됨");

    //textFont( fontD2Coding );
    textSize( 32 );
}

function draw()
{
    background( 96, 96, 96 );

    //textFont( fontD2Coding );
    textSize( 16 );
    fill( 255, 255, 0 );
    text( "안녕하세요", mouseX, mouseY );

    //textFont( fontD2CodingBold );
    textSize( 16 );
    fill( 0, 255, 255 );
    text( "안녕하세요", mouseX, mouseY + 24 );
}


