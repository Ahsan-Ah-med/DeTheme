jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{variant.id}}"
     */
	   // $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   // });
document.querySelectorAll('#CustomSizeTab input').forEach((ele) => {
  ele.addEventListener("input", function () {
    if (this.value < 0) {
        this.value = 0;
    }
  });
});
  $(document).on("variant:changed", function (evt) {
    // console.log(evt.currentVariant.title);
    if (evt.currentVariant.title.includes('Customised')) {
        document.querySelectorAll('#CustomSizeTab input').forEach((ele) => {
            ele.removeAttribute("disabled");
        });
    } else {
        document.querySelectorAll('#CustomSizeTab input').forEach((ele) => {
            ele.setAttribute("disabled", "disabled");
        });
    };
  });

});