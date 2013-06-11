/*
SimpleCounters by AlexKex
v.1.0 released on GitHub 12.06.2013
*/

function Counter() {
	this.name = "default-cnt"; // имя счетчика
	this.field = "body"; // родительское поле, на которое счетчик навешивается
	this.max_l = 0; // длина поля
}

Counter.prototype.show = function (selector) {
    if(selector === undefined)
        {
            return false;
        }

    this.name = selector + "-counter";
    this.field = selector;
    this.max_l = $("#"+selector).attr("maxlength");

    var value = this.max_l - $('#'+this.field).val().length; // текущее значение

    if(!this.max_l)
    {
        return this;
    }


    if($('.counter').length > 0)
    {
        /* singleton */
        if($('.counter').attr("id") != this.name)
            {
                ('.counter').destroy();
            }
        $("#"+this.name+"-span").html(value);
    }
    else
    {
        $("#"+this.field).parent().append("<div id='"+this.name+"' class='counter'><span class='counter-span' id='" + this.name + "-span'></div>");

        if(this.max_l)
        {
        	$(".counter").css("left", $("#"+this.field).css("width"));
        	$(".counter").css("top", $("#"+this.field).offset().top+10);
            $("#"+this.name+"-span").append(value);
        }
    }

    return this;
};

Counter.prototype.destroy = function(){
    $("#"+this.name).remove();
    return false;
}