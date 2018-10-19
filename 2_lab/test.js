describe("discont", function() {

    it("test 1", function() {
        assert.equal(discont([50,20, 30, 17, 100], 10), 207.00);
      });
    
      it("test 2", function() {
        assert.equal(discont([1,2,3,4,5,6,7], 100), 15);
      });

      it("test 3", function() {
        assert.equal(discont([1,1,1], 33), 2.67);
      });

      it("test 4", function() {
        assert.equal(discont([7], 100), 7);
      });

      it("test 5", function() {
        assert.equal(discont([7,9], 100), 16);
      });
  
});