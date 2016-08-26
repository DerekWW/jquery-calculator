$(function() {

  var holderArray1 = [],
      holderArray2 =[],
      holderArray3= [],
      toString1,
      toString2;

  $('.buttons').click(function(event) {
    if ((event.target.id) !== 'butt' && (event.target.id) !== 'clear' && (event.target.id) !== 'equals') {
      if ($('#screen').text() === 'ERROR') {

      }else{
      holderArray1.push($(event.target).text());
      toString1 = holderArray1.join('');
      $('#screen').text(toString1);
      }
    }
  });

  $('#equals').click(function(event) {
    holderArray3 = [];
    holderArray2.push(toString1.indexOf('+'));
    holderArray2.push(toString1.indexOf('-'));
    holderArray2.push(toString1.indexOf('x'));
    holderArray2.push(toString1.indexOf('÷'));
    holderArray2.push(toString1.lastIndexOf('+'));
    holderArray2.push(toString1.lastIndexOf('-'));
    holderArray2.push(toString1.lastIndexOf('x'));
    holderArray2.push(toString1.lastIndexOf('÷'));

    for (var i = 0; i < holderArray2.length; i++) {
      if (holderArray2[i] >= 0) {
        holderArray3.push(holderArray2[i]);
      }
    }

    if (holderArray3[0] !== holderArray3[1] || holderArray3[0] === 0){
      toString1 = 'ERROR';
      $('#screen').text(toString1);
    }else {
      toString2 = $('#screen').text();
      toString2 = toString2.replace('x', "*");
      toString2 = toString2.replace('÷', "/");
      if(toString2[(toString2.length - 1)] === '+' || toString2[(toString2.length - 1)] === '-' || toString2[(toString2.length - 1)] === '/' || toString2[(toString2.length - 1)] === '*' ) {
        toString1 = 'ERROR';
      }else{
        toString2 = eval(toString2);
        if (toString2 === Infinity || toString2 === NaN || toString2 === undefined) {
          toString1 = 'ERROR';
        }else {
          toString1 = parseFloat(toString2);
        }
      }
      $('#screen').text(toString1);
      toString2 = toString1;
      holderArray1 = [toString1];
    }
  });

  $('#clear').click(function(event) {
    holderArray1 = [];
    toString2 = '';
    toString1 = '';
    holderArray2 = [];
    $('#screen').text('');
  });
});
