$(document).ready(function(){ 

let blackboard={};
blackboard.quotes=['You are awesome', 'You are amazing', 'Keep at it!', 'Succcess is 99 percent failure- Soichiro Honda','I am a slow walker, but I never walk back.- Abraham Lincoln', 'I have not failed. I\'ve just found 10,000 ways that won\'t work.- Thomas Edison','A cheerful heart is good medicine.- Proverbs 17:22','Through patience a ruler can be persuaded, and a gentle tongue can break a bone.- Proverbs 25:15'];

$('#quote').hide();

blackboard.askQuote= function() {

    let randomQuote= Math.random();
    let quoteArray= randomQuote * this.quotes.length;
    let roundedNumber= Math.floor(quoteArray);
    let chosenQuote= this.quotes[roundedNumber];
    $('#quote').text(chosenQuote);
}


let onClick= function() {
    blackboard.askQuote();
    $('#quote').fadeIn(1000);

    setTimeout(
        function(){
            $('#quote').fadeOut(5000)},8000);
        

    setTimeout(
        function(){
              $('#picture').attr('src', 'img/flowers.png');
        }, 9000);

    setTimeout(
        function(){
            $('#picture').attr('src', 'img/blackboard.png');
        }, 15000);
    
    }
   
    $('#quoteButton').click(onClick);



});