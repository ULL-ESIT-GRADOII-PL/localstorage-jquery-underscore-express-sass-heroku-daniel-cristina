var expect = chai.expect;


 describe("Calculate CSV", function() {
    it('Debería reconocer una string', function() {
      var entrada = '"producto", "precio"';
      var r = calculate(entrada);
     expect(r[0].value[1]).to.equal('precio');
    });

    it('Debería reconocer un numero con coma', function() {
      var entrada = '"2,7",1,hola';
      var r = calculate(entrada);
     expect(r[0].value[0]).to.equal('2,7');
    });
    
});
