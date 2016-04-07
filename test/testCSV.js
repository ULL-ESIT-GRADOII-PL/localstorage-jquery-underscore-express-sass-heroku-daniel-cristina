var expect = chai.expect;




 describe("Calculate CSV", function() {
    it('Debería devolover un string', function() {
        textArea.value = '"Esto", "Devuelve" \n "Un", "String"';
        calculate();
        assert.isString(finaltable.innerHTML);
    });
});
