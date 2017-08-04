$(document).ready(function() {
	$("#queren").click(function() {
		if($("#world").val() != '') {
			$("#result").removeClass("result_err")
			$("#result").addClass("result")
			$("#result").html("<p>md5：" + $.md5($("#world").val()) + "</p>");
			$("#result").append("<p>sha1：" + $.sha1($("#world").val()) + "</p>");
		} else {
			$("#result").removeClass("result")
			$("#result").addClass("result_err")
			$("#result").html("<p>请输入内容！</p>")
		}

	});
});