			function Hashtags() {
			    String.prototype.trimRight = function() {
			        return this.replace(/\s+$/, '');
			    }
			    let startTime = new Date();
			    let text = document.getElementById("text").value;
                var replace = text.replace(/^\s*$(?:\r\n?|\n)/gm, "").trimRight();				
				
				var array = replace.split("\n");
				
				for(var i=0;i<array.length;i++){
                     array[i]="#"+array[i];
                }
				var x = array.toString().replace(/,/g , "\n").replace(/ /g,"_");
			    document.getElementById("text").value = x;
			    let endTime = new Date();
			    let timeDiff = endTime - startTime;
			    console.log('Finished in ' + timeDiff + 'ms');
			}     
