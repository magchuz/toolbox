            function Remove() {
                String.prototype.trimRight = function() {
                    return this.replace(/\s+$/, '');
                }
                let startTime = new Date();
                let text = document.getElementById("text").value;
                let delimiter = document.getElementById("delimit").value;
				
                var i = 0;
                var replace = text.replace(/^\s*$(?:\r\n?|\n)/gm, "");
                var delimit = replace.replace(/\n/gm, delimiter);
                document.getElementById("text").value = delimit.trimRight();
                let endTime = new Date();
                let timeDiff = endTime - startTime;
                console.log('Finished in ' + timeDiff + 'ms');
            }
