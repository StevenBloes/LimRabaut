<script type="text/javascript">
	let index = 0;
	setInterval(action(), 60000); 
	
	function action(){
		if(index == 2){
			index = 0;
		} else {
			index = index + 1;
		}
	}
</script>