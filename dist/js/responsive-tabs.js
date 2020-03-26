// $.fn.responsiveTabs = function() {
//     this.addClass("responsive-tabs"), this.append($('<span class="drop-arrow"></span>')), this.on("click", "li.active > a, span.fa", function() {
//         this.toggleClass("open")
//     }.bind(this)), this.on("click", "li:not(.active) > a", function() {
//         this.removeClass("open")
//     }.bind(this))
// }

$.fn.responsiveTabs = function() {
	this.addClass('responsive-tabs'),
	this.append($('<span class="dropdown-arrow"></span>')),



	this.on("click", "li > a.active, span.dropdown-arrow", function (){
		this.toggleClass('open');
	}.bind(this)), this.on("click", "li > a:not(.active)", function() {
        this.removeClass("open")
    }.bind(this)); 
}  