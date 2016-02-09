function validate( el ) {
  if (el.hasAttribute( 'pattern' )) {
      return new RegExp( '^(?:' + el.getAttribute( 'pattern' ) + ')$' ).test( el.value );
  } else {
      return null;
  }
}

var contentEvent = function(event){
    if (this.value.length > 0) {
        if ( validate(this) === true) {
            this.classList.add('has-success');
            this.classList.remove('has-error');
        } else if (validate(this) === false){
            this.classList.add('has-error');
            this.classList.remove('has-success');
        } else {
            this.classList.add('notEmpty');
            this.classList.remove('has-success');
            this.classList.remove('has-error');
        }
        this.classList.remove('isEmpty');
    } else {
        this.classList.add('isEmpty');
        this.classList.remove('has-success');
        this.classList.remove('has-error');
        this.classList.remove('notEmpty');
    }
}
var inputs = document.querySelectorAll('.input-field>input[type=text]:not([required]');
for (var index in inputs) {
    var input = inputs[index];
    if (inputs.hasOwnProperty(index)) {
        input.addEventListener("blur",contentEvent)
    }
}

var inputs = document.querySelectorAll('.input-field>input[type=text]');
for (var index in inputs) {
    var input = inputs[index];
    if (inputs.hasOwnProperty(index)) {
        if( !this.getAttribute("success")) {
            this.setAttribute("success", "right")
        }
        if( !this.getAttribute("error")) {
            this.setAttribute("error", "wrong")
        }
    }
}
