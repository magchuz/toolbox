			function Remove() {
			    String.prototype.trimRight = function() {
			        return this.replace(/\s+$/, '');
			    }
			    let startTime = new Date();
			    let text = document.getElementById("text").value;
			    var replace = text.replace(/^\s*$(?:\r\n?|\n)/gm, "").trimRight();
			    var res = replace.split("\n");

			    x = res.filter(function(value, index, self) {
			        return self.indexOf(value) === index;
			    }).join(',');
                for (i = 0; i <= 2; i++) {
				var replaced = x.toString().replace(/,/g , "\n");
                }
			    document.getElementById("text").value = replaced;
			    let endTime = new Date();
			    let timeDiff = endTime - startTime;
			    console.log('Finished in ' + timeDiff + 'ms');
			}
