//Business logic:
var add = function(num1, num2) {
 return num1 + num2;
};

var subtract = function(num1, num2) {
 return num1 - num2;
};

var multiply = function(num1, num2) {
 return num1 * num2;
};

var divide = function(num1, num2) {
 return num1 / num2;
};

//UI logic:

// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var num1 = parseInt($("#add1").val());
//     var num2 = parseInt($("#add2").val());
//     var result = add(num1, num2);
//     $("#output").text(result);
//   });

$(document).ready(function() {
  $("button#add").click(function() {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = add(num1, num2)
    $("#output").text(result);
  });
  $("button#subtract").click(function() {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = subtract(num1, num2)
    $("#output").text(result);
  });
  $("button#multiply").click(function() {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = multiply(num1, num2)
    $("#output").text(result);
  });
  $("button#divide").click(function() {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = divide(num1, num2)
    $("#output").text(result);
  });
});
