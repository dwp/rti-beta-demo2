(function () {
  var nino          = document.querySelector('#input-nino'),
      ninoSearchBtn = document.querySelector('#submit-nino');

  if(ninoSearchBtn) {
    ninoSearchBtn.addEventListener('click', function (e) {
      var verify      = document.querySelector('#verify'),
          setInterest = document.querySelector('#setInterest'),
          ninoForm    = document.querySelector('#form-nino');

      if (nino.value.toLowerCase() === 'ab123456c') {
        verify.className = 'show';
        setInterest.className = 'hide';
      } else {
        setInterest.className ='show';
        verify.className = 'hide';
      }
      e.preventDefault();
    });
  }

})();
