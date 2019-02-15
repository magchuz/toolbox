            function Remove() {
                String.prototype.trimRight = function() {
                    return this.replace(/\s+$/, '');
                }
                let startTime = new Date();
                let text = document.getElementById("text").value;
                var i = 0;
                var replace = text.replace(/^\s*$(?:\r\n?|\n)/gm, "");
                document.getElementById("text").value = replace.trimRight();
                let endTime = new Date();
                let timeDiff = endTime - startTime;
                console.log('Finished in ' + timeDiff + 'ms');
            }
